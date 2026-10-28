import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Sliders, Building2, Boxes, MessageSquareText } from 'lucide-react';

const benefits = [
  {
    icon: Sliders,
    title: 'Customization',
    description: 'Packaging options tailored to your product dimensions, branding, and requirements.',
    detail: 'From exact length-width-depth measurements to specific fluting grades and closure styles, packaging is built around your goods.',
  },
  {
    icon: Building2,
    title: 'Business-Focused Solutions',
    description: 'Practical packaging options for manufacturers, wholesalers, retailers, and growing brands.',
    detail: 'We balance product safety, structural integrity, and material costs to deliver viable packaging for commercial operations.',
  },
  {
    icon: Boxes,
    title: 'Bulk Enquiry Support',
    description: 'Discuss your quantity requirements, specifications, and project needs with our team.',
    detail: 'Whether ordering batches of 500 or 10,000+ units, our team guides you on volume feasibility and board specifications.',
  },
  {
    icon: MessageSquareText,
    title: 'Direct Communication',
    description: 'Connect with us to discuss packaging requirements and request a quotation.',
    detail: 'Work directly with knowledgeable packaging specialists who understand board grades, tooling dies, and printing finishes.',
  },
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-white border-y border-brand-border/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Why RK Packaging"
          title="Practical Packaging Solutions Built for"
          highlight="Business Needs"
          description="We focus on dependable manufacturing, custom dimensions, and direct communication for commercial clients."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-brand-lightBg rounded-xl p-6 sm:p-7 border border-brand-border/80 hover:border-brand-red/30 transition-all duration-200 flex flex-col"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-white border border-brand-border flex items-center justify-center text-brand-red mb-5 shadow-subtle">
                  <Icon className="w-6 h-6 stroke-[1.8]" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-brand-charcoal mb-2">
                  {benefit.title}
                </h3>

                {/* Primary Description from prompt */}
                <p className="text-sm font-semibold text-brand-charcoal/90 leading-snug mb-3">
                  "{benefit.description}"
                </p>

                {/* Practical Detail */}
                <p className="text-xs text-brand-muted leading-relaxed mt-auto">
                  {benefit.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
