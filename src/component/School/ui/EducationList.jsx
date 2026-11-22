import React from "react";
import { motion } from "framer-motion";
import { educationData } from "../data/educationData";
import EducationItem from "./EducationItem";

const EducationList = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.12, delayChildren: 0.05 },
        },
      }}
      className="space-y-4"
    >
      {educationData.map((education) => (
        <EducationItem key={education.period} education={education} />
      ))}
    </motion.div>
  );
};

export default EducationList;
