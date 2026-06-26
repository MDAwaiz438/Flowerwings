'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

export function CtaBanner() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-charcoal">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full border border-white" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full border border-white" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white" />
      </div>

      <div className="max-w-[800px] mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-flex items-center gap-2 text-pink text-micro font-bold uppercase tracking-[0.14em] font-body mb-6">
            <span className="w-6 h-[1.5px] bg-pink inline-block" />
            Special Moments
            <span className="w-6 h-[1.5px] bg-pink inline-block" />
          </span>

          <h2 className="text-h1 font-display text-white mb-6 leading-tight">
            Every bloom tells a{' '}
            <span className="italic text-pink">story.</span>
            <br />
            What&apos;s yours?
          </h2>

          <p className="text-[16px] text-white/50 max-w-[520px] mx-auto mb-10 leading-relaxed">
            Whether it&apos;s a whispered &ldquo;I love you&rdquo; or a grand celebration, 
            let our flowers carry the message your heart wants to send.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              iconRight={<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
              className="group"
            >
              Shop All Flowers
            </Button>
            <Button variant="ghost" size="lg" className="border-white/30 text-white hover:border-pink hover:text-pink hover:bg-transparent">
              Contact Us
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
