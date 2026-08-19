import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function About() {
  const stats = [
    ["2+", "Development Projects"],
    ["2", "Technical Internships"],
    ["AWS", "Cloud & Deployment Experience"],
    ["UI", "Responsive Interface Design"],
  ];

  // Grid container orchestration variants
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  // Upward fade-in for paragraphs and sub-elements
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 60, damping: 15 } 
    },
  };

  // Sophisticated scale + slide for the metric blocks
  const statCardVariant = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { type: "spring", stiffness: 50, damping: 12 } 
    },
  };

  return (
    <Reveal>
      <section
        id="about"
        className="relative border-t border-white/10 px-5 py-24 md:px-6 md:py-32 overflow-hidden"
      >
        <div className="relative z-10 mx-auto max-w-6xl">
          
          {/* HEADER SECTION */}
          <div className="mb-20">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-400">
              About Me
            </p>
            <h2 className="max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-6xl">
             Building modern, thoughtful web applications.
            </h2>
          </div>

          <div className="grid items-start gap-16 lg:grid-cols-2">
            
            {/* LEFT COLUMN: BIO TEXT */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-8"
            >
              <motion.p variants={fadeUpVariant} className="text-lg leading-9 text-gray-300">
                I build responsive and interactive web applications with a strong focus on frontend development, clean UI, and seamless user experiences.
              </motion.p>
              
              <motion.p variants={fadeUpVariant} className="leading-8 text-gray-400">
                My work primarily involves React, JavaScript, Tailwind CSS, reusable components, and API integrations, while also working across backend systems, databases, and cloud technologies.
              </motion.p>
              
              <motion.p variants={fadeUpVariant} className="leading-8 text-gray-400">
                I’ve built applications using FastAPI and SQL databases and have hands-on experience with AWS, deployment workflows, and modern web development tools.
              </motion.p>
              
              {/* TAG BADGES */}
              <motion.div variants={fadeUpVariant} className="flex flex-wrap gap-4 pt-4">
                {["Frontend Development", "Cloud Computing", "UI Engineering"].map(
                  (x) => (
                    <motion.div
                      key={x}
                      whileHover={{ y: -4, scale: 1.03, borderColor: "rgba(96, 165, 250, 0.3)" }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl cursor-default shadow-md"
                    >
                      {x}
                    </motion.div>
                  )
                )}
              </motion.div>
            </motion.div>

            {/* RIGHT COLUMN: METRIC STATS */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-2 gap-5"
            >
              {stats.map(([value, label]) => (
                <motion.div
                  key={label}
                  variants={statCardVariant}
                  whileHover={{ 
                    y: -10, 
                    scale: 1.03, 
                    borderColor: "rgba(96, 165, 250, 0.4)",
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)"
                  }}
                  className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 cursor-pointer"
                >
                  <motion.h3 
                    className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-4xl font-bold text-transparent md:text-5xl inline-block"
                  >
                    {value}
                  </motion.h3>
                  <p className="mt-4 leading-7 text-gray-400">{label}</p>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>
    </Reveal>
  );
}
