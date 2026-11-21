import React, { useRef } from "react";
import { motion } from "framer-motion";
import ExperienceList from "./ui/ExperienceList";
import SectionBadge from "../layouts/SectionBadge";
import SectionSwarm from "../layouts/SectionSwarm";

import useSkillsAnimation from "../Skills/hooks/useSkillsAnimation";

const Experience = () => {
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
          index="04"
          title="Experience"
          icon="fa-solid fa-briefcase" place="right"
        />

        <SectionSwarm />
        <ExperienceList />
      </motion.div>
    </section>
  );
};

export default Experience;
