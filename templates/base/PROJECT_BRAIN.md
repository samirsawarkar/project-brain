# Project Brain Protocol

This workspace uses `project-brain/` as its persistent, model-independent
project brain.

Before answering project-specific questions or changing code:

1. Read `project-brain/MANIFEST.yaml`.
2. Load every file listed under `boot`, in order.
3. Match the request against `on_demand` triggers and load relevant context.
4. Inspect relevant source and tests. Code is current reality; project-brain
   records intent and durable knowledge.
5. Check constraints and experiments before proposing an approach.
6. Confirm the current FOCUS.
7. Perform the impact check in
   `project-brain/rules/AI_INSTRUCTIONS.md` before significant edits.
8. Implement and verify affected behavior.
9. Update project-brain only when durable knowledge changes.

Never store secrets, credentials, API keys, customer data, or production data
in `project-brain/`.

If code and project-brain conflict, report the conflict instead of silently
resolving it.
