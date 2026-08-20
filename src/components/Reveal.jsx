import { motion } from "framer-motion";

/**
 * Enhanced Reveal Component
 * @param {string} direction - "up", "down", "left", "right"
 * @param {number} delay - manual delay for staggered effects
 * @param {number} width - can be used to wrap elements specifically (e.g. "fit-content")
 */
export default function Reveal({ children, direction = "up", delay = 0, width = "100%" }) {
  const variants = {
    hidden: { 
      opacity: 0, 
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
      x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
      scale: 0.95 // Subtle scale-up adds a professional depth
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      x: 0,
      scale: 1,
      transition: {
        type: "spring", // Spring physics feels more organic than linear ease
        stiffness: 70,
        damping: 20,
        duration: 0.8,
        delay: delay,
       
      }
    }
  };

  return (
    <div style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of element is visible
      >
        {children}
      </motion.div>
    </div>
  );
}
