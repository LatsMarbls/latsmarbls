/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "Inter", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      colors: {
        night: "#08090B",
        panel: "#0D0F12",
        panel2: "#111417",
        line: "#1C2026",
        linesoft: "#14171B",
        fg: "#E7E9EC",
        dim: "#8A919C",
        faint: "#6E7681",
        accent: "#C9F25D",
        accentdim: "#8FA93F",
      },
      fontSize: { "2xs": "10px", xsm: "11px" },
      maxWidth: { shell: "1240px" },
      letterSpacing: { label: "0.18em" },
      transitionTimingFunction: { out: "cubic-bezier(0.22, 1, 0.36, 1)" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
