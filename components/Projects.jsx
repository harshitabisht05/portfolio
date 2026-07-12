"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    slug: "quickride",

    title: "QuickRide",

    description:
      "A full-stack vehicle rental platform built with React and FastAPI, featuring JWT authentication, real-time vehicle availability, secure booking workflows, and a responsive user experience.",

    image: "/projects/quickridev2.png",

      tech: [
      "React",
      "Tailwind CSS",
      "FastAPI",
      "Python",
      "SQLAlchemy",
      "JWT",
      "MySQL"
    ]
  },

  {
    slug: "voice-agent",

    title: "Voice Agent MVP",

    description:
      "Voice-controlled assistant using Web Speech API with real-time browser interaction.",

    tech: [
      "JavaScript",
      "Web Speech API",
    ],

    image: "/projects/voiceagent.png",
  },

  {
    slug: "portfolio",

    title: "Portfolio",

    description:
      "Modern frontend developer portfolio built with Next.js, Tailwind CSS, and Framer Motion.",

    tech: [
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "Vercel",
    ],

    image: "/projects/portfolio.png",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 md:py-32 px-5 md:px-6 border-t border-white/10 relative"
    >
      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <div className="mb-20">

          <p className="text-blue-400 uppercase tracking-[0.3em] text-sm mb-4">
            Selected Work
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight max-w-4xl">
            Modern web projects built with scalable frontend systems.
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
            >

              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:-translate-y-3 hover:border-blue-400/40 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 cursor-pointer"
              >

                {/* Image Container */}
                <div className="relative overflow-hidden">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-70"></div>

                  {/* Project Number */}
                  <div className="absolute top-5 left-5 px-4 py-2 rounded-full border border-white/10 bg-black/40 backdrop-blur-xl text-sm text-white">
                    0{index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">

                  <h3 className="text-2xl md:text-3xl font-semibold leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 leading-8 mt-5">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-3 mt-8">

                    {project.tech.map((tech) => (
                      <div
                        key={tech}
                        className="px-4 py-2 rounded-2xl border border-white/10 bg-black/30 text-sm hover:border-blue-400 hover:bg-blue-500/10 transition duration-300"
                      >
                        {tech}
                      </div>
                    ))}

                  </div>

                  {/* Bottom Row */}
                  <div className="flex items-center justify-between mt-10">

                    <p className="text-blue-400 text-sm font-medium">
                      View Case Study
                    </p>

                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-blue-400 group-hover:text-blue-400 transition duration-300">
                      →
                    </div>
                  </div>

                </div>

              </motion.div>

            </Link>
          ))}

        </div>
      </div>
    </section>
  );
}