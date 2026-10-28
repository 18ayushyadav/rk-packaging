import React from 'react';
import { siteConfig } from '@/config/site';
import { Phone, MessageCircle } from 'lucide-react';
import { getGeneralWhatsAppUrl } from '@/lib/whatsapp';

export const AnnouncementBar: React.FC = () => {
  const whatsappUrl = getGeneralWhatsAppUrl();

  return (
    <div className="bg-brand-charcoal text-white text-xs py-2 px-4 border-b border-brand-darkGray/40 relative z-30">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-4">
        {/* Left message */}
        <div className="flex items-center gap-2 text-center sm:text-left">
          <span className="hidden sm:inline-block px-2 py-0.5 rounded bg-brand-red text-white text-[10px] font-bold tracking-wider uppercase">
            B2B Manufacturing
          </span>
          <span className="text-neutral-200 font-medium">
            {siteConfig.announcement.text}
          </span>
        </div>

        {/* Right contact fast-action */}
        <div className="flex items-center gap-4 text-neutral-300">
          <a
            href={`tel:${siteConfig.contact.phoneRaw}`}
            className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Phone className="w-3 h-3 text-brand-red" />
            <span className="font-semibold">{siteConfig.contact.phoneDisplay}</span>
          </a>

          <span className="text-neutral-600 hidden sm:inline">|</span>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 hover:text-[#25D366] transition-colors"
          >
            <MessageCircle className="w-3 h-3 text-[#25D366]" />
            <span>WhatsApp Enquiry</span>
          </a>
        </div>
      </div>
    </div>
  );
};
