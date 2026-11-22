import PropTypes from "prop-types";
import Reveal from "../../ui/Reveal";
import { Section } from "../../ui/Section";
import { sectionMetaShape, skillGroupShape } from "../propTypes";

export default function SkillsLedger({ skillGroups, meta }) {
  return (
    <Section id="skills" index={meta.index} label={meta.label} title={meta.title} description={meta.description}>
      <div className="border border-line">
        <div className="grid grid-cols-12 border-b border-line bg-panel/40 px-4 py-2.5 font-mono text-[10px] uppercase tracking-wider text-faint">
          <div className="col-span-3">Category</div>
          <div className="col-span-5">Tools</div>
          <div className="col-span-4">Context</div>
        </div>
        {skillGroups.map((group, i) => (
          <Reveal
            key={group.category}
            delay={Math.min(i, 5) * 40}
            className="grid grid-cols-12 border-b border-linesoft px-4 py-4 last:border-b-0"
          >
            <div className="col-span-12 pb-2 font-mono text-[11px] uppercase tracking-label text-accent/80 sm:col-span-3 sm:pb-0">
              {group.category}
            </div>
            <div className="col-span-12 pb-2 text-[12.5px] text-fg sm:col-span-5 sm:pb-0">
              {group.items.join(" · ")}
            </div>
            <div className="col-span-12 text-[11px] leading-relaxed text-faint sm:col-span-4">
              {group.note}
            </div>
          </Reveal>
        ))}
      </div>

    </Section>
  );
}

SkillsLedger.propTypes = {
  skillGroups: PropTypes.arrayOf(skillGroupShape).isRequired,
  meta: sectionMetaShape.isRequired,
};
