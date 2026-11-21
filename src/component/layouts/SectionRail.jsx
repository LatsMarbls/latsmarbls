import React, { useEffect, useState } from "react";
import scrollToSection from "../StickyNavbar/hooks/ScrollHelper";

const items = [
  { id: "home", n: "01" },
  { id: "skills", n: "02" },
  { id: "practice", n: "03" },
  { id: "experience", n: "04" },
  { id: "education", n: "05" },
  { id: "projects", n: "06" },
  { id: "contact", n: "07" },
];

const SectionRail = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Section index"
      className="fixed left-4 top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-3 xl:flex"
    >
      {items.map((item) => {
        const isActive = active === item.id;
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => scrollToSection(item.id)}
            aria-label={item.id}
            aria-current={isActive ? "true" : undefined}
            className="group flex items-center gap-2"
          >
            <span
              className={`h-px transition-all duration-300 ${
                isActive
                  ? "w-5 bg-ink/60"
                  : "w-2 bg-ink/20 group-hover:w-4 group-hover:bg-ink/45"
              }`}
            />
            <span
              className={`font-mono text-[10px] tracking-[0.14em] transition-colors duration-300 ${
                isActive
                  ? "text-ink/60"
                  : "text-ink/30 group-hover:text-ink/50"
              }`}
            >
              {item.n}
            </span>
          </button>
        );
      })}
    </nav>
  );
};

export default SectionRail;
