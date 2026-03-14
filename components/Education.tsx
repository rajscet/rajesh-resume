import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import { GraduationCap, Calendar } from "lucide-react";
import { CertificateList } from "./CertificateList";

export function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gray-50/50 dark:bg-gray-900/50 rounded-3xl my-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        <div className="space-y-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Education</h2>
          <p className="text-muted-foreground text-gray-500">Academic background and qualifications.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resumeData.education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white dark:bg-black p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="p-2 w-fit rounded-lg bg-primary/10 mb-4 text-primary">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{edu.institution}</h3>
                  <p className="text-gray-600 dark:text-gray-300 font-medium">{edu.degree}</p>
                  <CertificateList certificates={edu.certificates} />
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500 bg-gray-50 dark:bg-gray-800 px-3 py-1 rounded-full">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>
                    {edu.startDate} - {edu.endDate}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
