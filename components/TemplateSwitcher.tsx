"use client";

import { Layout, FileText, Palette } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface TemplateSwitcherProps {
  currentTemplate: string;
  onTemplateChange: (template: string) => void;
}

export function TemplateSwitcher({ currentTemplate, onTemplateChange }: TemplateSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);

  const templates = [
    { id: "modern", name: "Modern", icon: Layout },
    { id: "classic", name: "Classic", icon: FileText },
    { id: "tabbar", name: "Tab Bar", icon: Palette },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 p-2 rounded-xl shadow-2xl flex flex-col gap-1 mb-2"
          >
            <div className="px-2 py-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
              Select Template
            </div>
            {templates.map((t) => (
              <button
                key={t.id}
                onClick={() => {
                  onTemplateChange(t.id);
                  setIsOpen(false);
                }}
                className={cn(
                  "flex items-center gap-3 px-4 py-2 text-sm font-medium rounded-lg transition-colors w-full text-left",
                  currentTemplate === t.id
                    ? "bg-primary text-primary-foreground text-white bg-blue-600"
                    : "hover:bg-gray-100 dark:hover:bg-zinc-800 text-gray-700 dark:text-gray-200"
                )}
              >
                <t.icon className="w-4 h-4" />
                {t.name}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="h-12 w-12 rounded-full bg-slate-900 text-white dark:bg-white dark:text-black shadow-xl flex items-center justify-center hover:scale-105 transition-transform active:scale-95"
        aria-label="Switch Template"
      >
        <Palette className="w-5 h-5" />
      </button>
    </div>
  );
}
