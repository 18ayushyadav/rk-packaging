import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '@/config/site';
import { getGeneralWhatsAppUrl } from '@/lib/whatsapp';
import { MapPin, Phone, MessageCircle, Clock, ArrowRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const whatsappUrl = getGeneralWhatsAppUrl();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-charcoal text-white pt-16 pb-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-neutral-800">
          {/* Brand info */}
          <div className="space-y-4">
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="w-9 h-9 rounded-md bg-brand-red flex items-center justify-center text-white">
                <svg
                  className="w-5 h-5 stroke-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                  <line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
              </div>
              <span className="text-xl font-extrabold tracking-tight">
                <span>RK </span>
                <span className="text-brand-red">PACKAGING</span>
              </span>
            </Link>

            <p className="text-neutral-400 text-sm leading-relaxed">
              Indian paper packaging manufacturer specializing in corrugated shipping boxes, custom-printed cartons, and rigid hardboard packaging for commercial clients.
            </p>

            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold px-3.5 py-2 rounded transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold tracking-wider uppercase text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-neutral-400">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition-colors">
                  Packaging Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/quote"
                  className="text-brand-red font-semibold hover:text-red-400 transition-colors inline-flex items-center gap-1"
                >
                  <span>Request a Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Product Categories */}
          <div>
            <h4 className="text-sm font-bold tracking-wider uppercase text-white mb-4">
              Product Categories
            </h4>
            <ul className="space-y-2.5 text-sm text-neutral-400">
              <li>
                <Link
                  to="/products?category=corrugated-boxes"
                  className="hover:text-white transition-colors"
                >
                  Corrugated Shipping Boxes
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=custom-printed-cartons"
                  className="hover:text-white transition-colors"
                >
                  Custom-Printed Cartons
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=hardboard-boxes"
                  className="hover:text-white transition-colors"
                >
                  Rigid Hardboard Boxes
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=electronics-packaging"
                  className="hover:text-white transition-colors"
                >
                  Electronics Packaging
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=cosmetic-packaging"
                  className="hover:text-white transition-colors"
                >
                  Beauty & Cosmetic Packaging
                </Link>
              </li>
            </ul>
          </div>

          {/* Verified Contact Details */}
          <div>
            <h4 className="text-sm font-bold tracking-wider uppercase text-white mb-4">
              Manufacturing & Enquiries
            </h4>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                <span>{siteConfig.contact.location.display}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-red shrink-0" />
                <a
                  href={`tel:${siteConfig.contact.phoneRaw}`}
                  className="hover:text-white font-semibold text-neutral-200 transition-colors"
                >
                  {siteConfig.contact.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                <div>
                  <p>{siteConfig.contact.operatingHours.weekdays}</p>
                  <p className="text-xs text-neutral-500">
                    {siteConfig.contact.operatingHours.weekend}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & disclaimers */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>
            &copy; {currentYear} {siteConfig.name}. All rights reserved. B2B Paper & Corrugated Packaging.
          </p>
          <p className="text-center sm:text-right">
            Custom sizes, board grades, and printing options tailored to your bulk packaging requirements.
          </p>
        </div>
      </div>
    </footer>
  );
};
