import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { SEO } from '@/components/ui/SEO';
import { QuoteForm } from '@/components/forms/QuoteForm';
import { siteConfig } from '@/config/site';
import {
  CheckCircle2,
  Clock,
  Phone,
  MessageCircle,
  FileText,
} from 'lucide-react';
import { getGeneralWhatsAppUrl } from '@/lib/whatsapp';

export const RequestQuote: React.FC = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || '';
  const productParam = searchParams.get('product') || '';
  const whatsappUrl = getGeneralWhatsAppUrl();

  return (
    <div className="bg-brand-lightBg py-12 sm:py-16">
      <SEO
        title="Request a Quote — Packaging Pricing & Specifications"
        description="Request a quotation for corrugated boxes, custom printed cartons, and hardboard boxes from RK Packaging. Choose dimensions, quantity tiers, and board specifications."
        canonicalPath="/quote"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-3 bg-brand-red/10 text-brand-darkRed border border-brand-red/20">
            <span>Direct Commercial Pricing</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-charcoal tracking-tight">
            Request a Packaging <span className="text-brand-red">Quotation</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-brand-muted leading-relaxed">
            Fill in your box dimensions, preferred board type, and estimated order quantity. Our packaging specialists will review your requirements and provide tailored pricing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Form Column */}
          <div className="lg:col-span-8">
            <QuoteForm
              initialCategory={categoryParam}
              initialProduct={productParam}
            />
          </div>

          {/* Right Sidebar: Helpful Guidance & Reassurances */}
          <div className="lg:col-span-4 space-y-6">
            {/* What Happens Next Card */}
            <div className="bg-white rounded-xl p-6 border border-brand-border shadow-card">
              <div className="flex items-center gap-2 text-xs font-bold text-brand-charcoal uppercase tracking-wider mb-4 pb-2 border-b border-brand-border">
                <Clock className="w-4 h-4 text-brand-red" />
                <span>What Happens Next?</span>
              </div>

              <div className="space-y-3.5 text-xs text-brand-muted">
                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-brand-red text-white flex items-center justify-center font-bold text-[10px] shrink-0">
                    1
                  </span>
                  <div>
                    <strong className="text-brand-charcoal block">Specification Review</strong>
                    We check board fluting and GSM feasibility against your product size and shipping load.
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-brand-red text-white flex items-center justify-center font-bold text-[10px] shrink-0">
                    2
                  </span>
                  <div>
                    <strong className="text-brand-charcoal block">Price Calculation</strong>
                    We calculate itemized pricing based on your chosen quantity tier and finishing choices.
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-brand-red text-white flex items-center justify-center font-bold text-[10px] shrink-0">
                    3
                  </span>
                  <div>
                    <strong className="text-brand-charcoal block">Direct Discussion</strong>
                    We coordinate die-lines, sample approvals, and lead times directly with your team.
                  </div>
                </div>
              </div>
            </div>

            {/* Packaging Guidance Card */}
            <div className="bg-white rounded-xl p-6 border border-brand-border shadow-card">
              <div className="flex items-center gap-2 text-xs font-bold text-brand-charcoal uppercase tracking-wider mb-4 pb-2 border-b border-brand-border">
                <FileText className="w-4 h-4 text-brand-red" />
                <span>Helpful Tips for Enquiries</span>
              </div>

              <ul className="space-y-2.5 text-xs text-brand-muted">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                  <span>
                    <strong>Dimensions:</strong> Standard box notation is <em>Length × Width × Height</em> (Internal Dimensions).
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                  <span>
                    <strong>Transit Weight:</strong> If shipping heavy or fragile items, mention the weight so we can recommend 5-ply or 7-ply.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                  <span>
                    <strong>Artwork:</strong> If printing is required, vector files (AI / PDF / CDR) are ideal for plate making.
                  </span>
                </li>
              </ul>
            </div>

            {/* Direct Factory Contacts */}
            <div className="bg-neutral-900 text-white rounded-xl p-6 border border-neutral-800">
              <span className="text-brand-red text-xs font-bold uppercase tracking-wider block mb-1">
                Prefer to Speak Immediately?
              </span>
              <h3 className="text-base font-bold text-white mb-3">
                Direct Contact Options
              </h3>

              <div className="space-y-3 text-xs text-neutral-300">
                <a
                  href={`tel:${siteConfig.contact.phoneRaw}`}
                  className="flex items-center gap-2.5 p-2.5 rounded bg-neutral-800/80 hover:bg-neutral-800 transition-colors"
                >
                  <Phone className="w-4 h-4 text-brand-red shrink-0" />
                  <div>
                    <span className="text-neutral-400 block text-[10px]">Call Us</span>
                    <span className="font-bold text-white">{siteConfig.contact.phoneDisplay}</span>
                  </div>
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-2.5 rounded bg-emerald-950/60 border border-emerald-800/40 hover:bg-emerald-950/80 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                  <div>
                    <span className="text-emerald-300 block text-[10px]">Instant Chat</span>
                    <span className="font-bold text-white">Chat on WhatsApp</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
