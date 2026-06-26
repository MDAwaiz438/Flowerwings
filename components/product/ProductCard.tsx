'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBag, Heart } from 'lucide-react';
import { Product } from '@/lib/types';
import { formatPrice } from '@/lib/utils';
import { useCartStore } from '@/store/useCartStore';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);
  const [isWished, setIsWished] = useState(false);

  return (
    <div className="group relative flex flex-col">
      {/* Image Container */}
      <Link href={`/product/${product.slug}`} className="relative aspect-[3/4] rounded-xl md:rounded-2xl overflow-hidden bg-cream mb-4 block">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-ink/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-teal text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
            {product.badge}
          </span>
        )}

        {/* Wishlist button */}
        <button
          onClick={(e) => { e.preventDefault(); setIsWished(!isWished); }}
          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-white shadow-sm"
          aria-label="Add to wishlist"
        >
          <Heart
            className={`w-4 h-4 transition-colors ${isWished ? 'text-pink fill-pink' : 'text-charcoal'}`}
            strokeWidth={1.5}
          />
        </button>

        {/* Quick Add */}
        <button
          onClick={(e) => { e.preventDefault(); addItem(product); }}
          className="absolute bottom-3 left-3 right-3 h-[42px] bg-white/95 backdrop-blur-sm text-charcoal text-[12px] font-bold uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300 hover:bg-pink hover:text-white shadow-sm"
        >
          <ShoppingBag className="w-3.5 h-3.5" strokeWidth={2} />
          Quick Add
        </button>
      </Link>

      {/* Info */}
      <div className="flex flex-col gap-1 px-1">
        <Link href={`/product/${product.slug}`}>
          <h3 className="text-[14px] font-medium text-ink leading-snug group-hover:text-pink transition-colors duration-300 line-clamp-1">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center gap-2">
          <span className="text-[15px] font-semibold text-ink">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-[13px] text-mist line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
