"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
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
      className={`${navbarColor} _container_padding_x fixed w-screen flex items-center justify-between py-[.5rem] text-white z-50 transition-colors duration-500`}
    >
      {/* logo */}
      <div className="flex items-center gap-[4vw]">
        <div className="flex items-center gap-3">
          <span className="text-[3rem] tracking-wide font-[500]">Sahil</span>
          <div className="w-4 h-4 bg-accent rounded-full translate-y-2"></div>
        </div>
        {/* nav buttons */}
        <ul className="_nav_text flex gap-10">
          <li>
            <Link href="/">Info</Link>
          </li>
          <li>
            <Link href="#skills">Skills</Link>
          </li>
          <li>Experience</li>
          <li>Contact</li>
        </ul>
      </div>
      {/* dark mode switch  and resume*/}
      <button className="py-3 px-4 rounded-xl text-[1.2rem] text-accent font-[500] tracking-wide cursor-pointer bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 bg-primaryDark">
        Resume
      </button>
    </nav>
  );
};

export default Navbar;
