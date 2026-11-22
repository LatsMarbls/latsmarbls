import React from "react";
import { motion } from "framer-motion";

const SectionBadge = ({ index, title, icon, meta }) => (
  <div className="relative flex items-baseline gap-3 pb-3">
    <span className="font-mono text-[11px] tracking-[0.16em] text-ink/40">
      {index}
    </span>
    {icon && (
      <i className={`${icon} text-[11px] text-ink/40`} aria-hidden="true" />
    )}
    <h2 className="font-display text-[12px] font-semibold uppercase tracking-[0.16em] text-ink">
      {title}
    </h2>
    {meta && (
      <span className="ml-auto font-mono text-[10px] uppercase tracking-[0.18em] text-ink/35">
        {meta}
      </span>
    )}
    <motion.span
      aria-hidden="true"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="absolute inset-x-0 bottom-0 h-px origin-left bg-line"
    />
  </div>
);

export default SectionBadge;
