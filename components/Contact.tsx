"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import { Mail, Phone, MapPin } from "lucide-react";
import { LocationLink } from "@/components/LocationLink";
import { EmailOptionsModal } from "@/components/EmailOptionsModal";

export function Contact() {
  const { email, phone, location } = resumeData.personalInfo;
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);

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
          Interested in discussing a project or opportunity? I&apos;m always open to new challenges and collaborations.
        </p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
             <button
              onClick={() => setIsEmailModalOpen(true)}
              className="inline-flex items-center gap-2 bg-foreground text-background dark:bg-white dark:text-black px-6 py-3 rounded-full font-medium text-lg hover:opacity-90 transition-opacity"
            >
              <Mail className="w-5 h-5" />
              <span>Say Hello</span>
            </button>
            
            <a
              href={`tel:${phone}`}
              className="inline-flex items-center gap-2 bg-white dark:bg-zinc-800 text-foreground px-6 py-3 rounded-full font-medium text-lg border border-gray-200 dark:border-zinc-700 hover:bg-gray-50 dark:hover:bg-zinc-700 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>Call Me</span>
            </a>

            <div 
              onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`, '_blank')}
              className="inline-flex items-center gap-2 bg-white dark:bg-zinc-800 text-foreground px-6 py-3 rounded-full font-medium text-lg border border-gray-200 dark:border-zinc-700 hover:bg-gray-50 dark:hover:bg-zinc-700 transition-colors cursor-pointer"
            >
              <MapPin className="w-5 h-5" />
              <LocationLink location={location} />
            </div>
          </div>
        </motion.div>
      </motion.div>
      <EmailOptionsModal 
        isOpen={isEmailModalOpen} 
        onClose={() => setIsEmailModalOpen(false)} 
        email={email} 
      />
    </section>
  );
}
