#!/usr/bin/env node
import { existsSync, mkdirSync } from "node:fs";
import { execSync } from "node:child_process";
import { resolve, join } from "node:path";
import { homedir } from "node:os";

const homeDir = homedir();
const globalClaudeSkills = resolve(homeDir, ".claude", "skills");
const localSkillsDir = resolve(process.cwd(), ".skills");

console.log("[skills-setup] Checking skills resolution environment...");

// 1. If running on local workstation with global skills already installed
if (existsSync(globalClaudeSkills)) {
  console.log(`[skills-setup] Found global skills at: ${globalClaudeSkills}`);
  console.log("[skills-setup] No local download needed. System ready.");
  process.exit(0);
}

// 2. Cloud / Lovable / Sandbox fallback: Download core skills locally
console.log("[skills-setup] Global skills path not found (running in Lovable / Cloud sandbox).");
console.log(`[skills-setup] Installing core skills into local directory: ${localSkillsDir}`);

if (!existsSync(localSkillsDir)) {
  mkdirSync(localSkillsDir, { recursive: true });
}

const skillsToClone = [
  { name: "caveman", repo: "https://github.com/juliusbrussee/caveman.git", subpath: "skills" },
  { name: "taste-skill", repo: "https://github.com/Leonxlnx/taste-skill.git", subpath: "skills" },
  { name: "motion-dev-animations", repo: "https://github.com/199-biotechnologies/motion-dev-animations-skill.git" },
  { name: "superpowers", repo: "https://github.com/obra/superpowers.git", subpath: "skills" },
  { name: "claude-mem", repo: "https://github.com/thedotmack/claude-mem.git", subpath: "plugin/skills" }
];

const tempDir = resolve(process.cwd(), ".skills_temp");
if (!existsSync(tempDir)) {
  mkdirSync(tempDir, { recursive: true });
}

for (const skill of skillsToClone) {
  const targetSkillPath = join(localSkillsDir, skill.name);
  if (existsSync(targetSkillPath)) {
    console.log(`[skills-setup] ${skill.name} already installed.`);
    continue;
  }

  try {
    console.log(`[skills-setup] Fetching ${skill.name} from ${skill.repo}...`);
    const cloneDest = join(tempDir, skill.name);
    if (!existsSync(cloneDest)) {
      execSync(`git clone --depth 1 ${skill.repo} "${cloneDest}"`, { stdio: "ignore" });
    }

    const sourcePath = skill.subpath ? join(cloneDest, skill.subpath) : cloneDest;
    if (skill.subpath) {
      execSync(`node -e "require('fs').cpSync('${sourcePath.replace(/\\/g, "/")}', '${localSkillsDir.replace(/\\/g, "/")}', { recursive: true, force: true })"`);
    } else {
      execSync(`node -e "require('fs').cpSync('${sourcePath.replace(/\\/g, "/")}', '${targetSkillPath.replace(/\\/g, "/")}', { recursive: true, force: true })"`);
    }
    console.log(`[skills-setup] Installed ${skill.name} successfully.`);
  } catch (err) {
    console.warn(`[skills-setup] Notice: Could not clone ${skill.name}: ${err.message}`);
  }
}

// Cleanup temp clone cache
try {
  execSync(`node -e "require('fs').rmSync('${tempDir.replace(/\\/g, "/")}', { recursive: true, force: true })"`);
} catch {}

console.log("[skills-setup] Cloud / Lovable skills setup complete.");

