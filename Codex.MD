# Codex.MD — Kaizen IQ Website
## Codex-facing mirror of CLAUDE.md

Read `CLAUDE.md` first before touching any code. `CLAUDE.md` is the canonical source of truth for design decisions, implementation rules, and agent responsibilities.

This file exists so Codex can operate in lock step with Claude Code. If this file and `CLAUDE.md` ever disagree, follow `CLAUDE.md` and update this file to match.

---

## Project Identity

**Company:** Kaizen IQ (Kaizen One Inc.)
**Tagline:** The Next Advantage
**Philosophy:** 改善 — continuous improvement
**Location:** Tampa Bay, FL
**Positioning:** Palantir-precision × Apple-restraint × wealth-signaling × Japanese craftsmanship
**Core concept:** "Kaizen" — every design and code decision should compound. Nothing is throwaway.

---

## Design North Star

> "Bold but minimal. Not cookie-cutter perfect — beautifully and perfectly executed. The pride of a Japanese craftsman."

Every UI decision is filtered through this question:
**Does this look like it was made with intention, or does it look generated?**

If it looks generated → redo it.

---

## Tech Stack

Confirm actual stack by reading the repo before editing. Likely candidates:
- Static HTML/CSS/JS → serve via Netlify or Vercel
- Or Next.js / React → check for `package.json`, `next.config.js`

If static: edit `.html` and `.css` files directly.
If Next.js: components live in `/components`, pages in `/pages` or `/app`.

**Never assume the stack. Read the repo first.**

---

## Design System

### Color Tokens
```
--bg:        #0D1117   /* primary background — deep navy, not pure black */
--bg2:       #101418   /* alternate section background */
--surface:   #161B24   /* card/surface background */
--text:      #F0EDE6   /* primary text — warm off-white, not pure white */
--text-dim:  rgba(240,237,230,0.50)   /* secondary text */
--text-mute: rgba(240,237,230,0.28)   /* tertiary / labels */
--gold:      #B8985A   /* THE accent — used sparingly */
--gold-dim:  rgba(184,152,90,0.35)    /* borders, rules */
--gold-mute: rgba(184,152,90,0.12)    /* subtle dividers */
```

**Gold discipline:** Use `--gold` in exactly these contexts:
1. The wordmark "IQ" suffix
2. Overline rules and labels
3. The kana/Japanese character annotations
4. CTA button fill (primary action only)
5. Logo/enso SVG strokes
6. Tag borders on solution cards

Nowhere else. If you're tempted to add gold somewhere new, don't.

### Typography
```
Display font:  'Cormorant Garamond' — serif, loaded from Google Fonts
Body font:     'Inter' — sans-serif, loaded from Google Fonts

Font weights in use:
  Cormorant: 300 (light), 300 italic, 400, 600
  Inter:     300 (light), 400, 500

NEVER use: Arial, Roboto, system-ui as visible text fonts
NEVER use: font-weight 700 or 800 — this design uses contrast, not weight, for hierarchy
```

### Type Scale
```
Hero H1:       clamp(58px, 6.5vw, 84px) — Cormorant 600
Page H1:       clamp(48px, 6vw, 80px)   — Cormorant 600
Section H2:    clamp(40px, 5vw, 62px)   — Cormorant 600
Solution H2:   clamp(32px, 3.5vw, 48px) — Cormorant 600
Card H3:       22px                      — Cormorant 600
Card H4:       18px                      — Cormorant 600
Overline:      10px, tracking 0.24em, uppercase — Inter 400
Body:          14–15px, line-height 1.85–1.9  — Inter 300
Caption/tags:  10–12px, tracking 0.16–0.24em  — Inter 400
```

### Spacing System
```
Section padding (desktop): 120px top/bottom, 48px sides
Section padding (mobile):  72px top/bottom, 24px sides
Max content width:         1200px (solutions list: 1400px)
Grid gap (two-col):        64–80px
Component padding:         28–48px
```

