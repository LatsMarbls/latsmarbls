import React from "react";

const MobileHeader = ({ toggleMenu, isMenuOpen }) => (
  <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-6 py-4 lg:hidden">
    <div className="flex items-center gap-2">
      <img src="/LogoFilled.svg" alt="" className="h-6 w-6" />
      <span className="font-display text-[15px] font-bold leading-none tracking-[-0.01em] text-ink">
        Lats<span className="text-ink/40">Marbls</span>
      </span>
    </div>

    <button
      type="button"
      onClick={toggleMenu}
      aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      aria-expanded={isMenuOpen}
      className="flex h-9 w-9 items-center justify-center border border-line text-ink transition-colors duration-200 hover:bg-ink hover:text-white"
    >
      <span className="relative block h-3 w-4">
        <span
          className={`absolute left-0 block h-px w-4 bg-current transition-transform duration-200 ${
            isMenuOpen ? "top-1.5 rotate-45" : "top-0"
          }`}
        />
        <span
          className={`absolute left-0 top-1.5 block h-px w-4 bg-current transition-opacity duration-200 ${
            isMenuOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`absolute left-0 block h-px w-4 bg-current transition-transform duration-200 ${
            isMenuOpen ? "top-1.5 -rotate-45" : "top-3"
          }`}
        />
      </span>
    </button>
  </div>
);

export default MobileHeader;
