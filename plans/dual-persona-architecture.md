# Detailed Implementation Plan: Dual Persona Architecture

## 1. Context & Overview
The portfolio implements a "Dual Persona" architecture, allowing users to toggle between a **Software Engineer (SE)** and **AI Practitioner (AI)** view. The core aesthetic relies on an "Ethereal Glass" dark mode (`#0a0a0a`), strict grid alignment, and purpose-driven hardware-accelerated motion.

This document serves as the master blueprint to ensure zero context loss during implementation.

---

## 2. Global Dependencies & Tools
- **State**: React Context (or Zustand) for global `persona` state (`'se' | 'ai'`).
- **Styling**: Tailwind CSS (strict adherence to `taste-skill` and `#0a0a0a` backgrounds).
- **Motion (Micro-interactions)**: `framer-motion` (for the toggle switch, magnetic buttons, and layout transitions).
- **Scroll & Timeline (Macro-interactions)**: `gsap` + `@gsap/react` + `lenis` (for smooth scrolling, scroll-pinned sections, and clip-path reveals).
- **3D Canvas**: `three` + `@react-three/fiber` + `@react-three/drei` (for the AI neural node hero).

---

## 3. Component Breakdown & Specifications

### A. State Management (`src/context/PersonaContext.tsx`)
- Exports `usePersona()` hook returning `{ persona, togglePersona }`.
- Persists user choice in `localStorage`.

### B. Navigation & Toggle (`src/components/Navbar.tsx`)
- **Position**: Sticky top, `backdrop-blur-md` frosted glass.
- **Toggle Mechanism**: Apple-style segmented control.
  - Options: [Software Engineer] | [AI Practitioner].
  - Animation: Uses `framer-motion` `<motion.div layoutId="pill">` for the active background slide.

### C. The Hero Section (`src/components/Hero.tsx`)
- Wraps two sub-components, rendered conditionally with AnimatePresence.
- **SE Mode (`HeroSE.tsx`)**:
  - Visual: Simulated code-execution telemetry terminal.
  - Animation: GSAP stagger text reveal for simulated logs.
- **AI Mode (`HeroAI.tsx`)**:
  - Visual: Interactive 3D neural-node geometry.
  - Animation: React-Three-Fiber rotating mesh tracking cursor coordinates.

### D. The Morphing Widget (`src/components/InteractiveWidget.tsx`)
- Global fixed component (bottom right).
- **SE Mode (`CliWidget.tsx`)**:
  - Visual: Minimalist command-line interface.
  - Interaction: User can type predefined commands (`help`, `projects`, `contact`). Auto-focuses input on click.
- **AI Mode (`ChatWidget.tsx`)**:
  - Visual: Frosted glass chat UI.
  - Interaction: Conversational message bubbles simulating an LLM response (can be hardcoded script trees or integrated with a lightweight endpoint later).

### E. Selected Work Bento Grid (`src/components/ProjectGrid.tsx`)
- **Layout**: Asymmetric Swiss Bento grid (1px hairline borders, `rgba(255,255,255,0.08)`, zero drop-shadow).
- **SE Projects**:
  - Visuals: Apple-style device frames (iMac/iPhone) wrapping UI screenshots.
  - Badges: GitHub commit activity, Vercel deployment status (pulsing green dot).
- **AI Projects**:
  - Visuals: Architecture diagrams, data pipeline SVGs.
  - Badges: Inference metrics, model latency numbers.
- **Animation**: GSAP ScrollTrigger clip-path reveals as cards enter the viewport.

---

## 4. Animation Guidelines (Strict Guardrails)
- **No generic fade-ups**: Elements should reveal via `clip-path: inset(100% 0 0 0)` transitioning to `inset(0 0 0 0)` synchronized with scroll.
- **Scroll Jacking**: Only use for case study deep-dives where the text pins on the left and images scroll on the right.
- **Magnetic Buttons**: Use Framer Motion on the `onMouseMove` event of primary CTA buttons to calculate distance and apply a subtle `x/y` translation.

