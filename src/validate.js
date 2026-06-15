import { access, readFile } from "node:fs/promises";
import path from "node:path";

async function exists(file) {
  try {
    await access(file);
    return true;
  } catch {
    return false;
  }
}

function manifestBootFiles(content) {
  const bootBlock = content.match(/^boot:\s*\n([\s\S]*?)(?=^on_demand:)/m)?.[1] ?? "";
  return [...bootBlock.matchAll(/^\s*-\s+file:\s+"([^"]+)"\s*$/gm)].map(
    (match) => match[1],
  );
}

function resolveInside(target, relative) {
  if (path.isAbsolute(relative)) {
    return null;
  }
  const resolved = path.resolve(target, relative);
  const relation = path.relative(target, resolved);
  if (relation === ".." || relation.startsWith(`..${path.sep}`)) {
    return null;
  }
  return resolved;
}

export async function validateProject(directory) {
  const target = path.resolve(directory);
  const messages = [];
  const failures = [];
  const entrypoint = path.join(target, "PROJECT_BRAIN.md");
  const manifest = path.join(target, "project-brain", "MANIFEST.yaml");

  if (!(await exists(entrypoint))) {
    failures.push("missing PROJECT_BRAIN.md");
  }
  if (!(await exists(manifest))) {
    failures.push("missing project-brain/MANIFEST.yaml");
  }

  if (!failures.length) {
    const manifestContent = await readFile(manifest, "utf8");
    const bootFiles = manifestBootFiles(manifestContent);
    if (!bootFiles.length) {
      failures.push("manifest has no boot files");
    }
    for (const relative of bootFiles) {
      const bootFile = resolveInside(target, relative);
      if (!bootFile) {
        failures.push(`boot file escapes project root: ${relative}`);
      } else if (!(await exists(bootFile))) {
        failures.push(`missing boot file: ${relative}`);
      }
    }

    const entrypointContent = await readFile(entrypoint, "utf8");
    if (!entrypointContent.includes("project-brain/MANIFEST.yaml")) {
      failures.push("PROJECT_BRAIN.md does not reference the manifest");
    }

    const stateFile = path.join(target, "project-brain", "state", "PROJECT_STATE.md");
    if (await exists(stateFile)) {
      const state = await readFile(stateFile, "utf8");
      const focusCount = [...state.matchAll(/^>\s+\S.+$/gm)].length;
      if (focusCount !== 1) {
        failures.push(`PROJECT_STATE.md must contain exactly one FOCUS quote; found ${focusCount}`);
      }
    }
  }

  if (failures.length) {
    messages.push(`project-brain validation failed in ${target}`);
    messages.push(...failures.map((failure) => `  - ${failure}`));
    return { failures, messages, valid: false };
  }

  messages.push(`project-brain is valid in ${target}`);
  return { failures: [], messages, valid: true };
}
