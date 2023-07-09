import React from "react";
import "./card.css";

const Card = (props) => {
  return (
    <div className="experienceCard">
      <div className="mainContent">
        <div className="title">{props.info.post}</div>
        <div className="date">
          {props.info.start_date} - {props.info.end_date}
        </div>
      </div>
      <div className="desc">{props.info.desc}</div>
    </div>
  );
};

export default Card;
