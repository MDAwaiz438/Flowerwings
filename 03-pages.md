# 03 — Pages

Every page is mobile-first. Desktop is an enhancement, not the default.

---

## Global layout

### Navbar (sticky)

**Mobile:**
- Height: `56px`
- Left: Logo (SVG, 120px wide)
- Right: Search icon + Cart icon (with item count badge) + Hamburger
- Background: `#FFFFFF` with `--shadow-sticky` on scroll
- On scroll past 20px: border-bottom `1px solid --color-line`

**Desktop:**
- Height: `72px`
- Left: Logo
- Center: Nav links — Home · Shop · Occasions · About
- Right: Search · Wishlist · Cart · "Order Now" button (pink)

**Cart badge:** Pink circle `#FF83A8`, white number, `18px` diameter. Animates with a spring pop when item added.

---

### Footer

**Mobile:** Single column stack
**Desktop:** 4-column grid

Columns:
1. Logo + tagline + social icons (Instagram, Facebook, WhatsApp)
2. Quick links: Shop · Occasions · Track Order · Blog
3. Help: FAQ · Delivery Info · Returns · Contact
4. Contact: WhatsApp number · Email · Bangalore address + map link

Bottom bar: `© 2025 Flower Wings · Made with ❤️ in Bangalore`

---

## Page 1 — Home (`/`)

### Section 1: Hero

**Mobile layout:**
```
┌─────────────────────────┐
│  [eyebrow text]         │
│                         │
│  Flowers that make      │
│  them feel              │
│  something.             │
│                         │
│  [body copy — 2 lines]  │
│                         │
│  [Shop Now btn]  [Occ.] │
│                         │
│  ┌───────────────────┐  │
│  │   Hero product    │  │
│  │   photograph      │  │
│  │   (full width)    │  │
│  └───────────────────┘  │
└─────────────────────────┘
```

**Desktop layout:**
- Left 55%: Text content, vertically centered
- Right 45%: Hero product photo, slightly oversized (bleeds to edge)
- Full viewport height (`100svh`)

**Content:**
- Eyebrow: `SAME-DAY DELIVERY · BANGALORE` in pink, 10px uppercase DM Sans
- H1: `Flowers that make them feel something.` — Cormorant Garamond 300, italic "something"
- Body: `Fresh blooms, artisan arrangements, delivered the same day. Because the right flowers say what words can't.`
- CTA 1: `Shop Now` — solid pink button, border-radius 4px
- CTA 2: `Browse Occasions` — ghost button, ink border

**Animation (Framer Motion):**
- Eyebrow: fade up, delay 0ms
- H1 line 1: fade up, delay 100ms
- H1 line 2: fade up, delay 200ms
- H1 line 3: fade up, delay 300ms
- Body: fade up, delay 400ms
- Buttons: fade up, delay 500ms
- Hero photo: fade in + subtle scale from 1.03 → 1.0, delay 200ms

**Background:** `#FFFFFF` — no gradient, no overlay

---

### Section 2: Trust Strip

Full-bleed `#FF83A8` band. Single row on mobile (horizontal scroll if needed).

```
🌸 50,000+ bouquets  ·  ⚡ Same-day delivery  ·  ⭐ 4.9 rating  ·  📍 All Bangalore
```

- Font: DM Sans 500, 12px, white
- Padding: `12px 0`
- Numbers animate with a rolling counter on first scroll into view
- On mobile: wraps into 2×2 grid instead of horizontal scroll

---

### Section 3: Occasion Selector

**Heading:** `What's the occasion?`

**Mobile:** Horizontal scroll row. No scrollbar visible (`scrollbar-width: none`). Scroll hint: rightmost card is 50% cut off to signal scrollability.

**Desktop:** 5 cards in a row, equal width, no scroll.

**Occasion cards:**
| Occasion | Emoji | Color scheme |
|---|---|---|
| Birthday | 🎂 | Pink bg `#FFF0F7`, pink border |
| Anniversary | 💍 | Pink bg, gold accent text |
| Get Well | 🌿 | Green bg `#F0F9EB`, green border |
| Valentine's | 💝 | Deep pink bg, pink border |
| Sympathy | 🕊️ | Light gray bg, gray border |
| Congratulations | 🎉 | Pink bg |
| Just Because | 🌸 | Pink bg |

**Card anatomy (mobile):**
- Width: `120px` fixed
- Padding: `16px 12px`
- Icon: `32px`
- Label: `11px` uppercase DM Sans 500
- Border radius: `12px`
- On tap: border becomes pink, slight scale 1.02, navigates to `/occasions?type=birthday`

---

### Section 4: Featured Products

**Heading:** `Bestsellers`  
**Subheading:** `Handpicked for Bangalore`

