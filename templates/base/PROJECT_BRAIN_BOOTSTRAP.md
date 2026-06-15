# PROJECT_BRAIN_BOOTSTRAP.md

Follow `PROJECT_BRAIN.md` before starting.

Your task is to fully bootstrap and verify project-brain against this existing
codebase.

## Required Workflow

1. Read `project-brain/MANIFEST.yaml` and all boot files in order.
2. Confirm the current FOCUS.
3. Inventory:
   - source directories and applications
   - manifests and lockfiles
   - tests, CI, Docker, deployment, and migrations
   - existing documentation and editor instructions
4. Inspect source entrypoints, routes, schemas, data models, authentication,
   authorization, persistence, integrations, configuration, and error handling.
5. Run available tests, linting, type checks, builds, and safe diagnostics.
6. Compare documentation, tests, configuration, and code.
7. Report conflicts and uncertainty. Never silently resolve them.
8. Update the smallest relevant project-brain files:
   - product intent → `purpose/PURPOSE.md`
   - architecture → `architecture/SYSTEM.md`
   - environment → `architecture/ENVIRONMENT.md`
   - terminology → `glossary/GLOSSARY.md`
   - domain behavior → `features/{DOMAIN}.md`
   - constraints → `rules/CONSTRAINTS.md`
   - decisions → `decisions/DECISIONS.md`
   - experiments → `memory/EXPERIMENTS.md`
   - lessons → `memory/MEMORY.md`
   - current state → `state/PROJECT_STATE.md`
9. Create domain contracts only for important domains. Each must include:
   purpose, current behavior, public contracts, dependencies, invariants,
   failure cases, verification, and source references.
10. Mark claims:
    - `verified` only when supported by inspected evidence
    - `unverified` when evidence is incomplete
    - `stale` when documentation no longer matches implementation
    - `conflict` when evidence and intended behavior disagree
11. Keep exactly one verified FOCUS.
12. Never store secrets, credentials, customer data, or production data.
13. Run:
    `project-brain validate`
14. Search project-brain for placeholders and unsupported claims.
15. Report:
    - files inspected
    - commands and checks run
    - project-brain files updated
    - created domain contracts
    - conflicts and unresolved questions
    - verification failures or unavailable checks
    - confirmed FOCUS and NEXT

Do not claim full verification based only on entrypoints or package manifests.
Inspect representative implementation and tests for every documented domain.
