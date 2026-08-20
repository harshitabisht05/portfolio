import { motion } from "framer-motion";

export default function ProjectResumeButtons() {
  // Container animation for sequential project card entry
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  // Individual project card entry and hover animations
  const projectVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100 } },
    hover: (customIndex) => ({
      y: -16,
      scale: 1.08,
      rotate: customIndex === 0 ? -6 : customIndex === 2 ? 6 : 0,
      zIndex: 50,
      transition: { duration: 0.2, ease: "easeOut" },
    }),
  };

  // Resume section entrance and interactive animations
  const resumeContainerVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { delay: 0.5, duration: 0.6, staggerChildren: 0.15, delayChildren: 0.6 } 
    }
  };

  const resumeCardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 80 } },
    hover: { y: -14, scale: 1.06, rotate: -3, transition: { duration: 0.2 } }
  };

  return (
    <div className="flex -translate-y-8 items-end gap-6 select-none">
      
      {/* PROJECTS CONTAINER */}
      {/* Increased container height to h-[170px] to give the layout room to breathe */}
      <div className="group relative block h-[170px] w-[290px]">
        
        {/* Blue pill base */}
        <div className="absolute bottom-0 left-0 z-0 h-[76px] w-full rounded-full bg-[#4b4bd3]" />
        
        {/* Animated Project Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="absolute left-1/2 top-0 z-10 flex"
          style={{ x: "-50%" }} // Safe Framer Motion centering strategy
        >
          {/* QuickRide */}
          <motion.Link
            to ="/projects/quickride"
            variants={projectVariants}
            whileHover="hover"
            custom={0}
            className="relative h-[110px] w-[92px] overflow-hidden rounded-[25px] border border-white/40 bg-white/90 shadow-[0_8px_25px_rgba(0,0,0,0.25)] backdrop-blur-xl origin-bottom"
          >
            <img src="/projects/quickridev2.png" alt="QuickRide" className="h-[72px] w-full object-cover" />
            <p className="truncate px-1 pt-1 text-center text-[10px] font-medium leading-tight text-gray-900">
              QuickRide
            </p>
          </motion.Link>

          {/* Voice Agent */}
          <motion.Link
            to="/projects/voice-agent"
            variants={projectVariants}
            whileHover="hover"
            custom={1}
            className="relative -ml-5 h-[110px] w-[92px] overflow-hidden rounded-[25px] border border-white/40 bg-white/90 shadow-[0_8px_25px_rgba(0,0,0,0.25)] backdrop-blur-xl origin-bottom"
          >
            <img src="/projects/voiceagent.png" alt="Voice Agent" className="h-[72px] w-full object-cover" />
            <p className="truncate px-1 pt-1 text-center text-[10px] font-medium leading-tight text-gray-900">
              Voice Agent
            </p>
          </motion.Link>

          {/* Portfolio */}
          <motion.Link
            to="/projects/portfolio"
            variants={projectVariants}
            whileHover="hover"
            custom={2}
            className="relative -ml-5 h-[110px] w-[92px] overflow-hidden rounded-[25px] border border-white/40 bg-white/90 shadow-[0_8px_25px_rgba(0,0,0,0.25)] backdrop-blur-xl origin-bottom"
          >
            <img src="/projects/portfolio.png" alt="Portfolio" className="h-[72px] w-full object-cover" />
            <p className="truncate px-1 pt-1 text-center text-[10px] font-medium leading-tight text-gray-900">
              Portfolio
            </p>
          </motion.Link>
        </motion.div>

        {/* Projects text */}
        {/* Changed bottom positioning class to sit comfortably inside the pill */}
        <span className="absolute bottom-[14px] left-1/2 z-40 -translate-x-1/2 whitespace-nowrap text-[22px] font-medium leading-none text-white pointer-events-none tracking-wide">
          Projects
        </span>
      </div>

      {/* RESUME CONTAINER */}
      {/* Matched heights to keep elements on a clean horizontal baseline */}
      <motion.a
        href="/resume.pdf"
        target="_blank"
        rel="noreferrer"
        initial="hidden"
        animate="show"
        whileHover="hover"
        variants={resumeContainerVariants}
        className="group relative block h-[170px] w-[130px]"
      >
        {/* Resume pill base */}
        <motion.div 
          variants={{
            hover: { scale: 1.02, borderColor: "rgba(96, 165, 250, 0.4)", backgroundColor: "rgba(255, 255, 255, 0.07)" }
          }}
          className="absolute bottom-0 left-0 h-[76px] w-full rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-all duration-300" 
        />

        {/* Animated Resume preview card */}
        <motion.div 
          variants={resumeCardVariants}
          className="absolute left-1/2 top-4 z-20 h-[96px] w-[92px] overflow-hidden rounded-[25px] border border-white/40 bg-white/90 shadow-[0_8px_25px_rgba(0,0,0,0.25)] backdrop-blur-xl origin-bottom"
          style={{ x: "-50%" }}
        >
          <img src="/projects/resume.png" alt="Resume" className="h-full w-full object-cover" />
        </motion.div>

        {/* Resume text */}
        {/* Adjusted spacing to align perfectly with the projects label */}
        <span className="absolute bottom-[16px] left-1/2 z-40 -translate-x-1/2 whitespace-nowrap text-[20px] font-medium leading-none text-white pointer-events-none tracking-wide">
          Resume
        </span>
      </motion.a>
    </div>
  );
}
