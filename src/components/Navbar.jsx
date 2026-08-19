import { useEffect, useState } from "react";

const navLinks = [
  { name: "Work", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("#projects");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => document.querySelector(link.href)).filter(Boolean).sort((a, b) => a.offsetTop - b.offsetTop);
      let current = "#projects";
      sections.forEach((section) => {
        if (section.getBoundingClientRect().top <= 150) current = `#${section.id}`;
      });
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed left-0 top-6 z-50 w-full px-4">
      <nav className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-black/80 px-4 py-3 shadow-2xl shadow-black/40 backdrop-blur-xl md:rounded-full md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex shrink-0 items-center gap-4">
            <div className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
              <img src="/logo/logo.png" alt="Harshita Logo" className="h-full w-full object-contain p-2" />
            </div>
          </div>
          <div className="hidden items-center gap-10 font-medium text-white md:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className={`relative transition-all duration-300 hover:text-blue-400 ${active === link.href ? "text-blue-400" : "text-white"}`}>
                {link.name}
                <span className={`absolute -bottom-2 left-0 h-[2px] rounded-full bg-blue-400 transition-all duration-300 ${active === link.href ? "w-full" : "w-0"}`} />
              </a>
            ))}
          </div>
          <a href="mailto:harshitabisht0515@gmail.com" className="hidden rounded-full bg-blue-500 px-6 py-3 font-semibold text-black transition-all duration-300 hover:bg-cyan-400 hover:scale-105 md:flex">Email Me</a>
          <button aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)} className="text-3xl text-white md:hidden">☰</button>
        </div>
        {menuOpen && <div className="flex flex-col gap-6 pt-6 text-white md:hidden">{navLinks.map((link) => <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className={active === link.href ? "text-blue-400" : "text-white"}>{link.name}</a>)}</div>}
      </nav>
    </div>
  );
}
