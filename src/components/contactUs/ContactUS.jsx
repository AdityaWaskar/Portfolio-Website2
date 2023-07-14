import React, { useEffect, useState, useRef } from "react";
import "./contactUs.css";
import { motion, useAnimation, useInView } from "framer-motion";
import AnimatedTextCharacter from "../AnimatedTextCharacter";
import Lottie from "react-lottie";
import emailjs from "@emailjs/browser";
import contactUsLeftImg from "../assets/Lotties/animation_ljzeni6i.json";
// import {
//   REACT_APP_EMAIL_ID,
//   REACT_APP_EMAIL_TEMPLATE_ID,
//   REACT_APP_EMAIL_PUBLIC_ID,
// } from "../../config.js";
import toast, { Toaster } from "react-hot-toast";

const ContactUS = () => {
  const ref = useRef(null);
  const formRef = useRef();
  const isInView = useInView(ref, { once: true });
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

  const onhandleEvent = async (event) => {
    event.preventDefault();
    console.log(
      process.env.REACT_APP_EMAIL_ID,
      process.env.REACT_APP_EMAIL_TEMPLATE_ID,
      formRef.current,
      process.env.REACT_APP_EMAIL_PUBLIC_ID
    );
    await emailjs
      .sendForm(
        "service_cwmbm0l",
        "template_ga6qpot",
        formRef.current,
        "HgwNiGlzOqeL_of5r"
      )
      .then(
        (result) => {
          toast.success("Mail Send Successfully.");
          clearInputs();
        },
        (error) => {
          toast.error("Some error occuring while sending Mail!");
        }
      );
  };
  useEffect(() => {
    if (isInView) {
      mainControls.start({ translateY: 0, opacity: 1 });
    } else {
      mainControls.start({ translateY: 40, opacity: 0 });
    }
  }, [isInView]);

  return (
    <motion.section className="contactUSContainer" id="contactUs">
      <Toaster position="top-center" reverseOrder={false} />
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
            <form ref={formRef} onSubmit={onhandleEvent} className="form">
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
                    name="user_email"
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
                    name="msg"
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
                <button className="inputBox">Send</button>
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default ContactUS;
