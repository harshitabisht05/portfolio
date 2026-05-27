"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

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
      const sections = navLinks.map((link) =>
        document.querySelector(link.href)
      );

      let current = "#projects";

      sections.forEach((section) => {
        if (section) {
          const rect = section.getBoundingClientRect();

          if (rect.top <= 150) {
            current = `#${section.id}`;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-6 left-0 w-full z-50 px-4">
      <nav className="max-w-6xl mx-auto bg-black/80 backdrop-blur-xl border border-white/10 rounded-3xl md:rounded-full px-4 md:px-6 py-3 shadow-2xl shadow-black/40">

        <div className="flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-4 shrink-0">

  <div className="relative w-14 h-14 rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center">

    <Image
  src="/logo/logo.png"
  alt="Harshita Logo"
  fill
  sizes="56px"
  className="object-contain p-2"
  priority
/>

  </div>
  </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10 text-white font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative transition-all duration-300 duration-300 hover:text-blue-400 ${
                  active === link.href
                    ? "text-blue-400"
                    : "text-white"
                }`}
              >
                {link.name}

                <span
                  className={`absolute left-0 -bottom-2 h-[2px] bg-blue-400 rounded-full transition-all duration-300 duration-300 ${
                    active === link.href
                      ? "w-full"
                      : "w-0"
                  }`}
                ></span>
              </a>
            ))}
          </div>

          {/* Email Button */}
          <a
            href="mailto:harshitabisht0515@gmail.com"
            className="hidden md:flex bg-blue-400 text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300 duration-300 bg-blue-500 hover:bg-cyan-400"
          >
            Email Me
          </a>

          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white text-3xl"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden flex flex-col gap-6 pt-6 text-white">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`transition ${
                  active === link.href
                    ? "text-blue-400"
                    : "text-white"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </nav>
    </div>
  );
}