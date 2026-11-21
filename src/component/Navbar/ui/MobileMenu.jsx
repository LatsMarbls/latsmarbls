import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";

const items = [
  { id: "home", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "practice", label: "Practice" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const MobileMenu = ({ isMenuOpen, scrollToSection }) => {
  const menuRef = useRef(null);

  useEffect(() => {
    if (!menuRef.current) return;

    gsap.to(menuRef.current, {
      x: isMenuOpen ? 0 : "120%",
      duration: isMenuOpen ? 0.4 : 0.2,
      ease: isMenuOpen ? "power3.out" : "power3.in",
    });
  }, [isMenuOpen]);

  return (
    <div
      ref={menuRef}
      style={{ transform: "translateX(120%)" }}
      className="absolute right-4 top-16 z-30 w-[210px] border border-line bg-white p-2 shadow-[0_20px_60px_-24px_rgba(17,17,16,0.35)] lg:hidden"
    >
      <AnimatePresence>
        {isMenuOpen && (
          <motion.ul
            className="flex flex-col"
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {items.map((item, index) => (
              <motion.li
                key={item.id}
                custom={index}
                variants={{
                  hidden: { opacity: 0, x: 12 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.2, delay: 0.15 + index * 0.04 },
                  },
                }}
              >
                <button
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className="flex w-full items-baseline gap-3 border-b border-line/70 px-2 py-3 text-left last:border-0"
                >
                  <span className="font-mono text-[10px] text-ink/35">
                    0{items.indexOf(item) + 1}
                  </span>
                  <span className="font-display text-[13px] font-semibold uppercase tracking-[0.12em] text-ink">
                    {item.label}
                  </span>
                </button>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;
