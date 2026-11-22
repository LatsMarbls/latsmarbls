import { useEffect, useState } from "react";

const ids = [
  "home",
  "skills",
  "practice",
  "experience",
  "education",
  "projects",
  "contact",
];

const useActiveSection = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return active;
};

export default useActiveSection;
