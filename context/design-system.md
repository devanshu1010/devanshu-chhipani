# Design System & Motion Guidelines

## Visual Aesthetic
- Dark mode first, modern engineering portfolio aesthetic with subtle atmospheric glow effects.
- Clean typography, high contrast, balanced whitespace, restrained color accents.
- Interactive cursor effects (`CursorGlow.tsx`), floating social anchors (`FloatingSocial.tsx`, `FloatingEmail.tsx`).

## Design Tokens & Styling (Tailwind)
- Use standard CSS variables defined in `src/index.css` via HSL values:
  - `--background`, `--foreground`
  - `--card`, `--card-foreground`
  - `--popover`, `--popover-foreground`
  - `--primary`, `--primary-foreground`
  - `--secondary`, `--secondary-foreground`
  - `--muted`, `--muted-foreground`
  - `--accent`, `--accent-foreground`
  - `--destructive`, `--destructive-foreground`
  - `--border`, `--input`, `--ring`
  - `--radius`

## Animation & Motion Rules
1. **Performance First**: Animate only GPU-accelerated properties (`transform`, `opacity`). Never animate layout properties (`width`, `height`, `top`, `left`, `margin`) directly in scroll loops.
2. **Reduced Motion**: Respect `prefers-reduced-motion` at all times.
3. **Lenis Integration**: When using scroll triggers or timeline scrubbing, integrate with Lenis scroll RAF cycle to avoid jitter.
4. **Spring Physics**: For UI interactions (cards, buttons, modals), use tight, responsive springs (stiffness 300-400, damping 25-30) rather than sluggish easings.

