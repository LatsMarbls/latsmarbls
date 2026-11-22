import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const swarm = [
  { stiffness: 260, damping: 26, size: 4, opacity: 0.9, radius: 0 },
  { stiffness: 210, damping: 24, size: 3, opacity: 0.75, radius: 11 },
  { stiffness: 180, damping: 22, size: 2.5, opacity: 0.65, radius: 17 },
  { stiffness: 155, damping: 21, size: 2, opacity: 0.55, radius: 23 },
  { stiffness: 135, damping: 20, size: 1.75, opacity: 0.45, radius: 29 },
  { stiffness: 118, damping: 19, size: 1.5, opacity: 0.38, radius: 35 },
  { stiffness: 205, damping: 25, size: 2.5, opacity: 0.6, radius: 14 },
  { stiffness: 165, damping: 21, size: 2, opacity: 0.5, radius: 20 },
  { stiffness: 145, damping: 20, size: 1.75, opacity: 0.42, radius: 26 },
  { stiffness: 125, damping: 19, size: 1.5, opacity: 0.35, radius: 32 },
];

const Particle = ({ x, y, config, index, burst }) => {
  const springX = useSpring(x, {
    stiffness: config.stiffness,
    damping: config.damping,
    mass: 0.4,
  });
  const springY = useSpring(y, {
    stiffness: config.stiffness,
    damping: config.damping,
    mass: 0.4,
  });

  const angle = (index / swarm.length) * Math.PI * 2 + index * 0.7;
  const offsetX = Math.cos(angle) * config.radius;
  const offsetY = Math.sin(angle) * config.radius;
  const spread = burst ? 2.6 : 1;

  return (
    <motion.div
      aria-hidden="true"
      style={{ x: springX, y: springY }}
      className="absolute left-0 top-0"
    >
      <motion.span
        animate={{
          x: offsetX * spread,
          y: offsetY * spread,
          scale: burst ? 1.7 : 1,
        }}
        transition={{ duration: burst ? 0.18 : 0.45, ease: "easeOut" }}
        className="block rounded-full bg-white mix-blend-difference"
        style={{
          width: config.size,
          height: config.size,
          opacity: config.opacity,
          marginLeft: -config.size / 2,
          marginTop: -config.size / 2,
        }}
      />
    </motion.div>
  );
};

const Cursor = () => {
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);

  const [label, setLabel] = useState("");
  const [hot, setHot] = useState(false);
  const [burst, setBurst] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine =
      window.matchMedia("(pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!fine) return;
    setEnabled(true);

    const move = (event) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };

    const over = (event) => {
      const tagged = event.target.closest("[data-cursor]");
      const interactive = event.target.closest(
        "a, button, [role='button'], input, textarea"
      );

      if (tagged) {
        setLabel(tagged.getAttribute("data-cursor") || "");
        setHot(true);
        return;
      }

      setLabel("");
      setHot(Boolean(interactive));
    };

    const down = () => {
      setBurst(true);
      setHot(true);
    };

    const up = () => {
      setBurst(false);
      setHot(false);
    };

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerover", over, { passive: true });
    window.addEventListener("pointerdown", down);
    window.addEventListener("pointerup", up);

    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", over);
      window.removeEventListener("pointerdown", down);
      window.removeEventListener("pointerup", up);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[95] hidden lg:block">
      {swarm.map((config, index) => (
        <Particle
          key={index}
          x={x}
          y={y}
          config={config}
          index={index}
          burst={burst}
        />
      ))}

      <motion.div
        aria-hidden="true"
        style={{ x, y }}
        className="absolute left-0 top-0"
      >
        <motion.span
          animate={{ scale: hot ? 2.2 : 1, opacity: hot ? 0.9 : 0.6 }}
          transition={{ duration: 0.2 }}
          className="block h-1.5 w-1.5 rounded-full bg-white mix-blend-difference"
          style={{ marginLeft: -3, marginTop: -3 }}
        />
      </motion.div>

      <motion.div
        aria-hidden="true"
        style={{ x, y }}
        className="absolute left-0 top-0"
      >
        <motion.div
          animate={{ opacity: label ? 1 : 0, y: label ? 0 : 4 }}
          transition={{ duration: 0.15 }}
          className="absolute left-4 top-3 whitespace-nowrap border border-ink/20 bg-paper/90 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.16em] text-ink/70 backdrop-blur-sm"
        >
          {label}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Cursor;
