import React, { useState } from "react";
import "./certificate.css";
import { motion } from "framer-motion";

const CertificateCard = (props) => {
  const onclickEvent = () => {
    props.setIsOpen(false);
  };
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: 1,
        opacity: 1,
      }}
      className="certificateCardContainer"
      onClick={onclickEvent}
    >
      <div className="cardContainer">
        <img src={props.certificate} alt="" />
      </div>
    </motion.div>
  );
};

export default CertificateCard;
