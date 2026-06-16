import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface ExplorationItem {
  title: string;
  category: string;
  image: string;
  link: string;
  desc: string;
}

const ITEMS: ExplorationItem[] = [
  {
    title: "National Drone Grand Prix",
    category: "National Winner (1st)",
    image: import.meta.env.BASE_URL + "images/exploration_2.png",
    link: "assets/certificates/drone-grand-prix.png",
    desc: "Secured 1st position at YDLO 2026 Techno-Cultural Fest, HITS, demonstrating UAV maneuverability.",
  },
  {
    title: "Amphenol Trainee",
    category: "Internship",
    image: import.meta.env.BASE_URL + "images/exploration_1.png",
    link: "assets/certificates/Internship Certificate.pdf",
    desc: "Learned production workflows, quality engineering, and manufacturing specifications.",
  },
  {
    title: "Cool Maker Solar Systems",
    category: "Technical Intern",
    image: import.meta.env.BASE_URL + "images/exploration_9.png",
    link: "assets/certificates/AKSHAY INTERSHIP 2.pdf",
    desc: "Hands-on experience in solar panel layout design, installation, and heater servicing.",
  },
  {
    title: "DCDC Club Training",
    category: "Club Credentials",
    image: import.meta.env.BASE_URL + "images/exploration_12.png",
    link: "assets/certificates/Hands On Section DCDC.pdf",
    desc: "Hands-on session on digital communication designs, protocols, and electronics boards.",
  },
  {
    title: "Code Galata Certification",
    category: "Programming",
    image: import.meta.env.BASE_URL + "images/exploration_7.png",
    link: "assets/certificates/Code Galata.pdf",
    desc: "Programming workshop credential demonstrating logic synthesis and software foundations.",
  },
  {
    title: "Design Thinking: Primer",
    category: "NPTEL / IIT",
    image: import.meta.env.BASE_URL + "images/exploration_3.png",
    link: "assets/certificates/Design Thinking - A Primer.pdf",
    desc: "Verified foundational primer on user-centric design methodologies and problem framing.",
  },
  {
    title: "Community Connect NGO",
    category: "NGO Volunteering",
    image: import.meta.env.BASE_URL + "images/exploration_8.png",
    link: "assets/certificates/Community Connect (NGO).pdf",
    desc: "Completed community service project for Human Milk Bank operations and documentation.",
  },
  {
    title: "IEEE Presenter (ICACRS)",
    category: "Research Presentation",
    image: import.meta.env.BASE_URL + "images/exploration_10.png",
    link: "assets/certificates/273-3.pdf",
    desc: "Co-authored and presented VLSI QCA integration research at international conference.",
  },
  {
    title: "WOPPD 2024 Photonics",
    category: "SRM Workshop",
    image: import.meta.env.BASE_URL + "images/exploration_11.png",
    link: "assets/certificates/WOPPD.pdf",
    desc: "Participated in specialized Photonics Workshop detailing lasers, lenses, and optical communication.",
  },
  {
    title: "Oracle SQL Foundations",
    category: "Industry Cert",
    image: import.meta.env.BASE_URL + "images/exploration_4.png",
    link: "assets/certificates/Orcale.pdf",
    desc: "Certified in database schemas, relationships, and SQL querying.",
  },
  {
    title: "MongoDB Atlas Admin",
    category: "Cloud Database",
    image: import.meta.env.BASE_URL + "images/exploration_5.png",
    link: "assets/certificates/MangoDB.pdf",
    desc: "Learned cloud cluster administration, document modeling, and index optimization.",
  },
  {
    title: "Verilog HDL Hardware Design",
    category: "VLSI / Udemy",
    image: import.meta.env.BASE_URL + "images/exploration_6.png",
    link: "assets/certificates/VSLI UDEMY.pdf",
    desc: "Advanced training in hardware description languages, RTL simulation, and logic synthesis.",
  },
];

