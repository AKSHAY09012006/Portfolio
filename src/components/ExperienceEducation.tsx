import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

interface TimelineItem {
  period: string;
  role: string;
  where: string;
  notes?: string;
}

const EXPERIENCE: TimelineItem[] = [
  {
    period: "Jan 2026 — Present",
    role: "Electronics Head",
    where: "Aerospace & UAV Technology",
    notes: "Lead CV integration efforts, sensor debugging, and flight systems configurations during drone assembly phases.",
  },
  {
    period: "Dec 2025 — Jan 2026",
    role: "Intern Trainee",
    where: "SRM Institute of Science and Technology, Kattankulathur",
    notes: "PCB manufacturing (chemical etching, masking) and hardware interfacing using ESP32 microcontrollers.",
  },
  {
    period: "Jun 2025",
    role: "Technical Intern",
    where: "Coolmaker Solar Systems Pvt. Ltd.",
    notes: "Learned solar system grid installation, water heater layouts, panel sizing, and electrical maintenance.",
  },
  {
    period: "Dec 2024",
    role: "Technical Trainee",
    where: "Amphenol Omniconnect India Pvt. Ltd.",
    notes: "Obtained industry exposure in automated connectors assembly, quality metrics, and specs documentation.",
  },
];

const EDUCATION: TimelineItem[] = [
  {
    period: "Aug 2023 — May 2027",
    role: "Bachelor of Technology (B.Tech)",
    where: "SRM Institute of Science & Technology, Ramapuram",
    notes: "Specialization in Electronics & Communication Engineering. CGPA: 7.74",
  },
  {
    period: "Jun 2022 — May 2023",
    role: "Higher Secondary (Computer Maths)",
    where: "Green Garden Matric. Hr. Sec. School, Erode",
    notes: "Focus on Mathematics, Physics, Chemistry, and Computer Science. Percentage: 64%",
  },
];

export const ExperienceEducation: React.FC = () => {
  return (
    <section id="experience" className="bg-bg py-20 md:py-28 select-none border-t border-stroke/20">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em] font-semibold">
                History & Background
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display text-text-primary mb-4 font-normal tracking-tight">
              Experience & <span className="italic font-normal">education</span>
            </h2>
            <p className="text-sm md:text-base text-muted/80 leading-relaxed max-w-xl">
              A chronological timeline of my professional trainee experiences and academic foundation.
            </p>
          </div>
        </motion.div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 relative">
          
          {/* Vertical dividing line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-px bg-stroke/30 -translate-x-1/2" />

          {/* Experience Column */}
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-3 mb-4 border-b border-stroke/30 pb-4">
              <div className="p-2 rounded-lg bg-surface border border-stroke text-[#89AACC]">
                <Briefcase size={18} />
              </div>
              <h3 className="text-lg font-semibold text-text-primary uppercase tracking-wider">
                Work Experience
              </h3>
            </div>

            <div className="flex flex-col gap-8 relative pl-6 border-l border-stroke/40 md:border-l-0 md:pl-0">
              {EXPERIENCE.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative md:pr-8 md:text-right flex flex-col items-start md:items-end"
                >
                  {/* Timeline Bullet Node */}
                  <div className="absolute left-[-29px] md:left-auto md:right-[-35px] top-1.5 w-3 h-3 rounded-full bg-[#89AACC] border-2 border-bg z-10 shadow-[0_0_8px_rgba(137,170,204,0.6)]" />
                  
                  <span className="text-xs font-mono text-[#89AACC] font-semibold mb-1">
                    {item.period}
                  </span>
                  <h4 className="text-base font-semibold text-text-primary leading-snug">
                    {item.role}
                  </h4>
                  <span className="text-xs text-muted/80 font-medium mb-2">
                    {item.where}
                  </span>
                  {item.notes && (
                    <p className="text-xs text-muted/60 leading-relaxed max-w-sm md:text-right text-left">
                      {item.notes}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-3 mb-4 border-b border-stroke/30 pb-4">
              <div className="p-2 rounded-lg bg-surface border border-stroke text-[#4E85BF]">
                <GraduationCap size={18} />
              </div>
              <h3 className="text-lg font-semibold text-text-primary uppercase tracking-wider">
                Academic Education
              </h3>
            </div>

            <div className="flex flex-col gap-8 relative pl-6 border-l border-stroke/40 md:border-l-0 md:pl-0">
              {EDUCATION.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative md:pl-8 flex flex-col items-start"
                >
                  {/* Timeline Bullet Node */}
                  <div className="absolute left-[-29px] md:left-[-35px] top-1.5 w-3 h-3 rounded-full bg-[#4E85BF] border-2 border-bg z-10 shadow-[0_0_8px_rgba(78,133,191,0.6)]" />
                  
                  <span className="text-xs font-mono text-[#4E85BF] font-semibold mb-1">
                    {item.period}
                  </span>
                  <h4 className="text-base font-semibold text-text-primary leading-snug">
                    {item.role}
                  </h4>
                  <span className="text-xs text-muted/80 font-medium mb-2">
                    {item.where}
                  </span>
                  {item.notes && (
                    <p className="text-xs text-muted/60 leading-relaxed max-w-sm">
                      {item.notes}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
