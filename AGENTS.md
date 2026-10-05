# AGENTS.md — Universal Agent Operating System

This repository uses a tool-agnostic architecture. Whether running Claude Code, Antigravity, Cursor, Windsurf, Codex, Devin, or GitHub Copilot, you must follow the instructions below.

---

## 1. Core Operating Principles

### A. Skills System
- **Single Global Store**: On this machine, skills live centrally in `~/.claude/skills/` and are globally discovered by:
  - Claude Code: `~/.claude/skills/`
  - Antigravity: `~/.gemini/config/skills/`
  - Codex: `~/.codex/skills/`
  - Open Agents & Cursor: `~/.agents/skills/` & `~/.skills/`
- **Cloud / Lovable Sandbox Fallback**: If running in Lovable or a cloud sandbox where local global paths do not exist, run `npm run setup:skills` to automatically fetch skills locally, or refer to `.lovable/rules.md`.
- Skills follow the open Agent Skills specification (`SKILL.md` with YAML frontmatter).
- Check available skills before undertaking complex domain tasks:
  - **Frontend Anti-Slop & Aesthetics**: `taste`, `taste-skill`, `minimalist-skill`, `brutalist-skill`, `redesign-skill`
  - **Terse Communication & Efficiency**: `caveman`, `ultracave`, `megacave`
  - **Animation & Motion**: `gsap`, `gsap-scrolltrigger`, `motion-dev-animations`, `motion-framer`, `locomotive-scroll`
  - **Design & 3D**: `modern-web-design`, `threejs-webgl`, `react-three-fiber`
  - **Software Engineering Process**: `superpowers` (`using-superpowers`, `brainstorming`, `writing-plans`, `executing-plans`, `systematic-debugging`, `test-driven-development`, `verification-before-completion`)
  - **Memory & Cross-Session History**: `claude-mem` (`mem-search`, `learn-codebase`, `handoff`)

### B. Caveman Style Communication Active
- **Answer first**: `[thing] [action] [reason]. [next step].`
- **Zero fluff**: No pleasantries, greetings, recaps, or conversational filler.
- **Payload exact**: Code blocks, file paths, commands, and numbers must remain verbatim.
- **Clarity over extreme brevity**: Essential negation words (*not*, *never*, *no*, *only*) must never be omitted.

### C. Triad of Truth (Context, Plans, Scope)
1. **Context (`context/`, `CONTEXT.md`)**: Architectural decisions, tech stack specs, design tokens, conventions.
2. **Plans (`plans/`, `PLANS.md`)**: Roadmap, active tasks, sprint checklists. Always update `plans/active-task.md` during work.
3. **Scope (`scope/`, `SCOPE.md`)**: Guardrails on what is in scope vs out of scope. Never violate boundaries without explicit instruction.

---

## 2. Directory Layout & Shared Resources

```
├── .claude/
│   ├── skills/              <-- All project skills (SKILL.md)
│   └── settings.local.json
├── .skills/                 <-- Universal symlink / junction to .claude/skills
├── context/
│   ├── project.md           <-- Product overview and routes
│   ├── tech-stack.md        <-- Libraries and frameworks
│   ├── design-system.md     <-- Styling and animation guidelines
│   └── conventions.md       <-- Code patterns and file organization
├── plans/
│   ├── active-task.md       <-- Current task status and checklist
│   ├── roadmap.md           <-- High-level milestones
│   └── templates/           <-- Plan templates
├── scope/
│   ├── boundaries.md        <-- In-scope vs out-of-scope boundaries
│   └── tech-boundaries.md   <-- Dependencies and performance budgets
├── agents/
│   ├── architect.md         <-- System & infrastructure role
│   ├── design-choreographer.md <-- Motion, GSAP, styling role
│   ├── frontend-engineer.md <-- React, TypeScript, component role
│   └── reviewer.md          <-- Quality & regression reviewer
├── CLAUDE.md                <-- Claude Code entrypoint
├── AGENTS.md                <-- Universal agent entrypoint
├── CONTEXT.md               <-- Root pointer to context/
├── PLANS.md                 <-- Root pointer to plans/
└── SCOPE.md                 <-- Root pointer to scope/
```

---

## 3. Agent Execution Lifecycle
1. **Boot**: Read `AGENTS.md` and check `plans/active-task.md`.
2. **Consult Skills**: Check `.claude/skills/` for domain skills matching the prompt.
3. **Verify Scope**: Ensure proposed edits do not violate `scope/boundaries.md`.
4. **Implement**: Keep changes minimal, type-safe, and cohesive with `context/conventions.md`.
5. **Verify**: Run `npm run build && npm run lint`.

