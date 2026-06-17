import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const spinnerVariants = cva(
  "inline-block animate-spin-slow",
  {
    variants: {
      size: {
        sm: "w-4 h-4",
        default: "w-6 h-6",
        lg: "w-8 h-8",
        xl: "w-12 h-12",
      },
      color: {
        default: "text-blue-500",
        muted: "text-muted-foreground",
        white: "text-white",
        destructive: "text-destructive",
      },
    },
    defaultVariants: {
      size: "default",
      color: "default",
    },
  }
)

export interface SpinnerProps
  extends Omit<React.SVGAttributes<SVGSVGElement>, 'color'>,
  VariantProps<typeof spinnerVariants> {
  ariaLabel?: string
}

const Spinner = React.forwardRef<SVGSVGElement, SpinnerProps>(
  ({ className, size, color = "default", ariaLabel = "Loading", ...props }, ref) => {
    const sizeMap = {
      sm: 16,
      default: 24,
      lg: 32,
      xl: 48,
    }

    const dimension = sizeMap[size || "default"]

    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${dimension} ${dimension}`}
        fill="none"
        className={cn(spinnerVariants({ size, color, className }))}
        role="status"
        aria-label={ariaLabel}
        {...props}
      >
        {/* Track circle (faded background) */}
        <circle
          cx={dimension / 2}
          cy={dimension / 2}
          r={dimension / 2 - 2}
          stroke="currentColor"
          strokeWidth="2"
          opacity="0.2"
        />
        {/* Animated arc */}
        <circle
          cx={dimension / 2}
          cy={dimension / 2}
          r={dimension / 2 - 2}
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray={`${(dimension / 2 - 2) * Math.PI} ${(dimension / 2 - 2) * Math.PI * 2}`}
          strokeLinecap="round"
        />
      </svg>
    )
  }
)
Spinner.displayName = "Spinner"

export { Spinner, spinnerVariants }
