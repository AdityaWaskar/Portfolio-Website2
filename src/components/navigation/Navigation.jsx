import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CgEthernet, CgProfile } from "react-icons/cg";
import { FaBars } from "react-icons/fa";

import "./navigation.css";
import "../../global.css";

const navElements = [
  {
    name: "Intro",
    icon: <CgProfile size={30} />,
    link: "#intro",
  },
  {
    name: "Intro",
    icon: <CgProfile size={30} />,
    link: "#intro",
  },
  {
    name: "Intro",
    icon: <CgProfile size={30} />,
    link: "#intro",
  },
];

const Navigation = () => {
  const [navElement, setNavElement] = useState(navElements[0]);
  const [isOpen, setIsOpen] = useState(false);

  const slidebarAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "auto",
      padding: "5px 15px",
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  };

  // const hamburgerAnimation = {
  //   hidden: {
  //     justifyContent: "center",
  //     transition: {
  //       duration: 0.2,
  //     },
  //   },
  //   show: {
  //     justifyContent: "end",
  //     transition: {
  //       duration: 0.2,
  //     },
  //   },
  // };

  const toggle = () => setIsOpen(!isOpen);

  return (
    <nav>
      <motion.div
        animate={{
          width: isOpen ? "160px" : "45px",
        }}
      >
        {/* <AnimatePresence> */}
        <div
          // variants={hamburgerAnimation}
          // initial="hidden"
          // animate="show"
          // exit="hidden"
          style={{ "justify-content": isOpen ? "end" : "center" }}
          className="top_section"
        >
          {/* <div className="hamburger"> */}
          <FaBars onClick={toggle} size={30} />
          {/* </div> */}
        </div>
        {/* </AnimatePresence> */}
        <div className="routes">
          {navElements.map((element) => (
            <a key={element.name} href={element.link} className="link">
              <div className="icon">{element.icon}</div>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    variants={slidebarAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="link_text"
                  >
                    {element.name}
                  </motion.div>
                )}
              </AnimatePresence>
            </a>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navigation;
