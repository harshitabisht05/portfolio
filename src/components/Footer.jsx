import { motion } from "framer-motion";

export default function Footer() {
  // Navigation layout item variants
  const linkVariants = {
    initial: { y: 0, color: "rgba(156, 163, 175, 1)" }, // text-gray-400
    hover: { 
      y: -2, 
      color: "rgba(96, 165, 250, 1)", // text-blue-400
      transition: { type: "spring", stiffness: 300, damping: 15 } 
    }
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10 select-none bg-[#030303]">
      
      {/* AMBIENT LIGHT BASE LAYER */}
      {/* Implements a high-performance continuous pulse breathing scale animation loop */}
      <motion.div 
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-0 left-1/2 h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl pointer-events-none"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          
          {/* LOGO & BIO PANEL */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h3 className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-2xl font-bold text-transparent tracking-wide">
              Harshita Bisht
            </h3>
            <p className="mt-3 max-w-md text-sm md:text-base leading-7 text-gray-500">
              Building responsive and interactive web applications with a focus on clean interfaces, reliable functionality, and modern web technologies.
            </p>
          </motion.div>

          {/* QUICK LINKS MULTI-ANCHOR */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.6, delay: 0.12, ease: "easeOut" }} 
            className="flex flex-wrap items-center gap-6 text-sm font-medium"
          >
            {["About", "Skills", "Experience","Projects", "Contact"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                variants={linkVariants}
                initial="initial"
                whileHover="hover"
                className="inline-block transition-colors duration-150"
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* BOTTOM METADATA BAR */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-xs md:text-sm text-gray-500 md:flex-row">
          <p>© 2026 Harshita Bisht. All rights reserved.</p>
          <div className="flex items-center gap-2 font-medium tracking-wide">
            <span>Built with</span>
            <span className="text-gray-400">React</span>
            <span className="text-zinc-700">•</span>
            <span className="text-gray-400">Vite</span>
            <span className="text-zinc-700">•</span>
            <span className="text-gray-400">Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
