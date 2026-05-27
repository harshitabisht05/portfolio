"use client";

import Reveal from "./Reveal";
import { motion } from "framer-motion";

export default function About() {
  return (
    <Reveal>
      <section
        id="about"
        className="py-24 md:py-32 px-5 md:px-6 border-t border-white/10 relative"
      >
        <div className="max-w-6xl mx-auto relative z-10">

          {/* Section Header */}
          <div className="mb-20">
            <p className="text-blue-400 uppercase tracking-[0.3em] text-sm mb-4">
              About Me
            </p>

            <h2 className="text-3xl sm:text-3xl sm:text-4xl md:text-6xl font-bold leading-tight max-w-3xl">
              Building scalable and modern web applications.
            </h2>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >

              <p className="text-gray-300 text-lg leading-9">
                I’m a Computer Science student specializing in
                Cloud Computing and Virtualization Technologies
                at UPES, Dehradun.
              </p>

              <p className="text-gray-400 leading-8">
                My focus is building responsive, scalable, and
                visually polished web applications using modern
                frontend technologies like Next.js, Tailwind CSS,
                and JavaScript.
              </p>

              <p className="text-gray-400 leading-8">
                Beyond frontend development, I’ve explored cloud
                infrastructure, AWS deployment workflows, API
                integrations, and backend systems using FastAPI
                and MySQL.
              </p>

              {/* Small Highlights */}
              <div className="flex flex-wrap gap-4 pt-4">

                <div className="px-5 py-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
                  Frontend Development
                </div>

                <div className="px-5 py-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
                  Cloud Computing
                </div>

                <div className="px-5 py-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
                  UI Engineering
                </div>

              </div>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-5"
            >

              {/* Card 1 */}
              <div className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-blue-400/40 transition duration-500">

                <h3 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  2+
                </h3>

                <p className="text-gray-400 mt-4 leading-7">
                  Real-world development projects
                </p>
              </div>

              {/* Card 2 */}
              <div className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-blue-400/40 transition duration-500">

                <h3 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  2
                </h3>

                <p className="text-gray-400 mt-4 leading-7">
                  Technical internships completed
                </p>
              </div>

              {/* Card 3 */}
              <div className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-blue-400/40 transition duration-500">

                <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  AWS
                </h3>

                <p className="text-gray-400 mt-4 leading-7">
                  Deployment and cloud infrastructure experience
                </p>
              </div>

              {/* Card 4 */}
              <div className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-blue-400/40 transition duration-500">

                <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  UI
                </h3>

                <p className="text-gray-400 mt-4 leading-7">
                  Modern responsive interface design
                </p>
              </div>

            </motion.div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}