export const Explorations: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const pinRef = useRef<HTMLDivElement | null>(null);
  const colLeftRef = useRef<HTMLDivElement | null>(null);
  const colRightRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Media query to check if screen is desktop
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      if (!containerRef.current || !pinRef.current || !colLeftRef.current || !colRightRef.current) return;

      // Pin the center content
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: pinRef.current,
        pinSpacing: false,
      });

      // Left column scrolls down, Right column scrolls up (parallax)
      gsap.fromTo(
        colLeftRef.current,
        { y: 0 },
        {
          y: -100,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        }
      );

      gsap.fromTo(
        colRightRef.current,
        { y: 80 },
        {
          y: -220,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        }
      );
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  const handleCardClick = (link: string) => {
    if (link) {
      const url = link.startsWith("http") || link.startsWith("/")
        ? link
        : `${import.meta.env.BASE_URL}${link}`;
      window.open(url, "_blank");
    }
  };

  return (
    <section
      id="explorations"
      ref={containerRef}
      className="relative min-h-[160vh] md:min-h-[220vh] bg-bg py-20 md:py-32 select-none"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-full flex flex-col md:flex-row relative">
        
        {/* Left Layer: Pinned Text Content */}
        <div ref={pinRef} className="w-full md:w-5/12 md:h-[60vh] flex flex-col justify-center mb-12 md:mb-0 z-10">
          <div className="max-w-md sticky top-32">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em] font-semibold">
                Explorations
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display text-text-primary mb-4 font-normal tracking-tight">
              Visual <span className="italic font-normal">playground</span>
            </h2>
            <p className="text-sm md:text-base text-muted/80 leading-relaxed mb-8">
              A gallery of specialized internships, professional certifications, and technical workshops exploring the frontiers of electronics, VLSI design, and database administration.
            </p>
            <a
              href="https://github.com/AKSHAY09012006"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-text-primary hover:text-muted transition-colors duration-200"
            >
              Check GitHub Repositories <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>

        {/* Right Layer: Parallax Columns */}
        <div className="w-full md:w-7/12 flex gap-6 md:gap-12 relative md:mt-24">
          
          {/* Column Left (items 0, 2, 4) */}
          <div ref={colLeftRef} className="w-1/2 flex flex-col gap-6 md:gap-12">
            {ITEMS.filter((_, i) => i % 2 === 0).map((item, idx) => (
              <div
                key={idx}
                onClick={() => handleCardClick(item.link)}
                className="exploration-card group bg-surface border border-stroke rounded-2xl md:rounded-3xl overflow-hidden aspect-square flex flex-col justify-end p-4 md:p-6 cursor-pointer relative"
              >
                {/* Image */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent z-10" />
                </div>
                
                {/* Content */}
                <div className="relative z-20 flex flex-col">
                  <span className="text-[9px] font-mono text-[#89AACC] uppercase tracking-wider mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-base md:text-lg font-semibold text-text-primary mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[10px] md:text-xs text-muted/80 line-clamp-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                
                {/* Hover overlay link */}
                <div className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-muted group-hover:text-text-primary group-hover:bg-black/80 transition-all">
                  <ExternalLink size={12} />
                </div>
              </div>
            ))}
          </div>

          {/* Column Right (items 1, 3, 5) */}
          <div ref={colRightRef} className="w-1/2 flex flex-col gap-6 md:gap-12">
            {ITEMS.filter((_, i) => i % 2 !== 0).map((item, idx) => (
              <div
                key={idx}
                onClick={() => handleCardClick(item.link)}
                className="exploration-card group bg-surface border border-stroke rounded-2xl md:rounded-3xl overflow-hidden aspect-square flex flex-col justify-end p-4 md:p-6 cursor-pointer relative"
              >
                {/* Image */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent z-10" />
                </div>
                
                {/* Content */}
                <div className="relative z-20 flex flex-col">
                  <span className="text-[9px] font-mono text-[#89AACC] uppercase tracking-wider mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-base md:text-lg font-semibold text-text-primary mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[10px] md:text-xs text-muted/80 line-clamp-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                
                {/* Hover overlay link */}
                <div className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-muted group-hover:text-text-primary group-hover:bg-black/80 transition-all">
                  <ExternalLink size={12} />
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};
