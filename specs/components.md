# Component Specs — Kaizen IQ

This file extracts implementation-ready component guidance from `CLAUDE.md`. `CLAUDE.md` remains canonical.

---

## Global Tokens

Use CSS variables for all repeated values. Do not hardcode colors in component CSS.

Required color tokens:
```css
--bg: #0D1117;
--bg2: #101418;
--surface: #161B24;
--text: #F0EDE6;
--text-dim: rgba(240,237,230,0.50);
--text-mute: rgba(240,237,230,0.28);
--gold: #B8985A;
--gold-dim: rgba(184,152,90,0.35);
--gold-mute: rgba(184,152,90,0.12);
```

Typography:
- Display: Cormorant Garamond.
- Body: Inter.
- Do not use visible Arial, Roboto, or system-ui.
- Do not use font weights above 600.

Motion:
- Hover: 0.2s.
- Transitions: 0.4s.
- Reveals: 0.7s.
- Easing: `cubic-bezier(0.22, 1, 0.36, 1)`.
- Reveals should animate on scroll intersection, not page load.

---

## Navigation

Required behavior:
- Fixed at top.
- Height: `73px` through `--nav-h`.
- Frosted dark background with blur.
- Darker background on scroll.
- Wordmark left, links right.
- Mobile collapses to overlay.

Required visual rules:
- "kaizen" uses Inter 300, uppercase, tracked.
- "IQ" uses Cormorant 600 and `--gold`.
- Links use Inter 400, 11px, uppercase, tracked.
- Active link uses full `--text`.
- CTA link uses gold text and `--gold-dim` border; hover fills with `--gold`.
- Hamburger is two 0.5px lines, 22px wide.

---

## Overline

Pattern:
```text
[28px gold rule] [10px uppercase gold label, tracking 0.24em]
```

Use at the start of every major section.

---

## Hero

Desktop layout:
- Two columns.
- Left: overline, kana annotation, H1, subtitle, divider, body, CTA row.
- Right: enso SVG, principle rows, vertical decorative label.
- Divider between columns uses a 0.5px gold hairline.

Hero H1:
- `clamp(58px, 6.5vw, 84px)`.
- Cormorant Garamond 600.
- "Advantage." may use italic light styling.

Hero CTA:
- Primary button: "Begin the conversation".
- Secondary link: "Our solutions".

---

## Principle And Pillar Rows

Structure:
```text
[italic serif number] [uppercase label] [light body text]
```

Rules:
- Label minimum width: 140px on desktop.
- Border top: 0.5px `--gold-mute`.
- Last row also has bottom border.
- Body text remains light and quiet.

---

## Solution Blocks

Desktop:
- 50/50 grid.
- Alternating text and visual sides.
- Text side padding: 80px 72px.
- Visual side uses `--bg2`.
- Visual side minimum height: 380px.
- Divider between blocks: full-width 0.5px `--gold-mute`.

Content:
- Solution overline.
- H2.
- Two concise paragraphs.
- Tag list with gold-muted borders.
- Bespoke SVG diagram.

---

## SVG Diagrams

No stock photos. No icon libraries.

Required diagram concepts:
- Data Systems: pipeline flow diagram.
- ML & AI: scatter plot, trend line, forecast cone.
- Strategy: compound growth curve with quarterly markers.
- Market Impact: funnel diagram.

Rules:
- Use only project color tokens.
- Stroke widths: 0.3px to 1.5px.
- Include exactly one animated element per diagram.
- Animation should be subtle: pulsing circle or opacity loop.

---

## CTA

Required structure:
- Full-width section.
- `--bg` background.
- Six-column grid-line overlay with very subtle gold opacity.
- Centered content.
- Kana annotation: "前進 — advance without limits".
- H2: "Ready to compound your advantage?"
- 48px gold rule.
- Subtitle caption.
- Primary button: "Begin the conversation".

---

## Footer

Required structure:
- Wordmark.
- Primary links.
- Copyright.
- Same typography and color discipline as nav.

Do not add social icons or secondary decoration unless explicitly requested.

