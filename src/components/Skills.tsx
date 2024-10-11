"use client";
import React from "react";
import { CgArrowLongRightR, CgArrowLongLeftR } from "react-icons/cg";
import { FaLaptopCode, FaTools, FaCode, FaCloud } from "react-icons/fa";
import { AiFillDatabase } from "react-icons/ai";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTheme } from "@/lib/context/ThemeContext";

const Skills = () => {
  const { theme } = useTheme();
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <div
      className="w-full flex items-center h-auto md:h-[100vh] justify-center gap-4 flex-col"
      id="skills"
      ref={ref}
    >
      <motion.div
        className="flex items-center gap-8"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariant}
      >
        <motion.div variants={itemVariant}>
          <CgArrowLongLeftR className="text-[3rem]" />
        </motion.div>
        <motion.h1 className="text-xl md:text-2xl" variants={itemVariant}>
          My Skills
        </motion.h1>
        <motion.div variants={itemVariant}>
          <CgArrowLongRightR className="text-[3rem]" />
        </motion.div>
      </motion.div>

      <motion.p
        className="text-sm text-gray-400 text-center"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={itemVariant}
      >
        A comprehensive overview of the technologies I work with
      </motion.p>

      <motion.div
        className="p-1 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 w-full md:w-[70%]"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariant}
      >
        <motion.div
          className={`flex flex-col items-center gap-3 ${
            theme === "light" ? "bg-white/70" : "bg-[#282C35]"
          } shadow-lg rounded-xl p-4 min-h-[300px] w-full`}
          variants={itemVariant}
        >
          <FaLaptopCode className="text-[50px] text-primary" />
          <h3 className="text-lg">Frontend</h3>
          <div className="flex flex-col items-center gap-1 text-[13px] text-gray-400">
            <p>HTML</p>
            <p>CSS</p>
            <p>React JS</p>
            <p>Next JS</p>
            <p>Angular</p>
            <p>Tailwind CSS</p>
            <p>Bootstrap</p>
            <p>SCSS</p>
          </div>
        </motion.div>

        <motion.div
          className={`flex flex-col items-center gap-3 ${
            theme === "light" ? "bg-white/70" : "bg-[#282C35]"
          } shadow-lg rounded-xl p-4 min-h-[300px] w-full`}
          variants={itemVariant}
        >
          <AiFillDatabase className="text-[50px] text-primary" />
          <h3 className="text-lg">Backend</h3>
          <div className="flex flex-col items-center gap-1 text-[13px] text-gray-400">
            <p>Node JS</p>
            <p>Express JS</p>
            <p>Gin</p>
            <p>MongoDB</p>
            <p>Flask</p>
            <p>PostgreSQL</p>
          </div>
        </motion.div>

        <motion.div
          className={`flex flex-col items-center gap-3 ${
            theme === "light" ? "bg-white/70" : "bg-[#282C35]"
          } shadow-lg rounded-xl p-4 min-h-[300px] w-full`}
          variants={itemVariant}
        >
          <FaTools className="text-[50px] text-primary" />
          <h3 className="text-lg">Tools</h3>
          <div className="flex flex-col items-center gap-1 text-[13px] text-gray-400">
            <p>Git, GitHub</p>
            <p>JIRA</p>
            <p>Postman</p>
            <p>npm</p>
            <p>Docker</p>
            <p>Redux</p>
            <p>Notion</p>
          </div>
        </motion.div>

        <motion.div
          className={`flex flex-col items-center gap-3 ${
            theme === "light" ? "bg-white/70" : "bg-[#282C35]"
          } shadow-lg rounded-xl p-4 min-h-[300px] w-full`}
          variants={itemVariant}
        >
          <FaCode className="text-[50px] text-primary" />
          <h3 className="text-lg">Languages</h3>
          <div className="flex flex-col items-center gap-1 text-[13px] text-gray-400">
            <p>JavaScript</p>
            <p>TypeScript</p>
            <p>Python</p>
            <p>Go</p>
            <p>C</p>
          </div>
        </motion.div>

        <motion.div
          className={`flex flex-col items-center gap-3 ${
            theme === "light" ? "bg-white/70" : "bg-[#282C35]"
          } shadow-lg rounded-xl p-4 min-h-[300px] w-full`}
          variants={itemVariant}
        >
          <FaCloud className="text-[50px] text-primary" />
          <h3 className="text-lg">Cloud</h3>
          <div className="flex flex-col items-center gap-1 text-[13px] text-gray-400">
            <p>AWS</p>
            <p>Redis</p>
            <p>Azure</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;
