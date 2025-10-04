"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative mx-auto max-w-6xl px-4 md:px-8 pt-10 md:pt-16 pb-10 md:pb-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-20% 0px -20% 0px" }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-3xl p-6 md:p-10 glass flex flex-col items-center text-center gap-4 md:gap-6"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs opacity-80">
          <span
            className="size-2 rounded-full"
            style={{
              background:
                "radial-gradient(circle at 30% 30%, var(--accent-start), var(--accent-end))",
            }}
          />
          <span>Available for opportunities</span>
        </div>

        <h1 className="text-3xl md:text-6xl font-extrabold leading-tight">
          <span className="accent-text">Muhaz Ahmed</span>
          <br />
          <span className="opacity-80">
            Building interfaces from the future
          </span>
        </h1>

        <p className="text-sm md:text-base opacity-70 max-w-2xl">
          I craft immersive web experiences with Next.js, TypeScript, and
          thoughtful motion. Clean code, responsive design, and
          micro-interactions that feel alive.
        </p>

        {/* Social buttons with existing images */}
        <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap justify-center sm:w-[50%] sm:gap-7 w-full">
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="https://github.com/muhazAhmed"
            target="_blank"
            className="flex items-center justify-center sm:justify-between rounded-full gap-2 sm:gap-3 px-4 py-2 glass cursor-pointer"
          >
            <Image
              src="/icons/github.png"
              alt="GitHub"
              width={35}
              height={35}
            />
            <p className="text-sm">GitHub</p>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            href="https://www.linkedin.com/in/muhazahmed/"
            target="_blank"
            className="flex items-center justify-center sm:justify-between rounded-full gap-2 sm:gap-3 px-4 py-2 glass cursor-pointer"
          >
            <Image
              src="/icons/linkedin.png"
              alt="LinkedIn"
              width={35}
              height={35}
            />
            <p className="text-sm">LinkedIn</p>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            href="https://instagram.com/"
            target="_blank"
            className="flex items-center justify-center sm:justify-between rounded-full gap-2 sm:gap-3 px-4 py-2 glass cursor-pointer"
          >
            <Image
              src="/icons/instagram.png"
              alt="Instagram"
              width={35}
              height={35}
            />
            <p className="text-sm">Instagram</p>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            href="https://youtube.com/@gitunemployed"
            target="_blank"
            className="flex items-center justify-center sm:justify-between rounded-full gap-2 sm:gap-3 px-4 py-2 glass cursor-pointer"
          >
            <Image
              src="/icons/youtube.png"
              alt="YouTube"
              width={35}
              height={35}
            />
            <p className="text-sm">YouTube</p>
          </motion.a>
        </div>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.05 }}
          className="flex p-3 px-5 items-center gap-2 rounded-full border-2 border-primary hover:bg-primary hover:text-white"
          href={"/files/MuhazAhmed_FS.pdf"}
          download
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 3a1 1 0 011 1v8.586l2.293-2.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L11 12.586V4a1 1 0 011-1z" />
            <path d="M5 20a1 1 0 100 2h14a1 1 0 100-2H5z" />
          </svg>
          Download Resume
        </motion.a>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
          className="relative mt-2 md:mt-4"
        >
          <Image
            src="/images/profile.png"
            alt="profile"
            width={140}
            height={140}
            className="rounded-full ring-2 ring-[var(--ring)]"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
