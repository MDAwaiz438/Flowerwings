import { Search, ShoppingCart, Heart, User, MapPin, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const Categories = ({ light = false }) => (
  <nav className={cn("flex gap-6 text-[11px] font-bold tracking-widest uppercase items-center", light ? "text-white" : "text-ink")}>
    <span className="cursor-pointer hover:text-pink transition">Home</span>
    <span className="cursor-pointer hover:text-pink transition flex items-center gap-1">Flowers <ChevronDown className="w-3 h-3" /></span>
    <span className="cursor-pointer hover:text-pink transition">Anniversary</span>
    <span className="cursor-pointer hover:text-pink transition flex items-center gap-1">Birthday <ChevronDown className="w-3 h-3" /></span>
    <span className="cursor-pointer hover:text-pink transition flex items-center gap-1">Plants <ChevronDown className="w-3 h-3" /></span>
    <span className="cursor-pointer hover:text-pink transition">Gifts</span>
    <span className="cursor-pointer hover:text-pink transition flex items-center gap-1">Combos <ChevronDown className="w-3 h-3" /></span>
    <span className="cursor-pointer text-pink">Same Day Delivery</span>
  </nav>
);

const Icons = ({ light = false, badgeColor = "bg-pink text-white" }) => (
  <div className={cn("flex items-center gap-4", light ? "text-white" : "text-ink")}>
    <div className="relative cursor-pointer hover:scale-110 transition">
      <Heart className="w-5 h-5" />
      <span className={cn("absolute -top-1 -right-2 w-4 h-4 text-[9px] flex items-center justify-center rounded-full font-bold", badgeColor)}>0</span>
    </div>
    <div className="relative cursor-pointer hover:scale-110 transition">
      <ShoppingCart className="w-5 h-5" />
      <span className={cn("absolute -top-1 -right-2 w-4 h-4 text-[9px] flex items-center justify-center rounded-full font-bold", badgeColor)}>0</span>
    </div>
    <User className="w-5 h-5 cursor-pointer hover:scale-110 transition" />
  </div>
);

// 21. The "Floating E-Commerce Hub" (Everything inside a massive floating glass pill)
export const Nav21 = () => (
  <header className="absolute top-6 inset-x-0 flex justify-center z-50 pointer-events-none">
    <div className="pointer-events-auto bg-white/70 backdrop-blur-3xl shadow-[0_8px_32px_rgba(0,0,0,0.1)] rounded-[2rem] w-[95%] max-w-[1400px] border border-white/50 flex flex-col overflow-hidden">
      {/* Top Row */}
      <div className="flex items-center justify-between px-8 py-4 border-b border-white/40">
        <div className="flex items-center gap-2">
          <div className="font-display text-2xl text-pink font-semibold">Flower Wings</div>
        </div>
        
        {/* Premium Search Bar */}
        <div className="flex-1 max-w-lg mx-8 relative group">
          <input 
            type="text" 
            placeholder="Search for premium flowers..." 
            className="w-full bg-white/50 border border-white focus:bg-white focus:outline-none focus:ring-2 focus:ring-pink/20 rounded-full py-2.5 pl-5 pr-10 text-sm transition-all placeholder:text-slate/60 shadow-inner"
          />
          <Search className="w-4 h-4 text-pink absolute right-4 top-1/2 -translate-y-1/2" />
        </div>

        {/* Delivery Selector */}
        <div className="flex items-center gap-3 mr-8 cursor-pointer group">
          <div className="bg-pink/10 p-2 rounded-full group-hover:bg-pink/20 transition">
            <MapPin className="w-4 h-4 text-pink" />
          </div>
          <div className="flex flex-col">
            <span className="text-[9px] text-slate uppercase tracking-widest">Where to deliver?</span>
            <span className="text-xs font-bold text-ink flex items-center gap-1">Select location <ChevronDown className="w-3 h-3" /></span>
          </div>
        </div>

        <Icons />
      </div>
      
      {/* Bottom Row - Categories */}
      <div className="px-8 py-3 bg-white/30 flex justify-center">
        <Categories />
      </div>
    </div>
  </header>
);

// 22. The "Layered Glass" (Two separate frosted glass elements)
export const Nav22 = () => (
  <header className="absolute top-0 inset-x-0 z-50 flex flex-col items-center gap-4 pt-4">
    {/* Main Header Bar - Edge to Edge */}
    <div className="w-full bg-white/20 backdrop-blur-xl border-b border-white/30 px-10 py-3 flex items-center justify-between shadow-sm">
      <div className="font-display text-3xl text-white drop-shadow-md">Flower Wings</div>
      
      <div className="flex-1 max-w-xl mx-8 relative">
        <input 
          type="text" 
          placeholder="Search..." 
          className="w-full bg-black/10 border border-white/20 text-white placeholder:text-white/60 focus:bg-black/20 focus:outline-none rounded-full py-2 pl-6 pr-10 text-sm backdrop-blur-md transition-all"
        />
        <Search className="w-4 h-4 text-white absolute right-4 top-1/2 -translate-y-1/2" />
      </div>

      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2 text-white cursor-pointer hover:opacity-80 transition">
          <MapPin className="w-5 h-5" />
          <div className="flex flex-col">
            <span className="text-[10px] uppercase opacity-70">Deliver to</span>
            <span className="text-sm font-bold flex items-center gap-1">Select <ChevronDown className="w-3 h-3" /></span>
          </div>
        </div>
        <Icons light badgeColor="bg-white text-ink" />
      </div>
    </div>

    {/* Secondary Categories Pill */}
    <div className="bg-white/90 backdrop-blur-2xl shadow-xl border border-white rounded-full px-8 py-3">
      <Categories />
    </div>
  </header>
);

// 23. The "Minimalist Morph" (Extremely clean, hidden borders, focus on typography)
export const Nav23 = () => (
  <header className="absolute top-0 inset-x-0 bg-ivory/95 backdrop-blur-3xl px-12 py-6 flex flex-col gap-6 z-50 shadow-[0_4px_40px_rgba(0,0,0,0.03)] border-b border-line/50">
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-6">
        <div className="font-display text-3xl text-ink">Flower Wings</div>
        <div className="h-6 w-px bg-line" />
        <div className="flex items-center gap-2 cursor-pointer group">
          <MapPin className="w-4 h-4 text-slate group-hover:text-pink transition" />
          <span className="text-xs font-bold text-slate group-hover:text-pink transition">Deliver to...</span>
        </div>
      </div>

      <div className="flex items-center gap-8">
        <div className="relative w-64 group">
          <input 
            type="text" 
            placeholder="Search" 
            className="w-full bg-transparent border-b border-slate/30 focus:border-pink focus:outline-none py-1 pr-6 text-sm text-ink transition-all"
          />
          <Search className="w-4 h-4 text-slate absolute right-0 top-1/2 -translate-y-1/2 group-hover:text-pink transition" />
        </div>
        <Icons badgeColor="bg-ink text-white" />
      </div>
    </div>

    <div className="flex justify-center border-t border-line/30 pt-6">
      <Categories />
    </div>
  </header>
);

// 24. The "Dark Mode Premium E-commerce" (Deep charcoal glass)
export const Nav24 = () => (
  <header className="absolute top-4 inset-x-4 z-50">
    <div className="bg-charcoal/80 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
      <div className="px-8 py-4 flex items-center justify-between border-b border-white/10">
        <div className="font-display text-2xl text-white">Flower Wings</div>
        
        <div className="flex-1 max-w-lg mx-8 relative">
          <input 
            type="text" 
            placeholder="Find the perfect arrangement..." 
            className="w-full bg-white/5 border border-white/10 focus:border-pink-blush focus:bg-white/10 focus:outline-none rounded-xl py-2.5 pl-4 pr-10 text-sm text-white placeholder:text-mist transition-all"
          />
          <Search className="w-4 h-4 text-mist absolute right-4 top-1/2 -translate-y-1/2" />
        </div>

        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3 text-mist cursor-pointer hover:text-white transition">
            <div className="bg-white/5 p-2 rounded-lg"><MapPin className="w-4 h-4" /></div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-widest opacity-60">Delivery</span>
              <span className="text-xs font-bold flex items-center gap-1 text-white">Select Location <ChevronDown className="w-3 h-3" /></span>
            </div>
          </div>
          <Icons light badgeColor="bg-pink-blush text-ink" />
        </div>
      </div>
      
      <div className="px-8 py-3 bg-black/20 flex justify-center">
        <Categories light />
      </div>
    </div>
  </header>
);

// 25. The "Mega Split" (Logo center, complex tools on sides, bottom nav)
export const Nav25 = () => (
  <header className="absolute top-0 inset-x-0 bg-gradient-to-b from-white/90 to-white/40 backdrop-blur-xl border-b border-white z-50">
    <div className="px-10 py-5 flex justify-between items-center">
      {/* Left side tools */}
      <div className="flex items-center gap-6 w-1/3">
        <div className="flex items-center gap-2 cursor-pointer">
          <MapPin className="w-4 h-4 text-pink" />
          <span className="text-xs font-bold text-ink border-b border-dotted border-ink">Select Location</span>
        </div>
        <div className="flex-1 relative">
          <input 
            type="text" 
            placeholder="Search..." 
            className="w-full bg-warm-white border border-line focus:outline-none focus:border-pink rounded-full py-1.5 pl-4 pr-8 text-xs"
          />
          <Search className="w-3 h-3 text-slate absolute right-3 top-1/2 -translate-y-1/2" />
        </div>
      </div>

      {/* Center Logo */}
      <div className="w-1/3 flex justify-center">
        <div className="font-display text-4xl text-ink tracking-tight">Flower Wings</div>
      </div>

      {/* Right side tools */}
      <div className="w-1/3 flex justify-end">
        <Icons badgeColor="bg-pink text-white" />
      </div>
    </div>
    
    <div className="px-10 py-3 border-t border-line/40 flex justify-center bg-white/40">
      <Categories />
    </div>
  </header>
);
