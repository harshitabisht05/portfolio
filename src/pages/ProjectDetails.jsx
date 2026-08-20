import { Link, useParams } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import DeviceMockup from "../components/DeviceMockup";
import { projects } from "../data/projects";
import Reveal from "../components/Reveal";

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  // Page Scroll Progress Bar (Top of page)
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  if (!project) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#050505] text-white">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
          <h1 className="mb-6 text-4xl font-bold">Project not found</h1>
          <Link to="/" className="text-blue-400 hover:text-cyan-300 transition-colors">
            ← Back to Portfolio
          </Link>
        </motion.div>
      </main>
    );
  }

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70 } },
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] px-5 py-24 text-white md:px-6 md:py-32">
      {/* Dynamic Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1.5 z-[100] origin-left bg-gradient-to-r from-blue-500 to-cyan-400" style={{ scaleX }} />

      {/* Ambient Background Glow */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute left-1/2 top-40 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" 
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Navigation Link */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <Link to="/" className="group mb-16 inline-flex items-center gap-3 text-gray-400 transition hover:text-blue-400">
            <span className="transition-transform group-hover:-translate-x-2">←</span> Back to Portfolio
          </Link>
        </motion.div>

        {/* HERO SECTION */}
        <motion.div variants={containerVariants} initial="hidden" animate="show" className="mb-24">
          <motion.p variants={itemVariants} className="mb-6 text-sm uppercase tracking-[0.4em] font-medium text-blue-400">
            Featured Project
          </motion.p>
          <motion.h1 variants={itemVariants} className="max-w-5xl text-4xl font-extrabold leading-[1.1] sm:text-6xl md:text-8xl tracking-tight">
            {project.title}
          </motion.h1>
          <motion.p variants={itemVariants} className="mt-8 max-w-3xl text-lg leading-relaxed text-gray-400 md:text-xl font-light">
            {project.description}
          </motion.p>
          
          <motion.div variants={itemVariants} className="mt-12 flex flex-wrap gap-4">
            {project.metrics?.map((metric) => (
              <div key={metric} className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm backdrop-blur-xl transition-colors hover:border-blue-500/40">
                {metric}
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* MOCKUP SECTION */}
        <motion.div 
          initial={{ opacity: 0, y: 60 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "circOut" }}
          className="mb-32"
        >
          <DeviceMockup image={project.image} title={project.title} />
        </motion.div>

        {/* CONTENT GRID */}
        <div className="grid gap-16 lg:grid-cols-[1fr_350px]">
          <div>
            {/* FEATURES SECTION */}
            <section className="mb-28">
              <Reveal>
                <h2 className="mb-12 text-3xl font-bold md:text-5xl tracking-tight">Core Features</h2>
              </Reveal>
              <div className="grid gap-6 md:grid-cols-2">
                {project.features.map((feature, i) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -8, borderColor: "rgba(96, 165, 250, 0.4)" }}
                    className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300"
                  >
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-2xl text-blue-400">
                      ✦
                    </div>
                    <p className="leading-relaxed text-gray-300 font-medium text-lg">{feature}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* ARCHITECTURE SECTION */}
            <section className="mb-28">
              <Reveal>
                <h2 className="mb-12 text-3xl font-bold md:text-5xl tracking-tight">Architecture Highlights</h2>
              </Reveal>
              <div className="space-y-6">
                {project.architecture.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group rounded-[32px] border border-white/10 bg-white/5 p-8 transition-colors hover:bg-white/[0.07]"
                  >
                    <div className="flex gap-6">
                      <div className="mt-3 h-3 w-3 shrink-0 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.6)] group-hover:scale-125 transition-transform" />
                      <p className="leading-relaxed text-gray-300 text-lg">{item}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* CHALLENGES SECTION */}
            <section>
              <Reveal>
                <h2 className="mb-12 text-3xl font-bold md:text-5xl tracking-tight">Challenges & Learnings</h2>
              </Reveal>
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="rounded-[40px] border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-10 leading-9 text-gray-300 backdrop-blur-xl md:p-14 text-lg font-light"
              >
                {project.challenges}
              </motion.div>
            </section>
          </div>

          {/* STICKY ASIDE */}
          <aside className="h-fit lg:sticky lg:top-32 space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="rounded-[36px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
            >
              <h3 className="mb-8 text-2xl font-bold text-gray-100 tracking-tight">Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                {project.tech.map((item) => (
                  <motion.div
                    key={item}
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(59, 130, 246, 0.1)" }}
                    className="rounded-2xl border border-white/10 bg-black/40 px-5 py-2.5 text-sm font-medium text-gray-400"
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="rounded-[36px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
            >
              <h3 className="mb-8 text-2xl font-bold text-gray-100 tracking-tight">Action</h3>
              <div className="flex flex-col gap-4">
                {project.github !== "#" && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="rounded-2xl bg-blue-500 py-5 text-center font-bold text-black transition-colors hover:bg-cyan-400 shadow-xl shadow-blue-500/20"
                  >
                    GitHub Repository
                  </motion.a>
                )}
                {project.live !== "#" && (
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.02, borderColor: "rgba(59,130,246,0.5)" }}
                    whileTap={{ scale: 0.98 }}
                    className="rounded-2xl border border-white/10 py-5 text-center font-bold text-white transition-all hover:text-blue-400"
                  >
                    Live Demo
                  </motion.a>
                )}
              </div>
            </motion.div>
          </aside>
        </div>
      </div>
    </main>
  );
}
