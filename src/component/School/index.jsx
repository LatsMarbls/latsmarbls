import React, { useRef } from "react";
import { motion } from "framer-motion";
import EducationList from "./ui/EducationList";
import SectionBadge from "../layouts/SectionBadge";
import SectionSwarm from "../layouts/SectionSwarm";

import useSkillsAnimation from "../Skills/hooks/useSkillsAnimation";

const School = () => {
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
          index="05"
          title="Education"
          icon="fa-solid fa-graduation-cap" place="left"
        />

        <SectionSwarm />

        <div className="mt-8 max-w-2xl">
          <h3 className="font-display text-[28px] font-bold leading-[1.15] tracking-tight text-dgray sm:text-[30px]">
            Academic background
          </h3>
          <p className="mt-3 text-[15px] leading-relaxed text-gray-500">
            Computer Science graduate, Cum Laude — the theory behind the
            practice, plus the fundamentals I still lean on.
          </p>
        </div>

        <div className="mt-9">
          <EducationList />
        </div>
      </motion.div>
    </section>
  );
};

export default School;
