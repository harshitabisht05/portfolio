"use client";

import Reveal from "./Reveal";
import { motion } from "framer-motion";

const principles = [
  {
    title: "Responsive Design",
    description:
      "Built mobile-first layouts with adaptive spacing, scalable typography, and optimized responsive behavior across devices.",
  },

  {
    title: "Performance Optimization",
    description:
      "Implemented optimized image loading, route transitions, smooth animations, and lightweight frontend architecture.",
  },

  {
    title: "Accessibility",
    description:
      "Focused on semantic structure, readable typography, keyboard-friendly interactions, and accessible UI patterns.",
  },

  {
    title: "Scalable Architecture",
    description:
      "Structured projects using reusable components, modular routing, organized data layers, and maintainable frontend systems.",
  },
];

export default function Engineering() {
  return (
    <Reveal>
      <section
        id="engineering"
        className="py-32 px-5 md:px-6 border-t border-white/10 relative"
      >
        <div className="max-w-6xl mx-auto relative z-10">

          {/* Header */}
          <div className="mb-20">

            <p className="text-blue-400 uppercase tracking-[0.3em] text-sm mb-4">
              Engineering Approach
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight max-w-4xl">
                Building scalable and user-focused frontend systems.            </h2>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-8">

            {principles.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                }}
                className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-blue-400/40 hover:-translate-y-2 transition duration-500"
              >

                {/* Number */}
                <p className="text-blue-400 text-sm mb-6">
                  0{index + 1}
                </p>

                {/* Title */}
                <h3 className="text-2xl font-semibold leading-tight">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-8 mt-6">
                  {item.description}
                </p>

              </motion.div>
            ))}

          </div>
        </div>
      </section>
    </Reveal>
  );
}