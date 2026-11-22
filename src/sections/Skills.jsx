import { deeperInto, skillGroups } from "../content/skills";
import Reveal from "../ui/Reveal";
import { Section } from "../ui/Section";

export default function Skills() {
  return (
    <Section
      id="skills"
      index="02"
      label="Skills"
      title="The stack I work in"
      description="Backend first — Laravel and PHP day to day, supported by the testing, security and AI tooling that keep shipped work reviewable."
    >
      <div className="grid gap-x-12 gap-y-0 md:grid-cols-2">
        {skillGroups.map((group, i) => (
          <Reveal
            key={group.category}
            delay={(i % 2) * 60}
            className="group border-t border-line py-6 first:border-t-0 md:[&:nth-child(-n+2)]:border-t-0"
          >
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-mono text-[11px] uppercase tracking-label text-accent/80">
                {group.category}
              </h3>
              <span className="font-mono text-[10px] text-faint">
                {String(group.items.length).padStart(2, "0")}
              </span>
            </div>
            <p className="mt-3 text-base leading-snug text-fg">
              {group.items.join(" · ")}
            </p>
            <p className="mt-2 max-w-md text-xs leading-relaxed text-dim">{group.note}</p>
          </Reveal>
        ))}
      </div>

      <div className="mt-10 border border-line bg-panel/50 px-5 py-4">
        <p className="label">Going deeper into</p>
        <p className="mt-2 font-mono text-xs text-dim">{deeperInto.join("  /  ")}</p>
      </div>
    </Section>
  );
}
