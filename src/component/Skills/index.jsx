import React, { useRef } from "react";
import { motion } from "framer-motion";
import SkillsList from "./ui/SkillsList";
import SectionBadge from "../layouts/SectionBadge";
import SectionSwarm from "../layouts/SectionSwarm";

import useSkillsAnimation from "./hooks/useSkillsAnimation";

const Skills = () => {
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
        <SectionBadge index="02" title="Skills" icon="fa-solid fa-code" place="center" />

        <SectionSwarm />

        <div className="mt-8 max-w-2xl">
          <h3 className="font-display text-[28px] font-bold leading-[1.15] tracking-tight text-dgray sm:text-[30px]">
            The stack I work in
          </h3>
          <p className="mt-3 text-[15px] leading-relaxed text-gray-500">
            Backend first — Laravel and PHP day to day, supported by the
            testing, security and AI tooling that keep shipped work reviewable.
          </p>
        </div>

        <SkillsList />
      </motion.div>
    </section>
  );
};

export default Skills;
