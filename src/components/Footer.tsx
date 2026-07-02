import {
  GitHubLogoIcon,
  TwitterLogoIcon,
  LinkedInLogoIcon,
  DiscordLogoIcon,
  PaperPlaneIcon,
  EnvelopeClosedIcon,
} from "@radix-ui/react-icons";

const links = [
  {
    label: "Email",
    href: "mailto:skushagra.sharma@gmail.com",
    icon: EnvelopeClosedIcon,
    ariaLabel: "Email",
  },
  {
    label: "Twitter",
    href: "https://twitter.com/skushagra9",
    icon: TwitterLogoIcon,
    ariaLabel: "Twitter",
  },
  {
    label: "GitHub",
    href: "https://github.com/skushagra9",
    icon: GitHubLogoIcon,
    ariaLabel: "GitHub",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/skushagra9/",
    icon: LinkedInLogoIcon,
    ariaLabel: "LinkedIn",
  },
  {
    label: "Discord",
    href: "https://discordapp.com/channels/@me/kushagra_16/",
    icon: DiscordLogoIcon,
    ariaLabel: "Discord",
  },
  {
    label: "Telegram",
    href: "https://t.me/skushagra9",
    icon: PaperPlaneIcon,
    ariaLabel: "Telegram",
  },
];

export const Footer = () => {
  return (
    <footer className="border-t border-border mt-8">
      <div className="max-w-screen-lg mx-auto px-6 md:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Kushagra Sharma
        </span>
        <div className="flex items-center gap-3">
          {links.map((link) => {
            const IconComponent = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="h-8 w-8 inline-flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors rounded-md"
                aria-label={link.ariaLabel}
                title={link.ariaLabel}
              >
                <IconComponent className="h-4 w-4" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};
