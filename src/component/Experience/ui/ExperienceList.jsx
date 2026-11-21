import React from "react";
import { motion } from "framer-motion";
import { experienceData } from "../data/experienceData";
import ExperienceItem from "./ExperienceItem";

const ExperienceList = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.15, delayChildren: 0.1 },
        },
      }}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 12 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
        }}
        className="max-w-2xl"
      >
        <h3 className="font-display text-[28px] font-bold leading-[1.15] tracking-tight text-dgray sm:text-[30px]">
          Where I&apos;ve worked
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-gray-500">
          Close to a year of production backend work, shipping secure and tested
          features for enterprise clients.
        </p>
      </motion.div>

      <div className="mt-9 space-y-8">
        {experienceData.map((experience, index) => (
          <ExperienceItem
            key={experience.company}
            experience={experience}
            current={index === 0}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default ExperienceList;
