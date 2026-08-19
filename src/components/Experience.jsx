import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import Reveal from "./Reveal";

const experiences = [
  { company: "Sentienta Quality AI", role: "Frontend Intern", duration: "June 2025 — July 2025", points: ["Built responsive and reusable UI components using React and Tailwind CSS.","Integrated frontend applications with FastAPI backend services and JWT-based authentication.","Developed dashboard interfaces and worked with dynamic data-driven visualizations."] },
  { company: "Phemesoft-IBM", role: "SDE Intern", duration: "June 2025 — July 2025", points: ["Contributed to backend development using Python and FastAPI.","Worked with AWS services including EC2, Lambda, and S3.","Contributed to REST API development and cloud-based deployment workflows."] },
];

export default function Experience() {
  const containerRef = useRef(null);

  // Tracks precise scroll progress through the timeline container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Smooths out scroll meter movements
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001
  });

  // Orchestration variants for card content
  const contentContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 }
    }
  };

  const pointVariant = {
    hidden: { opacity: 0, x: -15 },
    show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 80 } }
  };

  return (
    <Reveal>
      <section id="experience" className="relative border-t border-white/10 px-5 py-24 md:px-6 md:py-32 overflow-hidden">
        <div className="relative z-10 mx-auto max-w-6xl">
          
          {/* HEADER SECTION */}
          <div className="mb-20">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-400">Experience</p>
            <h2 className="max-w-4xl text-3xl font-bold leading-tight sm:text-4xl md:text-6xl">
              Building and contributing to real-world web applications.
            </h2>
          </div>

          {/* TIMELINE TRACK WRAPPER */}
          <div ref={containerRef} className="relative ml-4 space-y-16">
            
            {/* Background Static Line Track */}
            <div className="absolute left-0 top-2 bottom-2 w-px bg-white/10" />
            
            {/* Dynamic, Scroll-Driven Progress Track Indicator */}
            <motion.div 
              style={{ scaleY, originY: 0 }}
              className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-blue-400 via-cyan-400 to-transparent"
            />

            {experiences.map((exp, index) => (
              <motion.div 
                key={exp.company} 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative pl-10"
              >
                {/* TIMELINE HUB RADIAL POINT */}
                {/* Changes size, brightness, and border glow automatically when the parent block is hovered */}
                <div className="absolute left-[-8px] top-3 z-20 h-4 w-4 rounded-full bg-slate-950 border-2 border-blue-400 transition-all duration-300 group-hover:scale-125 group-hover:border-cyan-300 group-hover:shadow-[0_0_15px_rgba(96,165,250,0.8)]" />

                {/* INTERACTIVE EXPERIENCE PANEL CARD */}
                <motion.div 
                  variants={contentContainer}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  whileHover={{ y: -6, borderColor: "rgba(96, 165, 250, 0.3)" }}
                  className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300"
                >
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                      <p className="mb-2 text-sm uppercase tracking-widest font-medium text-blue-400">{exp.company}</p>
                      <h3 className="text-2xl md:text-3xl font-semibold text-gray-100">{exp.role}</h3>
                    </div>
                    <div className="self-start rounded-full border border-white/10 bg-black/30 px-5 py-2 text-sm font-medium text-gray-300 lg:self-auto select-none">
                      {exp.duration}
                    </div>
                  </div>

                  {/* Horizontal Rule Divider with Micro-Glow on Hover */}
                  <div className="my-6 h-px w-full bg-white/10 transition-colors duration-300 group-hover:bg-blue-500/20" />

                  {/* CASCADING EXPERIENCE LIST */}
                  <div className="space-y-4">
                    {exp.points.map((point, i) => (
                      <motion.div 
                        key={i} 
                        variants={pointVariant}
                        className="flex items-start gap-4"
                      >
                        {/* Bullet Icon Micro-Animation */}
                        <motion.div 
                          whileHover={{ scale: 1.3 }}
                          className="mt-3 h-2 w-2 shrink-0 rounded-full bg-blue-400 group-hover:bg-cyan-300 transition-colors duration-300" 
                        />
                        <p className="leading-8 text-gray-300">{point}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </Reveal>
  );
}
