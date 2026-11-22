import { practices } from "../content/practice";
import { useDesign } from "../designs/DesignContext";
import PracticeCards from "./practice/PracticeCards";
import PracticeList from "./practice/PracticeList";
import PracticeStack from "./practice/PracticeStack";

const meta = {
  index: "03",
  label: "Practice",
  title: "How I actually work",
  description:
    "Writing features is the easy part. These are the practices that decide whether a release is safe — each with something concrete behind it.",
};

const variants = [PracticeList, PracticeCards, PracticeStack];

export default function Practice() {
  const variant = useDesign("practice");
  const Variant = variants[variant % variants.length];
  return <Variant practices={practices} meta={meta} />;
}
