import { Search, ShoppingBag, Menu, Heart, User, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

// Helper component for common icons
const NavIcons = ({ light = false, hideSome = false }) => (
  <div className={cn("flex items-center gap-4", light ? "text-white" : "text-ink")}>
    <Search className="w-5 h-5 cursor-pointer hover:text-pink transition" />
    {!hideSome && <User className="w-5 h-5 cursor-pointer hover:text-pink transition hidden sm:block" />}
    {!hideSome && <Heart className="w-5 h-5 cursor-pointer hover:text-pink transition hidden sm:block" />}
    <div className="relative cursor-pointer hover:text-pink transition">
      <ShoppingBag className="w-5 h-5" />
      <span className={cn("absolute -top-1 -right-1 w-4 h-4 text-[9px] flex items-center justify-center rounded-full font-bold", light ? "bg-white text-ink" : "bg-pink text-white")}>
        2
      </span>
    </div>
  </div>
);

// 1. The Classic Glass (Edge-to-edge frosted glass)
export const Nav1 = () => (
  <header className="absolute top-0 inset-x-0 bg-white/20 backdrop-blur-xl border-b border-white/20 py-4 px-8 flex items-center justify-between z-50 shadow-sm">
    <Menu className="w-6 h-6 text-white cursor-pointer md:hidden" />
    <nav className="hidden md:flex gap-8 text-white text-sm tracking-widest font-bold uppercase">
      <span className="cursor-pointer hover:text-pink-blush transition">Shop</span>
      <span className="cursor-pointer hover:text-pink-blush transition">Gifts</span>
    </nav>
    <div className="font-display text-4xl text-white tracking-wide">Flower Wings</div>
    <NavIcons light />
  </header>
);

// 2. The Floating Pill (Apple-style island)
export const Nav2 = () => (
  <header className="absolute top-6 inset-x-0 flex justify-center z-50 pointer-events-none">
    <div className="pointer-events-auto bg-white/90 backdrop-blur-2xl shadow-2xl rounded-full px-6 py-3 flex items-center justify-between w-[90%] max-w-5xl border border-white/40">
      <nav className="hidden md:flex gap-6 text-ink text-xs tracking-widest font-bold uppercase">
        <span className="cursor-pointer hover:text-pink transition">Shop</span>
        <span className="cursor-pointer hover:text-pink transition">Gifts</span>
      </nav>
      <div className="font-display text-3xl text-pink absolute left-1/2 -translate-x-1/2">Flower Wings</div>
      <NavIcons hideSome />
    </div>
  </header>
);

// 3. The Split Center (Logo center, links split)
export const Nav3 = () => (
  <header className="absolute top-0 inset-x-0 bg-transparent py-8 px-12 flex flex-col items-center z-50">
    <div className="font-display text-[40px] text-white tracking-widest mb-6">FLOWER WINGS</div>
    <div className="flex w-full justify-between items-center border-t border-b border-white/30 py-4">
      <nav className="flex gap-8 text-white/90 text-sm tracking-[0.2em] font-medium uppercase">
        <span className="cursor-pointer hover:text-white transition">Shop All</span>
        <span className="cursor-pointer hover:text-white transition">Occasions</span>
      </nav>
      <nav className="flex gap-8 text-white/90 text-sm tracking-[0.2em] font-medium uppercase">
        <span className="cursor-pointer hover:text-white transition">Journal</span>
        <span className="cursor-pointer hover:text-white transition">Account</span>
        <div className="flex items-center gap-2 cursor-pointer hover:text-white transition">
          <ShoppingBag className="w-4 h-4"/> Cart (0)
        </div>
      </nav>
    </div>
  </header>
);

// 4. The Stacked Luxury
export const Nav4 = () => (
  <header className="absolute top-0 inset-x-0 z-50">
    <div className="bg-ink text-ivory text-[10px] tracking-[0.2em] py-2 flex justify-center uppercase">
      Complimentary Delivery on Orders Above ₹999
    </div>
    <div className="bg-ivory/95 backdrop-blur-md px-10 py-6 flex justify-between items-center shadow-sm">
      <nav className="hidden md:flex gap-8 text-charcoal text-xs tracking-widest font-bold uppercase">
        <span className="cursor-pointer hover:text-pink transition">Shop</span>
        <span className="cursor-pointer hover:text-pink transition">Collections</span>
      </nav>
      <div className="font-display text-4xl text-ink">Flower Wings</div>
      <NavIcons />
    </div>
  </header>
);

// 5. The Minimalist Invisible
export const Nav5 = () => (
  <header className="absolute top-0 inset-x-0 py-8 px-10 flex justify-between items-start z-50">
    <div className="flex flex-col gap-2 cursor-pointer text-white hover:opacity-70 transition group">
      <span className="w-8 h-[2px] bg-white group-hover:w-6 transition-all" />
      <span className="w-6 h-[2px] bg-white group-hover:w-8 transition-all" />
      <span className="text-[10px] uppercase tracking-widest mt-2 font-bold">Menu</span>
    </div>
    <div className="font-display text-4xl text-white">Flower Wings</div>
    <div className="flex gap-6 text-white">
      <span className="text-sm font-bold tracking-widest uppercase cursor-pointer hover:opacity-70 transition hidden md:block">Search</span>
      <span className="text-sm font-bold tracking-widest uppercase cursor-pointer hover:opacity-70 transition">Cart (2)</span>
    </div>
  </header>
);

// 6. The Dark Mode Elegance
export const Nav6 = () => (
  <header className="absolute top-0 inset-x-0 bg-ink/90 backdrop-blur-3xl border-b border-white/5 py-5 px-10 flex justify-between items-center z-50">
    <div className="font-display text-3xl text-pink-blush">Flower Wings</div>
    <nav className="hidden md:flex gap-8 text-mist text-sm tracking-widest uppercase">
      <span className="cursor-pointer hover:text-white transition">Flowers</span>
      <span className="cursor-pointer hover:text-white transition">Plants</span>
      <span className="cursor-pointer hover:text-white transition">Gifts</span>
    </nav>
    <NavIcons light />
  </header>
);

// 7. The Neumorphic Soft
export const Nav7 = () => (
  <header className="absolute top-4 inset-x-4 bg-[#F2F2F2] rounded-3xl py-4 px-8 flex justify-between items-center z-50 shadow-[10px_10px_20px_#d9d9d9,-10px_-10px_20px_#ffffff]">
    <div className="flex items-center gap-8">
      <div className="font-display text-3xl text-ink">Flower Wings</div>
      <nav className="hidden md:flex gap-6 text-slate text-xs font-bold tracking-widest uppercase ml-8 border-l border-line pl-8">
        <span className="cursor-pointer hover:text-pink transition">Shop</span>
        <span className="cursor-pointer hover:text-pink transition">About</span>
      </nav>
    </div>
    <NavIcons />
  </header>
);

// 8. The Sidebar Avant-Garde (Simulated on top for layout, usually left)
export const Nav8 = () => (
  <header className="absolute top-0 left-0 bottom-0 w-24 bg-white/10 backdrop-blur-2xl border-r border-white/20 flex flex-col items-center py-10 z-50 justify-between">
    <Menu className="w-6 h-6 text-white cursor-pointer hover:text-pink transition" />
    <div className="font-display text-3xl text-white transform -rotate-90 whitespace-nowrap tracking-widest">
      Flower Wings
    </div>
    <div className="flex flex-col gap-6">
      <Search className="w-5 h-5 text-white cursor-pointer hover:text-pink transition" />
      <ShoppingBag className="w-5 h-5 text-white cursor-pointer hover:text-pink transition" />
    </div>
  </header>
);

// 9. The Oversized Hamburger
export const Nav9 = () => (
  <header className="absolute top-0 inset-x-0 py-8 px-12 flex justify-between items-center z-50">
    <div className="font-display text-5xl text-white mix-blend-difference">FW.</div>
    <div className="bg-pink text-white rounded-full w-16 h-16 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-2xl">
      <Menu className="w-8 h-8" />
    </div>
  </header>
);

// 10. The Dual-Tone Split
export const Nav10 = () => (
  <header className="absolute top-0 inset-x-0 flex z-50 shadow-md">
    <div className="w-1/2 bg-ivory py-6 px-10 flex items-center justify-between border-b border-line">
      <div className="font-display text-3xl text-ink">Flower Wings</div>
      <nav className="hidden lg:flex gap-6 text-ink text-xs font-bold tracking-widest uppercase">
        <span className="cursor-pointer hover:text-pink transition">Shop</span>
      </nav>
    </div>
    <div className="w-1/2 bg-charcoal py-6 px-10 flex items-center justify-between border-b border-ink">
      <nav className="hidden lg:flex gap-6 text-white text-xs font-bold tracking-widest uppercase">
        <span className="cursor-pointer hover:text-pink transition">Gifts</span>
      </nav>
      <NavIcons light hideSome />
    </div>
  </header>
);
