import { motion } from "framer-motion";
import Reveal from "./Reveal";
const principles=[
 {title:"Responsive Design",description:"Built mobile-first layouts with adaptive spacing, scalable typography, and optimized responsive behavior across devices."},
 {title:"Performance Optimization",description:"Implemented optimized image loading, smooth animations, and lightweight frontend architecture."},
 {title:"Accessibility",description:"Focused on semantic structure, readable typography, keyboard-friendly interactions, and accessible UI patterns."},
 {title:"Scalable Architecture",description:"Structured projects using reusable components, modular routing, organized data layers, and maintainable frontend systems."},
];
export default function Engineering(){return <Reveal><section id="engineering" className="relative border-t border-white/10 px-5 py-32 md:px-6"><div className="relative z-10 mx-auto max-w-6xl"><div className="mb-20"><p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-400">Engineering Approach</p><h2 className="max-w-4xl text-3xl font-bold leading-tight sm:text-4xl md:text-6xl">Building scalable and user-focused frontend systems.</h2></div><div className="grid gap-8 md:grid-cols-2">{principles.map((item,index)=><motion.div key={item.title} initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.7,delay:index*.15}} className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-blue-400/40"><p className="mb-6 text-sm text-blue-400">0{index+1}</p><h3 className="text-2xl font-semibold">{item.title}</h3><p className="mt-6 leading-8 text-gray-400">{item.description}</p></motion.div>)}</div></div></section></Reveal>;}
