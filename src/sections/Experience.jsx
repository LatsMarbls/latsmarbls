import { education, experience } from "../content/history";
import { useDesign } from "../designs/DesignContext";
import ExperienceLedger from "./experience/ExperienceLedger";
import ExperienceRows from "./experience/ExperienceRows";
import ExperienceTimeline from "./experience/ExperienceTimeline";

const meta = {
  index: "04",
  label: "Experience",
  title: "Where I've worked",
  description:
    "Close to a year of production backend work, shipping secure and tested features for enterprise clients.",
};

const variants = [ExperienceRows, ExperienceTimeline, ExperienceLedger];

export default function Experience() {
  const variant = useDesign("experience");
  const Variant = variants[variant % variants.length];
  return <Variant experience={experience} education={education} meta={meta} />;
}
