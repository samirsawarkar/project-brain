# Developing brain

brain is a personal project maintained by Samir Sawarkar. It is not presented
as a public community framework, and there is no roadmap for agent roles or
separate editor-specific instruction systems.

## Project Direction

- Product name: **brain**
- Installed knowledge directory: `project-brain/`
- Universal editor entrypoint: `PROJECT_BRAIN.md`
- Purpose: preserve durable project understanding across AI models and editors
- Current focus: see `project-brain/state/PROJECT_STATE.md`

## Before Changing The Project

1. Read `PROJECT_BRAIN.md`.
2. Boot through `project-brain/MANIFEST.yaml`.
3. Load the manifest's boot files in order.
4. Inspect relevant source and tests.
5. Read constraints and experiments before proposing an approach.
6. Perform the impact check in
   `project-brain/rules/AI_INSTRUCTIONS.md` before significant edits.

## Change Rules

- Keep editor adapters thin; they must point to `PROJECT_BRAIN.md`.
- Keep the `project-brain/` top-level structure fixed.
- Prefer domain behavior contracts over one file per small feature.
- Update project-brain only when durable knowledge changes.
- Never store secrets, credentials, customer data, or production data in
  project-brain.
- Do not push, publish, deploy, or delete files without explicit authorization.

## Verification

Check every path listed in `project-brain/MANIFEST.yaml`, verify FOCUS remains a
single current sentence, and search active documentation for obsolete branding,
agent-framework language, or legacy directory instructions.

The planned CLI and automated validation will eventually enforce these checks.
