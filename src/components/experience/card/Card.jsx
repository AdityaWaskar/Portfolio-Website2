import React, { useEffect, useRef } from "react";
import "./card.css";
import {
  AnimatePresence,
  motion,
  useAnimation,
  useInView,
} from "framer-motion";

const Card = (props) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start({ x: 0, opacity: 1 });
    } else {
      mainControls.start({ x: -20, opacity: 0 });
    }
  }, [isInView]);
  const onclickEvent = () => {
    props.setIsOpen(true);
  };
  return (
    <AnimatePresence mode="wait">
      <motion.div
        ref={ref}
        className="experienceCard"
        // initial={{ x: -20, opacity: 0 }}
        animate={mainControls}
        exit={{ x: 20, opacity: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.5,
        }}
        onClick={onclickEvent}
      >
        <div className="mainContent">
          <div className="title">{props.info.post}</div>
          <div className="date">
            {props.info.start_date} - {props.info.end_date}
          </div>
        </div>
        <div className="desc">{props.info.desc}</div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Card;
