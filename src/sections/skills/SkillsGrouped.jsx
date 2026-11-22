import PropTypes from "prop-types";
import Reveal from "../../ui/Reveal";
import { Section } from "../../ui/Section";
import { sectionMetaShape, skillGroupShape } from "../propTypes";

export default function SkillsGrouped({ skillGroups, meta }) {
  return (
    <Section id="skills" index={meta.index} label={meta.label} title={meta.title} description={meta.description}>
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
            <div className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="border border-line px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-dim"
                >
                  {item}
                </span>
              ))}
            </div>
            <p className="mt-3 text-[12.5px] leading-relaxed text-faint">{group.note}</p>
          </Reveal>
        ))}
      </div>

    </Section>
  );
}

SkillsGrouped.propTypes = {
  skillGroups: PropTypes.arrayOf(skillGroupShape).isRequired,
  meta: sectionMetaShape.isRequired,
};
