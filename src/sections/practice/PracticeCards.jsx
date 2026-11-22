import PropTypes from "prop-types";
import Reveal from "../../ui/Reveal";
import { Section } from "../../ui/Section";
import { practiceShape, sectionMetaShape } from "../propTypes";

export default function PracticeCards({ practices, meta }) {
  return (
    <Section id="practice" index={meta.index} label={meta.label} title={meta.title} description={meta.description}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {practices.map((item, i) => (
          <Reveal
            key={item.title}
            delay={Math.min(i, 3) * 50}
            className="flex flex-col border border-line bg-panel/30 p-5"
          >
            <span className="font-mono text-[10px] text-faint">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="mt-3 text-lg leading-snug tracking-tight text-fg">{item.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-dim">{item.body}</p>
            <p className="mt-4 border-t border-linesoft pt-3 text-[11px] leading-relaxed text-faint">
              {item.evidence}
            </p>
          </Reveal>
        ))}
      </div>

    </Section>
  );
}

PracticeCards.propTypes = {
  practices: PropTypes.arrayOf(practiceShape).isRequired,
  meta: sectionMetaShape.isRequired,
};
