import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  const hasLive = project.liveLink && project.liveLink !== "#";

  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 16 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
      }}
      className="group flex flex-col overflow-hidden rounded-[18px] border border-line bg-white transition-all duration-300 hover:border-line hover:shadow-lift"
      data-cursor="view project"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
        <img
          src={project.image}
          alt={`${project.title} interface preview`}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h4 className="font-display text-base font-bold leading-snug text-dgray">
            {project.title}
          </h4>
          <div className="flex shrink-0 gap-1.5">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} source on GitHub`}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-line text-gray-500 transition-colors duration-200 hover:border-dgray hover:bg-dgray hover:text-white"
            >
              <i className="fa-brands fa-github text-xs" aria-hidden="true" />
            </a>
            {hasLive && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} live site`}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-line text-gray-500 transition-colors duration-200 hover:border-dgray hover:bg-dgray hover:text-white"
              >
                <i className="fa-solid fa-arrow-up-right-from-square text-[10px]" aria-hidden="true" />
              </a>
            )}
          </div>
        </div>

        <p className="mt-2 text-[14px] leading-relaxed text-gray-500">
          {project.description}
        </p>

        <div className="mt-auto flex flex-wrap gap-1.5 pt-4">
          {project.technologies.map((tech) => (
            <span
              key={tech.name}
              className="inline-flex items-center gap-1.5 rounded-full bg-paper2 px-2.5 py-1 text-2xs font-medium text-gray-600"
            >
              <i className={tech.icon} aria-hidden="true" />
              {tech.name}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
