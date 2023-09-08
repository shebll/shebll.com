import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Computer Science Student",
    location: "Egypt, Cairo University",
    description:
      "I will be graduated in 2024/8/8, After 4 years of studying computer science specific information system. I have learned the fundamental of programming and principles of software and fundamental of database  .",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - present",
  },
  {
    title: "Front-End Developer Freelancer",
    location: "Upwork",
    description:
      "I'm now a Front-End developer working as a freelancer on Upwork . My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB,framer-motion. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023/8/30 - present",
  },
  {
    title: "Web Development Intern",
    location: "Cairo, CodeSoft",
    description:
      "I worked Web Development Interner in CodeSoft learned basic of Web Development and make awesome project through this journey.",
    icon: React.createElement(CgWorkAlt),
    date: "2023/8/30 - present",
  },
  {
    title: "Full-Stack Developer Intern",
    location: "Cairo, GrowIntern",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023/8/30 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Bento 0.2",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "Framer motion", "Tailwind"],
    imageUrl: "/projectImages/bento.png",
    url:""
  },
  
  {
    title: "Promptobia",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js","Tailwind", "MongoDB", "Mongoess" ],
    imageUrl: "/projectImages/promptobia.png",
    url:""
  },
  {
    title: "Travelia",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["HTML", "CSS", "JS", "SASS"],
    imageUrl: "/projectImages/travelia.png",
    url:""
  },
  {
    title: "MetaVerse",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "Framer motion", "Tailwind"],
    imageUrl: "/projectImages/metaverse.png",
    url:""
  },
  {
    title: "Medium 0.2",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js","Tailwind", "Sanity"],
    imageUrl: "/projectImages/medium.png",
    url:""
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "SASS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Framer Motion",
] as const;
// "Prisma",