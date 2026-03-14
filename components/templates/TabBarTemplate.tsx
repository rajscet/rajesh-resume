"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { resumeData } from "@/data/resume";
import { Mail, Phone, MapPin, Github, Linkedin, CircleUser, Menu, X, GraduationCap, Calendar } from "lucide-react";
import { ExportPdfButton } from "@/components/ExportPdfButton";
import { LocationLink } from "@/components/LocationLink";
import { EmailOptionsModal } from "@/components/EmailOptionsModal";
import { CertificateList } from "@/components/CertificateList";

export function TabBarTemplate() {
  const { personalInfo, experience, education, skills, projects } = resumeData;
  const [activeTab, setActiveTab] = useState("profile");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);

  const allCertificates = [
    ...experience.flatMap((job) => job.certificates || []),
    ...education.flatMap((edu) => edu.certificates || []),
  ];

  const tabs = [
    { id: "profile", label: "Profile" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "certificates", label: "Certificates" },
  ];

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: "smooth",
      });
    }
  };

  // Update active tab on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = tabs.map(t => document.getElementById(t.id));
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveTab(tabs[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-slate-800 dark:text-slate-200">
      
      {/* Top Tab Bar */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          <div className="flex items-center gap-3">
             <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-primary">
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img src="/profile.jpeg" alt={personalInfo.name} className="h-full w-full object-cover" />
             </div>
             <span className="font-bold text-lg hidden sm:block">{personalInfo.name}</span>
          </div>

          {/* Desktop Tabs */}
          <nav className="hidden md:flex items-center gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => scrollToSection(tab.id)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all relative",
                  activeTab === tab.id
                    ? "text-white"
                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-zinc-800"
                )}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-primary rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-gray-600 dark:text-gray-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
             initial={{ opacity: 0, y: -20 }}
             animate={{ opacity: 1, y: 0 }}
             exit={{ opacity: 0, y: -20 }}
             className="fixed inset-0 z-30 bg-white dark:bg-zinc-900 pt-20 px-4 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => scrollToSection(tab.id)}
                  className="p-4 text-lg font-medium border-b border-gray-100 dark:border-gray-800 text-left"
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-24">
        
        {/* Profile Section */}
        <section id="profile" className="scroll-mt-28 flex flex-col items-center text-center space-y-6">
           <div className="h-40 w-40 rounded-full overflow-hidden border-4 border-white dark:border-zinc-800 shadow-xl">
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img src="/profile.jpeg" alt={personalInfo.name} className="h-full w-full object-cover" />
           </div>
           <div className="space-y-3">
             <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">{personalInfo.name}</h1>
             <p className="text-xl text-primary font-medium">{personalInfo.title}</p>
             <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">{personalInfo.summary}</p>
           </div>
           
           <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(personalInfo.location)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <MapPin className="w-4 h-4" /> 
                </a>
                <LocationLink location={personalInfo.location} />
              </div>
              <button 
                onClick={() => setIsEmailModalOpen(true)} 
                className="flex items-center gap-2 underline text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors text-left"
              >
                <Mail className="w-4 h-4" /> {personalInfo.email}
              </button>
              <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-2 underline text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
                <Phone className="w-4 h-4" /> {personalInfo.phone}
              </a>
           </div>

           <div className="flex gap-4">
              {personalInfo.linkedin && (
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-100 dark:bg-zinc-800 hover:bg-primary hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5"/>
                </a>
              )}
              {personalInfo.github && (
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-100 dark:bg-zinc-800 hover:bg-primary hover:text-white transition-colors">
                  <Github className="w-5 h-5"/>
                </a>
              )}
              {personalInfo.upwork && (
                <a href={personalInfo.upwork} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-100 dark:bg-zinc-800 hover:bg-primary hover:text-white transition-colors text-[#14a800]">
                  <CircleUser className="w-5 h-5"/>
                </a>
              )}
           </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="scroll-mt-28">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="w-2 h-8 bg-primary rounded-full"></span>
            Experience
          </h2>
          <div className="space-y-12">
            {experience.map((job, i) => (
              <div key={i} className="group relative border-l-2 border-gray-200 dark:border-gray-800 pl-8 pb-2">
                 <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-white dark:bg-black border-4 border-primary"></div>
                 <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                    <h3 className="text-xl font-bold">{job.role}</h3>
                    <span className="text-sm font-medium px-3 py-1 bg-gray-100 dark:bg-zinc-800 rounded-full">{job.startDate} - {job.endDate}</span>
                 </div>
                 <div className="text-lg font-medium text-gray-500 mb-4 flex items-center gap-2">
                    {job.link ? (
                        <a href={job.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline">{job.company}</a>
                    ) : (
                        job.company
                    )}
                 </div>
                 <ul className="list-disc list-outside ml-4 space-y-2 text-gray-600 dark:text-gray-300 mb-4">
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
                 <div className="flex flex-wrap gap-2">
                    {job.technologies?.map((t, k) => (
                       <span key={k} className="text-xs font-medium px-2 py-1 rounded bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-300">
                         {t}
                       </span>
                    ))}
                 </div>
                 <div className="mt-4">
                    <CertificateList certificates={job.certificates} />
                 </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="scroll-mt-28">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="w-2 h-8 bg-primary rounded-full"></span>
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             {projects.map((project, i) => (
               <div key={i} className="bg-gray-50 dark:bg-zinc-900 rounded-2xl p-6 hover:shadow-lg transition-shadow border border-gray-100 dark:border-zinc-800">
                  <div className="flex justify-between items-start mb-4">
                      {project.link ? (
                         <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline">{project.title}</a>
                      ) : (
                         project.title
                      )}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
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
                  {project.role && (
                     <p className="text-xs text-gray-500 mb-4 italic border-l-2 border-gray-200 pl-2">
                       {project.role}
                     </p>
                  )}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.map((t, k) => (
                       <span key={k} className="text-xs font-medium px-2 py-1 rounded bg-white dark:bg-black border border-gray-200 dark:border-gray-700">
                         {t}
                       </span>
                    ))}
                  </div>
                  

                </div>
             ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="scroll-mt-28">
           <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="w-2 h-8 bg-primary rounded-full"></span>
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
             {skills.map((category, i) => (
               <div key={i} className="bg-white dark:bg-black border border-gray-200 dark:border-zinc-800 rounded-xl p-6">
                  <h3 className="text-lg font-bold mb-4">{category.category}</h3>
                  <div className="flex flex-wrap gap-2">
                     {category.items.map((skill, j) => (
                       <div key={j} className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-50 dark:bg-zinc-900 text-sm font-medium">
                          <div className="w-2 h-2 rounded-full bg-green-500"></div>
                          {skill}
                       </div>
                     ))}
                  </div>

               </div>
             ))}
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="scroll-mt-28">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="w-2 h-8 bg-primary rounded-full"></span>
            Education
          </h2>
          <div className="space-y-6">
            {education.map((edu, i) => (
              <div key={i} className="bg-white dark:bg-black p-6 rounded-2xl border border-gray-100 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow">
                 <div className="flex items-start justify-between">
                    <div>
                       <div className="p-2 w-fit rounded-lg bg-primary/10 mb-4 text-primary">
                          <GraduationCap className="w-6 h-6" />
                       </div>
                       <h3 className="text-xl font-bold mb-1">{edu.institution}</h3>
                       <p className="text-gray-600 dark:text-gray-300 font-medium">{edu.degree}</p>
                       <div className="mt-2">
                          <CertificateList certificates={edu.certificates} />
                       </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500 bg-gray-50 dark:bg-gray-800 px-3 py-1 rounded-full">
                       <Calendar className="w-3.5 h-3.5" />
                       <span>
                          {edu.startDate} - {edu.endDate}
                       </span>
                    </div>
                 </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certificates Section */}
        <section id="certificates" className="scroll-mt-28">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="w-2 h-8 bg-primary rounded-full"></span>
            Certificates
          </h2>
          <CertificateList certificates={allCertificates} />
        </section>

      </main>

       <footer className="py-8 text-center text-sm text-muted-foreground text-gray-400 border-t border-gray-100 dark:border-zinc-900 z-10 relative bg-white dark:bg-black">
        <p>© {new Date().getFullYear()} {process.env.NEXT_PUBLIC_NAME || "Portfolio"}. All rights reserved.</p>
      </footer>
      <ExportPdfButton />
      <EmailOptionsModal 
        isOpen={isEmailModalOpen} 
        onClose={() => setIsEmailModalOpen(false)} 
        email={personalInfo.email} 
      />
    </div>
  );
}
