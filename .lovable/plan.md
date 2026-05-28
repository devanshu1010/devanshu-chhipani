## Goal

Apply an Apple/Vercel/Linear–grade layout system to the portfolio. Pure structure pass: container widths, spacing scale, radii, alignment, density. No new content, no animation work, accent palette unchanged (monochrome + indigo/cyan already locked).

## 1. Tokens (`tailwind.config.ts` + `src/index.css`)

- Spacing scale: lock to `4, 8, 12, 16, 24, 32, 48, 64, 80, 96, 120, 160` via Tailwind `spacing` extension (e.g. `section`, `section-md`, `section-sm` = 120/96/72).
- Radii: extend `borderRadius` → `md: 12px`, `lg: 16px`, `xl: 24px`. Buttons 16, inputs 16, cards 24.
- Container: introduce `.container-page` (max-w 1280, px 16/20/24 responsive) and `.container-prose` (max-w 720) and `.container-hero` (max-w 900) utilities in `index.css`.
- Borders: standard `border-black/[0.06]` light / `border-white/[0.08]` dark.
- Remove background grid texture in `Index.tsx` (visual noise); keep plain `bg-white` / `bg-black`.
- `CursorGlow` opacity further reduced or removed on non-hero sections — keep but at 4%.

## 2. Section rhythm (`Index.tsx` + every section component)

- Every `<section>` uses identical vertical padding: `py-[72px] md:py-[96px] lg:py-[120px]`.
- Remove per-section ad-hoc paddings (`py-20`, etc.).
- Wrap inner content in `container-page`.
- Consistent block: eyebrow (mono uppercase 11px, indigo) → H2 → supporting text (max-w-prose) → main → optional CTA.

## 3. Hero (`Hero.tsx`)

- Left-aligned, content max-w ~900px, right column kept but trimmed.
- Drop the bottom scroll-down floating button (clutter).
- Pin all spacing to scale (gap-24, mt-32, etc.).
- Stat tiles: thin 1px borders, radius 12, no inner gradients.

## 4. Header (`Header.tsx`)

- Keep pill nav but align to same `container-page` max width (1280).
- Reduce shadow to `shadow-sm` only; remove the heavy custom shadow.
- Radii consistent (pill stays full).

## 5. Cards / sections

- Experience, TechStack, Blog, Contact: card radius → `rounded-3xl` (24), inner radii 16; remove any leftover heavy shadows; ensure single border style.
- Project/blog cards capped at `max-w-[700px]` in single-column contexts.
- TechStack: tighten density, remove decorative bars if loud — keep restrained mono bars.

## 6. Floating UI

- `FloatingEmail`, `FloatingSocial`: keep but reduce footprint, neutral borders, radius 16, no glow.

## 7. Out of scope

- No copy changes, no new sections, no animation rewrites, no color palette change, no logo/loader change.

## Files touched

`tailwind.config.ts`, `src/index.css`, `src/pages/Index.tsx`, `src/components/Header.tsx`, `src/components/Hero.tsx`, `src/components/Experience.tsx`, `src/components/TechStack.tsx`, `src/components/Blog.tsx`, `src/components/Contact.tsx`, `src/components/FloatingEmail.tsx`, `src/components/FloatingSocial.tsx`, `src/components/CursorGlow.tsx`.
