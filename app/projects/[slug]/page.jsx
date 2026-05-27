import { projects } from "@/data/projects";
import DeviceMockup from "@/components/DeviceMockup";
import Link from "next/link";

export default async function ProjectPage({ params }) {

  const { slug } = await params;

  const project = projects.find(
    (p) => p.slug === slug
  );

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        Project not found
      </div>
    );
  }

  return (
    <main className="bg-black text-white min-h-screen px-5 md:px-6 py-24 md:py-32 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-500/10 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-all duration-300 mb-16"
        >
          ← Back to Portfolio
        </Link>

        {/* Hero */}
        <div className="mb-24">

          <p className="text-blue-400 uppercase tracking-[0.3em] text-sm mb-6">
            Featured Project
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight max-w-5xl">
            {project.title}
          </h1>

          <p className="text-gray-400 text-lg md:text-xl mt-8 leading-9 max-w-3xl">
            {project.description}
          </p>

          {/* Metrics */}
          <div className="flex flex-wrap gap-4 mt-12">

            {project.metrics?.map((metric) => (
              <div
                key={metric}
                className="px-5 py-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl text-sm"
              >
                {metric}
              </div>
            ))}

          </div>
        </div>

        {/* Device Mockup */}
        <div className="mb-28">
          <DeviceMockup
            image={project.image}
            title={project.title}
          />
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-[1fr_300px] gap-16">

          {/* LEFT CONTENT */}
          <div>

            {/* Features */}
            <section className="mb-24">

              <h2 className="text-3xl md:text-4xl font-bold mb-10">
                Features
              </h2>

              <div className="grid md:grid-cols-2 gap-6">

                {project.features.map((feature) => (
                  <div
                    key={feature}
                    className="group bg-white/5 border border-white/10 rounded-3xl p-7 hover:border-blue-400/40 hover:-translate-y-2 transition-all duration-500"
                  >

                    <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-400/20 flex items-center justify-center text-blue-400 text-xl mb-6">
                      ✦
                    </div>

                    <p className="text-gray-300 leading-8">
                      {feature}
                    </p>

                  </div>
                ))}

              </div>
            </section>

            {/* Architecture */}
            <section className="mb-24">

              <h2 className="text-3xl md:text-4xl font-bold mb-10">
                Architecture Highlights
              </h2>

              <div className="space-y-6">

                {project.architecture.map((item) => (
                  <div
                    key={item}
                    className="border border-white/10 rounded-3xl p-7 bg-white/5 backdrop-blur-xl"
                  >

                    <div className="flex gap-5">

                      <div className="w-3 h-3 rounded-full bg-blue-400 mt-3 shrink-0"></div>

                      <p className="text-gray-300 leading-8">
                        {item}
                      </p>

                    </div>

                  </div>
                ))}

              </div>
            </section>

            {/* Challenges */}
            <section>

              <h2 className="text-3xl md:text-4xl font-bold mb-10">
                Challenges & Learnings
              </h2>

              <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 md:p-10 text-gray-300 leading-9 backdrop-blur-xl">
                {project.challenges}
              </div>
            </section>

          </div>

          {/* RIGHT SIDEBAR */}
          <div className="lg:sticky lg:top-28 h-fit">

            {/* Tech Stack */}
            <div className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-8 mb-8">

              <h3 className="text-2xl font-semibold mb-8">
                Tech Stack
              </h3>

              <div className="flex flex-wrap gap-3">

                {project.tech.map((item) => (
                  <div
                    key={item}
                    className="px-4 py-2 rounded-2xl border border-white/10 bg-black/30 text-sm"
                  >
                    {item}
                  </div>
                ))}

              </div>
            </div>

            {/* Links */}
            <div className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-8">

              <h3 className="text-2xl font-semibold mb-8">
                Project Links
              </h3>

              <div className="flex flex-col gap-4">

                {project.github !== "#" ? (
                  <a
                    href={project.github}
                    target="_blank"
                    className="bg-blue-500 text-black px-6 py-4 rounded-2xl font-semibold hover:bg-cyan-400 transition-all duration-300 text-center"
                  >
                    GitHub Repository
                  </a>
                ) : (
                  <div className="px-6 py-4 rounded-2xl border border-white/10 text-gray-500 text-center">
                    GitHub Coming Soon
                  </div>
                )}

                {project.live !== "#" ? (
                  <a
                    href={project.live}
                    target="_blank"
                    className="border border-white/10 px-6 py-4 rounded-2xl hover:border-blue-400 hover:text-blue-400 transition-all duration-300 text-center"
                  >
                    Live Demo
                  </a>
                ) : (
                  <div className="px-6 py-4 rounded-2xl border border-white/10 text-gray-500 text-center">
                    Demo Coming Soon
                  </div>
                )}

              </div>
            </div>

          </div>

        </div>
      </div>
    </main>
  );
}