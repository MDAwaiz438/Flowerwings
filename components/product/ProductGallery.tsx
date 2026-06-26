'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductGalleryProps {
  images: string[];
}

export function ProductGallery({ images }: ProductGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Desktop: Sticky vertical layout with thumbnails on the side and large main image.
  // We'll actually just show a stacked layout on desktop for a modern feel (like Apple),
  // but if there are multiple images, let's use a main image + thumbnails grid.

  // Let's implement a sleek main image + thumbnails for desktop.
  // On mobile, a swipeable carousel.

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="w-full flex flex-col gap-4 lg:flex-row-reverse lg:gap-6 lg:sticky lg:top-[120px]">
      
      {/* Main Image */}
      <div className="relative w-full aspect-[4/5] lg:aspect-auto lg:h-[75vh] bg-warm-white rounded-2xl overflow-hidden group">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0"
          >
            <Image
              src={images[currentIndex]}
              alt={`Product view ${currentIndex + 1}`}
              fill
              className="object-cover object-center"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </AnimatePresence>

        {/* Mobile / Tablet Arrows (Hidden on Desktop if using thumbnails, but let's keep them on hover for convenience) */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-charcoal hover:bg-white hover:scale-105 transition-all opacity-0 group-hover:opacity-100 lg:hidden shadow-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-charcoal hover:bg-white hover:scale-105 transition-all opacity-0 group-hover:opacity-100 lg:hidden shadow-sm"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
      </div>

      {/* Thumbnails (Desktop side, Mobile dots) */}
      {images.length > 1 && (
        <>
          {/* Desktop Thumbnails (Left side vertical list) */}
          <div className="hidden lg:flex flex-col gap-4 w-[100px] flex-shrink-0">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={cn(
                  'relative w-full aspect-[4/5] rounded-xl overflow-hidden border-2 transition-all duration-300',
                  currentIndex === idx ? 'border-pink' : 'border-transparent hover:border-line'
                )}
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  fill
                  className="object-cover"
                  sizes="100px"
                />
              </button>
            ))}
          </div>

          {/* Mobile Dots */}
          <div className="flex items-center justify-center gap-2 lg:hidden mt-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={cn(
                  'rounded-full transition-all duration-300',
                  currentIndex === idx ? 'w-6 h-1.5 bg-pink' : 'w-1.5 h-1.5 bg-line hover:bg-mist'
                )}
              />
            ))}
          </div>
        </>
      )}

    </div>
  );
}
