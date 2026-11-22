import PropTypes from "prop-types";
import { ArrowUpRight, Dot, Mail } from "../../ui/Icons";
import Reveal from "../../ui/Reveal";
import { profileShape, socialShape } from "../propTypes";

export default function ContactCentered({ profile, socials }) {
  return (
    <section id="contact" className="border-t border-line" data-build="contact">
      <div className="shell flex flex-col items-center py-20 text-center md:py-28">
        <p className="label flex items-center gap-3">
          <span className="text-accent">07</span>
          <span className="h-px w-6 bg-line" />
          Contact
        </p>

        <Reveal>
          <h2 className="mt-6 text-[clamp(2rem,5.2vw,3.5rem)] font-semibold leading-[1.02] tracking-[-0.035em] text-fg">
            Let&apos;s build
            <br />
            <span className="text-dim">something useful.</span>
          </h2>
        </Reveal>

        <p className="mt-6 max-w-md text-sm leading-relaxed text-dim">
          Backend work, application security, platform reliability — or a Laravel system that needs a
          second pair of eyes. I usually reply the same day.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="focus-ring group inline-flex items-center gap-2 bg-accent px-4 py-2.5 font-mono text-[11px] uppercase tracking-wider text-night transition-colors hover:bg-accentdim"
          >
            <Mail className="h-3.5 w-3.5" />
            Email me
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="link-underline font-mono text-xs text-dim hover:text-fg"
          >
            {profile.email}
          </a>
        </div>

        <p className="mt-8 flex items-center gap-2 font-mono text-[11px] text-faint">
          <Dot />
          {profile.availability}
        </p>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {socials.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer noopener"
              className="focus-ring group flex items-center justify-center gap-2 border border-line px-4 py-3 font-mono text-[10px] uppercase tracking-wider text-dim transition-colors hover:border-dim hover:text-fg"
            >
              {item.label}
              <ArrowUpRight className="h-3 w-3 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
            </a>
          ))}
        </div>

        <div className="mt-8 border border-line px-5 py-3">
          <p className="label">Based in</p>
          <p className="mt-1 font-mono text-[11px] text-dim">{profile.location}</p>
        </div>
      </div>
    </section>
  );
}

ContactCentered.propTypes = {
  profile: profileShape.isRequired,
  socials: PropTypes.arrayOf(socialShape).isRequired,
};