**Mobile:** Single column list of cards (full width)
**Tablet (≥768px):** 2-column grid
**Desktop (≥1024px):** 3-column grid

**"View all" link** at section bottom right → `/shop`

See `ProductCard` spec in `04-components.md`.

---

### Section 5: Editorial Split — Brand Story

**Dark section** (`#111111` background).

**Mobile:**
```
┌─────────────────────────┐
│   [Full-width photo]    │
│   aspect ratio 4:3      │
├─────────────────────────┤
│  OUR PROMISE            │
│                         │
│  Not just flowers.      │
│  A feeling,             │
│  delivered.             │
│                         │
│  Every arrangement is   │
│  handcrafted by our     │
│  florists in Bangalore. │
│                         │
│  [Learn our story →]    │
└─────────────────────────┘
```

**Desktop:** 60/40 horizontal split. Photo left, text right, vertically centered.

**Text colors on dark bg:**
- Eyebrow: `#FF83A8`
- H2: `#FFFFFF` (Cormorant Garamond 300)
- Body: `#999999`
- Link: `#FFFFFF` with pink underline on hover

---

### Section 6: How It Works

**Heading:** `From our hands to theirs`

3 steps in horizontal layout on desktop, vertical stack on mobile.

| # | Icon (Lucide) | Title | Description |
|---|---|---|---|
| 1 | `<Flower />` | Choose your bloom | Browse by occasion, price, or flower type |
| 2 | `<Scissors />` | We hand-arrange | Our Bangalore florists craft every bouquet fresh |
| 3 | `<Package />` | Delivered with care | Same-day or scheduled — always on time |

**Mobile:** Stack vertically with a vertical dotted line connector between steps.  
**Desktop:** Three columns with horizontal connector line between numbered circles.

**Step number style:** Circle `40px`, border `1.5px solid #FF83A8`, `#FF83A8` text inside, DM Sans 500.

---

### Section 7: Urgency CTA

**Background:** `#FFF0F7` (petal — light pink, not full pink)

**Content:**
```
ORDER IN [HH:MM:SS] FOR SAME-DAY DELIVERY

      [Order Now — Delivered Today →]
```

- Countdown timer: live, updates every second
- Resets to next delivery cutoff (3:00 PM IST)
- After cutoff: shows "Order now for tomorrow morning delivery"
- Timer font: DM Mono, `32px` on mobile, `48px` on desktop
- Button: solid `#FF83A8`, full width on mobile

---

### Section 8: Review Wall

**Heading:** `What Bangalore is saying`

**Mobile:** Vertical stack of review cards
**Desktop:** 3-column masonry grid

**Review card:**
- Background: `#FFFFFF`
- Border: `0.5px solid #FFD6E7`
- Border radius: `12px`
- Padding: `20px`
- Petal rating (see `PetalRating` component)
- Quote text: Cormorant Garamond 400 italic, 15px
- Author + location: DM Sans 500, 12px, `#FF83A8`
- Occasion tag: green badge (e.g. "Birthday gift")

Auto-scroll on desktop (pauses on hover). No auto-scroll on mobile (performance).

---

### Section 9: Instagram Wall

**Heading:** `Moments we've delivered`

**Mobile:** 2-column grid of square photos, 4 visible + "See more on Instagram" CTA
**Desktop:** 5-column masonry, 10 photos

Each photo on hover (desktop): pink overlay + Instagram icon + "Shop this look" text

---

## Page 2 — Shop (`/shop`)

### Layout

**Mobile:**
- Full-width filter pill row (horizontal scroll): All · Flowers · Bouquets · Plants · Cakes · Combos
- Sort dropdown (right-aligned): Featured · Price low-high · Price high-low · Newest
- Product grid below: single column on mobile, 2-col on tablet, 3-col on desktop

**Filter sheet:** On mobile, tapping "Filters" opens a bottom sheet (not a sidebar) with:
- Occasion checkboxes
- Price range slider (₹0 – ₹5000)
- Flower type checkboxes
- "Show X results" sticky button at bottom of sheet

### Product count

`Showing 24 of 86 products` below filters

### Infinite scroll

Load more on scroll. Skeleton cards appear before data loads. No "Load more" button — scroll is natural on mobile.

---

## Page 3 — Product Detail (`/product/[slug]`)

### Mobile layout (top to bottom)

1. **Image gallery** — full-width, swipeable. Dots indicator below. Aspect ratio 1:1.
2. **Product info block**
   - Category breadcrumb: `Flowers > Bouquets`
   - Product name: DM Sans 500, 20px
   - Petal rating + review count (tappable → jumps to reviews)
   - Price: DM Mono, 24px, `#FF83A8`
   - Original price if on discount (strikethrough, gray)
   - Stock badge: `In stock · Ships today` in green
