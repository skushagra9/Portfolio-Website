"use client";

import { cn } from "@/lib/utils";

/* ─── Types ─────────────────────────────────────────────────────────────── */

export type LoaderSize = "sm" | "md" | "lg" | "xl";
export type LoaderVariant = "spinner" | "dots" | "pulse" | "bars" | "ring";

interface LoaderProps {
  /** Visual style of the loading indicator */
  variant?: LoaderVariant;
  /** Size of the indicator */
  size?: LoaderSize;
  /** Optional label shown below the indicator */
  label?: string;
  /** Additional CSS classes */
  className?: string;
}

interface PageLoaderProps {
  /** Text shown below the spinner */
  label?: string;
  /** Whether the overlay is visible */
  visible?: boolean;
}

/* ─── Size Maps ──────────────────────────────────────────────────────────── */

const spinnerSizeMap: Record<LoaderSize, string> = {
  sm: "w-4 h-4",
  md: "w-8 h-8",
  lg: "w-12 h-12",
  xl: "w-16 h-16",
};

const dotSizeMap: Record<LoaderSize, string> = {
  sm: "w-1.5 h-1.5",
  md: "w-2.5 h-2.5",
  lg: "w-3.5 h-3.5",
  xl: "w-5 h-5",
};

const barSizeMap: Record<LoaderSize, { width: string; height: string }> = {
  sm: { width: "w-1", height: "h-4" },
  md: { width: "w-1.5", height: "h-6" },
  lg: { width: "w-2", height: "h-8" },
  xl: { width: "w-2.5", height: "h-12" },
};

const labelSizeMap: Record<LoaderSize, string> = {
  sm: "text-xs",
  md: "text-sm",
  lg: "text-base",
  xl: "text-lg",
};

/* ─── Spinner Variant ─────────────────────────────────────────────────────── */

function SpinnerLoader({ size = "md", className }: { size?: LoaderSize; className?: string }) {
  return (
    <svg
      className={cn("animate-spin text-primary", spinnerSizeMap[size], className)}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle
        className="opacity-20"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="3"
      />
      <path
        className="opacity-80"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
}

/* ─── Dots Variant ─────────────────────────────────────────────────────────── */

function DotsLoader({ size = "md", className }: { size?: LoaderSize; className?: string }) {
  return (
    <div className={cn("flex items-center gap-1.5", className)} aria-hidden="true">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={cn(
            "rounded-full bg-primary",
            dotSizeMap[size]
          )}
          style={{
            animation: "loader-bounce 1.2s ease-in-out infinite",
            animationDelay: `${i * 0.2}s`,
          }}
        />
      ))}
    </div>
  );
}

/* ─── Pulse Variant ─────────────────────────────────────────────────────────── */

function PulseLoader({ size = "md", className }: { size?: LoaderSize; className?: string }) {
  return (
    <div className={cn("relative flex items-center justify-center", spinnerSizeMap[size], className)} aria-hidden="true">
      <div className="absolute inset-0 rounded-full bg-primary/30 animate-ping" />
      <div className="relative rounded-full bg-primary" style={{ width: "40%", height: "40%" }} />
    </div>
  );
}

/* ─── Bars Variant ─────────────────────────────────────────────────────────── */

function BarsLoader({ size = "md", className }: { size?: LoaderSize; className?: string }) {
  const { width, height } = barSizeMap[size];
  return (
    <div className={cn("flex items-end gap-1", className)} aria-hidden="true">
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          className={cn("rounded-sm bg-primary", width, height)}
          style={{
            animation: "loader-bars 1s ease-in-out infinite",
            animationDelay: `${i * 0.15}s`,
          }}
        />
      ))}
    </div>
  );
}

/* ─── Ring Variant ─────────────────────────────────────────────────────────── */

function RingLoader({ size = "md", className }: { size?: LoaderSize; className?: string }) {
  return (
    <div
      className={cn(
        "rounded-full border-[3px] border-primary/20 border-t-primary",
        spinnerSizeMap[size],
        className
      )}
      style={{ animation: "spin 0.8s linear infinite" }}
      aria-hidden="true"
    />
  );
}

/* ─── Main Loader Component ────────────────────────────────────────────────── */

/**
 * Flexible loading indicator with five visual variants.
 *
 * Variants:
 * - `spinner` — classic SVG arc spinner
 * - `dots`    — three bouncing dots
 * - `pulse`   — pinging circle
 * - `bars`    — four animated bars
 * - `ring`    — simple border-spin ring
 *
 * Sizes: sm | md (default) | lg | xl
 */
export function Loader({
  variant = "spinner",
  size = "md",
  label,
  className,
}: LoaderProps) {
  const variantMap: Record<LoaderVariant, React.ReactNode> = {
    spinner: <SpinnerLoader size={size} />,
    dots:    <DotsLoader size={size} />,
    pulse:   <PulseLoader size={size} />,
    bars:    <BarsLoader size={size} />,
    ring:    <RingLoader size={size} />,
  };

  return (
    <div
      role="status"
      aria-label={label ?? "Loading"}
      className={cn("inline-flex flex-col items-center justify-center gap-3", className)}
    >
      {variantMap[variant]}
      {label && (
        <p className={cn("text-muted-foreground font-medium", labelSizeMap[size])}>
          {label}
        </p>
      )}
    </div>
  );
}

/* ─── Page-Level Overlay Loader ──────────────────────────────────────────── */

/**
 * Full-screen overlay loader with a centred spinner and optional label.
 * Ideal for route-change or initial-load splash screens.
 */
export function PageLoader({ label = "Loading…", visible = true }: PageLoaderProps) {
  if (!visible) return null;

  return (
    <div
      role="status"
      aria-label={label}
      className={cn(
        "fixed inset-0 z-50 flex flex-col items-center justify-center gap-4",
        "bg-background/90 backdrop-blur-sm",
        "transition-opacity duration-500"
      )}
    >
      {/* Gradient glow behind spinner */}
      <div className="relative">
        <div className="absolute -inset-6 rounded-full bg-primary/10 blur-xl" />
        <SpinnerLoader size="xl" className="relative" />
      </div>
      <p className="text-muted-foreground text-sm font-medium tracking-wide">{label}</p>
    </div>
  );
}
