import { useEffect, useState } from "react";
import { nav, profile, resumeHref } from "../content/site";
import { Close, Document, Menu } from "../ui/Icons";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = nav
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);
    if (!sections.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.2, 0.6] }
    );
    sections.forEach((section) => io.observe(section));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b transition-colors duration-300 ${
        scrolled || open
          ? "border-line bg-night/85 backdrop-blur-md"
          : "border-transparent bg-night/40 backdrop-blur-sm"
      }`}
    >
      <div className="shell flex h-[68px] items-center justify-between">
        <a
          href="#top"
          className="focus-ring group flex items-center gap-3"
          aria-label={`${profile.name} — home`}
        >
          <img
            src="/LM.svg"
            alt=""
            className="h-6 w-auto opacity-90 transition-opacity group-hover:opacity-100"
          />
          <span className="hidden text-sm tracking-tight text-fg sm:block">
            {profile.name}
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Sections">
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`focus-ring group flex items-baseline gap-1.5 font-mono text-[11px] uppercase tracking-wider transition-colors ${
                active === item.id ? "text-fg" : "text-faint hover:text-dim"
              }`}
            >
              <span className={active === item.id ? "text-accent" : "text-faint/60"}>
                {item.index}
              </span>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={resumeHref}
            className="focus-ring hidden items-center gap-2 border border-line px-3 py-2 font-mono text-[11px] uppercase tracking-wider text-dim transition-colors hover:border-accent/50 hover:text-accent sm:flex"
          >
            <Document className="h-3.5 w-3.5" />
            Resume
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="focus-ring flex h-9 w-9 items-center justify-center border border-line text-dim transition-colors hover:text-fg md:hidden"
          >
            {open ? <Close /> : <Menu />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-line bg-night md:hidden">
          <nav className="shell flex flex-col py-2" aria-label="Sections">
            {nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 border-b border-linesoft py-4 font-mono text-xs uppercase tracking-wider text-dim last:border-0"
              >
                <span className="text-accent">{item.index}</span>
                {item.label}
              </a>
            ))}
            <a
              href={resumeHref}
              className="flex items-center gap-2 py-4 font-mono text-xs uppercase tracking-wider text-fg"
            >
              <Document className="h-3.5 w-3.5" />
              Resume
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
