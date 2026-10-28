import React, { useState } from 'react';
import { getGeneralWhatsAppUrl } from '@/lib/whatsapp';
import { MessageCircle, X } from 'lucide-react';
import { siteConfig } from '@/config/site';

export const WhatsAppButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const generalUrl = getGeneralWhatsAppUrl();

  return (
    <aside aria-label="WhatsApp quick chat" className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Floating mini-prompt */}
      {isOpen && (
        <div className="mb-3 w-72 bg-white rounded-lg shadow-elevated border border-brand-border p-4 transition-all duration-200">
          <div className="flex items-start justify-between pb-2 border-b border-brand-border">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-xs font-bold text-brand-charcoal uppercase tracking-wider">
                {siteConfig.name} WhatsApp
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-brand-muted hover:text-brand-charcoal p-0.5 rounded focus:outline-none"
              aria-label="Close WhatsApp chat preview"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="mt-2.5 text-xs text-brand-muted leading-relaxed">
            Need an instant response regarding box sizes, custom printing, or bulk quotation?
          </p>

          <a
            href={generalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3.5 w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs font-bold py-2 px-3 rounded shadow-sm transition-colors"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Chat with Packaging Team</span>
          </a>
        </div>
      )}

      {/* Main floating action button */}
      <div className="flex items-center gap-2">
        {!isOpen && (
          <span className="hidden sm:inline-flex bg-white/95 text-brand-charcoal border border-brand-border shadow-card text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-sm">
            Need help? Chat with us
          </span>
        )}

        <a
          href={generalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group flex items-center justify-center w-13 h-13 p-3.5 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full shadow-elevated hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
          aria-label={`Chat on WhatsApp with ${siteConfig.name}`}
          title="Direct WhatsApp Inquiry"
        >
          <MessageCircle className="w-7 h-7 fill-white stroke-none" />
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-brand-red rounded-full border-2 border-white"></span>
        </a>
      </div>
    </aside>
  );
};
