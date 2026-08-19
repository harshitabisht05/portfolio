import { motion } from "framer-motion";
import Reveal from "./Reveal";

const skillGroups = [
  { title: "Frontend", skills: ["HTML","CSS","JavaScript","React","Tailwind CSS","React Router"] },
  { title: "Backend & Database", skills: ["FastAPI","Node.js","MySQL","MongoDB","SQL","REST APIs"] },
  { title: "Cloud & Tools", skills: ["AWS","Git","GitHub","Vercel","Figma"] },
];

export default function Skills() { return <Reveal><section id="skills" className="relative border-t border-white/10 px-5 py-24 md:px-6 md:py-32"><div className="relative z-10 mx-auto max-w-6xl"><div className="mb-20"><p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-400">Skills</p><h2 className="max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-6xl">Technologies and tools I use to build scalable modern applications.</h2></div><div className="grid gap-8 lg:grid-cols-3">{skillGroups.map((group,index)=><motion.div key={group.title} initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.7,delay:index*.15}} className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-500 hover:border-blue-400/40"><h3 className="mb-8 text-2xl font-semibold">{group.title}</h3><div className="flex flex-wrap gap-4">{group.skills.map(skill=><div key={skill} className="rounded-2xl border border-white/10 bg-black/30 px-5 py-3 text-sm transition duration-300 hover:border-blue-400 hover:bg-blue-500/10">{skill}</div>)}</div></motion.div>)}</div></div></section></Reveal>; }
