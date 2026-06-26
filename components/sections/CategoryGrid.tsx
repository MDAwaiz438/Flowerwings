'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const categories = [
  { name: 'Flowers', slug: 'flowers', image: 'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?q=80&w=400&auto=format&fit=crop', count: '120+ options' },
  { name: 'Anniversary', slug: 'anniversary', image: 'https://images.unsplash.com/photo-1518082697223-b18cbdb83f12?q=80&w=400&auto=format&fit=crop', count: '45+ options' },
  { name: 'Birthday', slug: 'birthday', image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=400&auto=format&fit=crop', count: '60+ options' },
  { name: 'Plants', slug: 'plants', image: 'https://images.unsplash.com/photo-1453904300235-0f2f60b15b5d?q=80&w=400&auto=format&fit=crop', count: '30+ options' },
  { name: 'Combos', slug: 'combos', image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=400&auto=format&fit=crop', count: '25+ options' },
  { name: 'Premium', slug: 'premium', image: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?q=80&w=400&auto=format&fit=crop', count: '15+ options' },
];

export function CategoryGrid() {
  return (
    <section className="py-20 md:py-28 bg-ivory">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14 md:mb-16"
        >
          <span className="inline-flex items-center gap-2 text-teal text-micro font-bold uppercase tracking-[0.14em] font-body mb-4">
            <span className="w-6 h-[1.5px] bg-teal inline-block" />
            Browse
            <span className="w-6 h-[1.5px] bg-teal inline-block" />
          </span>
          <h2 className="text-h2 font-display text-ink">Shop by Category</h2>
        </motion.div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {categories.map((category, i) => (
            <motion.div
              key={category.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <Link
                href={`/category/${category.slug}`}
                className="group flex flex-col items-center text-center"
              >
                <div className="relative w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden mb-4 ring-2 ring-transparent group-hover:ring-pink/50 transition-all duration-500 shadow-soft group-hover:shadow-card">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-pink/0 group-hover:bg-pink/10 transition-colors duration-500" />
                </div>
                <span className="text-[14px] font-medium text-ink group-hover:text-pink transition-colors duration-300 mb-1">
                  {category.name}
                </span>
                <span className="text-[11px] text-mist tracking-wide">
                  {category.count}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
