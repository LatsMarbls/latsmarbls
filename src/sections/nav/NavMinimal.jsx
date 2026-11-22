import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Close, Document, Menu } from "../../ui/Icons";
import { navItemShape, profileShape } from "../propTypes";

export default function NavMinimal({ nav, profile, resumeHref }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-40 transition-colors duration-300 ${
        scrolled ? "border-b border-line bg-night/90 backdrop-blur-md" : "bg-transparent"
      }`}
      data-build="nav"
    >
      <nav className="shell flex h-[68px] items-center justify-between" aria-label="Primary">
        <a href="#top" className="focus-ring">
          <img src="/LM.svg" alt="" className="h-6 w-auto" />
        </a>

        <div className="hidden items-center md:flex">
          <div className="flex items-center border border-line">
            {nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="focus-ring px-3 py-2 font-mono text-[10px] uppercase tracking-wider text-faint transition-colors hover:text-fg"
              >
                {item.index}
              </a>
            ))}
          </div>
        </div>

        <a
          href={resumeHref}
          className="focus-ring hidden items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-dim transition-colors hover:text-fg md:inline-flex"
        >
          <Document className="h-3.5 w-3.5" />
          CV
        </a>

        <button
          onClick={() => setOpen(true)}
          className="focus-ring p-2 text-faint md:hidden"
          aria-label="Open menu"
        >
          <Menu />
        </button>
      </nav>

      {open && (
        <div className="fixed inset-0 z-50 bg-night/98 backdrop-blur-lg md:hidden">
          <div className="shell flex h-[68px] items-center justify-between">
            <span className="font-mono text-[11px] uppercase tracking-wider text-faint">
              {profile.name}
            </span>
            <button
              onClick={() => setOpen(false)}
              className="focus-ring p-2 text-faint"
              aria-label="Close menu"
            >
              <Close />
            </button>
          </div>
          <div className="shell flex flex-col gap-2 py-6">
            {nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="py-3 font-mono text-sm uppercase tracking-wider text-faint transition-colors hover:text-accent"
              >
                <span className="text-accent">{item.index}</span>
                <span className="ml-3">{item.label}</span>
              </a>
            ))}
            <a
              href={resumeHref}
              className="mt-4 inline-flex items-center justify-center gap-2 border border-line px-4 py-3 font-mono text-[11px] uppercase tracking-wider text-dim transition-colors hover:border-dim hover:text-fg"
            >
              <Document className="h-4 w-4" />
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

NavMinimal.propTypes = {
  nav: PropTypes.arrayOf(navItemShape).isRequired,
  profile: profileShape.isRequired,
  resumeHref: PropTypes.string.isRequired,
};
