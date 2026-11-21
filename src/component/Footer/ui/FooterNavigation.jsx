import React from "react";

const items = [
  { id: "home", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "practice", label: "Practice" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const FooterNavigation = ({ scrollToSection }) => {
  return (
    <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
      {items.map((item) => (
        <li key={item.id}>
          <button
            type="button"
            onClick={() => scrollToSection(item.id)}
            className="font-mono text-2xs uppercase tracking-[0.14em] text-white/60 transition-colors duration-200 hover:text-white"
          >
            {item.label}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default FooterNavigation;
