// import React, { useState } from "react";
// import { motion, AnimatePresence, stagger } from "framer-motion";
// import { CgWebsite, CgProfile } from "react-icons/cg";
// import { FaBars, FaFileCode } from "react-icons/fa";
// import { MdOutlineWork } from "react-icons/md";
// import { AiFillMail } from "react-icons/ai";

// import "./navigation.css";
// import "../../global.css";

// const navElements = [
//   {
//     name: "Intro",
//     icon: <CgProfile size={30} />,
//     link: "#intro",
//   },
//   {
//     name: "Skills",
//     icon: <FaFileCode size={30} />,
//     link: "#skills",
//   },
//   {
//     name: "Projects",
//     icon: <CgWebsite size={30} />,
//     link: "#projects",
//   },
//   {
//     name: "Experience",
//     icon: <MdOutlineWork size={30} />,
//     link: "#experiences",
//   },
//   {
//     name: "Contact Us",
//     icon: <AiFillMail size={30} />,
//     link: "#contactUs",
//   },
// ];

// const Navigation = () => {
//   const [navElement, setNavElement] = useState(navElements[0].name);
//   const [isOpen, setIsOpen] = useState(false);

//   const slidebarAnimation = {
//     hidden: {
//       width: 0,
//       padding: 0,
//       opacity: 0,
//       transition: {
//         duration: 0.2,
//       },
//     },
//     show: {
//       width: "auto",
//       padding: "5px 10px",
//       opacity: 1,
//       transition: {
//         duration: 0.2,
//       },
//     },
//   };

//   const toggle = () => setIsOpen(!isOpen);

//   return (
//     <motion.nav
//       initial={{ x: -100 }}
//       animate={{ x: 0 }}
//       transition={{
//         duration: 0.5,
//       }}
//     >
//       <motion.div
//         animate={{
//           width: isOpen ? "200px" : "45px",
//         }}
//       >
//         <div
//           style={{ "justify-content": isOpen ? "end" : "center" }}
//           className="top_section"
//         >
//           <FaBars onClick={toggle} size={30} />
//         </div>
//         <div className="routes">
//           {navElements.map((element) => (
//             <a
//               key={element.name}
//               href={element.link}
//               className={navElement === element.name ? "link active" : "link"}
//               onClick={() => setNavElement(element.name)}
//             >
//               <div className="icon">{element.icon}</div>
//               <AnimatePresence>
//                 {isOpen && (
//                   <motion.div
//                     variants={slidebarAnimation}
//                     initial="hidden"
//                     animate="show"
//                     exit="hidden"
//                     transition={{ delay: stagger(0.05), at: "-0.1" }}
//                     className="link_text"
//                   >
//                     {element.name}
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </a>
//           ))}
//         </div>
//       </motion.div>
//     </motion.nav>
//   );
// };

// export default Navigation;
import React, { useState } from "react";
import { motion, AnimatePresence, stagger } from "framer-motion";
import { CgWebsite } from "react-icons/cg";
import { MdOutlineEmail, MdWorkOutline } from "react-icons/md";
import { BiHomeAlt2 } from "react-icons/bi";
import { BsCodeSlash } from "react-icons/bs";

import "./navigation.css";
import "../../global.css";

const navElements = [
  {
    name: "Intro",
    icon: <BiHomeAlt2 />,
    link: "#intro",
  },
  {
    name: "Skills",
    icon: <BsCodeSlash />,
    link: "#skills",
  },
  {
    name: "Projects",
    icon: <CgWebsite />,
    link: "#projects",
  },
  {
    name: "Experience",
    icon: <MdWorkOutline />,
    link: "#experiences",
  },
  {
    name: "Contact Us",
    icon: <MdOutlineEmail />,
    link: "#contactUs",
  },
];

const Navigation = () => {
  const [navElement, setNavElement] = useState(navElements[0].name);

  // const slidebarAnimation = {
  //   hidden: {
  //     transform: translateY("10px"),
  //   },
  //   show: {
  //     transform: translateY(0),
  //   },
  // };

  return (
    <nav>
      <motion.div
        className="navigationContainer"
        initial={{ translateY: 40, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
      >
        {navElements.map((element, id) => (
          <a
            key={id}
            href={element.link}
            className={navElement === element.name ? "round active" : "round"}
            onClick={() => setNavElement(element.name)}
          >
            <div className="icon">{element.icon}</div>
          </a>
        ))}
      </motion.div>
    </nav>
  );
};

export default Navigation;
