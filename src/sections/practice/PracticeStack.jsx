import PropTypes from "prop-types";
import Reveal from "../../ui/Reveal";
import { Section } from "../../ui/Section";
import { practiceShape, sectionMetaShape } from "../propTypes";

export default function PracticeStack({ practices, meta }) {
  return (
    <Section id="practice" index={meta.index} label={meta.label} title={meta.title} description={meta.description}>
      <div className="border border-line">
        {practices.map((item, i) => (
          <Reveal
            key={item.title}
            delay={Math.min(i, 3) * 50}
            className="border-b border-linesoft p-5 last:border-b-0"
          >
            <div className="flex items-baseline gap-4">
              <span className="font-mono text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-none text-line">
                {meta.index}.{String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex-1">
                <h3 className="text-lg leading-snug tracking-tight text-fg">{item.title}</h3>
                <p className="mt-1 max-w-2xl text-sm leading-relaxed text-dim">{item.body}</p>
                <p className="mt-3 text-[11px] leading-relaxed text-faint">{item.evidence}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

    </Section>
  );
}

PracticeStack.propTypes = {
  practices: PropTypes.arrayOf(practiceShape).isRequired,
  meta: sectionMetaShape.isRequired,
};
