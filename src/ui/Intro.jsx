import { useEffect, useMemo, useRef, useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const COMMAND = "build portfolio --for latrell";

const rows = [
  { label: "content", value: "6 sections · 18 skills" },
  { label: "type", value: "44 / 16 / 14 / 11" },
  { label: "layout", value: "12-column shell · 1240px" },
  { label: "motion", value: "stagger 60ms · reduced-motion safe" },
  { label: "audit", value: "1 h1 · contrast pass" },
];

const STORAGE_KEY = "lm-build-intro";

export default function Intro({ onReveal, onDone, hold = false }) {
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
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
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
    window.sessionStorage.setItem(STORAGE_KEY, "1");

    if (reduced) {
      setTyped(COMMAND);
      setShown(rows.length);
      setProgress(100);
      setLeaving(true);
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
  }, [leaving, onReveal]);

  useEffect(() => {
    if (!leaving || hold) return;
    const id = setTimeout(() => onDone(), 700);
    return () => clearTimeout(id);
  }, [leaving, hold, onDone]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-night px-5"
      initial={{ clipPath: "inset(0 0 0% 0)" }}
      animate={leaving && !hold ? { clipPath: "inset(0 0 100% 0)" } : {}}
      transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
      onClick={finish}
      aria-hidden="true"
      data-swarm-skip
    >
      <div className="w-full max-w-[600px]">
        <div className="overflow-hidden border border-line bg-panel">
          <div className="flex items-center gap-2 border-b border-line px-4 py-2.5">
            <span className="h-2 w-2 rounded-full bg-line" />
            <span className="h-2 w-2 rounded-full bg-line" />
            <span className="h-2 w-2 rounded-full bg-accent/70" />
            <span className="ml-2 font-mono text-[10px] tracking-[0.16em] text-faint">
              build — latrell
            </span>
            <span className="ml-auto font-mono text-[10px] tracking-[0.12em] text-faint">
              ESC
            </span>
          </div>

          <div className="px-5 py-5 font-mono text-[12.5px] leading-[1.85] sm:px-6">
            <p className="text-fg">
              <span className="text-accent">❯ </span>
              {typed}
              {typed.length < COMMAND.length && (
                <span className="ml-0.5 inline-block h-[13px] w-[7px] translate-y-[2px] animate-pulse bg-accent" />
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
                  <span className="w-[62px] shrink-0 text-faint">
                    {row.label}
                  </span>
                  <span className="text-dim">{row.value}</span>
                  <span className="ml-auto text-accent">✓</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-4 flex items-center gap-3">
              <div className="h-px flex-1 bg-line">
                <div
                  className="h-px bg-accent transition-[width] duration-100 ease-linear"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span className="w-9 text-right text-[11px] text-faint">
                {progress}%
              </span>
            </div>
          </div>
        </div>

        <p className="mt-4 text-center font-mono text-[10px] tracking-[0.2em] text-faint">
          {progress < 100 ? "rendering" : "built · 2.6s"}
        </p>
      </div>
    </motion.div>
  );
}

Intro.propTypes = {
  onReveal: PropTypes.func.isRequired,
  onDone: PropTypes.func.isRequired,
  hold: PropTypes.bool,
};
