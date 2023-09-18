import React, { useEffect, useRef, useState } from "react";
import "./experience.css";
import "../../global.css";
import { motion, useAnimation, useInView } from "framer-motion";
import AnimatedTextCharacter from "../AnimatedTextCharacter";
import Card from "./card/Card";
import { MdWork } from "react-icons/md";
import { BiRadioCircle } from "react-icons/bi";
import CertificateCard from "../certificateCard/CertificateCard";
import certificate1 from "../assets/certificates/certificate1.png";

const experience = [
  {
    id: 1,
    post: "Web Developer",
    start_date: "03/2023",
    end_date: "06/2023",
    desc: "I developed Parinaam, a comprehensive result portal for multiple colleges across states. My contributions involved integrating data, enhancing user experience, and ensuring robust security measures. Parinaam serves as a centralized platform for efficient and reliable result management.",
    img: certificate1,
  },
  {
    id: 2,
    post: "Web Developer",
    start_date: "03/2023",
    end_date: "06/2023",
    desc: "I developed Parinaam, a comprehensive result portal for multiple colleges across states. My contributions involved integrating data, enhancing user experience, and ensuring robust security measures. Parinaam serves as a centralized platform for efficient and reliable result management.",
    img: certificate1,
  },
];

const Experience = () => {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const animation1Logic = useAnimation();
  const animation2Logic = useAnimation();
  const animation3Logic = useAnimation();
  const [experienceSelect, setExperienceSelect] = useState(experience[0]);
  const [titleAnimation, setTitleAnimation] = useState(false);
  const [animation1, setAnimation1] = useState(false);
  const [animation2, setAnimation2] = useState(false);
  const [animation3, setAnimation3] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isInView) {
      mainControls.start({ x: 0 });
      if (titleAnimation === true) {
        animation1Logic.start({ height: "30%" });
      }
      if (animation1 === true) {
        animation2Logic.start({ opacity: 1 });
      }
      if (animation1 === true && animation2 === true) {
        animation3Logic.start({ height: "50%" });
      }
    } else {
      mainControls.start({ x: -1000 });
      animation1Logic.start({ height: 0 });
      animation2Logic.start({ opacity: 0 });
      animation3Logic.start({ height: 0 });
      setAnimation1(false);
      setAnimation2(false);
      setAnimation3(false);
      setTitleAnimation(false);
    }
  }, [isInView, animation1, animation2, animation3]);
  return (
    <section ref={ref} className="experienceContainer" id="experiences">
      <div className="top text_center">
        <motion.div
          onAnimationComplete={() => setTitleAnimation(true)}
          animate={mainControls}
          className="subtitle text_center"
        >
          What Experience I Have
        </motion.div>
        <div className="title text_center">
          <AnimatedTextCharacter text={"My Experience"} />
        </div>
      </div>
      <div className="bottom">
        {isOpen && (
          <CertificateCard
            certificate={experienceSelect.img}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        )}
        {experience?.map((e) => (
          <div className="subSection">
            <div className="left">
              <div className="logo">
                <BiRadioCircle size={20} />
              </div>
              <div className="vertical_line">
                <div></div>
              </div>
            </div>
            <Card
              setIsOpen={setIsOpen}
              info={experienceSelect}
              setExperienceSelect={setExperienceSelect}
            />
          </div>
        ))}

        {/* <div className="roadmapLogo" ref={ref2}>
          <motion.div
            animate={animation1Logic}
            className="verticalLine v1"
            transition={{ duration: 0.5, delay: 0.5 }}
            onAnimationComplete={() => setAnimation1(true)}
          ></motion.div>
          {animation1 && (
            <motion.div
              animate={animation2Logic}
              className="logo"
              onAnimationComplete={() => setAnimation2(true)}
              transition={{ duration: 0.3 }}
            >
              <MdWork size={30} />
            </motion.div>
          )}
          {animation1 && animation2 && (
            <motion.div
              animate={animation3Logic}
              className="verticalLine v2"
              transition={{ duration: 0.5, delay: 1.3 }}
              onAnimationComplete={() => setAnimation3(true)}
            ></motion.div>
          )}
        </div> */}
      </div>
    </section>
  );
};

export default Experience;
