import React from "react";
import { motion } from "framer-motion";
import type { Project } from "../types";
import { Eye, ExternalLink, FileText, Settings } from "lucide-react";

const GithubIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

interface SelectedWorksProps {
  projects: Project[];
}

export const SelectedWorks: React.FC<SelectedWorksProps> = ({ projects }) => {
  const getColSpan = (index: number) => {
    // Spans: 7, 5, 5, 7
    const pattern = [7, 5, 5, 7];
    const span = pattern[index % pattern.length];
    return span === 7 ? "md:col-span-7" : "md:col-span-5";
  };

  const handleCardClick = (link: string) => {
    if (link && link !== "#") {
      window.open(link, "_blank");
    }
  };

  return (
    <section id="work" className="bg-bg py-20 md:py-28 select-none">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16"
        >
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em] font-semibold">
                Selected Work
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display text-text-primary mb-4 font-normal tracking-tight">
              Featured <span className="italic font-normal">projects</span>
            </h2>
            <p className="text-sm md:text-base text-muted/80 leading-relaxed">
              A selection of embedded systems, IoT, and UAV prototypes designed and built from concept to hardware deployment.
            </p>
          </div>
          
          <button
            onClick={() => {
              const el = document.getElementById("explorations");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="hidden md:inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted hover:text-text-primary transition-colors duration-200 mt-6 md:mt-0"
          >
            Explore certifications <span className="text-lg">→</span>
          </button>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {projects.map((project, idx) => {
            const colSpan = getColSpan(idx);
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                className={`group relative bg-surface border border-stroke rounded-3xl overflow-hidden aspect-[4/3] md:aspect-auto md:h-[480px] flex flex-col justify-end cursor-pointer ${colSpan}`}
                onClick={() => handleCardClick(project.link)}
              >
                {/* Project Image */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Halftone texture overlay */}
                  <div className="absolute inset-0 halftone-overlay mix-blend-multiply opacity-20" />
                  {/* Card shadow overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
                </div>

                {/* Content - Bottom Left */}
                <div className="relative z-20 p-6 md:p-8 flex flex-col justify-between h-full">
                  {/* Top Links Row */}
                  <div className="flex justify-end gap-2" onClick={(e) => e.stopPropagation()}>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-full bg-black/40 border border-white/5 text-muted hover:text-text-primary hover:bg-black/60 transition-all duration-200"
                        title="GitHub Codebase"
                      >
                        <GithubIcon size={16} />
                      </a>
                    )}
                    {project.report && (
                      <a
                        href={project.report}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-full bg-black/40 border border-white/5 text-muted hover:text-text-primary hover:bg-black/60 transition-all duration-200"
                        title="Project Report"
                      >
                        <FileText size={16} />
                      </a>
                    )}
                    {project.workflow && (
                      <a
                        href={project.workflow}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-full bg-black/40 border border-white/5 text-muted hover:text-text-primary hover:bg-black/60 transition-all duration-200"
                        title="Workflow Documentation"
                      >
                        <Settings size={16} />
                      </a>
                    )}
                    {project.link && project.link.includes("wokwi.com") && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-full bg-black/40 border border-white/5 text-muted hover:text-text-primary hover:bg-black/60 transition-all duration-200"
                        title="Run Wokwi Simulator"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>

                  {/* Project Details */}
                  <div className="mt-auto">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.tags.map((tag, tagIdx) => (
                        <span
                          key={tagIdx}
                          className="text-[9px] font-mono tracking-wider text-text-primary/70 bg-white/10 px-2 py-0.5 rounded-md backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-xl md:text-2xl font-semibold text-text-primary tracking-tight mb-2">
                      {project.title}
                    </h3>
                    <p className="text-xs md:text-sm text-muted/90 line-clamp-2 leading-relaxed">
                      {project.desc}
                    </p>
                  </div>
                </div>

                {/* Hover Reveal Card Label */}
                <div className="absolute inset-0 bg-[#0a0a0a]/70 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-400 z-35 flex items-center justify-center">
                  <div className="relative p-[1px] rounded-full overflow-hidden animate-gradient-shift accent-gradient">
                    <div className="bg-white text-black px-6 py-3 rounded-full flex items-center gap-2 shadow-lg font-medium text-xs tracking-wider uppercase">
                      <Eye size={14} className="stroke-[2.5]" />
                      <span>View — <span className="font-display italic capitalize font-semibold tracking-normal text-sm">{project.title.split(" ")[0]}</span></span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
