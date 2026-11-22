import PropTypes from "prop-types";
import { ArrowDown, Document, Mail } from "../../ui/Icons";
import { metaShape, profileShape } from "../propTypes";

export default function HeroMinimal({ profile, meta, resumeHref }) {
  return (
    <section id="top" className="relative overflow-hidden pt-[68px]" data-build="hero">
      <div className="pointer-events-none absolute inset-0 blueprint opacity-70" aria-hidden="true" />
      <div
        className="pointer-events-none absolute right-0 top-0 h-[420px] w-[420px] rounded-full bg-accent/[0.05] blur-[120px]"
        aria-hidden="true"
      />
      <div className="shell relative flex flex-col items-center pb-20 pt-20 text-center md:pb-28 md:pt-28">
        <p data-build="eyebrow" className="label flex items-center gap-3">
          <span className="text-accent">01</span>
          <span className="h-px w-6 bg-line" />
          {profile.role}
        </p>

        <h1
          data-build="headline"
          className="mt-8 text-[clamp(3.5rem,12vw,8rem)] font-semibold leading-[0.9] tracking-[-0.06em] text-fg"
        >
          {profile.first}
          <br />
          {profile.last}
        </h1>

        <p
          data-build="intro"
          className="mt-8 max-w-xl text-[15px] leading-relaxed text-dim md:text-base"
        >
          {profile.intro}
        </p>

        <div data-build="actions" className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="focus-ring group inline-flex items-center gap-2 bg-accent px-4 py-2.5 font-mono text-[11px] uppercase tracking-wider text-night transition-colors hover:bg-accentdim"
          >
            <Mail className="h-3.5 w-3.5" />
            Say hello
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
          className="mt-12 flex flex-wrap justify-center gap-px border border-line bg-line"
        >
          {[
            ["Experience", meta.tenure],
            ["Core stack", meta.coreStack],
            ["Education", meta.education],
          ].map(([term, value]) => (
            <div key={term} className="bg-night px-5 py-4 text-center">
              <dt className="label">{term}</dt>
              <dd className="mt-2 font-mono text-[11px] leading-snug text-fg">{value}</dd>
            </div>
          ))}
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

HeroMinimal.propTypes = {
  profile: profileShape.isRequired,
  meta: metaShape.isRequired,
  resumeHref: PropTypes.string.isRequired,
};
