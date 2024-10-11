"use client";
import React from "react";
import { CgArrowLongRightR, CgArrowLongLeftR } from "react-icons/cg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTheme } from "@/lib/context/ThemeContext";
import { AiOutlineTool } from "react-icons/ai";
import { FaRocket } from "react-icons/fa";
import { GiTeamIdea } from "react-icons/gi";

const Services = () => {
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
      className="w-full flex items-center h-auto md:h-[100vh] justify-center gap-12 flex-col mb-10 md:mb-3"
      id="services"
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
          Services
        </motion.h1>
        <motion.div variants={itemVariant}>
          <CgArrowLongRightR className="text-[3rem]" />
        </motion.div>
      </motion.div>

      <div className="hidden md:flex flex-col items-start gap-2 w-[90%]">
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.1 },
            },
          }}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="font-semibold text-[20px]"
        >
          Comprehensive Development Solutions
        </motion.h2>
        <motion.h5
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.3 },
            },
          }}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-[17px] text-gray-500"
        >
          [Building robust applications for diverse needs.]
        </motion.h5>
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.5 },
            },
          }}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className={`text-[15px] w-[80%] ${
            theme === "light" ? "text-gray-400" : "text-gray-300"
          }`}
        >
          As a full-stack developer, I create end-to-end solutions that
          integrate frontend and backend functionalities. I leverage modern
          technologies to build responsive and efficient applications tailored
          to meet client needs. My focus on performance and scalability ensures
          that each solution can adapt to growing user demands. Additionally, I
          emphasize a seamless user experience through intuitive design and
          smooth interactions.
        </motion.p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-around w-[90%] gap-4 md:gap-6">
        <motion.div
          className={`flex flex-col items-center gap-3 ${
            theme === "light" ? "bg-white/70" : "bg-[#282C35]"
          } shadow-lg rounded-xl p-4 min-h-[300px] w-full cursor-pointer`}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.6 },
            },
          }}
          whileHover={{ scale: 1.03 }}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <AiOutlineTool className="text-[50px] text-primary" />
          <h3 className="font-bold text-[18px]">Tailored Solutions</h3>
          <p className="text-[14px] text-gray-400 text-center">
            I specialize in delivering customized solutions that meet your
            unique business needs. By leveraging cutting-edge technologies, I
            ensure that every application is not only functional but also aligns
            perfectly with your vision and objectives.
          </p>
        </motion.div>
        <motion.div
          className={`flex flex-col items-center gap-3 ${
            theme === "light" ? "bg-white/70" : "bg-[#282C35]"
          } shadow-lg rounded-xl p-4 min-h-[300px] w-full cursor-pointer`}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.8 },
            },
          }}
          whileHover={{ scale: 1.03 }}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <FaRocket className="text-[50px] text-primary" />
          <h3 className="font-bold text-[18px]">
            Performance-Driven Development
          </h3>
          <p className="text-[14px] text-gray-400 text-center">
            My approach focuses on building high-performance applications that
            scale effortlessly. Through efficient coding practices and thorough
            optimization, I create solutions that handle increasing loads while
            maintaining speed and reliability.
          </p>
        </motion.div>

        <motion.div
          className={`flex flex-col items-center gap-3 ${
            theme === "light" ? "bg-white/70" : "bg-[#282C35]"
          } shadow-lg rounded-xl p-4 min-h-[300px] w-full cursor-pointer`}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 1 },
            },
          }}
          whileHover={{ scale: 1.03 }}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <GiTeamIdea className="text-[50px] text-primary" />
          <h3 className="font-bold text-[18px]">Collaborative Partnership</h3>
          <p className="text-[14px] text-gray-400 text-center">
            I believe in forging strong partnerships with my clients. By
            maintaining open lines of communication and involving you in every
            step of the development process, I ensure that the final product
            exceeds your expectations and delivers real value to your business.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
