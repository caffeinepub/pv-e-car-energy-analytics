# PV & E-Car Energy Analytics

## Current State
Dashboard renders three groups of MetricCards:
- **Kennzahlen**: 7 cards in a `grid-cols-2 sm:grid-cols-3 lg:grid-cols-4` grid -- some cards use `large` prop (taller content), so cards in the same row vary in height.
- **Erträge & Kosten**: 3 cards in `grid-cols-2 sm:grid-cols-3` -- also uses `large` on Netto-Ertrag, causing uneven heights.
- **Wattpilot Ladekosten**: 4 cards in `grid-cols-2 sm:grid-cols-4`.

MetricCard renders variable-height content because `description` is optional and `large` prop changes font size. No `min-h` or fixed height is applied.

Groups are rendered as plain `<section>` / nested `<div>` blocks with no collapse/expand control.

## Requested Changes (Diff)

### Add
- Collapsible toggle to each group header (Kennzahlen, Erträge & Kosten, Wattpilot Ladekosten): clicking the header chevron expands/collapses the card grid with animation. Default state: all expanded.
- `data-ocid` markers on each group toggle button.

### Modify
- MetricCard: add `min-h` constraint so all cards in a group share the same minimum height regardless of content. Use `min-h-[120px]` for regular cards and `min-h-[120px]` for large cards too (consistent height).
- MetricCard: use `h-full` so cards in the same grid row stretch to the same height via CSS grid `align-items: stretch`.
- Dashboard grid containers: add `items-stretch` to all metric grid classes so grid items fill their row height uniformly.
- Remove the `large` size distinction for font size -- all cards use `text-2xl` for the value, making visual weight consistent without height difference.
- Group header sections: convert from plain `<div>` to collapsible section with animated chevron icon.

### Remove
- `large` prop special-casing of text size (keep the prop for backwards compat but unify the rendered font size to `text-2xl`).

## Implementation Plan
1. Update `MetricCard.tsx`: remove text-size distinction between `large` and normal; add `h-full flex flex-col justify-between` to card container; add `min-h-[120px]`.
2. Update `Dashboard.tsx`:
   - Add `collapsedGroups` state (Set of group keys: "kennzahlen" | "ertraege" | "wattpilot").
   - Replace each group header `<div>` with a clickable row that shows label + chevron; clicking toggles the group in the set.
   - Wrap each card grid in `<AnimatePresence>` + `<motion.div>` for animate-in/out.
   - Add `items-stretch` to all metric grid className strings.
   - Add `data-ocid` on each collapse toggle button.
