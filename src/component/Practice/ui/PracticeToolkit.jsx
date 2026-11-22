import React from "react";
import { motion } from "framer-motion";
import { toolkitData, focusData } from "../data/practiceData";

const PracticeToolkit = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4 }}
      className="mt-6 w-full rounded-[18px] border border-line bg-paper2 p-5 sm:p-6"
    >
      <div className="flex flex-col gap-7 lg:flex-row lg:items-start lg:gap-8">
        <div className="lg:w-2/3">
          <p className="mb-4 font-mono text-2xs uppercase tracking-[0.18em] text-gray-500">
            How I work
          </p>
          <div className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
            {toolkitData.map((tool) => (
              <div key={tool.name} className="flex items-start gap-3">
                <i
                  className={`${tool.icon} mt-0.5 text-sm text-dgray`}
                  aria-hidden="true"
                />
                <div>
                  <p className="text-sm font-semibold text-dgray">
                    {tool.name}
                  </p>
                  <p className="mt-0.5 text-xs leading-relaxed text-gray-500">
                    {tool.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:w-1/3 lg:border-l lg:border-line lg:pl-8">
          <p className="mb-4 font-mono text-2xs uppercase tracking-[0.18em] text-gray-500">
            Going deeper into
          </p>
          <div className="flex flex-wrap gap-2">
            {focusData.map((focus) => (
              <span
                key={focus}
                className="rounded-full border border-line bg-white px-3 py-1.5 text-xs text-gray-600 transition-colors duration-200 hover:border-dgray hover:text-dgray"
              >
                {focus}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PracticeToolkit;
