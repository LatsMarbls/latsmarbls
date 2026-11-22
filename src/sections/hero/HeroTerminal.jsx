import PropTypes from "prop-types";
import { ArrowDown, Document, Mail } from "../../ui/Icons";
import { metaShape, profileShape, responseArtifactShape } from "../propTypes";
import HeroResponsePanel from "./HeroResponsePanel";

export default function HeroTerminal({ profile, meta, responseArtifact, resumeHref }) {
  return (
    <section id="top" className="relative overflow-hidden pt-[68px]" data-build="hero">
      <div className="pointer-events-none absolute inset-0 blueprint opacity-70" aria-hidden="true" />
      <div className="shell relative pb-16 pt-14 md:pb-24 md:pt-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="order-2 lg:order-1 lg:col-span-5">
            <div className="border border-line bg-panel/60 p-4 font-mono text-[11px] leading-relaxed text-dim">
              <p>
                <span className="text-accent">latrell@portfolio</span>
                <span className="text-faint">:~$</span> whoami
              </p>
              <p className="mt-2 text-fg">{profile.name}</p>
              <p className="mt-4">
                <span className="text-accent">latrell@portfolio</span>
                <span className="text-faint">:~$</span> cat role.txt
              </p>
              <p className="mt-2 text-fg">{profile.role}</p>
              <p className="mt-4">
                <span className="text-accent">latrell@portfolio</span>
                <span className="text-faint">:~$</span> curl /api/v1/me
              </p>
            </div>
            <div className="mt-4">
              <HeroResponsePanel responseArtifact={responseArtifact} />
            </div>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-7">
            <p data-build="eyebrow" className="label flex items-center gap-3">
              <span className="text-accent">01</span>
              <span className="h-px w-6 bg-line" />
              {profile.role}
            </p>

            <h1
              data-build="headline"
              className="mt-7 text-[clamp(2.75rem,8.4vw,5.75rem)] font-semibold leading-[0.94] tracking-[-0.045em] text-fg"
            >
              {profile.first}
              <br />
              {profile.last}
            </h1>

            <p data-build="intro" className="mt-7 max-w-xl text-[15px] leading-relaxed text-dim md:text-base">
              {profile.intro}
            </p>

            <div data-build="actions" className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="focus-ring group inline-flex items-center gap-2 bg-accent px-4 py-2.5 font-mono text-[11px] uppercase tracking-wider text-night transition-colors hover:bg-accentdim"
              >
                <Mail className="h-3.5 w-3.5" />
                Email me
              </a>
              <a
                href={resumeHref}
                className="focus-ring inline-flex items-center gap-2 border border-line px-4 py-2.5 font-mono text-[11px] uppercase tracking-wider text-dim transition-colors hover:border-dim hover:text-fg"
              >
                <Document className="h-3.5 w-3.5" />
                Resume
              </a>
            </div>

            <div
              data-build="stats"
              className="mt-12 flex flex-wrap gap-px border border-line bg-line"
            >
              {[
                ["Experience", meta.tenure],
                ["Core stack", meta.coreStack],
                ["Education", meta.education],
              ].map(([term, value]) => (
                <div key={term} className="bg-night px-4 py-3">
                  <span className="label">{term}</span>
                  <span className="ml-3 font-mono text-[11px] text-fg">{value}</span>
                </div>
              ))}
            </div>

            <figure className="mt-8 border-l border-accent/50 pl-4">
              <blockquote className="max-w-md font-display text-[15px] leading-snug text-dim">
                &ldquo;{profile.quote}&rdquo;
              </blockquote>
            </figure>
          </div>
        </div>

        <a
          href="#skills"
          className="focus-ring mt-16 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-faint transition-colors hover:text-dim"
        >
          <ArrowDown className="h-3.5 w-3.5" />
          Scroll to the work
        </a>
      </div>
    </section>
  );
}

HeroTerminal.propTypes = {
  profile: profileShape.isRequired,
  meta: metaShape.isRequired,
  responseArtifact: responseArtifactShape.isRequired,
  resumeHref: PropTypes.string.isRequired,
};
