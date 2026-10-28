import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SEO } from '@/components/ui/SEO';
import { ProductCard } from '@/components/ui/ProductCard';
import { productsData } from '@/config/productsData';
import { siteConfig } from '@/config/site';
import { Button } from '@/components/ui/Button';
import { Filter, Layers, ArrowRight } from 'lucide-react';

export const Products: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');

  const [activeCategory, setActiveCategory] = useState<string>(categoryParam || 'all');

  // Sync state if query parameter changes
  useEffect(() => {
    if (categoryParam) {
      setActiveCategory(categoryParam);
    } else {
      setActiveCategory('all');
    }
  }, [categoryParam]);

  const handleCategorySelect = (categoryId: string) => {
    setActiveCategory(categoryId);
    if (categoryId === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category: categoryId });
    }
  };

  const filteredProducts =
    activeCategory === 'all'
      ? productsData
      : productsData.filter((p) => p.category === activeCategory);

  return (
    <div className="bg-brand-lightBg py-12 sm:py-16">
      <SEO
        title="Packaging Products & Custom Cartons Catalogue"
        description="Explore RK Packaging's B2B product range: corrugated shipping boxes, custom-printed cartons, rigid hardboard boxes, and tailored paper packaging options."
        canonicalPath="/products"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-3 bg-brand-red/10 text-brand-darkRed border border-brand-red/20">
            <span>B2B Packaging Catalogue</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-charcoal tracking-tight">
            Packaging Solutions Built for Your Products
          </h1>
          <p className="mt-4 text-base sm:text-lg text-brand-muted leading-relaxed">
            From industrial corrugated shipping boxes to custom-printed folding cartons and rigid hardboard setup boxes. All dimensions, board grades, and printing options can be customized for your bulk order.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="mb-10 bg-white p-2.5 rounded-xl border border-brand-border shadow-subtle flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
          <button
            onClick={() => handleCategorySelect('all')}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ${
              activeCategory === 'all'
                ? 'bg-brand-red text-white shadow-subtle'
                : 'text-brand-charcoal hover:bg-neutral-100'
            }`}
          >
            All Packaging ({productsData.length})
          </button>

          {siteConfig.productCategories.map((cat) => {
            const isSelected = activeCategory === cat.id;
            const count = productsData.filter((p) => p.category === cat.id).length;
            return (
              <button
                key={cat.id}
                onClick={() => handleCategorySelect(cat.id)}
                className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-brand-charcoal text-white shadow-subtle'
                    : 'text-brand-charcoal hover:bg-neutral-100'
                }`}
              >
                <span>{cat.label}</span>
                {cat.isCore && (
                  <span className="text-[10px] px-1.5 py-0.2 rounded bg-neutral-200/80 text-brand-charcoal font-bold">
                    Core
                  </span>
                )}
                {count > 0 && <span className="text-xs opacity-60">({count})</span>}
              </button>
            );
          })}
        </div>

        {/* Category Note for Industry Options */}
        {activeCategory !== 'all' && (
          <div className="mb-8 p-4 rounded-lg bg-white border border-brand-border flex items-start gap-3 text-xs text-brand-muted">
            <Filter className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-brand-charcoal">
                Showing{' '}
                {
                  siteConfig.productCategories.find((c) => c.id === activeCategory)
                    ?.label || activeCategory
                }{' '}
                options.
              </span>{' '}
              Custom flute types (B, C, E, BC), GSM weights, and die-lines are engineered according to your cargo weight and dimensions.
            </div>
          </div>
        )}

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Technical Guide: Corrugated Board Structure Comparison */}
        <div className="mt-16 bg-white rounded-xl border border-brand-border shadow-card p-6 sm:p-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-red mb-2">
              <Layers className="w-4 h-4" />
              <span>Technical Reference Guide</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-brand-charcoal">
              Understanding Paper Packaging Types & Construction
            </h2>
            <p className="mt-2 text-sm text-brand-muted leading-relaxed">
              Different products require different levels of structural cushioning, compression tolerance, and surface finishes:
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-brand-border/60">
            <div className="space-y-2">
              <span className="text-xs font-bold text-brand-red uppercase tracking-wider block">
                01. Corrugated Boxes
              </span>
              <h3 className="text-base font-bold text-brand-charcoal">
                Single, Double & Triple Wall
              </h3>
              <p className="text-xs text-brand-muted leading-relaxed">
                Utilizes fluted paper mediums sandwiched between flat kraft linerboards. 3-ply is ideal for lightweight shipping and e-commerce mailers, 5-ply handles medium-to-heavy cargo and freight transit, while 7-ply handles extreme industrial loads and bulk stacking.
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold text-brand-red uppercase tracking-wider block">
                02. Custom-Printed Cartons
              </span>
              <h3 className="text-base font-bold text-brand-charcoal">
                Duplex & Folding Boxboard
              </h3>
              <p className="text-xs text-brand-muted leading-relaxed">
                Fabricated from 250 GSM to 450 GSM paperboard (Duplex grey/white back, SBS, or FBB). Shipped flat to minimize freight space, rapid to assemble, and optimized for full-color high-definition graphic printing, spot UV, and foil finishes.
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold text-brand-red uppercase tracking-wider block">
                03. Hardboard Boxes
              </span>
              <h3 className="text-base font-bold text-brand-charcoal">
                Dense Rigid Setup Boxes
              </h3>
              <p className="text-xs text-brand-muted leading-relaxed">
                Manufactured with heavy non-bending kappa/chipboard (1.2mm to 3mm) wrapped with fine art paper or specialty texture paper. Supplied fully formed (rigid) for luxury unboxing, high-end electronics, cosmetics, and executive gift packaging.
              </p>
            </div>
          </div>
        </div>

        {/* Pricing Notice & Custom Quote Banner */}
        <div className="mt-12 bg-neutral-900 text-white rounded-xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-brand-red font-bold text-xs uppercase tracking-wider block mb-1">
              Transparent Commercial Pricing
            </span>
            <h3 className="text-2xl font-bold tracking-tight">
              Need a Custom Size or Exact Specification Pricing?
            </h3>
            <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
              Because packaging costs depend on box dimensions, board GSM, flute combination, printing requirements, and order volume, we provide itemized quotations based on your exact requirements.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Button
              to="/quote"
              variant="primary"
              size="lg"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Request Custom Quotation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
