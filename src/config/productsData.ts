import { PackagingProduct, IndustryItem, WhyChooseItem, ProcessStep } from '@/types';

export const productsData: PackagingProduct[] = [
  {
    id: 'corrugated-shipping-boxes',
    name: 'Corrugated Shipping Boxes (RSC & Die-Cut)',
    category: 'corrugated-boxes',
    categoryLabel: 'Corrugated Boxes',
    isCore: true,
    badge: 'Core Offering',
    shortDescription:
      'Durable paper-based packaging options for shipping, storage, transportation, and business distribution.',
    description:
      'Engineered with multi-ply fluted corrugated fiberboard for optimum stacking strength, impact absorption, and transit safety. Available in Regular Slotted Container (RSC) and custom die-cut designs.',
    applications: [
      'E-commerce order fulfillment',
      'Warehouse storage & transit',
      'Wholesale bulk cargo distribution',
      'Manufacturing assembly parts dispatch',
    ],
    specs: {
      material: 'Virgin & Recycled Kraft Paper, Semi-Chemical Medium',
      plyOrBoard: '3-Ply (Single Wall), 5-Ply (Double Wall), 7-Ply (Triple Wall)',
      fluteType: 'E-Flute, B-Flute, C-Flute, BC Combination Flute',
      finishOptions: 'Natural Kraft, Bleached White Top, Moisture-Resistant Coating',
      durabilityGrade: 'Engineered for standard to heavy freight compression ratings',
      customizationOptions: [
        'Custom length, width, and depth dimensions',
        'Single & 2-color flexographic outer printing',
        'Hand holes and ventilation slots',
        'Custom partition inserts and dividers',
      ],
    },
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=900&q=80',
    fallbackGradient: 'from-amber-100 to-amber-200',
  },
  {
    id: 'custom-printed-cartons',
    name: 'Custom-Printed Product Cartons',
    category: 'custom-printed-cartons',
    categoryLabel: 'Custom-Printed Cartons',
    isCore: true,
    badge: 'Core Offering',
    shortDescription:
      'Packaging with customized printing options to help businesses present their products professionally.',
    description:
      'High-definition printed folding cartons fabricated from premium paperboard. Designed to enhance brand shelf presence while ensuring structural containment and product safety.',
    applications: [
      'Retail product packaging',
      'Consumer packaged goods (CPG)',
      'Electronics and smart accessory packaging',
      'Pharmaceutical & health products',
    ],
    specs: {
      material: 'Duplex Board (Grey/White Back), SBS (Solid Bleached Sulfate), FBB',
      plyOrBoard: '250 GSM to 450 GSM Folding Boxboard',
      finishOptions: 'Matte Lamination, Gloss Lamination, Spot UV, Foil Stamping, Aqueous Coating',
      durabilityGrade: 'Precision die-cut with crisp creases for rapid folding',
      customizationOptions: [
        'Full-color CMYK & Pantone spot printing',
        'Die-cut display windows with transparent film',
        'Tuck-end, auto-lock bottom, and sleeve variations',
        'Embossing / debossing brand logos',
      ],
    },
    image: 'https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=900&q=80',
    fallbackGradient: 'from-red-50 to-orange-100',
  },
  {
    id: 'hardboard-rigid-boxes',
    name: 'Hardboard & Rigid Setup Boxes',
    category: 'hardboard-boxes',
    categoryLabel: 'Hardboard Boxes',
    isCore: true,
    badge: 'Core Offering',
    shortDescription:
      'Rigid paperboard packaging options for products that require a more structured and premium presentation.',
    description:
      'Non-collapsible setup boxes built with dense grey hardboard and wrapped in fine specialty paper. Provides unmatched structural firmness, clean edges, and a luxury unboxing experience.',
    applications: [
      'Premium corporate gifting',
      'Luxury electronics & wearables',
      'High-end cosmetics & perfume sets',
      'Jewelry and fashion accessories',
    ],
    specs: {
      material: 'Dense Rigid Grey Board / Kappa Board covered with premium art paper',
      plyOrBoard: '1.2mm to 3.0mm thickness (800 GSM – 2000 GSM board core)',
      finishOptions: 'Soft-touch velvet lamination, metallic foil stamping, textured embossed wraps',
      durabilityGrade: 'Heavy-duty non-collapsible rigid structure',
      customizationOptions: [
        'Two-piece lid & base configuration',
        'Book-style magnetic closure flaps',
        'Custom EVA foam, velvet, and molded paper pulp inserts',
        'Shoulder & neck custom reveal design',
      ],
    },
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=900&q=80',
    fallbackGradient: 'from-stone-100 to-stone-300',
  },
  {
    id: 'die-cut-ecommerce-mailers',
    name: 'Die-Cut E-Commerce Mailer Boxes',
    category: 'corrugated-boxes',
    categoryLabel: 'Corrugated Boxes',
    isCore: true,
    badge: 'High Demand',
    shortDescription:
      'Self-locking corrugated mailer boxes tailored for direct-to-consumer e-commerce shipments.',
    description:
      'Self-locking roll-end tuck-front (RETF) boxes that require no tape for assembly. Provides superior corner protection and an exceptional opening experience for direct dispatch.',
    applications: [
      'DTC brand subscription boxes',
      'Apparel and lifestyle accessories',
      'Specialty food and gourmet kits',
      'Direct-to-consumer parcels',
    ],
    specs: {
      material: 'High-strength Kraft Corrugated Sheet',
      plyOrBoard: '3-Ply (E-Flute or B-Flute)',
      finishOptions: 'Natural Kraft, White Exterior, Inside-Out Double-Sided Print',
      durabilityGrade: 'Reinforced dual-side walls for postal drop protection',
      customizationOptions: [
        'Double-sided printing (brand greeting inside lid)',
        'Custom sizing for specific item dimensions',
        'Optional peel-and-seal adhesive strip',
      ],
    },
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80',
    fallbackGradient: 'from-amber-100 to-yellow-100',
  },
  {
    id: 'electronics-accessories-packaging',
    name: 'Electronics & Component Packaging Cartons',
    category: 'electronics-packaging',
    categoryLabel: 'Electronics Packaging',
    isCore: false,
    badge: 'Industry Solution',
    shortDescription:
      'Precision paper packaging designed for consumer tech, cables, adapters, and precision components.',
    description:
      'Designed to protect delicate electronics during storage and transit. Incorporates anti-abrasive inner surfaces and tailored compartments to keep components securely positioned.',
    applications: [
      'Mobile phone accessories and chargers',
      'Smart home devices & IoT hubs',
      'Electronic PCB modules & LED lighting',
      'Audio gear & headphones',
    ],
    specs: {
      material: 'Solid Bleached Board combined with internal fluted or card trays',
      plyOrBoard: '300–400 GSM FBB / Micro-flute (E & F flute)',
      finishOptions: 'Anti-scratch matte lamination, metallic accents, hanger hole punch',
      durabilityGrade: 'Drop-tested for retail accessories and transit durability',
      customizationOptions: [
        'Euro-hook hanger tab cutouts for retail peg displays',
        'Compartment partitions for power cords & user manuals',
        'Serial number and barcode label zones',
      ],
    },
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=900&q=80',
    fallbackGradient: 'from-slate-100 to-slate-200',
  },
  {
    id: 'cosmetic-beauty-packaging',
    name: 'Beauty & Cosmetic Packaging Boxes',
    category: 'cosmetic-packaging',
    categoryLabel: 'Beauty & Cosmetic Packaging',
    isCore: false,
    badge: 'Industry Solution',
    shortDescription:
      'Refined paper packaging designed for skincare, haircare, essential oils, and beauty items.',
    description:
      'Clean, aesthetic paper packaging with refined finishes suitable for skincare jars, serums, and cosmetic ranges. Manufactured to maintain structural integrity even with tight tolerances.',
    applications: [
      'Skincare bottles, jars, and droppers',
      'Perfume & fragrance packaging',
      'Hair care & salon product cartons',
      'Organic wellness & apothecary items',
    ],
    specs: {
      material: 'High-brightness virgin paperboard, virgin kraft, or coated rigid board',
      plyOrBoard: '280–380 GSM SBS / Kappa Board Core',
      finishOptions: 'Pearlized coating, soft touch finish, gold/silver hot foil, debossing',
      durabilityGrade: 'Form-fitted for glassware safety and vertical display stability',
      customizationOptions: [
        'Custom bottle-holder collar inserts',
        'Window patch cutouts',
        'Tamper-evident seal flaps',
      ],
    },
    image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=900&q=80',
    fallbackGradient: 'from-rose-50 to-pink-100',
  },
  {
    id: 'heavy-duty-master-cartons',
    name: 'Heavy-Duty Industrial Master Cartons',
    category: 'corrugated-boxes',
    categoryLabel: 'Corrugated Boxes',
    isCore: true,
    badge: 'Industrial Grade',
    shortDescription:
      'Reinforced multi-wall corrugated cartons designed for heavy freight, pallet consolidation, and bulk storage.',
    description:
      'Engineered for maximum compressive and stacking load bearing. Designed to withstand rough logistics, multi-tier palletizing, and long-distance transport without bulging.',
    applications: [
      'Automotive spare parts & hardware',
      'Textile and garment export consolidation',
      'Industrial machinery components',
      'FMCG bulk shipper packaging',
    ],
    specs: {
      material: 'Heavy-gauge virgin kraft liners and heavy fluting medium',
      plyOrBoard: '5-Ply & 7-Ply Heavy Corrugated',
      fluteType: 'BC Flute, A-Flute, AAA Triple-Wall',
      finishOptions: 'Plain Kraft with high-contrast safety warning & handling iconography',
      durabilityGrade: 'High Edge Crush Test (ECT) & Bursting Strength ratings',
      customizationOptions: [
        'Reinforced stitched / glued joints',
        'Custom pallet-dimension footprints (1200x1000mm compatible)',
        'Stacking load arrows & fragile markings',
      ],
    },
    image: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=900&q=80',
    fallbackGradient: 'from-amber-200 to-amber-300',
  },
  {
    id: 'custom-paper-sleeves-inserts',
    name: 'Custom Paperboard Sleeves & Protective Inserts',
    category: 'other-paper-packaging',
    categoryLabel: 'Other Custom Paper Packaging',
    isCore: false,
    badge: 'Custom Accessory',
    shortDescription:
      'Custom packaging sleeves, partition dividers, and die-cut paper fitments tailored to your exact product geometry.',
    description:
      'Slip-on printed belly bands, sleeves, and internal paperboard partitions that protect multi-component products and add promotional branding without changing outer box tooling.',
    applications: [
      'Multi-pack product bundling',
      'Gourmet food & confectionery packaging',
      'Fragile bottle separation in transit',
      'Seasonal promotional banding',
    ],
    specs: {
      material: 'Kraft paperboard, duplex board, or micro-flute card',
      plyOrBoard: '250 GSM to 350 GSM board',
      finishOptions: 'Full-color offset print, gloss/matte varnish',
      durabilityGrade: 'Form-fit tension hold without adhesives',
      customizationOptions: [
        'Custom die-cut locking tabs',
        'Multi-cell grid partitions',
        'Contour-cut product cradles',
      ],
    },
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=900&q=80',
    fallbackGradient: 'from-stone-100 to-stone-200',
  },
];

