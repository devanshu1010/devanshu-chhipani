# DESIGN.md — Devanshu Chhipani Portfolio
## "Engineered Clarity" Design System

> A portfolio for a software engineer and AI practitioner. Dark-first, typographic,
> one decorative system (gradient orb in hero). Everything else is ink on canvas.
> Inspired by Apple's spatial confidence and Vercel's engineering precision.

---

## Visual Theme & Atmosphere

- **Density**: Gallery (one idea per viewport, generous breathing room)
- **Variance**: 3/10 (systematic, grid-aligned, low asymmetry)
- **Motion intensity**: Low (scroll reveals, subtle orb animation, no bouncing or floating)
- **Voice**: Confident, technical, precise. Not playful, not corporate.
- **Mode**: Dark-first. Light mode is a supported variant, not the primary canvas.

---

## Colors

### Dark Mode (Primary)

| Token | Hex | Role |
|-------|-----|------|
| `--canvas` | `#0a0a0a` | Page background |
| `--canvas-elevated` | `#111111` | Cards, nav, elevated surfaces |
| `--surface-subtle` | `#171717` | Section alternation, input backgrounds |
| `--ink` | `#ededed` | Headings, primary text |
| `--body` | `#a1a1a1` | Body paragraphs, descriptions |
| `--mute` | `#666666` | Captions, metadata, dates |
| `--accent` | `#3b82f6` | Links, CTAs, focus rings — THE ONLY chromatic color |
| `--accent-hover` | `#60a5fa` | Accent hover state |
| `--accent-glow` | `rgba(59, 130, 246, 0.15)` | Subtle halos behind accent elements |
| `--hairline` | `rgba(255, 255, 255, 0.08)` | All borders, dividers, separators |
| `--hairline-strong` | `rgba(255, 255, 255, 0.14)` | Active/focus borders |

### Light Mode (Supported)

| Token | Hex | Role |
|-------|-----|------|
| `--canvas` | `#fafafa` | Page background |
| `--canvas-elevated` | `#ffffff` | Cards, nav |
| `--surface-subtle` | `#f5f5f5` | Section alternation |
| `--ink` | `#171717` | Headings |
| `--body` | `#525252` | Body text |
| `--mute` | `#a1a1a1` | Captions |
| `--accent` | `#2563eb` | Links, CTAs |
| `--accent-hover` | `#3b82f6` | Hover |
| `--hairline` | `rgba(0, 0, 0, 0.06)` | Borders |

### Gradient (Hero Orb Only)

| Token | Value |
|-------|-------|
| `--gradient-start` | `#3b82f6` (blue-500) |
| `--gradient-end` | `#8b5cf6` (violet-500) |

### Rules
- ONE accent color. `--accent` carries every "click me" signal.
- No indigo/cyan/teal split. No secondary accent.
- No gradients on surfaces. Gradient lives exclusively in the hero orb.
- No colored backgrounds on cards or sections.

---

## Typography

### Font Families
- **Sans**: `Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif`
- **Mono**: `'JetBrains Mono', 'Geist Mono', 'SF Mono', monospace`

### Scale

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|-------|------|--------|-------------|----------------|-----|
| `--text-hero` | 64px (clamp: 40px–64px) | 600 | 1.05 | -0.035em | Hero headline only |
| `--text-section` | 40px (clamp: 28px–40px) | 600 | 1.1 | -0.025em | Section headings |
| `--text-card-title` | 24px | 600 | 1.3 | -0.02em | Card/project titles |
| `--text-lead` | 18px | 400 | 1.6 | 0 | Lead paragraphs, hero subtitle |
| `--text-body` | 16px | 400 | 1.65 | 0 | Default body text |
| `--text-label` | 13px | 500 | 1.4 | 0 | Nav links, button labels |
| `--text-eyebrow` | 11px | 500 | 1.2 | 0.08em | Section eyebrows (MONO, max 2-3 per page) |
| `--text-caption` | 12px | 400 | 1.4 | 0 | Dates, metadata, tech tags |

### Rules
- **Weight 600 for all headlines.** Never 700, never 800, never 900.
- **Weight 400 for body.** Weight 500 for labels/nav only.
- **Negative tracking on display sizes only.** Body text stays at 0.
- **Mono font for eyebrows only.** Not for body, not for headings, not for dates.
- **Max 2-3 mono eyebrows on entire page.** Overuse = AI-generated look.
- **Body at 16px, lead at 18px.** Not 14px.

---

## Layout

### Spacing

| Token | Value | Use |
|-------|-------|-----|
| `--space-xs` | 4px | Micro gaps |
| `--space-sm` | 8px | Icon gaps, tight internal spacing |
| `--space-md` | 16px | Standard padding, card internal |
| `--space-lg` | 24px | Card padding, section internal |
| `--space-xl` | 32px | Component gaps |
| `--space-2xl` | 48px | Section header to content |
| `--space-3xl` | 64px | Inter-section gap (mobile) |
| `--space-section` | 96–128px | Section vertical padding (desktop) |

### Grid & Container
- **Max content width**: 1200px, centered
- **Gutters**: 24px on desktop, 16px on mobile
- **Column patterns**: Single column centered (hero, contact), 60/40 split (about), full-width + 2-col (work), single-column list (experience, writing, stack)

### Whitespace Philosophy
Each section owns its viewport. Content width is constrained. Side margins absorb space on wide screens. The page should feel like a printed editorial, not a dashboard.

---

