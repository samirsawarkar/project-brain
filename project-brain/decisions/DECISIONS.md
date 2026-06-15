---
last_verified: 2026-06-15
verified_against: unversioned
status: verified
owner: architecture
---

# Decisions

## DEC-001: Project Brain, Not Agent Framework

**Decision:** brain is a model-independent project knowledge control plane.

**Why:** Simulated agents and editor-specific commands do not solve context loss
between models, sessions, and contributors.

**Impact:** Skills and agent role-play are outside the product goal. Durable
project understanding is the product.

## DEC-002: CLI Installation and Maintenance

**Decision:** A CLI will initialize and maintain `project-brain/`.

**Why:** A repeatable tool is required to bootstrap both new and existing
projects and enforce structural integrity.

## DEC-003: Existing Projects Are First-Class

**Decision:** Bootstrap must analyze existing codebases, including monorepos.

**Why:** Context loss is most damaging after projects become complex.

## DEC-004: Code Is Current Reality

**Decision:** Inspected code represents current implementation; project-brain
represents intent, reasoning, constraints, and durable knowledge.

**Why:** Documentation can become stale. Conflicts must be surfaced instead of
silently trusting either source.

## DEC-005: Fixed Structure, On-Demand Context

**Decision:** The knowledge-layer structure remains fixed while content grows by
domain and detailed context loads only when relevant.

**Why:** A stable structure supports every project size without forcing every AI
session to ingest the entire history.

## DEC-006: Dynamic Impact Analysis

**Decision:** Impact analysis is a mandatory workflow in AI instructions, not a
static maintained file.

**Why:** A static impact document becomes stale immediately after the change.

## DEC-007: Domain Behavior Contracts

**Decision:** Important behavior is documented in domain files such as
`AUTH.md`, not one file per small feature.

**Why:** Domain contracts scale while preserving invariants and avoiding file
explosion.

## DEC-008: Durable Updates Only

**Decision:** Update project-brain when behavior, architecture, dependencies,
constraints, terminology, experiments, or major decisions change.

**Why:** Git already records routine implementation history. Duplicating it
would make project-brain noisy and stale.

## DEC-009: Model Provenance Without Model Authority

**Decision:** Plans record time, provider, model, editor, and source revision.

**Why:** Provenance explains where a plan came from, but no model or newer plan
automatically outranks verified project knowledge.

## DEC-010: Sensitive Data Is Forbidden

**Decision:** Project-brain never stores secrets, credentials, API keys,
customer data, or production data.

**Why:** Project context must remain portable and safe to share with supported
AI editors.

## DEC-011: Project Knowledge Directory Name

**Decision:** The installed knowledge directory is named `project-brain/`.

**Why:** The name states the directory's purpose directly and avoids implying
that it is an operating system or simulated agent runtime.

**Impact:** All editor adapters, manifest paths, documentation, and generated
project structures must use `project-brain/`.

## DEC-012: Personal Project Identity

**Decision:** brain is a personal project, not a public community framework.
Its product name is **brain**, and its installed knowledge directory is
`project-brain/`.

**Why:** Public documentation must describe the maintained product accurately
and must not preserve obsolete branding or the former agent-framework identity.

**Impact:** Active documentation, examples, and metadata use brain and
project-brain terminology. Historical records may retain old names only as
provenance.

## DEC-013: Node.js CLI Distribution

**Decision:** brain is distributed as an npm package exposing the global
`project-brain` command.

**Why:** One global installation provides a portable terminal workflow across
projects without requiring generated project knowledge to depend on runtime
tooling.

**Impact:** `project-brain init` creates a neutral, unverified framework and
refuses destructive replacement by default. `project-brain validate` checks the
entrypoint, manifest, boot paths, and FOCUS shape.
