/**
 * Footer component that displays copyright information and branding.
 * Positioned at the bottom of the page with a top border separator.
 *
 * The copyright year is hardcoded to 2026 as a placeholder.
 * Consider making this dynamic in the future if the site stays live beyond 2026.
 */
export const Footer = () => {
  return (
    <footer className="border-t border-border mt-8">
      <div className="max-w-screen-lg mx-auto px-6 md:px-8 py-8 text-center">
        <span className="text-sm text-muted-foreground">
          &copy; 2026 Kushagra Sharma
        </span>
      </div>
    </footer>
  );
};
