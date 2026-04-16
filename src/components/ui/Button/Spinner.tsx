import { cn } from '@/utils/cn'
import type { ButtonSize, ButtonVariant } from './Button'

interface SpinnerProps {
  size:    ButtonSize
  variant: ButtonVariant
}

const sizeMap: Record<ButtonSize, string> = {
  xs: 'size-3',
  sm: 'size-3.5',
  md: 'size-4',
  lg: 'size-4',
}

const colorMap: Record<ButtonVariant, string> = {
  primary:   'text-white',
  secondary: 'text-primary-500',
  ghost:     'text-neutral-100',
}

export default function Spinner({ size, variant }: SpinnerProps) {
  return (
    <svg
      className={cn('animate-spin', sizeMap[size], colorMap[variant])}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle
        className="opacity-25"
        cx="12" cy="12" r="10"
        stroke="currentColor"
        strokeWidth="3"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
      />
    </svg>
  )
}
