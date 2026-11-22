import PropTypes from "prop-types";
import Reveal from "../../ui/Reveal";
import { Section, Tag } from "../../ui/Section";
import { educationItemShape, jobShape, sectionMetaShape } from "../propTypes";

export default function ExperienceRows({ experience, education, meta }) {
  return (
    <Section id="experience" index={meta.index} label={meta.label} title={meta.title} description={meta.description}>
      <div className="space-y-0">
        {experience.map((job, i) => (
          <Reveal
            key={`${job.company}-${job.role}`}
            delay={i * 60}
            className="border-t border-line py-8 first:border-t-0 first:pt-0"
          >
            <div className="grid gap-6 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg tracking-tight text-fg">{job.company}</h3>
                  {job.current ? (
                    <span className="border border-accent/40 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-accent">
                      current
                    </span>
                  ) : null}
                </div>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-dim">{job.role}</p>
                <p className="mt-1 font-mono text-[10px] text-faint">{job.period}</p>
              </div>

              <div className="lg:col-span-8">
                <p className="text-sm leading-relaxed text-dim">{job.summary}</p>
                <ul className="mt-4 space-y-2.5">
                  {job.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-[13px] leading-relaxed text-dim">
                      <span className="mt-[7px] h-px w-3 shrink-0 bg-faint" aria-hidden="true" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {job.stack.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <div id="education" className="mt-16 scroll-mt-32 border-t border-line pt-10">
        <p className="label">05 — Education</p>
        <div className="mt-6 grid gap-px border border-line bg-line md:grid-cols-2">
          {education.map((item) => (
            <div key={item.degree} className="bg-night p-5">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-base tracking-tight text-fg">{item.degree}</h3>
                <span className="font-mono text-[10px] text-faint">{item.period}</span>
              </div>
              <p className="mt-1 text-xs text-dim">{item.institution}</p>
              <p className="mt-3 font-mono text-[11px] text-accent/80">{item.distinction}</p>
              <p className="mt-3 text-[11px] leading-relaxed text-faint">
                {item.coursework.join(" · ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

ExperienceRows.propTypes = {
  experience: PropTypes.arrayOf(jobShape).isRequired,
  education: PropTypes.arrayOf(educationItemShape).isRequired,
  meta: sectionMetaShape.isRequired,
};
