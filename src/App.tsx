import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { SelectedWorks } from "./components/SelectedWorks";
import { Journal } from "./components/Journal";
import { Explorations } from "./components/Explorations";
import { Stats } from "./components/Stats";
import { ExperienceEducation } from "./components/ExperienceEducation";
import { ContactFooter } from "./components/ContactFooter";
import type { Project } from "./types";

const PROFILE = {
  name: "Akshay S S",
  summary:
    "Electronics and Communication engineering enthusiast with hands‑on exposure to embedded systems, digital electronics, VLSI fundamentals, and UAV technology. Interested in practical prototyping, hardware description languages, and real‑time learning environments.",
  roles: [
    "Embedded Engineer",
    "VLSI Designer",
    "UAV Prototyper",
    "Hardware Enthusiast"
  ],
  resume: "https://drive.google.com/file/d/1z2NHkKZn5n6FKdJYHmMOXZq90VBg_C_l/view?usp=sharing",
  badges: ["ECE", "VLSI", "Verilog HDL", "Embedded C", "IoT", "Digital Logic"],
};

const PROJECTS: Project[] = [
  {
    title: "Autonomous Logistics Drone",
    desc: "Autonomous UAV for precise payload delivery using computer vision and GPS. Features failsafe mechanisms, carbon fiber frame design, and reduced human intervention.",
    tags: ["UAV", "Drone", "Computer Vision", "Embedded", "Logistics"],
    link: "https://drive.google.com/drive/folders/1fclnMLwHnFThjI2CrSZsVXJsmFPDIvjM?usp=drive_link",
    workflow: "https://drive.google.com/drive/folders/1fclnMLwHnFThjI2CrSZsVXJsmFPDIvjM?usp=drive_link",
    report: "https://drive.google.com/drive/folders/1gagtuBQLaLjptNFnMS1WqHWTngn5SyLy?usp=sharing",
    image: import.meta.env.BASE_URL + "images/logistics_drone.png",
  },
  {
    title: "Smart Battery Monitoring (ESP32 / IoT)",
    desc: "Real-time battery monitoring system measuring voltage and estimating SOC. Features local OLED telemetry graphs, ESP32 Wi-Fi for MQTT cloud data logging, and low-voltage alert triggers.",
    tags: ["IoT", "ESP32", "MQTT", "Sensors", "Embedded C"],
    link: "https://wokwi.com/projects/443977277636198401",
    report: "https://drive.google.com/file/d/1QbtUvj67SesyGE46RAaKSby6MhH8pfKw/view?usp=sharing",
    image: import.meta.env.BASE_URL + "images/battery_monitoring.png",
  },
  {
    title: "Real-Time Gas Monitoring System (RTGMS)",
    desc: "Embedded LPG/propane safety monitoring station combining an MQ-6 gas sensor, an HX711 weight load cell, a local buzzer alarm, and character LCD readouts.",
    tags: ["Embedded C", "Sensors", "Hardware Prototypes"],
    link: "https://wokwi.com/projects/437115151985582081",
    report: "https://drive.google.com/file/d/1mMDl24n0oo1D2Rrw4yOzHp4PrSHluflJ/view?usp=sharing",
    image: import.meta.env.BASE_URL + "images/gas_monitoring.png",
  },
  {
    title: "Vision Cane — Assistive Navigation",
    desc: "A smart ultrasonic assistive cane for navigation, including dual ultrasonic sensor ranging, vibration motors for haptic feedback alerts, and user-centric ergonomics.",
    tags: ["Embedded Hardware", "Ultrasonic Sensors", "Assisted Design"],
    link: "https://drive.google.com/file/d/1HuYhNUWZTk_ZOqqtBCYQ4nLbB94SZIk4/view?usp=sharing",
    report: "https://drive.google.com/file/d/1HuYhNUWZTk_ZOqqtBCYQ4nLbB94SZIk4/view?usp=sharing",
    image: import.meta.env.BASE_URL + "images/vision_cane.png",
  },
  {
    title: "ExpanseIQ — Expense Intelligence",
    desc: "An expense intelligence web application prototype featuring secure tracking, category filters, and data visualization analytics dashboard.",
    tags: ["Web App", "JavaScript", "Analytics"],
    link: "assets/projects/ExpanseIQ/index.html",
    github: "https://github.com/AKSHAY09012006/ExpanseIq.git",
    image: import.meta.env.BASE_URL + "images/expanse_iq.png",
  },
  {
    title: "Complaint Management Portal",
    desc: "A digital portal for complaint submission, category assignment, and real-time status tracking.",
    tags: ["Web Portal", "Database", "Tracking"],
    link: "assets/projects/ComplaintSystem/index.html",
    github: "https://github.com/AKSHAY09012006/ComplaintHub.git",
    image: import.meta.env.BASE_URL + "images/complaint_portal.png",
  },
  {
    title: "Elite Shop — E-Commerce Prototype",
    desc: "A mini online shop prototype containing dynamic product catalog displays, cart items registration, and checkout flows.",
    tags: ["E-Commerce", "JavaScript", "UI Design"],
    link: "assets/projects/EliteShop/index.html",
    github: "https://github.com/AKSHAY09012006/EliteShop.git",
    image: import.meta.env.BASE_URL + "images/elite_shop.png",
  },
];

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <div className="relative min-h-screen bg-bg text-text-primary selection:bg-[#89AACC]/30 selection:text-white">
          {/* Global Top Progress Indicator */}
          <div className="fixed top-0 left-0 right-0 h-[2px] bg-stroke/30 z-[100]">
            <div className="h-full accent-gradient animate-scroll-down w-full origin-left" style={{ display: 'none' }} />
          </div>

          <Navbar resumeUrl={PROFILE.resume} />
          
          <main>
            <Hero
              name={PROFILE.name}
              roles={PROFILE.roles}
              summary={PROFILE.summary}
              badges={PROFILE.badges}
            />
            
            <SelectedWorks projects={PROJECTS} />
            
            <Journal />
            
            <Explorations />
            
            <ExperienceEducation />
            
            <Stats />
          </main>

          <ContactFooter />
        </div>
      )}
    </>
  );
}

export default App;
