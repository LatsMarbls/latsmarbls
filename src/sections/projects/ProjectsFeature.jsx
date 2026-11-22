import PropTypes from "prop-types";
import { ArrowUpRight, Github } from "../../ui/Icons";
import Reveal from "../../ui/Reveal";
import { Section } from "../../ui/Section";
import { projectShape, sectionMetaShape } from "../propTypes";

export default function ProjectsFeature({ projects, meta }) {
  const [featured, ...rest] = projects;
  return (
    <Section id="projects" index={meta.index} label={meta.label} title={meta.title} description={meta.description}>
      <Reveal delay={0}>
        <div className="group border border-line bg-panel/30">
          <div className="grid lg:grid-cols-2">
            <div className="overflow-hidden border-b border-line lg:border-b-0 lg:border-r">
              <img
                src={featured.image}
                alt=""
                loading="eager"
                className="aspect-[16/10] h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 lg:aspect-auto"
              />
            </div>
            <div className="p-6 md:p-8">
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-[10px] text-faint">{featured.index}</span>
                <h3 className="text-2xl leading-tight tracking-tight text-fg transition-colors group-hover:text-accent md:text-3xl">
                  {featured.title}
                </h3>
              </div>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-wider text-faint">
                {featured.kind}
              </p>
              <p className="mt-4 max-w-md text-[14px] leading-relaxed text-dim">
                {featured.summary}
              </p>
              <p className="mt-4 font-mono text-[10px] leading-relaxed text-faint">
                {featured.stack.join(" / ")}
              </p>
              <div className="mt-6 flex items-center gap-2">
                <a
                  href={featured.repo}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="focus-ring inline-flex items-center justify-center gap-1.5 border border-line px-3 py-2 font-mono text-[10px] uppercase tracking-wider text-dim transition-colors hover:border-dim hover:text-fg"
                >
                  <Github className="h-3 w-3" />
                  Code
                </a>
                {featured.live ? (
                  <a
                    href={featured.live}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="focus-ring inline-flex items-center justify-center gap-1.5 border border-line px-3 py-2 font-mono text-[10px] uppercase tracking-wider text-dim transition-colors hover:border-accent/50 hover:text-accent"
                  >
                    <ArrowUpRight className="h-3 w-3" />
                    Live
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      <div className="mt-4 space-y-0">
        {rest.map((project, i) => (
          <Reveal
            key={project.slug}
            delay={(i + 1) * 40}
            className="group border-t border-line first:border-t-0"
          >
            <div className="grid gap-4 py-5 md:grid-cols-12 md:items-baseline md:gap-6">
              <div className="flex items-baseline gap-4 md:col-span-4">
                <span className="font-mono text-[10px] text-faint">{project.index}</span>
                <div>
                  <h3 className="text-lg leading-tight tracking-tight text-fg transition-colors group-hover:text-accent">
                    {project.title}
                  </h3>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-faint">
                    {project.kind}
                  </p>
                </div>
              </div>
              <div className="md:col-span-5">
                <p className="text-[13px] leading-relaxed text-dim">{project.summary}</p>
              </div>
              <div className="flex items-center gap-2 md:col-span-3 md:justify-end">
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="focus-ring inline-flex w-[86px] items-center justify-center gap-1.5 border border-line px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-wider text-dim transition-colors hover:border-dim hover:text-fg"
                >
                  <Github className="h-3 w-3" />
                  Code
                </a>
                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="focus-ring inline-flex w-[86px] items-center justify-center gap-1.5 border border-line px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-wider text-dim transition-colors hover:border-accent/50 hover:text-accent"
                  >
                    <ArrowUpRight className="h-3 w-3" />
                    Live
                  </a>
                ) : (
                <span className="inline-flex w-[86px] items-center justify-center border border-dashed border-line/70 px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-wider text-faint/45" aria-disabled="true" title="No public demo for this project">
                    No demo
                  </span>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

ProjectsFeature.propTypes = {
  projects: PropTypes.arrayOf(projectShape).isRequired,
  meta: sectionMetaShape.isRequired,
};
