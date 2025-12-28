"use client";

import { Download, Loader2, Image as ImageIcon } from "lucide-react";
import { ButtonHTMLAttributes, useState } from "react";
import { cn } from "@/lib/utils";
import { toJpeg } from 'html-to-image';

interface ExportPdfButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: "floating" | "default";
}

export function ExportPdfButton({ className, variant = "floating", ...props }: ExportPdfButtonProps) {
  const [isExporting, setIsExporting] = useState(false);

  const handleExport = async () => {
    try {
      setIsExporting(true);
      
      const element = document.body;
      const themeBackgroundColor = window.getComputedStyle(document.body).backgroundColor;

      const dataUrl = await toJpeg(element, { 
        quality: 0.95, 
        backgroundColor: themeBackgroundColor,
        style: {
           backgroundColor: themeBackgroundColor
        }
      });

      const link = document.createElement('a');
      link.download = `${process.env.NEXT_PUBLIC_NAME || "resume"}-portfolio.jpg`;
      link.href = dataUrl;
      link.click();
      
    } catch (error) {
      console.error('Export failed:', error);
      alert('Export failed. Please try a different browser.');
    } finally {
      setIsExporting(false);
    }
  };

  if (variant === "default") {
     return (
      <button
        onClick={handleExport}
        disabled={isExporting}
        className={cn(
          "flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90 transition-colors print:hidden",
          className
        )}
        {...props}
      >
        {isExporting ? <Loader2 className="w-4 h-4 animate-spin" /> : <ImageIcon className="w-4 h-4" />}
        Download as Image
      </button>
    );
  }

  return (
      <button
        onClick={handleExport}
        disabled={isExporting}
        className={cn(
          "fixed top-2 right-8 z-50 p-4 bg-primary text-white rounded-full shadow-lg hover:bg-primary/90 hover:scale-105 transition-all print:hidden flex items-center justify-center",
          className
        )}
        title="Download as Image"
        {...props}
      >
        {isExporting ? <Loader2 className="w-6 h-6 animate-spin" /> : <Download className="w-6 h-6" />}
      </button>
  );
}
