"use client";

import { useState } from "react";
import { resumeData } from "@/data/resume";
import { Mail, Phone, MapPin, Github, Linkedin, CircleUser, Code2 } from "lucide-react";
import { ExportPdfButton } from "@/components/ExportPdfButton";
import { LocationLink } from "@/components/LocationLink";
import { EmailOptionsModal } from "@/components/EmailOptionsModal";

export function ClassicTemplate() {
  const { personalInfo, experience, education, skills, projects } = resumeData;
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-zinc-900 p-4 sm:p-8 animate-in fade-in duration-500">
      <div className="max-w-6xl mx-auto bg-white dark:bg-black shadow-xl rounded-lg overflow-hidden flex flex-col md:flex-row min-h-[calc(100vh-4rem)]">
        
         {/* Left Sidebar */}
        <aside className="w-full md:w-1/3 bg-slate-900 text-white p-8 space-y-8">
           <div className="h-32 w-32 rounded-full overflow-hidden border-4 border-slate-700 shadow-xl mx-auto md:mx-0">
             {/* eslint-disable-next-line @next/next/no-img-element */}
             <img src="/profile.jpeg" alt={personalInfo.name} className="h-full w-full object-cover" />
           </div>

          <div className="space-y-4">
            <h1 className="text-3xl font-bold">{personalInfo.name}</h1>
            <p className="text-slate-300 font-medium text-lg">{personalInfo.title}</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b border-slate-700 pb-2">Contact</h3>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => setIsEmailModalOpen(true)}
                  className="flex items-center gap-3 underline text-blue-400 hover:text-blue-300 transition-colors text-left"
                >
                  <Mail className="w-4 h-4" />
                  {personalInfo.email}
                </button>
              </div>
              <div className="flex items-center gap-3">
                <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-3 underline text-blue-400 hover:text-blue-300 transition-colors">
                  <Phone className="w-4 h-4" />
                  {personalInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(personalInfo.location)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  <MapPin className="w-4 h-4" />
                </a>
                <LocationLink location={personalInfo.location} className="hover:text-white transition-colors" />
              </div>
              
              <div className="flex flex-wrap gap-3 mt-4 pt-4">
                 {personalInfo.linkedin && (
                    <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white"><Linkedin className="w-5 h-5"/></a>
                 )}
                 {personalInfo.github && (
                    <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-white"><Github className="w-5 h-5"/></a>
                 )}
                 {personalInfo.upwork && (
                    <a href={personalInfo.upwork} target="_blank" rel="noopener noreferrer" className="hover:text-white"><CircleUser className="w-5 h-5"/></a>
                 )}
                 {personalInfo.stackoverflow && (
                    <a href={personalInfo.stackoverflow} target="_blank" rel="noopener noreferrer" className="hover:text-white"><Code2 className="w-5 h-5"/></a>
                 )}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b border-slate-700 pb-2">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.flatMap(s => s.items).map((skill, i) => (
                <span key={i} className="bg-slate-800 px-2 py-1 rounded text-xs text-slate-200">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b border-slate-700 pb-2">Education</h3>
            <div className="space-y-4">
              {education.map((edu, i) => (
                <div key={i}>
                  <p className="font-medium text-white">{edu.institution}</p>
                  <p className="text-sm text-slate-400">{edu.degree}</p>
                  <p className="text-xs text-slate-500 mt-1">{edu.startDate} - {edu.endDate}</p>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Right Content */}
        <main className="flex-1 p-8 space-y-10 bg-white dark:bg-zinc-950 text-slate-800 dark:text-slate-200">
          <section>
             <h2 className="text-2xl font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4 border-b pb-2 border-slate-200 dark:border-slate-800">Profile</h2>
             <p className="leading-relaxed text-slate-600 dark:text-slate-400">
               {personalInfo.summary}
             </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-6 border-b pb-2 border-slate-200 dark:border-slate-800">Experience</h2>
            <div className="space-y-8">
              {experience.map((job, i) => (
                <div key={i} className="relative pl-4 border-l-2 border-slate-200 dark:border-slate-800">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                    <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">{job.role}</h3>
                    <span className="text-sm font-medium text-slate-500">{job.startDate} - {job.endDate}</span>
                  </div>
                  <div className="text-lg font-semibold text-primary mb-2 flex items-center gap-2">
                    {job.link ? (
                        <a href={job.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline">{job.company}</a>
                    ) : (
                        job.company
                    )}
                  </div>
                  <ul className="list-disc list-outside ml-4 space-y-1 text-slate-600 dark:text-slate-400">
                    {job.description.map((desc, j) => (
                      <li key={j}>
                        {desc.split(/(\[.*?\]\(.*?\))/g).map((part, k) => {
                          const match = part.match(/\[(.*?)\]\((.*?)\)/);
                          if (match) {
                            return (
                              <a
                                key={k}
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
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {projects && projects.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-6 border-b pb-2 border-slate-200 dark:border-slate-800">Projects</h2>
              <div className="grid grid-cols-1 gap-6">
                {projects.map((project, i) => (
                  <div key={i}>
                    <div className="flex items-center gap-2 mb-1">
                      {project.link ? (
                          <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline">{project.title}</a>
                       ) : (
                          project.title
                       )}
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-2">{project.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((t, k) => (
                         <span key={k} className="text-xs font-medium text-slate-500 bg-slate-100 dark:bg-slate-900 px-1.5 py-0.5 rounded">#{t}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

        </main>
      </div>
      <ExportPdfButton />
      <EmailOptionsModal 
        isOpen={isEmailModalOpen} 
        onClose={() => setIsEmailModalOpen(false)} 
        email={personalInfo.email} 
      />
    </div>
  );
}
