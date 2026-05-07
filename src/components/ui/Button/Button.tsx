import { forwardRef } from 'react'
import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/utils/cn'
import Spinner from './Spinner'

// ─── Types ───────────────────────────────────────────────────────────────────

export type ButtonVariant = 'primary' | 'secondary' | 'ghost'
export type ButtonSize    = 'xs' | 'sm' | 'md' | 'lg'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:    ButtonVariant
  size?:       ButtonSize
  loading?:    boolean
  leftIcon?:   ReactNode
  rightIcon?:  ReactNode
  children?:   ReactNode
}

// ─── Style Maps ──────────────────────────────────────────────────────────────

const baseStyles = [
  'relative inline-flex items-center justify-center gap-1.5 w-full md:w-auto',
  'font-semibold transition-all duration-150 select-none',
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
  'disabled:pointer-events-none',
].join(' ')

const variantStyles: Record<ButtonVariant, string> = {
  primary: cn(
    'bg-[radial-gradient(ellipse_50%_100%_at_50%_0%,#FF824D_0%,#FE4C00_100%)]',
    'text-white rounded-full font-heading uppercase',
    'outline outline-1 outline-offset-[-1px] outline-white/30',
    'hover:brightness-110',
    'active:brightness-90',
    'disabled:bg-neutral-700 disabled:text-neutral-500 disabled:outline-none',
    'focus-visible:ring-primary-500',
  ),
  secondary: cn(
    'bg-transparent text-primary-500 rounded-full',
    'border-[1.5px] border-primary-500',
    'hover:border-primary-400 hover:text-primary-400',
    'active:border-primary-600 active:text-primary-600',
    'disabled:border-neutral-700 disabled:text-neutral-600',
    'focus-visible:ring-primary-500',
  ),
  ghost: cn(
    'bg-transparent text-neutral-100 rounded-full',
    'hover:text-primary-400',
    'active:text-primary-600',
    'disabled:text-neutral-600',
    'focus-visible:ring-primary-500',
  ),
}

const sizeStyles: Record<ButtonSize, string> = {
  xs: 'h-6  px-6   text-[10px] leading-[12px] [&_svg]:size-3',
  sm: 'h-8 px-8   text-[12px] leading-[16px] [&_svg]:size-3.5',
  md: 'h-10 px-10  text-[13px] leading-[20px] [&_svg]:size-4',
  lg: 'h-16 px-10  text-lg    leading-7      [&_svg]:size-5',
}

// ─── Component ───────────────────────────────────────────────────────────────

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant  = 'primary',
      size     = 'md',
      loading  = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      className,
      ...props
    },
    ref,
  ) => {
    const isDisabled = disabled || loading

    return (
      <button
        ref={ref}
        disabled={isDisabled}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        {...props}
      >
        {loading ? (
          <Spinner size={size} variant={variant} />
        ) : (
          <>
            {leftIcon && <span className="shrink-0">{leftIcon}</span>}
            {children && <span>{children}</span>}
            {rightIcon && <span className="shrink-0">{rightIcon}</span>}
          </>
        )}
      </button>
    )
  },
)

Button.displayName = 'Button'

export default Button
