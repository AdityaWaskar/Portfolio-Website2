import logo from "./logo.svg";
import "./App.css";
import { Intro, Navigation, Skills } from "./components";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

function App() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
    console.log(isInView);
  }, [isInView]);
  return (
    <motion.section
      variants={{
        hidden: { opacity: 1 },
        visible: { opacity: 1 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, delay: 0.25 }}
      ref={ref}
    >
      <Navigation />
      <Intro />
      <Skills />
    </motion.section>
  );
}

export default App;
