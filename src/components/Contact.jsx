import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function Contact() {
  // Container variant cascading inner sub-components
  const cardContentVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  // Fluid soft-spring entry layout definitions
  const itemFadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60, damping: 15 } }
  };

  // High-performance spring metrics for interactive action buttons
  const buttonSpring = { type: "spring", stiffness: 350, damping: 18 };

  return (
    <Reveal>
      <section id="contact" className="relative overflow-hidden border-t border-white/10 px-5 py-24 md:px-6 md:py-32">
        
        {/* AMBIENT LIGHT LAYER */}
        {/* Implements a high-performance continuous pulse breathing scale animation loop */}
        <motion.div 
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl pointer-events-none"
        />

        <div className="relative z-10 mx-auto max-w-5xl">
          <motion.div 
            variants={cardContentVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="rounded-[40px] border border-white/10 bg-white/5 p-10 text-center backdrop-blur-xl md:p-16 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.4)]"
          >
            {/* SUB-HEADER BADGE */}
            <motion.p variants={itemFadeUp} className="mb-6 text-sm uppercase tracking-[0.3em] text-blue-400 font-medium">
              Contact
            </motion.p>
            
            {/* MAIN STATEMENT */}
            <motion.h2 variants={itemFadeUp} className="mx-auto max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-6xl text-gray-100">
              Let’s build something modern and meaningful together.
            </motion.h2>
            
            {/* SUPPORTING TEXT SUMMARY */}
            <motion.p variants={itemFadeUp} className="mx-auto mt-8 max-w-2xl text-base md:text-lg leading-9 text-gray-400">
              Interested in frontend development, internships, collaboration opportunities, or cloud-based projects? Feel free to reach out and connect.
            </motion.p>
            
            {/* INTERACTIVE LINK GROUP */}
            <motion.div variants={itemFadeUp} className="mt-14 flex flex-col justify-center gap-5 sm:flex-row flex-wrap">
              {/* Primary Email Target Call-To-Action */}
              <motion.a 
                href="mailto:harshitabisht0515@gmail.com" 
                whileHover={{ scale: 1.05, y: -2, boxShadow: "0 15px 30px rgba(59, 130, 246, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                transition={buttonSpring}
                className="rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 px-8 py-4.5 font-semibold text-zinc-950 inline-flex items-center justify-center min-w-[160px] tracking-wide"
              >
                Send Email
              </motion.a>
              
              {/* LinkedIn Anchor */}
              <motion.a 
                href="https://www.linkedin.com/in/harshitabisht0511" 
                target="_blank" 
                rel="noreferrer" 
                whileHover={{ scale: 1.04, y: -2, borderColor: "rgba(96, 165, 250, 0.5)", backgroundColor: "rgba(255, 255, 255, 0.03)" }}
                whileTap={{ scale: 0.98 }}
                transition={buttonSpring}
                className="rounded-full border border-white/10 bg-black/30 px-8 py-4.5 text-gray-300 font-medium transition-colors duration-200 inline-flex items-center justify-center min-w-[140px]"
              >
                LinkedIn
              </motion.a>
              
              {/* GitHub Anchor */}
              <motion.a 
                href="https://github.com/harshitabisht05" 
                target="_blank" 
                rel="noreferrer" 
                whileHover={{ scale: 1.04, y: -2, borderColor: "rgba(96, 165, 250, 0.5)", backgroundColor: "rgba(255, 255, 255, 0.03)" }}
                whileTap={{ scale: 0.98 }}
                transition={buttonSpring}
                className="rounded-full border border-white/10 bg-black/30 px-8 py-4.5 text-gray-300 font-medium transition-colors duration-200 inline-flex items-center justify-center min-w-[140px]"
              >
                GitHub
              </motion.a>
            </motion.div>
            
            {/* CORE FOOTER FOCUS STATEMENTS */}
            <motion.p variants={itemFadeUp} className="mt-16 text-xs md:text-sm text-zinc-500 max-w-md mx-auto leading-relaxed border-t border-white/5 pt-8 select-none">
              Currently focused on frontend engineering, scalable UI systems, and cloud technologies.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </Reveal>
  );
}
