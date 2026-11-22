import PropTypes from "prop-types";
import { ArrowUpRight, Github } from "../../ui/Icons";
import Reveal from "../../ui/Reveal";
import { Section } from "../../ui/Section";
import { projectShape, sectionMetaShape } from "../propTypes";

export default function ProjectsMasonry({ projects, meta }) {
  return (
    <Section id="projects" index={meta.index} label={meta.label} title={meta.title} description={meta.description}>
      <div className="columns-1 gap-4 sm:columns-2">
        {projects.map((project, i) => (
          <Reveal
            key={project.slug}
            delay={Math.min(i, 5) * 40}
            className="mb-4 break-inside-avoid border border-line bg-panel/30"
          >
            <div className="overflow-hidden border-b border-line">
              <img
                src={project.image}
                alt=""
                loading={i < 2 ? "eager" : "lazy"}
                className="aspect-video w-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
              />
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg leading-tight tracking-tight text-fg">{project.title}</h3>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-faint">
                    {project.kind}
                  </p>
                </div>
                <span className="font-mono text-[10px] text-faint">{project.index}</span>
              </div>
              <p className="mt-3 text-[12px] leading-relaxed text-dim">{project.summary}</p>
              <p className="mt-3 font-mono text-[10px] leading-relaxed text-faint">
                {project.stack.join(" / ")}
              </p>
              <div className="mt-4 flex items-center gap-2">
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="focus-ring inline-flex flex-1 items-center justify-center gap-1.5 border border-line px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-wider text-dim transition-colors hover:border-dim hover:text-fg"
                >
                  <Github className="h-3 w-3" />
                  Code
                </a>
                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="focus-ring inline-flex flex-1 items-center justify-center gap-1.5 border border-line px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-wider text-dim transition-colors hover:border-accent/50 hover:text-accent"
                  >
                    <ArrowUpRight className="h-3 w-3" />
                    Live
                  </a>
                ) : (
                  <span className="inline-flex flex-1 items-center justify-center border border-linesoft px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-wider text-faint/60">
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

ProjectsMasonry.propTypes = {
  projects: PropTypes.arrayOf(projectShape).isRequired,
  meta: sectionMetaShape.isRequired,
};
