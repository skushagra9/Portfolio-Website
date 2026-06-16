import { FadeIn } from "./FadeIn";

// Highlight component for emphasizing key skills and expertise areas
const Highlight = ({ children }: { children: React.ReactNode }) => (
  <strong className="font-semibold text-foreground">{children}</strong>
);

export const Introduction = () => {
  return (
    <FadeIn className="w-full max-w-2xl">
      <div className="space-y-4">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight">
          About Me
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          I&apos;m a versatile problem solver with a tech-stack-independent approach,
          adept at seamlessly switching between technologies. I thrive in
          <Highlight> full-stack development</Highlight>, excelling in both <Highlight>frontend and backend
          architecture</Highlight>. My expertise extends to <Highlight>DevOps</Highlight> and <Highlight>scalable system
          design</Highlight>, delivering robust and high-performance solutions across the
          stack.
        </p>
      </div>
    </FadeIn>
  );
};
