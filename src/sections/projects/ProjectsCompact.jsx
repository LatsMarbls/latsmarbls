import PropTypes from "prop-types";
import { ArrowUpRight, Github } from "../../ui/Icons";
import Reveal from "../../ui/Reveal";
import { Section } from "../../ui/Section";
import { projectShape, sectionMetaShape } from "../propTypes";

export default function ProjectsCompact({ projects, meta }) {
  return (
    <Section id="projects" index={meta.index} label={meta.label} title={meta.title} description={meta.description}>
      <div className="border border-line">
        <div className="grid grid-cols-12 border-b border-line bg-panel/40 px-4 py-2.5 font-mono text-[10px] uppercase tracking-wider text-faint">
          <div className="col-span-2 sm:col-span-1">#</div>
          <div className="col-span-6 sm:col-span-5">Project</div>
          <div className="hidden sm:col-span-3 sm:block">Stack</div>
          <div className="col-span-4 text-right sm:col-span-3">Links</div>
        </div>
        {projects.map((project, i) => (
          <Reveal
            key={project.slug}
            delay={Math.min(i, 4) * 40}
            className="grid grid-cols-12 items-center border-b border-linesoft px-4 py-3 last:border-b-0"
          >
            <div className="col-span-2 font-mono text-[10px] text-faint sm:col-span-1">
              {project.index}
            </div>
            <div className="col-span-6 sm:col-span-5">
              <h3 className="text-base leading-tight tracking-tight text-fg">{project.title}</h3>
              <p className="font-mono text-[10px] uppercase tracking-wider text-faint">
                {project.kind}
              </p>
            </div>
            <div className="hidden text-[11px] text-dim sm:col-span-3 sm:block">
              {project.stack.join(" / ")}
            </div>
            <div className="col-span-4 flex justify-end gap-2 sm:col-span-3">
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer noopener"
                className="focus-ring inline-flex items-center gap-1 border border-line px-2 py-1 font-mono text-[9px] uppercase tracking-wider text-dim transition-colors hover:border-dim hover:text-fg"
              >
                <Github className="h-3 w-3" />
                Code
              </a>
              {project.live ? (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="focus-ring inline-flex items-center gap-1 border border-line px-2 py-1 font-mono text-[9px] uppercase tracking-wider text-dim transition-colors hover:border-accent/50 hover:text-accent"
                >
                  <ArrowUpRight className="h-3 w-3" />
                  Live
                </a>
              ) : null}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

ProjectsCompact.propTypes = {
  projects: PropTypes.arrayOf(projectShape).isRequired,
  meta: sectionMetaShape.isRequired,
};
