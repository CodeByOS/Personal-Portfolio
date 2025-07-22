"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaLinux,
  FaDatabase,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiJavascript,
  SiMysql,
  SiJirasoftware,
  SiTailwindcss,
  SiDaisyui,
} from "react-icons/si";

import { HiOutlineCubeTransparent } from "react-icons/hi2";

const skills = [
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "DaisyUI", icon: <SiDaisyui className="text-yellow-400" /> },
  { name: "Shadcn UI", icon: <HiOutlineCubeTransparent className="text-gray-500" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" /> },
  { name: "React", icon: <FaReact className="text-sky-500" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-700 dark:text-white" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "Mongoose", icon: <SiMongoose className="text-red-600" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
  { name: "GitHub", icon: <FaGithub className="text-black dark:text-white" /> },
  { name: "Jira", icon: <SiJirasoftware className="text-blue-600" /> },
  { name: "Python", icon: <FaPython className="text-blue-400" /> },
  { name: "SQL", icon: <FaDatabase className="text-purple-600" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-700" /> },
  { name: "Linux", icon: <FaLinux className="text-black dark:text-white" /> },
];

const Skills = () => {
  // Duplicate skills for seamless looping
  const loopedSkills = [...skills, ...skills];

  return (
    <div className="py-20 overflow-hidden relative" id="skills">
      <h1 className="heading text-center text-3xl md:text-4xl font-bold mb-20">
        Skills That Power
        <span className="text-purple-400 font-bold"> My Work</span>
      </h1>

      <motion.div
        className="flex space-x-10 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {loopedSkills.map((skill, index) => (
          <div
            key={`${skill.name}-${index}`}
            className="w-32 h-32 flex flex-col items-center justify-center bg-white dark:bg-[#00031a] rounded-2xl shadow-md hover:scale-105 transition-transform duration-300"
          >
            <div className="text-4xl mb-2">{skill.icon}</div>
            <p className="text-sm font-semibold text-center">{skill.name}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
