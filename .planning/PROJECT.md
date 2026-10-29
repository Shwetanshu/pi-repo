# todo-cli

## What This Is

A small Node.js command-line tool for managing a personal to-do list. Three commands —
`todo add`, `todo list`, and `todo done` — read and write a `todos.json` file in the current
directory. Built with Node built-ins only, no external dependencies.

## Core Value

Adding, listing, and completing to-dos from the terminal must be instant and require zero setup:
one JSON file, one command.

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] User can add a to-do item with `todo add "<text>"`
- [ ] User can list all items with `todo list`, with completed items visibly marked
- [ ] User can mark an item complete by ID with `todo done <id>`
- [ ] Item IDs are stable and never reused
- [ ] Data persists to `todos.json` in the current working directory
- [ ] `todos.json` is created automatically if absent on any command
- [ ] CLI uses only Node built-ins (no external dependencies)
- [ ] `todo done <unknown-id>` is a silent no-op

### Out of Scope

- `remove`, `clear`, `edit`, `reopen` commands — v1 surface is deliberately three commands
- Multiple named lists or projects — one `todos.json` per directory
- Sync, accounts, cloud storage — local file only
- Automated tests — user opted out for v1; verification is manual
- npm publishing / `bin` field — run from the repo, no publish step

## Context

Users run the CLI from the repository. Storage is per-directory, so each folder holds its own
list; running the same command from a different directory operates on a different `todos.json`.

## Constraints

- **Tech stack**: Node.js built-ins only (`node:fs`, `node:path`, `process.argv`) — no
  package dependencies.
- **Storage**: plain JSON at `./todos.json`.
- **Distribution**: run from repo; no publish step and no global install.
- **Data safety**: invalid JSON is reset silently. Accepted risk — a corrupt file loses
  existing items.

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Store `todos.json` in the current directory | Per-project lists, simple mental model | — Pending |
| Stable IDs, never reused | `todo done <id>` stays predictable as the list changes | — Pending |
| `done` marks completed and keeps the item | History stays visible in `todo list` | — Pending |
| `list` shows all items with completed marked | Single view, no extra flags needed | — Pending |
| Only `add` / `list` / `done` in v1 | Smallest useful surface | — Pending |
| Unknown ID on `done` is a silent no-op | User preference | — Pending |
| Always create `todos.json` if missing | Zero-setup first run | — Pending |
| Silent reset on corrupt JSON | User preference; accepted data-loss risk | — Pending |
| No automated tests | User preference for v1 | — Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd-transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd-complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-10-29 after initialization*