3. **Delivery checker**
   - Input: "Enter PIN code"
   - On submit: shows "Delivers today by 6pm ✓" or "Delivers tomorrow"
4. **Quantity selector** (- / count / +)
5. **Gift message input** (expandable textarea, optional)
6. **Add to Cart** — full-width pink button, `56px` height, sticky at bottom of screen
7. **Product description** (accordion on mobile, always open on desktop)
8. **What's in the bouquet** — flower list with quantities
9. **Similar products** — horizontal scroll row

### Desktop layout

- Left: Image gallery (sticky on scroll up to fold)
- Right: All info blocks in scrollable column

### Sticky Add to Cart (mobile)

When user scrolls past the product info block, a thin sticky bar appears at the bottom:
```
[Product name — ₹699]              [Add to Cart]
```
Height `64px`, background `#FFFFFF`, top border `1px solid #FFD6E7`.

---

## Page 4 — Occasions (`/occasions`)

Grid of occasion cards, each linking to pre-filtered shop.

Each card: large editorial photo, occasion name in Cormorant Garamond, "Shop [X] gifts →" link.

**Mobile:** 2-column grid
**Desktop:** 3-column grid

---

## Page 5 — Cart (`/cart`)

**Mobile:** Full-page cart. No sidebar.

### Empty state
Center-aligned:
- Icon: `<ShoppingCart />` in `#FFD6E7`, 48px
- Heading: `Your cart is empty`
- Body: `Add some flowers and make someone's day.`
- CTA: `Browse flowers →`

### Cart with items

```
┌─────────────────────────┐
│ Cart (3 items)          │
├─────────────────────────┤
│ [img] Rose Bouquet      │
│       ₹699  [- 1 +]  [×]│
│       🌿 Ships today    │
├─────────────────────────┤
│ [img] Tulip Elegance    │
│       ₹1,199 [- 1 +] [×]│
├─────────────────────────┤
│ Add a gift message?     │
│ [Write a message...]    │
├─────────────────────────┤
│ Subtotal        ₹1,898  │
│ Delivery           Free │
│ ──────────────────────  │
│ Total           ₹1,898  │
│                         │
│ [Proceed to Checkout →] │
└─────────────────────────┘
```

---

## Page 6 — Checkout (`/checkout`)

Single-page checkout. No multi-step wizard (reduces drop-off on mobile).

Sections (top to bottom on mobile):

1. **Delivery details**
   - Recipient name
   - Recipient phone
   - Full address (textarea)
   - PIN code + auto-city fill
   - Landmark (optional)

2. **Delivery time**
   - Date picker (min: today if before 3pm, else tomorrow)
   - Time slot selector: Morning 9–12 · Afternoon 12–3 · Evening 3–6 · Night 6–9

3. **Gift message** (if not entered on product page)

4. **Order summary** (collapsed accordion on mobile, expanded on desktop)

5. **Payment**
   - "Pay ₹X with Razorpay" — single button, opens Razorpay modal
   - Below: lock icon + "100% secure payment"

---

## Page 7 — Order Confirmed (`/order-confirmed`)

**Animation:** Framer Motion — petal SVGs animate outward from center on load.

```
          🌸

    Order Confirmed!

  Order #FW-2025-4821

  [Timeline tracker]
  ✓ Order placed
  ○ Being arranged
  ○ Out for delivery
  ○ Delivered

  Expected delivery:
  Today, 3–6 PM

  [Track your order →]
  [Continue shopping]
```

---

## Page 8 — Track Order (`/track/[orderId]`)

Live order tracking page.

**Timeline component:**
- Vertical stepper, mobile-friendly
- Each step: circle (filled pink if complete, outlined if pending) + label + timestamp

**Statuses:**
1. Order placed — `"We've received your order"`
2. Being arranged — `"Our florists are crafting your bouquet"`
3. Out for delivery — `"Your flowers are on their way"`
4. Delivered — `"Delivered! Hope they loved it 🌸"`

---

## Page 9 — About (`/about`)

Sections:
1. **Hero:** `"Blooming since 2018"` — Cormorant Garamond, full-width editorial photo
2. **Story:** 2-paragraph brand narrative, editorial split layout
3. **Team:** Grid of florist photos with names (3-col desktop, 2-col mobile)
4. **Numbers:** `50,000+ deliveries · 4.9 stars · 6 years · Bangalore`
5. **Sustainability note:** Locally sourced, eco-packaging

---

## Page 10 — Blog (`/blog`)

**Index:** Card grid. 2-col mobile, 3-col desktop.  
Each card: Cover image (16:9) + Category tag + Title (Cormorant) + Date + Read time.

**Post:** Single-column article layout, `65ch` max-width. Author bio at bottom. Related posts (3 cards).