---

## 5. Step-by-Step Implementation Phases

### Phase 1: Foundation (Current Next Step)
1. Install dependencies: `npm i framer-motion gsap @gsap/react @studio-freight/react-lenis`.
2. Setup `PersonaContext.tsx`.
3. Wrap `App.tsx` with `<ReactLenis root>` and `<PersonaProvider>`.

### Phase 2: Navigation & Toggle
1. Build `Navbar.tsx`.
2. Implement the Framer Motion segmented control for the Persona toggle.
3. Verify toggle state correctly switches globally.

### Phase 3: Morphing Widget
1. Create `InteractiveWidget.tsx` fixed to bottom right.
2. Build `CliWidget.tsx` (SE mode) with basic command parsing.
3. Build `ChatWidget.tsx` (AI mode) with message bubble layout.
4. Implement Framer Motion `AnimatePresence` to crossfade between them based on Persona state.

### Phase 4: Hero Sections
1. Create `HeroSE.tsx` with typography-heavy, monospaced layout.
2. Create `HeroAI.tsx` (install Three.js dependencies if approved) for the 3D node canvas.
3. Hook up initial GSAP text reveals for the headlines.

### Phase 5: Bento Grid & Content
1. Build `ProjectGrid.tsx` structural layout.
2. Build reusable `BentoCard` component with hairline borders.
3. Apply GSAP ScrollTrigger to the cards.
4. Populate specific SE vs AI project content.


---

## 6. Inspiration & Idea Provenance (Reference Mapping)
To ensure the rationale behind the design is preserved, here is the exact mapping of which feature was adapted from which user-provided reference site during the `/plan` phase:

| Reference Site | Original Feature | Our Unique Adaptation | Target Component |
|---|---|---|---|
| **redoyanulhaque.me** | Playable chess engine & 3D WebGL background | **Interactive "Live Proof"** instead of static text. Replaced game with morphing CLI/Chat widget and 3D neural node background. | `InteractiveWidget.tsx`, `HeroAI.tsx` |
| **aaabadcode.com** | 3D Memoji tracking cursor, radial glowing borders | **Cursor-tracking interaction**. Replaced Memoji with a 3D neural geometry. Kept the subtle cursor-tracking card border glows. | `HeroAI.tsx`, `BentoCard` hover states |
| **majd-portfolio...** | Architectural Swiss Bento grid | **Strict asymmetric grid**. Applied 1px hairline borders, zero drop-shadows, and varying card aspect ratios to prevent scroll fatigue. | `ProjectGrid.tsx` |
| **aadarshrai.vercel.app** | Vercel/Geist minimalism, pitch-black canvas | **SE Persona Aesthetic**. Absolute `#0a0a0a` background, dense monospaced telemetry, and pulsing green status dots. | `HeroSE.tsx`, Global Theme |
| **aaftab.is-a.dev** | Open-source deployment badges, GitHub links | **Live Metrics Badges**. Embedding real GitHub commit graphs and Vercel build status inside the SE bento cards. | `ProjectGrid.tsx` (SE Mode) |
| **yashahire.info** | Case studies as mission-critical architecture | **Architectural Deep-Dives**. AI projects display system architecture diagrams (React/Node/AWS) and inference metrics before UI screens. | `ProjectGrid.tsx` (AI Mode) |
| **tajmirul.site** | Cinematic GSAP choreography, clip-path reveals | **Hardware-Accelerated Motion**. Replaced generic fade-ins with synchronized GSAP clip-path reveals and scroll-pinned sections. | Global GSAP Animations |
| **henilchhipani.in** | Real device frames, app store metrics | **Apple-Style Mockups**. Framing UI screenshots inside realistic iMac/iPhone frames. (Explicitly rejected their percentage skill bars). | `ProjectGrid.tsx` (SE Mode) |
| **yashchavda.live** | High-contrast typographic poster | **Display Typography**. Applied tight letter-spacing (`-0.035em`) and stark white-on-black contrast for headlines. | Global Typography |