export const whyChooseUsData: WhyChooseItem[] = [
  {
    title: 'Customization',
    description: 'Packaging options tailored to your product dimensions, branding, and requirements.',
    subtext: 'Custom sizes, flute choices, and tailored closures engineered to fit your products securely.',
    iconName: 'Sliders',
  },
  {
    title: 'Business-Focused Solutions',
    description: 'Practical packaging options for manufacturers, wholesalers, retailers, and growing brands.',
    subtext: 'Balancing structural protection, presentation appeal, and cost efficiency for commercial supply chains.',
    iconName: 'Building2',
  },
  {
    title: 'Bulk Enquiry Support',
    description: 'Discuss your quantity requirements, specifications, and project needs with our team.',
    subtext: 'Transparent guidance on material grades, lead factors, and volume economics without guesswork.',
    iconName: 'Boxes',
  },
  {
    title: 'Direct Communication',
    description: 'Connect with us to discuss packaging requirements and request a quotation.',
    subtext: 'Speak directly with our team via WhatsApp, phone, or quotation forms with fast responses.',
    iconName: 'MessageSquareText',
  },
];

export const industriesServedData: IndustryItem[] = [
  {
    id: 'electronics',
    title: 'Electronics & Accessories',
    description: 'Sturdy packaging designed for gadgets, chargers, component boards, and tech accessories.',
    iconName: 'Cpu',
    commonPackaging: ['Die-cut cartons', 'Fluted mailers', 'Custom protective inserts'],
    specsNote: 'Dimensions, drop protection, and anti-static liners can be specified during quotation.',
  },
  {
    id: 'cosmetics',
    title: 'Beauty & Cosmetics',
    description: 'Refined folding cartons and hardboard rigid boxes for skincare, fragrances, and personal care.',
    iconName: 'Sparkles',
    commonPackaging: ['Rigid presentation boxes', 'Foil-stamped cartons', 'Window cutouts'],
    specsNote: 'Finishes like soft-touch, foil stamping, and snug bottle collars can be customized.',
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce & Retail',
    description: 'Fast-packing corrugated mailers and courier cartons engineered for postal transit and unboxing.',
    iconName: 'ShoppingBag',
    commonPackaging: ['Self-locking mailers', 'Standard RSC shipping boxes', 'Branded tape cartons'],
    specsNote: 'Single or double-wall fluting can be selected based on shipment weight and courier handling.',
  },
  {
    id: 'cpg',
    title: 'Consumer Products',
    description: 'Pack cartons and retail shelf packaging for FMCG items, lifestyle goods, and home essentials.',
    iconName: 'Package',
    commonPackaging: ['Folding tuck-end cartons', 'Display outers', 'Inner partitions'],
    specsNote: 'High-contrast print reproduction helps products stand out on retail shelves.',
  },
  {
    id: 'manufacturers',
    title: 'Manufacturers & Wholesalers',
    description: 'Heavy-duty master shippers and industrial corrugated cartons built for bulk palletized dispatch.',
    iconName: 'Factory',
    commonPackaging: ['5-Ply & 7-Ply corrugated boxes', 'Heavy master shippers', 'Honeycomb separators'],
    specsNote: 'Engineered for compressive stacking strength and pallet optimization.',
  },
  {
    id: 'other-businesses',
    title: 'Custom Paper Packaging',
    description: 'Tailored paperboard boxes, sleeves, and specialized cartons for specialized commercial needs.',
    iconName: 'Layers',
    commonPackaging: ['Printed sleeves', 'Rigid two-piece setup boxes', 'Custom fitments'],
    specsNote: 'Suitability depends on individual product dimensions, load weights, and handling specifications.',
  },
];

