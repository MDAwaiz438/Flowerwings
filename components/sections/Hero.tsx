'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';


const SLIDES = [
  {
    id: 1,
    title: "The Signature <br/> Gift Collection",
    description: "Discover our expertly curated hampers featuring exotic blooms, artisanal chocolates, and luxury keepsakes.",
    image: "/images/hero_banner_1.png",
    cta: "Shop Hampers",
    cta2: "Build Your Own"
  },
  {
    id: 2,
    title: "Elegance in <br/> Every Petal",
    description: "Experience the freshest seasonal flowers arranged by master florists for your perfect occasion.",
    image: "/images/hero_banner_2.png",
    cta: "Shop Flowers",
    cta2: "View Occasions"
  },
  {
    id: 3,
    title: "Unforgettable <br/> Moments",
    description: "Express your feelings with our bespoke floral arrangements delivered straight to their door.",
    image: "/images/hero_banner_3.png",
    cta: "Shop Now",
    cta2: "Learn More"
  }
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = SLIDES[currentSlide];

  // Premium text animation (Fade & Slide)
  const textContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.5 }
    }
  };

  const textItem = {
    hidden: { opacity: 0, x: -30 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const } },
    exit: { opacity: 0, x: 30, transition: { duration: 0.5 } }
  };

  // Premium image animation (Fade In/Out)
  const imageVariant = {
    hidden: { opacity: 0, scale: 1.05 },
    show: { opacity: 1, scale: 1, transition: { duration: 1.5, ease: 'easeOut' as const } },
    exit: { opacity: 0, transition: { duration: 1.2 } }
  };

  return (
    <section className="relative w-full h-[calc(100svh-38px)] max-h-[900px] overflow-hidden bg-ivory flex flex-col pb-8">
      <div className="flex-1 grid lg:grid-cols-2 h-full relative">
        
        {/* Left Side: Text Content */}
        <div className="flex flex-col justify-center px-8 md:px-12 lg:px-24 pt-[140px] relative z-10 bg-ivory order-2 lg:order-1 h-full overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${slide.id}`}
              variants={textContainer}
              initial="hidden"
              animate="show"
              exit="exit"
              className="w-full"
            >
              {/* Reveal 1: Title */}
              <motion.div variants={textItem}>
                <div className="w-16 h-[2px] bg-teal mb-6 md:mb-8" />
                <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-display text-ink leading-[1.1] mb-4 md:mb-6">
                  {slide.title.split('<br/>').map((line, i) => (
                    <span key={i}>
                      {line}
                      {i === 0 && <br/>}
                    </span>
                  ))}
                </h1>
              </motion.div>
              
              {/* Reveal 2: Description */}
              <motion.p variants={textItem} className="text-slate mb-8 md:mb-10 max-w-md text-[15px] md:text-[16px] leading-relaxed">
                {slide.description}
              </motion.p>
              
              {/* Reveal 3: Buttons */}
              <motion.div variants={textItem} className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-ink text-white hover:bg-charcoal border-none w-full sm:w-auto shadow-lg hover:-translate-y-1 transition-all">
                  {slide.cta}
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto hover:bg-white transition-all">
                  {slide.cta2}
                </Button>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Slide Indicators */}
          <div className="absolute bottom-12 left-8 md:left-12 lg:left-24 flex gap-3 z-20">
            {SLIDES.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-1 transition-all duration-500 rounded-full ${
                  idx === currentSlide ? 'w-10 bg-teal' : 'w-4 bg-line hover:bg-mist'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="relative h-[40vh] lg:h-full w-full order-1 lg:order-2 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div 
              key={`img-${slide.id}`}
              variants={imageVariant}
              initial="hidden"
              animate="show"
              exit="exit"
              className="absolute inset-x-0 bottom-0 top-[180px]"
            >
              <Image 
                src={slide.image} 
                alt="Luxury Flower Banner" 
                fill 
                className="object-contain object-bottom"
                priority
              />
            </motion.div>
          </AnimatePresence>
          {/* Soft gradient to blend with the ivory background on the left */}
          <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-transparent via-transparent to-ivory lg:from-ivory lg:via-transparent lg:to-transparent opacity-80 z-10 pointer-events-none" />
        </div>

      </div>
    </section>
  );
}
