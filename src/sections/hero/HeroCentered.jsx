import PropTypes from "prop-types";
import { ArrowDown, Document, Mail } from "../../ui/Icons";
import { metaShape, profileShape, responseArtifactShape } from "../propTypes";
import HeroResponsePanel from "./HeroResponsePanel";

export default function HeroCentered({ profile, meta, responseArtifact, resumeHref }) {
  return (
    <section id="top" className="relative overflow-hidden pt-[68px]" data-build="hero">
      <div className="pointer-events-none absolute inset-0 blueprint opacity-70" aria-hidden="true" />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-accent/[0.05] blur-[140px]"
        aria-hidden="true"
      />
      <div className="shell relative flex flex-col items-center pb-16 pt-14 text-center md:pb-24 md:pt-24">
        <p data-build="eyebrow" className="label flex items-center gap-3">
          <span className="text-accent">01</span>
          <span className="h-px w-6 bg-line" />
          {profile.role}
        </p>

        <h1
          data-build="headline"
          className="mt-8 text-[clamp(3rem,10vw,6.5rem)] font-semibold leading-[0.92] tracking-[-0.05em] text-fg"
        >
          {profile.first} {profile.last}
        </h1>

        <p
          data-build="intro"
          className="mt-7 max-w-2xl text-[15px] leading-relaxed text-dim md:text-base"
        >
          {profile.intro}
        </p>

        <div data-build="actions" className="mt-8 flex flex-wrap items-center justify-center gap-3">
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

        <div data-build="stats" className="mt-10 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            ["Experience", meta.tenure],
            ["Core stack", meta.coreStack],
            ["Education", meta.education],
          ].map(([term, value]) => (
            <div key={term} className="border border-line px-4 py-4">
              <dt className="label">{term}</dt>
              <dd className="mt-2 font-mono text-[11px] leading-snug text-fg">{value}</dd>
            </div>
          ))}
        </div>

        <figure className="mt-10 max-w-xl border-l border-accent/50 pl-4 text-left">
          <blockquote className="font-display text-[15px] leading-snug text-dim">
            &ldquo;{profile.quote}&rdquo;
          </blockquote>
        </figure>

        <div className="mt-12 w-full max-w-3xl">
          <HeroResponsePanel responseArtifact={responseArtifact} />
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

HeroCentered.propTypes = {
  profile: profileShape.isRequired,
  meta: metaShape.isRequired,
  responseArtifact: responseArtifactShape.isRequired,
  resumeHref: PropTypes.string.isRequired,
};
