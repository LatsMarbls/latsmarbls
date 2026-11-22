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

function generateSelection(overrides = {}) {
  const counts = getCounts();
  const selection = {};
  for (const section of DESIGN_SECTIONS) {
    if (overrides[section] !== undefined) {
      selection[section] = ((overrides[section] % counts[section]) + counts[section]) % counts[section];
    } else {
      selection[section] = Math.floor(Math.random() * counts[section]);
    }
  }
  return selection;
}

export function getDesignSelection() {
  if (typeof window === "undefined") {
    return generateSelection();
  }

  const overrides = parseQueryOverride();
  if (overrides) {
    const selection = generateSelection(overrides);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(selection));
    } catch { /* ignore storage errors */ }
    return selection;
  }

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (isValidSelection(parsed)) return parsed;
    }
  } catch { /* ignore storage errors */ }

  const selection = generateSelection();
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(selection));
  } catch { /* ignore storage errors */ }
  return selection;
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
