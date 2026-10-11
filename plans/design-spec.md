# Portfolio Design Plan v4: The Dual Persona Architecture

## 1. Core Concept: The Perspective Toggle
The defining unique signature of the portfolio will be a **Dual Persona Toggle** (similar to a physical hardware switch), allowing visitors to switch between two distinct flows: **Software Engineer** and **AI Practitioner**. 

The core theme (Ethereal Glass, `#0a0a0a` background, system typography) remains constant, but the content, interactive elements, and subtle visual accents shift dynamically based on the active mode.

### A. Software Engineer Flow
*   **Aesthetic Focus**: Vercel-style technical precision, blueprint grids, structural clarity.
*   **Hero Visual**: Scroll-reactive code execution telemetry or a clean component tree diagram.
*   **Interactive Widget (The Chatbot Adaptation)**: A minimalist Command-Line Interface (CLI) terminal. Users can type commands (e.g., `whoami`, `cat projects.txt`) to explore the portfolio.
*   **Project Presentation**: Apple-style real device frames (iMac, iPhone).
*   **Live Metrics**: Integration of real GitHub commit graphs and Vercel deployment status badges inside Bento cards.

### B. AI Practitioner Flow
*   **Aesthetic Focus**: Apple Neural Engine aesthetics. Subtle node connections, deep glowing accents (electric blue/indigo).
*   **Hero Visual**: Interactive 3D neural-node geometry (Three.js) that reacts to cursor movement.
*   **Interactive Widget (The Chatbot Adaptation)**: The CLI terminal morphs into a sleek, frosted-glass Conversational AI interface. Recruiters can chat with an LLM prompt-engineered to act as Devanshu.
*   **Project Presentation**: Architecture diagrams for data pipelines, model inference metrics, and RAG workflows.
*   **Live Metrics**: Simulated or live model accuracy charts, token generation speeds, and workflow diagrams.

---

## 2. Animation & Interaction Layer
Instead of generic AI template animations, we will use purpose-driven hardware-accelerated motion.

### Cursor Interactions (Motion.dev)
*   **Magnetic Snapping**: The cursor acts as a custom dot that magnetically snaps to buttons and the perspective toggle switch.
*   **Subtle Glows**: Cards have a subtle, cursor-tracking radial gradient border that feels tactile, not distracting.

### Scroll Choreography (GSAP ScrollTrigger + Lenis)
*   **Fluid Scrolling**: Lenis provides buttery 60fps scrolling.
*   **Clip-Path Reveals**: Images and device frames do not fade in; they wipe into existence using geometric clip-paths.
*   **Pinned Deep-Dives**: When scrolling into a case study, the screen pins (locks in place). The left side holds the project text, while the right side scrolls through the architecture diagram, UI screens, and tech stack sequentially.

---

## 3. Implementation Phasing
*   **Phase 1**: Finalize high-fidelity HTML/CSS wireframe of the Dual Persona toggle and layout structure.
*   **Phase 2**: Implement Lenis scroll and basic GSAP routing.
*   **Phase 3**: Build the interactive Widget (CLI for SE, Chat UI for AI).
*   **Phase 4**: Populate distinct content for both flows.
