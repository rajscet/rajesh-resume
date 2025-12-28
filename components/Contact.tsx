"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import { Mail, ArrowRight } from "lucide-react";

export function Contact() {
  const { email } = resumeData.personalInfo;

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-primary/5 dark:bg-primary/10 rounded-3xl p-8 sm:p-16 text-center space-y-8"
      >
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Let's Work Together</h2>
        <p className="text-muted-foreground text-gray-500 max-w-2xl mx-auto text-lg">
          Interested in discussing a project or opportunity? I'm always open to new challenges and collaborations.
        </p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block"
        >
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center gap-2 bg-foreground text-background dark:bg-white dark:text-black px-8 py-4 rounded-full font-medium text-lg hover:opacity-90 transition-opacity"
          >
            <Mail className="w-5 h-5" />
            <span>Say Hello</span>
            <ArrowRight className="w-5 h-5 ml-1" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
