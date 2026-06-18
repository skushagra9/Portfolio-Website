import { cn } from "@/lib/utils";

interface SpinnerProps {
  /** Size variant: 'sm' (16px), 'md' (24px, default), 'lg' (40px) */
  size?: "sm" | "md" | "lg";
  /** Optional CSS classes for additional styling */
  className?: string;
  /** Accessible label for screen readers (defaults to 'Loading') */
  "aria-label"?: string;
}

// Tailwind classes for each size variant: height, width, and border thickness
const sizeMap = {
  sm: "h-4 w-4 border-2",
  md: "h-6 w-6 border-2",
  lg: "h-10 w-10 border-4",
} as const;

/**
 * Spinner component for loading states.
 * Renders a rotating circular spinner with a colored top border.
 * Accessible via role="status" and aria-label.
 */
export function Spinner({
  size = "md",
  className,
  "aria-label": ariaLabel = "Loading",
}: SpinnerProps) {
  return (
    <div
      role="status"
      aria-label={ariaLabel}
      className={cn(
        // Circular border: light gray with top accent color for rotation effect
        "rounded-full border-muted border-t-primary animate-spin",
        sizeMap[size],
        className,
      )}
    />
  );
}
