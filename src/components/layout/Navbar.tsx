import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { siteConfig } from '@/config/site';
import { Button } from '@/components/ui/Button';
import { Menu, X, ArrowRight, Phone } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route navigation
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-card border-b border-brand-border'
          : 'bg-white border-b border-brand-border/70'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo with box icon */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red rounded-md"
            aria-label={`${siteConfig.name} Home`}
          >
            {/* Box Icon Graphic */}
            <div className="w-10 h-10 rounded-lg bg-brand-red flex items-center justify-center text-white shadow-subtle group-hover:bg-brand-darkRed transition-colors">
              <svg
                className="w-6 h-6 stroke-white"
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

            {/* Typography */}
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-brand-charcoal leading-none flex items-center gap-1">
                <span>RK</span>
                <span className="text-brand-red">PACKAGING</span>
              </span>
              <span className="text-[10px] uppercase font-semibold text-brand-muted tracking-widest mt-1">
                Paper & Corrugated
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {siteConfig.nav.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3.5 py-2 rounded-md text-sm font-semibold transition-colors duration-150 relative ${
                    active
                      ? 'text-brand-red font-bold'
                      : 'text-brand-charcoal hover:text-brand-red hover:bg-neutral-50'
                  }`}
                >
                  {item.label}
                  {active && (
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-brand-red rounded-full"></span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${siteConfig.contact.phoneRaw}`}
              className="p-2 text-brand-muted hover:text-brand-red hover:bg-neutral-50 rounded-md transition-colors"
              title={`Call ${siteConfig.contact.phoneDisplay}`}
              aria-label={`Call ${siteConfig.contact.phoneDisplay}`}
            >
              <Phone className="w-4 h-4" />
            </a>

            <Button
              to={siteConfig.quoteCta.path}
              variant="primary"
              size="md"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              {siteConfig.quoteCta.label}
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <Button
              to={siteConfig.quoteCta.path}
              variant="primary"
              size="sm"
              className="text-xs px-3 py-1.5"
            >
              Quote
            </Button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-brand-charcoal hover:bg-neutral-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-brand-charcoal" />
              ) : (
                <Menu className="w-6 h-6 text-brand-charcoal" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-brand-border px-4 pt-3 pb-6 shadow-elevated">
          <nav className="flex flex-col space-y-1">
            {siteConfig.nav.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2.5 rounded-md text-base font-semibold transition-colors ${
                    active
                      ? 'bg-brand-redWash text-brand-red font-bold'
                      : 'text-brand-charcoal hover:bg-neutral-50'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="pt-4 border-t border-brand-border/80 flex flex-col gap-2.5">
              <Button
                to={siteConfig.quoteCta.path}
                variant="primary"
                size="md"
                className="w-full justify-center"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                {siteConfig.quoteCta.label}
              </Button>

              <div className="text-center pt-2 text-xs text-brand-muted">
                Direct Inquiries:{' '}
                <a
                  href={`tel:${siteConfig.contact.phoneRaw}`}
                  className="font-bold text-brand-charcoal hover:text-brand-red"
                >
                  {siteConfig.contact.phoneDisplay}
                </a>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
