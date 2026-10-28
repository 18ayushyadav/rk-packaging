import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { quoteFormSchema, QuoteFormSchemaType } from '@/lib/validation';
import { siteConfig } from '@/config/site';
import { Button } from '@/components/ui/Button';
import {
  formatQuoteMessage,
  getQuoteWhatsAppUrl,
  copyToClipboard,
} from '@/lib/whatsapp';
import {
  CheckCircle2,
  Copy,
  MessageSquare,
  AlertCircle,
  HelpCircle,
  ShieldCheck,
} from 'lucide-react';

interface QuoteFormProps {
  initialCategory?: string;
  initialProduct?: string;
}

export const QuoteForm: React.FC<QuoteFormProps> = ({
  initialCategory = '',
  initialProduct = '',
}) => {
  const [copied, setCopied] = useState(false);
  const [submissionFeedback, setSubmissionFeedback] = useState<{
    type: 'whatsapp' | 'copied';
    data: QuoteFormSchemaType;
  } | null>(null);

  // Match initialCategory id or label to select dropdown
  const matchedCategory =
    siteConfig.productCategories.find(
      (c) => c.id === initialCategory || c.label.toLowerCase() === initialCategory.toLowerCase()
    )?.label || initialCategory;

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<QuoteFormSchemaType>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      fullName: '',
      companyName: '',
      phone: '',
      email: '',
      productCategory: matchedCategory || '',
      estimatedQuantity: '',
      boxDimensions: '',
      printingRequired: 'Not Sure',
      productUsage: '',
      additionalRequirements: initialProduct
        ? `Regarding product: ${initialProduct}`
        : '',
    },
  });

  const selectedQuantity = watch('estimatedQuantity');
  const selectedPrinting = watch('printingRequired');

  // Submit via WhatsApp
  const onSubmitWhatsApp = (data: QuoteFormSchemaType) => {
    const whatsappUrl = getQuoteWhatsAppUrl(data);
    setSubmissionFeedback({ type: 'whatsapp', data });
    
    // Open WhatsApp in new window/tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  // Copy details to clipboard
  const onCopyDetails = async (data: QuoteFormSchemaType) => {
    const formatted = formatQuoteMessage(data);
    const success = await copyToClipboard(formatted);
    if (success) {
      setCopied(true);
      setSubmissionFeedback({ type: 'copied', data });
      setTimeout(() => setCopied(false), 4000);
    }
  };

  return (
    <div className="bg-white rounded-xl border border-brand-border shadow-elevated overflow-hidden">
      {/* Form Header */}
      <div className="p-6 sm:p-8 bg-neutral-900 text-white border-b border-neutral-800">
        <div className="flex items-center gap-2 text-brand-red text-xs font-bold uppercase tracking-wider mb-2">
          <ShieldCheck className="w-4 h-4" />
          <span>Direct Factory Quotation</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
          Request Packaging Specifications & Pricing
        </h3>
        <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
          Provide your product dimensions, board requirements, and quantity estimates. Our team will review the details to suggest suitable packaging options.
        </p>
      </div>

      {/* Submission Feedback Alert */}
      {submissionFeedback && (
        <div className="p-5 bg-emerald-50 border-b border-emerald-200">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
            <div className="text-sm">
              <h4 className="font-bold text-emerald-900">
                {submissionFeedback.type === 'whatsapp'
                  ? 'WhatsApp Chat Prepared'
                  : 'Enquiry Copied to Clipboard'}
              </h4>
              <p className="mt-1 text-emerald-800 leading-relaxed text-xs sm:text-sm">
                {submissionFeedback.type === 'whatsapp'
                  ? 'Your enquiry message has been formatted and opened in WhatsApp. Please press "Send" in WhatsApp to deliver the specifications to our team.'
                  : 'Your formatted quotation enquiry has been copied to your clipboard. You can now paste and send it via email or messaging.'}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Main Form */}
      <form className="p-6 sm:p-8 space-y-6" noValidate>
        {/* Contact Information Section */}
        <div>
          <h4 className="text-xs font-bold text-brand-charcoal uppercase tracking-wider mb-4 pb-2 border-b border-brand-border flex items-center justify-between">
            <span>1. Contact Information</span>
            <span className="text-[11px] font-normal text-brand-muted">* Required fields</span>
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-xs font-semibold text-brand-charcoal mb-1.5"
              >
                Full Name <span className="text-brand-red">*</span>
              </label>
              <input
                id="fullName"
                type="text"
                placeholder="e.g. Ramesh Kumar"
                {...register('fullName')}
                className={`w-full px-3.5 py-2.5 text-sm rounded-md border ${
                  errors.fullName ? 'border-brand-red bg-red-50/30' : 'border-brand-border'
                } focus:border-brand-red focus:ring-1 focus:ring-brand-red outline-none transition-colors`}
              />
              {errors.fullName && (
                <p className="mt-1.5 text-xs text-brand-red flex items-center gap-1 font-medium">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.fullName.message}</span>
                </p>
              )}
            </div>

            {/* Company Name */}
            <div>
              <label
                htmlFor="companyName"
                className="block text-xs font-semibold text-brand-charcoal mb-1.5"
              >
                Company / Business Name <span className="text-brand-muted font-normal">(Optional)</span>
              </label>
              <input
                id="companyName"
                type="text"
                placeholder="e.g. Acme Enterprises Ltd."
                {...register('companyName')}
                className="w-full px-3.5 py-2.5 text-sm rounded-md border border-brand-border focus:border-brand-red focus:ring-1 focus:ring-brand-red outline-none transition-colors"
              />
              {errors.companyName && (
                <p className="mt-1.5 text-xs text-brand-red flex items-center gap-1 font-medium">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.companyName.message}</span>
                </p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label
                htmlFor="phone"
                className="block text-xs font-semibold text-brand-charcoal mb-1.5"
              >
                Phone Number <span className="text-brand-red">*</span>
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-2.5 text-sm text-brand-muted font-medium select-none">
                  +91
                </span>
                <input
                  id="phone"
                  type="tel"
                  placeholder="9876543210"
                  {...register('phone')}
                  className={`w-full pl-12 pr-3.5 py-2.5 text-sm rounded-md border ${
                    errors.phone ? 'border-brand-red bg-red-50/30' : 'border-brand-border'
                  } focus:border-brand-red focus:ring-1 focus:ring-brand-red outline-none transition-colors`}
                />
              </div>
              {errors.phone ? (
                <p className="mt-1.5 text-xs text-brand-red flex items-center gap-1 font-medium">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.phone.message}</span>
                </p>
              ) : (
                <p className="mt-1 text-[11px] text-brand-muted">
                  Used exclusively for quotation coordination via phone/WhatsApp.
                </p>
              )}
            </div>

            {/* Email Address */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-semibold text-brand-charcoal mb-1.5"
              >
                Email Address <span className="text-brand-muted font-normal">(Optional)</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="e.g. procurement@company.com"
                {...register('email')}
                className={`w-full px-3.5 py-2.5 text-sm rounded-md border ${
                  errors.email ? 'border-brand-red bg-red-50/30' : 'border-brand-border'
                } focus:border-brand-red focus:ring-1 focus:ring-brand-red outline-none transition-colors`}
              />
              {errors.email && (
                <p className="mt-1.5 text-xs text-brand-red flex items-center gap-1 font-medium">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.email.message}</span>
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Packaging Specifications Section */}
        <div>
          <h4 className="text-xs font-bold text-brand-charcoal uppercase tracking-wider mb-4 pb-2 border-b border-brand-border">
            2. Packaging Specifications
          </h4>

          <div className="space-y-4">
            {/* Product Category */}
            <div>
              <label
                htmlFor="productCategory"
                className="block text-xs font-semibold text-brand-charcoal mb-1.5"
              >
                Product Category <span className="text-brand-red">*</span>
              </label>
              <select
                id="productCategory"
                {...register('productCategory')}
                className={`w-full px-3.5 py-2.5 text-sm rounded-md border ${
                  errors.productCategory ? 'border-brand-red bg-red-50/30' : 'border-brand-border'
                } focus:border-brand-red focus:ring-1 focus:ring-brand-red outline-none transition-colors bg-white`}
              >
                <option value="">-- Select a packaging category --</option>
                {siteConfig.productCategories.map((cat) => (
                  <option key={cat.id} value={cat.label}>
                    {cat.label} {cat.isCore ? '(Core Product)' : ''}
                  </option>
                ))}
                <option value="Other">Other Custom Packaging</option>
              </select>
              {errors.productCategory && (
                <p className="mt-1.5 text-xs text-brand-red flex items-center gap-1 font-medium">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.productCategory.message}</span>
                </p>
              )}
            </div>

            {/* Estimated Quantity Range */}
            <div>
              <label className="block text-xs font-semibold text-brand-charcoal mb-1.5">
                Estimated Order Quantity <span className="text-brand-red">*</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {siteConfig.quantityRanges.map((range) => {
                  const isSelected = selectedQuantity === range;
                  return (
                    <button
                      type="button"
                      key={range}
                      onClick={() => setValue('estimatedQuantity', range, { shouldValidate: true })}
                      className={`text-xs py-2 px-3 rounded border text-center font-semibold transition-all ${
                        isSelected
                          ? 'border-brand-red bg-brand-redWash text-brand-darkRed ring-1 ring-brand-red'
                          : 'border-brand-border bg-white text-brand-charcoal hover:bg-neutral-50'
                      }`}
                    >
                      {range}
                    </button>
                  );
                })}
              </div>
              <input type="hidden" {...register('estimatedQuantity')} />
              {errors.estimatedQuantity && (
                <p className="mt-1.5 text-xs text-brand-red flex items-center gap-1 font-medium">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.estimatedQuantity.message}</span>
                </p>
              )}
              <p className="mt-1 text-[11px] text-brand-muted">
                Quantity ranges help us estimate optimal production setups and material batches.
              </p>
            </div>

            {/* Box Dimensions */}
            <div>
              <label
                htmlFor="boxDimensions"
                className="block text-xs font-semibold text-brand-charcoal mb-1.5"
              >
                Box Dimensions (Length × Width × Height){' '}
                <span className="text-brand-muted font-normal">(Optional)</span>
              </label>
              <input
                id="boxDimensions"
                type="text"
                placeholder="e.g. 12 × 10 × 8 inches or 300 × 250 × 200 mm"
                {...register('boxDimensions')}
                className="w-full px-3.5 py-2.5 text-sm rounded-md border border-brand-border focus:border-brand-red focus:ring-1 focus:ring-brand-red outline-none transition-colors"
              />
              <p className="mt-1 text-[11px] text-brand-muted">
                If unknown, mention your product size in the additional notes below.
              </p>
            </div>

            {/* Printing Required */}
            <div>
              <label className="block text-xs font-semibold text-brand-charcoal mb-1.5">
                Is Custom Printing Required? <span className="text-brand-red">*</span>
              </label>
              <div className="flex flex-wrap gap-2.5">
                {(['Yes', 'No', 'Not Sure'] as const).map((opt) => {
                  const isSelected = selectedPrinting === opt;
                  return (
                    <button
                      type="button"
                      key={opt}
                      onClick={() => setValue('printingRequired', opt, { shouldValidate: true })}
                      className={`text-xs py-2 px-4 rounded border font-semibold transition-all ${
                        isSelected
                          ? 'border-brand-red bg-brand-redWash text-brand-darkRed ring-1 ring-brand-red'
                          : 'border-brand-border bg-white text-brand-charcoal hover:bg-neutral-50'
                      }`}
                    >
                      {opt === 'Yes'
                        ? 'Yes (Custom Logo / Graphics)'
                        : opt === 'No'
                        ? 'No (Plain Kraft / White Box)'
                        : 'Not Sure Yet'}
                    </button>
                  );
                })}
              </div>
              <input type="hidden" {...register('printingRequired')} />
              {errors.printingRequired && (
                <p className="mt-1.5 text-xs text-brand-red flex items-center gap-1 font-medium">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.printingRequired.message}</span>
                </p>
              )}
            </div>

            {/* Product Usage / Industry */}
            <div>
              <label
                htmlFor="productUsage"
                className="block text-xs font-semibold text-brand-charcoal mb-1.5"
              >
                Product Usage / Goods Inside <span className="text-brand-muted font-normal">(Optional)</span>
              </label>
              <input
                id="productUsage"
                type="text"
                placeholder="e.g. E-commerce apparel shipping, heavy automotive parts, glass perfume bottles"
                {...register('productUsage')}
                className="w-full px-3.5 py-2.5 text-sm rounded-md border border-brand-border focus:border-brand-red focus:ring-1 focus:ring-brand-red outline-none transition-colors"
              />
              <p className="mt-1 text-[11px] text-brand-muted">
                Helps us recommend appropriate board GSM, 3-ply vs 5-ply, or rigid board thickness.
              </p>
            </div>

            {/* Additional Requirements */}
            <div>
              <label
                htmlFor="additionalRequirements"
                className="block text-xs font-semibold text-brand-charcoal mb-1.5"
              >
                Additional Requirements or Project Notes <span className="text-brand-muted font-normal">(Optional)</span>
              </label>
              <textarea
                id="additionalRequirements"
                rows={3}
                placeholder="Mention any specific requirements, flute preferences, delivery city, or questions you have..."
                {...register('additionalRequirements')}
                className="w-full px-3.5 py-2.5 text-sm rounded-md border border-brand-border focus:border-brand-red focus:ring-1 focus:ring-brand-red outline-none transition-colors"
              ></textarea>
            </div>
          </div>
        </div>

        {/* Conversion Action Buttons */}
        <div className="pt-4 border-t border-brand-border/80 space-y-3">
          <div className="bg-amber-50/70 border border-amber-200/80 rounded-md p-3 text-xs text-amber-900 flex items-start gap-2">
            <HelpCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <p>
              <strong>Please Note:</strong> Your enquiry details will be prepared in WhatsApp. Please review and send the message to contact our team directly.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            {/* Primary WhatsApp Submission */}
            <Button
              type="button"
              onClick={handleSubmit(onSubmitWhatsApp)}
              variant="primary"
              size="lg"
              disabled={isSubmitting}
              className="flex-1 justify-center bg-[#25D366] hover:bg-[#20BD5A] text-white border-transparent hover:shadow-lg"
              leftIcon={<MessageSquare className="w-4 h-4 fill-white" />}
            >
              <span>Submit Enquiry via WhatsApp</span>
            </Button>

            {/* Secondary Copy Button */}
            <Button
              type="button"
              onClick={handleSubmit(onCopyDetails)}
              variant="secondary"
              size="lg"
              disabled={isSubmitting}
              className="justify-center sm:w-auto"
              leftIcon={
                copied ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                ) : (
                  <Copy className="w-4 h-4 text-brand-muted" />
                )
              }
            >
              <span>{copied ? 'Copied Details!' : 'Copy Formatted Details'}</span>
            </Button>
          </div>

          <p className="text-center text-[11px] text-brand-muted pt-1">
            We respect your privacy. No personal details are sold or shared with third parties.
          </p>
        </div>
      </form>
    </div>
  );
};
