# 02 — Project Structure

---

## Folder tree

```
flowerwings-v2/
├── app/                          # Next.js 15 App Router
│   ├── (site)/                   # Public-facing route group
│   │   ├── layout.tsx            # Root layout: nav + footer + cursor
│   │   ├── page.tsx              # Home page
│   │   ├── shop/
│   │   │   ├── page.tsx          # Shop listing — all products
│   │   │   └── [category]/
│   │   │       └── page.tsx      # Filtered by category
│   │   ├── product/
│   │   │   └── [slug]/
│   │   │       └── page.tsx      # Product detail
│   │   ├── occasions/
│   │   │   └── page.tsx          # Browse by occasion
│   │   ├── cart/
│   │   │   └── page.tsx          # Cart review
│   │   ├── checkout/
│   │   │   └── page.tsx          # Checkout form + Razorpay
│   │   ├── order-confirmed/
│   │   │   └── page.tsx          # Post-purchase confirmation
│   │   ├── track/
│   │   │   └── [orderId]/
│   │   │       └── page.tsx      # Order tracking
│   │   ├── about/
│   │   │   └── page.tsx          # About Flower Wings
│   │   └── blog/
│   │       ├── page.tsx          # Blog index
│   │       └── [slug]/
│   │           └── page.tsx      # Blog post
│   ├── api/                      # API routes
│   │   ├── products/
│   │   │   └── route.ts
│   │   ├── orders/
│   │   │   └── route.ts
│   │   ├── payment/
│   │   │   ├── create/route.ts   # Razorpay order creation
│   │   │   └── verify/route.ts   # Razorpay webhook
│   │   └── track/
│   │       └── [orderId]/route.ts
│   ├── globals.css               # CSS custom properties + base styles
│   └── layout.tsx                # Root HTML shell
│
├── components/
│   ├── ui/                       # Pure UI primitives
│   │   ├── Button.tsx
│   │   ├── Badge.tsx
│   │   ├── Input.tsx
│   │   ├── Select.tsx
│   │   ├── Textarea.tsx
│   │   ├── Modal.tsx
│   │   ├── BottomSheet.tsx       # Mobile drawer (replaces modal on mobile)
│   │   ├── Toast.tsx
│   │   ├── Skeleton.tsx
│   │   ├── Spinner.tsx
│   │   ├── PetalRating.tsx       # Custom petal/flower rating
│   │   ├── CountdownTimer.tsx    # Same-day delivery cutoff countdown
│   │   └── Tag.tsx
│   │
│   ├── layout/                   # Structural layout components
│   │   ├── Navbar.tsx            # Sticky top nav (mobile-first)
│   │   ├── MobileMenu.tsx        # Full-screen slide-in mobile menu
│   │   ├── Footer.tsx
│   │   ├── CartDrawer.tsx        # Slide-in cart on mobile/desktop
│   │   └── PageTransition.tsx    # Framer Motion page wrapper
│   │
│   ├── sections/                 # Home page section components
│   │   ├── Hero.tsx
│   │   ├── TrustStrip.tsx
│   │   ├── OccasionSelector.tsx
│   │   ├── FeaturedProducts.tsx
│   │   ├── EditorialSplit.tsx    # Full-bleed editorial photo + copy
│   │   ├── HowItWorks.tsx
│   │   ├── ReviewWall.tsx
│   │   ├── UrgencyCTA.tsx        # Countdown + same-day CTA
│   │   ├── InstagramWall.tsx
│   │   └── CategoryBand.tsx      # Horizontal scroll category strip
│   │
│   ├── product/                  # Product-related components
│   │   ├── ProductCard.tsx       # Grid card with magnetic tilt
│   │   ├── ProductGrid.tsx       # Responsive product grid
│   │   ├── ProductDetail.tsx     # Full product page layout
│   │   ├── ProductImages.tsx     # Swipeable image gallery (mobile)
│   │   ├── AddToCartButton.tsx
│   │   ├── QuantitySelector.tsx
│   │   ├── WishlistButton.tsx
│   │   └── SimilarProducts.tsx
│   │
│   ├── cart/
│   │   ├── CartItem.tsx
│   │   ├── CartSummary.tsx
│   │   └── EmptyCart.tsx
│   │
│   ├── checkout/
│   │   ├── DeliveryForm.tsx
│   │   ├── GiftMessageInput.tsx
│   │   ├── TimeSlotPicker.tsx
│   │   ├── PaymentSection.tsx
│   │   └── OrderSummaryPanel.tsx
│   │
│   └── shared/
│       ├── CustomCursor.tsx      # Pink circle cursor (desktop only)
│       ├── ScrollReveal.tsx      # Intersection observer wrapper
│       ├── SectionHeader.tsx     # Consistent section title + sub
│       ├── ImageWithFallback.tsx # next/image + skeleton fallback
│       └── PinCodeChecker.tsx    # Delivery availability checker
│
├── lib/
│   ├── types.ts                  # All TypeScript interfaces
│   ├── constants.ts              # App-wide constants
│   ├── utils.ts                  # Shared utility functions
│   ├── api.ts                    # API client functions
│   ├── razorpay.ts               # Razorpay helpers
│   └── analytics.ts             # Event tracking helpers
│
├── store/
│   ├── cart.ts                   # Zustand cart store
│   ├── wishlist.ts               # Zustand wishlist store
│   └── ui.ts                     # UI state (drawer open, toast queue)
│
├── hooks/
│   ├── useCart.ts
│   ├── useWishlist.ts
│   ├── useMagneticTilt.ts        # Cursor-tracking card tilt
│   ├── useCountdown.ts           # Delivery cutoff countdown
│   ├── useScrollReveal.ts        # IntersectionObserver hook
│   ├── useBottomSheet.ts
│   └── useMediaQuery.ts          # Breakpoint detection
│
├── public/
│   ├── images/
│   │   ├── logo.png
│   │   ├── logo.svg
│   │   └── og-image.jpg
│   └── fonts/                    # Self-hosted font fallback
│
├── styles/
│   └── tokens.css                # CSS custom property definitions
│
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## Naming conventions

| Thing | Convention | Example |
|---|---|---|
| Components | PascalCase | `ProductCard.tsx` |
| Hooks | camelCase with `use` prefix | `useMagneticTilt.ts` |
| Store files | camelCase | `cart.ts` |
| CSS tokens | kebab-case with `--` prefix | `--color-pink` |
| API routes | kebab-case folder names | `/api/track-order/` |
| Page slugs | kebab-case | `/product/red-roses-bouquet` |
| Types/interfaces | PascalCase, no `I` prefix | `Product`, `CartItem` |
| Constants | SCREAMING_SNAKE_CASE | `MAX_QUANTITY`, `DELIVERY_CUTOFF_HOUR` |

---

## Key TypeScript interfaces

```typescript
// lib/types.ts

