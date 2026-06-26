# 06 — Mobile Strategy

> Primary audience: mobile shoppers in Bangalore. Every decision defaults to mobile. Desktop is an enhancement.

---

## Core mobile rules

### 1. Touch targets — never below 44×44px

Every tappable element has a minimum touch area of `44px × 44px`. If the visual is smaller (e.g. a 20px icon), add invisible padding:

```css
.icon-button {
  padding: 12px;      /* 20px icon + 12px × 2 = 44px touch area */
  margin: -12px;      /* compensate for layout */
}
```

This applies to: nav icons, close buttons, quantity selectors, wishlist hearts, filter chips, review "helpful" buttons, everything.

---

### 2. Bottom navigation pattern

On mobile (`< 768px`), the most-used actions are reachable with one thumb.

**Bottom area (within 75mm from bottom of screen):**
- Primary CTA on product page: sticky `[Add to Cart]` bar
- Cart checkout CTA: sticky `[Proceed to Checkout]`
- Bottom sheet primary action: sticky inside sheet

**Never put a primary CTA in the top-right corner on mobile.** It requires a stretch.

---

### 3. Inputs are 48px tall on mobile

Standard 36px inputs are hard to tap. All inputs on this site use `height: 48px`.

```css
input, select, textarea {
  min-height: 48px;
  font-size: 16px;   /* CRITICAL: prevents iOS zoom on focus */
}
```

`font-size: 16px` on inputs is mandatory. iOS Safari auto-zooms the page when an input has `font-size < 16px`. This breaks the layout and frustrates users.

---

### 4. No hover states as primary UI

Hover is not available on touch. Any information or action accessible only on hover must also be accessible on tap. Rules:
- Product card "Add to Cart" button: visible at all times on mobile (not just on hover)
- Wishlist button: always visible, not hover-reveal
- Image hover overlay: replaced with a visible "View" link on mobile

---

### 5. Horizontal scroll pattern

Used for: occasion chips, category filters, similar products, review cards on mobile.

Always:
- `-webkit-overflow-scrolling: touch` for momentum
- `scroll-snap-type: x mandatory` for crisp snapping
- No visible scrollbar
- Right-edge fade gradient to hint at more content
- First and last items have extra padding to feel intentional

Never use horizontal scroll for the main product grid — users miss products. Grid goes vertical on mobile.

---

### 6. No heavy libraries on mobile

| What | Why avoided on mobile |
|---|---|
| Swiper.js | 30kb+, heavy. Use CSS scroll snap. |
| GSAP | 50kb+. Use Framer Motion (tree-shakeable). |
| Lodash | Use native JS. |
| Moment.js | Use `date-fns` (smaller) or native `Intl`. |

---

### 7. Image optimization for mobile

All images use `next/image` with:
- `sizes` attribute for responsive loading — mobile gets smaller files
- `priority` only on the hero image (above the fold)
- `placeholder="blur"` on all product images
- WebP format via Next.js automatic optimization
- Lazy loading by default (Next.js)

```tsx
<Image
  src={product.images[0]}
  alt={product.name}
  fill
  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
  placeholder="blur"
  blurDataURL={product.blurDataURL}
/>
```

---

## Breakpoint behavior — component by component

| Component | Mobile (< 768px) | Tablet (768–1023px) | Desktop (≥ 1024px) |
|---|---|---|---|
| Navbar | 56px, hamburger menu | 56px, hamburger menu | 72px, full nav links |
| Hero | Text above image, stacked | Text left, image right | Text left, image right |
| Product grid | 1 column | 2 columns | 3 columns |
| Occasion selector | Horizontal scroll | 4-column grid | 5-column grid (all visible) |
| CartDrawer | Full-screen bottom sheet | Full-screen bottom sheet | 400px right sidebar |
| Filters | Bottom sheet | Bottom sheet | Left sidebar (sticky) |
| Checkout | Single column, all sections visible | Single column | 2-col: form left, summary right |
| ProductCard tilt | None (touch) | None (touch) | Magnetic tilt enabled |
| Custom cursor | Hidden | Hidden | Enabled |
| Review wall | 1 column stacked | 2 column | 3 column masonry |
| Footer | 1 column | 2 column | 4 column |
| PinCodeChecker | Full width | Full width | Max 360px inline |
| EditorialSplit | Image top, text bottom | Image top, text bottom | 60/40 left/right split |
| HowItWorks | Vertical steps | Vertical steps | Horizontal 3-column |
| TrustStrip | 2×2 grid | Single row | Single row |

