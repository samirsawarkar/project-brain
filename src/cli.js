import { initProject } from "./init.js";
import { validateProject } from "./validate.js";
import { readFile } from "node:fs/promises";

const HELP = `project-brain

Usage:
  project-brain init [directory] [--force]
  project-brain validate [directory]
  project-brain --version
  project-brain --help

Commands:
  init       Initialize project-brain in a project directory.
  validate   Validate an existing project-brain installation.

Options:
  --force    Back up conflicting managed files, then replace them.
  --help     Show this help.
  --version  Show the installed version.
`;

export async function run(args, io = console) {
  const [command, ...rest] = args;

  if (!command || command === "--help" || command === "-h" || command === "help") {
    io.log(HELP);
    return;
  }

  if (command === "--version" || command === "-v") {
    const packageFile = new URL("../package.json", import.meta.url);
    const packageJson = JSON.parse(await readFile(packageFile, "utf8"));
    io.log(packageJson.version);
    return;
  }

  if (command === "init") {
    const force = rest.includes("--force");
    const positionals = rest.filter((argument) => argument !== "--force");
    if (positionals.some((argument) => argument.startsWith("-"))) {
      throw new Error("unknown init option");
    }
    if (positionals.length > 1) {
      throw new Error("init accepts at most one target directory");
    }

    const result = await initProject(positionals[0] ?? ".", { force });
    io.log(`Initialized project-brain in ${result.target}`);
    for (const file of result.created) {
      io.log(`  created ${file}`);
    }
    for (const file of result.backups) {
      io.log(`  backed up ${file}`);
    }
    for (const file of result.skipped) {
      io.log(`  preserved existing ${file}; point it to PROJECT_BRAIN.md manually`);
    }
    io.log("Next: review project-brain/state/PROJECT_STATE.md and replace unverified placeholders.");
    return;
  }

  if (command === "validate") {
    const positionals = rest.filter((argument) => !argument.startsWith("-"));
    if (positionals.length > 1 || rest.some((argument) => argument.startsWith("-"))) {
      throw new Error("validate accepts only an optional target directory");
    }

    const result = await validateProject(positionals[0] ?? ".");
    for (const message of result.messages) {
      io.log(message);
    }
    if (!result.valid) {
      process.exitCode = 1;
    }
    return;
  }

  throw new Error(`unknown command "${command}". Run project-brain --help.`);
}
