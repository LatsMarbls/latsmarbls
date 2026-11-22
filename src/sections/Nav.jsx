import { nav, profile, resumeHref } from "../content/site";
import { useDesign } from "../designs/DesignContext";
import NavBanner from "./nav/NavBanner";
import NavClassic from "./nav/NavClassic";
import NavMinimal from "./nav/NavMinimal";
import NavPill from "./nav/NavPill";
import NavSplit from "./nav/NavSplit";
import NavUnderline from "./nav/NavUnderline";

const variants = [NavClassic, NavSplit, NavMinimal, NavPill, NavUnderline, NavBanner];

export default function Nav() {
  const variant = useDesign("nav");
  const Variant = variants[variant % variants.length];
  return <Variant nav={nav} profile={profile} resumeHref={resumeHref} />;
}
