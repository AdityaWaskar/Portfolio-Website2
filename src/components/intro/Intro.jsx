import React from "react";
import "../../global.css";
import "./intro.css";
import intro from "../assets/man.png";

import { motion } from "framer-motion";

const onButtonClick = () => {
  // using Java Script method to get PDF file
  // fetch("resume.pdf").then((response) => {
  //   response.blob().then((blob) => {
  //     // Creating new object of PDF file
  //     const fileURL = window.URL.createObjectURL(blob);
  //     // Setting various property values
  //     let alink = document.createElement("a");
  //     alink.href = fileURL;
  //     alink.download = "adityawaskar.pdf";
  //     alink.click();
  //   });
  // });
};

const Intro = () => {
  return (
    <div className="introContainer">
      <motion.div
        className="mainPhoto"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
          scale: {
            type: "spring",
            damping: 5,
            stiffness: 100,
            restDelta: 0.001,
          },
        }}
      >
        <img src={intro} alt="" />
      </motion.div>
      <div className="intoTitle">
        <motion.div
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          style={{ textAlign: "center" }}
        >
          Hello, I'm
        </motion.div>
        <motion.div
          id="name"
          initial={{ x: 1000 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.1 }}
          style={{ textAlign: "center" }}
        >
          Aditya Waskar
        </motion.div>
        <motion.div
          id="skillsNames"
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.1 }}
          style={{ textAlign: "center" }}
        >
          Frontend Developer
        </motion.div>
      </div>
      <div className="buttons">
        <button>Download CV</button>
        <button>Let's Talk</button>
      </div>
    </div>
  );
};

export default Intro;
