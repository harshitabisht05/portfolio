"use client";

import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[99999] bg-black flex items-center justify-center"
    >

      <div className="text-center backdrop-blur-xl">

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"
        >
          Harshita Bisht
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.4,
          }}
          className="text-gray-500 mt-4 tracking-[0.3em] uppercase text-sm"
        >
          Software Developer
        </motion.p>

        {/* Loading Line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "180px" }}
          transition={{
            duration: 1.4,
            ease: "easeInOut",
          }}
          className="h-[2px] bg-gradient-to-r from-blue-400 to-cyan-300 mx-auto mt-8 rounded-full"
        />
      </div>
    </motion.div>
  );
}