export const howItWorksSteps: ProcessStep[] = [
  {
    stepNumber: '01',
    title: 'Share Your Requirements',
    description: 'Tell us about your product, box dimensions, quantity, and printing needs.',
    detail: 'Use our quotation form or WhatsApp link to send your product details, preferred box type, and estimated order batch.',
  },
  {
    stepNumber: '02',
    title: 'Discuss the Specifications',
    description: 'Our team can discuss suitable packaging options based on your requirements.',
    detail: 'We evaluate board grade, flute combination, GSM, closure style, and printing options to ensure practical protection.',
  },
  {
    stepNumber: '03',
    title: 'Receive a Quotation',
    description: 'Request pricing based on the selected product, quantity, and specifications.',
    detail: 'You receive clear, specification-backed pricing tailored to your requested quantity tier and finishing choices.',
  },
  {
    stepNumber: '04',
    title: 'Move Forward With Your Order',
    description: 'Finalize the specifications and order details directly with the business.',
    detail: 'Confirm die-lines, artwork proofs, and schedule production with our Delhi manufacturing facility.',
  },
];

export const featuredGalleryItems = [
  {
    id: 'g-1',
    title: 'Corrugated Shipping Boxes',
    category: 'Corrugated Boxes',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80',
    alt: 'Stacked corrugated shipping boxes for commercial freight and logistics',
    description: 'Multi-ply corrugated cartons built for freight protection and warehouse stacking.',
  },
  {
    id: 'g-2',
    title: 'Custom-Printed Product Cartons',
    category: 'Printed Cartons',
    image: 'https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=800&q=80',
    alt: 'High-quality printed paper cartons with custom brand graphics',
    description: 'Sharp offset printing and precise creasing for retail consumer cartons.',
  },
  {
    id: 'g-3',
    title: 'Electronics Packaging Cartons',
    category: 'Electronics Packaging',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80',
    alt: 'Minimalist tech accessory and electronics paper packaging box',
    description: 'Secure, clean packaging engineered for tech products and consumer gadgets.',
  },
  {
    id: 'g-4',
    title: 'Cosmetic & Beauty Boxes',
    category: 'Cosmetic Packaging',
    image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80',
    alt: 'Premium cosmetic and skincare paper packaging boxes',
    description: 'Refined surface finishes and snug interior support for cosmetic containers.',
  },
  {
    id: 'g-5',
    title: 'Rigid Paperboard Hardboard Boxes',
    category: 'Hardboard Boxes',
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80',
    alt: 'Rigid paperboard luxury presentation box with clean sharp edges',
    description: 'Dense kappa board wrapped in specialty paper for high-end presentation.',
  },
  {
    id: 'g-6',
    title: 'Self-Locking E-Commerce Mailers',
    category: 'Corrugated Boxes',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    alt: 'Die-cut self locking kraft corrugated mailer box for DTC shipping',
    description: 'DTC postal mailers with reinforced walls and tape-free assembly.',
  },
];
