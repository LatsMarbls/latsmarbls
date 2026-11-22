import { DESIGN_SECTIONS, DESIGN_VARIANTS } from "./registry";

const STORAGE_KEY = "lm-design-v2.1.0";

function getCounts() {
  const counts = {};
  for (const section of DESIGN_SECTIONS) {
    counts[section] = DESIGN_VARIANTS[section]?.length || 1;
  }
  return counts;
}

function isValidSelection(selection) {
  if (!selection || typeof selection !== "object") return false;
  return DESIGN_SECTIONS.every(
    (section) =>
      Number.isInteger(selection[section]) &&
      selection[section] >= 0 &&
      selection[section] < (DESIGN_VARIANTS[section]?.length || 1)
  );
}
// Retained for ?design= validation debugging; not used by the deterministic path.

function parseQueryOverride() {
  if (typeof window === "undefined") return null;

  const params = new URLSearchParams(window.location.search);
  const designParam = params.get("design");
  if (!designParam) return null;

  if (designParam === "shuffle" || designParam === "reset") {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch { /* ignore storage errors */ }
    return null;
  }

  const overrides = {};
  const parts = designParam.split(",");

  if (
    parts.length === DESIGN_SECTIONS.length &&
    parts.every((p) => /^\d+$/.test(p.trim()))
  ) {
    DESIGN_SECTIONS.forEach((section, i) => {
      overrides[section] = parseInt(parts[i].trim(), 10);
    });
    return overrides;
  }

  for (const part of parts) {
    const [key, value] = part.split(":");
    if (key && /^\d+$/.test(value?.trim())) {
      overrides[key.trim()] = parseInt(value.trim(), 10);
    }
  }

  return Object.keys(overrides).length ? overrides : null;
}

export const DEFAULT_DESIGN = {
  nav: 0,
  hero: 0,
  skills: 0,
  practice: 0,
  experience: 0,
  projects: 5,
  contact: 0,
  footer: 3,
};

function generateSelection(overrides = {}) {
  const counts = getCounts();
  const selection = {};
  for (const section of DESIGN_SECTIONS) {
    const wanted = overrides[section] ?? DEFAULT_DESIGN[section] ?? 0;
    selection[section] =
      ((wanted % counts[section]) + counts[section]) % counts[section];
  }
  return selection;
}

export function getDesignSelection() {
  // Deterministic by default: every visitor sees the reviewed design.
  // Exploratory combinations are opt-in via ?design=... for review only.
  const overrides = parseQueryOverride();
  return generateSelection(overrides || {});
}

export function shuffleDesign() {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch { /* ignore storage errors */ }
  window.location.reload();
}

export function getDesignLabels(selection) {
  const names = DESIGN_VARIANTS;
  return DESIGN_SECTIONS.reduce((acc, section) => {
    acc[section] = names[section]?.[selection[section]] || String(selection[section]);
    return acc;
  }, {});
}

export function getDesignSummary(selection) {
  const labels = getDesignLabels(selection);
  return DESIGN_SECTIONS.map((section) => `${section}:${labels[section]}`).join(" · ");
}
