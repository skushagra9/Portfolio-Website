import {
  CircleIcon,
  GitHubLogoIcon,
  StarIcon,
} from "@radix-ui/react-icons"

interface DemoGithubProps {
  name: string;
  description: string;
  stars: number;
  language: string;
  link: string;
}

export function DemoGithub({ name, description, stars, language, link }: DemoGithubProps) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="group block h-full">
      <div className="h-full rounded-xl border border-border bg-card p-5 transition-all duration-200 hover:border-primary/30 hover:shadow-md hover:shadow-primary/5">
        <div className="flex flex-col justify-between h-full gap-4">
          <div className="space-y-2">
            <h3 className="font-[family-name:var(--font-display)] font-semibold text-card-foreground group-hover:text-primary transition-colors">
              {name}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
              {description}
            </p>
          </div>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1">
              <CircleIcon className="h-2.5 w-2.5 fill-primary text-primary" />
              {language}
            </span>
            <span className="inline-flex items-center gap-1">
              <StarIcon className="h-3 w-3" />
              {stars}
            </span>
            <span className="inline-flex items-center gap-1">
              <GitHubLogoIcon className="h-3 w-3" />
              GitHub
            </span>
          </div>
        </div>
      </div>
    </a>
  )
}
