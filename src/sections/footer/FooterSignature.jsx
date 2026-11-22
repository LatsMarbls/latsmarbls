import { ArrowUpRight } from "../../ui/Icons";
import { profileShape, versionShape } from "../propTypes";

export default function FooterSignature({ profile, version }) {
  return (
    <footer className="border-t border-line bg-panel/30" data-build="footer">
      <div className="shell py-12 md:py-16">
        <div className="flex flex-col items-center text-center">
          <img src="/LM.svg" alt="" className="h-8 w-auto" />
          <h2 className="mt-5 text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1] tracking-[-0.035em] text-fg">
            {profile.name}
          </h2>
          <p className="mt-2 font-mono text-[11px] uppercase tracking-wider text-faint">
            {profile.role}
          </p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-dim">
            Shipped with tests, reviewed for risk, and built to keep running in production.
          </p>
          <div className="mt-8 flex items-center gap-2">
            <a
              href={version.releaseUrl}
              target="_blank"
              rel="noreferrer"
              className="border border-line px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-accent transition-colors hover:border-accent"
            >
              v{version.appVersion}
            </a>
            <a
              href={version.legacyUrl}
              target="_blank"
              rel="noreferrer"
              className="border border-line px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-faint transition-colors hover:text-dim"
            >
              v1 archive
            </a>
          </div>
          <a
            href="#top"
            className="focus-ring mt-8 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-faint transition-colors hover:text-fg"
          >
            Back to top
            <ArrowUpRight className="h-3 w-3 -rotate-45" />
          </a>
        </div>
      </div>
    </footer>
  );
}

FooterSignature.propTypes = {
  profile: profileShape.isRequired,
  version: versionShape.isRequired,
};
