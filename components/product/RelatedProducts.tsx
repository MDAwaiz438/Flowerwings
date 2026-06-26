'use client';

import { ProductCard } from '@/components/product/ProductCard';
import { featuredProducts } from '@/lib/mockData';
import { motion } from 'framer-motion';

export function RelatedProducts() {
  // Take first 4 products for demonstration
  const related = featuredProducts.slice(0, 4);

  return (
    <section className="py-20 border-t border-line/60 bg-cream">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">
        
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-h3 font-display text-ink">You May Also Like</h2>
          <a href="/shop" className="text-[13px] font-bold uppercase tracking-wider text-pink hover:text-pink-deep transition-colors">
            View All
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {related.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
