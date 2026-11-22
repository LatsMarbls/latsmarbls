import PropTypes from "prop-types";
import { ArrowUpRight } from "../../ui/Icons";
import { navItemShape, profileShape, versionShape } from "../propTypes";

export default function FooterBar({ profile, nav, version }) {
  return (
    <footer className="border-t border-line bg-panel/30" data-build="footer">
      <div className="shell flex h-[68px] flex-col items-center justify-between gap-3 py-3 sm:flex-row sm:gap-6">
        <a href="#top" className="focus-ring flex items-center gap-3">
          <img src="/LM.svg" alt="" className="h-6 w-auto" />
          <span className="hidden font-mono text-[10px] uppercase tracking-wider text-faint sm:inline">
            {profile.name}
          </span>
        </a>

        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2" aria-label="Footer">
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="font-mono text-[10px] uppercase tracking-wider text-faint transition-colors hover:text-dim"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={version.releaseUrl}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-[10px] uppercase tracking-wider text-accent transition-colors hover:text-accentdim"
          >
            v{version.appVersion}
          </a>
          <a
            href="#top"
            className="focus-ring inline-flex items-center gap-1 border border-line bg-night px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-faint transition-colors hover:border-accent hover:text-fg"
          >
            Top
            <ArrowUpRight className="h-3 w-3 -rotate-45" />
          </a>
        </div>
      </div>
    </footer>
  );
}

FooterBar.propTypes = {
  profile: profileShape.isRequired,
  nav: PropTypes.arrayOf(navItemShape).isRequired,
  version: versionShape.isRequired,
};
