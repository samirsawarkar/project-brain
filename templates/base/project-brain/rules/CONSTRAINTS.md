---
last_verified: {{DATE}}
verified_against: unverified
status: unverified
owner: architecture
---

# Constraints

Read this file before making suggestions. Add project-specific hard limits and
rejected approaches only after verifying them.

## Hard Limits

- Never store secrets, API keys, credentials, customer data, or production data
  in project-brain.
- Never silently resolve conflicts between code and documented intent.
- Never change FOCUS merely because a new session opened.
- Never make significant edits before completing the impact check.
- Never treat an AI-generated plan as authority.
- Never delete project files without explicit authorization.

## Knowledge Rules

- Code is current implementation, not guaranteed intent.
- `PURPOSE.md` owns authoritative product intent after human verification.
- Tests are executable evidence, not complete product documentation.
- Mark uncertainty `unverified`, `conflict`, or `stale`.
- Routine implementation history belongs in Git, not project-brain.

## Security Baseline

- Use environment variables or a secret manager for credentials.
- Validate untrusted input at system boundaries.
- Do not expose internal errors or sensitive fields through public interfaces.

## Rejected Approaches

Record approaches that were tried or considered and why they should not be
repeated.
