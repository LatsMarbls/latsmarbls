import React, { useMemo } from "react";
import { motion } from "framer-motion";

const Cursor = ({ variants, className, delay = 0, style }) => (
  <motion.div
    variants={{
      hidden: variants.hidden,
      visible: {
        ...variants.visible,
        transition: { ...variants.visible.transition, delay },
      },
    }}
    className={`absolute ${className}`}
    style={style}
  >
    <svg width="12" height="16" viewBox="0 0 12 16" aria-hidden="true">
      <path
        d="M1 1 L1 13.4 L4.2 10.5 L6.3 15.1 L8.5 14.1 L6.4 9.6 L10.6 9.6 Z"
        fill="#111110"
        stroke="#F2F0EB"
        strokeWidth="1"
        strokeLinejoin="round"
      />
    </svg>
  </motion.div>
);

const SectionSwarm = () => {
  const reduced = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    []
  );

  const speed = useMemo(() => {
    const value = Number(
      new URLSearchParams(window.location.search).get("swarm")
    );
    return Number.isFinite(value) && value > 0 ? value : 1;
  }, []);

  if (reduced) return null;

  const total = 2.1 * speed;

  return (
    <motion.div
      aria-hidden="true"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: [0, 1, 1, 0],
          transition: {
            duration: total + 0.7,
            times: [0, 0.05, 0.86, 1],
            ease: "easeOut",
          },
        },
      }}
      className="pointer-events-none absolute inset-x-0 top-0 z-20 hidden h-[150px] sm:block"
    >
      <div className="relative h-full w-full">
        <motion.div
          variants={{
            hidden: { clipPath: "inset(0 100% 0 0)" },
            visible: {
              clipPath: "inset(0 0% 0 0)",
              transition: {
                duration: 0.62 * speed,
                delay: 0.5 * speed,
                ease: [0.22, 1, 0.36, 1],
              },
            },
          }}
          className="absolute left-0 top-[34px] h-[54px] w-[min(520px,58%)] border border-dashed border-ink/45 bg-ink/[0.025]"
        />

        <motion.span
          variants={{
            hidden: { opacity: 0, y: 4 },
            visible: {
              opacity: [0, 1, 1, 0],
              y: 0,
              transition: {
                duration: total,
                times: [0, 0.38, 0.78, 1],
                ease: "easeOut",
              },
            },
          }}
          className="absolute left-[min(520px,58%)] top-[92px] ml-2 bg-ink px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-[0.14em] text-paper"
        >
          520 × 54
        </motion.span>

        <div className="pointer-events-none absolute left-0 top-[28px] w-[min(520px,58%)]">
          <Cursor
            delay={0.15 * speed}
            className="top-0"
            variants={{
              hidden: { left: "0%" },
              visible: {
                left: "100%",
                transition: {
                  duration: total,
                  times: [0, 1],
                  ease: [0.22, 1, 0.36, 1],
                },
              },
            }}
          />
        </div>

        <Cursor
          delay={0.3 * speed}
          className="top-[88px]"
          style={{ left: "min(520px, 58%)", marginLeft: -84 }}
          variants={{
            hidden: { x: 40, y: 26, opacity: 0 },
            visible: {
              x: 0,
              y: 0,
              opacity: [0, 1, 1, 0],
              transition: {
                duration: total,
                times: [0, 0.25, 0.8, 1],
                ease: "easeOut",
              },
            },
          }}
        />

        <Cursor
          delay={0.45 * speed}
          className="top-[10px]"
          style={{ left: "min(520px, 58%)", marginLeft: -20 }}
          variants={{
            hidden: { x: 30, y: -12, opacity: 0 },
            visible: {
              x: 0,
              y: 0,
              opacity: [0, 1, 1, 0],
              transition: {
                duration: total,
                times: [0, 0.3, 0.82, 1],
                ease: "easeOut",
              },
            },
          }}
        />
      </div>
    </motion.div>
  );
};

export default SectionSwarm;
