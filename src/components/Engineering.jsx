import { motion } from "framer-motion";
import Reveal from "./Reveal";

const principles = [
  { title: "Responsive & Adaptive Design", description: "Build interfaces that adapt smoothly across screen sizes with flexible layouts, consistent spacing, and intuitive interactions." },
  { title: "Performance", description: "Keep applications lightweight and responsive through optimized assets, efficient rendering, and practical frontend implementation." },
  { title: "Usability & Accessibility", description: "Use semantic HTML, readable typography, clear interactions, and accessible UI patterns to create better experiences for different users." },
  { title: "Maintainable Architecture", description: "Structure applications with reusable components, modular routing, organized API layers, and clear separation of responsibilities." },
];

export default function Engineering() {
  // Container orchestrator to cascade grid items safely
  const gridContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  // Modern soft-spring entry transition for individual cards
  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.98 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { type: "spring", stiffness: 70, damping: 15 } 
    },
    hover: {
      y: -10,
      scale: 1.02,
      borderColor: "rgba(96, 165, 250, 0.4)",
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.35)",
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  // Subtle shift for index tracking numbers on hover
  const numberVariants = {
    initial: { x: 0, y: 0, scale: 1 },
    hover: { x: 4, y: -2, scale: 1.05, color: "#22d3ee" } // Shifts and transitions color to cyan-400
  };

  return (
    <Reveal>
      <section id="engineering" className="relative border-t border-white/10 px-5 py-32 md:px-6 overflow-hidden">
        <div className="relative z-10 mx-auto max-w-6xl">
          
          {/* HEADER SECTION */}
          <div className="mb-20">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-400">Engineering Approach</p>
            <h2 className="max-w-4xl text-3xl font-bold leading-tight sm:text-4xl md:text-6xl">
              Building thoughtful, reliable, and user-focused applications.
            </h2>
          </div>

          {/* GRID PANELS */}
          <motion.div 
            variants={gridContainerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid gap-8 md:grid-cols-2"
          >
            {principles.map((item, index) => (
              <motion.div
                key={item.title}
                variants={cardVariants}
                whileHover="hover"
                className="group relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-colors duration-300 cursor-default select-none"
              >
                {/* INDEX INDEX MARKER */}
                <motion.p 
                  variants={numberVariants}
                  initial="initial"
                  whileHover="hover"
                  className="mb-6 text-sm font-semibold tracking-widest text-blue-400 inline-block transition-colors duration-200"
                >
                  0{index + 1}
                </motion.p>
                
                {/* PRINCIPLE TITLE */}
                <h3 className="text-2xl font-semibold tracking-wide text-gray-100 transition-colors duration-300 group-hover:text-white">
                  {item.title}
                </h3>
                
                {/* DESCRIPTION CONTENT */}
                <p className="mt-6 leading-8 text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
                  {item.description}
                </p>
                
                {/* OPTIONAL: Ambient background glow block that activates on card hover */}
                <div className="absolute inset-0 z-[-1] rounded-3xl opacity-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/0 transition-opacity duration-500 group-hover:opacity-100" />
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>
    </Reveal>
  );
}
