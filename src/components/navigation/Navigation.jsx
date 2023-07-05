import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CgWebsite, CgProfile } from "react-icons/cg";
import { FaBars, FaFileCode } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import { AiFillMail } from "react-icons/ai";

import "./navigation.css";
import "../../global.css";

const navElements = [
  {
    name: "Intro",
    icon: <CgProfile size={30} />,
    link: "#intro",
  },
  {
    name: "Skills",
    icon: <FaFileCode size={30} />,
    link: "#intro",
  },
  {
    name: "Projects",
    icon: <CgWebsite size={30} />,
    link: "#intro",
  },
  {
    name: "Experience",
    icon: <MdOutlineWork size={30} />,
    link: "#intro",
  },
  {
    name: "Contact Us",
    icon: <AiFillMail size={30} />,
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
      padding: "5px 10px",
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  };

  const toggle = () => setIsOpen(!isOpen);

  return (
    <motion.nav
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{
        duration: 0.5,
      }}
    >
      <motion.div
        animate={{
          width: isOpen ? "200px" : "45px",
        }}
      >
        <div
          style={{ "justify-content": isOpen ? "end" : "center" }}
          className="top_section"
        >
          <FaBars onClick={toggle} size={30} />
        </div>
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
    </motion.nav>
  );
};

export default Navigation;
