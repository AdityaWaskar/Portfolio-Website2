import React, { useEffect, useRef, useState } from "react";
import "./projects.css";
import "../../global.css";
import { motion, useAnimation, useInView } from "framer-motion";
import AnimatedTextCharacter from "../AnimatedTextCharacter";
import LaptopScreen from "./leftside/LaptopScreen";
import ProjectList from "./rightside/ProjectList";
import studentPortfolio from "../assets/projects/studentPortfolio.png";
import mediblock from "../assets/projects/mediblock.png";

const project_list = [
  {
    id: 1,
    name: "MEDI-BLOCK",
    desc: "blockchain based website which is stores the records securely and display the data in restricted mode.Build by using Solidity, Web3.js, React.js and Express.js ",
    img: mediblock,
    github: "www",
  },
  {
    id: 2,
    name: "Student Portfolio",
    desc: "This application will bring you to a place where you can see the student's all details at a place. Build by using python(Tkinter), mysql.",
    img: studentPortfolio,
    github: "www",
  },
  {
    id: 3,
    name: "iBlog",
    desc: "Responsive Blog Website build with HTML and CSS, Offering a seamless user experience across various devices.",
    img: mediblock,
    github: "www",
  },
  // {
  //   id: 4,
  //   name: "MEDI-BLOCK4",
  //   desc: "alkfjsdfj afjsdjfds fjdslf dsljfdlkfj fjsfjsld;fjsd;fjdsl;",
  //   img: studentPortfolio,
  //   github: "www",
  // },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const [select, setSelect] = useState(project_list[0]);

  useEffect(() => {
    if (isInView) {
      mainControls.start({ x: 0 });
    } else {
      mainControls.start({ x: -1000 });
    }
    // console.log(isInView);
  }, [isInView]);
  return (
    <section className="projectContainer" id="projects">
      <div ref={ref} className="top text_center">
        <motion.div animate={mainControls} className="subtitle text_center">
          What Projects I Have
        </motion.div>
        <motion.div className="title">
          <AnimatedTextCharacter text={"My Projects"} />
        </motion.div>
      </div>
      <div className="bottom">
        <LaptopScreen select={select} />
        <ProjectList
          project_list={project_list}
          setSelect={setSelect}
          select={select}
        />
      </div>
    </section>
  );
};

export default Projects;
