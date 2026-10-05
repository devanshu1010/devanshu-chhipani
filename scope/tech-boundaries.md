# Technical Boundaries & Guardrails

## Package Management
- Always check `package.json` before proposing or installing new dependencies.
- Prefer existing libraries (`lenis`, `lucide-react`, `@radix-ui/*`, `clsx`, `tailwind-merge`) over adding redundant packages.

## Performance Budgets
- Target 60fps/120fps smooth animations on standard hardware.
- Animations must not trigger layout reflows (avoid animating `top`, `left`, `width`, `height`).
- Avoid multiple competing scroll management libraries; Lenis is the single source of truth for smooth scroll.

## Code Quality & Verification
- Strict TypeScript: no unhandled `any` types when avoidable.
- All code must pass `npm run build` and `npm run lint`.

