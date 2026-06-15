import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const spinnerVariants = cva(
  "inline-block rounded-full border-4 border-transparent animate-spin",
  {
    variants: {
      size: {
        sm: "w-4 h-4",
        md: "w-6 h-6",
        lg: "w-10 h-10",
        xl: "w-16 h-16",
      },
      variant: {
        default: "border-t-primary",
        muted: "border-t-muted-foreground",
        white: "border-t-white",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "default",
    },
  }
)

export interface SpinnerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof spinnerVariants> {}

const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  ({ className, size, variant, ...props }, ref) => (
    <div
      ref={ref}
      role="status"
      className={cn(spinnerVariants({ size, variant, className }))}
      {...props}
    >
      <span className="sr-only">Loading...</span>
    </div>
  )
)
Spinner.displayName = "Spinner"

export { Spinner, spinnerVariants }
