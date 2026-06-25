# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Repository Is

This is a challenge repository for the "GitHub Copilot Agents Rumble Pt. 2 — Challenge 2" event. The goal is to design and deliver a custom Copilot agent as a `*.agent.md` file. There is no application code — the deliverable is a well-crafted agent definition file.

## Repository Structure

- `agent-template.md` — Skeleton structure (frontmatter + body sections) to use as starting point
- `examples/agents/` — Reference agents showing expected style and detail level (do NOT modify these)
- `.github/agents/` — Delivery directory where participant agents go

## Agent File Format

An agent is a Markdown file with `.agent.md` extension composed of:

1. **YAML frontmatter** (between `---`) with required fields: `name`, `description`, `author` (participant's full name). Optional: `tools`, `model`.
2. **Markdown body** defining: role/purpose, competencies, operating mode, rules/constraints, communication style, examples.

## Delivery Workflow

```bash
git add .github/agents/<your-file>.agent.md
git commit -m "Aggiunto agente di <Nome Cognome>"
git push
```

## Key Rules

- The `author` field in frontmatter is mandatory — without it the submission is invalid
- A focused, well-instructed agent is valued over a generic "does everything" agent
- Agents are evaluated on: role clarity, instruction completeness, robustness (handling ambiguous/out-of-scope input), originality, and consistent tone
- Examples in `examples/agents/` are read-only references
