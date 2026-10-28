import React from 'react';
import { SEO } from '@/components/ui/SEO';
import { Button } from '@/components/ui/Button';
import { Box, Home, ArrowRight, HelpCircle } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="bg-brand-lightBg min-h-[60vh] flex items-center justify-center py-16 px-4">
      <SEO
        title="404 — Page Not Found"
        description="The packaging page or resource you requested could not be found. Return to RK Packaging home."
      />

      <div className="max-w-md w-full bg-white rounded-xl border border-brand-border shadow-card p-8 text-center">
        <div className="w-16 h-16 rounded-full bg-brand-redWash border border-brand-red/20 text-brand-red mx-auto flex items-center justify-center mb-5">
          <Box className="w-8 h-8 stroke-[1.8]" />
        </div>

        <span className="text-4xl font-extrabold text-brand-charcoal block mb-1 font-mono">
          404
        </span>

        <h1 className="text-xl font-bold text-brand-charcoal mb-2">
          Page Not Found
        </h1>

        <p className="text-xs sm:text-sm text-brand-muted leading-relaxed mb-6">
          The packaging specification or page you are looking for might have been moved, renamed, or is currently unavailable.
        </p>

        <div className="space-y-2.5">
          <Button
            to="/"
            variant="primary"
            size="md"
            className="w-full justify-center"
            leftIcon={<Home className="w-4 h-4" />}
          >
            Back to Home
          </Button>

          <Button
            to="/products"
            variant="secondary"
            size="md"
            className="w-full justify-center"
            rightIcon={<ArrowRight className="w-4 h-4" />}
          >
            Browse Products Catalogue
          </Button>

          <Button
            to="/quote"
            variant="outline"
            size="md"
            className="w-full justify-center"
          >
            Request a Quote
          </Button>
        </div>

        <div className="mt-6 pt-4 border-t border-brand-border/60 text-[11px] text-brand-muted flex items-center justify-center gap-1.5">
          <HelpCircle className="w-3.5 h-3.5 text-brand-red" />
          <span>Need assistance? Contact our team on WhatsApp</span>
        </div>
      </div>
    </div>
  );
};
