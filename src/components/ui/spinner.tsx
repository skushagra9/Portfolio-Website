import { cn } from '@/lib/utils';

interface SpinnerProps {
  /** Optional additional CSS classes to merge with spinner styles */
  className?: string;
  /** Size variant: sm (w-4 h-4), md (w-5 h-5), lg (w-6 h-6) */
  size?: 'sm' | 'md' | 'lg';
}

/** Tailwind size classes for each spinner variant */
const sizeMap = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
} as const;

/**
 * Animated loading spinner with customizable size.
 * Renders an SVG circle that rotates via Tailwind's `animate-spin`.
 * Used in buttons and async operations to indicate pending requests.
 */
export function Spinner({ className, size = 'md' }: SpinnerProps) {
  return (
    <svg
      className={cn('animate-spin text-pink-500', sizeMap[size], className)}
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
  );
}
