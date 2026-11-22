import { meta, profile, responseArtifact, resumeHref } from "../content/site";
import { useDesign } from "../designs/DesignContext";
import HeroCentered from "./hero/HeroCentered";
import HeroMagazine from "./hero/HeroMagazine";
import HeroMinimal from "./hero/HeroMinimal";
import HeroSplit from "./hero/HeroSplit";
import HeroStack from "./hero/HeroStack";
import HeroTerminal from "./hero/HeroTerminal";

const variants = [
  HeroSplit,
  HeroCentered,
  HeroTerminal,
  HeroMagazine,
  HeroMinimal,
  HeroStack,
];

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
