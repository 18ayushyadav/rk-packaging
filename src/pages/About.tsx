import React from 'react';
import { SEO } from '@/components/ui/SEO';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/config/site';
import {
  Boxes,
  Layers,
  Sparkles,
  MapPin,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Phone,
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const About: React.FC = () => {
  return (
    <div className="bg-brand-lightBg py-12 sm:py-16">
      <SEO
        title="About Us — Paper Packaging Manufacturer"
        description="Learn about RK Packaging, an Indian paper packaging manufacturer providing corrugated boxes, custom-printed cartons, and rigid hardboard packaging for businesses."
        canonicalPath="/about"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-3 bg-brand-red/10 text-brand-darkRed border border-brand-red/20">
            <span>About RK Packaging</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-charcoal tracking-tight">
            Packaging Solutions Built Around{' '}
            <span className="text-brand-red">Your Business</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-brand-muted leading-relaxed">
            Focused on functional structural engineering, dependable paperboard quality, and direct manufacturer communication.
          </p>
        </div>

        {/* Narrative Card */}
        <div className="bg-white rounded-xl border border-brand-border shadow-card p-6 sm:p-10 mb-12 space-y-6 text-brand-charcoal leading-relaxed">
          <h2 className="text-xl sm:text-2xl font-bold text-brand-charcoal">
            Who We Are & What We Do
          </h2>

          <div className="space-y-4 text-sm sm:text-base text-brand-charcoal/90">
            <p>
              RK Packaging provides paper packaging solutions for businesses with different product, branding, and distribution requirements. Our product range includes corrugated boxes, custom-printed cartons, and hardboard boxes.
            </p>
            <p>
              We understand that packaging is an important part of product presentation, storage, and transportation. Our goal is to help customers discuss their requirements and identify packaging options suited to their needs.
            </p>
            <p>
              Whether you are exploring shipping boxes or customized product cartons, our team welcomes enquiries from businesses looking for packaging solutions.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-neutral-50 border border-brand-border flex items-start gap-3 text-xs sm:text-sm text-brand-muted">
            <ShieldCheck className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
            <div>
              <strong className="text-brand-charcoal">Direct Factory Engagement:</strong> We work directly with procurement heads, business owners, brand managers, and logistics operators to design boxes that perform under real transit conditions without unnecessary material overhead.
            </div>
          </div>
        </div>

        {/* Three Core Product Pillars */}
        <div className="mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-brand-charcoal mb-6 text-center sm:text-left">
            Our Core Packaging Lines
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-brand-border shadow-subtle flex flex-col">
              <div className="w-10 h-10 rounded-lg bg-brand-redWash border border-brand-red/20 text-brand-red flex items-center justify-center mb-4">
                <Boxes className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-brand-charcoal mb-2">
                Corrugated Boxes
              </h3>
              <p className="text-xs text-brand-muted leading-relaxed">
                Multi-wall fluted paperboard containers fabricated for shipping, storage, and distribution. Available in 3-ply, 5-ply, and 7-ply configurations.
              </p>
              <div className="mt-4 pt-4 border-t border-brand-border/60 text-xs font-semibold text-brand-red">
                <Link to="/products?category=corrugated-boxes" className="hover:underline flex items-center gap-1">
                  <span>View specifications</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-brand-border shadow-subtle flex flex-col">
              <div className="w-10 h-10 rounded-lg bg-brand-redWash border border-brand-red/20 text-brand-red flex items-center justify-center mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-brand-charcoal mb-2">
                Custom-Printed Cartons
              </h3>
              <p className="text-xs text-brand-muted leading-relaxed">
                Folding cartons printed with multi-color brand artwork, matte/gloss lamination, and specialty coatings for retail and consumer products.
              </p>
              <div className="mt-4 pt-4 border-t border-brand-border/60 text-xs font-semibold text-brand-red">
                <Link to="/products?category=custom-printed-cartons" className="hover:underline flex items-center gap-1">
                  <span>View specifications</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-brand-border shadow-subtle flex flex-col">
              <div className="w-10 h-10 rounded-lg bg-brand-redWash border border-brand-red/20 text-brand-red flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-brand-charcoal mb-2">
                Hardboard Boxes
              </h3>
              <p className="text-xs text-brand-muted leading-relaxed">
                Dense rigid setup paperboard boxes designed for luxury unboxing, high-end consumer goods, electronics, and presentation gifting.
              </p>
              <div className="mt-4 pt-4 border-t border-brand-border/60 text-xs font-semibold text-brand-red">
                <Link to="/products?category=hardboard-boxes" className="hover:underline flex items-center gap-1">
                  <span>View specifications</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Our Approach to Customization */}
        <div className="bg-white rounded-xl border border-brand-border shadow-card p-6 sm:p-10 mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-brand-charcoal mb-4">
            Our Approach to Customization
          </h2>
          <p className="text-sm text-brand-muted leading-relaxed mb-6">
            We know that no two products have identical packaging requirements. When discussing your packaging project, we evaluate several functional variables:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-brand-charcoal">
            <div className="flex items-start gap-2.5 p-3 rounded-lg bg-neutral-50 border border-brand-border/60">
              <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
              <div>
                <strong>Product Dimensions:</strong> Exact length, breadth, and height clearances to prevent internal movement and cargo damage.
              </div>
            </div>

            <div className="flex items-start gap-2.5 p-3 rounded-lg bg-neutral-50 border border-brand-border/60">
              <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
              <div>
                <strong>Board Strength & Fluting:</strong> Matching single-wall (3-ply), double-wall (5-ply), or triple-wall (7-ply) to your shipping weight.
              </div>
            </div>

            <div className="flex items-start gap-2.5 p-3 rounded-lg bg-neutral-50 border border-brand-border/60">
              <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
              <div>
                <strong>Finishing & Printing:</strong> From natural unprinted kraft for economical freight to vibrant 4-color offset cartons with spot UV.
              </div>
            </div>

            <div className="flex items-start gap-2.5 p-3 rounded-lg bg-neutral-50 border border-brand-border/60">
              <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
              <div>
                <strong>Order Batches:</strong> Flexible quantity discussion to accommodate seasonal runs, testing batches, and ongoing commercial supply.
              </div>
            </div>
          </div>
        </div>

        {/* Verified Location Card */}
        <div className="bg-neutral-900 text-white rounded-xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 text-xs text-brand-red font-bold uppercase tracking-wider">
              <MapPin className="w-4 h-4" />
              <span>Manufacturing & Dispatch</span>
            </div>
            <h3 className="text-xl font-bold">Facility Location</h3>
            <p className="text-neutral-300 text-sm">
              {siteConfig.contact.location.display}
            </p>
            <p className="text-xs text-neutral-400">
              Working Hours: {siteConfig.contact.operatingHours.weekdays}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Button
              to="/quote"
              variant="primary"
              size="md"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Request a Quote
            </Button>

            <Button
              to="/contact"
              variant="secondary"
              size="md"
              className="bg-transparent text-white border-neutral-700 hover:bg-neutral-800"
              leftIcon={<Phone className="w-4 h-4" />}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
