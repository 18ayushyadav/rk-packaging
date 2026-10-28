import React from 'react';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  highlight,
  description,
  align = 'center',
  className = '',
}) => {
  const isCenter = align === 'center';

  return (
    <div
      className={`max-w-3xl mb-12 ${
        isCenter ? 'mx-auto text-center' : 'text-left'
      } ${className}`}
    >
      {badge && (
        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-3 bg-brand-red/10 text-brand-darkRed border border-brand-red/20`}>
          <span className="w-1.5 h-1.5 rounded-full bg-brand-red"></span>
          <span>{badge}</span>
        </div>
      )}

      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-charcoal tracking-tight leading-tight">
        {title}{' '}
        {highlight && (
          <span className="text-brand-red relative inline-block">
            {highlight}
          </span>
        )}
      </h2>

      {description && (
        <p className="mt-3.5 text-base sm:text-lg text-brand-muted leading-relaxed font-normal">
          {description}
        </p>
      )}
    </div>
  );
};
