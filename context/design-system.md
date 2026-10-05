# Design System & Motion Guidelines

## 1. Visual Philosophy: "Engineered Clarity"
- **Inspiration**: Apple spatial restraint + Vercel Geist typography and hairline geometry.
- **Direction**: Dark-first (`#0a0a0a`), ink-on-canvas hierarchy, single accent blue (`#3b82f6`).
- **Core reference specification**: `context/design/portfolio-design.md`.

## 2. Deprecated Patterns (Anti-AI Guardrails)
- **Eliminated**:
  - `FloatingSocial.tsx` and `FloatingEmail.tsx` (removed; links consolidated cleanly into footer and contact).
  - Heavy `CursorGlow.tsx` (replaced by subtle ambient canvas or removed).
  - Terminal code block cliché (`const developer = {...}`) in Hero.
  - Multi-accent splits (`text-indigo-600` + `text-cyan-400` → single `#3b82f6` accent).
  - `font-black` (weight 900) across all titles (locked strictly to weight 600).
  - Card expand/collapse toggles and resume-style proficiency rating bars.

## 3. Design Tokens & Styling

### Primary Color Palette (Dark-First)
- `--canvas`: `#0a0a0a` (dominant canvas)
- `--canvas-elevated`: `#111111` (cards, nav)
- `--surface-subtle`: `#171717` (alternating panels)
- `--ink`: `#ededed` (primary headings, titles)
- `--body`: `#a1a1a1` (paragraphs, descriptions)
- `--mute`: `#666666` (captions, timestamps, metadata)
- `--accent`: `#3b82f6` (universal interactive color)
- `--hairline`: `rgba(255, 255, 255, 0.08)` (structural 1px borders)

### Typography Scale
- Primary Font: `Inter` or system sans-serif stack.
- Eyebrows & Code: `Geist Mono` or `JetBrains Mono` (max 2-3 per page).
- Display Headings: Weight 600, negative tracking (`-0.035em` for Hero, `-0.025em` for Sections).
- Body copy: Weight 400 at 16px/17px with relaxed line height (`1.65`).

## 4. Animation & Motion Rules
1. **Performance First**: Animate strictly GPU-accelerated properties (`transform`, `opacity`).
2. **Reduced Motion**: Full support for `prefers-reduced-motion: reduce`.
3. **Hero Flourish**: Single decorative WebGL / CSS gradient sphere in Hero.
4. **Scroll Choreography**: Staggered text reveals and subtle section reveals synchronized with Lenis RAF.
5. **No Hover Float Fluff**: Avoid generic `-translate-y-1` or float keyframes on cards; favor crisp border contrast transitions or `scale(0.98)` tactile active button states.
