---
last_verified: 2026-06-15
verified_against: unversioned
status: verified
owner: project
---

# Memory

## Durable Lessons

### Minimal Context Is More Reliable

Large context is not automatically better context. A small, ordered boot set
plus request-driven loading reduces noise and stale assumptions.

### State Must Have One Focus

A broad status dump does not guide an AI. FOCUS must be a single verified
sentence identifying the most important current objective.

### Negative Knowledge Prevents Repeated Waste

Rejected approaches and failed experiments are as important as accepted
architecture. Without them, each new model repeats old proposals.

### Vocabulary Must Be Explicit

Project-specific terms override general model knowledge. A short glossary
prevents subtle domain misunderstandings from compounding.

### Invariants Protect Existing Features

Descriptions explain what a domain does; invariants explain what future changes
must not break. Both are necessary for reliable modification.

### Plans Are Not Truth

Plans are proposals tied to a model, editor, time, and code revision. Verified
purpose, inspected code, tests, and current constraints outrank them.

### Durable Knowledge Should Be Compressed

Old plans and history should be summarized into decisions, experiments, and
memory. Raw history remains available when useful but should not enter boot
context.

## Maintenance Rules

- Remove duplication instead of synchronizing equivalent documents.
- Prefer domain files over per-feature files.
- Mark uncertain knowledge `unverified`; never write assumptions as facts.
- Update knowledge at the moment a durable lesson is discovered.
- Keep source references precise enough for the next model to verify.

