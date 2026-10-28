import React, { useState } from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Box, CheckCircle2 } from 'lucide-react';

interface CategoryCardItem {
  id: string;
  categoryParam: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  specsSummary: string;
  features: string[];
  image: string;
  ctaText: string;
}

const categories: CategoryCardItem[] = [
  {
    id: 'corrugated',
    categoryParam: 'corrugated-boxes',
    badge: 'Core Manufacturing',
    title: 'CORRUGATED BOXES',
    subtitle: 'Shipping, Transit & Storage',
    description:
      'Durable paper-based packaging options for shipping, storage, transportation, and business distribution.',
    specsSummary: 'Available in 3-Ply, 5-Ply, and 7-Ply fluted board',
    features: [
      'High stacking & compression strength',
      'Standard RSC and custom die-cut designs',
      'Virgin kraft or recycled board combinations',
      'Protection against freight transit impacts',
    ],
    image:
      'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80',
    ctaText: 'Enquire About Corrugated Boxes',
  },
  {
    id: 'printed-cartons',
    categoryParam: 'custom-printed-cartons',
    badge: 'Core Manufacturing',
    title: 'CUSTOM-PRINTED CARTONS',
    subtitle: 'Branded Retail & Consumer Products',
    description:
      'Packaging with customized printing options to help businesses present their products professionally.',
    specsSummary: 'Duplex, SBS, and FBB paperboard (250–450 GSM)',
    features: [
      'Multi-color high definition offset & flexo printing',
      'Gloss, matte, spot UV, and hot foil finishes',
      'Auto-bottom, reverse tuck, and crash lock folds',
      'Designed to elevate shelf appeal and retail branding',
    ],
    image:
      'https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=800&q=80',
    ctaText: 'Enquire About Printed Cartons',
  },
  {
    id: 'hardboard-boxes',
    categoryParam: 'hardboard-boxes',
    badge: 'Core Manufacturing',
    title: 'HARDBOARD BOXES',
    subtitle: 'Rigid Setup & Luxury Presentation',
    description:
      'Rigid paperboard packaging options for products that require a more structured and premium presentation.',
    specsSummary: 'Dense Kappa / Grey hardboard (1.2mm–3.0mm thickness)',
    features: [
      'Non-collapsible rigid structure with sharp clean corners',
      'Lid-and-base or magnetic flap closure styles',
      'Specialty paper wrapping with soft-touch lamination',
      'Custom EVA foam or die-cut paper fitment trays',
    ],
    image:
      'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80',
    ctaText: 'Enquire About Hardboard Boxes',
  },
];

export const CategoryCards: React.FC = () => {
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  return (
    <section className="py-16 sm:py-20 bg-brand-lightBg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Product Categories"
          title="Packaging Solutions for"
          highlight="Every Business"
          description="Explore packaging options designed around your product, branding, and shipping requirements."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {categories.map((cat) => {
            const hasError = imgErrors[cat.id];
            return (
              <div
                key={cat.id}
                className="bg-white rounded-xl border border-brand-border hover:border-brand-red/40 shadow-card hover:shadow-elevated transition-all duration-300 flex flex-col overflow-hidden group"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] bg-neutral-100 overflow-hidden border-b border-brand-border">
                  {!hasError ? (
                    <img
                      src={cat.image}
                      alt={`${cat.title} - RK Packaging solutions`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={() =>
                        setImgErrors((prev) => ({ ...prev, [cat.id]: true }))
                      }
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-neutral-100 text-center">
                      <Box className="w-12 h-12 text-brand-red/60 mb-2" />
                      <span className="text-sm font-bold text-brand-charcoal">
                        {cat.title}
                      </span>
                    </div>
                  )}

                  <span className="absolute top-3 left-3 bg-brand-charcoal text-white text-[11px] font-bold px-2.5 py-1 rounded">
                    {cat.badge}
                  </span>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-7 flex flex-col flex-grow">
                  <span className="text-xs font-semibold text-brand-muted tracking-wider uppercase">
                    {cat.subtitle}
                  </span>

                  <h3 className="text-xl font-extrabold text-brand-charcoal mt-1 group-hover:text-brand-red transition-colors">
                    {cat.title}
                  </h3>

                  <p className="mt-3 text-sm text-brand-muted leading-relaxed">
                    {cat.description}
                  </p>

                  {/* Specs highlight banner */}
                  <div className="mt-4 p-2.5 rounded bg-neutral-50 border border-brand-border text-xs text-brand-charcoal font-semibold">
                    {cat.specsSummary}
                  </div>

                  {/* Key Capabilities */}
                  <div className="mt-5 space-y-2 text-xs text-brand-muted">
                    {cat.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-red shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Direct Link to Quote Form with preselected category */}
                  <div className="mt-auto pt-6">
                    <Button
                      to={`/quote?category=${cat.categoryParam}`}
                      variant="primary"
                      size="md"
                      className="w-full justify-center"
                      rightIcon={<ArrowRight className="w-4 h-4" />}
                    >
                      {cat.ctaText}
                    </Button>
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
