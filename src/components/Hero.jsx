import { motion } from "framer-motion";
import ProjectResumeButtons from "./ProjectResumeButton";

export default function Hero() {
  return (
    <section className="relative w-full min-w-0 overflow-x-clip px-4 pt-28 sm:px-6 sm:pt-32 lg:pt-24">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-[-100px] top-20 h-[280px] w-[280px] rounded-full bg-blue-500/10 blur-3xl sm:h-[350px] sm:w-[350px] lg:left-20 lg:h-[400px] lg:w-[400px]" />

      <div className="relative z-10 mx-auto w-full min-w-0 max-w-6xl">
        <div className="grid w-full min-w-0 items-center gap-12 py-10 lg:grid-cols-2 lg:gap-20 lg:py-16">

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex min-w-0 w-full flex-col justify-center text-center lg:text-left"
          >
            <p className="mb-3 text-base text-blue-400 sm:text-lg">
              Hello, I'm
            </p>

            <h1 className="mb-5 w-full min-w-0 text-4xl font-bold leading-[1.1] sm:text-5xl md:text-6xl lg:text-7xl">
              Harshita Bisht

              <span className="mt-2 block break-words bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Building Modern Web Experiences
              </span>
            </h1>

            <p className="mx-auto mb-8 w-full max-w-xl break-words text-base leading-7 text-gray-400 sm:text-lg sm:leading-8 lg:mx-0 lg:mb-10">
              Creating responsive and interactive web applications with a
              strong focus on frontend development, backed by APIs, databases,
              and modern backend technologies.
            </p>

            <div className="w-full min-w-0 overflow-visible">
              <ProjectResumeButtons />
            </div>
          </motion.div>

          {/* Profile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative flex min-w-0 items-center justify-center"
          >
            <div className="pointer-events-none absolute h-[260px] w-[260px] rounded-full bg-blue-500/20 blur-3xl sm:h-[330px] sm:w-[330px] lg:h-[400px] lg:w-[400px]" />

            <div className="group relative h-[300px] w-[230px] overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl sm:h-[360px] sm:w-[280px] md:h-[400px] md:w-[320px]">
              <img
                src="/profile/harshita.jpg"
                alt="Harshita Bisht"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}