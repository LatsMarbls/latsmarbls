import React from "react";
import { motion } from "framer-motion";

const corners = [
  { className: "left-0 top-0 border-l border-t", x: -7, y: -7 },
  { className: "right-0 top-0 border-r border-t", x: 7, y: -7 },
  { className: "left-0 bottom-0 border-l border-b", x: -7, y: 7 },
  { className: "right-0 bottom-0 border-r border-b", x: 7, y: 7 },
];

const SectionChrome = ({ index, label }) => (
  <div aria-hidden="true" className="pointer-events-none absolute inset-3 z-0">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.05, delayChildren: 0.1 },
        },
      }}
      className="absolute inset-0"
    >
      {corners.map((corner) => (
        <motion.span
          key={corner.className}
          variants={{
            hidden: { opacity: 0, x: corner.x, y: corner.y },
            visible: { opacity: 1, x: 0, y: 0 },
          }}
          transition={{ duration: 0.28, ease: "easeOut" }}
          className={`absolute h-4 w-4 border-dgray/25 ${corner.className}`}
        />
      ))}
    </motion.div>

    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: [0, 1, 1, 0] }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 2.2, times: [0, 0.12, 0.6, 1], delay: 0.2 }}
      className="absolute bottom-0 left-1 font-mono text-[9px] uppercase tracking-[0.22em] text-dgray/30"
    >
      render {index}
      {label ? ` · ${label}` : ""}
    </motion.span>

    <motion.span
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: [0, 1, 1], opacity: [1, 1, 0] }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 1.9, times: [0, 0.25, 1], delay: 0.1 }}
      className="absolute left-0 top-0 h-px w-full origin-left bg-dgray/15"
    />
  </div>
);

export default SectionChrome;
