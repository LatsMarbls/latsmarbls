import React, { useRef } from "react";
import { motion } from "framer-motion";
import ProjectGrid from "./ui/ProjectGrid";
import SectionBadge from "../layouts/SectionBadge";
import SectionSwarm from "../layouts/SectionSwarm";

import useProjectAnimation from "./hooks/useProjectAnimation";

const Project = () => {
  const sectionRef = useRef(null);
  const { scrollTriggerReached, scrollProgress } =
    useProjectAnimation(sectionRef);

  return (
    <section ref={sectionRef}>
      <motion.div
        className="relative w-full border-t border-line pb-16 pt-10 sm:pt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={scrollTriggerReached ? { opacity: 1, y: 0 } : {}}
        style={
          scrollTriggerReached
            ? undefined
            : { opacity: scrollProgress, transform: `translateY(${12 * (1 - scrollProgress)}px)` }
        }
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <SectionBadge index="06" title="Projects" icon="fa-solid fa-folder" place="center" />

        <SectionSwarm />

        <div className="mt-8 max-w-2xl">
          <h3 className="font-display text-[28px] font-bold leading-[1.15] tracking-tight text-dgray sm:text-[30px]">
            Things I&apos;ve built
          </h3>
          <p className="mt-3 text-[15px] leading-relaxed text-gray-500">
            Side projects and coursework that shaped how I build — auth systems,
            AI-backed apps, and Laravel platforms with real data models behind
            them.
          </p>
        </div>

        <div className="mt-9">
          <ProjectGrid />
        </div>
      </motion.div>
    </section>
  );
};

export default Project;
