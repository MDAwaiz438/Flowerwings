# 01 — Design System

---

## Color palette

### Core (from logo — never change)

| Token | Hex | Usage |
|---|---|---|
| `--color-pink` | `#FF83A8` | Primary buttons, active states, key accents |
| `--color-pink-deep` | `#E8549E` | Button hover, pressed state |
| `--color-green` | `#52C5C2` | In-stock badge, delivery tag, freshness cue |
| `--color-green-deep` | `#4E9B28` | Green hover state |

### Extended (derived — support the logo colors)

| Token | Hex | Usage |
|---|---|---|
| `--color-blush` | `#FFD6E7` | Card borders, subtle backgrounds |
| `--color-petal` | `#FFF0F7` | Section backgrounds, hover fills |
| `--color-leaf` | `#F0F9EB` | Green-tint backgrounds |
| `--color-ivory` | `#FFFFFF` | Page background |
| `--color-ink` | `#1A1A1A` | Primary text, headings |
| `--color-slate` | `#4A4A4A` | Secondary text |
| `--color-mist` | `#9A9A9A` | Placeholders, disabled |
| `--color-line` | `#EDEDED` | Dividers, borders |
| `--color-dark-section` | `#111111` | Dark accent sections |
| `--color-dark-text` | `#FFFFFF` | Text on dark sections |
| `--color-dark-sub` | `#999999` | Subtext on dark sections |

### Usage rules

- **Pink appears on ≤ 20% of any screen.** If you find yourself using it as a background for large areas, stop. Use `--color-petal` or `--color-blush` instead.
- **Green is even more restrained** — only for functional labels (stock, delivery), never decorative.
- **White background.** Every page background is `#FFFFFF`.
- **One dark section per page** using `--color-dark-section`. This creates contrast rhythm and makes the brand feel confident.
- **Never use pink on a pink background.** Text on `--color-petal` uses `--color-ink`, never `--color-pink`.

---

## Typography

### Font stack

```css
/* Display — emotion, headlines, brand voice */
--font-display: 'Cormorant Garamond', Georgia, serif;

/* Body — clean, readable, modern */
--font-body: 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif;

/* Mono — prices, tracking numbers, codes */
--font-mono: 'DM Mono', 'Courier New', monospace;
```

Load via Google Fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400&display=swap" rel="stylesheet">
```

### Type scale (mobile-first → desktop)

| Token | Mobile | Desktop | Font | Weight | Usage |
|---|---|---|---|---|---|
| `--text-hero` | `40px / 1.1` | `72px / 1.05` | Display | 300 | Hero headline |
| `--text-h1` | `32px / 1.2` | `52px / 1.15` | Display | 400 | Page titles |
| `--text-h2` | `24px / 1.3` | `36px / 1.25` | Display | 400 | Section titles |
| `--text-h3` | `18px / 1.4` | `24px / 1.3` | Body | 500 | Card titles, subsections |
| `--text-h4` | `15px / 1.4` | `18px / 1.4` | Body | 500 | Labels, nav items |
| `--text-body` | `14px / 1.7` | `15px / 1.7` | Body | 400 | All body copy |
| `--text-small` | `12px / 1.6` | `13px / 1.6` | Body | 400 | Captions, meta |
| `--text-micro` | `10px / 1.5` | `11px / 1.5` | Body | 500 | Tags, badges, labels |
| `--text-price` | `18px / 1` | `22px / 1` | Mono | 400 | Product prices |

### Typography rules

- Hero and H1 headings use **Cormorant Garamond** — this is what creates the premium feel
- All UI text (buttons, nav, labels, body) uses **DM Sans**
- Prices always use **DM Mono** — makes them feel precise, not casual
- Italic weight of Cormorant (`font-style: italic`) is used sparingly for emotional emphasis in hero copy only
- **Letter spacing:** Display headings use `letter-spacing: -0.02em`. Body uses default. Labels use `letter-spacing: 0.08em; text-transform: uppercase`
- **Line length:** Body text never exceeds `65ch` on any screen

---

## Spacing system

8px base unit. All spacing is a multiple of 8.

```css
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 20px;
--space-6: 24px;
--space-8: 32px;
--space-10: 40px;
--space-12: 48px;
--space-16: 64px;
--space-20: 80px;
--space-24: 96px;
--space-32: 128px;
```

### Section vertical rhythm (mobile / desktop)

| Context | Mobile | Desktop |
|---|---|---|
| Section padding top/bottom | `64px` | `96px` |
| Between section title and content | `32px` | `40px` |
| Between cards in a grid | `12px` | `16px` |
| Page horizontal padding | `16px` | `80px max 1280px` |

---

## Border radius

```css
--radius-sm: 4px;   /* tags, badges, tiny chips */
--radius-md: 8px;   /* buttons, inputs */
--radius-lg: 12px;  /* cards, modals */
--radius-xl: 20px;  /* bottom sheets, large panels */
--radius-full: 9999px; /* pills, circular avatars */
```

---

## Shadows

Premium feel = very soft, warm-tinted shadows. Never hard black.

```css
--shadow-card: 0 2px 12px rgba(255, 105, 180, 0.08);
--shadow-card-hover: 0 8px 32px rgba(255, 105, 180, 0.16);
--shadow-modal: 0 24px 64px rgba(0, 0, 0, 0.16);
--shadow-sticky: 0 2px 16px rgba(0, 0, 0, 0.06);
```

---

## Breakpoints

Mobile-first — min-width based.

```css
/* default: mobile 0–767px */
--bp-md: 768px;   /* tablet */
--bp-lg: 1024px;  /* desktop */
--bp-xl: 1280px;  /* wide desktop */
--bp-max: 1440px; /* max content width */
```

```css
/* Tailwind config */
screens: {
  'md': '768px',
  'lg': '1024px',
  'xl': '1280px',
  '2xl': '1440px',
}
```

---

## Z-index scale

```css
--z-base: 0;
--z-above: 10;
--z-sticky: 100;    /* sticky nav */
--z-overlay: 200;   /* bottom sheets, drawers */
--z-modal: 300;     /* modals */
--z-toast: 400;     /* toast notifications */
--z-cursor: 9999;   /* custom cursor */
```

---

## Iconography

Use **Lucide React** throughout. Stroke width: `1.5px`. Size: `20px` in UI, `16px` in dense lists.

```tsx
import { ShoppingCart, Heart, Search, ChevronRight } from 'lucide-react'
```

Never use filled icons except for the petal rating component (which uses a custom SVG).

---

## Petal rating component

Replace all star ratings with a 5-petal flower SVG in `#FF83A8`. This is the brand signature detail.

```tsx
// PetalRating.tsx
// Each petal is a clip-path polygon, filled when active, outlined when inactive
// Active: fill #FF83A8
// Inactive: fill none, stroke #FFD6E7
// Half-petal: fill #FF83A8 on left half only via clipPath
```

Full component spec in `04-components.md`.

---

## Motion tokens

```css
--ease-out: cubic-bezier(0.0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);  /* for card hover tilt */

--duration-fast: 150ms;    /* hover color changes */
--duration-base: 250ms;    /* button states, card reveals */
--duration-slow: 400ms;    /* page transitions, section reveals */
--duration-crawl: 600ms;   /* hero entrance */
```

All motion respects `prefers-reduced-motion`:
```css
@media (prefers-reduced-motion: reduce) {
  * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
}
```
