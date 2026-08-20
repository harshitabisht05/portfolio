import { motion } from "framer-motion";
import Reveal from "./Reveal";

const skillGroups = [
  { title: "Frontend", skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "React Router"] },
  { title: "Backend & Database", skills: ["FastAPI", "Node.js", "MySQL", "MongoDB", "SQL", "REST APIs"] },
  { title: "Cloud & Tools", skills: ["AWS", "Git", "GitHub", "Vercel", "Figma"] },
];

export default function Skills() {
  // Column container orchestrations
  const columnVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 15,
        staggerChildren: 0.06, // Cascades inner skill pills
        delayChildren: 0.2,
      },
    },
  };

  // Skill pill individual transitions
  const pillVariants = {
    hidden: { opacity: 0, scale: 0.85, y: 15 },
    show: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 120, damping: 14 } 
    },
  };

  return (
    <Reveal>
      <section id="skills" className="relative border-t border-white/10 px-5 py-24 md:px-6 md:py-32 overflow-hidden">
        <div className="relative z-10 mx-auto max-w-6xl">
          
          {/* HEADER HEADER */}
          <div className="mb-20">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-400">Skills</p>
            <h2 className="max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-6xl">
              Technologies and tools I use to build scalable modern applications.
            </h2>
          </div>

          {/* SKILLS CONTAINER GRID */}
          <div className="grid gap-8 lg:grid-cols-3">
            {skillGroups.map((group, index) => (
              <motion.div
                key={group.title}
                variants={columnVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                // Keeps stagger columns cleanly separated on page load timeline
                transition={{ delay: index * 0.15 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:border-blue-400/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
              >
                <h3 className="mb-8 text-2xl font-semibold tracking-wide text-gray-100">{group.title}</h3>
                
                {/* FLEXIBLE PILL BASKET */}
                <div className="flex flex-wrap gap-4">
                  {group.skills.map((skill) => (
                    <motion.div
                      key={skill}
                      variants={pillVariants}
                      whileHover={{ 
                        y: -4, 
                        scale: 1.04, 
                        borderColor: "rgba(96, 165, 250, 0.6)", 
                        backgroundColor: "rgba(59, 130, 246, 0.12)",
                        boxShadow: "0 8px 20px rgba(59, 130, 246, 0.15)"
                      }}
                      className="rounded-2xl border border-white/10 bg-black/30 px-5 py-3 text-sm font-medium text-gray-300 cursor-default select-none transition-shadow duration-200"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </Reveal>
  );
}
