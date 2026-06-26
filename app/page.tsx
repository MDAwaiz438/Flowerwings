import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { CategoryGrid } from "@/components/sections/CategoryGrid";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { EditorialStory } from "@/components/sections/EditorialStory";
import { Testimonials } from "@/components/sections/Testimonials";
import { ValueProps } from "@/components/sections/ValueProps";
import { CtaBanner } from "@/components/sections/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <CategoryGrid />
      <FeaturedProducts />
      <EditorialStory />
      <Testimonials />
      <ValueProps />
      <CtaBanner />
    </>
  );
}
