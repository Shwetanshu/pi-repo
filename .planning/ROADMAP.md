# Roadmap: todo-cli

## Overview

Three phases, each one thin vertical slice of the same CLI: first capture a to-do into a file
on disk, then read everything back in one view, then close items out by ID. Storage is built
once in Phase 1 and reused — Phases 2 and 3 add commands, not plumbing. Every phase ends with
something the user can run in a terminal and judge for themselves.

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

- [ ] **Phase 1: Capture to Disk** - `todo add` writes an item to `todos.json` with a stable ID, zero setup
- [ ] **Phase 2: Read It Back** - `todo list` shows every item, with completed ones marked, surviving bad files
- [ ] **Phase 3: Close It Out** - `todo done <id>` marks an item complete and ignores unknown IDs

## Phase Details

### Phase 1: Capture to Disk
**Goal**: Users can add a to-do from the terminal and find it durably stored in the current directory
**Mode:** mvp
**Depends on**: Nothing (first phase)
**Requirements**: ITEM-01, IDNT-01, STOR-01, STOR-02, RUN-01
**Success Criteria** (what must be TRUE):
  1. `todo add "buy milk"` exits successfully and `todos.json` in the current directory contains that item as readable JSON
  2. `todo add` works in a brand-new empty directory on the very first invocation, with no setup, init, or install step
  3. Each added item carries its own numeric ID, and IDs increase across successive adds rather than repeating
  4. The tool runs with a plain `node` invocation against the repo — no `npm install` and no external packages are required
**Plans**: 2 plans

Plans:
- [ ] 01-01: CLI entry point and argument dispatch for `add` (including missing-text handling)
- [ ] 01-02: JSON store — read, append, auto-create `todos.json`, assign next stable ID

**UI hint**: no

### Phase 2: Read It Back
**Goal**: Users can see every item on their list in one view, with completed items visibly marked, even if the data file is damaged
**Mode:** mvp
**Depends on**: Phase 1
**Requirements**: ITEM-02, STOR-03
**Success Criteria** (what must be TRUE):
  1. `todo list` prints every stored item with its ID and text, in a stable, predictable order
  2. An item recorded as complete in `todos.json` appears visually marked in `todo list` output and is clearly distinguishable from open items
  3. `todo list` in a directory with no existing list reports an empty list successfully instead of failing
  4. A `todos.json` containing invalid JSON does not crash any command: the file is silently reset to an empty list and the command exits successfully
**Plans**: 2 plans

Plans:
- [ ] 02-01: `list` command — render items with ID, text, completed marker; handle empty list
- [ ] 02-02: Corrupt-file recovery — silent reset to empty list on read, applied on all command paths

**UI hint**: no

### Phase 3: Close It Out
**Goal**: Users can mark any item complete by ID and have that state persist across commands, with unknown IDs causing no fuss
**Mode:** mvp
**Depends on**: Phase 2
**Requirements**: ITEM-03, IDNT-02
**Success Criteria** (what must be TRUE):
  1. `todo done 2` marks item 2 complete, and a subsequent `todo list` shows it marked while every other item is unchanged
  2. A completed item remains present in the list after `done` — nothing is removed or renumbered
  3. `todo done 999` for an ID that does not exist exits successfully, prints nothing, and leaves `todos.json` unchanged
  4. Marking an already-complete item complete again is harmless — it stays complete with no duplicate entry
**Plans**: 2 plans

Plans:
- [ ] 03-01: `done <id>` — locate item, set completed, persist
- [ ] 03-02: Unknown / missing ID handling — silent no-op with successful exit status

**UI hint**: no

## Progress

**Execution Order:**
Phases execute in numeric order: 1 → 2 → 3

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Capture to Disk | 0/2 | Not started | - |
| 2. Read It Back | 0/2 | Not started | - |
| 3. Close It Out | 0/2 | Not started | - |
