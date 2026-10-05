# Lovable Agent Instructions

This project follows the Universal Agent Operating System.

## 1. Skill System & Automated Fallback
In Lovable or cloud sandbox environments where local global directories (`~/.claude/skills`) are absent:
- **Automatic Setup**: Run `npm run setup:skills` in the terminal to automatically pull required skills into `.skills/`.
- **Direct GitHub Fallback**:
  - **Taste Skill (Anti-Slop UI)**: https://raw.githubusercontent.com/Leonxlnx/taste-skill/main/skills/taste-skill/SKILL.md
  - **Caveman (Terse Voice)**: https://raw.githubusercontent.com/juliusbrussee/caveman/main/skills/caveman/SKILL.md
  - **Motion Animations**: https://raw.githubusercontent.com/199-biotechnologies/motion-dev-animations-skill/main/SKILL.md
  - **Superpowers**: https://raw.githubusercontent.com/obra/superpowers/main/skills/using-superpowers/SKILL.md

## 2. Active Mode: Caveman Communication
- Answer first: `[thing] [action] [reason]. [next step].`
- Zero conversational fluff, no greetings, no recaps.
- Verbatim code and paths.

## 3. Project Context
- Layout tokens & spacing scale: See `.lovable/plan.md` and `context/design-system.md`.
- Code conventions: See `context/conventions.md`.
- Verification command: `npm run build && npm run lint`.

