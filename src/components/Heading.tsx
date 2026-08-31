export default function Header() {
  return (
    <section className="relative w-full flex flex-col items-center justify-center pt-32 pb-20 px-6 md:px-8 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="max-w-screen-lg mx-auto text-center space-y-6 animate-fade-up">
        <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
          Software Engineer
        </p>
        <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl font-extrabold tracking-tight">
          Kushagra Sharma
        </h1>
        <p className="max-w-lg mx-auto text-lg text-muted-foreground leading-relaxed">
          Building scalable systems, DeFi infrastructure, and AI-powered tools
          — from blockchain indexers to full-stack products.
        </p>
        <div className="flex items-center justify-center gap-4 pt-4">
          <a
            href="#projects"
            className="inline-flex h-10 items-center rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
          >
            Get started now
          </a>
          <a
            href="#contact"
            className="inline-flex h-10 items-center rounded-lg border border-border px-6 text-sm font-medium transition-colors hover:bg-secondary"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
