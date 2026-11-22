import PropTypes from "prop-types";
import { ArrowUpRight, Dot, Mail } from "../../ui/Icons";
import Reveal from "../../ui/Reveal";
import { profileShape, socialShape } from "../propTypes";

export default function ContactTerminal({ profile, socials }) {
  return (
    <section id="contact" className="border-t border-line" data-build="contact">
      <div className="shell py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="border border-line bg-panel/60 p-5 font-mono text-[11px] leading-relaxed">
              <p>
                <span className="text-accent">latrell@portfolio</span>
                <span className="text-faint">:~$</span> send-email
              </p>
              <p className="mt-2 text-fg">{profile.email}</p>
              <p className="mt-4">
                <span className="text-accent">latrell@portfolio</span>
                <span className="text-faint">:~$</span> status
              </p>
              <p className="mt-2 text-fg">{profile.availability}</p>
              <p className="mt-4">
                <span className="text-accent">latrell@portfolio</span>
                <span className="text-faint">:~$</span> location
              </p>
              <p className="mt-2 text-fg">{profile.location}</p>
              <p className="mt-4">
                <span className="text-accent">latrell@portfolio</span>
                <span className="text-faint">:~$</span> ls socials/
              </p>
              <div className="mt-2 flex flex-col gap-1 text-fg">
                {socials.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 transition-colors hover:text-accent"
                  >
                    {item.label.toLowerCase()}
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
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
              Backend work, application security, platform reliability — or a Laravel system that
              needs a second pair of eyes. I usually reply the same day.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
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
          </div>
        </div>
      </div>
    </section>
  );
}

ContactTerminal.propTypes = {
  profile: profileShape.isRequired,
  socials: PropTypes.arrayOf(socialShape).isRequired,
};
