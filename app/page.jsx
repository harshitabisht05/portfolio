// app/page.js

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MouseGlow from "@/components/MouseGlow";
import ScrollProgress from "@/components/ScrollProgress";
import Engineering from "@/components/Engineering";
import CommandMenu from "@/components/CommandMenu";

export default function Home() {
  return (
<main className="relative bg-black text-white min-h-screen overflow-x-hidden">        <MouseGlow />
      <div className="absolute inset-0 overflow-hidden">

  <div className="absolute top-[-200px] left-[-100px] w-[500px] h-[500px] bg-blue-500/10 blur-3xl rounded-full animate-pulse"></div>

  <div className="absolute top-[300px] right-[-100px] w-[400px] h-[400px] bg-purple-500/10 blur-3xl rounded-full animate-pulse"></div>

  <div className="absolute bottom-[-200px] left-[30%] w-[500px] h-[500px] bg-cyan-500/10 blur-3xl rounded-full animate-pulse"></div>

</div>
<ScrollProgress />
<CommandMenu />
 <MouseGlow />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Engineering />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}