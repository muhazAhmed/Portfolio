"use client";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import React, { useState } from "react";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import { motion } from "framer-motion";

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const handlePrev = () => {
    setCurrentProject((prev) =>
      prev === 0 ? projectsData.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentProject((prev) =>
      prev === projectsData.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="w-full h-[100vh] overflow-hidden relative flex gap-4 items-start" id="projects">
      <div className="absolute w-full h-full">
        {projectsData.map((project, index) => (
          <div
            key={project.id}
            className={`absolute w-full h-full transition-opacity duration-500 ${
              index === currentProject ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              priority
              quality={100}
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <motion.div
        className="flex flex-col items-start gap-5 w-[50vw] md:w-[30vw] p-8 z-20 h-full justify-center bg-white/10 backdrop-blur-sm rounded-r-full relative border-r-2 border-primary"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <h1
          className={`text-xl md:text-3xl font-bold ${
            projectsData[currentProject].id === 2 ? "text-black" : "text-white"
          }`}
        >
          {projectsData[currentProject].title}
        </h1>
        <p
          className={`text-[12px] md:text-sm text-gray-400 ${
            projectsData[currentProject].id === 2 ? "bg-white" : ""
          }`}
        >
          {projectsData[currentProject].description}
        </p>
        <motion.a
          href={projectsData[currentProject].url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs md:text-sm p-3 bg-primary rounded-full px-5 hover:bg-secondary text-white"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          whileHover={{ scale: 1.05 }}
        >
          View Project
        </motion.a>

        <div
          className={`flex items-center justify-center gap-4 mt-4 ${
            projectsData[currentProject].id === 2 ? "text-black" : "text-white"
          }`}
        >
          <CiCircleChevLeft
            onClick={handlePrev}
            className="text-[3rem] cursor-pointer hover:text-primary"
          />
          <CiCircleChevRight
            onClick={handleNext}
            className="text-[3rem] cursor-pointer hover:text-primary"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
