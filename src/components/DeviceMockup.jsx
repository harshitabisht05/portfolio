import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Circle } from "lucide-react";

export default function DeviceMockup({ image, title }) {
  // Setup motion values for 3D mouse tracking tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth out the raw mouse movements using springs
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  // Map mouse positions to rotation degrees (-5deg to 5deg max tilt)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-5, 5]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate mouse position relative to card dimensions (-0.5 to 0.5 center origin)
    const mouseX = (e.clientX - rect.left) / width - 0.5;
    const mouseY = (e.clientY - rect.top) / height - 0.5;
    
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    // Reset layout seamlessly back to flat orientation when mouse leaves bounds
    x.set(0);
    y.set(0);
  };

  // Browser control dots entry/hover configurations
  const dotsContainer = {
    initial: {},
    hover: { transition: { staggerChildren: 0.05 } }
  };

  const dotHover = {
    initial: { scale: 1 },
    hover: { scale: 1.25, transition: { type: "spring", stiffness: 300 } }
  };

  return (
    <div 
      className="perspective-1000" // Enables proper 3D depth calculations in CSS
      style={{ perspective: "1000px" }}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY }}
        initial="initial"
        whileHover="hover"
        className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0a0a0a] shadow-2xl transition-colors duration-300 hover:border-white/20 will-change-transform group cursor-pointer"
      >
        {/* BROWSER TOP NAVIGATION HEADER */}
        <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-5 py-4 select-none">
          <motion.div variants={dotsContainer} className="flex items-center gap-1.5">
            <motion.div variants={dotHover}><Circle size={10} className="fill-red-500/70 text-red-500/40" /></motion.div>
            <motion.div variants={dotHover}><Circle size={10} className="fill-yellow-500/70 text-yellow-500/40" /></motion.div>
            <motion.div variants={dotHover}><Circle size={10} className="fill-green-500/70 text-green-500/40" /></motion.div>
          </motion.div>
          <div className="ml-4 truncate text-xs font-medium tracking-wide text-gray-400 group-hover:text-gray-300 transition-colors duration-200">
            {title}
          </div>
        </div>

        {/* IMAGE PREVIEW FRAMEWORK */}
        <div className="relative overflow-hidden">
          <motion.img 
            src={image} 
            alt={title} 
            variants={{
              initial: { scale: 1 },
              hover: { scale: 1.03 }
            }}
            transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }} // Elegant ease-out cinematic pan curve
            className="w-full object-cover"
          />
          {/* Subtle darkness gradient overlay layout asset */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />
          
          {/* Ambient Lighting Highlight Sheen */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/0 via-white/[0.02] to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </motion.div>
    </div>
  );
}
