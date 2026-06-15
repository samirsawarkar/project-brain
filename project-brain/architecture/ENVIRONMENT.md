---
last_verified: 2026-06-15
verified_against: 58a600f
status: verified
owner: architecture
---

# Environment

Load this file before answering questions about runtime, dependencies, tooling,
deployment, CI, or infrastructure.

## Framework Runtime

- Format: Markdown and YAML.
- Required runtime for generated project-brain knowledge: none.
- CLI runtime: Node.js 20 or newer.
- Package manager and distribution: npm.
- Maintenance interface: dependency-free `project-brain` CLI.
- Supported project shape: single application or monorepo.
- Supported AI tools: model-independent; adapters point to `PROJECT_BRAIN.md`.

## Source Project Runtime

Record the host project's languages, frameworks, databases, queues, external
services, and deployment targets here during bootstrap.

## Dependency Policy

- Add dependencies only when they solve a demonstrated project requirement.
- Record durable dependency changes in `changes/CHANGELOG.md`.
- Record rejected dependency choices in `rules/CONSTRAINTS.md` or
  `memory/EXPERIMENTS.md`.

## Known Constraints

- Project-brain knowledge must remain readable without proprietary tooling.
- Generated knowledge remains usable without Node.js after initialization.
- Generated knowledge must not contain secrets or production data.
- Boot context should remain near the token target in `MANIFEST.yaml`.

## Not In Use

List technologies the host project explicitly does not use and link the
decision or experiment explaining why.
