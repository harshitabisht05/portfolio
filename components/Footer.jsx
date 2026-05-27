"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-blue-500/10 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto px-6 py-12 relative z-10">

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Harshita Bisht
            </h3>

            <p className="text-gray-500 mt-3 max-w-md leading-7">
              Frontend developer focused on modern UI,
              scalable frontend systems, and cloud-powered
              web applications.
            </p>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-wrap items-center gap-6 text-sm"
          >

            <a
              href="#about"
              className="text-gray-400 hover:text-blue-400 transition duration-300"
            >
              About
            </a>

            <a
              href="#projects"
              className="text-gray-400 hover:text-blue-400 transition duration-300"
            >
              Projects
            </a>

            <a
              href="#skills"
              className="text-gray-400 hover:text-blue-400 transition duration-300"
            >
              Skills
            </a>

            <a
              href="#contact"
              className="text-gray-400 hover:text-blue-400 transition duration-300"
            >
              Contact
            </a>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">

          <p>
            © 2026 Harshita Bisht. All rights reserved.
          </p>

          <p>
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}