# Changelog

All notable changes to this portfolio are documented in this file.

## [2.0.0] — 2026-11-22

### Added
- Prompt-style intro loading screen that simulates a build command before the page is drawn.
- Cursor swarm rebuild overlay (`public/swarm.js`) that tours and draws the page in real time.
- Tour mode enabled by default with auto-scroll to the footer.
- Skip button and "Please wait until the AI finishes" HUD.
- New section-based layout: Hero, Skills, Practice, Experience, Education, Projects, Contact.
- `src/content/` data layer for site copy, skills, projects and history.
- Footer version badge linking to the release and the v1 archive.
- Reduced-motion safe paths for the intro and swarm.

### Changed
- Full visual redesign on a dark, token-driven palette.
- Swarm default speed set to 2×.
- Replaced the legacy component tree with `src/sections/` and `src/ui/`.
- Logo updated to the white `LM.svg` monogram in the nav and footer.

### Removed
- Legacy GitHub Pages deploy scripts and `gh-pages` dependency.

## [1.0.0] — 2026-07-14

- Initial portfolio release.
