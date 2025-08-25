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
    <div className="flex flex-row mx-auto w-full md:w-1/2 justify-between items-center pt-2 md:pt-4">
      <div className="hidden md:flex flex-row justify-center md:justify-start">
        <a href="#experience">
          <Button variant="link">Experience</Button>
        </a>

        <a href="#projects">
          <Button variant="link">Works</Button>
        </a>

        <a href="#contact">
          <Button variant="link">Contact</Button>
        </a>
        <Button
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1CebeidNGD_8eMcPohDhvgdDAnWW7m8rA/view?usp=sharing"
            )
          }
          variant="link"
        >
          CV
        </Button>
      </div>
      <DropdownMenuDemo />
      <div className="flex flex-row items-center md:justify-end">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => {
            {
              theme == "light" ? setTheme("dark") : setTheme("light");
            }
          }}
        >
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
        <Button
          onClick={() => window.open("https://github.com/skushagra9")}
          variant="ghost"
          size="icon"
        >
          <GitHubLogoIcon />
        </Button>
        <Button
          onClick={() => window.open("https://twitter.com/skushagra9")}
          variant="ghost"
          size="icon"
        >
          <TwitterLogoIcon />
        </Button>
        <Button
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/skushagra9/"
            )
          }
          variant="ghost"
          size="icon"
        >
          <LinkedInLogoIcon />
        </Button>
        <Button
          onClick={() =>
            window.open("https://discordapp.com/channels/@me/kushagra_16/")
          }
          variant="ghost"
          size="icon"
        >
          <DiscordLogoIcon />
        </Button>
        <Button
          onClick={() =>
            window.open("https://t.me/skushagra9")
          }
          variant="ghost"
          size="icon"
        >
          <PaperPlaneIcon />
        </Button>
      </div>
    </div>
  );
}
