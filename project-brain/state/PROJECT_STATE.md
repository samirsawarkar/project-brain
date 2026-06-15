---
last_verified: 2026-06-15
verified_against: unversioned
status: verified
owner: project
---

# Project State

_Updated: 2026-06-15_

## FOCUS

> Implement evidence-based analysis for bootstrapping existing projects.

FOCUS is one sentence and must be verified at session start. Opening a new chat
must never overwrite it automatically.

## Status

- [x] Define brain's model-independent project-brain purpose.
- [x] Replace the v1 flat agent framework with the v2 control-plane structure.
- [x] Add ordered boot context and on-demand loading rules.
- [x] Add terminology, constraints, decisions, experiments, and feature contracts.
- [x] Rename the installed knowledge directory to `project-brain/`.
- [x] Define CLI bootstrap and maintenance behavior.
- [x] Implement safe project initialization and structural validation commands.
- [x] Implement non-destructive framework installation into existing projects.
- [x] Implement structural manifest validation.
- [ ] Implement evidence-based existing-project analysis.
- [ ] Implement freshness validation.
- [ ] Validate the framework against a complex production project.

## BLOCKERS

- No active blockers.

## Known Issues

- The repository has no remote configured yet, so it cannot be pushed until a
  hosting destination is added.
- The npm package is not published yet; source-directory installation is
  available now.
- Automated deep existing-project analysis and complex-monorepo verification
  are not implemented.

## NEXT

Implement evidence-based existing-project analysis, then add freshness checks
and test against a complex monorepo.

## Completed Foundation

- Universal `PROJECT_BRAIN.md` entrypoint.
- Dependency-free npm CLI with `init` and `validate` commands.
- Active `MANIFEST.yaml` context-loading control plane.
- Fixed knowledge-layer structure.
- Dynamic pre-change impact workflow.
- Evidence-based freshness metadata.
- Model and editor provenance for plans.

## Backlog

- Editor adapter generator for Codex, Cursor, Claude, and other tools.
- Automated history compression.
- Conflict detection between code, tests, and project-brain intent.
