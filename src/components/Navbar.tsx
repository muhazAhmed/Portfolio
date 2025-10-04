"use client";
import React from "react";
import ThemeToggle from "@/components/ThemeToggle";

const links: { id: string; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="sticky top-0 z-[1000] flex w-full justify-center py-2">
      <div className="glass w-[95%] md:w-[760px] rounded-2xl px-3 md:px-5 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2 md:gap-3">
          <div className="size-2 md:size-2.5 rounded-full" style={{ background: "radial-gradient(circle at 30% 30%, var(--accent-start), var(--accent-mid))" }} />
          <span className="text-xs md:text-sm tracking-wide opacity-80">muhaz.dev</span>
        </div>
        <nav className="hidden md:flex items-center gap-1 md:gap-2">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="relative rounded-xl px-3 py-1.5 text-xs hover:opacity-100 opacity-80 transition group"
            >
              <span>{l.label}</span>
              <span className="absolute left-1/2 -bottom-0.5 h-[2px] w-0 bg-gradient-to-r from-[var(--accent-start)] via-[var(--accent-mid)] to-[var(--accent-end)] transition-all duration-300 group-hover:left-0 group-hover:w-full rounded-full" />
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
