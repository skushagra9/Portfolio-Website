
"use client";
import { Button } from "@/components/ui/button";
import { SunIcon, MoonIcon, GitHubLogoIcon, TwitterLogoIcon, LinkedInLogoIcon, DiscordLogoIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

export function Navbar() {
  const { setTheme, theme } = useTheme();


  return (
    <div className="flex flex-row mx-auto w-full md:w-1/2 justify-between items-center px-2 pt-2 md:px-4 md:pt-4">
      <div className="flex flex-row justify-center md:justify-start">
        <a href="/">
          <Button variant="link">
            Works
          </Button>
        </a>

        <Button variant="link">Contact</Button>
        <Button variant="link">Me</Button>
        <Button variant="link">CV</Button>
      </div>
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
        <Button onClick={() => window.open("https://github.com/skushagra9")} variant="link"><GitHubLogoIcon /></Button>
      </div>
    </div>
  );
}
