"use client";
import Image from "next/image";
import React from "react";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { useTheme } from "@/lib/context/ThemeContext";
import { redirectWithNewTab } from "@/lib/Consts";

const Hero = () => {
  const { theme } = useTheme();

  return (
    <div
      className="h-full w-full flex items-center justify-center flex-col gap-6 p-4 pt-0 md:p-8"
      id="home"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src="/images/profile.png"
          alt="profile-pic"
          width={150}
          height={100}
          className="rounded-[100%]"
        />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl md:text-4xl font-bold text-center"
      >
        Hello👋, I&apos;m <span className="text-primary">Muhaz Ahmed</span>
      </motion.h1>

      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-xl md:text-2xl font-semibold text-gray-500"
      >
        I&apos;m a{" "}
        <Typewriter
          words={[
            "Full Stack Developer",
            "Frontend Developer",
            "Backend Developer",
            "MERN Stack Developer",
            "MEAN Stack Developer",
            "Content Creator",
          ]}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={100}
          deleteSpeed={80}
          delaySpeed={1500}
        />
      </motion.h3>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="flex flex-wrap items-center justify-center w-full md:w-[50%] gap-2 md:gap-7"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          className={`flex items-center justify-between rounded-full gap-3 px-5 ${
            theme === "light" ? "bg-white/70" : "bg-[#282C35]"
          } shadow-lg cursor-pointer`}
          onClick={() => redirectWithNewTab("https://github.com/muhazAhmed")}
        >
          <Image src="/icons/github.png" alt="GitHub" width={40} height={40} />
          <p className="text-sm">GitHub</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          className={`flex items-center justify-between rounded-full gap-3 px-5 ${
            theme === "light" ? "bg-white/70" : "bg-[#282C35]"
          } shadow-lg cursor-pointer`}
          onClick={() =>
            redirectWithNewTab("https://www.linkedin.com/in/muhazahmed/")
          }
        >
          <Image
            src="/icons/linkedin.png"
            alt="LinkedIn"
            width={40}
            height={40}
          />
          <p className="text-sm">LinkedIn</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          className={`flex items-center justify-between rounded-full gap-3 px-5 ${
            theme === "light" ? "bg-white/70" : "bg-[#282C35]"
          } shadow-lg cursor-pointer`}
          onClick={() => redirectWithNewTab("https://instagram.com/")}
        >
          <Image
            src="/icons/instagram.png"
            alt="Instagram"
            width={40}
            height={40}
          />
          <p className="text-sm">Instagram</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          className={`flex items-center justify-between rounded-full gap-3 px-5 ${
            theme === "light" ? "bg-white/70" : "bg-[#282C35]"
          } shadow-lg cursor-pointer`}
          onClick={() =>
            redirectWithNewTab("https://youtube.com/@gitunemployed")
          }
        >
          <Image
            src="/icons/youtube.png"
            alt="Youtube"
            width={40}
            height={40}
          />
          <p className="text-sm">Youtube</p>
        </motion.div>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="text-lg md:text-xl font-medium text-center"
      >
        A passionate developer who enjoys building interactive applications.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="text-sm text-gray-400 text-center"
      >
        Driven by a passion for coding, I enjoy building intuitive user
        interfaces and
        <br /> robust backend systems. My focus is on delivering clean,
        <br />
        scalable code that solves real-world challenges.
      </motion.p>

      <motion.a
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.1 }}
        whileHover={{ scale: 1.05 }}
        className="flex p-3 px-5 items-center gap-2 rounded-full border-2 border-primary hover:bg-primary hover:text-white"
        href={"/files/resume2025.pdf"}
        download
      >
        <FaCloudDownloadAlt className="text-[25px]" /> Download Resume
      </motion.a>
    </div>
  );
};

export default Hero;
