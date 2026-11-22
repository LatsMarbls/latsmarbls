import { nav, profile, socials } from "../content/site";
import {
  APP_VERSION,
  LEGACY_URL,
  RELEASE_URL,
} from "../content/version";
import { useDesign } from "../designs/DesignContext";
import FooterBar from "./footer/FooterBar";
import FooterColumns from "./footer/FooterColumns";
import FooterCta from "./footer/FooterCta";
import FooterGrid from "./footer/FooterGrid";
import FooterMinimal from "./footer/FooterMinimal";
import FooterSignature from "./footer/FooterSignature";

const variants = [
  FooterColumns,
  FooterBar,
  FooterCta,
  FooterMinimal,
  FooterSignature,
  FooterGrid,
];

export default function Footer() {
  const variant = useDesign("footer");
  const Variant = variants[variant % variants.length];
  const version = {
    appVersion: APP_VERSION,
    releaseUrl: RELEASE_URL,
    legacyUrl: LEGACY_URL,
  };
  return <Variant profile={profile} nav={nav} socials={socials} version={version} />;
}
