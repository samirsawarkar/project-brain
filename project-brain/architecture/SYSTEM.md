---
last_verified: 2026-06-15
verified_against: unversioned
status: verified
owner: architecture
---

# System

## Overview

brain installs a stable `project-brain/` knowledge structure beside a project's source
code. Any compatible AI editor starts at `PROJECT_BRAIN.md`, follows
`project-brain/MANIFEST.yaml`, loads a small boot context, and retrieves deeper context
only when the request requires it.

```text
project-root/
├── PROJECT_BRAIN.md
├── project-brain/
│   ├── MANIFEST.yaml
│   ├── purpose/
│   ├── glossary/
│   ├── architecture/
│   ├── features/
│   ├── plans/
│   ├── changes/
│   ├── decisions/
│   ├── state/
│   ├── memory/
│   └── rules/
└── project-source/
```

## Context Flow

```text
PROJECT_BRAIN.md
  -> MANIFEST.yaml
  -> ordered boot context
  -> request-matched on-demand context
  -> relevant source inspection
  -> dynamic impact check
  -> implementation and verification
  -> durable knowledge reconciliation
```

## Knowledge Boundaries

- `purpose/` owns product intent, users, goals, and non-goals.
- `glossary/` owns project-specific terminology.
- `architecture/` owns system structure, runtime, and environment.
- `features/` owns domain behavior contracts and invariants.
- `plans/` stores active and historical plans with model provenance.
- `changes/` records only durable knowledge changes.
- `decisions/` records major choices and rationale.
- `state/` owns current focus, progress, blockers, and next sequence.
- `memory/` owns durable lessons and experiments.
- `rules/` owns AI behavior, permissions, hard limits, and rejected approaches.

## Truth Hierarchy

1. Human-defined product intent in `PURPOSE.md`.
2. Inspected source code as the current implementation.
3. Tests as executable evidence of behavior.
4. Runtime behavior as production evidence.
5. Project-brain documents as intended behavior, rationale, and durable
   context.
6. Plans as non-authoritative historical evidence.

Conflicts are reported and reconciled explicitly. They are never silently
resolved.

## Scale Model

The directory structure remains fixed from prototype through production.
Content grows by domain, while boot context remains small. Monorepos use domain
contracts and source references to identify applications and shared packages
without creating a second control plane.

## CLI

The npm package exposes the dependency-free `project-brain` command:

- `project-brain init [directory]` installs a neutral framework.
- Existing managed files block initialization unless `--force` is supplied.
- Templates are rendered in a staging directory before managed files change.
- Failed final placement removes generated files and restores moved backups.
- Forced replacement moves existing managed files to timestamped backups.
- An unrelated existing `AGENTS.md` is preserved.
- `project-brain validate [directory]` checks the entrypoint, manifest boot
  paths, root-bound path safety, and single-FOCUS shape.

Generated knowledge is marked unverified until reconciled with inspected source.
