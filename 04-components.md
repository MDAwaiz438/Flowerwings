# 04 — Components

---

## UI Primitives

### Button

```tsx
interface ButtonProps {
  variant: 'primary' | 'ghost' | 'outline' | 'link'
  size: 'sm' | 'md' | 'lg' | 'full'
  loading?: boolean
  disabled?: boolean
  icon?: ReactNode          // Lucide icon, left of label
  iconRight?: ReactNode     // Lucide icon, right of label
  children: ReactNode
  onClick?: () => void
}
```

**Variants:**

| Variant | Background | Text | Border | Hover |
|---|---|---|---|---|
| `primary` | `#FF83A8` | white | none | bg → `#E8549E` |
| `ghost` | transparent | `#1A1A1A` | `1.5px solid #1A1A1A` | bg → `#FFF0F7` |
| `outline` | transparent | `#FF83A8` | `1.5px solid #FF83A8` | bg → `#FFF0F7` |
| `link` | transparent | `#FF83A8` | none | underline |

**Sizes:**

| Size | Height | Padding | Font size | Radius |
|---|---|---|---|---|
| `sm` | `32px` | `0 14px` | `12px` | `4px` |
| `md` | `44px` | `0 20px` | `14px` | `4px` |
| `lg` | `52px` | `0 28px` | `15px` | `4px` |
| `full` | `52px` | `0 20px` | `15px` | `4px`, width 100% |

**Loading state:** Spinner replaces label. Button width stays fixed (no layout jump).  
**Touch target:** Minimum `44px` height on all interactive elements.

---

### Badge / Tag

```tsx
interface BadgeProps {
  variant: 'pink' | 'green' | 'gray' | 'dark'
  size?: 'sm' | 'md'
  children: ReactNode
}
```

| Variant | Background | Text color | Border |
|---|---|---|---|
| `pink` | `#FFF0F7` | `#C0306A` | `#FF83A8` |
| `green` | `#F0F9EB` | `#2E6B11` | `#52C5C2` |
| `gray` | `#F5F5F5` | `#666` | `#E0E0E0` |
| `dark` | `#1A1A1A` | `#FFFFFF` | none |

Always `border-radius: 4px`. Font: DM Sans 500, `11px`, uppercase, `letter-spacing: 0.06em`.

---

### Input

```tsx
interface InputProps {
  label: string
  placeholder?: string
  type?: 'text' | 'tel' | 'email' | 'number' | 'password'
  error?: string
  hint?: string
  disabled?: boolean
  required?: boolean
}
```

**Default state:**
- Height: `48px` (mobile-friendly)
- Border: `1px solid #EDEDED`
- Border radius: `8px`
- Background: `#FFFFFF`
- Label: 12px DM Sans 500, `#4A4A4A`, above the field

**Focus state:**
- Border: `1.5px solid #FF83A8`
- Box shadow: `0 0 0 3px rgba(255, 105, 180, 0.12)`

**Error state:**
- Border: `1.5px solid #E53E3E`
- Error text below: 12px, red

**Hint text:** 12px `#9A9A9A`, below input

---

### BottomSheet (mobile) / Modal (desktop)

On mobile (< 768px): content slides up from bottom, overlay darkens.  
On desktop (≥ 768px): content appears centered as a modal.

```tsx
interface BottomSheetProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: ReactNode
  snapPoints?: number[]         // e.g. [0.5, 0.9] — 50% and 90% of screen height
}
```

**Mobile sheet anatomy:**
- Handle bar: `32px × 4px`, `#E0E0E0`, centered at top, `border-radius: 2px`
- Background: `#FFFFFF`
- Border radius top: `20px`
- Max height: `90vh`
- Content area: scrollable if overflow
- Backdrop: `rgba(0,0,0,0.4)` — tap to close
- Animation: `translateY(100%)` → `translateY(0)`, `300ms ease-out`

---

### PetalRating

Custom flower/petal rating — brand signature. Replaces all star ratings.

```tsx
interface PetalRatingProps {
  value: number           // 0–5, supports 0.5 increments
  size?: 'sm' | 'md'     // sm: 12px petals, md: 16px petals
  showValue?: boolean     // show numeric value beside petals
  reviewCount?: number    // show "(124)" beside value
}
```

