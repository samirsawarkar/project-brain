# Project Brain Protocol

This workspace uses `project-brain/` as its persistent, model-independent project brain.

Before answering project-specific questions or changing code:

1. Read `project-brain/MANIFEST.yaml`.
2. Load every file listed under `boot`, in order.
3. Match the request against `on_demand` triggers and load relevant context.
4. Inspect the relevant source code. Code is current reality; project-brain
   records intent.
5. Check constraints and prior experiments before proposing an approach.
6. State the current FOCUS and confirm whether the request matches it.
7. Before significant edits, report the impact check required by
   `project-brain/rules/AI_INSTRUCTIONS.md`.
8. Implement only after the impact check, then verify affected behavior.
9. Update project-brain only when durable project knowledge changed.

Never store secrets, API keys, credentials, customer data, or production data in
`project-brain/`.

If code and project-brain conflict, report the conflict. Treat code as the
current implementation and `project-brain/purpose/PURPOSE.md` as authoritative
product intent.
