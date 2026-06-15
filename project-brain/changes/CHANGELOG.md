---
last_verified: 2026-06-15
verified_against: unversioned
status: verified
owner: project
---

# Durable Change Log

Update this file only when durable behavior, architecture, dependencies,
constraints, terminology, or major decisions change. Git handles routine code
history.

## CLI 0.1.0 - 2026-06-15

- Added the globally installable `project-brain` npm command.
- Added safe initialization into new or existing project directories.
- Made initialization transactional so failed staging does not leave a partial
  framework.
- Added timestamped backups for explicit forced replacement.
- Added structural validation for the entrypoint, manifest boot paths, and
  FOCUS.
- Rejected manifest boot paths that escape the target project root.
- Added neutral generated templates with unverified project placeholders.
- Renamed the universal entrypoint to `PROJECT_BRAIN.md`.
- Added automated test and validation gates before npm publication.

## 2.0.0 - 2026-06-15

- Renamed the project to **brain**.
- Renamed the installed knowledge directory to `project-brain/`.
- Replaced the flat AI agent framework with a model-independent context-loading
  control plane.
- Added the universal `PROJECT_BRAIN.md` entrypoint and active `MANIFEST.yaml`.
- Added fixed knowledge layers for purpose, vocabulary, architecture, features,
  plans, changes, decisions, state, memory, and rules.
- Added dynamic impact checking before significant edits.
- Added domain behavior contracts, invariants, evidence-based freshness, and
  plan provenance.
- Replaced editor-specific instructions with a thin adapter strategy.
- Restricted project-brain updates to durable project knowledge.
- Clarified that brain is a personal project and that active product language
  uses brain and project-brain.
- Replaced stale v1 website and contribution guidance with manual installation
  and personal-project documentation.
- Added the dependency-free npm CLI with safe `init` and `validate` commands.

## 1.0.0 - 2026-03-29

- Established the original ten-agent execution framework.
- Added task state, workflows, rules, memory, and version tracking.
