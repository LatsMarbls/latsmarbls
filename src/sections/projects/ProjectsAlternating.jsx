import PropTypes from "prop-types";
import { ArrowUpRight, Github } from "../../ui/Icons";
import Reveal from "../../ui/Reveal";
import { Section } from "../../ui/Section";
import { projectShape, sectionMetaShape } from "../propTypes";

export default function ProjectsAlternating({ projects, meta }) {
  return (
    <Section id="projects" index={meta.index} label={meta.label} title={meta.title} description={meta.description}>
      <div className="space-y-0">
        {projects.map((project, i) => {
          const isEven = i % 2 === 0;
          return (
            <Reveal
              key={project.slug}
              delay={Math.min(i, 4) * 40}
              className="group border-t border-line py-8 first:border-t-0"
            >
              <div
                className={`grid items-center gap-8 lg:grid-cols-12 ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                <div className={`lg:col-span-5 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="overflow-hidden border border-line">
                    <img
                      src={project.image}
                      alt=""
                      loading={i < 2 ? "eager" : "lazy"}
                      className="aspect-[16/10] w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                    />
                  </div>
                </div>
                <div className={`lg:col-span-7 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-[10px] text-faint">{project.index}</span>
                    <h3 className="text-2xl leading-tight tracking-tight text-fg transition-colors group-hover:text-accent">
                      {project.title}
                    </h3>
                  </div>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-faint">
                    {project.kind}
                  </p>
                  <p className="mt-4 max-w-xl text-[13px] leading-relaxed text-dim">{project.summary}</p>
                  <p className="mt-3 font-mono text-[10px] leading-relaxed text-faint">
                    {project.stack.join(" / ")}
                  </p>
                  <div className="mt-5 flex items-center gap-2">
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
                      <span className="inline-flex w-[86px] items-center justify-center border border-linesoft px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-wider text-faint/60">
                        No demo
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

ProjectsAlternating.propTypes = {
  projects: PropTypes.arrayOf(projectShape).isRequired,
  meta: sectionMetaShape.isRequired,
};
