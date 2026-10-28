import React from 'react';
import { Button } from '@/components/ui/Button';
import { getGeneralWhatsAppUrl } from '@/lib/whatsapp';
import { ArrowRight, MessageSquare, PhoneCall } from 'lucide-react';
import { siteConfig } from '@/config/site';

export const FinalCTA: React.FC = () => {
  const whatsappUrl = getGeneralWhatsAppUrl();

  return (
    <section className="py-16 sm:py-20 bg-brand-charcoal text-white relative overflow-hidden">
      {/* Decorative box line watermark */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-5 pointer-events-none flex items-center justify-center">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full stroke-white fill-none stroke-[2]"
        >
          <polygon points="50,10 90,30 90,70 50,90 10,70 10,30" />
          <line x1="50" y1="10" x2="50" y2="50" />
          <line x1="90" y1="30" x2="50" y2="50" />
          <line x1="10" y1="30" x2="50" y2="50" />
          <line x1="50" y1="50" x2="50" y2="90" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/20 border border-brand-red/30 text-red-300 text-xs font-bold uppercase tracking-wider mb-4">
          <PhoneCall className="w-3.5 h-3.5" />
          <span>Direct Manufacturing Consultation</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white max-w-3xl mx-auto leading-tight">
          Looking for the Right Packaging for{' '}
          <span className="text-brand-red">Your Business?</span>
        </h2>

        <p className="mt-4 text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed font-normal">
          Tell us what you need, and let's discuss a packaging solution that fits your product and requirements.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            to="/quote"
            variant="primary"
            size="lg"
            className="w-full sm:w-auto justify-center shadow-brand"
            rightIcon={<ArrowRight className="w-4 h-4" />}
          >
            Request a Quote
          </Button>

          <Button
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto justify-center bg-white text-brand-charcoal hover:bg-neutral-100"
            leftIcon={<MessageSquare className="w-4 h-4 text-[#25D366] fill-[#25D366]" />}
          >
            Chat on WhatsApp
          </Button>
        </div>

        <div className="mt-8 pt-8 border-t border-neutral-800 text-xs text-neutral-400">
          Factory Location: {siteConfig.contact.location.display} • Phone: {siteConfig.contact.phoneDisplay}
        </div>
      </div>
    </section>
  );
};
