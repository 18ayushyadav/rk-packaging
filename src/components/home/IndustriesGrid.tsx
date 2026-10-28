import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { industriesServedData } from '@/config/productsData';
import {
  Cpu,
  Sparkles,
  ShoppingBag,
  Package,
  Factory,
  Layers,
  Info,
  ArrowRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const iconMap: Record<string, React.ElementType> = {
  Cpu,
  Sparkles,
  ShoppingBag,
  Package,
  Factory,
  Layers,
};

export const IndustriesGrid: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-brand-lightBg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Market Segments"
          title="Industries We"
          highlight="Serve"
          description="We manufacture packaging for businesses across various sectors, tailoring board weight and finishes to each commercial application."
        />

        {/* Informative disclaimer pill */}
        <div className="max-w-3xl mx-auto mb-10 bg-white border border-brand-border rounded-lg p-3.5 flex items-start gap-3 shadow-subtle text-xs text-brand-muted">
          <Info className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
          <p>
            <strong className="text-brand-charcoal">Specification Note:</strong> Actual packaging suitability depends on your specific product dimensions, shipping hazards, total weight, and required storage conditions. Our team helps you determine the right specifications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industriesServedData.map((item) => {
            const Icon = iconMap[item.iconName] || Package;
            return (
              <div
                key={item.id}
                className="bg-white rounded-xl p-6 sm:p-7 border border-brand-border hover:border-brand-red/30 shadow-card hover:shadow-elevated transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-lg bg-brand-redWash border border-brand-red/20 text-brand-darkRed flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 stroke-[1.8]" />
                  </div>

                  <h3 className="text-lg font-bold text-brand-charcoal mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-brand-muted leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-brand-border/60">
                    <span className="text-[11px] font-bold text-brand-charcoal uppercase tracking-wider block">
                      Common Packaging Options:
                    </span>
                    <ul className="text-xs text-brand-muted space-y-1">
                      {item.commonPackaging.map((pkg, idx) => (
                        <li key={idx} className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-red"></span>
                          <span>{pkg}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-brand-border/40">
                  <Link
                    to={`/quote?category=${item.id}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-brand-red hover:text-brand-darkRed transition-colors"
                  >
                    <span>Request industry quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
