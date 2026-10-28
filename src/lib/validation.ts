import { z } from 'zod';

// Indian phone regex: optional +91, 91, or 0 followed by 10 digits starting with 6, 7, 8, or 9
const indianPhoneRegex = /^(?:(?:\+|0{0,2})91(\s*[-]\s*)?|[0]?)?[6789]\d{9}$/;

export const quoteFormSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, { message: 'Full name must be at least 2 characters.' })
    .max(80, { message: 'Full name cannot exceed 80 characters.' }),

  companyName: z
    .string()
    .trim()
    .max(100, { message: 'Company name cannot exceed 100 characters.' })
    .optional()
    .or(z.literal('')),

  phone: z
    .string()
    .trim()
    .refine((val) => {
      // Remove spaces and dashes for checking
      const sanitized = val.replace(/[\s-]/g, '');
      return indianPhoneRegex.test(sanitized);
    }, {
      message: 'Please enter a valid 10-digit Indian phone number (e.g. 9876543210).',
    }),

  email: z
    .string()
    .trim()
    .email({ message: 'Please enter a valid email address.' })
    .optional()
    .or(z.literal('')),

  productCategory: z
    .string()
    .trim()
    .min(1, { message: 'Please select a product category.' }),

  estimatedQuantity: z
    .string()
    .trim()
    .min(1, { message: 'Please select an estimated quantity range.' }),

  boxDimensions: z
    .string()
    .trim()
    .max(100, { message: 'Dimensions should not exceed 100 characters.' })
    .optional()
    .or(z.literal('')),

  printingRequired: z.enum(['Yes', 'No', 'Not Sure'], {
    errorMap: () => ({ message: 'Please select whether printing is required.' }),
  }),

  productUsage: z
    .string()
    .trim()
    .max(200, { message: 'Product usage should not exceed 200 characters.' })
    .optional()
    .or(z.literal('')),

  additionalRequirements: z
    .string()
    .trim()
    .max(800, { message: 'Additional requirements should not exceed 800 characters.' })
    .optional()
    .or(z.literal('')),
});

export type QuoteFormSchemaType = z.infer<typeof quoteFormSchema>;
