"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Github, Linkedin, ArrowDown, Code2, CircleUser } from "lucide-react";
import { resumeData } from "@/data/resume";

export function Hero() {
  const { name, title, summary, location, email, phone, linkedin, github } = resumeData.personalInfo;

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative pt-20 pb-32 overflow-hidden bg-background px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[14px_24px]"></div>
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px] dark:bg-fuchsia-900"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl w-full text-center space-y-8"
      >
        <div className="flex justify-center">
          <div className="h-32 w-32 sm:h-40 sm:w-40 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl mb-4">
             {/* eslint-disable-next-line @next/next/no-img-element */}
             <img src="/profile.jpeg" alt={name} className="h-full w-full object-cover" />
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-medium text-primary/80 tracking-wide text-gray-500 dark:text-gray-400">
            {title}
          </h2>
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-foreground">
            {name}
          </h1>
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground text-gray-600 dark:text-gray-300 leading-relaxed">
            {summary}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-sm sm:text-base text-gray-600 dark:text-gray-400">
          <div className="flex items-center gap-2 hover:text-foreground transition-colors">
            <MapPin className="w-4 h-4" />
            <span>{location}</span>
          </div>
          <a href={`mailto:${email}`} className="flex items-center gap-2 hover:text-foreground transition-colors">
            <Mail className="w-4 h-4" />
            <span>{email}</span>
          </a>
          <div className="flex items-center gap-2 hover:text-foreground transition-colors">
            <Phone className="w-4 h-4" />
            <span>{phone}</span>
          </div>
        </div>

        <div className="flex justify-center gap-4 pt-4">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors border border-gray-200 dark:border-gray-800"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
          )}
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors border border-gray-200 dark:border-gray-800"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          )}
          {resumeData.personalInfo.upwork && (
            <a
              href={resumeData.personalInfo.upwork}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors border border-gray-200 dark:border-gray-800 text-[#14a800]"
              aria-label="Upwork"
            >
              <CircleUser className="w-6 h-6" />
            </a>
          )}
          {resumeData.personalInfo.stackoverflow && (
            <a
              href={resumeData.personalInfo.stackoverflow}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors border border-gray-200 dark:border-gray-800 text-[#f48024]"
              aria-label="StackOverflow"
            >
              <Code2 className="w-6 h-6" />
            </a>
          )}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="w-6 h-6 text-muted-foreground/50" />
      </motion.div>
    </section>
  );
}
