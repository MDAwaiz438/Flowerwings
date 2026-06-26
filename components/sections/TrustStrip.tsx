'use client';

import { motion } from 'framer-motion';
import { Truck, Shield, Flower2, Clock } from 'lucide-react';

const trustItems = [
  { icon: Flower2, text: '50,000+ bouquets delivered' },
  { icon: Clock, text: 'Same-day delivery' },
  { icon: Shield, text: 'Freshness guaranteed' },
  { icon: Truck, text: 'All across Bangalore' },
];

export function TrustStrip() {
  return (
    <section className="w-full bg-cream border-y border-line/60">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 md:py-8"
        >
          {trustItems.map((item, i) => (
            <div key={i} className="flex items-center gap-3 justify-center">
              <item.icon className="w-[18px] h-[18px] text-teal flex-shrink-0" strokeWidth={1.5} />
              <span className="text-[13px] font-medium text-charcoal tracking-wide">
                {item.text}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
