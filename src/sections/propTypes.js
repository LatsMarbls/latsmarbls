import PropTypes from "prop-types";

export const profileShape = PropTypes.shape({
  name: PropTypes.string,
  first: PropTypes.string,
  last: PropTypes.string,
  role: PropTypes.string,
  company: PropTypes.string,
  location: PropTypes.string,
  email: PropTypes.string,
  quote: PropTypes.string,
  intro: PropTypes.string,
  availability: PropTypes.string,
});

export const metaShape = PropTypes.shape({
  tenure: PropTypes.string,
  coreStack: PropTypes.string,
  education: PropTypes.string,
});

export const navItemShape = PropTypes.shape({
  id: PropTypes.string,
  label: PropTypes.string,
  index: PropTypes.string,
});

export const socialShape = PropTypes.shape({
  label: PropTypes.string,
  href: PropTypes.string,
  handle: PropTypes.string,
});

export const responseArtifactShape = PropTypes.shape({
  endpoint: PropTypes.string,
  status: PropTypes.string,
  contentType: PropTypes.string,
  body: PropTypes.object,
});

export const skillGroupShape = PropTypes.shape({
  category: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.string),
  note: PropTypes.string,
});

export const practiceShape = PropTypes.shape({
  title: PropTypes.string,
  body: PropTypes.string,
  evidence: PropTypes.string,
});

export const jobShape = PropTypes.shape({
  company: PropTypes.string,
  role: PropTypes.string,
  period: PropTypes.string,
  current: PropTypes.bool,
  summary: PropTypes.string,
  bullets: PropTypes.arrayOf(PropTypes.string),
  stack: PropTypes.arrayOf(PropTypes.string),
});

export const educationItemShape = PropTypes.shape({
  institution: PropTypes.string,
  degree: PropTypes.string,
  period: PropTypes.string,
  distinction: PropTypes.string,
  coursework: PropTypes.arrayOf(PropTypes.string),
});

export const projectShape = PropTypes.shape({
  slug: PropTypes.string,
  index: PropTypes.string,
  title: PropTypes.string,
  summary: PropTypes.string,
  highlights: PropTypes.arrayOf(PropTypes.string),
  stack: PropTypes.arrayOf(PropTypes.string),
  repo: PropTypes.string,
  live: PropTypes.string,
  image: PropTypes.string,
  kind: PropTypes.string,
});

export const sectionMetaShape = PropTypes.shape({
  index: PropTypes.string,
  label: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
});

export const versionShape = PropTypes.shape({
  appVersion: PropTypes.string,
  releaseUrl: PropTypes.string,
  legacyUrl: PropTypes.string,
});
