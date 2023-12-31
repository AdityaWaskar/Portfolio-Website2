import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import "../../global.css";
import "./intro.css";
import intro from "../assets/man.png";
import {
  SiLeetcode,
  SiCodingninjas,
  SiCodechef,
  SiGeeksforgeeks,
} from "react-icons/si";
import resume from "../assets/resume.pdf";

const links = {
  leetcode: "https://leetcode.com/adityawaskar03/",
  linkedin: "https://www.linkedin.com/in/aditya-waskar-56682b205/",
  hackerrank: "https://www.hackerrank.com/adityawaskar05",
  git: "https://github.com/AdityaWaskar",
  codingninja:
    "https://www.codingninjas.com/studio/profile/21dda754-c75b-41d5-a88c-075bc7b1b12e",
  gfg: "https://auth.geeksforgeeks.org/user/adityawaskar03",
  codechef: "https://www.codechef.com/users/adityawaskar03",
};

const onButtonClick = () => {
  // using Java Script method to get PDF file
  fetch(resume).then((response) => {
    // fetch("../assets/adityaWaskarResume.pdf").then((response) => {
    response.blob().then((blob) => {
      // Creating new object of PDF file
      const fileURL = window.URL.createObjectURL(blob);
      // Setting various property values
      let alink = document.createElement("a");
      alink.href = fileURL;
      alink.download = "adityawaskar.pdf";
      alink.click();
    });
  });
};
const Intro = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(0);
  const toRotate = [
    "Full Stack Developer",
    "Competitive Programmer",
    "Web Designer",
  ];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 500;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);
    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(100);
    }
  };

  return (
    <section className="introContainer" id="intro">
      <div className="background">
        <img src={intro} alt="" />
      </div>
      <div className="background opacity-shade"></div>
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
          transition={{
            duration: 0.5,
          }}
        >
          Hello, I'm
        </motion.div>
        <motion.div
          id="name"
          initial={{ x: 1000 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          style={{ textAlign: "center" }}
        >
          Aditya Waskar
        </motion.div>
        <motion.div
          id="skillsNames"
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          style={{ textAlign: "center" }}
        >
          <span style={{ color: "black" }}></span>
          {text}
          <span id="textCursor">│</span>
        </motion.div>
      </div>
      <div className="buttons">
        <button onClick={onButtonClick}>Check Resume</button>
        <button onClick={() => (window.location.href = "#contactUs")}>
          Let's Talk
        </button>
      </div>
      <div className="links">
        <motion.a
          initial={{ y: -1000 }}
          animate={{ y: 0 }}
          transition={{
            duration: 1.2,
          }}
          whileHover={{
            scale: 1.2,
            transition: {
              duration: 0.2,
            },
          }}
          href={links.leetcode}
        >
          <SiLeetcode size={25} />
        </motion.a>
        <motion.a
          initial={{ y: -1000 }}
          animate={{ y: 0 }}
          transition={{
            duration: 1,
          }}
          whileHover={{
            scale: 1.2,
            transition: {
              duration: 0.2,
            },
          }}
          href={links.codingninja}
        >
          <SiCodingninjas size={25} />
        </motion.a>
        <motion.a
          initial={{ y: -1000 }}
          animate={{ y: 0 }}
          transition={{
            duration: 0.9,
          }}
          whileHover={{
            scale: 1.2,
            transition: {
              duration: 0.2,
            },
          }}
          href={links.codechef}
        >
          <SiCodechef size={25} />
        </motion.a>
        <motion.a
          initial={{ y: -1000 }}
          animate={{ y: 0 }}
          transition={{
            duration: 0.7,
          }}
          whileHover={{
            scale: 1.2,
            transition: {
              duration: 0.2,
            },
          }}
          href={links.gfg}
        >
          <SiGeeksforgeeks size={25} />
        </motion.a>
      </div>
    </section>
  );
};

export default Intro;
