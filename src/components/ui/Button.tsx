import React from 'react';
import { Link } from 'react-router-dom';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'dark' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  href?: string;
  target?: string;
  rel?: string;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  target,
  rel,
  isLoading = false,
  leftIcon,
  rightIcon,
  className = '',
  disabled,
  ...rest
}) => {
  const baseClasses =
    'inline-flex items-center justify-center font-semibold rounded-md transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed select-none cursor-pointer';

  const sizeClasses = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5',
  }[size];

  const variantClasses = {
    primary:
      'bg-brand-red text-white hover:bg-brand-darkRed shadow-subtle hover:shadow-brand focus-visible:ring-brand-red border border-transparent',
    secondary:
      'bg-white text-brand-charcoal hover:bg-neutral-50 border border-brand-border shadow-subtle hover:border-brand-muted/40 focus-visible:ring-brand-charcoal',
    outline:
      'bg-transparent text-brand-charcoal border border-brand-charcoal/30 hover:border-brand-red hover:text-brand-red hover:bg-brand-redWash focus-visible:ring-brand-red',
    dark:
      'bg-brand-charcoal text-white hover:bg-black shadow-subtle focus-visible:ring-brand-charcoal border border-transparent',
    ghost:
      'bg-transparent text-brand-charcoal hover:text-brand-red hover:bg-neutral-100 focus-visible:ring-brand-red',
  }[variant];

  const content = (
    <>
      {isLoading && (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {!isLoading && leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
      <span>{children}</span>
      {!isLoading && rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
    </>
  );

  const combinedClasses = `${baseClasses} ${sizeClasses} ${variantClasses} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === '_blank' ? (rel || 'noopener noreferrer') : rel}
        className={combinedClasses}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={combinedClasses}
      disabled={disabled || isLoading}
      {...rest}
    >
      {content}
    </button>
  );
};
