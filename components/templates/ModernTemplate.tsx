"use client";

import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { ExportPdfButton } from "@/components/ExportPdfButton";

export function ModernTemplate() {
  return (
    <div className="min-h-screen bg-background text-foreground scroll-smooth animate-in fade-in duration-500">
      <Hero />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      
      <footer className="py-8 text-center text-sm text-muted-foreground text-gray-400">
        <p>© {new Date().getFullYear()} {process.env.NEXT_PUBLIC_NAME || "Portfolio"}. All rights reserved.</p>
      </footer>
      <ExportPdfButton />
    </div>
  );
}