## Elevation & Depth

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 — Flat | 1px `--hairline` border, no shadow | Cards, inputs, dividers |
| 1 — Frosted | Backdrop-blur 12px + `--hairline` border + 80% opacity bg | Nav bar only |
| 2 — Glow | `--accent-glow` box-shadow | Accent buttons on hover (subtle) |

### Rules
- **No shadows on cards.** Depth comes from the 1px border + surface color step.
- **No glassmorphism on cards.** Frosted glass is reserved for the nav bar.
- **No gradients on surfaces.** Gradient is the orb and nothing else.

---

## Shapes

| Token | Value | Use |
|-------|-------|-----|
| `--radius-none` | 0px | Full-bleed sections |
| `--radius-sm` | 6px | Tech stack pills, inline tags |
| `--radius-md` | 12px | Project cards, content cards |
| `--radius-lg` | 16px | Featured project card |
| `--radius-pill` | 9999px | CTA buttons, nav bar |
| `--radius-full` | 50% | Avatar orb, theme toggle |

---

## Components

### Navigation
- Sticky top, height 56px
- Background: `--canvas-elevated` at 80% opacity + backdrop-blur 12px
- Border-bottom: 1px `--hairline`
- Left: "DC" initials, 18px, weight 600, color `--ink`
- Right: text nav links (Home, Work, Writing, Contact) in `--text-label`, color `--body`
- Far right: theme toggle (circle, 32px)
- Mobile: collapse to hamburger at 768px

### Hero Section
- Full viewport height, centered layout
- Gradient orb: 240px circle, animated subtle rotation
- Name: `--text-hero`, color `--ink`
- Subtitle: `--text-lead`, color `--mute`
- Tagline: `--text-body`, color `--body`
- Two CTAs: primary filled pill (`--accent` bg, white text), secondary outline pill (`--hairline` border, `--ink` text)

### Project Cards
- Background: `--canvas-elevated`
- Border: 1px `--hairline`
- Radius: `--radius-md` (12px)
- Padding: `--space-lg` (24px)
- Screenshot area: gray placeholder with `--radius-sm` inner radius
- Hover: border shifts to `--hairline-strong`, no float

### Experience List
- No cards. Text list with hairline dividers.
- Date: `--text-caption`, color `--mute`
- Title: `--text-card-title` (24px/600), color `--ink`
- Tags: `--text-caption`, color `--mute`

### Tech Stack Grid
- Flat grid, 5 columns desktop / 3 mobile
- Each item: text label in a bordered pill
- Border: 1px `--hairline`, radius `--radius-sm`
- No icons, no proficiency bars, no categories

### Writing List
- Hairline-separated entries
- Title: `--text-card-title`, color `--ink`
- Excerpt: `--text-body`, color `--body`
- Meta: `--text-caption`, color `--mute`
- Arrow icon on right, color `--mute`

### Contact
- Centered, generous padding (128px vertical)
- Heading: `--text-section`, color `--ink`
- Body: `--text-lead`, color `--body`
- Email: blue pill button (`--accent` bg)

### Footer
- Border-top: 1px `--hairline`
- Padding: `--space-xl` vertical
- Text: `--text-caption`, color `--mute`
- Social links as text, not icons

---

## Animation

### Allowed
- Scroll-triggered fade-in (opacity 0→1, translateY 20px→0, duration 0.6s)
- Hero orb subtle rotation (0.002 rad/frame, vertex noise displacement)
- Hero text stagger reveal (GSAP SplitText, 0.03s per word)
- Button active state: `transform: scale(0.98)`, duration 0.1s
- Page entrance: opacity + translateY, 0.62s

### Forbidden
- Floating cards (no `hover:-translate-y-*`)
- Glow pulsing animations
- Logo flicker/storm animations
- Parallax scrolling on content sections
- Bouncing scroll indicators
- Gradient animations on surfaces

### Performance Rules
- Animate only `transform` and `opacity`
- Respect `prefers-reduced-motion: reduce`
- No `backdrop-blur` on scrolling elements (nav only)
- Lenis smooth scroll as single RAF source

---

## Do's and Don'ts

### Do
- Use weight 600 for every headline
- Use one blue accent (`--accent`) for all interactive signals
- Use 1px `--hairline` borders instead of shadows for card definition
- Keep mono uppercase eyebrows to max 2-3 on entire page
- Center the hero section
- Show real project screenshots in work section
- Use generous whitespace between sections (96-128px)
- Commit to dark as the primary visual identity

### Don't
- Don't use `font-black` / weight 900 anywhere
- Don't use indigo, cyan, teal, or multiple accent colors
- Don't add shadows to cards, buttons, or text
- Don't use gradients as surface backgrounds
- Don't show terminal/code blocks in the hero
- Don't use floating social rails or floating email bars
- Don't add proficiency bars or numbered indices
- Don't use stock photography from Unsplash
- Don't add expand/collapse on short content
- Don't put a contact form — use email link
- Don't add scroll-down indicators
- Don't use the mono font for anything other than eyebrows

---

## Responsive Behavior

| Breakpoint | Width | Key Changes |
|------------|-------|-------------|
| Mobile | ≤ 640px | Single column, hero text 40px, section padding 64px, nav → hamburger |
| Tablet | 641–1023px | 2-col work grid, hero text 48px, nav links visible |
| Desktop | 1024–1200px | Full layout, hero text 56px |
| Wide | ≥ 1201px | Content locks at 1200px, margins absorb |

### Touch Targets
- All interactive elements: min 44×44px hit area
- Nav links: 44px height via padding
- CTA buttons: 48px height

