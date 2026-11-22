import React from "react";
import { motion } from "framer-motion";

const TechItem = ({ skill }) => {
  return (
    <motion.li
      variants={{
        hidden: { opacity: 0, x: -8 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
      }}
      className="group flex items-center gap-3 rounded-lg px-2 py-2 transition-colors duration-200 hover:bg-paper2"
    >
      <i
        className={`${skill.icon} w-5 text-center text-lg text-gray-400 transition-colors duration-200 group-hover:text-dgray`}
        aria-hidden="true"
      />
      <span className="text-[15px] text-gray-600 transition-colors duration-200 group-hover:text-dgray">
        {skill.name}
      </span>
    </motion.li>
  );
};

export default TechItem;
