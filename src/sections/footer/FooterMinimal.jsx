import { ArrowUpRight } from "../../ui/Icons";
import { profileShape, versionShape } from "../propTypes";

export default function FooterMinimal({ profile, version }) {
  return (
    <footer className="border-t border-line bg-panel/30" data-build="footer">
      <div className="shell flex flex-col items-center gap-4 py-10 text-center">
        <a href="#top" className="focus-ring flex items-center gap-3">
          <img src="/LM.svg" alt="" className="h-6 w-auto" />
        </a>
        <p className="font-mono text-[10px] uppercase tracking-wider text-faint">
          © {new Date().getFullYear()} {profile.name} — {profile.role}
        </p>
        <div className="flex items-center gap-4">
          <a
            href={version.releaseUrl}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-[10px] uppercase tracking-wider text-accent transition-colors hover:text-accentdim"
          >
            v{version.appVersion}
          </a>
          <span className="text-line">·</span>
          <a
            href="#top"
            className="focus-ring inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-faint transition-colors hover:text-fg"
          >
            Back to top
            <ArrowUpRight className="h-3 w-3 -rotate-45" />
          </a>
        </div>
      </div>
    </footer>
  );
}

FooterMinimal.propTypes = {
  profile: profileShape.isRequired,
  version: versionShape.isRequired,
};
