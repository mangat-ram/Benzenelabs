"use client";

import { useActiveSectionContext } from "@/context/ActiveSectionContext";
import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";

const Header = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 h-[5.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:h-[5rem]"
        initial={{ y: -100, x: "-0%", opacity: 0 }}
        animate={{ y: 0, x: "-0%", opacity: 1 }}
      >
      </motion.div>
      <nav className="flex items-center justify-between fixed w-full h-12 py-2 sm:top-[1rem] sm:h-[initial] sm:py-0 px-4">
        <motion.div className="flex items-center gap-2 text-3xl font-bold font-means"
        initial={{ y: -100, x: "-0%", opacity: 0 }}
        animate={{ y: 0, x: "-0%", opacity: 1 }}>
          <span><span className="text-white ml-1 bg-orange-500 p-1 rounded-md ">Be</span>nzenelabs&Co.</span>
        </motion.div>
        <ul className="flex flex-wrap items-center justify-between gap-y-1 text-[1.1rem] font-bold text-gray-600 sm:flex-nowrap sm:gap-5 ">
          {links.map(link => (
            <motion.li
              className="flex items-center justify-center relative font-spac"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx("flex items-center justify-center px-2 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300", {
                  "text-gray-950 dark:text-gray-200": activeSection === link.name,
                })}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                    className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
