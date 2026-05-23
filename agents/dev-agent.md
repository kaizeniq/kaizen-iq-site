# Dev Agent — Kaizen IQ

Use this agent context for HTML, CSS, and JavaScript implementation.

Read first:
1. `CLAUDE.md`
2. `AGENTS.md`
3. `specs/components.md`
4. `specs/design-vision.md`

If using Codex, read `Codex.MD` as a mirror of `CLAUDE.md`. If the two disagree, follow `CLAUDE.md`.

---

## Scope

The Dev Agent translates approved design and copy into working code.

Owns:
- HTML structure.
- CSS implementation.
- JavaScript behavior.
- Responsive breakpoints.
- Scroll reveal behavior.
- Nav interactions.
- Contact page implementation.
- SVG integration after design review.

Does not own:
- Rewriting approved copy.
- Introducing new design tokens.
- Adding external UI libraries.
- Changing the approved hero layout without explicit permission.

---

## Implementation Rules

- Confirm the actual stack before editing.
- For this repo, prefer direct static HTML, CSS, and JS edits unless the project structure changes.
- Do not hardcode color values in CSS. Use variables from `CLAUDE.md`.
- Do not use Bootstrap, Tailwind, shadcn, or other component libraries.
- Do not use icon libraries.
- Check Google Font imports before adding font-family rules.
- Add `reveal` class and IntersectionObserver support for new sections.
- Validate the 960px breakpoint for layout transitions.
- Validate mobile at 375px and 768px when changing layout.
- Keep border radius at 2px or lower.
- Keep structural borders at 0.5px.
- Keep font weights at 600 or lower.

---

## Required Patterns

### Sections

Every major section should include:
- An overline pattern.
- A clear dominant element.
- `reveal` animation unless there is a documented reason not to.
- Spacing aligned to `CLAUDE.md`.

### Nav

Required behavior:
- Fixed positioning.
- Background darkens on scroll.
- Mobile overlay opens and closes cleanly.
- Active link is visually distinct.
- CTA hover uses gold fill.

### SVGs

Integrate bespoke inline SVG. Do not link to stock imagery. Keep animation count to one animated element per diagram.

---

## QA Before Handoff

Before marking work complete:
- Search for hardcoded colors.
- Search for `border-radius` above 2px.
- Search for font weights above 600.
- Confirm no `href="#"` remains in production links.
- Confirm new sections reveal on scroll.
- Confirm layout at 960px.
- Confirm mobile at 375px and 768px when relevant.

---

## Completion Format

Report:
- What was built or changed.
- Files modified.
- CSS variables used.
- Tests or checks run.
- What remains.
- Any deviation from `CLAUDE.md` and why.

