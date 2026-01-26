"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import { FolderGit2 } from "lucide-react";

export function Projects() {
  if (!resumeData.projects || resumeData.projects.length === 0) return null;

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gray-50/50 dark:bg-gray-900/50 rounded-3xl my-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        <div className="space-y-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Featured Projects</h2>
          <p className="text-muted-foreground text-gray-500">Showcase of selected works.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resumeData.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group bg-white dark:bg-black p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-xl group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  <FolderGit2 className="w-6 h-6" />
                </div>
              </div>

              {project.link ? (
                 <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                  >
                    <h3 className="text-xl font-bold mb-2 underline">
                      {project.title}
                    </h3>
                  </a>
              ) : (
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
              )}
              <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-3">
                {project.description.split(/(\[.*?\]\(.*?\))/g).map((part, j) => {
                  const match = part.match(/\[(.*?)\]\((.*?)\)/);
                  if (match) {
                    return (
                      <a
                        key={j}
                        href={match[2]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline font-medium"
                      >
                        {match[1]}
                      </a>
                    );
                  }
                  return part;
                })}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 text-xs font-medium rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
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
