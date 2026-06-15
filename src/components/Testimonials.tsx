"use client";

import { FadeIn } from "./FadeIn";

interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
}

// Sample testimonials from colleagues and clients
const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "Exceptional technical skills combined with a remarkable ability to communicate complex ideas clearly. A true asset to any team.",
    name: "Sarah Chen",
    role: "Senior Product Manager",
    company: "TechFlow Inc",
    initials: "SC",
  },
  {
    id: "2",
    quote:
      "Built a production-grade application from scratch. Attention to detail and code quality was impressive. Highly recommended for demanding projects.",
    name: "Marcus Williams",
    role: "CTO",
    company: "InnovateLabs",
    initials: "MW",
  },
  {
    id: "3",
    quote:
      "Delivered on time and exceeded expectations. Great problem-solver who doesn't shy away from challenging requirements.",
    name: "Lisa Rodriguez",
    role: "Engineering Lead",
    company: "CloudScale Systems",
    initials: "LR",
  },
  {
    id: "4",
    quote:
      "Mentored junior developers with patience and clarity. An engineer who genuinely cares about knowledge sharing and team growth.",
    name: "James Park",
    role: "Founder",
    company: "DevCommunity",
    initials: "JP",
  },
];

// Staggered fade-in animation for each testimonial card
const TESTIMONIAL_DELAY_MULTIPLIER = 60; // ms

interface TestimonialCardProps {
  testimonial: Testimonial;
  delay: number;
}

function TestimonialCard({ testimonial, delay }: TestimonialCardProps) {
  return (
    <FadeIn delay={delay}>
      <div className="relative rounded-lg border border-border bg-card/50 p-6 transition-all hover:bg-secondary/30">
        {/* Decorative quote mark in top-right corner */}
        <div className="absolute -top-3 -right-3 text-5xl text-primary/15 font-serif select-none">
          &ldquo;
        </div>

        {/* Testimonial quote text */}
        <p className="relative text-sm text-muted-foreground leading-relaxed mb-6">
          {testimonial.quote}
        </p>

        {/* Author information: avatar with initials + name and role */}
        <div className="flex items-center gap-3">
          {/* Avatar with author initials */}
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center">
            <span className="text-xs font-semibold text-primary">
              {testimonial.initials}
            </span>
          </div>

          {/* Author name and title */}
          <div className="flex-1 min-w-0">
            <p className="font-medium text-sm text-foreground">
              {testimonial.name}
            </p>
            <p className="text-xs text-muted-foreground">
              {testimonial.role} at {testimonial.company}
            </p>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="w-full">
      <FadeIn className="w-full max-w-2xl">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight mb-10">
          Testimonials
        </h2>

        <div className="space-y-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              delay={index * TESTIMONIAL_DELAY_MULTIPLIER}
            />
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
