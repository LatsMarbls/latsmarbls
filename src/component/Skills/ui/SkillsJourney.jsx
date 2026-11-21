import React from "react";
import { motion } from "framer-motion";

const SkillsJourney = () => {
  const journeyVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 20,
      },
    },
  };

  return (
    <motion.div
      className="mt-8 mb-6"
      variants={journeyVariants}
      initial="hidden"
      animate="visible"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-dgray mb-4">
        My Skills Journey
      </h2>
      <p className="text-gray-600 text-md">
        A backend-first toolkit: Laravel and PHP day to day, with the testing,
        security and AI tooling that keep shipped work reviewable.
      </p>
    </motion.div>
  );
};

export default SkillsJourney;
