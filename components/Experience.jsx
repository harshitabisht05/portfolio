"use client";

import Reveal from "./Reveal";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Sentienta Quality AI",
    role: "Frontend Intern",
    duration: "June 2025 — July 2025",

    points: [
      "Built responsive UI components using Next.js and Tailwind CSS.",
      "Integrated FastAPI backend services with JWT authentication.",
      "Worked on dashboards and dynamic data visualizations.",
    ],
  },

  {
    company: "Phemesoft-IBM",
    role: "SDE Intern",
    duration: "June 2025 — July 2025",

    points: [
      "Contributed to backend development using FastAPI and Python.",
      "Worked with AWS services including EC2, Lambda, and S3.",
      "Supported scalable API and cloud deployment workflows.",
    ],
  },
];

export default function Experience() {
  return (
    <Reveal>
      <section
        id="experience"
        className="py-24 md:py-32 px-5 md:px-6 border-t border-white/10 relative"
      >
        <div className="max-w-6xl mx-auto relative z-10">

          {/* Header */}
          <div className="mb-20">

            <p className="text-blue-400 uppercase tracking-[0.3em] text-sm mb-4">
              Experience
            </p>

            <h2 className="text-3xl sm:text-3xl sm:text-4xl md:text-6xl font-bold leading-tight max-w-4xl">
              Building scalable applications through real-world experience.
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative border-l border-white/10 ml-4 space-y-16">

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                }}
                className="relative pl-10"
              >

                {/* Timeline Dot */}
                <div className="absolute left-[-9px] top-2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-400 to-cyan-300 shadow-lg shadow-blue-500/30"></div>

                {/* Card */}
                <div className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-blue-400/40 transition duration-500">

                  {/* Top Row */}
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

                    <div>

                      <p className="text-blue-400 text-sm uppercase tracking-widest mb-3">
                        {exp.company}
                      </p>

                      <h3 className="text-3xl font-semibold leading-tight">
                        {exp.role}
                      </h3>
                    </div>

                    {/* Duration */}
                    <div className="self-start lg:self-auto px-5 py-2 rounded-full border border-white/10 bg-black/30 text-sm text-gray-300">
                      {exp.duration}
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="w-full h-px bg-white/10 my-8"></div>

                  {/* Points */}
                  <div className="space-y-5">

                    {exp.points.map((point, i) => (
                      <div
                        key={i}
                        className="flex gap-4 items-start"
                      >

                        <div className="w-2 h-2 rounded-full bg-blue-400 mt-3 shrink-0"></div>

                        <p className="text-gray-300 leading-8">
                          {point}
                        </p>
                      </div>
                    ))}

                  </div>
                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </section>
    </Reveal>
  );
}