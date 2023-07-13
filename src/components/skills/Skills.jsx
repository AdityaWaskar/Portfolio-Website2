import Card from "./Card";
import "./skills.css";
import { RiReactjsLine } from "react-icons/ri";
import { IoLogoNodejs } from "react-icons/io";
import { TbBrandPython, TbBrandJavascript, TbBrandCss3 } from "react-icons/tb";
import { AiOutlineHtml5 } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import { SiCplusplus, SiSolidity } from "react-icons/si";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import AnimatedTextCharacter from "../AnimatedTextCharacter";

const frontendSkills = [
  {
    icon: <RiReactjsLine size={25} />,
    name: "React.js",
    level: "intermediate",
  },
  {
    icon: <AiOutlineHtml5 size={25} />,
    name: "HTML",
    level: "intermediate",
  },
  {
    icon: <TbBrandCss3 size={25} />,
    name: "CSS",
    level: "intermediate",
  },
  {
    icon: <TbBrandJavascript size={25} />,
    name: "Javascript",
    level: "intermediate",
  },
  {
    icon: <CgWebsite size={25} />,
    name: "PWA",
    level: "beginner",
  },
];

const backendSkills = [
  {
    icon: <IoLogoNodejs size={25} />,
    name: "Node.js",
    level: "intermediate",
  },
  {
    icon: <IoLogoNodejs size={25} />,
    name: "Express.js",
    level: "intermediate",
  },
  {
    icon: <SiSolidity size={25} />,
    name: "Solidity",
    level: "beginner",
  },
  {
    icon: <SiCplusplus size={25} />,
    name: "C++",
    level: "expert",
  },
  {
    icon: <TbBrandPython size={25} />,
    name: "Python",
    level: "intermediate",
  },
];
const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start({ x: 0 });
    } else {
      mainControls.start({ x: -1000 });
    }
    // console.log(isInView);
  }, [isInView]);
  return (
    <section className="skillsContainer" id="skills">
      <div ref={ref} className="top">
        <motion.div animate={mainControls} className="subtitle">
          What Skills I Have
        </motion.div>
        <motion.div className="title">
          <AnimatedTextCharacter text={"My Skills"} />
        </motion.div>
      </div>
      <div className="down">
        <Card skills={frontendSkills} title={"Frontend Development"} />
        <Card skills={backendSkills} title={"Backend Development"} />
      </div>
    </section>
  );
};

export default Skills;
