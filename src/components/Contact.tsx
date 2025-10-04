"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 md:px-8 py-10 md:py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
        className="rounded-3xl p-6 md:p-10 glass"
      >
        <h2 className="text-2xl md:text-3xl font-bold">
          <span className="accent-text">Let’s build something</span> remarkable
        </h2>
        <p className="mt-2 text-sm md:text-base opacity-70 max-w-2xl">
          Open to freelance, full-time, and collaboration opportunities.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a href="mailto:muhazvla313@gmail.com" className="rounded-full px-5 py-2 text-sm font-semibold border border-white/15 hover:border-white/30 transition flex items-center gap-2">
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className='h-5 w-5' fill='currentColor'><path d='M2 6a2 2 0 012-2h16a2 2 0 012 2v.511l-10 5.714L2 6.511V6z'/><path d='M22 8.277v9.723a2 2 0 01-2 2H4a2 2 0 01-2-2V8.277l9.4 5.372a2 2 0 002 0L22 8.277z'/></svg>
            Email
          </a>
          <a href="https://www.linkedin.com/in/muhazahmed/" target="_blank" className="rounded-full px-5 py-2 text-sm font-semibold border border-white/15 hover:border-white/30 transition flex items-center gap-2">
            <Image src="/icons/linkedin.png" width={18} height={18} alt="LinkedIn" />
            LinkedIn
          </a>
          <a href="https://github.com/muhazAhmed" target="_blank" className="rounded-full px-5 py-2 text-sm font-semibold border border-white/15 hover:border-white/30 transition flex items-center gap-2">
            <Image src="/icons/github.png" width={18} height={18} alt="GitHub" />
            GitHub
          </a>
          <a href="https://youtube.com/@gitunemployed" target="_blank" className="rounded-full px-5 py-2 text-sm font-semibold border border-white/15 hover:border-white/30 transition flex items-center gap-2">
            <Image src="/icons/youtube.png" width={18} height={18} alt="YouTube" />
            YouTube
          </a>
        </div>
      </motion.div>
    </section>
  );
}
