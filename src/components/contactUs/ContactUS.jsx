import React, { useEffect, useState, useRef } from "react";
import "./contactUs.css";
import { motion, useAnimation, useInView } from "framer-motion";
import AnimatedTextCharacter from "../AnimatedTextCharacter";
import Lottie from "react-lottie";
import contactUsLeftImg from "../assets/Lotties/animation_ljzeni6i.json";

const ContactUS = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControls = useAnimation();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");

  const clearInputs = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setFeedback("");
  };

  const onhandleEvent = () => {
    console.log(firstName, lastName, email, feedback);
    clearInputs();
  };
  useEffect(() => {
    if (isInView) {
      console.log("fuck you bitch ");
      mainControls.start({ translateY: 0, opacity: 1 });
    } else {
      console.log("you too");
      mainControls.start({ translateY: 40, opacity: 0 });
    }
  }, [isInView]);

  return (
    <motion.section className="contactUSContainer" id="contactUs">
      <motion.div
        className="subContainer"
        ref={ref}
        animate={mainControls}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="left">
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: contactUsLeftImg,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice",
              },
            }}
          />
        </div>
        <div className="right">
          <div className="top">
            <div
              // initial={{ x: 1000, width: "100%" }}

              className="subtitle text_center"
            >
              Get in Touch
            </div>
            <div className="title text_center">
              <AnimatedTextCharacter text={"Contact Us"} />
            </div>
          </div>
          <div className="bottom">
            <div className="form">
              <div className="row">
                <div className=" inputBox first_name">
                  <input
                    type="text"
                    name="first_name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                  <label>First Name</label>
                </div>
                <div className=" inputBox last_name">
                  <input
                    type="text"
                    name="last_name"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  <label>Last Name</label>
                </div>
              </div>
              <div className="row">
                <div className=" inputBox email">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label>Email</label>
                </div>
              </div>
              <div className="row">
                <div className=" inputBox feedback">
                  {/* <input type="text" name="feedback" id="feedback" required /> */}
                  <textarea
                    name="feedback"
                    id="feedback"
                    rows="10"
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    required
                  />
                  <label>your Message</label>
                </div>
              </div>
              <div className="row">
                <button onClick={onhandleEvent} className="inputBox">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default ContactUS;
