"use client";
import Image from "next/image";
import React from "react";
import { GoHome } from "react-icons/go";
import ThemeToggle from "./ThemeToggle";
import { GoGear } from "react-icons/go";
import { FiPhone } from "react-icons/fi";
import { SiHyperskill } from "react-icons/si";
import { useTheme } from "@/lib/context/ThemeContext";

const Navbar = () => {
  const { theme } = useTheme();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="hidden md:flex w-full items-center justify-center z-[999] sticky top-0">
      <div
        className={`flex items-center justify-between w-fit gap-12 ${
          theme === "light" ? "bg-white/70" : "bg-[#282C35]"
        } backdrop-blur-md rounded-full mt-2 shadow-xl p-[8px]`}
      >
        <Image
          src={"/images/logo.png"}
          alt="logo"
          width={35}
          height={35}
          className="rounded-full bg-white cursor-pointer"
          priority={true}
        />
        <div className="flex items-center justify-center gap-4">
          <div
            className={`transition-transform transform hover:scale-105 duration-200 ease-in-out flex items-center gap-1 cursor-pointer p-1 rounded-full hover:bg-primary`}
            onClick={() => scrollToSection("home")}
          >
            <GoHome className="text-[20px] font-bold" />
          </div>
          <div
            className={`transition-transform transform hover:scale-105 p-1 rounded-full hover:bg-primary duration-200 ease-in-out flex items-center gap-1 cursor-pointer`}
            onClick={() => scrollToSection("services")}
          >
            <GoGear className="text-[20px] font-bold" />
          </div>
          <div
            className={`transition-transform transform hover:scale-105 p-1 rounded-full hover:bg-primary duration-200 ease-in-out flex items-center gap-1 cursor-pointer`}
            onClick={() => scrollToSection("skills")}
          >
            <SiHyperskill className="text-[20px] font-bold" />
          </div>
          <div
            className={`transition-transform transform hover:scale-105 p-1 rounded-full hover:bg-primary duration-200 ease-in-out flex items-center gap-1 cursor-pointer`}
            onClick={() => scrollToSection("contact")}
          >
            <FiPhone className="text-[20px] font-bold" />
          </div>
        </div>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;
