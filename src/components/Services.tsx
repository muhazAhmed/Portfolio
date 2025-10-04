"use client";
import React from "react";
import { motion } from "framer-motion";
import { AiOutlineTool } from "react-icons/ai";
import { FaRocket } from "react-icons/fa";
import { GiTeamIdea } from "react-icons/gi";

const items = [
  {
    title: "Tailored Solutions",
    desc:
      "I specialize in delivering customized solutions that meet your unique business needs.",
    Icon: AiOutlineTool,
  },
  {
    title: "Performance-Driven",
    desc:
      "High-performance applications that scale effortlessly with efficient code and optimization.",
    Icon: FaRocket,
  },
  {
    title: "Collaborative Partner",
    desc:
      "Open communication throughout the process to deliver real value and exceed expectations.",
    Icon: GiTeamIdea,
  },
];

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-4 md:px-8 py-10 md:py-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
        className="text-2xl md:text-3xl font-bold mb-6 md:mb-8"
      >
        <span className="accent-text">Services</span>
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {items.map(({ title, desc, Icon }) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl p-5 md:p-6 glass"
          >
            <Icon className="text-2xl mb-3" />
            <h3 className="text-base md:text-lg font-semibold">{title}</h3>
            <p className="text-xs md:text-sm opacity-70 mt-1">{desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
