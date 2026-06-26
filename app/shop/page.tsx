import React from 'react';
import { ProductCard } from '@/components/product/ProductCard';
import { Product } from '@/lib/types';
import { SlidersHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/Button';

// Mock data (we can extract this to a data file later)
const products: Product[] = [
  {
    id: 'p1',
    slug: 'blushing-beauty',
    name: 'Blushing Beauty Bouquet',
    description: 'A beautiful mix of pink roses and lilies.',
    shortDescription: 'Pink roses and lilies',
    price: 1299,
    originalPrice: 1499,
    images: ['https://images.unsplash.com/photo-1563241527-3004b7be0ffd?q=80&w=600&auto=format&fit=crop'],
    category: 'bouquets',
    occasions: ['anniversary', 'valentines'],
    inStock: true,
    deliveryEligible: true,
    rating: 4.8,
    reviewCount: 124,
    tags: ['roses', 'lilies'],
    isBestseller: true,
    isFeatured: true,
  },
  {
    id: 'p2',
    slug: 'sunshine-daisies',
    name: 'Sunshine Daisies',
    description: 'Bright and cheerful yellow daisies to light up any room.',
    shortDescription: 'Yellow daisies',
    price: 899,
    images: ['https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=600&auto=format&fit=crop'],
    category: 'flowers',
    occasions: ['birthday', 'get-well'],
    inStock: true,
    deliveryEligible: true,
    rating: 4.5,
    reviewCount: 89,
    tags: ['daisies', 'yellow'],
    isBestseller: false,
    isFeatured: true,
  },
  {
    id: 'p3',
    slug: 'elegant-orchids',
    name: 'Elegant Purple Orchids',
    description: 'Premium purple orchids in a glass vase.',
    shortDescription: 'Purple orchids in vase',
    price: 1899,
    images: ['https://images.unsplash.com/photo-1558022638-7bb79e00139b?q=80&w=600&auto=format&fit=crop'],
    category: 'arrangements',
    occasions: ['congratulations', 'anniversary'],
    inStock: true,
    deliveryEligible: true,
    rating: 4.9,
    reviewCount: 56,
    tags: ['orchids', 'premium'],
    isBestseller: false,
    isFeatured: true,
  },
  {
    id: 'p4',
    slug: 'classic-red-roses',
    name: 'Classic Romance (24 Red Roses)',
    description: 'The ultimate symbol of love - 24 premium red roses.',
    shortDescription: '24 Red Roses',
    price: 2499,
    originalPrice: 2999,
    images: ['https://images.unsplash.com/photo-1548094891-c4ba474eb5a5?q=80&w=600&auto=format&fit=crop'],
    category: 'bouquets',
    occasions: ['valentines', 'anniversary'],
    inStock: true,
    deliveryEligible: true,
    rating: 5.0,
    reviewCount: 210,
    tags: ['roses', 'red'],
    isBestseller: true,
    isFeatured: true,
  },
  {
    id: 'p5',
    slug: 'white-lilies-vase',
    name: 'Pristine White Lilies',
    description: 'Elegant white lilies arranged in a premium glass vase.',
    shortDescription: 'White Lilies in Vase',
    price: 1499,
    images: ['https://images.unsplash.com/photo-1613580540854-15b57f077583?q=80&w=600&auto=format&fit=crop'],
    category: 'arrangements',
    occasions: ['sympathy', 'anniversary'],
    inStock: true,
    deliveryEligible: true,
    rating: 4.7,
    reviewCount: 42,
    tags: ['lilies', 'white'],
    isBestseller: false,
    isFeatured: false,
  }
];

export default function ShopPage() {
  return (
    <div className="flex-1 bg-ivory pt-[104px] md:pt-[112px]"> {/* Account for header height */}
      
      {/* Header Area */}
      <div className="bg-pink-petal/30 py-12 md:py-16">
        <div className="max-w-[1440px] mx-auto px-4 md:px-10 xl:px-20 text-center">
          <h1 className="text-hero font-display text-ink mb-4">All Flowers & Gifts</h1>
          <p className="text-body text-slate max-w-[600px] mx-auto">
            Browse our complete collection of handcrafted floral arrangements, fresh plants, and delightful gift combos.
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
              
              {/* Filter sections would go here */}
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-body text-ink mb-3">Categories</h4>
                  <div className="space-y-2 text-sm text-slate">
                    <label className="flex items-center gap-2 cursor-pointer hover:text-pink transition-colors">
                      <input type="checkbox" className="accent-pink" /> Bouquets
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer hover:text-pink transition-colors">
                      <input type="checkbox" className="accent-pink" /> Arrangements
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer hover:text-pink transition-colors">
                      <input type="checkbox" className="accent-pink" /> Plants
                    </label>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-line">
                  <h4 className="font-medium text-body text-ink mb-3">Price Range</h4>
                  <div className="space-y-2 text-sm text-slate">
                    <label className="flex items-center gap-2 cursor-pointer hover:text-pink transition-colors">
                      <input type="checkbox" className="accent-pink" /> Under ₹999
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer hover:text-pink transition-colors">
                      <input type="checkbox" className="accent-pink" /> ₹1000 - ₹1999
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer hover:text-pink transition-colors">
                      <input type="checkbox" className="accent-pink" /> Above ₹2000
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Mobile Filter Button & Sort */}
            <div className="flex justify-between items-center mb-6">
              <Button variant="outline" className="md:hidden flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </Button>
              
              <div className="flex items-center gap-2 ml-auto text-sm">
                <span className="text-slate hidden sm:inline">Sort by:</span>
                <select className="border-none bg-transparent text-ink font-medium focus:outline-none cursor-pointer hover:text-pink transition-colors">
                  <option>Recommended</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest Arrivals</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
