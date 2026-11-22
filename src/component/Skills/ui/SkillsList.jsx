import React from "react";
import { motion } from "framer-motion";
import TechItem from "./TechItem";
import { skillsData } from "../data/skillsData";

const order = [
  "Backend",
  "Database",
  "Testing",
  "Security",
  "AI Tooling",
  "DevOps",
  "Tools",
  "Frontend",
];

const SkillsList = () => {
  const groups = order
    .map((category) => ({
      category,
      items: skillsData.filter((skill) => skill.category === category),
    }))
    .filter((group) => group.items.length > 0);

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 },
    },
  };

  return (
    <motion.div
      variants={listVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className="mt-9 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3"
    >
      {groups.map((group) => (
        <motion.div
          key={group.category}
          variants={{
            hidden: { opacity: 0, y: 14 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
          }}
        >
          <div className="flex items-baseline justify-between border-b border-line pb-2">
            <p className="font-mono text-2xs uppercase tracking-[0.16em] text-gray-500">
              {group.category}
            </p>
            <span className="font-mono text-2xs text-gray-500">
              {String(group.items.length).padStart(2, "0")}
            </span>
          </div>
          <ul className="mt-2">
            {group.items.map((skill) => (
              <TechItem key={skill.name} skill={skill} />
            ))}
          </ul>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default SkillsList;
