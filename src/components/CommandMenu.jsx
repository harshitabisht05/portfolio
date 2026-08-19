import { useEffect, useState } from "react";
import { Command } from "cmdk";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  { label: "About", category: "Navigation", action: () => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" }) },
  { label: "Skills", category: "Navigation", action: () => document.querySelector("#skills")?.scrollIntoView({ behavior: "smooth" }) },
  { label: "Projects", category: "Navigation", action: () => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }) },
  { label: "Contact", category: "Navigation", action: () => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }) },
  { label: "GitHub", category: "Social Links", action: () => window.open("https://github.com/harshitabisht05", "_blank") },
  { label: "LinkedIn", category: "Social Links", action: () => window.open("https://www.linkedin.com/in/harshitabisht0511", "_blank") },
];

export default function CommandMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  // Standard animation dynamics for high frame-rate rendering
  const desktopButtonVariants = {
    initial: { scale: 1, y: 0 },
    hover: { scale: 1.05, y: -4, boxShadow: "0 10px 25px rgba(59, 130, 246, 0.2)" },
    tap: { scale: 0.98, y: -1 }
  };

  return (
    <>
      {/* FLOATING ACTION BUTTON */}
      <motion.button
        onClick={() => setOpen(true)}
        variants={desktopButtonVariants}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        className="fixed bottom-6 right-6 z-[9999] hidden items-center gap-3 rounded-2xl border border-white/10 bg-black/60 px-5 py-3.5 text-sm font-medium text-gray-400 backdrop-blur-xl md:flex select-none transition-colors duration-200 hover:border-blue-400 hover:text-blue-400"
      >
        <span className="text-xs tracking-wide">Open Menu</span>
        <kbd className="flex h-5 items-center gap-0.5 rounded border border-white/20 bg-white/5 px-1.5 font-sans text-[11px] font-semibold text-gray-300">
          <span className="text-[10px]">⌘</span>K
        </kbd>
      </motion.button>

      {/* MODAL MOUNT INTERACTION LOOP */}
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-[9998] flex items-center justify-center p-4">
            
            {/* BACKDROP BLUR SHIELD */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="absolute inset-0 bg-black/75 backdrop-blur-md"
            />

            {/* INTERACTIVE COMMAND DIALOG HOUSING */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ type: "spring", stiffness: 350, damping: 26 }}
              className="relative w-full max-w-xl overflow-hidden rounded-[32px] border border-white/10 bg-[#0a0a0a] shadow-[0_30px_70px_rgba(0,0,0,0.7)]"
            >
              <Command label="Command Menu" className="w-full">
                {/* SEARCH INPUT BAR */}
                <div className="relative flex items-center border-b border-white/10 px-6">
                  <Command.Input
                    placeholder="Search sections, projects, or links..."
                    className="w-full bg-transparent py-5 text-gray-100 outline-none placeholder:text-gray-500 text-base"
                  />
                  {/* Absolute shortcut escape indicator */}
                  <kbd className="hidden sm:inline-block rounded border border-white/10 bg-white/5 px-2 py-0.5 font-sans text-[10px] text-gray-500 font-medium select-none">
                    ESC
                  </kbd>
                </div>

                {/* SCROLLABLE INTERACTIVE SELECTIONS */}
                <Command.List className="max-h-[380px] overflow-y-auto p-2 scrollbar-none">
                  {/* Custom empty filtering state handler */}
                  <Command.Empty className="p-6 text-center text-sm text-gray-500 font-medium">
                    No results found for that query.
                  </Command.Empty>

                  {items.map((item) => (
                    <Command.Item
                      key={item.label}
                      onSelect={() => {
                        item.action();
                        setOpen(false);
                      }}
                      className="group flex cursor-pointer items-center justify-between rounded-2xl px-5 py-4 text-gray-300 outline-none select-none aria-selected:bg-white/5 aria-selected:text-white transition-colors duration-150"
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-medium text-sm tracking-wide">{item.label}</span>
                      </div>
                      
                      {/* Secondary Category Meta-Badge */}
                      <span className="text-[11px] uppercase tracking-wider text-gray-600 font-semibold group-aria-selected:text-blue-400/80 transition-colors duration-150">
                        {item.category}
                      </span>
                    </Command.Item>
                  ))}
                </Command.List>
              </Command>
            </motion.div>
            
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
