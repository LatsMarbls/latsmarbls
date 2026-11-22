import { nav, profile } from "../content/site";
import {
  APP_VERSION,
  LEGACY_URL,
  RELEASE_URL,
} from "../content/version";
import { useDesign } from "../designs/DesignContext";
import FooterBar from "./footer/FooterBar";
import FooterColumns from "./footer/FooterColumns";
import FooterCta from "./footer/FooterCta";

const variants = [FooterColumns, FooterBar, FooterCta];

export default function Footer() {
  const variant = useDesign("footer");
  const Variant = variants[variant % variants.length];
  const version = {
    appVersion: APP_VERSION,
    releaseUrl: RELEASE_URL,
    legacyUrl: LEGACY_URL,
  };
  return <Variant profile={profile} nav={nav} version={version} />;
}
