# Todo CLI

## What This Is

A zero-dependency Node.js command-line tool for managing a simple to-do list. Users run `todo add "buy milk"`, `todo list`, and `todo done 1` from a terminal; items persist to a local `todos.json` file. Built with Node built-ins only — no external packages, no build step, no database.

## Core Value

`todo add` followed by `todo list` must work flawlessly on a clean Node install, with data surviving between invocations. If nothing else works, adding and seeing a task must.

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] `todo add "<text>"` appends a new incomplete item and prints its assigned ID
- [ ] `todo list` prints all items as plain aligned text, e.g. `1. [ ] buy milk`
- [ ] `todo done <id>` marks the given item complete and confirms it
- [ ] Items persist to `./todos.json` in the current working directory
- [ ] Each item stores only `{ id, text, done }`
- [ ] IDs are sequential integers, never reused after deletion
- [ ] Errors (unknown ID, empty text, corrupt JSON) print a clear stderr message and exit non-zero
- [ ] Installable via `npm link` using a `bin` entry named `todo`

### Out of Scope

- `remove` and `clear` commands — v1 ships exactly add/list/done; deletion is a future phase
- Tests — user opted for manual verification only in v1
- Colored/TTY-aware output — plain text chosen for pipe-friendliness
- Timestamps, priority, tags, categories — item model stays minimal
- Remote sync, database, or multi-user support — local file only
- External dependencies — Node built-ins only is a hard constraint

## Context

- Greenfield project; the repository currently contains only GSD tooling (`.claude/`, `.opencode/`), no application code.
- The tool is aimed at developers who want a tiny, predictable task list without installing a package manager ecosystem or running a daemon.
- Plain-text output is intentional so the command composes with `grep`, `awk`, and shell scripts.
- "No external dependencies" is both a simplicity goal and a trust/supply-chain goal.

## Constraints

- **Tech stack**: Node.js built-ins only (`node:fs`, `node:process`, `node:path`) — no npm dependencies, no bundler, no transpiler
- **Storage**: A single `todos.json` in the current working directory — human-readable and diffable
- **Distribution**: `package.json` with `"bin": { "todo": ... }`; usable via `npm link`
- **Interface**: Exactly three subcommands (`add`, `list`, `done`) for v1
- **Error behavior**: Fail loudly — non-zero exit and stderr message; no silent recovery or auto-repair of corrupt data

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Store `todos.json` in the current directory | Per-project task lists; predictable and easy to inspect | — Pending |
| Minimal item model `{ id, text, done }` | Keeps the file small and the code trivial | — Pending |
| Sequential IDs, never reused | Stable references across invocations; `done 1` always means the same task | — Pending |
| Plain-text `list` output | Pipe-friendly; no TTY detection complexity | — Pending |
| Ship only add/list/done in v1 | Smallest useful tool; avoids scope creep | — Pending |
| No automated tests in v1 | User chose manual verification for this small tool | — Pending |
| Fail loudly on errors | Scripts can rely on exit codes; corrupt data is surfaced, not hidden | — Pending |
| `npm bin` distribution | Gives a real `todo` command after `npm link` | — Pending |

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
