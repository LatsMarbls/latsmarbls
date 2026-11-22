import { practices, toolkit } from "../content/practice";
import Reveal from "../ui/Reveal";
import { Section } from "../ui/Section";

export default function Practice() {
  return (
    <Section
      id="practice"
      index="03"
      label="Practice"
      title="How I actually work"
      description="Writing features is the easy part. These are the practices that decide whether a release is safe — each with something concrete behind it."
    >
      <div className="grid gap-x-12 md:grid-cols-2">
        {practices.map((item, i) => (
          <Reveal
            key={item.title}
            delay={(i % 2) * 60}
            className="border-t border-line py-7 first:border-t-0 md:[&:nth-child(-n+2)]:border-t-0"
          >
            <div className="flex gap-4">
              <span className="mt-1 font-mono text-[10px] text-faint">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-lg leading-snug tracking-tight text-fg">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-dim">{item.body}</p>
                <p className="mt-3 border-l border-line pl-3 text-xs leading-relaxed text-faint">
                  {item.evidence}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-12 grid gap-px border border-line bg-line md:grid-cols-3">
        <div className="bg-night p-5">
          <p className="label">MCP servers</p>
          <p className="mt-3 text-xs leading-relaxed text-dim">{toolkit.mcp}</p>
        </div>
        <div className="bg-night p-5">
          <p className="label">Reusable skills</p>
          <p className="mt-3 text-xs leading-relaxed text-dim">{toolkit.skills}</p>
        </div>
        <div className="bg-night p-5">
          <p className="label">Models in the loop</p>
          <ul className="mt-3 space-y-2">
            {toolkit.models.map((model) => (
              <li key={model.name} className="text-xs leading-relaxed">
                <span className="font-mono text-fg">{model.name}</span>
                <span className="block text-faint">{model.use}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
