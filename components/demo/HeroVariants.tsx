'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { ShoppingBag, Search, User, ArrowRight } from 'lucide-react';

import { featuredProducts } from '@/lib/mockData';

const IMAGES = {
  main: featuredProducts[0].image,
  arch: featuredProducts[1].image,
  collage1: featuredProducts[2].image,
  collage2: featuredProducts[3].image,
};

// Reusable Mock Navbars
const GlassNav = () => (
  <header className="absolute top-0 inset-x-0 z-50 px-8 py-6 flex items-center justify-between text-white border-b border-white/20">
    <div className="flex gap-8 text-[13px] font-medium tracking-widest uppercase">
      <span>Shop</span><span>Occasions</span>
    </div>
    <div className="text-[28px] font-display">Flower Wings</div>
    <div className="flex gap-6">
      <Search className="w-5 h-5" /> <User className="w-5 h-5" /> <ShoppingBag className="w-5 h-5" />
    </div>
  </header>
);

const SolidNav = ({ dark = false }: { dark?: boolean }) => (
  <header className={`px-8 py-6 flex items-center justify-between border-b ${dark ? 'border-line/20 text-cream bg-charcoal' : 'border-line/60 text-ink bg-ivory'}`}>
    <div className="flex gap-8 text-[13px] font-bold tracking-widest uppercase">
      <span className="hover:text-pink transition">Shop</span>
      <span className="hover:text-pink transition">Collections</span>
    </div>
    <div className={`text-[32px] font-display ${dark ? 'text-pink-petal' : 'text-pink'}`}>Flower Wings</div>
    <div className="flex gap-6">
      <Search className="w-5 h-5" /> <ShoppingBag className="w-5 h-5" />
    </div>
  </header>
);

// 1. Cinematic Full-Bleed
export const Variant1 = () => (
  <div className="relative w-full h-screen bg-charcoal overflow-hidden group">
    <GlassNav />
    <Image src={IMAGES.main} alt="bg" fill className="object-cover opacity-80 scale-105 group-hover:scale-100 transition-transform duration-[2s]" />
    <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-transparent to-charcoal/80" />
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-[clamp(3rem,8vw,7rem)] font-display text-white leading-none mb-6 drop-shadow-lg">
        Artistry in <span className="italic text-pink-petal">Bloom</span>
      </h1>
      <p className="text-white/80 text-[16px] max-w-md mb-8">Premium arrangements crafted for unforgettable moments.</p>
      <Button className="bg-white text-ink hover:bg-pink-petal hover:text-ink">Explore Collection</Button>
    </div>
  </div>
);

// 2. Editorial Arch
export const Variant2 = () => (
  <div className="w-full min-h-screen bg-warm-white flex flex-col">
    <SolidNav />
    <div className="flex-1 max-w-[1600px] mx-auto w-full px-8 py-12 flex flex-col lg:flex-row items-center gap-16">
      <div className="w-full lg:w-1/2 flex justify-center">
        <div className="relative w-full max-w-[500px] aspect-[3/4] rounded-t-full overflow-hidden shadow-2xl border-4 border-ivory">
          <Image src={IMAGES.arch} alt="arch" fill className="object-cover" />
        </div>
      </div>
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <span className="text-teal text-[11px] font-bold uppercase tracking-widest mb-4 block">New Arrivals</span>
        <h1 className="text-[clamp(3rem,6vw,5rem)] font-display text-ink leading-[1.1] mb-6">
          The Poetry of <br /><span className="italic text-pink">Nature</span>
        </h1>
        <p className="text-charcoal/70 max-w-md mx-auto lg:mx-0 mb-8">Hand-tied luxury bouquets delivered with pristine care.</p>
        <Button>Shop Now</Button>
      </div>
    </div>
  </div>
);

// 3. Floating Island
export const Variant3 = () => (
  <div className="w-full min-h-screen bg-pink-petal/20 p-4 md:p-8 flex flex-col">
    <div className="flex-1 bg-ivory rounded-[2rem] md:rounded-[3rem] shadow-xl overflow-hidden relative flex flex-col">
      <SolidNav />
      <div className="flex-1 grid lg:grid-cols-2 relative">
        <div className="p-12 lg:p-20 flex flex-col justify-center z-10 bg-ivory">
          <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-display text-ink mb-6">Elevate your <br/>everyday.</h1>
          <Button className="w-fit" iconRight={<ArrowRight className="w-4 h-4"/>}>Discover</Button>
        </div>
        <div className="relative h-[40vh] lg:h-auto">
          <Image src={IMAGES.main} alt="island" fill className="object-cover rounded-tl-[3rem] lg:rounded-bl-[3rem] shadow-2xl z-20" />
        </div>
      </div>
    </div>
  </div>
);

