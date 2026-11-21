import React from "react";
import { motion } from "framer-motion";

const EducationItem = ({ education }) => {
  const achievement = education.achievement || education.whatILearned;

  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 16 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
      }}
      className="flex flex-col gap-5 rounded-[18px] border border-line p-5 sm:flex-row sm:items-start sm:gap-6 sm:p-6"
    >
      <img
        src={education.image}
        alt=""
        className="h-12 w-12 shrink-0 rounded-xl object-cover"
      />

      <div className="flex-1">
        <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
          <div>
            <h4 className="font-display text-base font-bold leading-snug text-dgray">
              {education.institution}
            </h4>
            <p className="mt-0.5 text-[14px] text-gray-500">{education.degree}</p>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-line px-2.5 py-1 font-mono text-2xs uppercase tracking-wide text-gray-500">
            <i className="fa-regular fa-calendar text-2xs" aria-hidden="true" />
            {education.period}
          </span>
        </div>

        {achievement && (
          <p className="mt-4 inline-flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-700">
            <i className="fa-solid fa-award" aria-hidden="true" />
            {achievement.replace(/^-\s*/, "")}
          </p>
        )}

        {education.courses && (
          <div className="mt-4">
            <p className="font-mono text-2xs uppercase tracking-[0.16em] text-gray-500">
              Key courses
            </p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {education.courses.map((course) => (
                <span
                  key={course}
                  className="rounded-full border border-line bg-paper2 px-2.5 py-1 text-xs text-gray-600"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.article>
  );
};

export default EducationItem;
