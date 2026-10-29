<!-- GSD:project-start source:PROJECT.md -->

## Project

**todo-cli**

A small Node.js command-line tool for managing a personal to-do list. Three commands —
`todo add`, `todo list`, and `todo done` — read and write a `todos.json` file in the current
directory. Built with Node built-ins only, no external dependencies.

**Core Value:** Adding, listing, and completing to-dos from the terminal must be instant and require zero setup:
one JSON file, one command.

### Constraints

- **Tech stack**: Node.js built-ins only (`node:fs`, `node:path`, `process.argv`) — no
  package dependencies.
- **Storage**: plain JSON at `./todos.json`.
- **Distribution**: run from repo; no publish step and no global install.
- **Data safety**: invalid JSON is reset silently. Accepted risk — a corrupt file loses
  existing items.
<!-- GSD:project-end -->

<!-- GSD:stack-start source:STACK.md -->

## Technology Stack

Technology stack not yet documented. Will populate after codebase mapping or first phase.
<!-- GSD:stack-end -->

<!-- GSD:conventions-start source:CONVENTIONS.md -->

## Conventions

Conventions not yet established. Will populate as patterns emerge during development.
<!-- GSD:conventions-end -->

<!-- GSD:architecture-start source:ARCHITECTURE.md -->

## Architecture

Architecture not yet mapped. Follow existing patterns found in the codebase.
<!-- GSD:architecture-end -->

<!-- GSD:skills-start source:skills/ -->

## Project Skills

No project skills found. Add skills to any of: `.claude/skills/`, `.agents/skills/`, `.cursor/skills/`, `.github/skills/`, or `.codex/skills/` with a `SKILL.md` index file.
<!-- GSD:skills-end -->

<!-- GSD:workflow-start source:GSD defaults -->

## GSD Workflow Enforcement

Before using Edit, Write, or other file-changing tools, start work through a GSD command so planning artifacts and execution context stay in sync.

Use these entry points:
- `/gsd-fast` for a trivial task inline, with no subagents and no PLAN.md
- `/gsd-quick` for small fixes, doc updates, and ad-hoc tasks
- `/gsd-debug` for investigation and bug fixing
- `/gsd-execute-phase` for planned phase work

Do not make direct repo edits outside a GSD workflow unless the user explicitly asks to bypass it.
<!-- GSD:workflow-end -->

<!-- GSD:profile-start -->

## Developer Profile

> Profile not yet configured. Run `/gsd-profile-user` to generate your developer profile.
> This section is managed by `generate-claude-profile` -- do not edit manually.
<!-- GSD:profile-end -->
