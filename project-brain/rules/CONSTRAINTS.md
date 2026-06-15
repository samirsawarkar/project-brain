---
last_verified: 2026-06-15
verified_against: unversioned
status: verified
owner: architecture
---

# Constraints

Read this file before making suggestions. If proposing an approach rejected
below, explain how the new proposal differs from what was already tried.

## Hard Limits

- Never store secrets, API keys, credentials, customer data, or production data
  in project-brain.
- Never silently resolve a conflict between code and documented intent.
- Never change FOCUS merely because a new session opened.
- Never make significant edits before completing the impact check.
- Never treat an AI-generated plan as authority.
- Never expand the fixed top-level project-brain structure for project-specific
  content.
- Never create one document per tiny feature; use domain contracts.
- Never load all history by default when on-demand context is sufficient.
- Never claim documentation is verified without inspecting its evidence.
- Never auto-push to a protected or main branch.
- Never delete project files without explicit authorization.

## Knowledge Rules

- Code is the current implementation, not guaranteed intent.
- `PURPOSE.md` is authoritative for product intent.
- Tests are executable evidence, not complete product documentation.
- Runtime behavior may reveal conflicts that code inspection misses.
- Uncertainty must be marked `unverified`, `conflict`, or `stale`.
- Routine implementation history belongs in Git, not project-brain.
- Durable changes must update the smallest relevant knowledge files.

## Security Baseline

- Use environment variables or a secret manager for credentials.
- Never place sensitive values in code, logs, plans, examples, or
  project-brain.
- Validate untrusted input at system boundaries.
- Use parameterized database queries.
- Do not expose internal errors or sensitive fields through public interfaces.
- Require explicit production origins and permissions.

## Rejected Approaches

### Simulated Multi-Agent Operating System

**Tried:** v1.  
**Result:** Roles overlapped and increased context without preserving project
understanding.  
**Conclusion:** brain stores project knowledge and workflows, not artificial
team roles.

### Manual Agent Activation

**Tried:** v1.  
**Result:** Toggles and active-agent lists became stale and contradictory.  
**Conclusion:** `MANIFEST.yaml` loads context based on stable boot requirements
and request relevance.

### Per-Feature Documentation

**Considered:** v2 design.  
**Risk:** Large projects would create hundreds of files that nobody maintains.  
**Conclusion:** Use domain files such as `AUTH.md` or `BILLING.md`.

### Monolithic System Document

**Considered:** v2 design.  
**Risk:** Stack, decisions, history, and contracts would become one long,
low-signal document.  
**Conclusion:** `SYSTEM.md` owns architecture; other layers own their specific
knowledge.

### Static Impact Analysis Document

**Considered:** v2 design.  
**Result:** It would become stale immediately after each task.  
**Conclusion:** Run the impact check dynamically before significant changes.

### Editor-Specific Instruction Systems

**Tried:** v1 documentation.  
**Result:** Separate guides drifted and contradicted one another.  
**Conclusion:** Every editor adapter points to the same `PROJECT_BRAIN.md`.