**Visual:** 5 flower shapes in a row.
- Active petal: SVG polygon, fill `#FF83A8`
- Inactive petal: SVG polygon, fill `none`, stroke `#FFD6E7`
- Half petal: left half filled via `clipPath`

**SVG petal shape:**
```svg
<polygon points="50,0 61,35 98,35 68,57 79,91 50,70 21,91 32,57 2,35 39,35"/>
```

---

### CountdownTimer

```tsx
interface CountdownTimerProps {
  targetHour: number      // 15 = 3:00 PM IST
  label?: string          // default: "Order in {HH:MM:SS} for same-day delivery"
  expiredLabel?: string   // default: "Order now for tomorrow delivery"
  size?: 'sm' | 'lg'
}
```

- Font: DM Mono
- Size `lg`: `32px` on mobile, `48px` on desktop
- Size `sm`: `16px`, used in product card and sticky bar
- Color: `#1A1A1A` by default, `#FF83A8` for digits only when ≤ 1 hour remains

---

### Skeleton

```tsx
interface SkeletonProps {
  variant: 'card' | 'text' | 'image' | 'circle'
  width?: string
  height?: string
  count?: number
}
```

Background: `#F0F0F0`. Shimmer animation via CSS `@keyframes`. No third-party libraries.

---

### Toast

```tsx
interface ToastProps {
  type: 'success' | 'error' | 'info'
  message: string
  duration?: number    // default 3000ms
  action?: { label: string; onClick: () => void }
}
```

**Position:** Bottom center on mobile (`bottom: 80px` to clear sticky cart bar), top right on desktop.  
**Success toast example:** `"Rose Bouquet added to cart 🌸"` with "View Cart" action.

---

## Layout Components

### Navbar

**Mobile implementation:**

```tsx
// Navbar.tsx
// Sticky, 56px height
// Transparent → #FFFFFF + shadow on scroll

// Left: Logo SVG
// Right: [Search icon] [Cart icon + badge] [Hamburger]

// Hamburger opens MobileMenu (full-screen slide-in)
```

**Scroll behavior:**
- `position: sticky; top: 0`
- On scroll > 20px: add `box-shadow: 0 2px 16px rgba(0,0,0,0.06)` and `border-bottom: 1px solid #EDEDED`
- Uses `useScrollPosition` hook

**Cart badge animation:**
- On add to cart: badge scales 1 → 1.4 → 1 with spring easing
- Zustand cart store drives the count

---

### MobileMenu

Full-screen slide-in from left. Overlay on right (tap to close).

```
┌────────────────┐░░░░░░░
│ [× Close]      │░░░░░░░
├────────────────┤░░░░░░░
│  [logo]        │░░░░░░░
│                │░░░░░░░
│  Home          │░░░░░░░
│  Shop          │░░░░░░░
│  Occasions     │░░░░░░░
│  About         │░░░░░░░
│  Blog          │░░░░░░░
│                │░░░░░░░
│  Track Order   │░░░░░░░
│  Contact       │░░░░░░░
│                │░░░░░░░
│  [WhatsApp us] │░░░░░░░
└────────────────┘░░░░░░░
```

- Width: `80vw`, max `320px`
- Background: `#FFFFFF`
- Animation: `translateX(-100%)` → `0`, `300ms ease-out`
- Nav links: DM Sans 500, `18px`, `#1A1A1A`, `48px` touch height each
- WhatsApp button: green, at bottom

---

### CartDrawer

Slides in from right. On mobile: full-width bottom sheet. On desktop: 400px sidebar.

Contains: CartItem list + Gift message input + Order summary + Checkout button.

---

## Section Components

### ProductCard

```tsx
interface ProductCardProps {
  product: Product
  variant?: 'grid' | 'horizontal'   // grid: vertical, horizontal: side-by-side (mobile list)
}
```

**Grid variant (default) — mobile:**
```
┌─────────────────┐
│  [Product image]│ ← aspect ratio 1:1, next/image
│                 │
├─────────────────┤
│ [tag: ships     │
│  today 🌿]      │
│                 │
│ Classic Roses   │ ← DM Sans 500, 14px
│ ⬟⬟⬟⬟⬟ (4.8)   │ ← PetalRating sm
│ ₹ 699           │ ← DM Mono 18px, #FF83A8
│ ~~₹899~~        │ ← strikethrough if discount
│                 │
│ [Add to Cart +] │ ← outline button, full width
└─────────────────┘
```

