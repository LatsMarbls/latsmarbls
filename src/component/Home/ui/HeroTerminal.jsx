import React from "react";
import { motion } from "framer-motion";

const lines = [
  {
    prompt: "$",
    command: "whoami",
    output: "backend developer — PRAXXYS Solutions",
  },
  {
    prompt: "$",
    command: "cat focus.txt",
    output: ["application security", "system administration", "ai guardrails"],
  },
  {
    prompt: "$",
    command: "php artisan about",
    output: "laravel · mysql · pest · gitlab",
  },
  {
    prompt: "$",
    command: "status",
    output: "open to security & platform work",
    live: true,
  },
];

const HeroTerminal = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.7 }}
      className="relative hidden w-full max-w-[520px] md:block"
    >
      <div className="overflow-hidden rounded-[18px] border border-white/10 bg-[#161616] shadow-lift">
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/60" />
          <span className="ml-2 font-mono text-2xs tracking-[0.14em] text-white/55">
            latrell@praxxys — zsh
          </span>
        </div>

        <div className="space-y-4 px-4 py-5 font-mono text-[12.5px] leading-relaxed sm:px-5">
          {lines.map((line) => (
            <div key={line.command}>
              <p>
                <span className="text-white/70">{line.prompt}</span>{" "}
                <span className="text-white/85">{line.command}</span>
              </p>
              {Array.isArray(line.output) ? (
                <ul className="mt-1 space-y-0.5 pl-3">
                  {line.output.map((entry) => (
                    <li key={entry} className="text-white/60">
                      — {entry}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-1 flex items-center gap-2 pl-3 text-white/60">
                  {line.live && (
                    <span className="h-1.5 w-1.5 animate-pulseDot rounded-full bg-white" />
                  )}
                  {line.output}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-white/[0.06] blur-3xl" />
    </motion.div>
  );
};

export default HeroTerminal;
