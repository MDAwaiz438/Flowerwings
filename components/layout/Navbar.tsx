'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, ShoppingCart, Heart, User, MapPin, ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useCartStore } from '@/store/useCartStore';

const Categories = () => (
  <nav className="flex gap-6 text-[11px] font-bold tracking-widest uppercase items-center text-ink flex-wrap justify-center">
    <Link href="/" className="cursor-pointer hover:text-pink transition">Home</Link>
    <div className="cursor-pointer hover:text-pink transition flex items-center gap-1">Flowers <ChevronDown className="w-3 h-3" /></div>
    <div className="cursor-pointer hover:text-pink transition">Anniversary</div>
    <div className="cursor-pointer hover:text-pink transition flex items-center gap-1">Birthday <ChevronDown className="w-3 h-3" /></div>
    <div className="cursor-pointer hover:text-pink transition flex items-center gap-1">Plants <ChevronDown className="w-3 h-3" /></div>
    <div className="cursor-pointer hover:text-pink transition">Gifts</div>
    <div className="cursor-pointer hover:text-pink transition flex items-center gap-1">Combos <ChevronDown className="w-3 h-3" /></div>
    <div className="cursor-pointer text-pink">Same Day Delivery</div>
  </nav>
);

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  const cartItemCount = useCartStore((state) => state.getCartCount());
  const setIsCartOpen = useCartStore((state) => state.setIsOpen);

  // Handle Scroll for Hide-on-Scroll Navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setIsAtTop(currentScrollY < 37);

      // If scrolling down and past the announcement bar, hide navbar
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        // If scrolling up, show navbar
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* ─── Announcement Bar ─── */}
      <div className="w-full bg-charcoal text-white text-center py-2.5 text-[11px] font-body tracking-[0.1em] uppercase z-[110] relative">
        <span className="opacity-80">Complimentary delivery on orders above ₹999</span>
        <span className="mx-3 opacity-30">·</span>
        <span className="opacity-80">Same-day delivery available</span>
      </div>

      {/* ─── Main Header (Edge-to-Edge Glass & Hide on Scroll) ─── */}
      <header className={cn(
        "fixed inset-x-0 z-[100] transition-all duration-500 ease-in-out pointer-events-none",
        isAtTop ? "top-[37px]" : "top-0",
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      )}>
        <div className="pointer-events-auto bg-white/70 backdrop-blur-3xl shadow-sm w-full border-b border-white/50 flex flex-col overflow-hidden transition-all">
          
          {/* Top Row */}
          <div className="flex items-center justify-between px-6 lg:px-12 py-3 lg:py-4 border-b border-white/40">
            
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-1 text-ink hover:text-pink mr-2"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 flex-shrink-0">
              <div className="font-display text-2xl lg:text-3xl text-pink font-semibold tracking-tight">Flower Wings</div>
            </Link>
            
            {/* Premium Search Bar (Hidden on small screens) */}
            <div className="hidden lg:flex flex-1 max-w-lg mx-8 relative group">
              <input 
                type="text" 
                placeholder="Search for premium flowers..." 
                className="w-full bg-white/50 border border-white focus:bg-white focus:outline-none focus:ring-2 focus:ring-pink/20 rounded-full py-2 pl-5 pr-10 text-[13px] transition-all placeholder:text-slate/60 shadow-inner"
              />
              <Search className="w-4 h-4 text-pink absolute right-4 top-1/2 -translate-y-1/2" />
            </div>

            {/* Delivery Selector (Hidden on small screens) */}
            <div className="hidden lg:flex items-center gap-3 mr-8 cursor-pointer group">
              <div className="bg-pink/10 p-2 rounded-full group-hover:bg-pink/20 transition">
                <MapPin className="w-4 h-4 text-pink" />
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] text-slate uppercase tracking-widest">Where to deliver?</span>
                <span className="text-[12px] font-bold text-ink flex items-center gap-1">Select location <ChevronDown className="w-3 h-3" /></span>
              </div>
            </div>

            {/* Icons */}
            <div className="flex items-center gap-3 lg:gap-5 text-ink flex-shrink-0">
              <button className="relative cursor-pointer hover:scale-110 transition hidden sm:block p-1">
                <Heart className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-4 h-4 text-[9px] flex items-center justify-center rounded-full font-bold bg-pink text-white">0</span>
              </button>
              <button 
                className="relative cursor-pointer hover:scale-110 transition p-1"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingCart className="w-5 h-5" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 text-[9px] flex items-center justify-center rounded-full font-bold bg-pink text-white">
                    {cartItemCount}
                  </span>
                )}
              </button>
              <Link href="/account" className="hidden sm:block cursor-pointer hover:scale-110 transition p-1">
                <User className="w-5 h-5" />
              </Link>
            </div>
          </div>
          
          {/* Bottom Row - Categories (Hidden on mobile) */}
          <div className="hidden lg:flex px-8 py-2.5 bg-white/30 justify-center">
            <Categories />
          </div>
        </div>
      </header>

      {/* ─── Mobile Menu ─── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-ink/30 backdrop-blur-sm z-[200]"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 left-0 bottom-0 w-[85vw] max-w-[380px] bg-ivory z-[201] flex flex-col"
            >
              <div className="flex items-center justify-between p-6 pb-0">
                <span className="font-display font-semibold text-[26px] text-pink">Flower Wings</span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 text-ink hover:text-pink transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Mobile Search */}
              <div className="px-6 mt-6">
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Search flowers..." 
                    className="w-full bg-warm-white border border-line rounded-full py-2.5 pl-4 pr-10 text-sm focus:outline-none focus:border-pink"
                  />
                  <Search className="w-4 h-4 text-slate absolute right-4 top-1/2 -translate-y-1/2" />
                </div>
              </div>

              <nav className="flex-1 flex flex-col gap-0 mt-6 px-6 overflow-y-auto">
                <div className="py-4 text-lg font-display font-medium border-b border-line/60">Home</div>
                <div className="py-4 text-lg font-display font-medium border-b border-line/60">Flowers</div>
                <div className="py-4 text-lg font-display font-medium border-b border-line/60">Anniversary</div>
                <div className="py-4 text-lg font-display font-medium border-b border-line/60">Birthday</div>
                <div className="py-4 text-lg font-display font-medium border-b border-line/60">Plants</div>
                <div className="py-4 text-lg font-display font-medium border-b border-line/60">Gifts</div>
                <div className="py-4 text-lg font-display font-medium border-b border-line/60">Combos</div>
                <div className="py-4 text-lg font-display font-medium text-pink">Same Day Delivery</div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
