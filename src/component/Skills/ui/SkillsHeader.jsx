import React from "react";

const SkillsHeader = () => {
  return (
    <div className="flex items-center gap-2.5 px-1 pb-6">
      <i className="fa-solid fa-code text-dgray text-sm" aria-hidden="true" />
      <span className="font-mono text-2xs uppercase tracking-[0.2em] text-gray-400">
        02
      </span>
      <h2 className="font-display text-xs font-semibold uppercase tracking-[0.14em] text-gray-500">
        Skills
      </h2>
    </div>
  );
};

export default SkillsHeader;
