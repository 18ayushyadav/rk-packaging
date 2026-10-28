import { siteConfig } from '@/config/site';
import { QuoteFormData } from '@/types';

/**
 * Builds standard WhatsApp click-to-chat URL with proper encoding
 */
export function createWhatsAppUrl(message: string): string {
  const cleanNumber = siteConfig.contact.whatsappNumber.replace(/\D/g, '');
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${cleanNumber}?text=${encodedMessage}`;
}

/**
 * Generates the official general inquiry URL
 */
export function getGeneralWhatsAppUrl(): string {
  const message =
    'Hello RK Packaging, I would like to enquire about your packaging solutions. Please share more information.';
  return createWhatsAppUrl(message);
}

/**
 * Generates product-specific inquiry URL
 */
export function getProductWhatsAppUrl(productName: string): string {
  const message = `Hello RK Packaging, I am interested in ${productName}. Please contact me to discuss the specifications, available customization options, and quotation.`;
  return createWhatsAppUrl(message);
}

/**
 * Formats full quote form data into a professional B2B message
 */
export function formatQuoteMessage(data: QuoteFormData): string {
  const lines: string[] = [
    '📦 *NEW PACKAGING QUOTATION ENQUIRY*',
    '----------------------------------------',
    `*Customer Name:* ${data.fullName.trim()}`,
  ];

  if (data.companyName && data.companyName.trim()) {
    lines.push(`*Company Name:* ${data.companyName.trim()}`);
  }

  lines.push(`*Phone Number:* ${data.phone.trim()}`);

  if (data.email && data.email.trim()) {
    lines.push(`*Email:* ${data.email.trim()}`);
  }

  lines.push(`*Product Category:* ${data.productCategory}`);
  lines.push(`*Estimated Quantity:* ${data.estimatedQuantity}`);

  if (data.boxDimensions && data.boxDimensions.trim()) {
    lines.push(`*Box Dimensions (L x W x H):* ${data.boxDimensions.trim()}`);
  }

  lines.push(`*Printing Required:* ${data.printingRequired}`);

  if (data.productUsage && data.productUsage.trim()) {
    lines.push(`*Product Usage / Industry:* ${data.productUsage.trim()}`);
  }

  if (data.additionalRequirements && data.additionalRequirements.trim()) {
    lines.push(`*Additional Requirements:* ${data.additionalRequirements.trim()}`);
  }

  lines.push('----------------------------------------');
  lines.push('Sent via RK Packaging Web Quotation Portal');

  return lines.join('\n');
}

/**
 * Generates WhatsApp URL for a completed quotation form
 */
export function getQuoteWhatsAppUrl(data: QuoteFormData): string {
  const message = formatQuoteMessage(data);
  return createWhatsAppUrl(message);
}

/**
 * Robust clipboard copy helper with fallback
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  if (navigator?.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // Fallback below
    }
  }

  try {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-9999px';
    textArea.style.top = '-9999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    const successful = document.execCommand('copy');
    document.body.removeChild(textArea);
    return successful;
  } catch {
    return false;
  }
}
