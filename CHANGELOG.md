# Changelog

All notable changes to this portfolio are documented in this file.

## [2.1.1] — 2026-11-22

### Fixed
- Removed duplicated "Let's build something useful." heading and "Email me" CTA from the `FooterCta` variant so it no longer repeats the Contact section.
- Changed the Hero email CTA from "Email me" to "Say hello" to avoid duplicating the Contact section CTA.
- Removed the location and stack sentence from `HeroSplit` to avoid repeating the Contact "Based in" panel and the Core stack stat.

## [2.1.0] — 2026-11-22

### Added
- Randomized design variants for Nav, Hero, Skills, Practice, Experience, Projects, Contact and Footer (3 variants each).
- `localStorage` cache (`lm-design-v2.1.0`) keeps the same design selection across visits.
- `?design=shuffle` query parameter forces a new random selection.
- `?design=nav:1,hero:2,...` override for testing a specific variant combination.
- `DesignContext` / `useDesign(section)` hook for variant selection.
- Selected design names shown in the intro readout.

### Changed
- Section files are now thin wrappers that import presentational variants from `src/sections/<section>/`.
- All variants share the same content and anchor IDs, keeping swarm capture compatible.

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
