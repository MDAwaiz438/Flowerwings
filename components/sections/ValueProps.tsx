'use client';

import { Clock, HeartHandshake, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';

const values = [
  {
    icon: Clock,
    title: 'Same Day Delivery',
    description: 'Order by 5 PM for same-day delivery anywhere in Bangalore. Fresh, on time, every time.',
  },
  {
    icon: HeartHandshake,
    title: 'Hand-Tied with Love',
    description: 'Every arrangement is individually crafted by our master florists using premium, ethically sourced blooms.',
  },
  {
    icon: Leaf,
    title: '100% Fresh Guarantee',
    description: 'We guarantee 5-day freshness on every arrangement. Not satisfied? We replace it, no questions asked.',
  },
];

export function ValueProps() {
  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-flex items-center gap-2 text-teal text-micro font-bold uppercase tracking-[0.14em] font-body mb-4">
            <span className="w-6 h-[1.5px] bg-teal inline-block" />
            Why Flower Wings
            <span className="w-6 h-[1.5px] bg-teal inline-block" />
          </span>
          <h2 className="text-h2 font-display text-ink">The Flower Wings Promise</h2>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10 lg:gap-16">
          {values.map((value, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-2xl bg-teal-light flex items-center justify-center mb-7 group-hover:scale-110 group-hover:shadow-soft transition-all duration-500">
                <value.icon className="w-7 h-7 text-teal" strokeWidth={1.5} />
              </div>
              <h3 className="text-h3 font-display font-medium text-ink mb-3">{value.title}</h3>
              <p className="text-body text-slate max-w-[300px] leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
