"use client";
import React, { FC, useEffect, useRef, useState } from "react";
import { GoHome } from "react-icons/go";
import ThemeToggle from "./ThemeToggle";
import { GoGear } from "react-icons/go";
import { FiPhone } from "react-icons/fi";
import { CgMoreO } from "react-icons/cg";
import { MoreItemProp } from "@/lib/prop";
import { motion } from "framer-motion";
import { useTheme } from "@/lib/context/ThemeContext";
import { SiHyperskill } from "react-icons/si";

const BottomMenu = () => {
  const { theme } = useTheme();
  const [moreToggle, setMoreToggle] = useState<boolean>(false);
  const moreItemsRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        moreItemsRef.current &&
        !moreItemsRef.current.contains(event.target as Node)
      ) {
        setMoreToggle(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [moreToggle]);
  return (
    <motion.div
      className={`fixed z-[1000] bottom-0 left-0 right-0 ${
        theme === "light"
          ? "bg-white shadow-lg shadow-slate-800"
          : "bg-[#282C35]"
      } shadow-lg py-3 flex justify-around items-center sm:flex md:hidden rounded-t-2xl`}
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {moreToggle && (
        <MoreItems
          moreItemsRef={moreItemsRef}
          theme={theme}
          scrollToSection={scrollToSection}
        />
      )}
      <div
        className="flex flex-col items-center"
        onClick={() => scrollToSection("home")}
      >
        <GoHome className="h-6 w-6" />
        <span className="text-xs">Home</span>
      </div>
      <div
        className="flex flex-col items-center"
        onClick={() => scrollToSection("skills")}
      >
        <SiHyperskill className="h-6 w-6" />
        <span className="text-xs">Skills</span>
      </div>
      <div
        className="flex flex-col items-center"
        onClick={() => setMoreToggle(!moreToggle)}
      >
        <CgMoreO className="h-6 w-6" />
        <span className="text-xs">More</span>
      </div>
    </motion.div>
  );
};

const MoreItems: FC<MoreItemProp> = ({
  moreItemsRef,
  theme,
  scrollToSection,
}) => {
  return (
    <motion.div
      ref={moreItemsRef}
      className={`fixed z-[800] bottom-[67px] w-[fit-content] right-[8px] ${
        theme === "light"
          ? "bg-white shadow-xl shadow-slate-600"
          : "bg-[#282C35]"
      } shadow-lg p-2 flex flex-col gap-4 md:hidden rounded-2xl`}
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div
        className="p-1 flex gap-2 items-center"
        onClick={() => scrollToSection("contact")}
      >
        <FiPhone className="text-[30px]" />
        <span className="text-md">Contact</span>
      </div>

      <div className="p-1 flex gap-2 items-center">
        <GoGear className="text-[30px]" />
        <span className="text-md">Services</span>
      </div>

      <div className="flex gap-2 items-center">
        <ThemeToggle />
        <span className="text-md">Change Theme</span>
      </div>
    </motion.div>
  );
};

export default BottomMenu;
