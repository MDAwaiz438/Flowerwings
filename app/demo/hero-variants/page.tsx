import { 
  Variant1, Variant2, Variant3, Variant4, Variant5, 
  Variant6, Variant7, Variant8, Variant9, Variant10 
} from '@/components/demo/HeroVariants';

import {
  Variant11, Variant12, Variant13, Variant14, Variant15
} from '@/components/demo/GiftVariants';

export const metadata = {
  title: 'Hero Variants Demo | Flower Wings',
};

export default function HeroVariantsPage() {
  return (
    <div className="w-full flex flex-col bg-line/20">
      
      <div className="bg-charcoal text-white text-center py-6 sticky top-0 z-[100] shadow-md border-b border-white/10">
        <h1 className="font-display text-2xl mb-1">Flower Wings 2.0 - Hero Concepts</h1>
        <p className="text-white/60 text-sm">Scroll down to view all 15 interactive variants.</p>
      </div>

      <Section title="1. Cinematic Full-Bleed"><Variant1 /></Section>
      <Section title="2. Editorial Arch"><Variant2 /></Section>
      <Section title="3. Floating Island"><Variant3 /></Section>
      <Section title="4. Masonry Collage"><Variant4 /></Section>
      <Section title="5. Minimalist Brutalist"><Variant5 /></Section>
      <Section title="6. Sidebar Nav"><Variant6 /></Section>
      <Section title="7. Oversized Typographic"><Variant7 /></Section>
      <Section title="8. Split-Screen Carousel"><Variant8 /></Section>
      <Section title="9. Dark Mode Elegance"><Variant9 /></Section>
      <Section title="10. Focus Product Minimalist"><Variant10 /></Section>
      
      <div className="bg-pink text-white text-center py-8">
        <h2 className="font-display text-3xl">Gifting Focus Variants</h2>
        <p className="opacity-80">Designs tailored specifically for a Gift Shop experience.</p>
      </div>

      <Section title="11. The Curator (Grid based gifting)"><Variant11 /></Section>
      <Section title="12. Shop By Recipient"><Variant12 /></Section>
      <Section title="13. The Celebration Ribbon"><Variant13 /></Section>
      <Section title="14. Split-Screen Hamper Showcase"><Variant14 /></Section>
      <Section title="15. Minimalist Gift Box"><Variant15 /></Section>

    </div>
  );
}

function Section({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className="w-full border-b-[10px] border-charcoal/10 relative">
      <div className="absolute top-4 left-4 z-[60] bg-charcoal text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
        {title}
      </div>
      {children}
    </div>
  );
}
