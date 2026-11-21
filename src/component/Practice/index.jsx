import React, { useRef } from "react";
import { motion } from "framer-motion";
import SectionBadge from "../layouts/SectionBadge";
import SectionSwarm from "../layouts/SectionSwarm";

import PracticeGrid from "./ui/PracticeGrid";
import PracticeToolkit from "./ui/PracticeToolkit";
import useSkillsAnimation from "../Skills/hooks/useSkillsAnimation";

const Practice = () => {
  const sectionRef = useRef(null);
  const { scrollTriggerReached, scrollProgress } =
    useSkillsAnimation(sectionRef);

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
        <SectionBadge
          index="03"
          title="Practice"
          icon="fa-solid fa-shield-halved" place="center"
        />

        <SectionSwarm />

        <div className="mt-8 max-w-2xl">
          <h3 className="font-display text-[28px] font-bold leading-[1.15] tracking-tight text-dgray sm:text-[30px]">
            How I actually work
          </h3>
          <p className="mt-3 text-[15px] leading-relaxed text-gray-500">
            Writing features is the easy part. These are the practices that
            decide whether a release is safe — each rated against how I work
            today, with something concrete behind it.
          </p>
        </div>

        <div className="mt-9">
          <PracticeGrid />
        </div>
        <PracticeToolkit />
      </motion.div>
    </section>
  );
};

export default Practice;
