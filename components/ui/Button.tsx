import React from 'react';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost' | 'outline' | 'link';
  size?: 'sm' | 'md' | 'lg' | 'full';
  loading?: boolean;
  icon?: React.ReactNode;
  iconRight?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      loading = false,
      disabled,
      icon,
      iconRight,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink/40 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer';

    const variants = {
      primary:
        'bg-pink text-white hover:bg-pink-deep hover:shadow-lg border border-transparent active:scale-[0.98]',
      ghost:
        'bg-transparent text-charcoal border-[1.5px] border-charcoal/30 hover:border-pink hover:text-pink hover:bg-pink-petal/50 active:scale-[0.98]',
      outline:
        'bg-transparent text-pink border-[1.5px] border-pink hover:bg-pink hover:text-white active:scale-[0.98]',
      link: 'bg-transparent text-pink hover:underline underline-offset-4 border border-transparent p-0 h-auto',
    };

    const sizes = {
      sm: 'h-9 px-4 text-[12px] tracking-wide uppercase rounded-lg',
      md: 'h-[46px] px-6 text-[13px] tracking-wide uppercase rounded-lg',
      lg: 'h-[52px] px-8 text-[13px] tracking-[0.06em] uppercase rounded-xl font-semibold',
      full: 'h-[52px] px-6 text-[13px] tracking-wide uppercase rounded-xl w-full font-semibold',
    };

    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(
          baseStyles,
          variants[variant],
          variant !== 'link' && sizes[size],
          className
        )}
        {...props}
      >
        {loading ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : icon ? (
          <span className="mr-2">{icon}</span>
        ) : null}

        <span className={cn(loading && 'opacity-0 absolute')}>{children}</span>
        {loading && <span className="opacity-0">{children}</span> /* Keeps width stable */}

        {!loading && iconRight && (
          <span className="ml-2">{iconRight}</span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