**Interaction (magnetic tilt — desktop only):**
```ts
// useMagneticTilt.ts
// On mousemove over card:
//   const tiltX = ((y / height) - 0.5) * 8   // max 8deg
//   const tiltY = ((x / width) - 0.5) * -8
//   card.style.transform = `perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`
// On mouseleave: spring back to 0,0
// Transition: transform 0ms on move, 400ms spring on leave
```

**On mobile:** No tilt. On tap: slight scale `0.98` → `1` feedback (CSS `active:`).

**Wishlist button:**
- Heart icon, top-right corner of image
- Inactive: `#FFFFFF` fill, `#E0E0E0` stroke
- Active: `#FF83A8` fill, animated pulse on toggle

---

### Hero

```tsx
// No props — content is hardcoded or from CMS
// Uses Framer Motion for staggered text entrance
// Photo: next/image with priority + sizes for responsive

// Framer Motion stagger:
const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } }
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0,0,0.2,1] } } }
```

---

### OccasionSelector

```tsx
interface OccasionSelectorProps {
  selected?: Occasion
  onChange?: (occasion: Occasion) => void  // if used as filter
  variant: 'scroll' | 'grid'              // scroll on mobile, grid on desktop
}
```

**Mobile implementation:**
- Container: `overflow-x: auto; scroll-snap-type: x mandatory; -webkit-overflow-scrolling: touch`
- Each card: `scroll-snap-align: start`
- Hide scrollbar: `scrollbar-width: none` + `::-webkit-scrollbar { display: none }`
- Rightmost card is 50% visible to signal scrollability

---

### EditorialSplit

```tsx
interface EditorialSplitProps {
  image: string
  imageAlt: string
  eyebrow: string
  heading: string             // supports line breaks with \n
  body: string
  ctaLabel: string
  ctaHref: string
  imagePosition?: 'left' | 'right'
  darkBg?: boolean
}
```

**Mobile:** Always image-top, text-bottom  
**Desktop:** Respect `imagePosition` for left/right split

---

### ScrollReveal

```tsx
interface ScrollRevealProps {
  children: ReactNode
  delay?: number          // ms
  direction?: 'up' | 'left' | 'right' | 'none'
  threshold?: number      // 0–1, default 0.15
}
```

Uses `IntersectionObserver`. Wraps `motion.div` with Framer Motion.  
**Important:** Disable reveal on mobile if `prefers-reduced-motion` is set.

---

## Shared Components

### CustomCursor

**Desktop only.** Hidden on touch devices (`pointer: coarse` media query).

```tsx
// CustomCursor.tsx
// Default state: filled circle, 10px, #FF83A8, mix-blend-mode: multiply
// On hovering <a>, button, ProductCard: expand to 40px ring (border only, no fill)
// On hovering CTA button: fill #FF83A8, show "Shop" label in white 10px

// Implementation: canvas2D or CSS transform + requestAnimationFrame
// Position lags cursor by 6 frames for organic feel (lerp toward cursor position)
```

```css
/* Hide native cursor when component active */
html.custom-cursor-active * { cursor: none !important; }
```

---

### SectionHeader

```tsx
interface SectionHeaderProps {
  eyebrow?: string        // small uppercase text above heading
  heading: string
  subheading?: string
  align?: 'left' | 'center'
  onDark?: boolean        // inverts text colors for dark sections
}
```

**Default (light):**
- Eyebrow: `10px`, DM Sans 500, `#FF83A8`, uppercase, `letter-spacing: 0.12em`
- Heading: Cormorant Garamond 400, responsive size from type scale
- Subheading: DM Sans 400, 14px, `#4A4A4A`

**On dark:**
- Eyebrow: `#FF83A8` (same)
- Heading: `#FFFFFF`
- Subheading: `#999999`

---

### PinCodeChecker

```tsx
interface PinCodeCheckerProps {
  onResult?: (result: { available: boolean; deliveryDate: string }) => void
}
```

```
┌────────────────────────────┐
│ 📍 Check delivery          │
│ [Enter PIN code    ] [Go →]│
│ ✓ Delivers today by 6pm   │ ← success state
│ ✗ Not available yet        │ ← error state
└────────────────────────────┘
```

- Input: `type="number"` , `inputMode="numeric"`, `maxLength={6}`
- Validates 6-digit Indian PIN format before API call
- Debounces API call by 500ms after last keystroke
