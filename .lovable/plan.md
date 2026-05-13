## Goal

Refine the site to a true Apple-minimal palette: pure white in light mode, pure black in dark mode, with two restrained accent colors used sparingly for elegance and hierarchy. **No structural changes** — only color tokens are touched.

## The palette

### Neutrals (the "main" color)

| Role | Light mode | Dark mode |
|---|---|---|
| Page background | `#ffffff` pure white | `#000000` pure black |
| Elevated surface (navbar pill, cards) | `#ffffff` with `border-black/8` | `#0a0a0a` with `border-white/8` |
| Primary text | `#0a0a0a` near-black | `#fafafa` near-white |
| Secondary text | `zinc-600` | `zinc-400` |
| Muted / dividers | `black/8` | `white/8` |

This makes ~95% of every screen pure black or pure white. Quiet, confident, Apple-like.

### Accents (used sparingly — 5% of the surface)

| Accent | Hex | Where it appears |
|---|---|---|
| **Emerald** (signature) | `#10b981` (emerald-500) | Primary CTAs, active nav state, logo glow, link hover, focus ring |
| **Amber** (highlight) | `#f59e0b` (amber-500) | Section badges/chips, "now" / "live" indicators, selection highlight, secondary hover |
| **Gradient** (hero only) | emerald → amber, 135° | Hero headline word, primary button hover sweep, logo background glow |

**Rule of use:** never two accents on the same element. Emerald = action, Amber = status. Everything else is neutral.

## Where each color goes

### Header / Navbar (`src/components/Header.tsx`)
- Light: white pill, `border-black/8`, text near-black, hover text → emerald-600
- Dark: `#0a0a0a` pill, `border-white/8`, text near-white, hover text → emerald-400
- Active nav item: subtle emerald underline dot or `emerald/10` background
- Theme toggle hover ring: emerald

### Hero (`src/components/Hero.tsx`)
- Background: pure white / pure black (no tinted glows)
- Headline: neutral, with **one** word in the emerald→amber gradient
- Primary CTA: solid black on white / solid white on black, hover reveals emerald→amber gradient sweep
- Secondary CTA: ghost/outline in neutral border

### Sections (Experience, TechStack, Blog, Contact)
- Backgrounds: pure neutral, alternating with subtle `black/[0.02]` (light) or `white/[0.02]` (dark) bands for rhythm
- Section eyebrow chips: emerald text on `emerald/8` bg, `emerald/20` border
- Card hover: border shifts to `emerald/30`, no fill change
- Tags / pills: amber for "current/live", neutral for everything else
- Links: neutral text, emerald underline on hover

### Logo
- Already inverts per theme — keep as-is. Logo glow tint in loader stays emerald→amber.

### Selection & focus
- Selection: `emerald/20` background
- Focus ring: emerald-500 at 60% opacity

## Token changes (`src/index.css`)

```
:root  (light)
  --background: 0 0% 100%        /* pure white */
  --foreground: 0 0% 4%          /* near black */
  --card: 0 0% 100%
  --border: 0 0% 92%             /* black/8 */
  --primary: 160 84% 39%         /* emerald (unchanged) */
  --accent:  38 92% 50%          /* amber */
  --ring:    160 84% 39%         /* emerald */

.dark
  --background: 0 0% 0%          /* pure black */
  --foreground: 0 0% 98%
  --card: 0 0% 4%                /* #0a0a0a */
  --border: 0 0% 14%             /* white/8 */
  --primary: 160 84% 45%         /* slightly brighter emerald for dark */
  --accent:  38 92% 55%
  --ring:    160 84% 45%
```

Body backgrounds in `body` / `.dark body` updated to `#ffffff` / `#000000`. Selection colors updated to emerald tint.

## Out of scope

- No layout, spacing, typography, or component structure changes
- No copy changes
- Logo and loader animations untouched
- No new sections or components

## Files touched

- `src/index.css` — tokens, body bg, selection
- `src/components/Header.tsx` — neutral surfaces, emerald hover
- `src/pages/Index.tsx` — remove tinted ambient glows
- `src/components/Hero.tsx` — neutral bg, gradient headline word, neutral CTA with emerald→amber hover
- `src/components/Experience.tsx`, `TechStack.tsx`, `Blog.tsx`, `Contact.tsx` — swap hardcoded colored backgrounds/borders to neutral + emerald/amber accents per the rules above

## Memory update (after approval)

Update `mem://style/theme` to record: pure white / pure black neutrals, emerald (`#10b981`) as action accent, amber (`#f59e0b`) as status accent, gradient reserved for hero + logo glow only.

## Permission gate

Per your earlier instruction, I will **ask for permission before committing** any of these theme changes.
