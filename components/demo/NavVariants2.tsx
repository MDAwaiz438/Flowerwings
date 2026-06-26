import { Search, ShoppingBag, Menu, User, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

const NavIcons = ({ light = false }) => (
  <div className={cn("flex items-center gap-6", light ? "text-white" : "text-ink")}>
    <Search className="w-5 h-5 cursor-pointer hover:opacity-70 transition" />
    <User className="w-5 h-5 cursor-pointer hover:opacity-70 transition hidden md:block" />
    <div className="relative cursor-pointer hover:opacity-70 transition">
      <ShoppingBag className="w-5 h-5" />
      <span className={cn("absolute -top-1 -right-1 w-4 h-4 text-[9px] flex items-center justify-center rounded-full font-bold", light ? "bg-white text-ink" : "bg-ink text-white")}>
        2
      </span>
    </div>
  </div>
);

// 11. The Underlined Minimalist
export const Nav11 = () => (
  <header className="absolute top-0 inset-x-0 py-6 px-12 flex justify-between items-center z-50 border-b border-white/30">
    <nav className="hidden md:flex gap-8 text-white text-xs font-bold tracking-[0.2em] uppercase">
      <span className="cursor-pointer border-b border-transparent hover:border-white pb-1 transition-all">Shop</span>
      <span className="cursor-pointer border-b border-transparent hover:border-white pb-1 transition-all">About</span>
    </nav>
    <div className="font-display text-3xl text-white tracking-widest absolute left-1/2 -translate-x-1/2">FW.</div>
    <NavIcons light />
  </header>
);

// 12. The Cinematic Blur (Extreme frosted glass)
export const Nav12 = () => (
  <header className="absolute top-0 inset-x-0 bg-black/10 backdrop-blur-[40px] py-6 px-10 flex justify-between items-center z-50">
    <div className="font-display text-3xl text-white">Flower Wings</div>
    <div className="flex gap-4">
      <div className="bg-white/20 hover:bg-white/30 transition cursor-pointer backdrop-blur-md rounded-full px-6 py-2 text-white text-xs font-bold uppercase tracking-widest">
        Shop
      </div>
      <div className="bg-white/20 hover:bg-white/30 transition cursor-pointer backdrop-blur-md rounded-full p-2 text-white">
        <Menu className="w-5 h-5" />
      </div>
    </div>
  </header>
);

// 13. The Hover-Reveal (Top strip that expands, simulated expanded state)
export const Nav13 = () => (
  <header className="absolute top-0 inset-x-0 bg-white shadow-xl flex flex-col z-50 transform origin-top transition-transform duration-500">
    <div className="py-4 px-10 flex justify-between items-center border-b border-line">
      <div className="font-display text-2xl text-ink">Flower Wings</div>
      <div className="text-[10px] uppercase tracking-widest text-slate">Menu</div>
    </div>
    <div className="py-8 px-10 flex justify-between">
      <nav className="flex flex-col gap-4 text-3xl font-display text-ink">
        <span className="cursor-pointer hover:text-pink transition">Shop All Flowers</span>
        <span className="cursor-pointer hover:text-pink transition">Curated Gifts</span>
        <span className="cursor-pointer hover:text-pink transition">Our Story</span>
      </nav>
      <div className="flex flex-col items-end justify-between">
        <NavIcons />
        <div className="text-right text-slate text-sm">
          <p>hello@flowerwings.in</p>
          <p>+91 98765 43210</p>
        </div>
      </div>
    </div>
  </header>
);

// 14. The Centered Island
export const Nav14 = () => (
  <header className="absolute top-8 inset-x-0 flex justify-center z-50">
    <div className="bg-ink backdrop-blur-xl rounded-2xl px-8 py-4 flex gap-12 items-center shadow-2xl">
      <Menu className="w-5 h-5 text-white cursor-pointer hover:text-pink transition" />
      <div className="font-display text-2xl text-white">FW</div>
      <ShoppingBag className="w-5 h-5 text-white cursor-pointer hover:text-pink transition" />
    </div>
  </header>
);

// 15. The Expanded Megamenu (Simulated open state)
export const Nav15 = () => (
  <header className="absolute top-0 inset-x-0 bg-ivory z-50 border-b border-line shadow-sm">
    <div className="py-6 px-10 flex justify-between items-center">
      <div className="font-display text-3xl text-pink">Flower Wings</div>
      <nav className="hidden lg:flex gap-8 text-ink text-xs font-bold tracking-widest uppercase">
        <span className="cursor-pointer text-pink">Flowers</span>
        <span className="cursor-pointer hover:text-pink transition">Occasions</span>
        <span className="cursor-pointer hover:text-pink transition">Gifts</span>
      </nav>
      <NavIcons />
    </div>
    {/* Megamenu dropdown area */}
    <div className="bg-white border-t border-line/50 p-10 grid grid-cols-4 gap-8">
      <div>
        <h4 className="text-pink text-[10px] font-bold uppercase tracking-widest mb-4">By Type</h4>
        <ul className="flex flex-col gap-3 text-slate text-sm">
          <li>Roses</li><li>Lilies</li><li>Orchids</li><li>Mixed Bouquets</li>
        </ul>
      </div>
      <div>
        <h4 className="text-pink text-[10px] font-bold uppercase tracking-widest mb-4">By Color</h4>
        <ul className="flex flex-col gap-3 text-slate text-sm">
          <li>Romantic Red</li><li>Blush Pink</li><li>Pure White</li><li>Vibrant Yellow</li>
        </ul>
      </div>
      <div className="col-span-2 bg-pink-petal/30 p-6 rounded-xl flex items-center justify-center border border-pink-blush">
        <span className="font-display text-2xl text-ink">Featured Collection Banner</span>
      </div>
    </div>
  </header>
);

// 16. The Brutalist
export const Nav16 = () => (
  <header className="absolute top-0 inset-x-0 bg-white border-b-4 border-ink py-4 px-6 flex justify-between items-center z-50">
    <div className="font-bold text-4xl text-ink uppercase tracking-tighter">FLOWER WINGS</div>
    <nav className="hidden md:flex gap-4">
      <div className="border-2 border-ink px-4 py-1 text-sm font-bold uppercase hover:bg-ink hover:text-white transition cursor-pointer">Shop</div>
      <div className="border-2 border-ink px-4 py-1 text-sm font-bold uppercase bg-pink text-ink hover:bg-ink hover:text-white transition cursor-pointer">Cart [2]</div>
    </nav>
  </header>
);

// 17. The Asymmetrical
export const Nav17 = () => (
  <header className="absolute top-0 inset-x-0 py-8 px-12 flex items-center z-50">
    <div className="font-display text-4xl text-white mr-auto">Flower Wings</div>
    <div className="flex bg-white/20 backdrop-blur-lg rounded-full overflow-hidden border border-white/30">
      <div className="px-6 py-3 text-white text-xs font-bold tracking-widest uppercase hover:bg-white/20 transition cursor-pointer">Shop</div>
      <div className="px-6 py-3 text-white text-xs font-bold tracking-widest uppercase hover:bg-white/20 transition cursor-pointer border-l border-white/20">About</div>
      <div className="px-6 py-3 bg-pink text-white text-xs font-bold tracking-widest uppercase hover:bg-pink-deep transition cursor-pointer">Cart</div>
    </div>
  </header>
);

// 18. The Card Style
export const Nav18 = () => (
  <header className="absolute top-6 inset-x-6 bg-white rounded-2xl shadow-xl py-4 px-8 flex justify-between items-center z-50">
    <Menu className="w-6 h-6 text-slate cursor-pointer hover:text-pink transition" />
    <div className="font-display text-3xl text-pink font-semibold">Flower Wings</div>
    <div className="flex items-center gap-2 text-sm font-bold uppercase text-slate tracking-widest">
      <ShoppingBag className="w-5 h-5"/> (2)
    </div>
  </header>
);

// 19. The Translucent Pink
export const Nav19 = () => (
  <header className="absolute top-0 inset-x-0 bg-pink/80 backdrop-blur-xl border-b border-white/20 py-5 px-10 flex justify-between items-center z-50 shadow-lg">
    <nav className="hidden md:flex gap-8 text-white text-xs font-bold tracking-[0.2em] uppercase">
      <span className="cursor-pointer hover:text-ivory transition">Shop</span>
      <span className="cursor-pointer hover:text-ivory transition">Gifts</span>
    </nav>
    <div className="font-display text-4xl text-white tracking-wide absolute left-1/2 -translate-x-1/2">Flower Wings</div>
    <NavIcons light />
  </header>
);

// 20. The "Flower Wings" Signature
export const Nav20 = () => (
  <header className="absolute top-4 inset-x-4 bg-ivory/95 backdrop-blur-2xl border border-line/60 rounded-[2rem] py-4 px-8 flex justify-between items-center z-50 shadow-hero">
    <div className="flex gap-8 items-center">
      <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-pink cursor-pointer">Gifts</span>
      <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate cursor-pointer hover:text-pink transition hidden sm:block">Flowers</span>
    </div>
    <div className="font-display text-3xl text-ink tracking-tight absolute left-1/2 -translate-x-1/2">Flower Wings</div>
    <div className="flex gap-6 items-center">
      <Search className="w-4 h-4 text-ink cursor-pointer hover:text-pink transition" />
      <div className="relative cursor-pointer bg-warm-white p-2 rounded-full border border-line">
        <ShoppingBag className="w-4 h-4 text-ink" />
        <span className="absolute -top-1 -right-1 bg-pink text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">2</span>
      </div>
    </div>
  </header>
);
