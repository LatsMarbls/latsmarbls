import { profile, socials } from "../content/site";
import { useDesign } from "../designs/DesignContext";
import ContactCentered from "./contact/ContactCentered";
import ContactSplit from "./contact/ContactSplit";
import ContactTerminal from "./contact/ContactTerminal";

const variants = [ContactSplit, ContactCentered, ContactTerminal];

export default function Contact() {
  const variant = useDesign("contact");
  const Variant = variants[variant % variants.length];
  return <Variant profile={profile} socials={socials} />;
}
