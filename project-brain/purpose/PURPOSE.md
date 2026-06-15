---
last_verified: 2026-06-15
verified_against: 58a600f
status: verified
owner: product
---

# Purpose

## Project

**brain**

## Why It Exists

brain is a model-independent project brain for AI coding editors. It preserves
the purpose, vocabulary, architecture, current focus, behavior contracts,
constraints, decisions, failed experiments, and durable knowledge of a software
project so a different model or editor can reconstruct deep project
understanding before changing code.

It exists because AI editors often implement an isolated feature without
understanding dependent behavior, repeat rejected approaches, contradict earlier
decisions, or damage completed functionality when conversations or models
change.

## Users

- Developers using Codex, Cursor, Claude, Gemini, or future AI coding tools.
- Teams transferring work between models, editors, sessions, or contributors.
- Projects ranging from initial prototypes to large production monorepos.

## Goals

- Bootstrap new and existing projects through a CLI-maintained `project-brain/` folder.
- Reconstruct accurate project context with a small boot budget and on-demand
  loading.
- Require impact analysis before significant code changes.
- Preserve important behavior through domain contracts and invariants.
- Record durable decisions, constraints, terminology, lessons, and failed
  experiments.
- Support monorepos and multiple applications from the beginning.

## Non-Goals

- Providing simulated development agents or role-playing workflows.
- Replacing source code, tests, Git history, issue trackers, or runtime
  observability.
- Storing full chat transcripts or routine implementation details.
- Guaranteeing that an AI model will never make a mistake.
- Storing secrets, credentials, customer data, or production data.

## Success Criteria

- A fresh AI session can identify project intent, architecture, terminology,
  constraints, current focus, and relevant history before editing code.
- A model switch does not require reconstructing the project from chat history.
- Significant changes begin with an explicit impact check and end with behavior
  verification.
- The project brain remains small and actively maintained as the source project
  scales.
