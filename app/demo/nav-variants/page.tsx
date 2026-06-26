import Image from 'next/image';
import { featuredProducts } from '@/lib/mockData';
import { 
  Nav1, Nav2, Nav3, Nav4, Nav5, 
  Nav6, Nav7, Nav8, Nav9, Nav10 
} from '@/components/demo/NavVariants1';
import { 
  Nav11, Nav12, Nav13, Nav14, Nav15, 
  Nav16, Nav17, Nav18, Nav19, Nav20 
} from '@/components/demo/NavVariants2';
import { 
  Nav21, Nav22, Nav23, Nav24, Nav25 
} from '@/components/demo/NavVariants3';

export const metadata = {
  title: 'Navigation Menu Variants | Flower Wings',
};

const variants = [
  { id: 1, component: Nav1, name: 'The Classic Glass', bg: featuredProducts[0].image, darkText: true },
  { id: 2, component: Nav2, name: 'The Floating Pill', bg: featuredProducts[1].image },
  { id: 3, component: Nav3, name: 'The Split Center', bg: featuredProducts[2].image },
  { id: 4, component: Nav4, name: 'The Stacked Luxury', bg: featuredProducts[3].image },
  { id: 5, component: Nav5, name: 'The Minimalist Invisible', bg: featuredProducts[0].image },
  { id: 6, component: Nav6, name: 'The Dark Mode Elegance', bg: featuredProducts[1].image },
  { id: 7, component: Nav7, name: 'The Neumorphic Soft', bg: null },
  { id: 8, component: Nav8, name: 'The Sidebar Avant-Garde', bg: featuredProducts[2].image },
  { id: 9, component: Nav9, name: 'The Oversized Hamburger', bg: featuredProducts[3].image },
  { id: 10, component: Nav10, name: 'The Dual-Tone Split', bg: null },
  { id: 11, component: Nav11, name: 'The Underlined Minimalist', bg: featuredProducts[0].image },
  { id: 12, component: Nav12, name: 'The Cinematic Blur', bg: featuredProducts[1].image },
  { id: 13, component: Nav13, name: 'The Hover-Reveal', bg: featuredProducts[2].image },
  { id: 14, component: Nav14, name: 'The Centered Island', bg: featuredProducts[3].image },
  { id: 15, component: Nav15, name: 'The Expanded Megamenu', bg: null },
  { id: 16, component: Nav16, name: 'The Brutalist', bg: featuredProducts[0].image },
  { id: 17, component: Nav17, name: 'The Asymmetrical', bg: featuredProducts[1].image },
  { id: 18, component: Nav18, name: 'The Card Style', bg: featuredProducts[2].image },
  { id: 19, component: Nav19, name: 'The Translucent Pink', bg: featuredProducts[3].image },
  { id: 20, component: Nav20, name: 'The "Flower Wings" Signature', bg: featuredProducts[0].image },
  { id: 21, component: Nav21, name: 'The Floating E-Commerce Hub', bg: featuredProducts[1].image },
  { id: 22, component: Nav22, name: 'The Layered Glass', bg: featuredProducts[2].image },
  { id: 23, component: Nav23, name: 'The Minimalist Morph', bg: featuredProducts[3].image },
  { id: 24, component: Nav24, name: 'The Dark Mode Premium E-commerce', bg: featuredProducts[0].image },
  { id: 25, component: Nav25, name: 'The Mega Split', bg: featuredProducts[1].image },
];

export default function NavVariantsPage() {
  return (
    <main className="min-h-screen bg-warm-white pb-32">
      {/* Intro Header */}
      <div className="pt-32 pb-16 px-8 text-center max-w-4xl mx-auto">
        <h1 className="font-display text-5xl md:text-6xl text-ink mb-6">Navigation Variants</h1>
        <p className="text-slate text-lg leading-relaxed">
          Below are 20 premium navigation bar variants designed to match the new Hero section. 
          Many feature glassmorphism, floating elements, or unique luxury layouts. 
          They are rendered against mock background images so you can see exactly how the transparency effects interact with photography.
        </p>
      </div>

      {/* Render all 20 variants */}
      <div className="flex flex-col gap-24 px-4 md:px-8 max-w-[1600px] mx-auto">
        {variants.map((v) => {
          const NavComponent = v.component;
          return (
            <div key={v.id} className="flex flex-col gap-4">
              <div className="flex items-center gap-4 px-4">
                <span className="bg-pink text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">Variant {v.id}</span>
                <h2 className="font-display text-2xl text-ink">{v.name}</h2>
              </div>
              
              {/* Preview Container */}
              <div className="relative w-full h-[500px] rounded-3xl overflow-hidden border border-line shadow-sm bg-[#F2F2F2]">
                {/* Simulated background for glassmorphism to show */}
                {v.bg && (
                  <Image 
                    src={v.bg} 
                    alt={`Background for variant ${v.id}`} 
                    fill 
                    className="object-cover"
                  />
                )}
                {!v.bg && (
                  <div className="absolute inset-0 bg-ivory flex items-center justify-center">
                    <span className="text-slate/40 font-display text-4xl">Solid Background</span>
                  </div>
                )}
                
                {/* The Navigation Bar */}
                <NavComponent />
                
                {/* Mock Content to push scroll or show space */}
                <div className="absolute top-[300px] inset-x-0 flex justify-center pointer-events-none">
                  <div className={`text-center max-w-lg p-8 ${v.darkText || !v.bg ? 'text-ink' : 'text-white drop-shadow-lg'}`}>
                    <h3 className="font-display text-4xl mb-4">Hero Content Area</h3>
                    <p className="text-sm opacity-80">This represents the rest of your hero section lying beneath the navigation.</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
