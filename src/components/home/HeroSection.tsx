import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Boxes, Check, Shield, Layers, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export const HeroSection: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="relative overflow-hidden bg-white border-b border-brand-border/70 subtle-grid-bg pt-8 pb-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Manufacturing Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-brand-redWash border border-brand-red/20 text-brand-darkRed text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse"></span>
              <span>Indian Paper Packaging Manufacturer</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5.5xl font-extrabold text-brand-charcoal tracking-tight leading-[1.12]">
              Custom Packaging Solutions for{' '}
              <span className="text-brand-red relative inline-block">
                Growing Businesses
                <svg
                  className="absolute left-0 -bottom-1.5 w-full h-2 text-brand-red/30 -z-10"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path d="M0 5 Q 50 10, 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-brand-muted leading-relaxed max-w-2xl font-normal">
              From corrugated shipping boxes to custom-printed cartons and rigid hardboard packaging, RK Packaging helps businesses find packaging solutions tailored to their products and requirements.
            </p>

            {/* Concise Supporting Line */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm font-semibold text-brand-charcoal pt-1">
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-brand-red" />
                <span>Custom sizes</span>
              </span>
              <span className="text-brand-border">•</span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-brand-red" />
                <span>Printing options</span>
              </span>
              <span className="text-brand-border">•</span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-brand-red" />
                <span>Bulk order enquiries</span>
              </span>
            </div>

            {/* Call To Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button
                to="/quote"
                variant="primary"
                size="lg"
                className="justify-center shadow-brand"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Request a Quote
              </Button>

              <Button
                to="/products"
                variant="secondary"
                size="lg"
                className="justify-center"
              >
                Explore Our Products
              </Button>
            </div>

            {/* Verification / Facility Highlights */}
            <div className="pt-6 border-t border-brand-border/60 grid grid-cols-3 gap-4 text-left">
              <div>
                <span className="block text-xs font-bold text-brand-charcoal">Corrugated Boxes</span>
                <span className="text-[11px] text-brand-muted">3-Ply, 5-Ply, 7-Ply</span>
              </div>
              <div>
                <span className="block text-xs font-bold text-brand-charcoal">Printed Cartons</span>
                <span className="text-[11px] text-brand-muted">Offset & Flexo</span>
              </div>
              <div>
                <span className="block text-xs font-bold text-brand-charcoal">Hardboard Boxes</span>
                <span className="text-[11px] text-brand-muted">Rigid Kappa Board</span>
              </div>
            </div>
          </div>

          {/* Right Column: Packaging Composition Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Decorative Frame */}
              <div className="relative rounded-2xl bg-white p-3 border border-brand-border shadow-elevated overflow-hidden">
                {/* Main Hero Packaging Image */}
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-neutral-100">
                  {!imgError ? (
                    <img
                      src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1000&q=80"
                      alt="Corrugated boxes, custom printed cartons, and rigid packaging manufactured by RK Packaging"
                      className="w-full h-full object-cover object-center"
                      onError={() => setImgError(true)}
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-neutral-100 p-8 text-center">
                      <Boxes className="w-16 h-16 text-brand-red mb-3" />
                      <h3 className="font-bold text-brand-charcoal text-base">
                        RK Packaging Manufacturing
                      </h3>
                      <p className="text-xs text-brand-muted mt-1">
                        Corrugated & Rigid Paper Solutions
                      </p>
                    </div>
                  )}

                  {/* Overlay Tag */}
                  <div className="absolute bottom-3 left-3 right-3 bg-brand-charcoal/90 backdrop-blur-md text-white p-3 rounded-lg border border-white/10 flex items-center justify-between text-xs">
                    <div>
                      <span className="font-bold block text-white">Commercial Grade Packaging</span>
                      <span className="text-neutral-300 text-[11px]">Engineered for durability & transit</span>
                    </div>
                    <Link
                      to="/products"
                      className="text-brand-red font-bold hover:underline flex items-center gap-1 shrink-0"
                    >
                      <span>Catalogue</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>

                {/* Sub cards showcasing the 3 core lines */}
                <div className="grid grid-cols-3 gap-2 mt-3 text-center">
                  <div className="p-2.5 rounded-lg bg-neutral-50 border border-brand-border/60">
                    <Boxes className="w-4 h-4 text-brand-red mx-auto mb-1" />
                    <span className="text-[11px] font-bold text-brand-charcoal block leading-tight">
                      Corrugated
                    </span>
                    <span className="text-[9px] text-brand-muted">Shipping boxes</span>
                  </div>

                  <div className="p-2.5 rounded-lg bg-neutral-50 border border-brand-border/60">
                    <Layers className="w-4 h-4 text-brand-red mx-auto mb-1" />
                    <span className="text-[11px] font-bold text-brand-charcoal block leading-tight">
                      Printed
                    </span>
                    <span className="text-[9px] text-brand-muted">Product cartons</span>
                  </div>

                  <div className="p-2.5 rounded-lg bg-neutral-50 border border-brand-border/60">
                    <Sparkles className="w-4 h-4 text-brand-red mx-auto mb-1" />
                    <span className="text-[11px] font-bold text-brand-charcoal block leading-tight">
                      Hardboard
                    </span>
                    <span className="text-[9px] text-brand-muted">Rigid gift boxes</span>
                  </div>
                </div>
              </div>

              {/* Floating Industrial Badge */}
              <div className="hidden sm:flex absolute -bottom-5 -left-5 bg-white border border-brand-border rounded-lg shadow-elevated p-3 items-center gap-3">
                <div className="w-8 h-8 rounded bg-brand-red/10 text-brand-red flex items-center justify-center shrink-0">
                  <Shield className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="text-xs font-bold text-brand-charcoal block">Delhi Manufacturing</span>
                  <span className="text-[10px] text-brand-muted">Naraina Industrial Area Phase 1</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
