"use client";

import { useEffect, useState } from "react";
import { Command } from "cmdk";

const items = [
  {
    label: "About",
    action: () => {
      document
        .querySelector("#about")
        ?.scrollIntoView({ behavior: "smooth" });
    },
  },

  {
    label: "Skills",
    action: () => {
      document
        .querySelector("#skills")
        ?.scrollIntoView({ behavior: "smooth" });
    },
  },

  {
    label: "Projects",
    action: () => {
      document
        .querySelector("#projects")
        ?.scrollIntoView({ behavior: "smooth" });
    },
  },

  {
    label: "Contact",
    action: () => {
      document
        .querySelector("#contact")
        ?.scrollIntoView({ behavior: "smooth" });
    },
  },

  {
    label: "GitHub",
    action: () => {
      window.open(
        "https://github.com/harshitabisht05",
        "_blank"
      );
    },
  },

  {
    label: "LinkedIn",
    action: () => {
      window.open(
        "https://www.linkedin.com/in/harshitabisht0511",
        "_blank"
      );
    },
  },
];

export default function CommandMenu() {

  const [open, setOpen] = useState(false);

  useEffect(() => {

    const down = (e) => {

      if (
        (e.metaKey || e.ctrlKey) &&
        e.key.toLowerCase() === "k"
      ) {
        e.preventDefault();
        setOpen((prev) => !prev);
      }

      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", down);

    return () =>
      document.removeEventListener(
        "keydown",
        down
      );

  }, []);

  return (
    <>

      {/* Floating Button */}
      <button
        onClick={() => setOpen(true)}
        className="hidden md:flex fixed bottom-6 right-6 z-[9999] items-center gap-2 border border-white/10 bg-black/50 backdrop-blur-xl px-5 py-3 rounded-2xl text-sm text-gray-400 hover:border-blue-400 hover:text-blue-400 transition-all duration-300"
      >
        ⌘K
      </button>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998]"
        />
      )}

      {/* Dialog */}
      <Command.Dialog
        open={open}
        onOpenChange={setOpen}
        label="Command Menu"
        aria-describedby="command-menu-description"
        className="fixed top-1/2 left-1/2 z-[9999] w-[90%] max-w-xl -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[32px] border border-white/10 bg-[#0a0a0a] shadow-2xl backdrop-blur-2xl"
      >

        {/* Accessibility Description */}
        <p
          id="command-menu-description"
          className="sr-only"
        >
          Search and navigate through portfolio sections and links.
        </p>

        {/* Search Input */}
        <Command.Input
          placeholder="Search sections, projects, or links..."
          className="w-full border-b border-white/10 bg-transparent px-6 py-5 text-white outline-none placeholder:text-gray-500"
        />

        {/* List */}
        <Command.List className="max-h-[400px] overflow-y-auto p-3">

          {items.map((item) => (
            <Command.Item
              key={item.label}
              onSelect={() => {
                item.action();
                setOpen(false);
              }}
              className="cursor-pointer rounded-2xl px-5 py-4 text-gray-300 hover:bg-white/5 hover:text-white transition-all duration-300"
            >
              {item.label}
            </Command.Item>
          ))}

        </Command.List>

      </Command.Dialog>
    </>
  );
}