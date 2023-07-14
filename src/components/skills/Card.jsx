import React from "react";
import "./card.css";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
const Card = (props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start({
        scale: 1,
        transition: { duration: 0.5 },
      });
    } else {
      mainControls.start({
        scale: 0,
      });
    }
    // console.log(isInView);
  }, [isInView]);
  return (
    <motion.div
      ref={ref}
      //   initial={{ scale: 0 }}
      animate={mainControls}
      //   animate={{ scale: 1 }}
      //   transition={{ duration: 0.5 }}
      className="skillCardContainer"
    >
      <div className="title">{props.title}</div>
      <div className="card">
        {props.skills.map((skill) => (
          <div className="row">
            <div className="tooltip">{skill.level}</div>
            <div className="skill_icon">{skill.icon}</div>
            <div className="skill_name">{skill.name}</div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Card;
