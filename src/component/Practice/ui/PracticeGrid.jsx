import React from "react";
import { motion } from "framer-motion";
import { practiceData } from "../data/practiceData";

const LevelMeter = ({ level }) => (
  <div className="flex items-center gap-1" aria-hidden="true">
    {[1, 2, 3, 4].map((step) => (
      <span
        key={step}
        className={`h-1 w-6 rounded-full ${
          step <= level ? "bg-dgray" : "bg-gray-200"
        }`}
      />
    ))}
  </div>
);

const PracticeCard = ({ item }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 16 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
      }}
      className="flex flex-col rounded-[18px] border border-line bg-paper2 p-5 transition-colors duration-200 hover:border-line hover:bg-white sm:p-6"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <i
            className={`${item.icon} text-base text-dgray`}
            aria-hidden="true"
          />
          <h4 className="font-display text-[15px] font-semibold text-dgray sm:text-base">
            {item.title}
          </h4>
        </div>
        <span className="font-mono text-2xs uppercase tracking-[0.14em] text-gray-500">
          {item.label}
        </span>
      </div>

      <p className="mt-3 text-[15px] leading-relaxed text-gray-500">
        {item.description}
      </p>

      <p className="mt-3 border-l border-line pl-3 text-[13px] leading-relaxed text-gray-500">
        {item.evidence}
      </p>

      <div className="mt-5 flex items-center gap-3">
        <LevelMeter level={item.level} />
        <span className="font-mono text-2xs text-gray-500">{item.level}/4</span>
      </div>
    </motion.div>
  );
};

const PracticeGrid = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.06, delayChildren: 0.05 },
        },
      }}
      className="grid grid-cols-1 gap-4 md:grid-cols-2"
    >
      {practiceData.map((item) => (
        <PracticeCard key={item.title} item={item} />
      ))}
    </motion.div>
  );
};

export default PracticeGrid;
