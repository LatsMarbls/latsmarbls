import PropTypes from "prop-types";
import { ArrowUpRight } from "../../ui/Icons";
import { navItemShape, profileShape, socialShape, versionShape } from "../propTypes";

export default function FooterGrid({ profile, nav, socials, version }) {
  return (
    <footer className="border-t border-line bg-panel/30" data-build="footer">
      <div className="shell py-12 md:py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#top" className="focus-ring flex items-center gap-3">
              <img src="/LM.svg" alt="" className="h-6 w-auto" />
            </a>
            <p className="mt-4 text-sm leading-relaxed text-dim">
              Backend systems reviewed before they ship.
            </p>
          </div>

          <div>
            <p className="label">Sitemap</p>
            <nav className="mt-4 flex flex-col gap-2" aria-label="Footer">
              {nav.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-faint transition-colors hover:text-dim"
                >
                  {item.label}
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p className="label">Connect</p>
            <nav className="mt-4 flex flex-col gap-2" aria-label="Social">
              {socials.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-faint transition-colors hover:text-dim"
                >
                  {item.label}
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p className="label">Meta</p>
            <div className="mt-4 flex flex-col gap-2 font-mono text-[10px] uppercase tracking-wider text-faint">
              <span>© {new Date().getFullYear()} {profile.name}</span>
              <a
                href={version.releaseUrl}
                target="_blank"
                rel="noreferrer"
                className="text-accent transition-colors hover:text-accentdim"
              >
                v{version.appVersion}
              </a>
              <a
                href={version.legacyUrl}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-dim"
              >
                v1 archive
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-line pt-6 sm:flex-row">
          <span className="font-mono text-[10px] uppercase tracking-wider text-faint">
            {profile.name} — {profile.role}
          </span>
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

FooterGrid.propTypes = {
  profile: profileShape.isRequired,
  nav: PropTypes.arrayOf(navItemShape).isRequired,
  socials: PropTypes.arrayOf(socialShape).isRequired,
  version: versionShape.isRequired,
};
