export const profile = {
  name: "Latrell Marable",
  first: "Latrell",
  last: "Marable",
  role: "Backend Developer",
  company: "PRAXXYS Solutions Inc.",
  since: "January 2026",
  location: "Taytay, Rizal — Philippines",
  email: "latrellmarable00@gmail.com",
  quote: "Let's make ideas into reality.",
  intro:
    "I build Laravel systems for enterprise clients. Security, testing and code review are part of the work, not a pass at the end.",
  availability: "Open to backend, security and platform work.",
};

export const meta = {
  tenure: "10 months",
  coreStack: "Laravel · MySQL · Pest",
  education: "Cum Laude · GWA 1.4",
};

export const nav = [
  { id: "skills", label: "Skills", index: "02" },
  { id: "practice", label: "Practice", index: "03" },
  { id: "experience", label: "Experience", index: "04" },
  { id: "education", label: "Education", index: "05" },
  { id: "projects", label: "Projects", index: "06" },
  { id: "contact", label: "Contact", index: "07" },
];

export const socials = [
  { label: "GitHub", href: "https://github.com/latsmarbls", handle: "latsmarbls" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/latrell-marable-b43a37256/",
    handle: "latrell-marable",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/latrell.r.marable",
    handle: "latrell.r.marable",
  },
  { label: "Instagram", href: "https://www.instagram.com/latsmarbls/", handle: "latsmarbls" },
];

export const resumeHref = "/resume.pdf";

export const responseArtifact = {
  endpoint: "GET /api/v1/me",
  status: "200 OK",
  contentType: "application/json",
  body: {
    name: "Latrell Marable",
    role: "backend_developer",
    company: "PRAXXYS Solutions Inc.",
    focus: ["laravel", "application_security", "testing"],
    location: "Taytay, Rizal PH",
    status: "open_to_backend_work",
  },
};
