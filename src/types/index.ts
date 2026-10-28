export type ProductCategory =
  | 'corrugated-boxes'
  | 'custom-printed-cartons'
  | 'hardboard-boxes'
  | 'electronics-packaging'
  | 'cosmetic-packaging'
  | 'other-paper-packaging';

export interface PackagingProduct {
  id: string;
  name: string;
  category: ProductCategory;
  categoryLabel: string;
  shortDescription: string;
  description: string;
  applications: string[];
  specs: {
    material: string;
    plyOrBoard?: string;
    fluteType?: string;
    finishOptions: string;
    durabilityGrade: string;
    customizationOptions: string[];
  };
  image: string;
  fallbackGradient?: string;
  badge?: string;
  isCore: boolean;
}

export type PrintingRequirement = 'Yes' | 'No' | 'Not Sure';

export interface QuoteFormData {
  fullName: string;
  companyName?: string;
  phone: string;
  email?: string;
  productCategory: string;
  estimatedQuantity: string;
  boxDimensions?: string;
  printingRequired: PrintingRequirement;
  productUsage?: string;
  additionalRequirements?: string;
}

export interface IndustryItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  commonPackaging: string[];
  specsNote: string;
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  description: string;
  detail: string;
}

export interface WhyChooseItem {
  title: string;
  description: string;
  subtext: string;
  iconName: string;
}
