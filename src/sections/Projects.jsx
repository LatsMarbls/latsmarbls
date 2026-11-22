import { projects } from "../content/projects";
import { useDesign } from "../designs/DesignContext";
import ProjectsAlternating from "./projects/ProjectsAlternating";
import ProjectsCompact from "./projects/ProjectsCompact";
import ProjectsFeature from "./projects/ProjectsFeature";
import ProjectsGrid from "./projects/ProjectsGrid";
import ProjectsList from "./projects/ProjectsList";
import ProjectsMasonry from "./projects/ProjectsMasonry";

const meta = {
  index: "06",
  label: "Projects",
  title: "Things I've built",
  description:
    "Side projects and coursework that shaped how I build — auth systems, AI-backed apps and Laravel platforms with real data models behind them.",
};

const variants = [
  ProjectsList,
  ProjectsGrid,
  ProjectsAlternating,
  ProjectsCompact,
  ProjectsMasonry,
  ProjectsFeature,
];

export default function Projects() {
  const variant = useDesign("projects");
  const Variant = variants[variant % variants.length];
  return <Variant projects={projects} meta={meta} />;
}
