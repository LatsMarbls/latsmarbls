import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projectsData } from "../data/projectsData";

const ProjectGrid = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.08, delayChildren: 0.05 },
        },
      }}
      className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
    >
      {projectsData.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </motion.div>
  );
};

export default ProjectGrid;
