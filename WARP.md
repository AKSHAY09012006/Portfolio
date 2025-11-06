# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project overview (big picture)
- This is a static, single‑page portfolio site.
- index.html contains the semantic sections and element IDs used by script.js to populate content.
- style.css defines the visual theme (glass cards, progress bars, tilt hover, scroll progress, reveal animations).
- script.js is data‑driven. Content is expressed as constants and then rendered into the DOM:
  - PROFILE, SKILLS, PROJECTS, CERTS, EXPERIENCE, EDUCATION hold all user content.
  - hydrateHero maps PROFILE to hero/contact/footer.
  - typing adds the headline typewriter effect from PROFILE.roles.
  - drawSkills renders skill cards; progress bar widths are animated when section is revealed.
  - makeCard is a small card factory reused by drawProjects and drawCerts.
  - drawTimeline renders EXPERIENCE and EDUCATION.
  - An IntersectionObserver toggles .visible and triggers skill bar animations when sections enter the viewport.
  - enableTilt adds a simple mouse‑position based 3D tilt to .tilt cards.
  - scrollProgress updates the top progress bar on scroll.
  - DOMContentLoaded boot sequence wires everything up.
- Assets are expected under assets/ (resume PDF, certificates, optional project demos, images). The HTML tolerates missing avatar via the onerror handler.

## Commands
There is no build system, linter, or tests configured. Use a simple static server for reliable local previews (PDF links, relative paths).

- Preview locally (choose one)
  - Python 3: `python -m http.server 5173`
  - Python launcher (Windows): `py -m http.server 5173`
  - Node (no install needed): `npx serve . -l 5173`
  - Then open http://localhost:5173

- Open directly (works in many browsers): double‑click index.html. If anything fails to load, use a local server as above.

## Editing content
- Most updates are data‑only in script.js:
  - PROFILE, SKILLS, PROJECTS, CERTS, EXPERIENCE, EDUCATION control all rendered content.
  - Keep asset paths in sync with files under assets/ (e.g., assets/certificates/… and assets/Akshay-Resume.pdf).
  - Replace placeholder values like PROFILE.github. Confirm PROFILE.email spelling.

## Deploy (GitHub Pages)
- Push this folder to a GitHub repository.
- In the repository: Settings → Pages → Source = main branch, / (root).
- After build completes, the site is served at https://<your-username>.github.io/<repo>/

## Notes for future changes
- The site intentionally has no framework or tooling. Prefer small, vanilla JS additions unless explicitly asked to add a build pipeline.
- IntersectionObserver and progress bar logic rely on the .reveal class being present on section containers; keep that convention if adding sections.
