# Dual-Persona Pipeline Architecture & Aesthetics Specification
**Document**: `docs/superpowers/specs/2026-10-13-dual-persona-pipeline-design.md`  
**Status**: DRAFT FOR USER REVIEW  
**Date**: 2026-10-13  
**Target Portfolio**: Devanshu Chhipani  
**Stack**: React 18, Vite, TypeScript, Tailwind CSS, GSAP 3 + ScrollTrigger, Lenis, React Three Fiber (R3F), Drei, Framer Motion

---

## 1. Executive Summary & Design Read

- **Design Read**: Developer portfolio for tech leads, engineering managers, and AI researchers, with a dual high-contrast technical language (Systems Engineering vs Applied AI Research), leaning toward Tailwind utilities + Geist type + hardware-accelerated GSAP timelines + instanced R3F WebGL.
- **Dials**: `DESIGN_VARIANCE: 8`, `MOTION_INTENSITY: 7`, `VISUAL_DENSITY: 4`.
- **Core Thesis**: The website is not a generic promotional brochure. The website structure **is** the execution pipeline of the active persona. Switching persona dynamically re-maps every section, changes scroll inertia, swaps animation choreography trees, and shifts surface tokens without unmounting the core application frame.

---

## 2. Global Guardrails & Anti-Pattern Bans

### 2.1 Absolute Zero Directives
1. **Zero Em-Dashes**: No `—` or `–` characters anywhere in user-facing text, headlines, captions, or attributes. Standard hyphens `-` or periods only.
2. **No Banned Fonts**: Inter, Roboto, Arial, Open Sans, Helvetica prohibited as default display. Use `Geist` and `Geist Mono`.
3. **No Fake Div Terminals / Fake Screenshots**: Hero and project showcases must render authentic functional components or real visual captures, never dummy div wireframes with mock title bars.
4. **No Scroll Cues or Decorative Dots**: No "Scroll to explore", "↓", or non-semantic colored dots. Status indicators only allowed when attached to actual live system states (e.g. build status, canvas FPS).
5. **Viewport Stability**: Hero containers must use `min-h-[100dvh]`, never `h-screen` or `min-h-[82vh]`.
6. **No Non-GPU Layout Animations**: Never animate `top`, `left`, `width`, or `height`. Animate exclusively `transform` (`x`, `y`, `scale`, `rotate`) and `opacity`.

---

## 3. Dual Persona Pipeline Structural Mapping

Every section corresponds to an active stage in the persona's technical pipeline:

| Section Anchor | SE Mode (Systems Engineer) | AI Mode (AI / Research Practitioner) | UI / Interactive Paradigm |
|---|---|---|---|
| **01. Ingress** (`#hero`) | High-throughput Ingress Gateway (`HTTP/3`, `eBPF`, packet stream) | Latent Space Projection & Token Ingestion | Live Telemetry HUD vs Instanced Point Cloud WebGL Canvas |
| **02. Core Identity** (`#about`) | Kernel & Distributed Architecture Thesis | Statistical Learning & Frontier Modeling Philosophy | Asymmetric Swiss Bento with Double-Bezel frames |
| **03. Execution Engine** (`#work`) | Distributed Systems & High-Load Backends | Foundation Models, RAG Pipelines & Inference Engines | Dual-track Bento with X-Ray schematic hover & counterpart links |
| **04. Toolchain** (`#stack`) | Systems Infrastructure & Runtime Stack | Deep Learning Compute & Vector Ecosystem | Matrix Grid with hardware telemetry tags |
| **05. Trace Records** (`#experience`) | Production Deployment & Incidents Log | Model Training Milestones & Research Track | Chronological event trace with latency markers |
| **06. Publications** (`#blog`) | Systems Architecture RFCs & Post-Mortems | Technical Preprints & Research Dispatches | Minimalist text ledger with single-line titles |
| **07. Terminal Handshake** (`#contact`) | RPC Handshake & Direct Socket Ingress | Inference Dispatch & Agent Query Channel | Command Input / Direct Form with strict AA contrast |

---

## 4. Dual Motion & Scroll Dynamics Architecture

### 4.1 Scroll Engine (Lenis Configuration)
The smooth scroll engine dynamically tunes inertia and friction upon persona toggle:

```typescript
export const SCROLL_CONFIGS = {
  se: {
    lerp: 0.2, // High responsiveness, crisp mechanical stopping
    duration: 0.6,
    smoothWheel: true,
    wheelMultiplier: 1.0,
    touchMultiplier: 1.5,
  },
  ai: {
    lerp: 0.08, // Buttery gliding, atmospheric continuous inertia
    duration: 1.2,
    smoothWheel: true,
    wheelMultiplier: 0.9,
    touchMultiplier: 1.8,
  }
} as const;
```

