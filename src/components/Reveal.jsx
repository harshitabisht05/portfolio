import { motion } from "framer-motion";
export default function Reveal({ children }) { return <motion.div initial={{opacity:0,y:80}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.2}} transition={{duration:.8,ease:[.25,.1,.25,1]}}>{children}</motion.div>; }
