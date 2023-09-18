import React, { useEffect, useRef, useState } from "react";
import "./projects.css";
import "../../global.css";
import { motion, useAnimation, useInView } from "framer-motion";
import AnimatedTextCharacter from "../AnimatedTextCharacter";
import ProjectCard from "./projectCard/ProjectCard";
import {
  studentPortfolio,
  mediblock,
  iBlog,
  movix,
  codeyantra,
} from "../assets";

const project_list = [
  {
    id: 1,
    name: "MEDI-BLOCK",
    desc: "blockchain based website which is stores the records securely and display the data in restricted mode.Build by using Solidity, Web3.js, React.js and Express.js ",
    img: mediblock,
    tags: ["Blockchain", "React.js", "Node.js", "Express.js", "Solidity"],
    github: "https://github.com/AdityaWaskar/MEDI-BLOCK",
    link: "https://drive.google.com/file/d/1wH9TpVr5_fNocQso9HNXU4T-D2eHvJjY/view?usp=sharing",
  },
  {
    id: 2,
    name: "Student Portfolio",
    desc: "This application will bring you to a place where you can see the student's all details at a place. Build by using python(Tkinter), mysql.",
    img: studentPortfolio,
    tags: ["Python", "Tkinter", "MySQL"],
    github: "https://github.com/AdityaWaskar/Student_portfolio",
    link: "/",
  },
  {
    id: 3,
    name: "Movix",
    desc: "Crafted engaging React web app with TMDB API integration. Responsive design, Redux state management, shimmer loading effect, infinite scrolling for immersive user experience.",
    img: movix,
    tags: ["React.js", "Node.js", "Express.js", "Redux", "REST API"],
    github: "https://github.com/AdityaWaskar/Movix.git",
    link: "https://movix-adityawaskar.vercel.app/",
  },
  {
    id: 4,
    name: "Codeyantra",
    desc: "Creating dynamic frontend with React.js. Firebase for real-time data storage. Framer Motion for engaging animations. Interactive, efficient, and user-friendly web applications.",
    img: codeyantra,
    tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/AdityaWaskar/Codeyantra-Website",
    link: "https://codeyantra-slrtce.netlify.app/",
  },
  {
    id: 3,
    name: "iBlog",
    desc: "Responsive Blog Website build with HTML and CSS, Offering a seamless user experience across various devices. Customize the layout and design with CSS.",
    img: iBlog,
    tags: ["HTML", "CSS", "Javascript"],
    github: "https://github.com/AdityaWaskar/Blog-Website",
    link: "https://iblog-i7li.onrender.com/",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start({ x: 0 });
    } else {
      mainControls.start({ x: -1000 });
    }
  }, [isInView]);
  return (
    <section className="projectContainer" id="projects">
      <div ref={ref} className="top text_center">
        <motion.div animate={mainControls} className="subtitle text_center">
          My Recent Work
        </motion.div>
        <motion.div className="title">
          <AnimatedTextCharacter text={"My Projects"} />
        </motion.div>
      </div>
      <div className="bottom">
        {project_list.map((info, i) => (
          <ProjectCard info={info} i={i} key={i} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
