---
last_verified: {{DATE}}
verified_against: generated
status: verified
owner: project
---

# AI Instructions

## Session Boot

1. Read `PROJECT_BRAIN.md`.
2. Read `project-brain/MANIFEST.yaml`.
3. Load boot files in manifest order.
4. Verify that PROJECT_STATE FOCUS is current.
5. Match the request to on-demand triggers.
6. Inspect relevant source and tests before making project-specific claims.
7. Report stale, conflicting, or unverified knowledge.

## Before Significant Changes: Impact Check

State:

1. **Requested outcome**
2. **Direct files**
3. **Dependents**
4. **Affected behavior**
5. **Must not break**
6. **Constraints**
7. **Prior attempts**
8. **Verification**

The check may be one sentence for a trivial isolated edit. It may not be skipped
for behavior, architecture, schema, dependency, security, or cross-domain work.

## Implementation

- Make the smallest complete change that achieves the confirmed outcome.
- Preserve existing behavior unless the request explicitly changes it.
- Follow established source patterns and ownership boundaries.
- Validate boundary input and handle errors explicitly.

## Verification

- Run narrow checks first and broader checks for shared behavior.
- Verify affected invariants.
- Report checks that could not run and why.
- Do not mark work complete with known critical regressions.

## Knowledge Reconciliation

Update project-brain only when durable knowledge changes. Do not record secrets,
routine code narration, or details already captured adequately by Git.