### Border & Line Language
```
All borders: 0.5px — never 1px for structural lines
Border color: var(--gold-mute) or var(--gold-dim)
Border radius: 2px maximum — this design does not round things
Dividers: horizontal rules at 0.5px, 28–48px wide, gold-dim
```

### Motion
```
Easing:    cubic-bezier(0.22, 1, 0.36, 1)  — fast out, no bounce
Duration:  0.2s hover, 0.4s transitions, 0.7s reveal animations
Reveals:   opacity 0→1 + translateY(24px→0) on scroll intersection
Pulses:    SVG animated circles on data diagrams (2–3s, opacity loop)
Scrollbar: custom, 2px wide, gold-dim color
```

---

## Layout Principles

### The Grid
- Two-column grid with a `0.5px gold-mute` hairline divider — not a gap
- Left column: argument (text, narrative)
- Right column: symbol, proof, or visual
- Asymmetric but balanced — columns are equal width but content weight differs

### Hierarchy Rule
Every section has exactly one thing that is loudest. Not two. One.
- Hero: "The Next Advantage." headline
- How section: the step number (huge, italic, ghost)
- Solutions: the solution name
- CTA: the main heading

### What Is Forbidden
- Centered hero layout (the current site does this — it must change)
- Rounded cards with drop shadows
- Stock photography (Tokyo at night, glowing AI trees, laptop-on-desk)
- Blue gradients or purple anything
- Bold text used for emphasis more than twice per paragraph
- Icon libraries (Heroicons, FontAwesome) — use bespoke SVG only
- Animations that bounce, spring, or overshoot

---

## Pages

### index.html (Home)
Sections in order:
1. **Nav** — fixed, frosted blur, wordmark left, links right
2. **Hero** — two-column, headline left / enso logo + principles right
3. **Narrative** — "Complexity into clarity" — two-col text grid
4. **How We Do It** — three horizontal steps with ghost numbers
5. **AI in Action** — "Anticipate. Automate. Assure." — label col + card grid
6. **Strategic Marketing** — text left, pillars list right
7. **CTA** — full-width centered, grid-line texture background
8. **Footer** — wordmark, links, copyright

### solutions.html
Sections in order:
1. **Nav** (same component)
2. **Page Hero** — left-aligned, large headline
3. **Solution Blocks** — alternating left/right, text + SVG diagram pairs:
   - 01 Data Systems & Architecture
   - 02 Data Science, ML & AI
   - 03 Strategic Insight & Growth
   - 04 Market Impact & Positioning
4. **CTA** (same component as home)
5. **Footer** (same component)

### contact.html (to be built)
- Simple, intentional
- No contact form that looks like a form — styled as a dialogue
- Fields: Name, Company, What you're working on (textarea), How you found us
- No CAPTCHA visible to user
- Gold CTA button: "Send the signal"

---

## Component Specs

### Nav
```
Height:          73px (var --nav-h)
Background:      rgba(13,17,23,0.92) + backdrop-filter: blur(12px)
On scroll:       background darkens to rgba(13,17,23,0.98)
Wordmark:        "kaizen" (Inter 300, uppercase, tracking) + "IQ" (Cormorant 600, gold)
Links:           Inter 400, 11px, tracking 0.16em, uppercase, color text-dim
Active link:     color text (full brightness)
CTA link:        gold color, gold-dim border, 2px radius — fills gold on hover
Mobile:          hamburger (two lines, 0.5px, 22px wide), nav collapses to overlay
```

### Overline Pattern
```
[28px gold rule] [10px uppercase gold label, tracking 0.24em]
Used at the start of every section to establish context before the heading
```

