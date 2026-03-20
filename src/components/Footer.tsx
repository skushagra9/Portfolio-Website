const links = [
  { label: "Email", href: "mailto:skushagra.sharma@gmail.com" },
  { label: "Twitter", href: "https://twitter.com/skushagra9" },
  { label: "GitHub", href: "https://github.com/skushagra9" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/skushagra9/" },
  { label: "Discord", href: "https://discordapp.com/channels/@me/kushagra_16/" },
  { label: "Telegram", href: "https://t.me/skushagra9" },
];

export const Footer = () => {
  return (
    <footer className="border-t border-border mt-8">
      <div className="max-w-screen-lg mx-auto px-6 md:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Kushagra Sharma
        </span>
        <div className="flex items-center gap-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
