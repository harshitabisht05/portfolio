import { motion, useScroll, useSpring } from "framer-motion";
export default function ScrollProgress(){const {scrollYProgress}=useScroll();const scaleX=useSpring(scrollYProgress,{stiffness:120,damping:30,restDelta:.001});return <motion.div className="fixed left-0 right-0 top-0 z-[9999] h-[3px] origin-left bg-gradient-to-r from-blue-400 to-cyan-300" style={{scaleX}}/>;}
