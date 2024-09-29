"use client";

import { useState, useEffect } from "react";
import Hero from "@/components/composite-components/hero/Hero";
import Skills from "@/components/composite-components/skills/Skills";
import Contact from "@/components/composite-components/contact/Contact";
import Projects from "@/components/composite-components/projects/Projects";

export default function Home() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setRotation(scrollTop * 0.05);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setRotation]);

  return (
    <div className="relative overflow-x-hidden">
      <div
        style={{
          transform: `translateX(30vw) translateY(5rem) rotate(${rotation}deg)`,
        }}
        className={`absolute md:overflow-hidden md:rounded-full md:border md:border-[2px] 
                md:border-white outline outline-[1px] outline-offset-[10rem] outline-gray-100/25 z-10`}
      >
        <img
          src="/assets/images/abstract.jpg"
          alt="Circle Image"
          className="w-full h-full object-cover"
        />
      </div>
      {/* <div
        className={`h-[100rem] w-[100rem] absolute left-[-40rem] bottom-[40rem] md:overflow-hidden md:rounded-full md:border md:border-[2px] 
                md:border-white outline outline-[1px] outline-offset-[10rem] outline-gray-100/25 z-10`}
      >
        <video
          autoPlay
          muted
          playsInline
          loop
          className="w-full h-full object-cover"
        >
          <source src="/assets/videos/projects1-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div> */}
      <video
        autoPlay
        muted
        playsInline
        loop
        className="w-screen h-screen object-cover fixed top-0 left-0"
      >
        <source src="/assets/videos/main-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <main className="relative overflow-y-scroll z-20">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
