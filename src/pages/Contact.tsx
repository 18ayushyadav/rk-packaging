import React, { useState } from 'react';
import { SEO } from '@/components/ui/SEO';
import { siteConfig } from '@/config/site';
import { Button } from '@/components/ui/Button';
import { getGeneralWhatsAppUrl, createWhatsAppUrl } from '@/lib/whatsapp';
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  ArrowRight,
  Send,
  Building2,
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [quickMsg, setQuickMsg] = useState('');
  const [senderName, setSenderName] = useState('');
  const whatsappUrl = getGeneralWhatsAppUrl();

  const handleSendQuickMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickMsg.trim()) return;

    const message = `Hello RK Packaging, my name is ${
      senderName.trim() || 'a customer'
    }. ${quickMsg.trim()}`;
    const url = createWhatsAppUrl(message);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-brand-lightBg py-12 sm:py-16">
      <SEO
        title="Contact RK Packaging — Delhi Packaging Manufacturer"
        description="Contact RK Packaging for corrugated boxes, custom cartons, and hardboard packaging quotes. Facility in Naraina Industrial Area Phase 1, Delhi. Phone: +91 84478 49753."
        canonicalPath="/contact"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-3 bg-brand-red/10 text-brand-darkRed border border-brand-red/20">
            <span>Direct Inquiries</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-charcoal tracking-tight">
            Contact <span className="text-brand-red">RK Packaging</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-brand-muted leading-relaxed">
            Have questions about box dimensions, paperboard grades, or custom printing? Connect directly with our manufacturing and sales team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Verified Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            {/* Phone Card */}
            <div className="bg-white rounded-xl p-6 border border-brand-border shadow-card flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-brand-redWash border border-brand-red/20 text-brand-red flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-brand-muted uppercase tracking-wider block">
                  Direct Phone Call
                </span>
                <a
                  href={`tel:${siteConfig.contact.phoneRaw}`}
                  className="text-lg font-bold text-brand-charcoal hover:text-brand-red transition-colors block mt-1"
                >
                  {siteConfig.contact.phoneDisplay}
                </a>
                <p className="text-xs text-brand-muted mt-1">
                  Call our team for quick questions regarding orders and specifications.
                </p>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-white rounded-xl p-6 border border-brand-border shadow-card flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-emerald-50 border border-emerald-200 text-[#25D366] flex items-center justify-center shrink-0">
                <MessageCircle className="w-6 h-6 fill-[#25D366]" />
              </div>
              <div className="flex-1">
                <span className="text-xs font-bold text-brand-muted uppercase tracking-wider block">
                  WhatsApp Direct Chat
                </span>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-bold text-brand-charcoal hover:text-emerald-600 transition-colors block mt-1"
                >
                  {siteConfig.contact.phoneDisplay}
                </a>
                <p className="text-xs text-brand-muted mt-1">
                  Fastest way to share photos, die-lines, and product dimensions.
                </p>
                <div className="mt-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:underline"
                  >
                    <span>Open WhatsApp Chat</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Facility Location Card */}
            <div className="bg-white rounded-xl p-6 border border-brand-border shadow-card flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-neutral-100 border border-brand-border text-brand-charcoal flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-brand-red" />
              </div>
              <div>
                <span className="text-xs font-bold text-brand-muted uppercase tracking-wider block">
                  Manufacturing Facility
                </span>
                <h3 className="text-base font-bold text-brand-charcoal mt-1">
                  {siteConfig.name}
                </h3>
                <p className="text-xs text-brand-muted leading-relaxed mt-1">
                  {siteConfig.contact.location.display}
                </p>
                <p className="text-[11px] text-brand-muted/80 mt-1 italic">
                  Industrial Area manufacturing & warehouse facility.
                </p>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="bg-white rounded-xl p-6 border border-brand-border shadow-card flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-neutral-100 border border-brand-border text-brand-charcoal flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-brand-red" />
              </div>
              <div>
                <span className="text-xs font-bold text-brand-muted uppercase tracking-wider block">
                  Operating Hours
                </span>
                <p className="text-sm font-bold text-brand-charcoal mt-1">
                  {siteConfig.contact.operatingHours.weekdays}
                </p>
                <p className="text-xs text-brand-muted mt-0.5">
                  {siteConfig.contact.operatingHours.weekend}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Quick Message Composer & Quotation Callout */}
          <div className="lg:col-span-7 space-y-6">
            {/* Detailed Quote Callout Box */}
            <div className="bg-neutral-900 text-white rounded-xl p-6 sm:p-8 border border-neutral-800 shadow-elevated">
              <div className="flex items-center gap-2 text-brand-red text-xs font-bold uppercase tracking-wider mb-2">
                <Building2 className="w-4 h-4" />
                <span>Bulk Orders & Custom Sizing</span>
              </div>
              <h2 className="text-2xl font-bold tracking-tight">
                Need Detailed Pricing for Boxes?
              </h2>
              <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                If you have specific box measurements, quantity requirements, and board flute preferences, our dedicated quotation form is the fastest way to get accurate pricing.
              </p>
              <div className="mt-6">
                <Button
                  to="/quote"
                  variant="primary"
                  size="md"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Go to Request a Quote Form
                </Button>
              </div>
            </div>

            {/* Quick Inquiry Form */}
            <div className="bg-white rounded-xl p-6 sm:p-8 border border-brand-border shadow-card">
              <div className="flex items-center gap-2 text-xs font-bold text-brand-charcoal uppercase tracking-wider mb-3">
                <Send className="w-4 h-4 text-brand-red" />
                <span>Send a Quick Message</span>
              </div>
              <h3 className="text-lg font-bold text-brand-charcoal">
                Have a Quick Question?
              </h3>
              <p className="mt-1 text-xs text-brand-muted leading-relaxed">
                Type your message below to start a conversation directly on WhatsApp.
              </p>

              <form onSubmit={handleSendQuickMessage} className="mt-6 space-y-4">
                <div>
                  <label
                    htmlFor="contactName"
                    className="block text-xs font-semibold text-brand-charcoal mb-1.5"
                  >
                    Your Name
                  </label>
                  <input
                    id="contactName"
                    type="text"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="e.g. Amit Sharma"
                    className="w-full px-3.5 py-2.5 text-sm rounded-md border border-brand-border focus:border-brand-red focus:ring-1 focus:ring-brand-red outline-none transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="quickMsg"
                    className="block text-xs font-semibold text-brand-charcoal mb-1.5"
                  >
                    Your Message / Question <span className="text-brand-red">*</span>
                  </label>
                  <textarea
                    id="quickMsg"
                    rows={4}
                    value={quickMsg}
                    onChange={(e) => setQuickMsg(e.target.value)}
                    required
                    placeholder="Tell us about the boxes you are looking for..."
                    className="w-full px-3.5 py-2.5 text-sm rounded-md border border-brand-border focus:border-brand-red focus:ring-1 focus:ring-brand-red outline-none transition-colors"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    className="w-full justify-center bg-[#25D366] hover:bg-[#20bd5a] text-white border-transparent"
                    leftIcon={<MessageCircle className="w-4 h-4 fill-white" />}
                  >
                    Send via WhatsApp
                  </Button>
                </div>

                <p className="text-[11px] text-brand-muted text-center">
                  Your message will be prepared in WhatsApp to start an instant discussion.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
