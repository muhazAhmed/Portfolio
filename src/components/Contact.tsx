"use client";
import React from "react";
import { motion } from "framer-motion";
import { IoIosMailUnread } from "react-icons/io";
import { MdOutlineLocalPhone } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import { useTheme } from "@/lib/context/ThemeContext";
import { CgArrowLongLeftR, CgArrowLongRightR } from "react-icons/cg";
import { FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const { theme } = useTheme();
  const email = "muhazvla313@gmail.com";
  const phone = "+917996724318";
  const handleCardClick = (item: string) => {
    window.location.href =
      item === "email" ? `mailto:${email}` : `tel:${phone}`;
  };

  return (
    <div
      className="w-full flex items-center h-[100vh] justify-center gap-12 flex-col"
      id="contact"
    >
      <motion.div className="flex items-center gap-8">
        <motion.div>
          <CgArrowLongLeftR className="text-[3rem]" />
        </motion.div>
        <motion.h1 className="text-xl md:text-2xl">Contact Us</motion.h1>
        <motion.div>
          <CgArrowLongRightR className="text-[3rem]" />
        </motion.div>
      </motion.div>

      <div className="w-full flex flex-col md:flex-row justify-center items-center gap-6 md:gap-0">
        <div className="flex items-start gap-4 flex-col">
          <h2 className="text-2xl">Let&apos;s Work Together</h2>
          <p className="w-[95%] md:w-[60%] text-gray-400 text-sm">
            Have a project in mind, or do you want to work with me? Feel free to
            reach out by writing to us.
          </p>

          <motion.div
            className={`flex items-center gap-4 cursor-pointer ${
              theme === "light" ? "bg-white/70" : "bg-gray-800"
            } shadow-md shadow-slate-400 rounded-2xl p-2 px-5`}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            whileHover={{ scale: 1.05 }}
            onClick={() => handleCardClick("email")}
          >
            <IoIosMailUnread className="text-2xl text-primary" />
            <div className="flex flex-col">
              <h4 className="text-gray-400">Email</h4>
              <h2 className="font-bold text-md">{email}</h2>
            </div>
          </motion.div>
          <motion.div
            className={`flex items-center gap-4 cursor-pointer ${
              theme === "light" ? "bg-white/70" : "bg-gray-800"
            } shadow-md shadow-slate-400 rounded-2xl p-2 px-5`}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            whileHover={{ scale: 1.05 }}
            onClick={() => handleCardClick("phone")}
          >
            <MdOutlineLocalPhone className="text-2xl text-primary" />
            <div className="flex flex-col">
              <h4 className="text-gray-400">Phone</h4>
              <h2 className="font-bold text-md">{phone}</h2>
            </div>
          </motion.div>
        </div>
        <motion.div
          className={`flex ${
            theme === "light" ? "bg-white/70" : "bg-gray-800"
          } shadow-2xl shadow-slate-500 p-5 rounded-2xl flex-col w-[98%] md:w-[30%] gap-4 md:gap-2 items-center`}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex p-1 md:p-3 items-center gap-2 border-b-2 border-gray-300 w-[90%] md:w-96">
            <FaRegUser className="text-[1.5rem] md:text-lg" />
            <input
              placeholder="Your name"
              required
              className="bg-transparent outline-none"
            />
          </div>
          <div className="flex p-1 md:p-3 items-center gap-2 border-b-2 border-gray-300 w-[90%] md:w-96">
            <IoIosMailUnread className="text-[1.5rem] md:text-lg" />
            <input
              placeholder="Your email address"
              type="email"
              required
              className="bg-transparent outline-none"
            />
          </div>
          <div className="flex p-1 md:p-3 items-center gap-2 border-b-2 border-gray-300 w-[90%] md:w-96">
            <MdOutlineLocalPhone className="text-[1.5rem] md:text-lg" />
            <input
              placeholder="Your phone number"
              type="number"
              className="bg-transparent outline-none"
            />
          </div>
          <textarea
            placeholder="Your message"
            required
            className="bg-transparent outline-none p-2 border-b-2  border-gray-300 w-[90%] md:w-96"
          />
          <motion.button
            className="p-2 w-52 bg-primary rounded-full text-white hover:bg-secondary flex items-center gap-2 justify-center mt-3"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            whileHover={{ scale: 1.05 }}
          >
            Submit
            <FaPaperPlane />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
