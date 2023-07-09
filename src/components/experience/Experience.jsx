import React, { useEffect, useRef, useState } from "react";
import "./experience.css";
import "../../global.css";
import { motion, useAnimation, useInView } from "framer-motion";
import AnimatedTextCharacter from "../AnimatedTextCharacter";
import Card from "./card/Card";
import { MdWork } from "react-icons/md";

const experience = [
  {
    id: 1,
    post: "Web Developer",
    start_date: "03/2023",
    end_date: "06/2023",
    desc: "I developed Parinaam, a comprehensive result portal for multiple colleges across states. My contributions involved integrating data, enhancing user experience, and ensuring robust security measures. Parinaam serves as a centralized platform for efficient and reliable result management.",
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const [experienceSelect, setExperienceSelect] = useState(experience[0]);

  useEffect(() => {
    if (isInView) {
      mainControls.start({ x: 0 });
    } else {
      mainControls.start({ x: -1000 });
    }
    console.log(isInView);
  }, [isInView]);
  return (
    <div ref={ref} className="experienceContainer">
      <div className="top text_center">
        <motion.div animate={mainControls} className="subtitle text_center">
          What Experience I Have
        </motion.div>
        <div className="title text_center">
          <AnimatedTextCharacter text={"My Experience"} />
        </div>
      </div>
      <div className="bottom">
        <Card
          info={experienceSelect}
          setExperienceSelect={setExperienceSelect}
        />
        <div className="roadmapLogo">
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "30%" }}
            className="verticalLine v1"
          ></motion.div>
          <div className="logo">
            <MdWork size={30} />
          </div>
          <div className="verticalLine v2"></div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
