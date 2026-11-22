import { meta, profile, responseArtifact, resumeHref } from "../content/site";
import { useDesign } from "../designs/DesignContext";
import HeroCentered from "./hero/HeroCentered";
import HeroSplit from "./hero/HeroSplit";
import HeroTerminal from "./hero/HeroTerminal";

const variants = [HeroSplit, HeroCentered, HeroTerminal];

export default function Hero() {
  const variant = useDesign("hero");
  const Variant = variants[variant % variants.length];
  return (
    <Variant
      profile={profile}
      meta={meta}
      responseArtifact={responseArtifact}
      resumeHref={resumeHref}
    />
  );
}
