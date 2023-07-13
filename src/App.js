import logo from "./logo.svg";
import "./App.css";
import {
  Experience,
  Intro,
  Navigation,
  Projects,
  Skills,
  ContactUS,
  Footer,
} from "./components";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

function App() {
  const mainControls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      let sections = document.querySelectorAll("section");
      let navLinks = document.querySelectorAll("nav div div a");
      let currentSectionId = null;

      sections.forEach((sec) => {
        const rect = sec.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          currentSectionId = sec.getAttribute("id");
        }
      });

      navLinks.forEach((link) => {
        const linkId = link.getAttribute("href").slice(1);
        if (linkId === currentSectionId) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.section
      variants={{
        hidden: { opacity: 1 },
        visible: { opacity: 1 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.5, delay: 0.25 }}
    >
      <Navigation />
      <Intro />
      <Skills />
      <Projects />
      <Experience />
      <ContactUS />
      <Footer />
    </motion.section>
  );
}

export default App;
