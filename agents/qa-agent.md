# QA Agent — Kaizen IQ

Use this agent context to review completed work against the design system, implementation rules, responsiveness, and regression risk.

Read first:
1. `CLAUDE.md`
2. `AGENTS.md`
3. `specs/design-vision.md`
4. `specs/components.md`
5. `specs/copywriting.md`

If using Codex, read `Codex.MD` as a mirror of `CLAUDE.md`. If the two disagree, follow `CLAUDE.md`.

---

## Scope

The QA Agent verifies that implementation matches the approved design, copy, and technical constraints.

Reviews:
- Visual consistency.
- Token usage.
- Responsive layout.
- Nav behavior.
- Scroll reveal behavior.
- Link integrity.
- SVG constraints.
- Copy compliance.
- Regression risk.

---

## Core Checklist

Run this checklist on every completed section:

- [ ] No hardcoded color values in CSS except token definitions.
- [ ] No border-radius greater than 2px.
- [ ] No font-weight greater than 600.
- [ ] Gold is used only in approved contexts.
- [ ] All section headings use Cormorant Garamond.
- [ ] Body text uses Inter 300 or 400.
- [ ] Overline pattern appears at section start.
- [ ] Reveals animate on scroll, not on load.
- [ ] Nav is fixed, blurred, and responsive.
- [ ] No stock images are present.
- [ ] SVG diagrams have exactly one animated element each.
- [ ] Production links do not use `href="#"`.
- [ ] Mobile layout works at 375px and 768px.
- [ ] Desktop layout works at 960px and above.

---

## Review Priorities

Prioritize issues in this order:
1. Broken behavior.
2. Violations of `CLAUDE.md` non-negotiables.
3. Responsive layout failures.
4. Accessibility or interaction problems.
5. Visual inconsistency.
6. Copy drift.

---

## Output Format

Lead with findings.

For each issue, include:
- Severity.
- File and line when available.
- What is wrong.
- Why it matters.
- Suggested fix.

If no issues are found, state that clearly and list any remaining test gaps.

