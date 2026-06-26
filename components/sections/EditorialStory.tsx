'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function EditorialStory() {
  return (
    <section className="py-24 md:py-32 bg-ivory overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex flex-col md:flex-row items-center gap-14 md:gap-20 lg:gap-28">

          {/* ─── Left: Stacked Images ─── */}
          <div className="w-full md:w-1/2 relative h-[480px] md:h-[600px]">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="absolute left-0 top-0 w-[72%] h-[78%] rounded-xl md:rounded-2xl overflow-hidden shadow-card z-10"
            >
              <Image
                src="https://images.unsplash.com/photo-1572454643033-066aa081e649?q=80&w=800&auto=format&fit=crop"
                alt="Florist arranging flowers"
                fill
                className="object-cover hover:scale-[1.03] transition-transform duration-1000"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="absolute right-0 bottom-0 w-[58%] h-[60%] rounded-xl md:rounded-2xl overflow-hidden shadow-hero z-20 ring-4 ring-ivory"
            >
              <Image
                src="https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?q=80&w=600&auto=format&fit=crop"
                alt="Close up of pink roses"
                fill
                className="object-cover hover:scale-[1.03] transition-transform duration-1000"
              />
            </motion.div>

            {/* Decorative element */}
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-20 h-20 rounded-full border-2 border-teal/20 hidden lg:block" />
          </div>

          {/* ─── Right: Text Content ─── */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 text-teal text-micro font-bold uppercase tracking-[0.14em] font-body mb-6"
            >
              <span className="w-6 h-[1.5px] bg-teal inline-block" />
              Our Philosophy
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-h2 font-display text-ink mb-8 leading-tight max-w-lg"
            >
              Artistry in every{' '}
              <span className="italic text-pink">petal</span>,
              delivered with care.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-5 text-slate text-body max-w-md leading-relaxed"
            >
              <p>
                At Flower Wings, we believe that flowers are more than just a gift—they are a medium of emotion. Every arrangement that leaves our studio is a bespoke creation, hand-tied by artisans who understand the subtle language of blooms.
              </p>
              <p>
                We source only the highest-grade stems from ethical farms, ensuring that when they arrive at your door, they don&apos;t just look beautiful; they make a lasting impression.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-12 pt-8 border-t border-line"
            >
              <div className="font-display italic text-[26px] text-ink tracking-tight">Afreen Siddiqua</div>
              <div className="text-[11px] text-mist uppercase tracking-[0.15em] mt-2 font-medium">Founder & Lead Florist</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
