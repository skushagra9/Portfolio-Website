"use client";

import { Testimonials } from "@/constants/Testimonials";
import { FadeIn } from "./FadeIn";

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="w-full max-w-2xl">
      <FadeIn>
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight mb-10">
          Testimonials
        </h2>
      </FadeIn>

      <div className="space-y-4">
        {Testimonials.map((testimonial, i) => (
          <FadeIn key={testimonial.name} delay={i * 80}>
            <div className="rounded-xl border border-border bg-secondary/30 p-5 space-y-3">
              <div className="text-primary opacity-40 text-5xl leading-none">&ldquo;</div>

              <p className="text-sm text-muted-foreground leading-relaxed italic">
                {testimonial.quote}
              </p>

              <div className="flex items-center gap-3 pt-1">
                <div className="bg-primary/10 text-primary text-sm font-semibold rounded-full w-9 h-9 flex items-center justify-center">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.title}</p>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};
