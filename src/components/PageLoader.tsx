"use client";

import { useEffect, useState } from "react";

// Timing constants for loader lifecycle
// Fade starts after initial display period, then component unmounts after transition completes
const FADE_START_DELAY_MS = 1200;
const FADE_DURATION_MS = 500;
const TOTAL_DISPLAY_TIME_MS = FADE_START_DELAY_MS + FADE_DURATION_MS;

/**
 * Full-screen page loader that displays user initials during initial app load.
 * Auto-fades out after 1.2s and unmounts after the fade transition completes.
 * Uses the site's theme colors and display font for brand consistency.
 */
export function PageLoader() {
  const [isVisible, setIsVisible] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Start fade-out transition after initial display period
    const fadeTimer = setTimeout(() => {
      setIsVisible(false);
    }, FADE_START_DELAY_MS);

    // Remove from DOM after fade transition completes to prevent blocking interactions
    const unmountTimer = setTimeout(() => {
      setShouldRender(false);
    }, TOTAL_DISPLAY_TIME_MS);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(unmountTimer);
    };
  }, []);

  // Once unmounted, never re-render (prevents loader reappearing on navigation)
  if (!shouldRender) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] bg-background flex items-center justify-center transition-opacity duration-500"
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      <div className="relative">
        <div className="text-6xl font-bold font-[family-name:var(--font-display)] text-primary animate-pulse">
          JS
        </div>
        {/* Glow effect layer behind the text */}
        <div className="absolute inset-0 blur-2xl bg-primary/20 animate-pulse" />
      </div>
    </div>
  );
}
