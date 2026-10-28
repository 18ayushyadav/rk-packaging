import React, { useState } from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { featuredGalleryItems } from '@/config/productsData';
import { Box, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FeaturedGallery: React.FC = () => {
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  return (
    <section className="py-16 sm:py-20 bg-brand-lightBg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Product Showcase"
          title="Featured Packaging"
          highlight="Gallery"
          description="A selection of corrugated, folding carton, and rigid hardboard packaging solutions manufactured for commercial clients."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredGalleryItems.map((item) => {
            const hasError = imgErrors[item.id];
            return (
              <div
                key={item.id}
                className="group bg-white rounded-xl border border-brand-border hover:border-brand-red/30 shadow-card hover:shadow-elevated transition-all overflow-hidden flex flex-col"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] bg-neutral-100 overflow-hidden">
                  {!hasError ? (
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={() =>
                        setImgErrors((prev) => ({ ...prev, [item.id]: true }))
                      }
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-neutral-100">
                      <Box className="w-12 h-12 text-brand-red/50 mb-2" />
                      <span className="text-sm font-bold text-brand-charcoal">
                        {item.title}
                      </span>
                    </div>
                  )}

                  <span className="absolute top-3 left-3 bg-brand-charcoal/90 backdrop-blur-sm text-white text-[11px] font-semibold px-2.5 py-1 rounded">
                    {item.category}
                  </span>
                </div>

                {/* Details */}
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-base font-bold text-brand-charcoal group-hover:text-brand-red transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-brand-muted leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mt-auto pt-4 flex items-center justify-between text-xs">
                    <span className="text-brand-muted text-[11px]">Commercial Batch Options</span>
                    <Link
                      to="/products"
                      className="inline-flex items-center gap-1 font-bold text-brand-red hover:underline"
                    >
                      <span>View in Catalogue</span>
                      <ExternalLink className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
