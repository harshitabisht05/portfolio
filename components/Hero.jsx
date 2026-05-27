"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-40 px-6 overflow-hidden flex items-center">

      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-[400px] h-[400px] bg-blue-500/10 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto w-full relative z-10">

<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[700px]">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col justify-center"
          >

            <p className="text-blue-400 text-lg mb-4">
              Hello, I'm
            </p>

            <h1 className="text-4xl sm:text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6">
              Harshita Bisht
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Building Modern Web Experiences
              </span>
            </h1>

            <p className="text-gray-400 text-lg leading-8 max-w-xl mb-10">
              Cloud Computing student and frontend developer
              building scalable web applications with
              Next.js, Tailwind CSS, AWS, and modern UI
              technologies.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">

              <a
                href="#projects"
                className="bg-gradient-to-r from-blue-500 to-cyan-400 px-8 py-4 rounded-full font-semibold hover:scale-105 transition duration-300"
              >
                View Projects
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                className="border border-white/10 bg-white/5 backdrop-blur-xl px-8 py-4 rounded-full hover:border-blue-400 transition duration-300"
              >
                Resume
              </a>

            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-3 mt-8 text-sm text-gray-400">
              <span>Next.js</span>
              <span>•</span>
              <span>Tailwind CSS</span>
              <span>•</span>
              <span>AWS</span>
              <span>•</span>
              <span>MySQL</span>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center items-center"
          >

            {/* Glow */}
            <div className="absolute w-[350px] h-[350px] bg-blue-500/20 blur-3xl rounded-full"></div>

            {/* Image */}
            <div className="relative w-[250px] h-[320px] md:w-[320px] md:h-[400px] group rounded-[40px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl">

              <img
                src="/profile/harshita.jpg"
                alt="Harshita"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700 hover:border-blue-400/40 transition duration-500"
              />

            </div>
</motion.div>
        </div>
      </div>
    </section>
  );
}