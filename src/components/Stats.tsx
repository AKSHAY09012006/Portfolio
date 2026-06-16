import React from "react";
import { motion } from "framer-motion";

interface StatItem {
  number: string;
  label: string;
  subtext: string;
}

export const Stats: React.FC = () => {
  const stats: StatItem[] = [
    {
      number: "4+",
      label: "Internships & Roles",
      subtext: "Hands-on trainee experiences at Amphenol, Coolmaker, SRM IST, and UAV research labs.",
    },
    {
      number: "7+",
      label: "Engineering Projects",
      subtext: "Developed embedded systems, IoT simulators, and autonomous logistics UAV designs.",
    },
    {
      number: "12+",
      label: "Certifications & Awards",
      subtext: "Winner of National Drone Grand Prix, co-author of IEEE VLSI papers, and Oracle associate.",
    },
  ];

  return (
    <section className="bg-bg py-20 md:py-28 select-none border-t border-stroke/20">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
              className="flex flex-col items-center text-center p-6 bg-surface/20 rounded-2xl border border-stroke/40 backdrop-blur-md"
            >
              {/* Animated Stat Value */}
              <div className="text-5xl md:text-6xl lg:text-7xl font-display italic font-semibold text-text-primary tracking-tight mb-3 accent-text-gradient">
                {stat.number}
              </div>
              
              {/* Label */}
              <div className="text-sm md:text-base font-semibold text-text-primary uppercase tracking-wider mb-2">
                {stat.label}
              </div>
              
              {/* Subtext */}
              <div className="text-xs md:text-sm text-muted/70 leading-relaxed">
                {stat.subtext}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
