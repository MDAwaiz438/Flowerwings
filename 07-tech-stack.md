# 07 — Tech Stack

---

## Stack overview

| Layer | Choice | Why |
|---|---|---|
| Framework | Next.js 15 (App Router) | RSC, built-in optimization, file-based routing |
| Build tool | Turbopack (bundled with Next 15) | ~10x faster HMR than Webpack |
| Language | TypeScript 5 (strict mode) | Type safety across the entire codebase |
| Styling | Tailwind CSS v4 | Utility-first, works perfectly with RSC |
| Animation | Framer Motion | Best-in-class React animation, tree-shakeable |
| State | Zustand | Lightweight, simple, no boilerplate |
| Payment | Razorpay | Standard in India, easy integration |
| Images | Next.js Image (next/image) | Auto-optimize, WebP, lazy load |
| Icons | Lucide React | Tree-shakeable, consistent stroke style |
| Fonts | Google Fonts (Cormorant Garamond + DM Sans + DM Mono) | Free, high quality |
| Forms | React Hook Form + Zod | Type-safe validation |
| HTTP | Native fetch (server) / SWR (client) | Minimal footprint |

---

## `next.config.ts`

```ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    turbopack: true,          // Enable Turbopack
    reactCompiler: true,      // Auto-memoization (React 19)
    optimisticClientCache: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'https', hostname: 'flowerwings.in' },
    ],
    deviceSizes: [375, 414, 768, 1024, 1280, 1440],
    imageSizes: [16, 32, 64, 128, 256],
  },
  compress: true,
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ]
  },
}

export default nextConfig
```

---

## `tailwind.config.ts`

```ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          DEFAULT: '#FF83A8',
          deep: '#E8549E',
          blush: '#FFD6E7',
          petal: '#FFF0F7',
        },
        green: {
          DEFAULT: '#52C5C2',
          deep: '#4E9B28',
          leaf: '#F0F9EB',
        },
        ivory: '#FFFFFF',
        ink: '#1A1A1A',
        slate: '#4A4A4A',
        mist: '#9A9A9A',
        line: '#EDEDED',
        dark: '#111111',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        body: ['DM Sans', '-apple-system', 'sans-serif'],
        mono: ['DM Mono', 'Courier New', 'monospace'],
      },
      fontSize: {
        'hero': ['40px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h1': ['32px', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h2': ['24px', { lineHeight: '1.3' }],
        'h3': ['18px', { lineHeight: '1.4' }],
        'body': ['14px', { lineHeight: '1.7' }],
        'small': ['12px', { lineHeight: '1.6' }],
        'micro': ['10px', { lineHeight: '1.5', letterSpacing: '0.08em' }],
      },
      borderRadius: {
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '20px',
      },
      boxShadow: {
        'card': '0 2px 12px rgba(255, 105, 180, 0.08)',
        'card-hover': '0 8px 32px rgba(255, 105, 180, 0.16)',
        'modal': '0 24px 64px rgba(0, 0, 0, 0.16)',
        'sticky': '0 2px 16px rgba(0, 0, 0, 0.06)',
      },
      screens: {
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1440px',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'pulse-soft': 'pulse 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config
```

---

