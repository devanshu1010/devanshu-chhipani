# Plan: Editorial refinement + remove section divider lines

## 1. Remove the horizontal line between sections

In `src/pages/Index.tsx`, the wrapper applies a `::before` divider to every `<section>`:

```
[&>section]:before:h-px [&>section]:before:bg-zinc-950/10 dark:[&>section]:before:bg-white/10
```

Action: delete the entire `[&>section]:before:*` utility chain. Sections will flow continuously with no visible rule. Hero already has its own internal hairlines — those stay.

## 2. Re-tune the theme to the new editorial palette

Goal: 90% monochrome, ~8% primary accent (indigo), ~2% secondary (cyan). Drop emerald/amber as the dominant accent system. Keep all layouts, components, spacing, and copy unchanged.

### Tokens — `src/index.css`

Light:
- `--background` `#FFFFFF` (already)
- `--foreground` `#0A0A0A` (already)
- `--muted-foreground` → `#64748B` (slate-500)
- `--border` / `--input` → `#E2E8F0` (slate-200)
- `--secondary` / `--muted` → `#F8FAFC` (slate-50)
- `--primary` → `#4F46E5` (indigo-600)
- `--accent` → `#0891B2` (cyan-600)
- `--ring` → `#4F46E5`

Dark:
- `--background` `#000000` (already)
- `--foreground` `#FAFAFA` (already)
- `--muted-foreground` → `#94A3B8` (slate-400)
- `--border` / `--input` → `#1E293B` (slate-800)
- `--secondary` / `--muted` / `--card` → `#0A0A0A`
- `--primary` → `#818CF8` (indigo-400)
- `--accent` → `#22D3EE` (cyan-400)
- `--ring` → `#818CF8`

Selection: indigo-tinted (`rgba(79,70,229,0.18)` / `rgba(129,140,248,0.28)`).

`@keyframes glow`: replace emerald/amber with indigo→cyan (kept only because referenced; intensity reduced).

### Component sweep (color-only, no structure)

Replace every hardcoded `emerald-*` / `amber-*` / yellow utility with the new system. Mapping:

| Old | New |
|---|---|
| `emerald-600` / `emerald-400` (text, border, ring) | `indigo-600` / `indigo-400` |
| `emerald-500/10..40` (bg, border tint) | `indigo-500/10..30` |
| `amber-*` (status chips, "live" dot, eyebrows) | `cyan-600` / `cyan-400` (and `cyan-500/10` surfaces) |
| Gradient `emerald → amber` (hero word, logo glow, button hover) | Gradient `indigo-500 → cyan-400` (used only on hero headline word + logo loader glow) |
| `shadow-[…rgba(16,185,129,…)]` / amber shadows | Remove or replace with `border` + soft `shadow-black/5` (per "borders over shadows") |

Files touched (color tokens / classnames only):
- `src/components/Header.tsx` — hover text → indigo, hover ring → indigo, active item subtle indigo dot
- `src/components/Hero.tsx` — drop colored block-shadows, recolor terminal accents (terminal `online` chip → cyan, `Terminal` icon → indigo), CTA stays neutral with indigo hover text
- `src/components/Experience.tsx` — eyebrows → indigo on `indigo-500/8`, "current" badge → cyan, card hover border → `indigo/30`
- `src/components/TechStack.tsx` — proficiency bars `indigo-500`, signal-code badges → neutral border with `indigo` text on hover, active tab rail indicator → indigo
- `src/components/Blog.tsx` — link hover → indigo, "new" tag → cyan, drop colored block-shadows
- `src/components/Contact.tsx` — input focus ring → indigo, send button → neutral + indigo hover, drop emerald shadow
- `src/components/FloatingEmail.tsx`, `FloatingSocial.tsx` — handle/hover → indigo, dot indicator → cyan
- `src/components/CursorGlow.tsx` — glow color `bg-indigo-500/8 blur-3xl` (lower opacity, calmer)
- `src/components/DacLoader.tsx` + `LogoMark.tsx` — logo glow gradient → indigo→cyan; lightning trace tints adjusted (`#a5b4fc` / `#67e8f9`) to match

### Motion / shadow discipline

- Remove the colored `shadow-[NN_NN_0_rgba(...)]` block-shadows on hero terminal, blog cards, contact card. Replace with a 1px border + `shadow-sm` only where elevation is needed.
- `CursorGlow` opacity dropped (10% → 6%) and blur kept; size unchanged. No new animations introduced.
- Existing transitions left as-is (already 200ms ease).

### Out of scope

- No layout, spacing, typography, copy, or component structure changes
- No new sections, no removed sections
- Loader animation logic untouched (only color values)
- Logo geometry untouched

## 3. Memory updates after approval

- Update `mem://style/theme` with the new indigo/cyan palette and the "90/8/2" color-usage rule.
- Add a short constraint memory: no inter-section divider lines (rejected).

## Permission gate

Per your standing instruction, I will ask for approval before committing these changes.
