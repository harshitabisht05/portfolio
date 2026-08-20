import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Engineering from "./components/Engineering";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MouseGlow from "./components/MouseGlow";
import ScrollProgress from "./components/ScrollProgress";
import CommandMenu from "./components/CommandMenu";
import PageLoader from "./components/PageLoader";
import ProjectDetails from "./pages/ProjectDetails";

function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-black text-white">
      <MouseGlow />
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-100px] top-[-200px] h-[500px] w-[500px] animate-pulse rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute right-[-100px] top-[300px] h-[400px] w-[400px] animate-pulse rounded-full bg-purple-500/10 blur-3xl" />
        <div className="absolute bottom-[-200px] left-[30%] h-[500px] w-[500px] animate-pulse rounded-full bg-cyan-500/10 blur-3xl" />
      </div>
      <ScrollProgress />
      <CommandMenu />
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

export default function App() {
  return (
    <PageLoader>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectDetails />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </PageLoader>
  );
}
