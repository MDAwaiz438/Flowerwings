import { notFound } from 'next/navigation';
import { featuredProducts } from '@/lib/mockData';
import { ProductGallery } from '@/components/product/ProductGallery';
import { ProductInfo } from '@/components/product/ProductInfo';
import { RelatedProducts } from '@/components/product/RelatedProducts';
import { TrustStrip } from '@/components/sections/TrustStrip';

// Mock DB call
async function getProduct(slug: string) {
  // In a real app, this would be a DB fetch
  const product = featuredProducts.find((p) => p.slug === slug);
  return product || null;
}

// Generate static params for all featured products to ensure fast loading
export async function generateStaticParams() {
  return featuredProducts.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const product = await getProduct(resolvedParams.slug);

  if (!product) {
    notFound();
  }

  // If the product doesn't have multiple images, mock some for the gallery display
  const galleryImages = product.images.length > 1 
    ? product.images 
    : [product.image, product.image, product.image];

  return (
    <>
      <div className="bg-ivory min-h-screen">
        {/* Spacer for fixed navbar */}
        <div className="h-[85px] md:h-[95px]" />

        <main className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16 py-8 md:py-12">
          {/* Main PDP Grid */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 relative">
            
            {/* Left: Sticky Gallery */}
            <div className="w-full lg:w-1/2">
              <ProductGallery images={galleryImages} />
            </div>

            {/* Right: Scrolling Info */}
            <div className="w-full lg:w-1/2 lg:pb-32">
              <ProductInfo product={product} />
            </div>
            
          </div>
        </main>
      </div>

      <TrustStrip />
      <RelatedProducts />
    </>
  );
}
