import { FadeIn } from "./FadeIn";

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
          <strong className="font-semibold text-foreground"> full-stack development</strong>, excelling in both <strong className="font-semibold text-foreground">frontend and backend
          architecture</strong>. My expertise extends to <strong className="font-semibold text-foreground">DevOps</strong> and <strong className="font-semibold text-foreground">scalable system
          design</strong>, delivering robust and high-performance solutions across the
          stack.
        </p>
      </div>
    </FadeIn>
  );
};
