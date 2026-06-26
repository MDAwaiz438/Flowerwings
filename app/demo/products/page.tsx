import React from 'react';
import { ProductCard } from '@/components/product/ProductCard';
import { Product } from '@/lib/types';
import { SlidersHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/Button';

// AI generated images
const AI_IMAGES = [
  '/images/purple_orchids.png',
  '/images/red_roses.png',
  '/images/white_lilies.png'
];

const CATEGORIES: Product['category'][] = ['bouquets', 'arrangements', 'flowers', 'gift-combos'];
const BADGES = ['Bestseller', 'New Arrival', 'Premium', 'Most Loved', undefined, undefined, undefined];

// Generate 30 mock samples
const mockProducts: Product[] = Array.from({ length: 30 }).map((_, i) => {
  const image = AI_IMAGES[i % AI_IMAGES.length];
  const category = CATEGORIES[i % CATEGORIES.length];
  const badge = BADGES[i % BADGES.length];
  const price = 899 + (i * 150) % 3000;
  
  return {
    id: `demo-p${i + 1}`,
    slug: `premium-arrangement-${i + 1}`,
    name: `Premium Floral Arrangement ${i + 1}`,
    description: 'A handcrafted luxury arrangement created by our master florists. Perfect for any special occasion or as a thoughtful gift.',
    shortDescription: 'Luxury handcrafted bouquet',
    price: price,
    originalPrice: price > 2000 ? price + 500 : undefined,
    image: image,
    images: [image],
    category: category,
    occasions: ['anniversary', 'birthday', 'valentines'],
    inStock: true,
    deliveryEligible: true,
    rating: Number((4 + Math.random()).toFixed(1)),
    reviewCount: Math.floor(Math.random() * 200) + 10,
    tags: ['luxury', 'premium'],
    isBestseller: badge === 'Bestseller',
    isFeatured: true,
    badge: badge,
  };
});

export default function DemoProductsPage() {
  return (
    <div className="flex-1 bg-ivory pt-[104px] md:pt-[112px]">
      {/* Header Area */}
      <div className="bg-pink-petal/30 py-12 md:py-16">
        <div className="max-w-[1440px] mx-auto px-4 md:px-10 xl:px-20 text-center">
          <h1 className="text-hero font-display text-ink mb-4">Premium Catalog Demo</h1>
          <p className="text-body text-slate max-w-[600px] mx-auto">
            Viewing 30 dynamically generated product samples using our new AI-generated luxury imagery.
          </p>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 md:px-10 xl:px-20 py-10">
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Filters Sidebar (Desktop) */}
          <div className="hidden md:block w-64 flex-shrink-0">
            <div className="sticky top-[140px] border border-line rounded-lg p-6 bg-white">
              <h3 className="font-display text-h3 text-ink mb-6 flex items-center gap-2">
                <SlidersHorizontal className="w-5 h-5" />
                Filters
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-body text-ink mb-3">Categories</h4>
                  <div className="space-y-2 text-sm text-slate">
                    <label className="flex items-center gap-2 cursor-pointer hover:text-pink transition-colors">
                      <input type="checkbox" className="accent-pink" defaultChecked /> All Samples (30)
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <Button variant="outline" className="md:hidden flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </Button>
              <div className="text-slate text-sm font-medium">Showing 30 products</div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              {mockProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
