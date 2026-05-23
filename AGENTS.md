# AGENTS.md — Kaizen IQ
## Agent Roles, Task Routing & Collaboration Protocol

---

## Overview

This project uses a multi-agent approach. Each agent has a defined scope.
Claude Code and Codex should route tasks to the right agent context before executing.

**Always read CLAUDE.md before reading this file.**
`CLAUDE.md` is the canonical source of truth. `Codex.MD` is a Codex-facing mirror and must remain synced to `CLAUDE.md`.

---

## Agent Roster

### 1. Design Agent
**File:** `agents/design-agent.md`
**Scope:** Visual decisions, layout, typography, color, spacing, SVG creation
**Trigger phrases:**
- "Does this look right?"
- "How should this section be laid out?"
- "Create the SVG for..."
- "Is this consistent with the design system?"
- "What should the [X] component look like?"

**This agent does NOT write production code.** It produces:
- Layout specifications
- SVG markup (reviewed before use)
- Color/spacing decisions with token references
- Annotated mockup descriptions

---

### 2. Dev Agent
**File:** `agents/dev-agent.md`
**Scope:** HTML, CSS, JavaScript implementation — translating design specs into working code
**Trigger phrases:**
- "Implement..."
- "Build the..."
- "Write the CSS for..."
- "Add the scroll reveal to..."
- "Make the nav sticky with..."

**Rules for Dev Agent:**
- NEVER use hardcoded hex values — always CSS variables from CLAUDE.md
- NEVER use external component libraries (no Bootstrap, no Tailwind, no shadcn)
- NEVER use icon libraries — SVG only, inline
- ALWAYS check that Google Fonts imports are present before adding font-family rules
- ALWAYS add `reveal` class + IntersectionObserver for any new section
- ALWAYS test that the layout works at 960px breakpoint
- Reference CLAUDE.md design tokens before writing any CSS
- If working in Codex, read Codex.MD only as a mirror of CLAUDE.md; resolve conflicts in favor of CLAUDE.md

---

### 3. QA Agent
**File:** `agents/qa-agent.md`
**Scope:** Review completed work against the design spec, catch regressions, validate responsiveness
**Trigger phrases:**
- "Review this section"
- "Does this pass the design check?"
- "Check for consistency"
- "Validate the nav behavior"
- "Is the gold used correctly here?"

**QA Checklist (run on every completed section):**
- [ ] No hardcoded color values in CSS (only `var(--x)` tokens)
- [ ] No border-radius > 2px
- [ ] No font-weight > 600
- [ ] Gold (#B8985A) used in ≤ 5 distinct contexts per page
- [ ] All section headings use Cormorant Garamond
- [ ] All body text uses Inter 300 or 400
- [ ] Overline pattern present at section start
- [ ] Reveals animate on scroll (not on load)
- [ ] Nav is fixed, blurred, collapses on mobile
- [ ] No stock images present anywhere
- [ ] SVG diagrams have exactly one animated element each
- [ ] All links are functional (no `href="#"` in production)
- [ ] Mobile layout tested at 375px and 768px

---

### 4. Copy Agent
**File:** `agents/copy-agent.md`
**Scope:** All written content — headlines, body copy, microcopy, CTA labels, metadata
**Trigger phrases:**
- "Write the copy for..."
- "How should this be worded?"
- "Suggest a headline for..."
- "Is this copy on-brand?"
- "Write meta description for..."

**Voice Rules:**
- Short sentences. One idea per sentence.
- No adverbs. No filler words ("leverage," "synergy," "unlock" are banned).
- Concrete before abstract. Lead with what you do, then why it matters.
- Kaizen is a philosophy, not a buzzword. Use it deliberately, not decoratively.
- Approved vocabulary: compound, architecture, leverage (sparingly), foresight, precision, deliberate, foundation, clarity, permanence
- Banned vocabulary: unlock, empower, revolutionize, seamless, robust, cutting-edge, world-class, next-generation

---

### 5. Claude Review Handoff Agent
**File:** `agents/claude-review-handoff-agent.md`
**Scope:** Compact handoff packets for Claude Code review after Codex completes work
**Trigger phrases:**
- "Prepare this for Claude review."
- "Make a Claude review handoff."
- "Give me the Claude prompt."
- "Review packet for Claude."
- "Token-friendly Claude handoff."
- "Claude will review this."

**Rules for Claude Review Handoff Agent:**
- Produce only a ready-to-paste Claude review request unless asked otherwise
- Target 250-500 words
- Use file paths and summaries instead of pasted code
- Include only the `CLAUDE.md` constraints relevant to the task
- Focus Claude on highest-risk review items
- Do not perform the review; prepare the packet for Claude

---

## Task Routing Map

| Task | Primary Agent | Consult |
|------|--------------|---------|
| New section layout | Design Agent | — |
| CSS implementation | Dev Agent | CLAUDE.md |
| New copy | Copy Agent | Design Agent |
| SVG diagram | Design Agent | Dev Agent |
| Mobile breakpoints | Dev Agent | QA Agent |
| Animation/motion | Dev Agent | Design Agent |
| Design review | QA Agent | CLAUDE.md |
| Nav/footer changes | Dev Agent | QA Agent |
| Contact form | Dev Agent | Copy Agent |
| Performance audit | QA Agent | — |
| Claude review handoff | Claude Review Handoff Agent | AGENTS.md |

---

## Session Protocol

### Starting a new session
```
1. Read CLAUDE.md
2. If using Codex, read Codex.MD to confirm Codex-specific alignment with CLAUDE.md
3. Read AGENTS.md
4. Identify which agent role applies to the current task
5. Read that agent's specific .md file
6. Execute
```

### Completing a session
```
State clearly:
- What was built/changed
- Which files were modified
- What CSS variables were used
- What remains to be done
- Any decisions that deviate from CLAUDE.md and why
- Whether Codex.MD remains synced if CLAUDE.md was changed
```

### Passing work to another agent
```
Format:
"Handing to [Agent]: [Section] is complete. 
Files modified: [list]. 
Next task: [description]. 
Open questions: [list or 'none']."
```

---

## Current Status Tracker

Update this section as work progresses.

| Section | Status | Agent | Notes |
|---------|--------|-------|-------|
| Nav | Designed | Design | Needs implementation |
| Hero (two-col) | Designed ✓ | Design | Approved by client |
| Narrative | Designed | Design | Needs implementation |
| How We Do It | Designed | Design | Needs implementation |
| AI in Action | Designed | Design | Needs implementation |
| Strategic Marketing | Designed | Design | Needs implementation |
| CTA section | Designed | Design | Needs implementation |
| Footer | Designed | Design | Needs implementation |
| Solutions page | Designed | Design | Needs implementation |
| Contact page | Not started | — | Brief in design-vision.md |
| Mobile responsive | Not started | Dev | After desktop complete |
| Page transitions | Not started | Dev | Low priority |

---

## Non-Negotiables

These decisions are locked. Do not reopen them without explicit client approval.

1. **Color palette is final.** No new colors. No tints or shades not listed in CLAUDE.md.
2. **Font pair is final.** Cormorant Garamond + Inter. No substitutions.
3. **No stock photography.** Ever. SVG diagrams only for visuals.
4. **Gold used sparingly.** If you add a sixth use of gold, remove one first.
5. **Hero layout is approved.** Two-column, asymmetric, headline left / logo + principles right.
6. **No rounded corners > 2px.**
7. **All borders 0.5px.** Not 1px.
