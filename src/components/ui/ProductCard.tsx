import React, { useState } from 'react';
import { PackagingProduct } from '@/types';
import { Button } from './Button';
import { MessageSquare, ArrowRight, CheckCircle2, Box } from 'lucide-react';
import { getProductWhatsAppUrl } from '@/lib/whatsapp';

interface ProductCardProps {
  product: PackagingProduct;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [imgError, setImgError] = useState(false);

  const quoteUrl = `/quote?category=${product.category}&product=${encodeURIComponent(
    product.name
  )}`;
  const whatsappUrl = getProductWhatsAppUrl(product.name);

  return (
    <div className="group bg-white rounded-lg border border-brand-border hover:border-brand-red/30 shadow-card hover:shadow-elevated transition-all duration-300 flex flex-col h-full overflow-hidden">
      {/* Product Image Box */}
      <div className="relative aspect-[16/10] bg-neutral-100 overflow-hidden border-b border-brand-border">
        {!imgError ? (
          <img
            src={product.image}
            alt={`${product.name} - B2B Packaging manufacturing`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => setImgError(true)}
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-neutral-100 to-neutral-200 p-6 text-center">
            <Box className="w-12 h-12 text-brand-red/60 mb-2 stroke-[1.5]" />
            <span className="text-xs font-semibold text-brand-muted uppercase tracking-wider">
              {product.categoryLabel}
            </span>
            <span className="text-sm font-bold text-brand-charcoal mt-1">
              {product.name}
            </span>
          </div>
        )}

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-brand-charcoal/90 text-white text-[11px] font-semibold px-2.5 py-1 rounded tracking-wide backdrop-blur-sm">
            {product.badge}
          </span>
        )}

        {/* Pricing notice */}
        <span className="absolute bottom-3 right-3 bg-white/95 text-brand-charcoal text-[11px] font-bold px-2.5 py-1 rounded shadow-subtle border border-brand-border">
          Custom Pricing
        </span>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 flex flex-col flex-grow">
        {/* Category tag */}
        <span className="text-xs font-bold text-brand-red uppercase tracking-wider mb-1.5 block">
          {product.categoryLabel}
        </span>

        {/* Product Title */}
        <h3 className="text-lg sm:text-xl font-bold text-brand-charcoal group-hover:text-brand-red transition-colors line-clamp-2">
          {product.name}
        </h3>

        {/* Short Description */}
        <p className="mt-2 text-sm text-brand-muted leading-relaxed line-clamp-3">
          {product.shortDescription}
        </p>

        {/* Technical Highlights */}
        <div className="mt-4 pt-4 border-t border-brand-border/60 text-xs text-brand-muted space-y-1.5">
          {product.specs.plyOrBoard && (
            <div className="flex items-start gap-1.5">
              <span className="font-semibold text-brand-charcoal shrink-0">Structure:</span>
              <span className="truncate">{product.specs.plyOrBoard}</span>
            </div>
          )}
          {product.specs.material && (
            <div className="flex items-start gap-1.5">
              <span className="font-semibold text-brand-charcoal shrink-0">Material:</span>
              <span className="truncate">{product.specs.material}</span>
            </div>
          )}
          {product.specs.finishOptions && (
            <div className="flex items-start gap-1.5">
              <span className="font-semibold text-brand-charcoal shrink-0">Finish:</span>
              <span className="truncate">{product.specs.finishOptions}</span>
            </div>
          )}
        </div>

        {/* Applications */}
        <div className="mt-4">
          <span className="text-[11px] font-semibold text-brand-charcoal/80 uppercase tracking-wider block mb-2">
            Recommended For:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {product.applications.slice(0, 3).map((app, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-1 text-[11px] bg-neutral-100 text-brand-charcoal/80 px-2 py-0.5 rounded border border-neutral-200/60"
              >
                <CheckCircle2 className="w-2.5 h-2.5 text-brand-red shrink-0" />
                <span>{app}</span>
              </span>
            ))}
          </div>
        </div>

        {/* CTA Actions */}
        <div className="mt-auto pt-6 flex flex-col sm:flex-row gap-2">
          <Button
            to={quoteUrl}
            variant="primary"
            size="sm"
            className="flex-1 justify-center"
            rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
          >
            Request Pricing
          </Button>

          <Button
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            size="sm"
            className="justify-center hover:text-emerald-700 hover:border-emerald-300"
            leftIcon={<MessageSquare className="w-3.5 h-3.5 text-emerald-600" />}
            title="Discuss this product on WhatsApp"
          >
            Enquire
          </Button>
        </div>
      </div>
    </div>
  );
};
