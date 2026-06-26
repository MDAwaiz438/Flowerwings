'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Camera, Globe, Phone } from 'lucide-react';

const footerLinks = {
  shop: [
    { label: 'All Flowers', href: '/shop' },
    { label: 'Bestsellers', href: '/shop?filter=bestseller' },
    { label: 'New Arrivals', href: '/shop?filter=new' },
    { label: 'Gift Combos', href: '/category/combos' },
    { label: 'Plants', href: '/category/plants' },
  ],
  occasions: [
    { label: 'Birthday', href: '/occasions/birthday' },
    { label: 'Anniversary', href: '/occasions/anniversary' },
    { label: "Valentine's Day", href: '/occasions/valentines' },
    { label: "Mother's Day", href: '/occasions/mothers-day' },
    { label: 'Sympathy', href: '/occasions/sympathy' },
  ],
  help: [
    { label: 'Track Order', href: '/track' },
    { label: 'Delivery Info', href: '/delivery' },
    { label: 'Returns & Refunds', href: '/returns' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact Us', href: '/contact' },
  ],
};

const socials = [
  { icon: Camera, label: 'Instagram', href: '#' },
  { icon: Globe, label: 'Facebook', href: '#' },
  { icon: Phone, label: 'WhatsApp', href: '#' },
];

export function Footer() {
  return (
    <footer className="bg-charcoal text-white mt-auto">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">

        {/* ─── Main Grid ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 py-16 md:py-20">

          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <Link href="/">
              <span className="font-display font-semibold text-[30px] text-pink tracking-tight">
                Flower Wings
              </span>
            </Link>
            <p className="text-[14px] text-white/60 max-w-[320px] leading-relaxed">
              Artisan-crafted flower arrangements delivered with love across Bangalore. Making every moment bloom since 2020.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-pink hover:text-white transition-all duration-300"
                >
                  <social.icon className="w-[18px] h-[18px]" strokeWidth={1.5} />
                </a>
              ))}
            </div>

            {/* Newsletter */}
            <div className="mt-4">
              <p className="text-[11px] uppercase tracking-[0.12em] text-white/40 font-medium mb-3">
                Subscribe for exclusive offers
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 h-[44px] px-4 rounded-lg bg-white/10 border border-white/10 text-[14px] text-white placeholder:text-white/30 focus:outline-none focus:border-pink/50 focus:bg-white/[0.07] transition-all"
                />
                <button className="h-[44px] px-5 rounded-lg bg-pink text-white text-[12px] font-bold uppercase tracking-wider hover:bg-pink-deep transition-colors">
                  Join
                </button>
              </div>
            </div>
          </motion.div>

          {/* Shop Links */}
          <div className="flex flex-col gap-5">
            <h4 className="text-[11px] uppercase tracking-[0.14em] text-white/40 font-bold">Shop</h4>
            <nav className="flex flex-col gap-3">
              {footerLinks.shop.map((link) => (
                <Link key={link.href} href={link.href} className="text-[14px] text-white/60 hover:text-pink transition-colors duration-300">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Occasions Links */}
          <div className="flex flex-col gap-5">
            <h4 className="text-[11px] uppercase tracking-[0.14em] text-white/40 font-bold">Occasions</h4>
            <nav className="flex flex-col gap-3">
              {footerLinks.occasions.map((link) => (
                <Link key={link.href} href={link.href} className="text-[14px] text-white/60 hover:text-pink transition-colors duration-300">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Help & Contact */}
          <div className="flex flex-col gap-5">
            <h4 className="text-[11px] uppercase tracking-[0.14em] text-white/40 font-bold">Help</h4>
            <nav className="flex flex-col gap-3">
              {footerLinks.help.map((link) => (
                <Link key={link.href} href={link.href} className="text-[14px] text-white/60 hover:text-pink transition-colors duration-300">
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-4 pt-4 border-t border-white/10">
              <p className="text-[13px] text-white/50">+91 98765 43210</p>
              <p className="text-[13px] text-white/50">hello@flowerwings.in</p>
            </div>
          </div>
        </div>

        {/* ─── Bottom Bar ─── */}
        <div className="border-t border-white/10 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-white/30">
            © {new Date().getFullYear()} Flower Wings. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-[12px] text-white/30">
            <Link href="/privacy" className="hover:text-white/60 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white/60 transition-colors">Terms</Link>
            <span>Made with ♥ in Bangalore</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
