# Walking Skeleton — todo-cli

**Phase:** 1
**Generated:** 2026-10-29

## Capability Proven End-to-End

> One sentence: the smallest user-visible capability that exercises the full stack.

A user runs `node todo.js add "buy milk"` in a directory that has no `todos.json`, and afterwards
that directory contains `todos.json` holding `buy milk` with `id` 1 — argument in, file on disk,
read back.

## Architectural Decisions

Adapted for a CLI with no UI and no database: "stack touched" maps to repo scaffold + run
command, one real file write, one real file read-back, and a documented local full-stack run
command.

| Decision | Choice | Rationale |
|---|---|---|
| Runtime | Node.js built-ins only (`node:fs`, `node:path`, `node:process`) | PROJECT.md constraint: no dependencies, no `npm install`, zero setup |
| Module system | CommonJS (`.js` with `require`) | No `package.json` and no `"type": "module"` needed; runs with a plain `node` invocation |
| Entry point | `todo.js` at the repository root | Distribution is "run from the repo": `node todo.js add "<text>"` from any directory |
| Storage location | `path.join(process.cwd(), 'todos.json')` | Per-directory lists; one constant (`TODOS_FILENAME`) is the only write target |
| On-disk shape | Top-level JSON array of `{ id, text, completed }` records | Plain JSON, `JSON.parse` yields the array directly, no envelope to unwrap. Gated by the 01-01 decision checkpoint — a one-way door for Phases 2 and 3 |
| Module seam | `lib/store.js` exporting `readTodos`, `appendTodo`, `nextId`, `TODOS_FILENAME` | Phases 2 and 3 reuse the store; command code never touches `fs` directly |
| Identity | `id` = `max(existing ids) + 1`; first id is `1` | Stable, never reused, no separate counter to keep in sync with the data |
| Write strategy | Full-file rewrite through `todos.json.tmp` (`flag: 'wx'`) + `fsyncSync` + `fs.renameSync` | An interrupted write can never truncate items already on disk |
| Deployment target | None — run from the repo; documented local command | PROJECT.md: no publish step, no global install |

## Stack Touched in Phase 1

- [x] Project scaffold — `todo.js` + `lib/store.js`; no `package.json`, no `node_modules`, no build step, no lint config
- [x] Routing — argv dispatch in `todo.js`: `add` implemented; unknown or missing subcommand exits `1` with usage on stderr
- [x] Database — one real write (`appendTodo` creates `todos.json`) **and** one real read-back (`readTodos` parses it before appending)
- [x] UI — none (CLI). The interactive element is the terminal invocation. `add` is silent on stdout and exits `0`; Phase 2's `list` owns all human-readable output
- [x] Deployment — documented local full-stack run command: `node todo.js add "buy milk"`, executed from any directory

## Out of Scope (Deferred to Later Slices)

- `list`, `done`, and every other subcommand (Phases 2 and 3)
- Silent reset of invalid JSON — that is STOR-03 in Phase 2. Phase 1 fails loudly on unparseable content and writes nothing, so nothing is destroyed before the reset policy exists
- Removing, editing, clearing, reopening, or reordering items
- Multiple named lists, config files, `$HOME` state, sync, accounts, cloud storage
- Automated test suite — user opted out for v1; verification is by runnable commands in each plan
- `package.json`, npm publishing, a `bin` field, global install
- File locking or concurrent-writer guarantees
- Size caps or length limits on item text

## Subsequent Slice Plan

Each later phase adds one vertical slice on top of this skeleton without altering its
architectural decisions:

- Phase 2: `todo list` — read every record through `readTodos`, print ID + text with completed
  items marked, report an empty list successfully, and reset an invalid `todos.json` silently
- Phase 3: `todo done <id>` — set `completed` on one record through the same store and persist;
  an unknown ID is a silent no-op with a successful exit
