# Requirements: todo-cli

**Defined:** 2026-10-29
**Core Value:** Adding, listing, and completing to-dos from the terminal must be instant and require zero setup: one JSON file, one command.

## v1 Requirements

Requirements for initial release. Each maps to roadmap phases.

### Items

- [ ] **ITEM-01**: User can add a to-do item with `todo add "<text>"`
- [ ] **ITEM-02**: User can list all items with `todo list`, completed items visibly marked
- [ ] **ITEM-03**: User can mark an item complete by ID with `todo done <id>`

### Identity

- [ ] **IDNT-01**: Each item gets a stable ID at creation; IDs are never reused
- [ ] **IDNT-02**: `todo done <unknown-id>` exits successfully as a silent no-op

### Storage

- [ ] **STOR-01**: Items persist to `todos.json` in the current working directory
- [ ] **STOR-02**: `todos.json` is created automatically when absent on any command
- [ ] **STOR-03**: Invalid JSON in `todos.json` is reset silently to an empty list

### Runtime

- [ ] **RUN-01**: CLI uses Node built-ins only, with no external dependencies

## v2 Requirements

Deferred to future release. Tracked but not in current roadmap.

(None defined)

## Out of Scope

Explicitly excluded. Documented to prevent scope creep.

| Feature | Reason |
|---------|--------|
| `remove`, `clear`, `edit`, `reopen` commands | v1 surface is deliberately `add`, `list`, `done` |
| Multiple named lists / projects | One `todos.json` per directory |
| Sync, accounts, cloud storage | Local file only |
| Automated tests | User opted out for v1; verification is manual |
| npm publishing / `bin` field | Run from repo; no publish or global install |
| `--json` output | Human-readable list is sufficient for v1 |

## Traceability

Which phases cover which requirements. Updated during roadmap creation.

| Requirement | Phase | Status |
|-------------|-------|--------|
| ITEM-01 | — | Pending |
| ITEM-02 | — | Pending |
| ITEM-03 | — | Pending |
| IDNT-01 | — | Pending |
| IDNT-02 | — | Pending |
| STOR-01 | — | Pending |
| STOR-02 | — | Pending |
| STOR-03 | — | Pending |
| RUN-01 | — | Pending |

**Coverage:**
- v1 requirements: 9 total
- Mapped to phases: 0
- Unmapped: 9 ⚠️

---
*Requirements defined: 2026-10-29*
*Last updated: 2026-10-29 after initial definition*
