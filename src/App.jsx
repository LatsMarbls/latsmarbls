import React, { useState } from "react";
import { HashRouter } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import Home from "./component/Home";
import Skills from "./component/Skills";
import About from "./component/About";
import Project from "./component/Project";
import Experience from "./component/Experience";
import School from "./component/School";
import Footer from "./component/Footer";
import StickyNavbar from "./component/StickyNavbar";
import Practice from "./component/Practice";
import Intro from "./component/Intro";

import Cursor from "./component/layouts/Cursor";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 26,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-50 h-[2px] origin-left bg-white mix-blend-difference"
    />
  );
};

const MainContent = () => (
  <div className="canvas-grid relative grain overflow-hidden bg-paper px-4 pt-5 sm:px-8 lg:px-12 2xl:px-16 2xl:pt-8">
    <ScrollProgress />

    <Cursor />
    <div id="home">
      <Home />
    </div>
    <StickyNavbar />
    <div id="skills" className="pt-8">
      <Skills />
    </div>
    <div id="practice" className="pt-8">
      <Practice />
    </div>
    <div id="experience" className="pt-8">
      <Experience />
    </div>
    <div id="education" className="pt-8">
      <School />
    </div>
    <div id="projects" className="pt-8">
      <Project />
    </div>
    <div id="contact" className="pt-8">
      <About />
    </div>
    <Footer />
  </div>
);

const App = () => {
  const forceIntro =
    typeof window !== "undefined" &&
    new URLSearchParams(window.location.search).has("intro");

  const [introDone, setIntroDone] = useState(
    () =>
      !forceIntro &&
      typeof window !== "undefined" &&
      window.sessionStorage.getItem("lm-build-intro") === "1"
  );
  const [started, setStarted] = useState(introDone);

  return (
    <HashRouter>
      {started && <MainContent />}
      {!introDone && (
        <Intro
          onReveal={() => setStarted(true)}
          onDone={() => setIntroDone(true)}
        />
      )}
    </HashRouter>
  );
};

export default App;
