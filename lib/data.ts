import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import Project1 from "@/public/Project1.png";
import Project2 from "@/public/Project2.png";
import Project3 from "@/public/Project3.png";

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
    name: "Experience",
    hash: "#experience",
  },
] as const;

export const experiencesData = [
  {
    title: "IT Department Intern",
    location: "MTT Shipping Group, Malaysia",
    description:
      "Managed and maintained the company database. Contributed to a document digitization project, enhancing the efficiency of the department.",
    icon: React.createElement(LuGraduationCap),
    date: "May 2022 - July 2022",
  },
  {
    title: "High School Mathematics Tutor",
    location: "Prince of Wales International School, Malaysia",
    description:
      "Tutored high school students in mathematics, helping them improve their understanding and performance in the subject.",
    icon: React.createElement(CgWorkAlt),
    date: "August 2022 - December 2022",
  },
  {
    title: "BSc. Statistics Student",
    location: "University of British Columbia, Vancouver, BC",
    description:
      "Currently pursuing a Bachelor of Science in Statistics. Developing strong analytical and problem-solving skills, with a passion for technology and programming.",
    icon: React.createElement(FaReact),
    date: "September 2023 - Present",
  },
] as const;



export const projectsData = [
  {
    title: "Project1",
    description:
      "description",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: Project1,
  },
  {
    title: "Project2",
    description:
      "description",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: Project2,
  },
  {
    title: "Project3",
    description:
      "description",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: Project3,
  },
] as const;
