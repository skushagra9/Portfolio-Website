import {
  CircleIcon,
  GitHubLogoIcon,
  StarIcon,
} from "@radix-ui/react-icons"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface DemoGithubProps {
  name: string;
  description: string;
  stars: number;
  language: string;
  link: string;
}

export function DemoGithub({ name, description, stars, language, link }: DemoGithubProps) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="group">
      <Card className="transition transform hover:scale-105 hover:shadow-lg cursor-pointer">
        <CardHeader className="grid items-start gap-4 space-y-0 h-[200px]">
          <div className="space-y-1">
            <CardTitle>{name}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4 text-sm w-full text-muted-foreground">
            <div className="flex items-center">
              <CircleIcon className="mr-1 h-3 w-3 fill-sky-400 text-sky-400 group-hover:scale-110 transition-transform" />
              {language}
            </div>
            <div className="flex items-center">
              <StarIcon className="mr-1 h-3 w-3 group-hover:scale-110 transition-transform" />
              {stars}
            </div>
            <div className="flex items-center">
              <GitHubLogoIcon className="mr-1 h-3 w-3 group-hover:scale-110 transition-transform" />
              Github
            </div>
          </div>
        </CardContent>
      </Card>
    </a>
  )
}