### 4.2 GSAP ScrollTrigger Integration
- **Scroller Bridge**: Registered via `useGSAP` with container ref scoping.
- **Entry Choreography by Mode**:
  - **SE Mode**: Geometric reveals using `clip-path: inset(100% 0 0 0)` to `inset(0% 0 0 0)` with ease `power3.out`.
  - **AI Mode**: Depth crystalization using `opacity: 0`, `filter: blur(12px)`, `scale: 0.96` to `filter: blur(0px)`, `scale: 1.0` with custom ease `cubic-bezier(0.16, 1, 0.3, 1)`.
- **Lifecycle Cleanups**: All `ScrollTrigger.getAll().forEach(t => t.kill())` executed strictly on toggle change and unmount.

---

## 5. 3D WebGL Neural Mesh Optimization (Hero AI)

### 5.1 Performance Budgets & Mobile Gate
- **Instanced Rendering**: Use `<instancedMesh>` with a single draw call for 250+ node particles instead of individual `<mesh>` elements.
- **Cap DPR**: `<Canvas dpr={[1, 1.75]} frameloop="demand" />` with on-demand invalidation during pointer interaction.
- **Hardware Concurrency Check**: If `navigator.hardwareConcurrency <= 4` or mobile screen (`< 768px`), downgrade node count to 60 or fall back to high-performance SVG canvas.
- **Memory Safety**: Direct ref mutations inside `useFrame((state, delta) => ...)`. Zero `setState` calls in render loop. Dispose all buffers and materials on persona switch.

---

## 6. Haptic Visual Aesthetics & Component Engineering

### 6.1 Double-Bezel (Doppelrand) Architecture
All project and profile cards adhere to concentric nested geometry:
- **Outer Shell**: `p-1.5 md:p-2 rounded-[2rem] bg-white/[0.03] border border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]`
- **Inner Core**: `rounded-[calc(2rem-0.5rem)] bg-[#0d0d0d] p-6 md:p-8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]`

### 6.2 Button-in-Button CTA Standard
- Primary action triggers must use pill container (`rounded-full px-6 py-3.5`).
- Trailing arrow (`↗`) sits inside an isolated inner circle (`w-8 h-8 rounded-full bg-white/10 flex items-center justify-center ml-3`).
- On hover, outer pill scales `scale-[1.01]` and inner capsule translates diagonally `translate-x-0.5 -translate-y-0.5`.

### 6.3 Tactile Grain & Surface Tokens
- Global fixed non-scrolling noise layer: `fixed inset-0 pointer-events-none opacity-[0.025] z-50 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]`.
- Monochrome base (`#070707` / `#0a0a0a`) with locked accent colors:
  - **SE Accent**: Emerald Matrix (`#10b981`, ring/border highlights `rgba(16,185,129,0.2)`).
  - **AI Accent**: Electric Cyan / Indigo Pulse (`#06b6d4`, ring/border highlights `rgba(6,182,212,0.2)`).

---

## 7. Interactive High-Level Design (HLD) Pipeline Showcase

The flagship centerpiece within `#work` contains an interactive, toggleable pipeline simulator:
- **Systems Engineering View**: End-to-end request flow: `Edge DNS` -> `API Gateway` -> `Worker Fleet` -> `Raft Consensus Cluster` -> `NVMe WAL Store`.
  - Hovering a node reveals p99 latency stats, throughput metrics, and failover mechanics.
- **AI Research View**: Model execution pipeline: `Vector Tokenizer` -> `Multi-Head Attention Layers` -> `Speculative Decoding Cache` -> `Safety Alignment Evaluator`.
  - Hovering a node reveals token/sec throughput, KV cache memory footprint, and quantization precision (FP8 vs BF16).

---

## 8. Verification & Delivery Plan

1. **Phase 1: Token & Context Standardization**
   - Update `PersonaContext` with persistence and smooth scroll reconfiguration dispatch.
   - Inject CSS tokens for dual-mode surfaces into Tailwind configuration.
2. **Phase 2: Navigation & Hero Overhaul**
   - Refactor `Navbar.tsx` into floating island pill with Button-in-Button toggle.
   - Refactor `HeroSE.tsx` into responsive systems telemetry console adhering to viewport cap.
   - Re-architect `HeroAI.tsx` using `<instancedMesh>` R3F scene with hardware concurrency gate.
3. **Phase 3: Pipeline Portfolio Section Expansion**
   - Transform `SelectedWork.tsx` into dual-track pipeline cards with Double-Bezel structure and X-ray schematics.
   - Build `InteractiveHLD.tsx` simulator component.
4. **Phase 4: Remaining Pipeline Sections**
   - Refactor `About.tsx`, `TechStack.tsx`, `Experience.tsx` to reflect the active persona pipeline stage.
5. **Phase 5: Performance & Anti-Slop Audit**
   - Run Pre-Flight check: zero em-dashes, no duplicate CTAs, WCAG AA compliance, zero layout animations.

