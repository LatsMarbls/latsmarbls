import { projects } from "../content/projects";
import { ArrowUpRight, Github } from "../ui/Icons";
import Reveal from "../ui/Reveal";
import { Section } from "../ui/Section";

export default function Projects() {
  return (
    <Section
      id="projects"
      index="06"
      label="Projects"
      title="Things I've built"
      description="Side projects and coursework that shaped how I build — auth systems, AI-backed apps and Laravel platforms with real data models behind them."
    >
      <div>
        {projects.map((project, i) => (
          <Reveal
            key={project.slug}
            delay={Math.min(i, 4) * 40}
            className="group relative border-t border-line first:border-t-0"
          >
            <div className="grid gap-4 py-7 md:grid-cols-12 md:items-baseline md:gap-6">
              <div className="flex items-baseline gap-4 md:col-span-4">
                <span className="font-mono text-[10px] text-faint">{project.index}</span>
                <div>
                  <h3 className="text-xl leading-tight tracking-tight text-fg transition-colors group-hover:text-accent md:text-2xl">
                    {project.title}
                  </h3>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-faint">
                    {project.kind}
                  </p>
                </div>
              </div>

              <div className="md:col-span-5">
                <p className="text-[13px] leading-relaxed text-dim">{project.summary}</p>
                <p className="mt-2 font-mono text-[10px] leading-relaxed text-faint">
                  {project.stack.join("  /  ")}
                </p>
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
                  <span className="inline-flex w-[86px] items-center justify-center border border-linesoft px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-wider text-faint/60">
                    No demo
                  </span>
                )}
              </div>
            </div>

            <div
              className="pointer-events-none absolute right-[26%] top-1/2 hidden w-56 -translate-y-1/2 translate-x-3 overflow-hidden border border-line opacity-0 shadow-2xl transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100 xl:block"
              aria-hidden="true"
            >
              <img
                src={project.image}
                alt=""
                loading="lazy"
                className="h-36 w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
              />
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
