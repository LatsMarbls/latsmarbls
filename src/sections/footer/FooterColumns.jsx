import PropTypes from "prop-types";
import { ArrowUpRight } from "../../ui/Icons";
import { navItemShape, profileShape, versionShape } from "../propTypes";

export default function FooterColumns({ profile, nav, version }) {
  return (
    <footer className="border-t border-line bg-panel/30" data-build="footer">
      <div className="shell flex flex-col gap-8 py-12 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <img src="/LM.svg" alt="" className="h-6 w-auto" />
            <span className="font-mono text-[10px] uppercase tracking-wider text-faint">
              {profile.name}
            </span>
          </div>
          <p className="font-mono text-[10px] uppercase tracking-wider text-faint">
            © {new Date().getFullYear()} {profile.name} — {profile.role}
          </p>
          <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-faint">
            <a
              href={version.releaseUrl}
              target="_blank"
              rel="noreferrer"
              className="text-accent transition-colors hover:text-accentdim"
            >
              v{version.appVersion}
            </a>
            <span className="text-line">·</span>
            <span>cursor swarm</span>
            <span className="text-line">·</span>
            <a
              href={version.legacyUrl}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-dim"
            >
              v1 archive
            </a>
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-3 border-l border-line pl-6" aria-label="Footer">
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
            href="#top"
            className="focus-ring inline-flex items-center gap-2 border border-line bg-night px-4 py-2 font-mono text-[10px] uppercase tracking-wider text-faint transition-colors hover:border-accent hover:text-fg"
          >
            Back to top
            <ArrowUpRight className="h-3 w-3 -rotate-45" />
          </a>
        </div>
      </div>
    </footer>
  );
}

FooterColumns.propTypes = {
  profile: profileShape.isRequired,
  nav: PropTypes.arrayOf(navItemShape).isRequired,
  version: versionShape.isRequired,
};
