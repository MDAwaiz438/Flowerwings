'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { ShoppingBag, Search, Gift, Heart, ArrowRight } from 'lucide-react';
import { featuredProducts } from '@/lib/mockData';

const IMAGES = {
  main: featuredProducts[0].image,
  arch: featuredProducts[1].image,
  collage1: featuredProducts[2].image,
  collage2: featuredProducts[3].image,
};

const GiftNav = () => (
  <header className="px-8 py-6 flex items-center justify-between border-b border-line/60 text-ink bg-ivory sticky top-0 z-50">
    <div className="flex gap-8 text-[13px] font-bold tracking-widest uppercase">
      <span className="hover:text-pink transition flex items-center gap-2"><Gift className="w-4 h-4"/> Gifts</span>
      <span className="hover:text-pink transition flex items-center gap-2"><Heart className="w-4 h-4"/> Flowers</span>
    </div>
    <div className="text-[32px] font-display text-pink">Flower Wings</div>
    <div className="flex gap-6 items-center">
      <Search className="w-5 h-5 cursor-pointer" /> 
      <div className="relative cursor-pointer">
        <ShoppingBag className="w-5 h-5" />
        <span className="absolute -top-2 -right-2 bg-pink text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">2</span>
      </div>
    </div>
  </header>
);

// 11. The Curator (Grid based gifting)
export const Variant11 = () => (
  <div className="w-full min-h-screen bg-warm-white flex flex-col">
    <GiftNav />
    <div className="flex-1 max-w-[1600px] mx-auto w-full px-8 py-12 grid lg:grid-cols-12 gap-8">
      <div className="lg:col-span-5 flex flex-col justify-center">
        <span className="text-teal text-[12px] font-bold uppercase tracking-[0.2em] mb-4 block">The Art of Gifting</span>
        <h1 className="text-[clamp(3rem,5vw,4.5rem)] font-display leading-[1.1] text-ink mb-6">
          Curated Hampers for Every Occasion.
        </h1>
        <p className="text-charcoal/70 mb-8 max-w-md">Make them feel truly special with our hand-picked luxury gift boxes and premium blooms.</p>
        <div className="flex gap-4">
          <Button>Shop Gifts</Button>
          <Button variant="outline">Corporate Gifting</Button>
        </div>
      </div>
      <div className="lg:col-span-7 grid grid-cols-2 gap-4">
        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden group">
          <Image src={IMAGES.arch} alt="gift1" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute bottom-6 left-6 text-white font-display text-2xl">Birthday Hampers</div>
        </div>
        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden group mt-12">
          <Image src={IMAGES.collage1} alt="gift2" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute bottom-6 left-6 text-white font-display text-2xl">Anniversary Boxes</div>
        </div>
      </div>
    </div>
  </div>
);

// 12. Shop By Recipient (Interactive Flow)
export const Variant12 = () => (
  <div className="w-full min-h-screen bg-cream flex flex-col">
    <GiftNav />
    <div className="flex-1 max-w-[1200px] mx-auto w-full px-8 flex flex-col justify-center items-center text-center py-20">
      <h1 className="text-[clamp(3rem,6vw,5rem)] font-display text-ink leading-tight mb-4">
        Who are you gifting today?
      </h1>
      <p className="text-charcoal/60 mb-12 text-lg">Select a recipient to discover the perfect curated gift.</p>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
        {['Partner', 'Mother', 'Friend', 'Colleague'].map((recipient, i) => (
          <div key={recipient} className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all cursor-pointer border border-line/40 hover:border-pink group">
            <div className="w-16 h-16 mx-auto bg-pink-petal/30 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Gift className="w-6 h-6 text-pink" />
            </div>
            <h3 className="font-display text-xl text-ink">{recipient}</h3>
          </div>
        ))}
      </div>
      <div className="mt-16">
        <Button variant="ghost" iconRight={<ArrowRight className="w-4 h-4"/>}>Or view all gifts</Button>
      </div>
    </div>
  </div>
);

