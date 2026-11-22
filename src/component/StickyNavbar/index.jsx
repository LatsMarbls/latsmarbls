import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavLinks from "./ui/NavLinks";
import useScrollPosition from "./hooks/useScrollPosition";
import scrollToSection from "./hooks/ScrollHelper";

const StickyNavbar = () => {
  const placeholderRef = React.useRef(null);
  const { isSticky } = useScrollPosition(placeholderRef);

  return (
    <div ref={placeholderRef} className="h-4" aria-hidden={!isSticky}>
      <AnimatePresence>
        {isSticky && (
          <motion.div
            id="sticky-navbar"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed inset-x-0 top-0 z-40 border-b border-line bg-paper/85 backdrop-blur-md"
          >
            <div className="mx-auto flex h-12 w-full max-w-[1600px] items-center justify-between px-6 sm:px-8 lg:px-12 2xl:px-16">
              <button
                type="button"
                onClick={() => scrollToSection("home")}
                className="flex items-center gap-2"
                aria-label="Back to top"
              >
                <img src="/LogoFilled.svg" alt="" className="h-5 w-5" />
                <span className="font-display text-[14px] font-bold leading-none tracking-[-0.01em] text-ink">
                  Lats<span className="text-ink/40">Marbls</span>
                </span>
              </button>

              <NavLinks scrollToSection={scrollToSection} />
              <NavLinks scrollToSection={scrollToSection} isMobile />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default StickyNavbar;
