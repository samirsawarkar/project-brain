import assert from "node:assert/strict";
import {
  mkdtemp,
  mkdir,
  readFile,
  readdir,
  writeFile,
} from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";

import { initProject } from "../src/init.js";
import { validateProject } from "../src/validate.js";

async function tempProject(name = "sample-project") {
  const root = await mkdtemp(path.join(os.tmpdir(), "project-brain-test-"));
  const target = path.join(root, name);
  await mkdir(target);
  return target;
}

test("init creates a neutral project-brain using the package name", async () => {
  const target = await tempProject();
  await writeFile(
    path.join(target, "package.json"),
    JSON.stringify({ name: "existing-app" }),
  );

  const result = await initProject(target);

  assert.deepEqual(result.created, [
    "PROJECT_BRAIN.md",
    "project-brain",
    "AGENTS.md",
  ]);
  const manifest = await readFile(
    path.join(target, "project-brain", "MANIFEST.yaml"),
    "utf8",
  );
  const state = await readFile(
    path.join(target, "project-brain", "state", "PROJECT_STATE.md"),
    "utf8",
  );
  assert.match(manifest, /project: "existing-app"/);
  assert.match(state, /status: unverified/);
  assert.doesNotMatch(manifest, /{{PROJECT_NAME}}|{{DATE}}/);
  assert.equal((await validateProject(target)).valid, true);
});

test("init preserves an unrelated existing AGENTS.md", async () => {
  const target = await tempProject();
  await writeFile(path.join(target, "AGENTS.md"), "existing instructions\n");

  const result = await initProject(target);

  assert.deepEqual(result.skipped, ["AGENTS.md"]);
  assert.equal(
    await readFile(path.join(target, "AGENTS.md"), "utf8"),
    "existing instructions\n",
  );
});

test("init refuses managed conflicts without force", async () => {
  const target = await tempProject();
  await writeFile(path.join(target, "PROJECT_BRAIN.md"), "existing\n");

  await assert.rejects(
    initProject(target),
    /managed files already exist: PROJECT_BRAIN\.md/,
  );
});

test("force backs up managed conflicts before replacement", async () => {
  const target = await tempProject();
  await writeFile(path.join(target, "PROJECT_BRAIN.md"), "existing\n");
  await writeFile(path.join(target, "AGENTS.md"), "existing adapter\n");

  const result = await initProject(target, { force: true });

  assert.equal(result.backups.length, 2);
  assert.ok(result.backups.some((file) => file.startsWith("PROJECT_BRAIN.md.")));
  assert.ok(result.backups.some((file) => file.startsWith("AGENTS.md.")));
  assert.match(
    await readFile(path.join(target, "PROJECT_BRAIN.md"), "utf8"),
    /# Project Brain Protocol/,
  );
});

test("validate reports missing installations", async () => {
  const target = await tempProject();
  const result = await validateProject(target);

  assert.equal(result.valid, false);
  assert.ok(result.failures.includes("missing PROJECT_BRAIN.md"));
  assert.ok(result.failures.includes("missing project-brain/MANIFEST.yaml"));
});

test("failed staging leaves the target unchanged", async () => {
  const target = await tempProject();
  const invalidTemplates = await mkdtemp(
    path.join(os.tmpdir(), "project-brain-invalid-templates-"),
  );

  await assert.rejects(
    initProject(target, { templateRoot: invalidTemplates }),
  );

  assert.deepEqual(await readdir(target), []);
});

test("validate rejects boot paths outside the project root", async () => {
  const target = await tempProject();
  await initProject(target);
  const manifestFile = path.join(target, "project-brain", "MANIFEST.yaml");
  const manifest = await readFile(manifestFile, "utf8");
  await writeFile(
    manifestFile,
    manifest.replace(
      '  - file: "project-brain/purpose/PURPOSE.md"',
      '  - file: "../outside.md"',
    ),
  );

  const result = await validateProject(target);

  assert.equal(result.valid, false);
  assert.ok(result.failures.includes("boot file escapes project root: ../outside.md"));
});

test("project names are escaped safely in generated YAML", async () => {
  const target = await tempProject('quoted"name');
  await initProject(target);

  const manifest = await readFile(
    path.join(target, "project-brain", "MANIFEST.yaml"),
    "utf8",
  );
  assert.match(manifest, /project: "quoted\\"name"/);
});
