import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-40">
      <div className="absolute left-20 top-20 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-3xl" />
      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="grid min-h-[700px] items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="flex flex-col justify-center">
            <p className="mb-4 text-lg text-blue-400">Hello, I'm</p>
            <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl md:text-7xl">
              Harshita Bisht
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Building Modern Web Experiences</span>
            </h1>
            <p className="mb-10 max-w-xl text-lg leading-8 text-gray-400">
              Computer Science graduate and frontend developer building scalable web applications with React, Tailwind CSS, FastAPI, and modern UI technologies.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 px-8 py-4 font-semibold transition duration-300 hover:scale-105">View Projects</a>
              <a href="/resume.pdf" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 px-8 py-4 backdrop-blur-xl transition duration-300 hover:border-blue-400">Resume</a>
            </div>
            <div className="mt-8 flex flex-wrap gap-3 text-sm text-gray-400"><span>React</span><span>•</span><span>Tailwind CSS</span><span>•</span><span>FastAPI</span><span>•</span><span>AWS</span></div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="relative flex items-center justify-center">
            <div className="absolute h-[350px] w-[350px] rounded-full bg-blue-500/20 blur-3xl" />
            <div className="group relative h-[320px] w-[250px] overflow-hidden rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl md:h-[400px] md:w-[320px]">
              <img src="/profile/harshita.jpg" alt="Harshita Bisht" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
