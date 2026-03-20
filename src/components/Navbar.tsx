"use client";
import { Button } from "@/components/ui/button";
import {
  SunIcon,
  MoonIcon,
  GitHubLogoIcon,
  TwitterLogoIcon,
  LinkedInLogoIcon,
  DiscordLogoIcon,
  PaperPlaneIcon
} from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { DropdownMenuDemo } from "./dropDownMenu";

export function Navbar() {
  const { setTheme, theme } = useTheme();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="flex flex-row mx-auto w-full max-w-screen-lg justify-between items-center px-6 md:px-8 h-14">
        <div className="hidden md:flex flex-row items-center gap-1">
          <a href="#experience">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">Experience</Button>
          </a>
          <a href="#projects">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">Works</Button>
          </a>
          <a href="#contact">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">Contact</Button>
          </a>
          <Button
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1Uu2leAsiUom_H8YBuzq-lT6Wz1sZf1tf/view?usp=sharing"
              )
            }
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-foreground"
          >
            CV
          </Button>
        </div>
        <DropdownMenuDemo />
        <div className="flex flex-row items-center gap-0.5">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-muted-foreground hover:text-foreground"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            <SunIcon className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
          <Button onClick={() => window.open("https://github.com/skushagra9")} variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
            <GitHubLogoIcon className="h-4 w-4" />
          </Button>
          <Button onClick={() => window.open("https://twitter.com/skushagra9")} variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
            <TwitterLogoIcon className="h-4 w-4" />
          </Button>
          <Button onClick={() => window.open("https://www.linkedin.com/in/skushagra9/")} variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
            <LinkedInLogoIcon className="h-4 w-4" />
          </Button>
          <Button onClick={() => window.open("https://discordapp.com/channels/@me/kushagra_16/")} variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
            <DiscordLogoIcon className="h-4 w-4" />
          </Button>
          <Button onClick={() => window.open("https://t.me/skushagra9")} variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
            <PaperPlaneIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </nav>
  );
}
