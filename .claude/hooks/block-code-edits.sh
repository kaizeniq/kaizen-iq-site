#!/usr/bin/env bash
# PreToolUse guard: Claude Code is the overseer/manager, not the code executor.
# All code changes hand off to Codex. This hook blocks Edit/Write/MultiEdit on
# code files while leaving documentation/context files (.md, settings, memory)
# editable, since those are the overseer's purview.

input="$(cat)"

# Extract the target file path from the tool input.
file_path="$(printf '%s' "$input" | /usr/bin/python3 -c 'import sys, json; d=json.load(sys.stdin); print(d.get("tool_input",{}).get("file_path",""))' 2>/dev/null)"

# No path? Allow (nothing to guard).
if [ -z "$file_path" ]; then
  exit 0
fi

case "$file_path" in
  # Code Codex owns — block these.
  *.html|*.htm|*.css|*.scss|*.sass|*.js|*.jsx|*.mjs|*.cjs|*.ts|*.tsx|*.vue|*.svelte|*.json|*.py|*.rb|*.php|*.go|*.rs|*.java|*.sh)
    # settings.json / launch.json / package.json are config the overseer may tune — allow.
    case "$file_path" in
      */settings.json|*/settings.local.json|*/launch.json|*/package.json|*/package-lock.json|*/tsconfig.json)
        exit 0
        ;;
    esac
    reason="BLOCKED: '$file_path' is a code file. Claude Code is the overseer/manager — it steers business context, strategy, SEO, and review. Codex is the executor for all code changes. Hand this edit off to Codex with a precise spec (file, location, exact change) instead of editing directly."
    printf '{"hookSpecificOutput":{"hookEventName":"PreToolUse","permissionDecision":"deny","permissionDecisionReason":%s}}' \
      "$(printf '%s' "$reason" | /usr/bin/python3 -c 'import sys, json; print(json.dumps(sys.stdin.read()))')"
    exit 0
    ;;
esac

# Everything else (docs, memory, config) — allow.
exit 0
