import { meta, profile, responseArtifact, resumeHref } from "../content/site";
import { ArrowDown, Document, Dot, Mail } from "../ui/Icons";

function ResponsePanel() {
  const { endpoint, status, contentType, body } = responseArtifact;
  return (
    <div data-build="panel" className="relative min-w-0 max-w-full border border-line bg-panel/80">
      <div className="flex items-center justify-between border-b border-line px-4 py-3">
        <div className="flex items-center gap-2">
          <Dot />
          <span className="font-mono text-[11px] tracking-wider text-fg">{status}</span>
        </div>
        <span className="font-mono text-[10px] text-faint">{contentType}</span>
      </div>
      <div className="border-b border-line px-4 py-3">
        <span className="font-mono text-[11px] text-faint">GET</span>{" "}
        <span className="font-mono text-[11px] text-fg">{endpoint.replace("GET ", "")}</span>
      </div>
      <pre className="overflow-x-auto px-4 py-4 font-mono text-[10.5px] leading-[1.85] text-dim sm:text-[11.5px]">
        <code>
          <span className="text-faint">{"{"}</span>
          {Object.entries(body).map(([key, value], i, arr) => (
            <span key={key}>
              {"\n  "}
              <span className="text-accent/80">"{key}"</span>
              <span className="text-faint">: </span>
              {Array.isArray(value) ? (
                <>
                  <span className="text-faint">[</span>
                  {value.map((item, index) => (
                    <span key={item}>
                      {"\n    "}
                      <span className="text-fg">"{item}"</span>
                      {index < value.length - 1 ? <span className="text-faint">,</span> : null}
                    </span>
                  ))}
                  {"\n  "}
                  <span className="text-faint">]</span>
                </>
              ) : (
                <span className="text-fg">"{value}"</span>
              )}
              {i < arr.length - 1 ? <span className="text-faint">,</span> : null}
            </span>
          ))}
          {"\n"}
          <span className="text-faint">{"}"}</span>
        </code>
      </pre>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-[68px]">
      <div className="pointer-events-none absolute inset-0 blueprint opacity-70" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-accent/[0.06] blur-[120px]"
        aria-hidden="true"
      />
      <div className="shell relative pb-16 pt-14 md:pb-24 md:pt-24">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <p data-build="eyebrow" className="label flex items-center gap-3">
              <span className="text-accent">01</span>
              <span className="h-px w-6 bg-line" />
              Backend Developer
            </p>

            <h1 data-build="headline" className="mt-7 text-[clamp(2.75rem,8.4vw,5.75rem)] font-semibold leading-[0.94] tracking-[-0.045em] text-fg">
              {profile.first}
              <br />
              <span className="text-fg">{profile.last}</span>
            </h1>

            <p data-build="intro" className="mt-7 max-w-xl text-[15px] leading-relaxed text-dim md:text-base">
              {profile.intro}
            </p>

            <figure className="mt-6 border-l border-accent/50 pl-4">
              <blockquote className="max-w-md font-display text-[15px] leading-snug text-dim">
                “Lets make idea into reality”
              </blockquote>
            </figure>

            <p className="mt-4 max-w-xl font-mono text-xs leading-relaxed text-faint">
              Currently at <span className="text-dim">{profile.company}</span> — Laravel, MySQL,
              Pest. Based in {profile.location}.
            </p>

            <div data-build="actions" className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="focus-ring group inline-flex items-center gap-2 bg-accent px-4 py-2.5 font-mono text-[11px] uppercase tracking-wider text-night transition-colors hover:bg-accentdim"
              >
                <Mail className="h-3.5 w-3.5" />
                Email me
              </a>
              <a
                href={resumeHref}
                className="focus-ring inline-flex items-center gap-2 border border-line px-4 py-2.5 font-mono text-[11px] uppercase tracking-wider text-dim transition-colors hover:border-dim hover:text-fg"
              >
                <Document className="h-3.5 w-3.5" />
                Resume
              </a>
            </div>

            <dl data-build="stats" className="mt-12 grid max-w-lg grid-cols-1 gap-px border border-line bg-line sm:grid-cols-3">
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

          <div className="lg:col-span-5 lg:pt-1">
            <ResponsePanel />
            <div className="mt-4 border border-line bg-panel/40">
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
