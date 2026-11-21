import React from "react";
import { motion } from "framer-motion";
import useActiveSection from "../../layouts/useActiveSection";

const navItems = [
  { id: "skills", label: "Skills" },
  { id: "practice", label: "Practice" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const NavLinks = ({ isMobile, scrollToSection }) => {
  const active = useActiveSection();

  if (isMobile) {
    return (
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 md:hidden">
        {navItems.slice(0, 4).map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => scrollToSection(item.id)}
            className={`font-mono text-[10px] uppercase tracking-[0.14em] ${
              active === item.id ? "text-ink" : "text-ink/45"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="hidden items-center gap-6 md:flex">
      {navItems.map((item) => {
        const isActive = active === item.id;
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => scrollToSection(item.id)}
            aria-current={isActive ? "true" : undefined}
            className={`relative font-mono text-[10px] uppercase tracking-[0.16em] transition-colors duration-200 ${
              isActive ? "text-ink" : "text-ink/45 hover:text-ink"
            }`}
          >
            {item.label}
            {isActive && (
              <motion.span
                layoutId="sticky-underline"
                className="absolute -bottom-1 left-0 right-0 h-px bg-ink"
                transition={{ duration: 0.25, ease: "easeOut" }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
};

export default NavLinks;
