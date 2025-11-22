"use client";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { Download, Navigation } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section aria-label="Hero section" className="pb-20 pt-36 relative">
      <div>
        <Spotlight
          aria-hidden="true"
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="purple"
        />
        <Spotlight
          aria-hidden="true"
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight
          aria-hidden="true"
          className="top-28 left-80 h-[80vh] w-[50vw]"
          fill="purple"
        />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.3] bg-grid-black-100/[0.2] absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          {/* Profile Image */}
          <motion.img
            src="/profile.jpg"
            alt="Oussama SAIDI"
            className="w-33 h-33 rounded-full object-cover mb-6 border-6 border-[#00031a] shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.1, boxShadow: "0 0 20px #9333ea" }}
          />

          {/* Title */}
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Transforming Tech Concepts into Real-World Solutions"
          />

          {/* Description */}
          <motion.p
            className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl text-gray-300 font-extrabold tracking-tight drop-shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            I&apos;m{" "}
            <span className="font-extrabold text-white underline decoration-indigo-500 underline-offset-4">
              Oussama SAIDI
            </span>
            , a Bachelor student in
            <span className="font-extrabold text-white underline decoration-indigo-500 underline-offset-4">
              {" "}
              Software & Information Systems Engineering
            </span>{" "}
            and a passionate{" "}
            <span className="font-extrabold text-white underline decoration-indigo-500 underline-offset-4">
              MERN Stack Developer
            </span>
            . I build efficient, user-focused digital products and turn complex
            ideas into seamless, real-world solutions.
          </motion.p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <a href="#projects">
              <MagicButton
                title="Show my projects"
                icon={<Navigation size={18} className="text-white" />}
                position="left"
              />
            </a>

            <a href="/resume.pdf" download>
              <MagicButton
                title="Download Resume"
                icon={<Download size={18} className="text-white" />}
                position="left"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
