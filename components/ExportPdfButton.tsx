"use client";

import { Download, FileDown, Loader2 } from "lucide-react";
import { ButtonHTMLAttributes, useState } from "react";
import { cn } from "@/lib/utils";
import { toJpeg } from 'html-to-image';
import { jsPDF } from "jspdf";

const PDF_EXPORT_WIDTH = 1360;

interface ExportPdfButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: "floating" | "default";
}

export function ExportPdfButton({ className, variant = "floating", ...props }: ExportPdfButtonProps) {
  const [isExporting, setIsExporting] = useState(false);

  const waitForImage = (src: string) =>
    new Promise<HTMLImageElement>((resolve, reject) => {
      const image = new Image();
      image.onload = () => resolve(image);
      image.onerror = () => reject(new Error("Could not prepare the resume image."));
      image.src = src;
    });

  const handleExport = async () => {
    const resumeElement =
      document.querySelector<HTMLElement>("[data-resume-export-root]") ??
      document.body;

    const previousInlineStyles = {
      width: resumeElement.style.width,
      minWidth: resumeElement.style.minWidth,
      maxWidth: resumeElement.style.maxWidth,
      colorScheme: resumeElement.style.colorScheme,
    };
    const previousExportState = resumeElement.dataset.pdfExporting;
    const temporaryStyleBackups = new Map<HTMLElement, string>();

    const overrideStyles = (
      elements: Iterable<HTMLElement>,
      styles: Record<string, string>,
    ) => {
      for (const element of elements) {
        if (!temporaryStyleBackups.has(element)) {
          temporaryStyleBackups.set(element, element.style.cssText);
        }
        for (const [property, value] of Object.entries(styles)) {
          element.style.setProperty(property, value, "important");
        }
      }
    };

    try {
      setIsExporting(true);

      await document.fonts.ready;

      // The reference PDF uses the desktop two-column resume layout at 1360px.
      // Holding that width keeps its margins and page breaks consistent.
      resumeElement.style.width = `${PDF_EXPORT_WIDTH}px`;
      resumeElement.style.minWidth = `${PDF_EXPORT_WIDTH}px`;
      resumeElement.style.maxWidth = `${PDF_EXPORT_WIDTH}px`;
      resumeElement.style.colorScheme = "light";
      resumeElement.dataset.pdfExporting = "true";

      // html-to-image captures computed dark-mode colors. Apply temporary
      // inline light-theme values so the PDF always matches the supplied
      // recruiter-friendly reference, regardless of system appearance.
      overrideStyles([resumeElement], { "background-color": "#f3f4f6" });
      if (resumeElement.firstElementChild instanceof HTMLElement) {
        overrideStyles([resumeElement.firstElementChild], {
          "background-color": "#ffffff",
        });
      }

      const content = resumeElement.querySelector<HTMLElement>("main");
      if (content) {
        overrideStyles([content], {
          "background-color": "#ffffff",
          color: "#1e293b",
        });
        overrideStyles(content.querySelectorAll<HTMLElement>("h2"), {
          color: "#0f172a",
          "border-color": "#e2e8f0",
        });
        overrideStyles(content.querySelectorAll<HTMLElement>("h3"), {
          color: "#1e293b",
        });
        overrideStyles(content.querySelectorAll<HTMLElement>("p, li"), {
          color: "#475569",
        });
        overrideStyles(content.querySelectorAll<HTMLElement>("a"), {
          color: "#2563eb",
        });
        overrideStyles(
          content.querySelectorAll<HTMLElement>(
            '[class*="bg-slate-100"], [class*="dark:bg-slate-900"]',
          ),
          { "background-color": "#f1f5f9", color: "#64748b" },
        );
        overrideStyles(
          content.querySelectorAll<HTMLElement>(
            '[class*="border-slate-200"], [class*="dark:border-slate-800"]',
          ),
          { "border-color": "#e2e8f0" },
        );
      }
      await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));

      const exportHeight = resumeElement.scrollHeight;
      const rootRect = resumeElement.getBoundingClientRect();
      const rootTop = rootRect.top;
      const card = resumeElement.firstElementChild;
      const sidebar = resumeElement.querySelector<HTMLElement>("aside");
      const cardRect = card?.getBoundingClientRect();
      const sidebarRect = sidebar?.getBoundingClientRect();
      const exportColumns =
        cardRect && sidebarRect
          ? {
              cardLeft: cardRect.left - rootRect.left,
              sidebarRight: sidebarRect.right - rootRect.left,
              cardRight: cardRect.right - rootRect.left,
            }
          : null;
      const semanticBreaks = Array.from(
        resumeElement.querySelectorAll<HTMLElement>("[data-pdf-break-before]"),
        (element) => element.getBoundingClientRect().top - rootTop,
      ).filter((position) => position > 0);

      const dataUrl = await toJpeg(resumeElement, {
        width: PDF_EXPORT_WIDTH,
        height: exportHeight,
        pixelRatio: 1.5,
        quality: 0.94,
        backgroundColor: "#ffffff",
        filter: (node) =>
          !(node instanceof HTMLElement && node.dataset.pdfIgnore === "true"),
      });

      const image = await waitForImage(dataUrl);
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "pt",
        format: "letter",
        compress: true,
      });

      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const margin = 28;
      const printableWidth = pageWidth - margin * 2;
      const printableHeight = pageHeight - margin * 2;
      const sourcePageHeight = Math.round(
        image.naturalWidth * (printableHeight / printableWidth),
      );
      const imageScale = image.naturalWidth / PDF_EXPORT_WIDTH;
      const semanticBreaksInPixels = semanticBreaks
        .map((position) => Math.round(position * imageScale))
        .sort((a, b) => a - b);
      const pageBoundaries = [0];

      while (
        image.naturalHeight - pageBoundaries[pageBoundaries.length - 1] >
        sourcePageHeight
      ) {
        const pageStart = pageBoundaries[pageBoundaries.length - 1];
        const targetBreak = pageStart + sourcePageHeight;
        const earliestUsefulBreak = pageStart + sourcePageHeight * 0.72;
        const semanticBreak = semanticBreaksInPixels
          .filter(
            (position) =>
              position > earliestUsefulBreak && position <= targetBreak,
          )
          .at(-1);

        pageBoundaries.push(semanticBreak ?? targetBreak);
      }
      pageBoundaries.push(image.naturalHeight);

      const pageCanvas = document.createElement("canvas");
      pageCanvas.width = image.naturalWidth;
      pageCanvas.height = sourcePageHeight;
      const context = pageCanvas.getContext("2d");

      if (!context) {
        throw new Error("Your browser could not create the PDF canvas.");
      }

      for (let pageIndex = 0; pageIndex < pageBoundaries.length - 1; pageIndex += 1) {
        if (pageIndex > 0) pdf.addPage("letter", "portrait");

        const sourceY = pageBoundaries[pageIndex];
        const sliceHeight = pageBoundaries[pageIndex + 1] - sourceY;
        const isLastPage = pageIndex === pageBoundaries.length - 2;

        context.clearRect(0, 0, pageCanvas.width, pageCanvas.height);
        context.fillStyle = "#ffffff";
        context.fillRect(0, 0, pageCanvas.width, pageCanvas.height);
        context.drawImage(
          image,
          0,
          sourceY,
          image.naturalWidth,
          sliceHeight,
          0,
          0,
          image.naturalWidth,
          sliceHeight,
        );

        // Continue the page backgrounds to the footer margin when a semantic
        // break is slightly earlier than the mathematical page boundary.
        if (!isLastPage && sliceHeight < sourcePageHeight) {
          const fillHeight = sourcePageHeight - sliceHeight;
          context.fillStyle = "#f3f4f6";
          context.fillRect(0, sliceHeight, image.naturalWidth, fillHeight);

          if (exportColumns) {
            const cardLeft = Math.round(exportColumns.cardLeft * imageScale);
            const sidebarRight = Math.round(exportColumns.sidebarRight * imageScale);
            const cardRight = Math.round(exportColumns.cardRight * imageScale);

            context.fillStyle = "#0f172a";
            context.fillRect(
              cardLeft,
              sliceHeight,
              sidebarRight - cardLeft,
              fillHeight,
            );
            context.fillStyle = "#ffffff";
            context.fillRect(
              sidebarRight,
              sliceHeight,
              cardRight - sidebarRight,
              fillHeight,
            );
          }
        }

        const pageImage = pageCanvas.toDataURL("image/jpeg", 0.92);
        pdf.addImage(
          pageImage,
          "JPEG",
          margin,
          margin,
          printableWidth,
          printableHeight,
          undefined,
          "FAST",
        );
      }

      pdf.setProperties({
        title: "Rajesh Nasit - Senior Full-Stack & Mobile Developer",
        subject: "Professional resume",
        author: "Rajesh Nasit",
        creator: "Rajesh Nasit Portfolio",
      });
      pdf.save("Rajesh-Nasit-Resume.pdf");
    } catch (error) {
      console.error('Export failed:', error);
      alert('PDF export failed. Please try a different browser.');
    } finally {
      for (const [element, cssText] of temporaryStyleBackups) {
        element.style.cssText = cssText;
      }
      resumeElement.style.width = previousInlineStyles.width;
      resumeElement.style.minWidth = previousInlineStyles.minWidth;
      resumeElement.style.maxWidth = previousInlineStyles.maxWidth;
      resumeElement.style.colorScheme = previousInlineStyles.colorScheme;
      if (previousExportState === undefined) {
        delete resumeElement.dataset.pdfExporting;
      } else {
        resumeElement.dataset.pdfExporting = previousExportState;
      }
      setIsExporting(false);
    }
  };

  if (variant === "default") {
     return (
      <button
        onClick={handleExport}
        disabled={isExporting}
        data-pdf-ignore="true"
        className={cn(
          "flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90 transition-colors print:hidden",
          className
        )}
        {...props}
      >
        {isExporting ? <Loader2 className="w-4 h-4 animate-spin" /> : <FileDown className="w-4 h-4" />}
        {isExporting ? "Creating PDF..." : "Download PDF"}
      </button>
    );
  }

  return (
      <button
        onClick={handleExport}
        disabled={isExporting}
        data-pdf-ignore="true"
        className={cn(
          "fixed top-2 right-8 z-50 p-4 bg-primary text-white rounded-full shadow-lg hover:bg-primary/90 hover:scale-105 transition-all print:hidden flex items-center justify-center",
          className
        )}
        title={isExporting ? "Creating PDF..." : "Download PDF"}
        aria-label={isExporting ? "Creating PDF" : "Download resume as PDF"}
        {...props}
      >
        {isExporting ? <Loader2 className="w-6 h-6 animate-spin" /> : <Download className="w-6 h-6" />}
      </button>
  );
}
