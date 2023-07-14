import React, { useEffect, useRef } from "react";
import "./projectCard.css";
import { motion, useAnimation, useInView } from "framer-motion";

const ProjectCard = (props) => {
  const onClickEvent = (link) => {
    window.location.href = link;
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start({ opacity: 1, translateX: 0, translateY: 0 });
    } else {
      mainControls.start({
        opacity: 0,
        translateX: props.i % 2 === 0 ? -50 : 50,
        translateY: -50,
      });
    }
  }, [isInView]);
  return (
    <motion.div
      ref={ref}
      animate={mainControls}
      transition={{ duration: 0.3, delay: props.i * 0.3 }}
      className="projectCardContainer"
    >
      <div className="coverImg">
        <img src={props.info.img} alt="" />
      </div>
      <div className="content">
        <div className="title">{props.info.name}</div>
        <div className="desc">{props.info.desc}</div>
        <div className="button">
          <button onClick={() => onClickEvent(props.info.github)}>
            Github
          </button>
          <button onClick={() => onClickEvent(props.info.link)}>
            Live Demo
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
