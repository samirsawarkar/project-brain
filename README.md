# brain

brain is a model-independent project brain for AI coding editors.

It stores durable project understanding beside source code so Codex, Cursor,
Claude, Gemini, and future tools can reconstruct intent, architecture,
terminology, current focus, behavior contracts, constraints, decisions, and
failed experiments before changing code.

## Structure

```text
project-root/
├── PROJECT_BRAIN.md
├── project-brain/
│   ├── MANIFEST.yaml
│   ├── purpose/
│   ├── glossary/
│   ├── architecture/
│   ├── features/
│   ├── plans/
│   ├── changes/
│   ├── decisions/
│   ├── state/
│   ├── memory/
│   └── rules/
└── project-source/
```

## How It Works

1. An AI editor reads `PROJECT_BRAIN.md`.
2. `MANIFEST.yaml` loads a small ordered boot context.
3. Additional knowledge loads only when the request needs it.
4. The AI inspects relevant source and tests.
5. A mandatory impact check identifies dependencies and protected behavior.
6. The AI implements and verifies the change.
7. Project-brain updates only when durable project knowledge changed.

## Core Principles

- Human-defined purpose is authoritative product intent.
- Code is the current implementation.
- Tests are executable evidence.
- Conflicts are reported, never silently resolved.
- FOCUS is verified at session start, not automatically replaced.
- Plans record model provenance but never become authority.
- Domain contracts preserve behavior and invariants.
- Secrets and production/customer data never enter project-brain.

## Editor Integration

Point editor-specific instruction files such as `AGENTS.md`, `CLAUDE.md`, or
Cursor rules to `PROJECT_BRAIN.md`. Do not maintain separate instruction
systems.

For an editor that does not discover the entrypoint automatically:

```text
Follow PROJECT_BRAIN.md before handling this request. Boot through
project-brain/MANIFEST.yaml, load relevant on-demand context, inspect the source,
confirm FOCUS, and perform the mandatory impact check before making changes.

Request: [your task]
```

## Status

Install the CLI once, then initialize project-brain in any project:

```bash
npm install -g git+https://github.com/samirsawarkar/project-brain.git
cd /path/to/your-project
project-brain init
project-brain validate
```

`project-brain init [directory]` creates `PROJECT_BRAIN.md`, a thin `AGENTS.md`
when one does not already exist, and a neutral `project-brain/` structure.
Generated project facts are marked unverified until inspected.

Initialization refuses to replace managed files by default. Use
`project-brain init --force` only when you want existing managed files backed up
and replaced.

Automatic deep source analysis and complex-monorepo testing remain future work.

## License

MIT
