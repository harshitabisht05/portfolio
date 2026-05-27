"use client";

import Reveal from "./Reveal";
import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Next.js",
      "Tailwind CSS",
      "React",
    ],
  },

  {
    title: "Backend & Database",
    skills: [
      "MySQL",
      "FastAPI",
      "Node.js",
      "SQL",
    ],
  },

  {
    title: "Cloud & Tools",
    skills: [
      "AWS",
      "Git",
      "GitHub",
      "Vercel",
    ],
  },
];

export default function Skills() {
  return (
    <Reveal>
      <section
        id="skills"
        className="py-24 md:py-32 px-5 md:px-6 border-t border-white/10 relative"
      >
        <div className="max-w-6xl mx-auto relative z-10">

          {/* Header */}
          <div className="mb-20">

            <p className="text-blue-400 uppercase tracking-[0.3em] text-sm mb-4">
              Skills
            </p>

            <h2 className="text-3xl sm:text-3xl sm:text-4xl md:text-6xl font-bold leading-tight max-w-3xl">
              Technologies and tools I use to build scalable modern applications.
            </h2>
          </div>

          {/* Skill Groups */}
          <div className="grid lg:grid-cols-3 gap-8">

            {skillGroups.map((group, index) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                }}
                className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-blue-400/40 transition duration-500"
              >

                {/* Title */}
                <h3 className="text-2xl font-semibold mb-8">
                  {group.title}
                </h3>

                {/* Skills */}
                <div className="flex flex-wrap gap-4">

                  {group.skills.map((skill) => (
                    <div
                      key={skill}
                      className="px-5 py-3 rounded-2xl border border-white/10 bg-black/30 hover:border-blue-400 hover:bg-blue-500/10 transition duration-300 text-sm"
                    >
                      {skill}
                    </div>
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