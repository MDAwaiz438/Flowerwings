import React from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  hint?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, hint, disabled, id, ...props }, ref) => {
    const generatedId = React.useId();
    const inputId = id || generatedId;

    return (
      <div className="flex flex-col w-full">
        <label
          htmlFor={inputId}
          className="mb-1 text-[12px] font-medium text-slate font-body"
        >
          {label}
          {props.required && <span className="text-pink ml-1">*</span>}
        </label>
        <input
          id={inputId}
          ref={ref}
          disabled={disabled}
          className={cn(
            'h-[48px] w-full rounded-md border bg-white px-3 py-2 text-[16px] text-ink placeholder:text-mist focus:outline-none transition-shadow',
            error
              ? 'border-[#E53E3E] focus:border-[#E53E3E] focus:ring-2 focus:ring-[#E53E3E]/20'
              : 'border-line focus:border-pink focus:ring-[3px] focus:ring-pink/12',
            disabled && 'cursor-not-allowed opacity-50 bg-gray-50',
            className
          )}
          {...props}
        />
        {error && (
          <p className="mt-1 text-[12px] text-[#E53E3E]">{error}</p>
        )}
        {hint && !error && (
          <p className="mt-1 text-[12px] text-mist">{hint}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
