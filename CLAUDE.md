# CLAUDE.md

## Communication Standard: Caveman
Active mode: **Caveman**.
- Answer first: `[thing] [action] [reason]. [next step].`
- No pleasantries, no conversational padding, no summaries at the end.
- Code blocks, paths, shell commands, and identifiers remain exact.
- To deactivate, user must say "stop caveman".

## Project Setup & Commands
- **Dev Server**: `npm run dev`
- **Typecheck & Build**: `npm run build`
- **Lint**: `npm run lint`
- **Preview**: `npm run preview`

## Shared Architecture
This project uses an agent-agnostic architecture:
- **Agents Standard**: See [AGENTS.md](file:///d:/Projects/Portfoliow/devanshu-chhipani/AGENTS.md)
- **Skills Directory**: Globally in `~/.claude/skills/` (cloud fallback via `npm run setup:skills`)
- **Architecture & Tech Context**: [`context/`](file:///d:/Projects/Portfoliow/devanshu-chhipani/context) via [`CONTEXT.md`](file:///d:/Projects/Portfoliow/devanshu-chhipani/CONTEXT.md)
- **Tasks & Roadmap**: [`plans/`](file:///d:/Projects/Portfoliow/devanshu-chhipani/plans) via [`PLANS.md`](file:///d:/Projects/Portfoliow/devanshu-chhipani/PLANS.md)
- **Scope & Boundaries**: [`scope/`](file:///d:/Projects/Portfoliow/devanshu-chhipani/scope) via [`SCOPE.md`](file:///d:/Projects/Portfoliow/devanshu-chhipani/SCOPE.md)
- **Agent Roles**: [`agents/`](file:///d:/Projects/Portfoliow/devanshu-chhipani/agents)

## Installed Skills
- **taste & taste-skill**: Anti-slop frontend design framework (`.claude/skills/taste`, `.claude/skills/taste-skill`)
- **caveman**: Token compression and terse voice (`.claude/skills/caveman`)
- **superpowers**: Composable software methodology (`.claude/skills/using-superpowers`, `brainstorming`, `writing-plans`, etc.)
- **claude-mem**: Persistent memory & search (`.claude/skills/mem-search`, `learn-codebase`, `handoff`)
- **gsap & gsap-scrolltrigger**: Web animations & ScrollTrigger (`.claude/skills/gsap`, `.claude/skills/gsap-scrolltrigger`)
- **motion-dev-animations**: Motion.dev GPU animation skill (`.claude/skills/motion-dev-animations`)
- **design skills**: Three.js, R3F, UI patterns (`.claude/skills/threejs-webgl`, `modern-web-design`, etc.)

