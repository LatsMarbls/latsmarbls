import React from "react";
import { motion } from "framer-motion";

const ExperienceItem = ({ experience, current }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 16 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
      }}
      className="grid grid-cols-1 gap-6 md:grid-cols-12"
    >
      <div className="md:col-span-4">
        <div className="rounded-[18px] border border-line bg-paper2 p-5">
          <div className="flex items-start gap-3">
            {experience.image ? (
              <img
                src={experience.image}
                alt=""
                className="h-11 w-11 rounded-xl object-cover"
              />
            ) : (
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-dgray font-display text-sm font-bold text-white">
                {experience.logoText}
              </div>
            )}
            <div className="min-w-0">
              <h4 className="font-display text-base font-bold leading-snug text-dgray">
                {experience.company}
              </h4>
              <p className="mt-0.5 text-sm text-gray-500">{experience.title}</p>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-2.5 py-1 font-mono text-2xs uppercase tracking-wide text-gray-500">
              <i className="fa-regular fa-calendar text-2xs" aria-hidden="true" />
              {experience.period}
            </span>
            {current && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-2.5 py-1 font-mono text-2xs uppercase tracking-wide text-gray-600">
                <span className="h-1.5 w-1.5 rounded-full bg-dgray" />
                Current
              </span>
            )}
          </div>

          {experience.summary && (
            <p className="mt-4 text-[13px] leading-relaxed text-gray-500">
              {experience.summary}
            </p>
          )}

          {experience.stack?.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-1.5">
              {experience.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-line bg-white px-2.5 py-1 text-2xs font-medium text-gray-600"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="md:col-span-8">
        <p className="mb-3 font-mono text-2xs uppercase tracking-[0.16em] text-gray-500">
          {current ? "What I do" : "What I did"}
        </p>
        <ul className="space-y-2.5">
          {experience.responsibilities.map((responsibility) => (
            <li
              key={responsibility}
              className="flex gap-3 text-[15px] leading-relaxed text-gray-600"
            >
              <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-dgray" />
              <span>{responsibility}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default ExperienceItem;
