---
last_verified: 2026-06-15
verified_against: unversioned
status: verified
owner: project
---

# AI Instructions

These rules apply to every AI editor, model, and coding session using brain.

## Session Boot

1. Read `PROJECT_BRAIN.md`.
2. Read `project-brain/MANIFEST.yaml`.
3. Load `boot` files in manifest order.
4. Verify that PROJECT_STATE FOCUS is still current. Do not change it merely
   because the session started.
5. Match the request to on-demand triggers and load only relevant files.
6. Inspect relevant source and tests before making project-specific claims.
7. Report stale, conflicting, or unverified knowledge.

If the request conflicts with FOCUS, stop and identify the conflict unless it is
an urgent bug, security issue, or explicit human reprioritization.

## Permissions

### Autonomous

- Read project files and project-brain knowledge.
- Search source code and inspect history available in the workspace.
- Run existing tests, linters, type checks, and non-destructive diagnostics.
- Make scoped code changes that match confirmed FOCUS.
- Update MEMORY, EXPERIMENTS, GLOSSARY, feature contracts, and state when
  durable knowledge changes.
- Create a plan with provenance for substantial work.

### Ask First

- Modify `MANIFEST.yaml` loading behavior or the fixed directory structure.
- Change a database schema or migration history.
- Add, remove, or upgrade production dependencies.
- Change public contracts or intentionally break compatibility.
- Create new top-level project directories.
- Push, publish, deploy, or alter external infrastructure.
- Delete files or irreversible data.

### Never

- Push directly to main or another protected branch.
- Store secrets or sensitive production/customer data in project-brain.
- Present an old plan as current truth.
- Propose a rejected approach as new without addressing its recorded failure.
- Hide conflicts between code, tests, runtime evidence, and intended behavior.
- Mark knowledge verified without checking evidence.

## Before Significant Changes: Impact Check

State the following before editing:

1. **Requested outcome** - what behavior or system property must change.
2. **Direct files** - source, tests, config, contracts, and knowledge files
   likely to change.
3. **Dependents** - components and files that depend on those areas; use manifest
   relationships, domain contracts, imports, call sites, schemas, and tests.
4. **Affected behavior** - user flows, APIs, data, integrations, and operations.
5. **Must not break** - relevant invariants and existing contracts.
6. **Constraints** - hard limits or rejected approaches that apply.
7. **Prior attempts** - relevant experiments, decisions, or historical plans.
8. **Verification** - exact tests, scenarios, and checks required.

For a trivial, isolated edit, the impact check may be one concise sentence. It
may never be skipped for behavior, architecture, schema, dependency, security,
or cross-domain changes.

## Planning

Create an active plan when work is multi-step, cross-domain, architectural, or
likely to continue across sessions. Every plan must include:

```yaml
id: PLAN-NNNN
status: active
created_at: ISO-8601 timestamp
provider: provider name
model: model name
editor: editor name
based_on_revision: git revision or unversioned
focus: one sentence
```

Plans must identify affected domains, implementation order, verification, and
completion criteria. Plans do not override PURPOSE, FOCUS, constraints, or
inspected code.

## Implementation

- Make the smallest complete change that achieves the confirmed outcome.
- Preserve existing behavior unless the request explicitly changes it.
- Follow established source patterns and ownership boundaries.
- Do not redesign adjacent systems without demonstrated necessity.
- Handle errors explicitly and validate boundary input.
- Keep project knowledge separate from routine code narration.

## Verification

After implementation:

1. Run the narrowest relevant checks first.
2. Run broader checks when shared contracts or cross-domain behavior changed.
3. Verify all affected invariants.
4. Compare results with the requested outcome.
5. Report tests that could not run and why.
6. Do not mark work complete while known critical regressions remain.

## Knowledge Reconciliation

Update project-brain only when durable knowledge changed:

- Product intent -> `purpose/PURPOSE.md`
- Terminology -> `glossary/GLOSSARY.md`
- Architecture or environment -> `architecture/`
- Domain behavior or invariants -> `features/{DOMAIN}.md`
- Major choice and rationale -> `decisions/DECISIONS.md`
- Failed or measured approach -> `memory/EXPERIMENTS.md`
- Reusable lesson -> `memory/MEMORY.md`
- Current objective or blocker -> `state/PROJECT_STATE.md`
- Durable change record -> `changes/CHANGELOG.md`

Update `last_verified`, `verified_against`, and `status` when evidence was
actually checked. Use `conflict`, `stale`, or `unverified` when appropriate.

Do not update project-brain for formatting, internal renames with no durable effect,
routine bug fixes with no reusable lesson, or details already captured by Git.

## Completion

Before ending:

- Confirm the implementation matches FOCUS and requested outcome.
- Confirm verification results.
- Reconcile changed durable knowledge.
- Move completed plans to `plans/history/`.
- Leave PROJECT_STATE with one verified FOCUS and an explicit NEXT sequence.
