import React, { useEffect, useRef } from "react";
import "./laptopScreen.css";
import { motion, useAnimation, useInView } from "framer-motion";
import { AiFillEye } from "react-icons/ai";
import { TbBrandGithubFilled } from "react-icons/tb";

const LaptopScreen = (props) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const animation = useAnimation();

  useEffect(() => {
    // console.log(props.select);
    if (isInView) {
      animation.start({ scale: 1 });
    } else {
      animation.start({ scale: 0 });
    }
    // console.log(isInView);
  }, [isInView]);
  return (
    <div ref={ref} className="leftSideContainer">
      <motion.div
        // initial={{ scale: 0.8 }}
        animate={animation}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="screen"
      >
        <img src={props.select.img} />
        <div className="blurEffect"></div>
        <div className="buttons">
          <div className="logos">
            <AiFillEye size={40} />
          </div>
          <div className="logos">
            <TbBrandGithubFilled size={40} />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LaptopScreen;
