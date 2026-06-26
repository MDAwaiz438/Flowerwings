'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export function Accordion({ items, className }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className={cn('w-full border-t border-line/60', className)}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={index} className="border-b border-line/60">
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between py-5 text-left focus:outline-none group"
            >
              <span className="font-display font-medium text-[16px] text-ink group-hover:text-pink transition-colors duration-300">
                {item.title}
              </span>
              <span className="text-slate group-hover:text-pink transition-colors duration-300 flex-shrink-0 ml-4">
                {isOpen ? (
                  <Minus className="w-[18px] h-[18px]" strokeWidth={1.5} />
                ) : (
                  <Plus className="w-[18px] h-[18px]" strokeWidth={1.5} />
                )}
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="pb-6 text-[14px] text-charcoal/80 leading-relaxed pr-8">
                    {item.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
