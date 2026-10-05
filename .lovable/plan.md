# Favicon Exploration — Images Only

You asked for favicon ideas as **images only**, with no code changes. I'll produce two sets of concept renders saved to `/mnt/documents/` so you can preview, compare, and pick a direction. The current `index.html` and `public/favicon.svg` stay untouched.

## Set A — Refinements of your current DAC favicon

Constraint: keep the existing font, geometry, and "DAC" letterforms exactly as drawn. Only adjust **size, weight balance, padding, and contrast** inside the tile. 3 variants:

1. **A1 — Tighter padding**: Reduce inner padding so DAC fills ~78% of the tile (currently ~55%). Same dark `#121413` background, same white letterforms. Reads much stronger at 16×16 and 32×32 browser tab sizes.
2. **A2 — Rounded tile + optical centering**: Same letterforms, but the outer container becomes a `rounded-[22%]` squircle (Apple/iOS app-icon feel), with letters nudged 2% up for optical balance. Premium, app-icon quality.
3. **A3 — Inverted contrast**: White tile, dark `#121413` letterforms — better for light-mode browser tabs and pinned tabs. Same geometry untouched.

All three are rendered at 512×512 PNG so you can judge them at real favicon scale.

## Set B — Concepts built from your uploaded SVG

Your uploaded SVG is a dark tile with a stylized white mark. I'll generate 3 polished interpretations that keep its silhouette but make it portfolio-grade:

1. **B1 — Clean monogram tile**: Trace the existing mark, sharpen anchor points, true geometric stroke widths, dark `#0A0A0A` tile, off-white mark `#FAFAFA`. Editorial, no effects.
2. **B2 — Squircle app-icon**: Same mark inside a 22%-radius squircle with a subtle 1px inner stroke at `rgba(255,255,255,0.06)`. Matches the Apple/Vercel/Linear vibe already locked into the project.
3. **B3 — Light-mode pair**: A light variant (white tile, dark mark) paired with B1 so you have a theme-aware favicon set.

## Deliverables

Six PNG renders + a single side-by-side comparison sheet:

/mnt/documents/favicon-A1-tight-padding.png
/mnt/documents/favicon-A2-squircle.png
/mnt/documents/favicon-A3-inverted.png
/mnt/documents/favicon-B1-clean-monogram.png
/mnt/documents/favicon-B2-squircle-stroke.png
/mnt/documents/favicon-B3-light-pair.png
/mnt/documents/favicon-comparison-sheet.png

Each rendered at 512×512 (comparison sheet at 1536×1024), shown also at simulated 32×32 and 16×16 sizes on the comparison sheet so you can judge real-world legibility.

## Out of scope

- No edits to `index.html`, `public/favicon.svg`, `LogoMark.tsx`, or any component.
- No new assets uploaded via `lovable-assets`.
- No theme/loader changes.

After you pick a winner from the sheet, a follow-up build task can swap the actual favicon file.