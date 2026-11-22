import { useCallback, useState } from "react";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Nav from "./sections/Nav";
import Practice from "./sections/Practice";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Intro from "./ui/Intro";
import SwarmRebuild from "./ui/SwarmRebuild";

const STORAGE_KEY = "lm-build-intro";
const SWARM_KEY = "lm-swarm-ran";

function Page() {
  return (
    <div className="min-h-screen bg-night">
      <a
        href="#skills"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:border focus:border-line focus:bg-panel focus:px-3 focus:py-2 focus:font-mono focus:text-xs focus:text-fg"
      >
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <Skills />
        <Practice />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  const params =
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search)
      : new URLSearchParams();

  const forceIntro = params.has("intro");
  const forceBuild = params.has("build");

  if (forceIntro) {
    window.sessionStorage.removeItem(STORAGE_KEY);
    window.sessionStorage.removeItem(SWARM_KEY);
  }

  const introDoneInitial =
    forceBuild ||
    (!forceIntro && window.sessionStorage.getItem(STORAGE_KEY) === "1");
  const [introDone, setIntroDone] = useState(() => introDoneInitial);
  const [started, setStarted] = useState(() => forceBuild || introDoneInitial);
  const [build, setBuild] = useState(forceBuild);
  const [swarmReady, setSwarmReady] = useState(false);

  const handleReveal = useCallback(() => {
    setStarted(true);
    setBuild(true);
  }, []);
  const handleIntroDone = useCallback(() => setIntroDone(true), []);
  const handleBuildDone = useCallback(() => setBuild(false), []);
  const handleSwarmReady = useCallback(() => setSwarmReady(true), []);

  return (
    <>
      {started && <Page />}
      {build && (
        <SwarmRebuild onDone={handleBuildDone} onReady={handleSwarmReady} />
      )}
      {!introDone && (
        <Intro
          hold={!swarmReady}
          onReveal={handleReveal}
          onDone={handleIntroDone}
        />
      )}
    </>
  );
}
