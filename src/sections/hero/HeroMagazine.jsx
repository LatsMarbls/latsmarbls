import PropTypes from "prop-types";
import { ArrowDown, Document, Mail } from "../../ui/Icons";
import { metaShape, profileShape, responseArtifactShape } from "../propTypes";
import HeroResponsePanel from "./HeroResponsePanel";

export default function HeroMagazine({ profile, meta, responseArtifact, resumeHref }) {
  return (
    <section id="top" className="relative overflow-hidden pt-[68px]" data-build="hero">
      <div className="pointer-events-none absolute inset-0 blueprint opacity-70" aria-hidden="true" />
      <div className="shell relative pb-16 pt-14 md:pb-24 md:pt-24">
        <p data-build="eyebrow" className="label flex items-center gap-3">
          <span className="text-accent">01</span>
          <span className="h-px w-6 bg-line" />
          {profile.role}
        </p>

        <div className="mt-8 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h1
              data-build="headline"
              className="text-[clamp(3rem,9vw,6rem)] font-semibold leading-[0.92] tracking-[-0.045em] text-fg"
            >
              {profile.first} {profile.last}
            </h1>

            <p
              data-build="intro"
              className="mt-6 max-w-xl text-[15px] leading-relaxed text-dim md:text-base"
            >
              {profile.intro}
            </p>

            <figure className="mt-6 border-l border-accent/50 pl-4">
              <blockquote className="max-w-md font-display text-[15px] leading-snug text-dim">
                &ldquo;{profile.quote}&rdquo;
              </blockquote>
            </figure>

            <div data-build="actions" className="mt-8 flex flex-wrap items-center gap-3">
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

            <dl
              data-build="stats"
              className="mt-10 grid max-w-lg grid-cols-1 gap-px border border-line bg-line sm:grid-cols-3"
            >
              {[
                ["Experience", meta.tenure],
                ["Core stack", meta.coreStack],
                ["Education", meta.education],
              ].map(([term, value]) => (
                <div key={term} className="bg-night px-3 py-4">
                  <dt className="label">{term}</dt>
                  <dd className="mt-2 font-mono text-[11px] leading-snug text-fg">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="space-y-4 lg:col-span-5">
            <HeroResponsePanel responseArtifact={responseArtifact} />
            <div className="border border-line bg-panel/40">
              <div className="border-b border-line px-4 py-2.5">
                <p className="label">Currently shipping</p>
              </div>
              <ul className="divide-y divide-linesoft">
                {[
                  ["Laravel modules across three client projects", "70 / 20 / 10 split"],
                  ["Security review on every feature", "input, permissions, exposure"],
                  ["PHPUnit coverage before release", "tests alongside the feature"],
                ].map(([line, detail]) => (
                  <li key={line} className="px-4 py-3">
                    <p className="text-[12.5px] leading-snug text-fg">{line}</p>
                    <p className="mt-0.5 font-mono text-[10px] text-faint">{detail}</p>
                  </li>
                ))}
              </ul>
            </div>
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

HeroMagazine.propTypes = {
  profile: profileShape.isRequired,
  meta: metaShape.isRequired,
  responseArtifact: responseArtifactShape.isRequired,
  resumeHref: PropTypes.string.isRequired,
};
