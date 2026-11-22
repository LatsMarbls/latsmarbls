import PropTypes from "prop-types";
import Reveal from "../../ui/Reveal";
import { Section } from "../../ui/Section";
import { practiceShape, sectionMetaShape } from "../propTypes";

export default function PracticeList({ practices, meta }) {
  return (
    <Section id="practice" index={meta.index} label={meta.label} title={meta.title} description={meta.description}>
      <div className="grid gap-x-12 md:grid-cols-2">
        {practices.map((item, i) => (
          <Reveal
            key={item.title}
            delay={(i % 2) * 60}
            className="border-t border-line py-7 first:border-t-0 md:[&:nth-child(-n+2)]:border-t-0"
          >
            <div className="flex gap-4">
              <span className="mt-1 font-mono text-[10px] text-faint">
                {meta.index}.{String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-lg leading-snug tracking-tight text-fg">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-dim">{item.body}</p>
                <p className="mt-3 text-[11px] leading-relaxed text-faint">{item.evidence}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

    </Section>
  );
}

PracticeList.propTypes = {
  practices: PropTypes.arrayOf(practiceShape).isRequired,
  meta: sectionMetaShape.isRequired,
};
