import { nav, profile, resumeHref } from "../content/site";
import { useDesign } from "../designs/DesignContext";
import NavClassic from "./nav/NavClassic";
import NavMinimal from "./nav/NavMinimal";
import NavSplit from "./nav/NavSplit";

const variants = [NavClassic, NavSplit, NavMinimal];

export default function Nav() {
  const variant = useDesign("nav");
  const Variant = variants[variant % variants.length];
  return <Variant nav={nav} profile={profile} resumeHref={resumeHref} />;
}
