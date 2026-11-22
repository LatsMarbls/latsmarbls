import React from "react";
import FooterNavigation from "./ui/FooterNavigation";
import SocialLinks from "./ui/SocialLinks";
import { useNavigation } from "./hooks/useNavigation";

const Footer = () => {
  const { scrollToSection } = useNavigation();

  return (
    <footer className="relative mt-5 overflow-hidden rounded-t-[28px] border-t border-white/10 bg-ink px-6 py-10 text-white sm:px-10">
      <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
        <div className="flex items-center gap-3">
          <img src="/LM.svg" alt="" className="h-8 w-8" />
          <div>
            <p className="font-display text-sm font-semibold">
              Latrell Marable
            </p>
            <p className="font-mono text-2xs uppercase tracking-[0.16em] text-white/50">
              Backend Developer
            </p>
          </div>
        </div>

        <FooterNavigation scrollToSection={scrollToSection} />
        <SocialLinks />
      </div>

      <div className="mt-8 flex flex-col items-center gap-3 border-t border-white/10 pt-6 sm:flex-row sm:justify-between">
        <p className="font-mono text-2xs text-white/50">
          {"\u00A9"} {new Date().getFullYear()} Latrell Marable — all rights
          reserved
        </p>
        <button
          type="button"
          onClick={() => scrollToSection("home")}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1.5 font-mono text-2xs uppercase tracking-[0.14em] text-white/70 transition-colors duration-200 hover:border-white/40 hover:text-white"
        >
          Back to top
          <i className="fa-solid fa-arrow-up text-[9px]" aria-hidden="true" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
