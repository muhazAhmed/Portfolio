"use client";
import React from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl px-4 md:px-8 py-10 md:py-16"
    >
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
        className="mb-6 md:mb-10 flex items-end justify-between"
      >
        <h2 className="text-2xl md:text-3xl font-bold">
          <span className="accent-text">Projects</span>
        </h2>
      </motion.header>
      <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((p) => (
          <motion.a
            href={p.url}
            target="_blank"
            key={p.id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.4 }}
            whileHover={{ y: -4 }}
            className="group relative overflow-hidden rounded-2xl glass block"
          >
            <div className="relative aspect-[16/10]">
              <Image
                src={p.imageUrl}
                alt={p.title}
                fill
                className="object-cover object-top opacity-90 group-hover:opacity-100 transition"
              />
            </div>
            <div className="p-4">
              <h3 className="text-base md:text-lg font-semibold">{p.title}</h3>
              <p className="mt-1 text-xs md:text-sm opacity-70 line-clamp-2">
                {p.description}
              </p>
            </div>
            <span className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[var(--accent-start)] via-[var(--accent-mid)] to-[var(--accent-end)] opacity-0 group-hover:opacity-100 transition" />
          </motion.a>
        ))}
      </div>
    </section>
  );
}
