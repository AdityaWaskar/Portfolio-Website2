import React from "react";
import { BiLogoLinkedin } from "react-icons/bi";
import { SiLeetcode } from "react-icons/si";
import { FiGithub } from "react-icons/fi";
import { LiaHackerrank } from "react-icons/lia";
import "./footer.css";
import Wave from "react-wavify";

const Footer = () => {
  const data = {
    leetcode: "https://leetcode.com/adityawaskar03/",
    linkedin: "https://www.linkedin.com/in/aditya-waskar-56682b205/",
    hackerrank: "https://www.hackerrank.com/adityawaskar05",
    git: "https://github.com/AdityaWaskar",
  };

  const onClickEvent = (name) => {
    window.location.href = data[name];
  };
  return (
    <section>
      <Wave
        className="wave"
        fill="#5dcefd"
        paused={false}
        options={{
          height: 15,
          amplitude: 30,
          speed: 0.25,
          points: 4,
        }}
      />
      <footer>
        <div className="mainTitle">Aditya Waskar</div>
        <div className="routes">
          <a href="#intro">Home</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experiences">Experience</a>
          <a href="#contactUs">Contact Us</a>
        </div>
        <div className="socialMediaLogos">
          <div onClick={() => onClickEvent("linkedin")} className="box">
            <BiLogoLinkedin size={20} />
          </div>
          <div onClick={() => onClickEvent("git")} className="box">
            <FiGithub size={20} />
          </div>
          <div onClick={() => onClickEvent("leetcode")} className="box">
            <SiLeetcode size={20} />
          </div>
          <div onClick={() => onClickEvent("hackerrank")} className="box">
            <LiaHackerrank size={20} />
          </div>
        </div>
        <div onClick={() => onClickEvent("linkedin")} className="margin">
          <span>&copy; Aditya Waskar.</span> All Rights reserved.
        </div>
      </footer>
    </section>
  );
};

export default Footer;
