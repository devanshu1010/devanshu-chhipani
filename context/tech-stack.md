# Tech Stack Specification

## Core Technologies
- **Runtime & Bundler**: Vite 5 + SWC (`@vitejs/plugin-react-swc`)
- **Language**: TypeScript 5 (Strict mode)
- **UI Framework**: React 18 (`react`, `react-dom`)
- **Styling**: Tailwind CSS 3.4 + `tailwindcss-animate` + `@tailwindcss/typography`
- **Component Primitives**: Radix UI primitives (`@radix-ui/*`) via shadcn/ui
- **Icons**: Lucide React (`lucide-react`)
- **Smooth Scroll**: Lenis (`lenis` v1.3.23)
- **Routing**: React Router DOM v6 (`react-router-dom`)
- **Data & State**: TanStack React Query v5 (`@tanstack/react-query`)
- **Forms & Validation**: React Hook Form (`react-hook-form`) + Zod (`zod`)
- **Notifications**: Sonner (`sonner`) + custom toast system

## Animation & Motion Tooling Available
- **Lenis Smooth Scroll**: Configured in `src/lib/lenis.ts`
- **GSAP & ScrollTrigger**: Skills enabled in `.claude/skills/gsap` & `.claude/skills/gsap-scrolltrigger`
- **Motion.dev**: Skill enabled in `.claude/skills/motion-dev-animations` & `.claude/skills/motion-framer`
- **Three.js & WebGL**: Skills enabled in `.claude/skills/threejs-webgl` & `.claude/skills/react-three-fiber`

