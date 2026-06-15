---
last_verified: 2026-06-15
verified_against: 58a600f
status: verified
owner: product
---

# Glossary

These definitions override general interpretations inside this project.

**Project brain** - The persistent knowledge directory embedded beside source
code. Its installed directory name is `project-brain/`.

**brain** - The personal, model-independent framework and planned CLI that
creates and maintains `project-brain/`.

**PROJECT_BRAIN.md** - The universal entrypoint filename used by AI coding
editors. Every thin editor adapter points to it.

**Boot context** - The minimal files every AI reads at session start.

**Control plane** - `MANIFEST.yaml`, which defines context loading, freshness,
and relationships. It does not contain application business logic.

**Durable knowledge** - Information that should survive model, editor, session,
and contributor changes.

**FOCUS** - One sentence naming the single most important current objective. It
is verified at session start, never changed merely because a chat opened.

**Behavior contract** - A domain document describing public behavior,
dependencies, invariants, failure cases, and verification.

**Impact check** - A dynamic pre-change workflow, not a persistent static
analysis file.

**Current reality** - What the inspected code and runtime currently do.

**Authoritative intent** - What `purpose/PURPOSE.md` says the product should do.

## Do Not Conflate

- Project-brain knowledge is not source code.
- Plans are historical evidence, not authority.
- Git history is not durable project understanding.
- Current implementation is not automatically intended behavior.
