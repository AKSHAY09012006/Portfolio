import React from "react";
import { motion } from "framer-motion";

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

export const WorkExperience: React.FC = () => {
  return (
    <section id="experience" className="bg-bg py-20 md:py-28 select-none border-t border-stroke/20">
      <div className="max-w-[1000px] mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-stroke" />
            <span className="text-xs text-muted uppercase tracking-[0.3em] font-semibold">
              Professional Timeline
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display text-text-primary mb-4 font-normal tracking-tight">
            Work <span className="italic font-normal">experience</span>
          </h2>
          <p className="text-sm md:text-base text-muted/80 leading-relaxed max-w-xl">
            A chronological timeline of my professional trainee experiences and internships.
          </p>
        </motion.div>

        <div className="relative pl-8 border-l border-stroke/40 flex flex-col gap-12">
          {EXPERIENCE.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative flex flex-col items-start"
            >
              <div className="absolute left-[-38px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#89AACC] border-2 border-bg z-10 shadow-[0_0_8px_rgba(137,170,204,0.6)]" />
              <span className="text-xs font-mono text-[#89AACC] font-semibold mb-1">
                {item.period}
              </span>
              <h4 className="text-lg font-semibold text-text-primary leading-snug">
                {item.role}
              </h4>
              <span className="text-sm text-muted/80 font-medium mb-3">
                {item.where}
              </span>
              {item.notes && (
                <p className="text-xs md:text-sm text-muted/60 leading-relaxed max-w-2xl">
                  {item.notes}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const AcademicEducation: React.FC = () => {
  return (
    <section id="education" className="bg-bg py-20 md:py-28 select-none border-t border-stroke/20">
      <div className="max-w-[1000px] mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-stroke" />
            <span className="text-xs text-muted uppercase tracking-[0.3em] font-semibold">
              Academic Background
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display text-text-primary mb-4 font-normal tracking-tight">
            Academic <span className="italic font-normal">education</span>
          </h2>
          <p className="text-sm md:text-base text-muted/80 leading-relaxed max-w-xl">
            My educational background and credentials.
          </p>
        </motion.div>

        <div className="relative pl-8 border-l border-stroke/40 flex flex-col gap-12">
          {EDUCATION.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative flex flex-col items-start"
            >
              <div className="absolute left-[-38px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#4E85BF] border-2 border-bg z-10 shadow-[0_0_8px_rgba(78,133,191,0.6)]" />
              <span className="text-xs font-mono text-[#4E85BF] font-semibold mb-1">
                {item.period}
              </span>
              <h4 className="text-lg font-semibold text-text-primary leading-snug">
                {item.role}
              </h4>
              <span className="text-sm text-muted/80 font-medium mb-3">
                {item.where}
              </span>
              {item.notes && (
                <p className="text-xs md:text-sm text-muted/60 leading-relaxed max-w-2xl">
                  {item.notes}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
