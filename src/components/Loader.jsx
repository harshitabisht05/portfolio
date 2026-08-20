import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-black"
    >
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl md:text-6xl"
        >
          Harshita Bisht
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-4 text-sm uppercase tracking-[0.3em] text-gray-500"
        >
          Software Developer
        </motion.p>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "180px" }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
          className="mx-auto mt-8 h-[2px] rounded-full bg-gradient-to-r from-blue-400 to-cyan-300"
        />
      </div>
    </motion.div>
  );
}
