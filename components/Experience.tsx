"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import { Calendar, Building2, ExternalLink } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        <div className="space-y-4 text-center sm:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Experience</h2>
          <p className="text-muted-foreground text-gray-500">My professional journey and track record.</p>
        </div>

        <div className="relative border-l border-gray-200 dark:border-gray-800 ml-3 sm:ml-6 space-y-12">
          {resumeData.experience.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative pl-8 sm:pl-12"
            >
                {/* Timeline dot */}
              <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background bg-slate-900 dark:bg-white" />

              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2">
                <div>
                  <h3 className="text-xl font-semibold leading-none">{job.role}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
                    <Building2 className="w-4 h-4" />
                    <span>{job.company}</span>
                    {job.link && (
                      <>
                        <span>•</span>
                        <a 
                          href={job.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 hover:text-primary transition-colors"
                        >
                          Visit <ExternalLink className="w-3 h-3" />
                        </a>
                      </>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-gray-500 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full w-fit">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>
                    {job.startDate} - {job.endDate}
                  </span>
                </div>
              </div>

              <ul className="list-disc list-outside ml-4 space-y-2 text-gray-600 dark:text-gray-300 mb-6">
                {job.description.map((desc, i) => (
                  <li key={i}>
                    {desc.split(/(\[.*?\]\(.*?\))/g).map((part, j) => {
                      const match = part.match(/\[(.*?)\]\((.*?)\)/);
                      if (match) {
                        return (
                          <a
                            key={j}
                            href={match[2]}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline font-medium text-blue-600 dark:text-blue-400"
                          >
                            {match[1]}
                          </a>
                        );
                      }
                      return part;
                    })}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {job.technologies?.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-100 dark:border-blue-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
