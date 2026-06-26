'use client';

import { motion } from 'framer-motion';
import { Star, MessageCircle } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya Sharma',
    location: 'Indiranagar',
    rating: 5,
    text: "The most stunning bouquet I've ever received. The roses were incredibly fresh and the arrangement was magazine-worthy. Delivery was on time too!",
    occasion: 'Anniversary',
  },
  {
    name: 'Rahul Mehta',
    location: 'Koramangala',
    rating: 5,
    text: "Ordered for my wife's birthday surprise. She was speechless! The flowers lasted over a week. Flower Wings has my trust forever.",
    occasion: 'Birthday',
  },
  {
    name: 'Ananya Reddy',
    location: 'Whitefield',
    rating: 5,
    text: "As an event planner, I need reliability and beauty. Flower Wings delivers both every single time. Their premium orchid collection is unmatched.",
    occasion: 'Corporate Event',
  },
];

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-ivory overflow-hidden">
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
            Testimonials
            <span className="w-6 h-[1.5px] bg-teal inline-block" />
          </span>
          <h2 className="text-h2 font-display text-ink">What our customers say</h2>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className="relative bg-warm-white rounded-2xl p-8 md:p-10 border border-line/60 hover:shadow-card hover:border-pink/20 transition-all duration-500 group"
            >
              {/* Quote icon */}
              <MessageCircle className="w-8 h-8 text-pink/20 mb-6 group-hover:text-pink/40 transition-colors duration-500" strokeWidth={1} />

              {/* Stars */}
              <div className="flex items-center gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-pink fill-pink" strokeWidth={0} />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-[15px] text-charcoal leading-relaxed mb-8 italic font-body">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center justify-between border-t border-line/60 pt-5">
                <div>
                  <div className="text-[14px] font-semibold text-ink">{t.name}</div>
                  <div className="text-[12px] text-mist">{t.location}</div>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-teal bg-teal-light px-3 py-1.5 rounded-full">
                  {t.occasion}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
