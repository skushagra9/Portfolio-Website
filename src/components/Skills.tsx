import { FadeIn } from "./FadeIn";

const skillCategories = [
  {
    label: "Languages",
    skills: ["Rust", "Cairo", "JavaScript", "TypeScript", "Java", "Solidity", "Python"],
  },
  {
    label: "Frontend",
    skills: ["Next.js 14", "React", "Vue.js", "Tailwind CSS"],
  },
  {
    label: "Backend",
    skills: ["Node.js", "tRPC", "GraphQL"],
  },
  {
    label: "DevOps",
    skills: ["Git", "Terraform", "Docker", "Kubernetes", "AWS"],
  },
  {
    label: "Database",
    skills: ["MySQL", "Prisma", "PostgreSQL"],
  },
  {
    label: "AI",
    skills: ["LangChain", "OpenAI"],
  },
];

export const Skills = () => {
  return (
    <FadeIn className="w-full max-w-2xl">
      <div className="space-y-6">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight">
          Skills
        </h2>
        <div className="space-y-4">
          {skillCategories.map((category) => (
            <div key={category.label} className="space-y-2">
              <span className="text-sm font-semibold text-foreground uppercase tracking-wider">
                {category.label}
              </span>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-md border border-border bg-secondary/50 px-3 py-1 text-sm font-medium transition-colors hover:bg-secondary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </FadeIn>
  );
};
