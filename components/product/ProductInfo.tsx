'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Heart, Star, ShieldCheck, Clock, Truck } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Accordion } from '@/components/ui/Accordion';
import type { Product } from '@/lib/types';
import { useCartStore } from '@/store/useCartStore';

interface ProductInfoProps {
  product: Product;
}

export function ProductInfo({ product }: ProductInfoProps) {
  const [quantity, setQuantity] = useState(1);
  const addItem = useCartStore((state) => state.addItem);
  const setIsOpen = useCartStore((state) => state.setIsOpen);

  const handleAddToCart = () => {
    addItem(product, quantity);
    setIsOpen(true); // Open cart drawer immediately for frictionless experience
  };

  const accordionItems = [
    {
      title: 'Product Details',
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Hand-tied with premium imported flowers.</li>
          <li>Comes in a luxurious matte-finish wrapper.</li>
          <li>Includes a complimentary handwritten message card.</li>
          {product.flowers && (
            <li><strong>Flowers included:</strong> {product.flowers.join(', ')}</li>
          )}
        </ul>
      ),
    },
    {
      title: 'Delivery Information',
      content: (
        <div className="space-y-3">
          <p>We deliver across Bangalore city limits.</p>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <Clock className="w-4 h-4 text-teal mt-0.5" />
              <span><strong>Same Day Delivery:</strong> Available for orders placed before 4:00 PM.</span>
            </li>
            <li className="flex items-start gap-2">
              <Truck className="w-4 h-4 text-teal mt-0.5" />
              <span><strong>Standard Delivery:</strong> 9:00 AM - 9:00 PM slots available everyday.</span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Care Instructions',
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Unwrap the flowers carefully upon receipt.</li>
          <li>Trim the stems at a 45-degree angle (about 1-2 inches).</li>
          <li>Place in a clean vase with fresh water.</li>
          <li>Change the water every 2 days and keep away from direct sunlight.</li>
        </ul>
      ),
    },
  ];

  return (
    <div className="w-full flex flex-col pt-4 lg:pt-0">
      
      {/* Breadcrumbs / Meta */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-teal">
          {product.category.replace('-', ' ')}
        </span>
        <div className="flex items-center gap-1 text-[13px] text-slate font-medium">
          <Star className="w-4 h-4 fill-pink text-pink" />
          <span>{product.rating}</span>
          <span className="text-mist">({product.reviewCount} reviews)</span>
        </div>
      </div>

      {/* Title & Price */}
      <h1 className="text-[clamp(2rem,3vw,3rem)] font-display text-ink leading-[1.1] mb-4">
        {product.name}
      </h1>
      
      <div className="flex items-baseline gap-4 mb-8">
        <span className="text-[24px] md:text-[28px] font-semibold text-ink">
          ₹{product.price.toLocaleString('en-IN')}
        </span>
        {product.originalPrice && (
          <span className="text-[16px] text-mist line-through">
            ₹{product.originalPrice.toLocaleString('en-IN')}
          </span>
        )}
      </div>

      {/* Description */}
      <p className="text-[15px] text-charcoal/80 leading-relaxed mb-10">
        {product.description}
      </p>

      {/* Quantity & Add to Cart */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-10">
        
        {/* Quantity Selector */}
        <div className="w-full sm:w-[120px] h-[52px] rounded-xl border border-line/60 flex items-center justify-between px-4 bg-warm-white">
          <button 
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="text-slate hover:text-pink transition-colors px-2 text-lg"
          >
            -
          </button>
          <span className="font-semibold text-ink text-[15px]">{quantity}</span>
          <button 
            onClick={() => setQuantity(quantity + 1)}
            className="text-slate hover:text-pink transition-colors px-2 text-lg"
          >
            +
          </button>
        </div>

        <Button
          size="full"
          icon={<ShoppingBag className="w-5 h-5" strokeWidth={2} />}
          onClick={handleAddToCart}
          className="flex-1 shadow-card hover:shadow-card-hover hover:-translate-y-0.5"
        >
          Add to Cart
        </Button>

        <button className="w-full sm:w-[52px] h-[52px] rounded-xl border border-line/60 flex items-center justify-center text-slate hover:text-pink hover:border-pink hover:bg-pink-petal/30 transition-all flex-shrink-0">
          <Heart className="w-5 h-5" strokeWidth={1.5} />
        </button>

      </div>

      {/* Trust Badges */}
      <div className="grid grid-cols-2 gap-4 mb-10 bg-warm-white p-5 rounded-2xl border border-line/40">
        <div className="flex items-center gap-3 text-[13px] font-medium text-charcoal">
          <div className="w-8 h-8 rounded-full bg-teal-light flex items-center justify-center text-teal">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <span>Secure Payment</span>
        </div>
        <div className="flex items-center gap-3 text-[13px] font-medium text-charcoal">
          <div className="w-8 h-8 rounded-full bg-teal-light flex items-center justify-center text-teal">
            <Truck className="w-4 h-4" />
          </div>
          <span>On-time Delivery</span>
        </div>
      </div>

      {/* Accordion Details */}
      <Accordion items={accordionItems} />

    </div>
  );
}
