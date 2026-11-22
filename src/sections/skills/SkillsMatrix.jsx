import PropTypes from "prop-types";
import Reveal from "../../ui/Reveal";
import { Section } from "../../ui/Section";
import { sectionMetaShape, skillGroupShape } from "../propTypes";

export default function SkillsMatrix({ skillGroups, meta }) {
  return (
    <Section id="skills" index={meta.index} label={meta.label} title={meta.title} description={meta.description}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal
            key={group.category}
            delay={Math.min(i, 5) * 40}
            className="border border-line bg-panel/30 p-5"
          >
            <div className="flex items-center justify-between gap-3">
              <h3 className="font-mono text-[11px] uppercase tracking-label text-accent/80">
                {group.category}
              </h3>
              <span className="font-mono text-[10px] text-faint">
                {String(group.items.length).padStart(2, "0")}
              </span>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="bg-night px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-dim"
                >
                  {item}
                </span>
              ))}
            </div>
            <p className="mt-4 text-[11px] leading-relaxed text-faint">{group.note}</p>
          </Reveal>
        ))}
      </div>

    </Section>
  );
}

SkillsMatrix.propTypes = {
  skillGroups: PropTypes.arrayOf(skillGroupShape).isRequired,
  meta: sectionMetaShape.isRequired,
};
