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
          full-stack development, excelling in both frontend and backend
          architecture. My expertise extends to DevOps and scalable system
          design, delivering robust and high-performance solutions across the
          stack.
        </p>
      </div>
    </FadeIn>
  );
};
