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

## Workflow

Once initialized and verified, you should **not** run the bootstrap prompt for every task.

### Every New AI Session

Use this once at the beginning:

```text
Follow PROJECT_BRAIN.md before handling requests. Boot through the manifest,
confirm FOCUS, and report readiness.
```

After booting, give normal requests:

```text
Add pagination to the skills API.
```

The AI must automatically:

1. Read `PROJECT_BRAIN.md`.
2. Load the manifest boot files.
3. Load request-relevant on-demand files.
4. Inspect relevant code and tests.
5. Check constraints and experiments.
6. Confirm the request matches FOCUS.
7. Perform an impact check.
8. Implement and verify.
9. Update project-brain only if durable knowledge changed.

## Editor Automation

You should not need to mention project-brain for every command.

Keep `AGENTS.md` at the project root:

```markdown
# AGENTS.md

Before handling any request:

1. Read `PROJECT_BRAIN.md`.
2. Follow `project-brain/MANIFEST.yaml`.
3. Load boot files and relevant on-demand context.
4. Inspect relevant source before making claims.
5. Confirm FOCUS.
6. Perform the required impact check before significant edits.
7. Update project-brain only when durable knowledge changes.
```

Editors that automatically discover `AGENTS.md`, such as Codex, will boot correctly for every request.

For editors that do not discover it automatically, configure one permanent project instruction:

```text
Always follow PROJECT_BRAIN.md before reading or changing this project.
```

Therefore:

- **Bootstrap prompt:** once, for initial analysis.
- **Session boot prompt:** once per new chat when needed.
- **Normal commands:** no project-brain reminder required after boot.
- **Project-brain updates:** only when durable knowledge changes.

## Status

Install the CLI once, then initialize project-brain in any project:

```bash
npm install -g git+https://github.com/samirsawarkar/project-brain.git
cd /path/to/your-project
project-brain init
project-brain validate
```

`project-brain init [directory]` creates `PROJECT_BRAIN.md`, a thin `AGENTS.md`
when one does not already exist, a `PROJECT_BRAIN_BOOTSTRAP.md` prompt file, and a neutral `project-brain/` structure.
Generated project facts are marked unverified until inspected. You can ask your AI editor to run `PROJECT_BRAIN_BOOTSTRAP.md` to automatically verify and populate the brain with your project's context.

Initialization refuses to replace managed files by default. Use
`project-brain init --force` only when you want existing managed files backed up
and replaced.

Automatic deep source analysis and complex-monorepo testing remain future work.

## License

MIT
