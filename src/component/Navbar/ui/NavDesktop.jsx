import React from "react";
import { motion } from "framer-motion";
import useActiveSection from "../../layouts/useActiveSection";

const items = [
  { id: "skills", label: "Skills" },
  { id: "practice", label: "Practice" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const NavDesktop = ({ scrollToSection }) => {
  const active = useActiveSection();

  return (
    <div className="absolute inset-x-0 top-0 z-20 hidden items-center justify-between px-8 py-5 lg:flex lg:px-12 2xl:px-14">
      <button
        type="button"
        onClick={() => scrollToSection("home")}
        className="flex items-center gap-2"
        aria-label="Latrell Marable — home"
      >
        <img src="/LogoFilled.svg" alt="" className="h-7 w-7" />
        <span className="font-display text-[17px] font-bold leading-none tracking-[-0.01em] text-ink">
          Lats<span className="text-ink/40">Marbls</span>
        </span>
      </button>

      <nav className="flex items-center gap-7">
        {items.map((item) => {
          const isActive = active === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              aria-current={isActive ? "true" : undefined}
              className={`relative font-mono text-[11px] uppercase tracking-[0.16em] transition-colors duration-200 ${
                isActive ? "text-ink" : "text-ink/45 hover:text-ink"
              }`}
            >
              {item.label}
              {isActive && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-1.5 left-0 right-0 h-px bg-ink"
                  transition={{ duration: 0.25, ease: "easeOut" }}
                />
              )}
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default NavDesktop;
