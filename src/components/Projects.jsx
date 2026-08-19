import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function Projects() {
  // Container variants orchestrating grid cascade
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

  // Card movement variants managing soft-spring layout lifting
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.98 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { type: "spring", stiffness: 65, damping: 15 } 
    },
    hover: {
      y: -12,
      borderColor: "rgba(96, 165, 250, 0.4)",
      boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.15)",
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  // Tracking chevron arrow movement animation properties
  const arrowVariants = {
    initial: { x: 0 },
    hover: { x: 6, transition: { type: "spring", stiffness: 200, damping: 12 } }
  };

  return (
    <section id="projects" className="relative border-t border-white/10 px-5 py-24 md:px-6 md:py-32 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-6xl">
        
        {/* HEADER SECTION */}
        <div className="mb-20">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-400">Selected Work</p>
          <h2 className="max-w-4xl text-3xl font-bold leading-tight sm:text-4xl md:text-6xl">
A selection of web applications and digital experiences I've built.          </h2>
        </div>

        {/* PROJECTS SELECTION GRID */}
        <motion.div 
          variants={gridContainerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 md:grid-cols-2 xl:grid-cols-3"
        >
          {projects.map((project, index) => (
            <Link key={project.slug} to={`/projects/${project.slug}`} className="block">
              <motion.div
                variants={cardVariants}
                whileHover="hover"
                className="group relative h-full cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-colors duration-300"
              >
                
                {/* CARD IMAGERY WORKSPACE */}
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="h-64 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Subtle darkening vignette blend */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80" />
                  
                  {/* Numeric Marker Badge */}
                  <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-sm font-medium backdrop-blur-xl select-none text-gray-200">
                    0{index + 1}
                  </div>
                </div>

                {/* DETAILS WRAPPER FRAME */}
                <div className="p-6 md:p-8 flex flex-col justify-between h-[calc(100%-256px)]">
                  <div>
                    <h3 className="text-2xl font-semibold leading-tight md:text-3xl text-gray-100 transition-colors duration-300 group-hover:text-white">
                      {project.title}
                    </h3>
                    <p className="mt-4 leading-8 text-gray-400 text-sm md:text-base">
                      {project.description}
                    </p>
                    
                    {/* TECHNOLOGY USED PILLS */}
                    <div className="mt-6 flex flex-wrap gap-2.5">
                      {project.tech.map((tech) => (
                        <div 
                          key={tech} 
                          className="rounded-2xl border border-white/10 bg-black/30 px-3.5 py-1.5 text-xs text-gray-300 transition-colors duration-300 group-hover:border-blue-500/30 group-hover:bg-blue-500/5"
                        >
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* BOTTOM ACTION LINK ANCHOR */}
                  <div className="mt-10 flex items-center justify-between pt-4 border-t border-white/5">
                    <p className="text-sm font-medium text-blue-400 group-hover:text-cyan-400 transition-colors duration-300 tracking-wide">
                      View Case Study
                    </p>
                    
                    {/* Circle Callout Button with Animated Vector Arrow */}
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-300 transition-colors duration-300 group-hover:border-blue-400 group-hover:text-blue-400">
                      <motion.span variants={arrowVariants} className="inline-block">
                        →
                      </motion.span>
                    </div>
                  </div>

                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