// 4. Masonry Collage
export const Variant4 = () => (
  <div className="w-full min-h-screen bg-ivory flex flex-col overflow-hidden">
    <SolidNav />
    <div className="flex-1 max-w-[1600px] w-full mx-auto px-8 grid lg:grid-cols-2 items-center gap-12 py-12">
      <div>
        <h1 className="text-[clamp(3.5rem,7vw,6rem)] font-display text-ink leading-[1] mb-8">Raw <br/><span className="text-pink italic">Beauty</span></h1>
        <p className="text-slate max-w-sm mb-8">Curated collections of the rarest seasonal blooms.</p>
        <Button variant="outline">View Gallery</Button>
      </div>
      <div className="relative h-[600px] w-full hidden md:block">
        <div className="absolute top-0 right-0 w-[60%] aspect-[3/4] rounded-lg overflow-hidden shadow-xl z-20 hover:-translate-y-4 transition-transform duration-500">
           <Image src={IMAGES.arch} alt="c1" fill className="object-cover" />
        </div>
        <div className="absolute bottom-10 left-0 w-[50%] aspect-square rounded-lg overflow-hidden shadow-xl z-30 hover:-translate-y-4 transition-transform duration-500">
           <Image src={IMAGES.collage1} alt="c2" fill className="object-cover" />
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 left-[20%] w-[40%] aspect-[4/3] rounded-lg overflow-hidden shadow-2xl z-10 opacity-60 mix-blend-multiply">
           <Image src={IMAGES.collage2} alt="c3" fill className="object-cover" />
        </div>
      </div>
    </div>
  </div>
);

// 5. Minimalist Brutalist
export const Variant5 = () => (
  <div className="w-full min-h-screen bg-warm-white flex flex-col p-6">
    <div className="flex-1 border-[1.5px] border-ink grid grid-rows-[auto_1fr]">
      <header className="border-b-[1.5px] border-ink flex items-center justify-between p-6">
        <div className="font-bold text-[14px] uppercase tracking-widest">FW.</div>
        <div className="font-display text-[24px]">Flower Wings</div>
        <div className="font-bold text-[14px] uppercase tracking-widest">Cart (0)</div>
      </header>
      <div className="grid lg:grid-cols-2 h-full">
        <div className="border-r-[1.5px] border-ink p-12 lg:p-20 flex flex-col justify-end">
          <h1 className="text-[clamp(3rem,6vw,5rem)] font-display uppercase font-bold leading-none mb-12">Modern <br/> Florals</h1>
          <Button className="w-full bg-ink text-cream hover:bg-pink border-none rounded-none h-16 text-lg">Shop The Drop</Button>
        </div>
        <div className="relative h-full min-h-[50vh] grayscale hover:grayscale-0 transition-all duration-700">
          <Image src={IMAGES.main} alt="brutalist" fill className="object-cover" />
        </div>
      </div>
    </div>
  </div>
);

// 6. Sidebar Nav
export const Variant6 = () => (
  <div className="w-full h-screen bg-ivory flex">
    <aside className="w-[80px] lg:w-[280px] h-full border-r border-line/60 flex flex-col items-center lg:items-start p-6 lg:p-10 justify-between shrink-0">
      <div className="text-pink font-display text-[24px] lg:text-[32px] transform lg:rotate-0" style={{ writingMode: 'vertical-rl', rotate: '180deg' }}>FW</div>
      <nav className="flex flex-col gap-8 text-[12px] uppercase tracking-widest font-bold text-slate">
        <span className="hover:text-pink cursor-pointer hidden lg:block">Shop</span>
        <span className="hover:text-pink cursor-pointer hidden lg:block">Occasions</span>
        <span className="hover:text-pink cursor-pointer hidden lg:block">About</span>
      </nav>
      <ShoppingBag className="w-6 h-6 text-ink" />
    </aside>
    <div className="flex-1 relative">
      <Image src={IMAGES.arch} alt="sidebar" fill className="object-cover" />
      <div className="absolute bottom-12 left-12 bg-white/90 backdrop-blur-md p-8 rounded-xl max-w-sm">
        <h2 className="font-display text-h3 mb-4 text-ink">Spring Collection</h2>
        <Button size="sm">Explore</Button>
      </div>
    </div>
  </div>
);

