---
last_verified: {{DATE}}
verified_against: unverified
status: unverified
owner: architecture
---

# System

## Overview

Inspect the source before documenting the current system architecture.

## Components

List applications, packages, services, data stores, and shared modules with
precise source references.

## Context Flow

```text
PROJECT_BRAIN.md
  -> project-brain/MANIFEST.yaml
  -> ordered boot context
  -> request-matched on-demand context
  -> relevant source inspection
  -> dynamic impact check
  -> implementation and verification
  -> durable knowledge reconciliation
```

## Truth Hierarchy

1. Human-verified product intent in `PURPOSE.md`.
2. Inspected source code as current implementation.
3. Tests as executable evidence.
4. Runtime behavior as operational evidence.
5. Project-brain documents as durable context.
6. Plans as non-authoritative historical evidence.
