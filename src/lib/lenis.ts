import Lenis from 'lenis';

let instance: Lenis | null = null;
let rafId: number | null = null;

export function initLenis() {
  if (instance) return instance;

  instance = new Lenis({
    duration: 1.3,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 1.5,
  });

  function raf(time: number) {
    instance!.raf(time);
    rafId = requestAnimationFrame(raf);
  }
  rafId = requestAnimationFrame(raf);

  return instance;
}

export function getLenis() {
  return instance;
}

export function destroyLenis() {
  if (rafId) { cancelAnimationFrame(rafId); rafId = null; }
  if (instance) { instance.destroy(); instance = null; }
}
