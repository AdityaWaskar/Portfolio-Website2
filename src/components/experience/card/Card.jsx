import React from "react";
import "./card.css";
import { motion } from "framer-motion";

const Card = (props) => {
  const onclickEvent = () => {
    props.setIsOpen(true);
  };
  return (
    <motion.div className="experienceCard" onClick={onclickEvent}>
      <div className="mainContent">
        <div className="title">{props.info.post}</div>
        <div className="date">
          {props.info.start_date} - {props.info.end_date}
        </div>
      </div>
      <div className="desc">{props.info.desc}</div>
    </motion.div>
  );
};

export default Card;
