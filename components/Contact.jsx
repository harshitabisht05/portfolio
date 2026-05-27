"use client";

import Reveal from "./Reveal";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <Reveal>
      <section
        id="contact"
        className="py-24 md:py-32 px-5 md:px-6 border-t border-white/10 relative overflow-hidden"
      >

        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-3xl rounded-full"></div>

        <div className="max-w-5xl mx-auto relative z-10">

          {/* Main Card */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl p-10 md:p-16 text-center"
          >

            {/* Small Label */}
            <p className="text-blue-400 uppercase tracking-[0.3em] text-sm mb-6">
              Contact
            </p>

            {/* Heading */}
            <h2 className="text-3xl sm:text-3xl sm:text-4xl md:text-6xl font-bold leading-tight max-w-3xl mx-auto">
              Let’s build something modern and meaningful together.
            </h2>

            {/* Description */}
            <p className="text-gray-400 text-lg leading-9 max-w-2xl mx-auto mt-8">
              Interested in frontend development, internships,
              collaboration opportunities, or cloud-based projects?
              Feel free to reach out and connect.
            </p>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row gap-5 justify-center mt-14">

              {/* Email */}
              <a
                href="mailto:harshitabisht0515@gmail.com"
                className="group bg-gradient-to-r from-blue-500 to-cyan-400 text-black font-semibold px-8 py-5 rounded-full hover:scale-105 transition duration-300"
              >
                Send Email
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/harshitabisht0511"
                target="_blank"
                className="border border-white/10 bg-black/30 backdrop-blur-xl px-8 py-5 rounded-full hover:border-blue-400 hover:text-blue-400 transition duration-300"
              >
                LinkedIn
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/harshitabisht05"
                target="_blank"
                className="border border-white/10 bg-black/30 backdrop-blur-xl px-8 py-5 rounded-full hover:border-blue-400 hover:text-blue-400 transition duration-300"
              >
                GitHub
              </a>

            </div>

            {/* Bottom Text */}
            <p className="text-gray-500 text-sm mt-12">
              Currently focused on frontend engineering,
              scalable UI systems, and cloud technologies.
            </p>
          </motion.div>
        </div>
      </section>
    </Reveal>
  );
}