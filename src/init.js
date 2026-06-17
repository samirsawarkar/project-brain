import {
  access,
  cp,
  mkdir,
  mkdtemp,
  readdir,
  readFile,
  rename,
  rm,
  stat,
  writeFile,
} from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const TEMPLATE_ROOT = fileURLToPath(new URL("../templates/base/", import.meta.url));
const REQUIRED_TARGETS = ["PROJECT_BRAIN.md", "project-brain"];
const OPTIONAL_TARGETS = ["AGENTS.md", "PROJECT_BRAIN_BOOTSTRAP.md"];

async function exists(file) {
  try {
    await access(file);
    return true;
  } catch {
    return false;
  }
}

function backupName(file) {
  const stamp = new Date().toISOString().replace(/[:.]/g, "-");
  return `${file}.project-brain-backup-${stamp}`;
}

async function detectProjectName(target) {
  const packageFile = path.join(target, "package.json");
  if (await exists(packageFile)) {
    try {
      const packageJson = JSON.parse(await readFile(packageFile, "utf8"));
      if (typeof packageJson.name === "string" && packageJson.name.trim()) {
        return packageJson.name.trim();
      }
    } catch {
      // A malformed host package file should not prevent initialization.
    }
  }
  return path.basename(target);
}

async function isManagedEntrypoint(file) {
  try {
    const content = await readFile(file, "utf8");
    return (
      content.includes("# Project Brain Protocol") &&
      content.includes("project-brain/MANIFEST.yaml")
    );
  } catch {
    return false;
  }
}

async function isManagedProjectBrainDirectory(directory) {
  const directoryStats = await stat(directory).catch(() => null);
  if (!directoryStats?.isDirectory()) {
    return false;
  }
  return exists(path.join(directory, "MANIFEST.yaml"));
}

async function renderTemplates(root, replacements) {
  const rootStats = await stat(root);
  if (!rootStats.isDirectory()) {
    const current = await readFile(root, "utf8");
    const rendered = Object.entries(replacements).reduce(
      (content, [token, value]) => content.replaceAll(`{{${token}}}`, value),
      current,
    );
    if (rendered !== current) {
      await writeFile(root, rendered);
    }
    return;
  }

  const entries = await readdir(root, { withFileTypes: true });

  for (const entry of entries) {
    const file = path.join(root, entry.name);
    if (entry.isDirectory()) {
      await renderTemplates(file, replacements);
      continue;
    }

    const current = await readFile(file, "utf8");
    const rendered = Object.entries(replacements).reduce(
      (content, [token, value]) => content.replaceAll(`{{${token}}}`, value),
      current,
    );
    if (rendered !== current) {
      await writeFile(file, rendered);
    }
  }
}

export async function initProject(directory, options = {}) {
  const target = path.resolve(directory);
  await mkdir(target, { recursive: true });
  const targetStats = await stat(target);
  if (!targetStats.isDirectory()) {
    throw new Error(`target is not a directory: ${target}`);
  }

  const conflicts = [];
  const preservedRequired = new Set();
  for (const relative of REQUIRED_TARGETS) {
    const destination = path.join(target, relative);
    if (!(await exists(destination))) {
      continue;
    }

    if (options.force) {
      continue;
    }

    if (relative === "PROJECT_BRAIN.md" && await isManagedEntrypoint(destination)) {
      preservedRequired.add(relative);
    } else if (relative === "project-brain" && await isManagedProjectBrainDirectory(destination)) {
      preservedRequired.add(relative);
    } else {
      conflicts.push(relative);
    }
  }

  if (conflicts.length && !options.force) {
    throw new Error(
      `managed files already exist: ${conflicts.join(", ")}. Use --force to back them up and replace them.`,
    );
  }

  const stagingRoot = await mkdtemp(path.join(target, ".project-brain-init-"));
  const templateRoot = options.templateRoot ?? TEMPLATE_ROOT;
  const replacements = {
    DATE: new Date().toISOString().slice(0, 10),
    PROJECT_NAME: await detectProjectName(target),
  };
  replacements.PROJECT_NAME_YAML = replacements.PROJECT_NAME
    .replaceAll("\\", "\\\\")
    .replaceAll('"', '\\"');

  try {
    for (const relative of [...REQUIRED_TARGETS, ...OPTIONAL_TARGETS]) {
      await cp(path.join(templateRoot, relative), path.join(stagingRoot, relative), {
        recursive: true,
        errorOnExist: true,
        force: false,
      });
      await renderTemplates(path.join(stagingRoot, relative), replacements);
    }
  } catch (error) {
    await rm(stagingRoot, { force: true, recursive: true });
    throw error;
  }

  const backups = [];
  const backupMoves = [];
  const installed = [];
  const created = [];
  const skipped = [];

  try {
    if (options.force) {
      for (const relative of [...REQUIRED_TARGETS, ...OPTIONAL_TARGETS]) {
        const destination = path.join(target, relative);
        if (await exists(destination)) {
          const backup = backupName(destination);
          await rename(destination, backup);
          backupMoves.push({ backup, destination });
          backups.push(path.relative(target, backup));
        }
      }
    }

    for (const relative of REQUIRED_TARGETS) {
      const destination = path.join(target, relative);
      if (preservedRequired.has(relative)) {
        skipped.push(relative);
        continue;
      }
      await rename(path.join(stagingRoot, relative), destination);
      installed.push(destination);
      created.push(relative);
    }

    for (const relative of OPTIONAL_TARGETS) {
      const destination = path.join(target, relative);
      if (await exists(destination)) {
        skipped.push(relative);
        continue;
      }
      await rename(path.join(stagingRoot, relative), destination);
      installed.push(destination);
      created.push(relative);
    }
  } catch (error) {
    for (const destination of installed.reverse()) {
      await rm(destination, { force: true, recursive: true });
    }
    for (const { backup, destination } of backupMoves.reverse()) {
      if (await exists(backup)) {
        await rename(backup, destination);
      }
    }
    throw error;
  } finally {
    await rm(stagingRoot, { force: true, recursive: true });
  }

  return { backups, created, skipped, target };
}
