"use client";
import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";

const categories = [
  {
    title: "Frontend",
    items: [
      "HTML",
      "CSS",
      "React JS",
      "Next JS",
      "Angular",
      "Tailwind CSS",
      "Bootstrap",
      "SCSS",
    ],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-primary"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M3 5a2 2 0 012-2h5a2 2 0 012 2v3H3V5z" />
        <path d="M3 10h9v9a2 2 0 01-2 2H5a2 2 0 01-2-2v-9z" />
        <path d="M14 7h5a2 2 0 012 2v10a2 2 0 01-2 2h-5V7z" />
      </svg>
    ),
  },
  {
    title: "Backend",
    items: ["Node JS", "Express JS", "Gin", "MongoDB", "Flask", "PostgreSQL"],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-primary"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M4 5a2 2 0 012-2h12a2 2 0 012 2v6H4V5z" />
        <path d="M4 13h16v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6z" />
      </svg>
    ),
  },
  {
    title: "Tools",
    items: [
      "Git, GitHub",
      "JIRA",
      "Postman",
      "npm",
      "Docker",
      "Redux",
      "Notion",
    ],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-primary"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M10.5 3a1.5 1.5 0 013 0v2.25h2.25a1.5 1.5 0 010 3H13.5V10.5a1.5 1.5 0 01-3 0V8.25H8.25a1.5 1.5 0 010-3H10.5V3z" />
        <path d="M4.5 13.5A4.5 4.5 0 019 9h6a4.5 4.5 0 110 9H9a4.5 4.5 0 01-4.5-4.5z" />
      </svg>
    ),
  },
  {
    title: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "Go", "C"],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-primary"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M4 4h16v4H4z" />
        <path d="M4 10h10v4H4z" />
        <path d="M4 16h16v4H4z" />
      </svg>
    ),
  },
  {
    title: "Cloud",
    items: ["AWS", "Redis", "Azure"],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-primary"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M6 14a4 4 0 014-4 5 5 0 119.584 2.223A3.5 3.5 0 1118.5 20H8a4 4 0 01-2-7.5z" />
      </svg>
    ),
  },
];

function polarToXY(radius: number, angleDeg: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: radius * Math.cos(rad), y: radius * Math.sin(rad) };
}

export default function Skills() {
  const [active, setActive] = useState(0);
  const chips = useMemo(
    () =>
      categories.flatMap((c) =>
        c.items.map((i) => ({ label: i, category: c.title }))
      ),
    []
  );

  const radius = 180;
  const centerSize = 140;
  const nodeSize = 120;

  return (
    <section
      id="skills"
      className="mx-auto max-w-6xl px-4 md:px-8 py-10 md:py-16 flex flex-col items-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl md:text-3xl font-bold mb-6 md:mb-10 text-center"
      >
        <span className="accent-text">My Skills</span>
      </motion.h2>

      <div className="relative hidden md:block w-full h-[520px]">
        <motion.div
          className="absolute flex flex-col items-center justify-center rounded-2xl glass text-center z-10"
          style={{
            width: centerSize,
            height: centerSize,
            left: "43%",
            top: "32%",
            transform: "translate(-50%, -50%)",
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-sm opacity-70">Categories</div>
          <div className="text-lg font-semibold">
            {categories[active].title}
          </div>
        </motion.div>

        {categories.map((cat, idx) => {
          const angle = (360 / categories.length) * idx - 90;
          const { x, y } = polarToXY(radius, angle);
          return (
            <motion.button
              key={cat.title}
              onClick={() => setActive(idx)}
              className={`absolute grid place-items-center rounded-2xl glass transition-all focus:outline-none focus:ring-0 ${
                active === idx
                  ? "ring-2 ring-[var(--ring)] scale-105"
                  : "hover:scale-105"
              }`}
              style={{
                width: nodeSize,
                height: nodeSize,
                left: `calc(50% + ${x}px - ${nodeSize / 2}px)`,
                top: `calc(50% + ${y}px - ${nodeSize / 2}px)`,
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
            >
              <div className="flex flex-col items-center gap-1">
                {cat.icon}
                <span className="text-sm font-medium">{cat.title}</span>
              </div>
            </motion.button>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full sm:w-[90%] md:w-[70%] rounded-2xl p-5 glass mx-auto"
      >
        <div className="flex items-center justify-between flex-wrap gap-3">
          <h3 className="text-base md:text-lg font-semibold">
            {categories[active].title}
          </h3>
          <div className="text-xs opacity-70">
            {categories[active].items.length} items
          </div>
        </div>
        <div className="mt-3 flex flex-wrap gap-2 justify-center">
          {categories[active].items.map((it) => (
            <span
              key={it}
              className="rounded-full px-3 py-1 text-xs border border-white/15 opacity-90"
            >
              {it}
            </span>
          ))}
        </div>
      </motion.div>

      <div className="relative mt-8 w-full overflow-hidden rounded-xl glass">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="flex gap-3 p-3 whitespace-nowrap"
        >
          {chips.concat(chips).map((chip, i) => (
            <span
              key={`${chip.label}-${i}`}
              className="rounded-full px-3 py-1 text-xs border border-white/15 opacity-80"
            >
              {chip.label}
            </span>
          ))}
        </motion.div>
      </div>

      <div className="md:hidden w-full mt-8 space-y-3">
        {categories.map((cat, idx) => (
          <motion.details
            key={cat.title}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl glass p-4 focus:outline-none focus:ring-0"
            open={idx === 0}
          >
            <summary className="flex items-center justify-between cursor-pointer list-none focus:outline-none focus:ring-0">
              <div className="flex items-center gap-3">
                {cat.icon}
                <span className="font-semibold">{cat.title}</span>
              </div>
              <span className="text-xs opacity-60">{cat.items.length}</span>
            </summary>
            <div className="mt-3 flex flex-wrap gap-2 justify-center">
              {cat.items.map((it) => (
                <span
                  key={it}
                  className="rounded-full px-3 py-1 text-xs border border-white/15 opacity-90"
                >
                  {it}
                </span>
              ))}
            </div>
          </motion.details>
        ))}
      </div>
    </section>
  );
}