### Hero Two-Column
```
Left:
  - Overline
  - Kana annotation (Cormorant italic 300, 12px, tracking 0.32em, gold 55% opacity)
  - H1 with italic light "Advantage." on second line
  - Subtitle (Inter 11px uppercase, muted)
  - 48px gold divider rule
  - Body paragraph
  - CTA row: primary button + ghost link

Right:
  - Enso SVG logo (160×160, top left of column)
  - Three principle rows (number / title / description)
  - Vertical label rotated 90° (decorative, very muted)
  - Gold hairline border separating columns
```

### Principle Row / Pillar Row
```
[italic serif number] [uppercase label, min-width 140px] [light body text]
Border-top: 0.5px gold-mute
Last child also has border-bottom
```

### Solution Block
```
Desktop: 50/50 grid — text side + visual side
Text side: padding 80px 72px, sol-overline, H2, two paragraphs, tag list
Visual side: dark bg2, centered SVG diagram, min-height 380px
Alternates: odd blocks = text left / visual right; even = visual left / text right
Divider between blocks: full-width 0.5px gold-mute line
```

### SVG Diagrams (no stock photos)
Replace all stock images with bespoke SVG data visualizations:
- **Data Systems:** pipeline flow diagram (nodes → pipeline box → outputs)
- **ML & AI:** scatter plot with trend line and forecast cone
- **Strategy:** compound growth curve with quarterly markers
- **Market Impact:** funnel diagram (Acquire → Engage → Retain)

All SVGs use only `--gold` colors, `0.3–1.5px` stroke widths, subtle opacity variations.
Include one animated element per diagram (pulsing circle, opacity loop).

### CTA Section
```
Background: var(--bg) with 6-column grid line overlay (gold 4% opacity)
Content (centered):
  - Kana annotation: "前進 — advance without limits"
  - H2: "Ready to compound your advantage?"
  - 48px gold rule
  - Subtitle caption
  - Primary button: "Begin the conversation"
```

---

## Copy (Approved — Do Not Rewrite Without Permission)

**Hero headline:** The Next Advantage.
**Hero subhead:** Intelligence compounded over time
**Hero body:** Data is no longer exhaust — it's leverage. Kaizen IQ partners with leaders to design data systems, AI capabilities, and growth strategies that shape the future of their business. Complexity becomes clarity. Ambition becomes results.
**Primary CTA:** Begin the conversation
**Secondary CTA:** Our solutions
**Kana annotation (hero):** 改善 — continuous improvement
**Kana annotation (CTA):** 前進 — advance without limits
**Solutions page H1:** Design Intelligence. Drive Growth.
**Solutions subhead:** Discover how intelligence is designed and deployed across real scenarios.

---

## File Structure (Target)
```
/
├── CLAUDE.md              ← canonical source of truth
├── Codex.MD               ← Codex-facing mirror of CLAUDE.md
├── AGENTS.md              ← agent roles and task routing
├── index.html
├── solutions.html
├── contact.html
├── style.css
├── main.js
├── assets/
│   ├── logo/
│   │   └── kaizen-iq-logo.png
│   └── favicon/
├── specs/
│   ├── design-vision.md
│   ├── components.md
│   └── copywriting.md
└── agents/
    ├── design-agent.md
    ├── dev-agent.md
    ├── qa-agent.md
    ├── copy-agent.md
    └── claude-review-handoff-agent.md
```

---

## What Good Looks Like

When a section is done correctly, it should pass this test:
1. Remove all the text. Does the layout still look intentional? (Yes = good)
2. Does any element look "default"? (No = good)
3. Could this belong on a Palantir, Apple, or Bloomberg Terminal screen? (Yes = good)
4. Is the gold used in more than 5 places on this page? (No = good)
5. Are there any rounded corners larger than 2px? (No = good)

---

## Agent Handoff Protocol

When passing work between agents or sessions:
1. State which section/component was completed
2. State which CSS variables were used (no hardcoded hex values)
3. State any deviations from this spec and why
4. List what remains to be done

Always reference `CLAUDE.md` at the start of a new session with:
`"Read CLAUDE.md, then [task]."`