export interface Product {
  id: string
  slug: string
  name: string
  description: string
  shortDescription: string
  price: number
  originalPrice?: number          // for discount display
  images: string[]                // ordered: first = hero
  category: ProductCategory
  occasions: Occasion[]
  inStock: boolean
  stockCount?: number
  deliveryEligible: boolean       // same-day eligible
  rating: number                  // 0–5, supports 0.5 steps
  reviewCount: number
  tags: string[]
  isBestseller: boolean
  isFeatured: boolean
  weight?: string                 // e.g. "500g"
  flowers?: string[]              // e.g. ["Roses", "Baby's Breath"]
}

export type ProductCategory =
  | 'flowers'
  | 'bouquets'
  | 'arrangements'
  | 'plants'
  | 'cakes'
  | 'gift-combos'

export type Occasion =
  | 'birthday'
  | 'anniversary'
  | 'valentines'
  | 'get-well'
  | 'sympathy'
  | 'congratulations'
  | 'mothers-day'
  | 'just-because'

export interface CartItem {
  product: Product
  quantity: number
  giftMessage?: string
  addedAt: number                 // timestamp
}

export interface Order {
  id: string
  items: CartItem[]
  delivery: DeliveryDetails
  payment: PaymentDetails
  status: OrderStatus
  createdAt: string
  estimatedDelivery: string
  trackingSteps: TrackingStep[]
}

export interface DeliveryDetails {
  recipientName: string
  recipientPhone: string
  address: string
  pinCode: string
  city: string
  landmark?: string
  timeSlot: TimeSlot
  deliveryDate: string
}

export type TimeSlot =
  | 'morning-9-12'
  | 'afternoon-12-3'
  | 'evening-3-6'
  | 'night-6-9'

export type OrderStatus =
  | 'placed'
  | 'confirmed'
  | 'arranging'
  | 'out-for-delivery'
  | 'delivered'

export interface TrackingStep {
  status: OrderStatus
  label: string
  timestamp?: string
  completed: boolean
}

export interface Review {
  id: string
  productId: string
  authorName: string
  location: string
  rating: number
  body: string
  date: string
  verified: boolean
  occasion?: Occasion
}
```

---

## Environment variables

```bash
# .env.local

# App
NEXT_PUBLIC_APP_URL=https://flowerwings.in
NEXT_PUBLIC_APP_NAME="Flower Wings"

# Razorpay
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_live_xxxx
RAZORPAY_KEY_SECRET=xxxx

# Image CDN (Cloudinary or similar)
NEXT_PUBLIC_IMAGE_CDN=https://res.cloudinary.com/flowerwings

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXX
```