---

## Performance targets (mobile on 4G)

| Metric | Target |
|---|---|
| LCP (Largest Contentful Paint) | < 2.5s |
| FID / INP | < 100ms |
| CLS | < 0.1 |
| TTI (Time to Interactive) | < 3.5s |
| Total JS bundle | < 180kb gzipped |
| Hero image | < 80kb (WebP, optimized) |
| First page load | < 2s on 4G |

### How we hit these

- **Next.js App Router** — server components by default, client only where needed
- **Turbopack** — faster dev builds, no effect on production bundle (still uses SWC)
- **React Server Components** — product lists, reviews, blog posts fetch on server
- **Client components** — only: Cart, Wishlist, CustomCursor, CountdownTimer, Animations
- **Font loading:** `display=swap` + preconnect to Google Fonts
- **Critical CSS** inlined by Next.js automatically
- **No layout shift:** all images have explicit dimensions or `fill` with a sized parent

---

## Mobile-specific UX decisions

### Search
- Search icon in nav opens a full-screen search overlay (not a dropdown)
- Large `52px` input at top
- Recent searches shown immediately
- Trending: "Red roses", "Birthday flowers", "Cake combo"
- Results update as user types (debounced 300ms)

### WhatsApp CTA (mobile only)
A floating WhatsApp button appears on mobile after 5 seconds on-site:
- Bottom-right corner
- `56px` circular button, WhatsApp green
- Links to `wa.me/91XXXXXXXXXX?text=Hi! I want to order flowers`
- Dismissible (localStorage flag, doesn't reappear for 7 days)

### Back gesture safety
Never put critical content at the extreme left edge of the screen (iOS back-swipe zone is ~20px from left). All interactive elements start at `padding-left: 16px` minimum.

### Pull to refresh
On the shop page, native pull-to-refresh re-fetches the product list. Implemented with:
```ts
// Detect pull: touchstart at top of page → touchend with Y delta > 80px
// Show loading indicator, refetch, collapse
```

### Safe area insets
All fixed/sticky elements account for safe areas (iPhone notch / home bar):

```css
.sticky-cart-bar {
  padding-bottom: max(16px, env(safe-area-inset-bottom));
}

.navbar {
  padding-top: env(safe-area-inset-top);
}
```

---

## Accessibility on mobile

- All interactive elements have `aria-label` when no visible text
- Focus states visible even on mobile (users with keyboards/switch access)
- Bottom sheets use `role="dialog"` + `aria-modal="true"` + focus trap
- Images have meaningful `alt` text (not "flower-img-1.jpg")
- Color is never the sole indicator — stock status uses text + color
- Minimum contrast ratio: 4.5:1 for body text, 3:1 for large text

---

## Mobile gestures

| Gesture | Component | Behavior |
|---|---|---|
| Swipe left/right | Product image gallery | Navigate images |
| Swipe up | Bottom sheet | Expand to full height |
| Swipe down | Bottom sheet | Dismiss |
| Long press | Product card | Quick-add wishlist (haptic feedback) |
| Pull down | Shop page (at scroll top) | Refresh product list |
| Pinch | Product image | Zoom (native browser, not blocked) |

---

## iOS-specific fixes

```css
/* Prevent bounce scroll revealing white background */
html, body { background: #FFFFFF; }

/* Prevent tap highlight on iOS */
* { -webkit-tap-highlight-color: transparent; }

/* Smooth scrolling without inertia issues */
.scroll-container { -webkit-overflow-scrolling: touch; }

/* Fix 100vh on iOS (viewport height excludes address bar) */
.full-height { height: 100svh; }  /* svh = small viewport height */
```