// 13. The Celebration Ribbon
export const Variant13 = () => (
  <div className="w-full h-screen bg-pink-petal/20 flex flex-col relative overflow-hidden">
    <GiftNav />
    {/* Decorative background ribbon simulation */}
    <div className="absolute top-1/4 -right-1/4 w-[150%] h-[200px] bg-pink/5 -rotate-12 blur-3xl pointer-events-none" />
    <div className="absolute bottom-1/4 -left-1/4 w-[150%] h-[300px] bg-teal/5 rotate-6 blur-3xl pointer-events-none" />
    
    <div className="flex-1 max-w-[1600px] mx-auto w-full px-8 flex items-center">
      <div className="w-full max-w-2xl z-10 bg-white/60 backdrop-blur-xl p-12 rounded-[2rem] border border-white shadow-2xl">
        <h1 className="text-[4rem] font-display text-ink leading-[1.1] mb-6">
          Unwrap <br/><span className="italic text-pink">Joy.</span>
        </h1>
        <p className="text-slate text-lg mb-8">Premium gifts wrapped in our signature luxury ribbons, delivered to their doorstep.</p>
        <div className="flex gap-4">
          <Button size="lg" className="shadow-lg hover:-translate-y-1">Send a Gift</Button>
        </div>
      </div>
      {/* Floating images */}
      <div className="absolute right-[10%] top-[20%] w-[300px] aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl rotate-6 z-20 hover:z-30 hover:rotate-0 transition-all duration-500">
         <Image src={IMAGES.main} alt="box" fill className="object-cover" />
      </div>
      <div className="absolute right-[25%] bottom-[15%] w-[250px] aspect-square rounded-2xl overflow-hidden shadow-2xl -rotate-6 z-20 hover:z-30 hover:rotate-0 transition-all duration-500">
         <Image src={IMAGES.collage2} alt="ribbon" fill className="object-cover" />
      </div>
    </div>
  </div>
);

// 14. The Split-Screen Hamper Showcase
export const Variant14 = () => (
  <div className="w-full h-screen bg-ivory flex flex-col">
    <GiftNav />
    <div className="flex-1 grid lg:grid-cols-2">
      <div className="relative h-full w-full hidden lg:block">
        <Image src={IMAGES.arch} alt="hamper" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-ivory" />
      </div>
      <div className="flex flex-col justify-center p-12 lg:p-24 relative z-10 bg-ivory">
        <div className="w-16 h-[2px] bg-teal mb-8" />
        <h1 className="text-[3.5rem] font-display text-ink leading-[1.1] mb-6">
          The Signature <br/> Gift Collection
        </h1>
        <p className="text-slate mb-10 max-w-md">Discover our expertly curated hampers featuring exotic blooms, artisanal chocolates, and luxury keepsakes.</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="bg-ink text-white hover:bg-charcoal border-none w-full sm:w-auto">Shop Hampers</Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto">Build Your Own</Button>
        </div>
      </div>
    </div>
  </div>
);

// 15. The Minimalist Gift Box
export const Variant15 = () => (
  <div className="w-full min-h-screen bg-warm-white flex flex-col">
    <GiftNav />
    <div className="flex-1 flex flex-col items-center justify-center py-20 px-4 text-center">
      <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] mb-12 group">
        <div className="absolute inset-0 rounded-full bg-pink-petal/20 blur-3xl group-hover:bg-pink-petal/40 transition-all duration-700" />
        <Image src={IMAGES.collage1} alt="giftbox" fill className="object-cover rounded-full z-10 border-[8px] border-white shadow-2xl" />
      </div>
      <span className="text-[13px] font-bold uppercase tracking-[0.2em] text-pink mb-4 block">Exclusive Gifting</span>
      <h1 className="text-[3rem] md:text-[4rem] font-display text-ink max-w-3xl leading-[1.1] mb-8">
        Thoughtful gifts, delivered beautifully.
      </h1>
      <Button size="lg" className="rounded-full px-10 shadow-xl hover:-translate-y-1">Start Gifting</Button>
    </div>
  </div>
);