// 7. Oversized Typographic
export const Variant7 = () => (
  <div className="w-full h-screen bg-warm-white flex flex-col relative overflow-hidden">
    <header className="flex justify-between p-8 z-50 mix-blend-difference text-white">
      <span className="font-display text-[24px]">Flower Wings</span>
      <ShoppingBag className="w-6 h-6" />
    </header>
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
      <h1 className="text-[30vw] font-display text-ink leading-none opacity-5 mix-blend-overlay">BLOOM</h1>
    </div>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[500px] z-20">
      <Image src={IMAGES.collage1} alt="type" fill className="object-cover rounded-[100px]" />
    </div>
    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30">
      <Button className="rounded-full shadow-2xl px-12">Shop Now</Button>
    </div>
  </div>
);

// 8. Split-Screen Carousel (Modern Version)
export const Variant8 = () => (
  <div className="w-full h-screen bg-ivory flex flex-col">
    <SolidNav />
    <div className="flex-1 flex flex-col lg:flex-row max-w-[1600px] mx-auto w-full">
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-12 py-8">
         <h1 className="text-[4rem] font-display text-ink leading-none mb-6">Designed <br/><span className="italic text-pink">to delight.</span></h1>
         <p className="text-slate mb-8 max-w-sm">Vibrant combinations crafted for joyous occasions.</p>
         <Button className="w-fit">Shop Occasions</Button>
      </div>
      <div className="w-full lg:w-1/2 p-6 flex">
        <div className="w-full h-full relative rounded-2xl overflow-hidden">
           <Image src={IMAGES.collage2} alt="carousel" fill className="object-cover" />
           <div className="absolute bottom-6 right-6 bg-white rounded-full px-6 py-3 font-bold text-[12px] uppercase tracking-widest shadow-xl">
             Swipe &rarr;
           </div>
        </div>
      </div>
    </div>
  </div>
);

// 9. Dark Mode Elegance
export const Variant9 = () => (
  <div className="w-full min-h-screen bg-charcoal text-cream flex flex-col">
    <SolidNav dark />
    <div className="flex-1 max-w-[1600px] mx-auto w-full px-8 py-16 grid lg:grid-cols-2 gap-16 items-center">
      <div className="relative aspect-square w-full max-w-[600px] mx-auto rounded-full overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(255,105,180,0.1)]">
        <Image src={IMAGES.main} alt="dark" fill className="object-cover" />
      </div>
      <div>
        <h1 className="text-[clamp(3rem,6vw,5rem)] font-display mb-6">Midnight <br/> Blooms</h1>
        <p className="text-white/60 mb-8 max-w-sm">Our exclusive evening delivery collection.</p>
        <Button className="bg-pink text-white hover:bg-white hover:text-charcoal border-none">Discover</Button>
      </div>
    </div>
  </div>
);

// 10. Focus Product Minimalist
export const Variant10 = () => (
  <div className="w-full h-screen bg-white flex flex-col relative">
    <header className="flex justify-between items-center p-8 z-50 text-charcoal">
      <div className="text-[11px] font-bold uppercase tracking-[0.2em]">Menu</div>
      <div className="font-display text-[20px]">Flower Wings</div>
      <div className="text-[11px] font-bold uppercase tracking-[0.2em]">Cart</div>
    </header>
    <div className="absolute inset-0 flex items-center justify-center">
      {/* Assuming a transparent PNG or very clean background */}
      <div className="relative w-[500px] h-[600px]">
        <Image src={IMAGES.arch} alt="focus" fill className="object-cover rounded-full" />
      </div>
    </div>
    <div className="absolute bottom-12 w-full text-center">
      <h2 className="font-display text-[28px] text-ink mb-2">The Signature Orchid</h2>
      <Button variant="link" className="text-charcoal border-b border-charcoal">Pre-order now</Button>
    </div>
  </div>
);
