import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";

const COMMAND = "build portfolio --for latrell";

const rows = [
  { label: "content", value: "7 sections · 18 skills" },
  { label: "type", value: "30 / 16 / 15 / 11" },
  { label: "layout", value: "28px cards · single column" },
  { label: "motion", value: "stagger 60ms · reduced-motion safe" },
  { label: "audit", value: "1 h1 · contrast pass" },
];

const STORAGE_KEY = "lm-build-intro";

const Intro = ({ onReveal, onDone }) => {
  const [typed, setTyped] = useState("");
  const [shown, setShown] = useState(0);
  const [progress, setProgress] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const timers = useRef([]);
  const finished = useRef(false);

  const speed = useMemo(() => {
    const value = Number(
      new URLSearchParams(window.location.search).get("slow")
    );
    return Number.isFinite(value) && value > 0 ? value : 1;
  }, []);

  const reduced = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    []
  );

  const clearTimers = () => {
    timers.current.forEach((id) => clearTimeout(id));
    timers.current = [];
  };

  const finish = () => {
    if (finished.current) return;
    finished.current = true;
    clearTimers();
    setTyped(COMMAND);
    setShown(rows.length);
    setProgress(100);
    setLeaving(true);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.sessionStorage.setItem(STORAGE_KEY, "1");
    }

    if (reduced) {
      onReveal();
      onDone();
      return;
    }

    const queue = (fn, delay) => {
      timers.current.push(setTimeout(fn, delay));
    };

    let t = 360;

    COMMAND.split("").forEach((_, index) => {
      queue(() => setTyped(COMMAND.slice(0, index + 1)), t);
      t += 20 * speed;
    });

    t += 160 * speed;

    rows.forEach((_, index) => {
      queue(() => setShown(index + 1), t);
      t += 150 * speed;
    });

    t += 100 * speed;

    const steps = 18;
    for (let i = 1; i <= steps; i += 1) {
      queue(() => setProgress(Math.round((i / steps) * 100)), t + i * 24 * speed);
    }

    t += steps * 24 * speed + 240 * speed;
    queue(() => setLeaving(true), t);

    const onKey = (event) => {
      if (event.key === "Escape" || event.key === "Enter") finish();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      clearTimers();
      window.removeEventListener("keydown", onKey);
    };
  }, [reduced, onDone, onReveal, speed]);

  useEffect(() => {
    if (!leaving) return;
    onReveal();
    const id = setTimeout(() => onDone(), 700);
    return () => clearTimeout(id);
  }, [leaving, onReveal, onDone]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-paper px-5"
      initial={{ clipPath: "inset(0 0 0% 0)" }}
      animate={leaving ? { clipPath: "inset(0 0 100% 0)" } : {}}
      transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
      onClick={finish}
      aria-hidden="true"
    >
      <div className="w-full max-w-[600px]">
        <div className="overflow-hidden rounded-lg border border-line bg-white shadow-[0_24px_80px_-24px_rgba(0,0,0,0.9)]">
          <div className="flex items-center gap-2 border-b border-line px-4 py-2.5">
            <span className="h-2 w-2 rounded-full bg-ink/25" />
            <span className="h-2 w-2 rounded-full bg-ink/25" />
            <span className="h-2 w-2 rounded-full bg-ink/25" />
            <span className="ml-2 font-mono text-[10px] tracking-[0.16em] text-ink/45">
              build — latrell
            </span>
            <span className="ml-auto font-mono text-[10px] tracking-[0.12em] text-ink/35">
              ESC
            </span>
          </div>

          <div className="px-5 py-5 font-mono text-[12.5px] leading-[1.85] sm:px-6">
            <p className="text-ink">
              <span className="text-ink/40">❯ </span>
              {typed}
              {typed.length < COMMAND.length && (
                <span className="ml-0.5 inline-block h-[13px] w-[7px] translate-y-[2px] animate-caret bg-ink/80" />
              )}
            </p>

            <div className="mt-4 min-h-[122px] space-y-1.5">
              {rows.slice(0, shown).map((row) => (
                <motion.div
                  key={row.label}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.16 }}
                  className="flex items-baseline gap-3"
                >
                  <span className="w-[62px] shrink-0 text-ink/35">
                    {row.label}
                  </span>
                  <span className="text-ink/70">{row.value}</span>
                  <span className="ml-auto text-ink/85">✓</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-4 flex items-center gap-3">
              <div className="h-px flex-1 bg-ink/10">
                <div
                  className="h-px bg-ink/60 transition-[width] duration-100 ease-linear"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span className="w-9 text-right text-[11px] text-ink/45">
                {progress}%
              </span>
            </div>
          </div>
        </div>

        <p className="mt-4 text-center font-mono text-[10px] tracking-[0.2em] text-ink/35">
          {progress < 100 ? "rendering" : "built · 2.6s"}
        </p>
      </div>
    </motion.div>
  );
};

export default Intro;
