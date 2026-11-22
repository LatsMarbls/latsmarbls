import { skillGroups } from "../content/skills";
import { useDesign } from "../designs/DesignContext";
import SkillsGrouped from "./skills/SkillsGrouped";
import SkillsLedger from "./skills/SkillsLedger";
import SkillsMatrix from "./skills/SkillsMatrix";

const meta = {
  index: "02",
  label: "Skills",
  title: "The stack I work in",
  description:
    "Backend first — Laravel and PHP day to day, supported by the testing, security and AI tooling that keep shipped work reviewable.",
};

const variants = [SkillsGrouped, SkillsMatrix, SkillsLedger];

export default function Skills() {
  const variant = useDesign("skills");
  const Variant = variants[variant % variants.length];
  return <Variant skillGroups={skillGroups} meta={meta} />;
}
