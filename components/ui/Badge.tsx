import React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'pink' | 'green' | 'gray' | 'dark';
  size?: 'sm' | 'md';
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'pink', size = 'md', children, ...props }, ref) => {
    const variants = {
      pink: 'bg-pink-petal text-[#C0306A] border border-pink',
      green: 'bg-green-leaf text-[#2E6B11] border border-green',
      gray: 'bg-[#F5F5F5] text-[#666666] border border-[#E0E0E0]',
      dark: 'bg-[#1A1A1A] text-white border border-transparent',
    };

    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-sm font-body font-medium uppercase tracking-[0.06em] text-[11px]',
          size === 'sm' ? 'px-1.5 py-0.5 text-[10px]' : 'px-2 py-1',
          variants[variant],
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';
