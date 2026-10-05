# Code & Engineering Conventions

## Architecture & Structure
- Components live in `src/components/` (page-specific or composite sections) and `src/components/ui/` (shadcn primitives).
- Pages live in `src/pages/`.
- Utility functions live in `src/lib/`.
- Custom React hooks live in `src/hooks/`.

## Component Conventions
- Functional components with TypeScript types/interfaces for props.
- Use named imports and export default for pages, named exports for components where appropriate.
- Tailwind class merging using `cn()` from `@/lib/utils`.
- Keep component files cohesive; split complex sub-sections into child components when exceeding ~250 lines.

## State & Side Effects
- Favor derived state over redundant `useState`.
- Clean up listeners, timers, and GSAP/ScrollTrigger instances on component unmount (use `useGSAP` or `useEffect` cleanup).
- Use TanStack Query for remote or async data caching.

