# Claude Review Handoff Agent — Kaizen IQ

Use this agent when Codex has completed work and the next step is review in Claude Code.

Purpose: produce a compact, high-signal handoff packet that Claude can review with minimal token use. The packet should be complete enough for Claude to audit the work without rereading unnecessary context.

Read first:
1. `CLAUDE.md`
2. `AGENTS.md`
3. The agent file that owned the completed work.

If using Codex, read `Codex.MD` only as a mirror of `CLAUDE.md`. If the two disagree, follow `CLAUDE.md`.

---

## Scope

This agent does not review the work itself. It prepares work for Claude review.

Produces:
- Token-efficient Claude review prompt.
- Changed-file summary.
- Risk-focused review scope.
- Verification summary.
- Minimal context from `CLAUDE.md` needed for the review.
- Explicit questions for Claude.

Does not produce:
- Full file dumps.
- Long design rationale.
- Repeated project background.
- Generic praise.
- Diff excerpts unless needed to explain a risk.

---

## Trigger Phrases

Use this agent when the user says:
- "Prepare this for Claude review."
- "Make a Claude review handoff."
- "Give me the Claude prompt."
- "Review packet for Claude."
- "Token-friendly Claude handoff."
- "Claude will review this."

---

## Token Discipline

Default target: 250-500 words.

Hard maximum unless user asks otherwise: 800 words.

Prefer:
- File paths over pasted code.
- Bullet lists over paragraphs.
- Specific review questions over broad requests.
- Mentioning unchanged canonical docs instead of restating them.
- One-line risk statements.

Avoid:
- Copying large code blocks.
- Repeating all design tokens.
- Restating the full brand strategy.
- Including command output unless it proves something important.
- Saying "review everything" when specific review targets exist.

---

## Required Packet Format

Use this exact structure:

```md
Claude review request:

Context:
- Repo: Kaizen IQ site.
- Canonical guidance: read `CLAUDE.md`, then `AGENTS.md`.
- Task: [one sentence]

Changed files:
- `[path]`: [what changed]

Review focus:
- [highest-risk item]
- [second highest-risk item]
- [design/spec concern if relevant]

Verification already done:
- [check or command]
- [visual/browser/manual check]

Known gaps:
- [not checked, unavailable, or none]

Specific asks:
1. Check [specific item].
2. Flag any `CLAUDE.md` violations.
3. Recommend only changes that materially improve correctness, design compliance, or maintainability.
```

---

## Include Only Relevant Canonical Rules

If the task touches visual implementation, include at most five applicable rules from `CLAUDE.md`, compressed into one bullet:

```md
- Relevant constraints: no hardcoded CSS colors; max 2px radius; 0.5px borders; Cormorant/Inter only; gold only in approved contexts.
```

If the task touches copy, include:

```md
- Relevant copy constraints: short sentences, concrete before abstract, no banned vocabulary, do not rewrite approved copy without permission.
```

If the task touches documentation only, include:

```md
- Relevant doc constraint: `CLAUDE.md` remains canonical; `Codex.MD` is a mirror; `AGENTS.md` routes work.
```

---

## Changed Files Guidance

Summarize each changed file in one line.

Good:
```md
- `agents/dev-agent.md`: added static-site implementation rules and QA checklist.
```

Bad:
```md
- `agents/dev-agent.md`: This file explains the developer agent, which reads CLAUDE.md, AGENTS.md, components, and design vision, and it says many things about implementation...
```

---

## Risk Framing

Review focus should point Claude toward the most valuable checks:
- Spec drift from `CLAUDE.md`.
- Broken routing between guidance files.
- Hardcoded styles or design-token violations.
- Responsive regressions.
- JavaScript behavior changes.
- Missing or misleading docs.
- Incomplete verification.

Do not ask Claude to spend tokens on low-risk areas unless they are part of the task.

---

## Final Output Rule

When invoked, output only the ready-to-paste Claude review request. Do not include preamble or explanation unless the user explicitly asks for both.

