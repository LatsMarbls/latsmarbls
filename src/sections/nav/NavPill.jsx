import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Close, Document, Menu } from "../../ui/Icons";
import { navItemShape, profileShape } from "../propTypes";

export default function NavPill({ nav, profile, resumeHref }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // pill stays visually the same regardless of scroll
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed left-0 right-0 top-4 z-40 px-4" data-build="nav">
      <nav
        className="mx-auto flex h-[52px] max-w-3xl items-center justify-between rounded-full border border-line bg-panel/80 px-2 pl-4 backdrop-blur-md"
        aria-label="Primary"
      >
        <a href="#top" className="focus-ring flex items-center gap-2 rounded-full">
          <img src="/LM.svg" alt="" className="h-5 w-auto" />
          <span className="hidden font-mono text-[11px] uppercase tracking-wider text-faint sm:inline">
            {profile.name}
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="focus-ring rounded-full px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-faint transition-colors hover:text-fg"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href={resumeHref}
          className="focus-ring hidden items-center gap-1.5 rounded-full bg-accent px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-night transition-colors hover:bg-accentdim md:inline-flex"
        >
          <Document className="h-3 w-3" />
          Resume
        </a>

        <button
          onClick={() => setOpen(true)}
          className="focus-ring rounded-full p-2 text-faint md:hidden"
          aria-label="Open menu"
        >
          <Menu />
        </button>
      </nav>

      {open && (
        <div className="fixed inset-0 z-50 bg-night/98 backdrop-blur-lg md:hidden">
          <div className="flex h-[68px] items-center justify-between px-5">
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
          <div className="flex flex-col gap-2 px-5 py-6">
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
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-4 py-3 font-mono text-[11px] uppercase tracking-wider text-night transition-colors hover:bg-accentdim"
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

NavPill.propTypes = {
  nav: PropTypes.arrayOf(navItemShape).isRequired,
  profile: profileShape.isRequired,
  resumeHref: PropTypes.string.isRequired,
};
