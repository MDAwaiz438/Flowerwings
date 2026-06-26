'use client';

import { ProductCard } from '@/components/product/ProductCard';
import { Product } from '@/lib/types';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { featuredProducts } from '@/lib/mockData';

export function FeaturedProducts() {
  return (
    <section className="py-20 md:py-28 bg-warm-white">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6"
        >
          <div>
            <span className="inline-flex items-center gap-2 text-teal text-micro font-bold uppercase tracking-[0.14em] font-body mb-4">
              <span className="w-6 h-[1.5px] bg-teal inline-block" />
              Curated for you
            </span>
            <h2 className="text-h2 font-display text-ink">Loved by Bangalore</h2>
            <p className="text-body text-slate mt-2 max-w-md">Our most popular arrangements, handcrafted fresh every day.</p>
          </div>
          <Button
            variant="ghost"
            size="md"
            iconRight={<ArrowRight className="w-4 h-4" />}
            className="hidden md:inline-flex self-end"
          >
            View All
          </Button>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
          {featuredProducts.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>

        {/* Mobile CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 text-center md:hidden"
        >
          <Button
            variant="outline"
            size="lg"
            iconRight={<ArrowRight className="w-4 h-4" />}
            className="w-full"
          >
            View All Bestsellers
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