## `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": false,
    "skipLibCheck": true,
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitOverride": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": {
      "@/*": ["./*"],
      "@/components/*": ["./components/*"],
      "@/lib/*": ["./lib/*"],
      "@/store/*": ["./store/*"],
      "@/hooks/*": ["./hooks/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

---

## `package.json` (key dependencies)

```json
{
  "name": "flowerwings-v2",
  "version": "2.0.0",
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "type-check": "tsc --noEmit"
  },
  "dependencies": {
    "next": "^15.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "framer-motion": "^11.0.0",
    "zustand": "^5.0.0",
    "lucide-react": "^0.400.0",
    "react-hook-form": "^7.0.0",
    "zod": "^3.0.0",
    "swr": "^2.0.0",
    "razorpay": "^2.0.0",
    "date-fns": "^3.0.0",
    "clsx": "^2.0.0",
    "tailwind-merge": "^2.0.0"
  },
  "devDependencies": {
    "typescript": "^5.0.0",
    "@types/node": "^20.0.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "tailwindcss": "^4.0.0",
    "@tailwindcss/postcss": "^4.0.0",
    "autoprefixer": "^10.0.0",
    "eslint": "^9.0.0",
    "eslint-config-next": "^15.0.0"
  }
}
```

---

## Zustand stores

### Cart store

```ts
// store/cart.ts
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { CartItem, Product } from '@/lib/types'

interface CartStore {
  items: CartItem[]
  addItem: (product: Product, quantity?: number) => void
  removeItem: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  setGiftMessage: (productId: string, message: string) => void
  clearCart: () => void
  totalItems: () => number
  totalPrice: () => number
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (product, quantity = 1) => {
        set((state) => {
          const existing = state.items.find(i => i.product.id === product.id)
          if (existing) {
            return {
              items: state.items.map(i =>
                i.product.id === product.id
                  ? { ...i, quantity: i.quantity + quantity }
                  : i
              )
            }
          }
          return {
            items: [...state.items, { product, quantity, addedAt: Date.now() }]
          }
        })
      },
      removeItem: (productId) =>
        set(state => ({ items: state.items.filter(i => i.product.id !== productId) })),
      updateQuantity: (productId, quantity) =>
        set(state => ({
          items: quantity === 0
            ? state.items.filter(i => i.product.id !== productId)
            : state.items.map(i =>
                i.product.id === productId ? { ...i, quantity } : i
              )
        })),
      setGiftMessage: (productId, message) =>
        set(state => ({
          items: state.items.map(i =>
            i.product.id === productId ? { ...i, giftMessage: message } : i
          )
        })),
      clearCart: () => set({ items: [] }),
      totalItems: () => get().items.reduce((sum, i) => sum + i.quantity, 0),
      totalPrice: () => get().items.reduce((sum, i) => sum + i.product.price * i.quantity, 0),
    }),
    { name: 'fw-cart' }
  )
)
```

---

## Razorpay integration

```ts
// lib/razorpay.ts

export async function createRazorpayOrder(amount: number, orderId: string) {
  const response = await fetch('/api/payment/create', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ amount: amount * 100, orderId }), // Razorpay uses paise
  })
  return response.json()
}

export function openRazorpayCheckout(options: {
  orderId: string
  amount: number
  customerName: string
  customerPhone: string
  onSuccess: (response: RazorpayResponse) => void
  onDismiss: () => void
}) {
  const rzp = new (window as any).Razorpay({
    key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
    amount: options.amount * 100,
    currency: 'INR',
    name: 'Flower Wings',
    description: 'Flower & Gift Delivery',
    image: '/images/logo.png',
    order_id: options.orderId,
    handler: options.onSuccess,
    prefill: {
      name: options.customerName,
      contact: options.customerPhone,
    },
    theme: { color: '#FF83A8' },
    modal: { ondismiss: options.onDismiss },
  })
  rzp.open()
}
```

---

## Utility functions

```ts
// lib/utils.ts

import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

// Tailwind class merging
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Format price in INR
export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
  }).format(price)
  // Output: ₹1,199
}

// Calculate time remaining to cutoff
export function getTimeToDeliveryCutoff(cutoffHour = 15): {
  hours: number; minutes: number; seconds: number; expired: boolean
} {
  const now = new Date()
  const cutoff = new Date()
  cutoff.setHours(cutoffHour, 0, 0, 0)

  if (now >= cutoff) {
    cutoff.setDate(cutoff.getDate() + 1)
  }

  const diff = cutoff.getTime() - now.getTime()
  const hours = Math.floor(diff / (1000 * 60 * 60))
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((diff % (1000 * 60)) / 1000)

  return { hours, minutes, seconds, expired: now.getHours() >= cutoffHour }
}

// Truncate text
export function truncate(str: string, length: number): string {
  return str.length > length ? str.slice(0, length) + '…' : str
}

// Generate WhatsApp link
export function getWhatsAppLink(phone: string, message: string): string {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
}
```
