import React from "react";
import { RiNextjsFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="flex flex-col mb-20 md:mb-0 items-center justify-center gap-2 text-[12px] text-gray-400">
      <div className="flex items-center gap-3">
        <p>Built with</p>
        <RiNextjsFill className="text-[20px] cursor-pointer" title="NextJS" />
        <FaReact className="text-[20px] cursor-pointer" title="React" />
        <RiTailwindCssFill
          className="text-[20px] cursor-pointer"
          title="Tailwind CSS"
        />
        <TbBrandFramerMotion
          className="text-[20px] cursor-pointer"
          title="Framer Motion"
        />
        <SiTypescript
          className="text-[20px] cursor-pointer"
          title="TypeScript"
        />
      </div>
      <p>By Muhaz Ahmed 2024 ®</p>
    </div>
  );
};

export default Footer;
