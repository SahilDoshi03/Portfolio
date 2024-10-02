"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [navbarColor, setNavbarColor] = useState("bg-transparent");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 50) {
        setNavbarColor("bg-primaryDark");
      } else {
        setNavbarColor("bg-transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`flex flex-col md:flex-row md:items-center md:gap-8 ${navbarColor} ${active ? "!bg-primaryDark" : ""} _container_padding_x fixed w-screen z-50`}
    >
      <div className="flex items-center max-md:gap-8">
        <div className="flex items-center gap-8">
          <div
            onClick={() => {
              setActive((prev) => !prev);
            }}
            className="w-8 h-8 md:hidden flex flex-col items-center justify-center gap-[.5rem] relative"
          >
            <div
              className={`w-7 h-[2px] bg-white rounded-full transition-transform duration-300 ease-in-out ${active ? "absolute rotate-45" : ""}`}
            ></div>
            <div
              className={`w-7 h-[2px] bg-white rounded-full transition-transform duration-300 ease-in-out ${active ? "absolute -rotate-45 " : ""}`}
            ></div>
          </div>
        </div>

        {/* logo */}
        <div className="flex items-center gap-3">
          <span className="text-white text-[3rem] tracking-wide font-[500]">
            <Link href="#info">Sahil</Link>
          </span>
          <div className="w-4 h-4 bg-accent rounded-full translate-y-2"></div>
        </div>
      </div>
      <div
        className={`${active ? "" : "max-md:hidden"} w-full flex flex-col md:flex-row md:items-center justify-between py-[.5rem] text-white transition-all duration-500`}
      >
        <ul className="_nav_text flex flex-col md:flex-row gap-8 mt-2 mb-8 md:mt-0 md:mb-0">
          <li>
            <Link
              onClick={() => {
                setActive((prev) => !prev);
              }}
              href="#info"
            >
              Info
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                setActive((prev) => !prev);
              }}
              href="#skills"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                setActive((prev) => !prev);
              }}
              href="#projects"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                setActive((prev) => !prev);
              }}
              href="#contact"
            >
              Contact
            </Link>
          </li>
          <li className="md:hidden">
            <Link
              onClick={() => {
                setActive((prev) => !prev);
              }}
              href="/resume.pdf"
              download
            >
              Resume
            </Link>
          </li>
        </ul>
        <button className="hidden md:inline-block py-3 px-4 rounded-xl text-[1.2rem] text-accent font-[500] tracking-wide cursor-pointer bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 bg-primaryDark">
          <Link href="/resume.pdf" download>
            Resume
          </Link>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
