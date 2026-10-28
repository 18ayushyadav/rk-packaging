import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { howItWorksSteps } from '@/config/productsData';

export const ProcessSteps: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-white border-y border-brand-border/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Enquiry Process"
          title="How It"
          highlight="Works"
          description="A clear, collaborative four-step process to transition from your packaging specifications to completed production."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
          {howItWorksSteps.map((step, idx) => (
            <div
              key={step.stepNumber}
              className="bg-brand-lightBg rounded-xl p-6 border border-brand-border/80 flex flex-col justify-between relative group hover:border-brand-red/30 transition-colors"
            >
              <div>
                {/* Step badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-brand-red font-mono">
                    {step.stepNumber}
                  </span>
                  <span className="text-[11px] font-bold text-brand-muted uppercase tracking-wider">
                    Step {idx + 1}
                  </span>
                </div>

                {/* Step Title */}
                <h3 className="text-base font-bold text-brand-charcoal mb-2">
                  {step.title}
                </h3>

                {/* Main copy from prompt */}
                <p className="text-sm font-semibold text-brand-charcoal/90 mb-3">
                  "{step.description}"
                </p>

                {/* Operational Detail */}
                <p className="text-xs text-brand-muted leading-relaxed">
                  {step.detail}
                </p>
              </div>

              {/* Status Note */}
              <div className="mt-5 pt-3 border-t border-brand-border/60 text-[10px] text-brand-muted/80">
                Direct consultation via team
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
