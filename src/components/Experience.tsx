"use client";

import { Experience } from "@/constants/Experience";
import { FadeIn } from "./FadeIn";
import { ReactNode } from "react";

/**
 * Parse markdown-style links in text and convert them to interactive anchor elements.
 * Supports format: [link text](url)
 */
const parseMarkdownLinks = (text: string): ReactNode[] => {
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts: ReactNode[] = [];
  let lastIndex = 0;
  let match;

  while ((match = linkRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    parts.push(
      <a
        key={match.index}
        href={match[2]}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:underline"
      >
        {match[1]}
      </a>
    );
    lastIndex = linkRegex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length > 0 ? parts : [text];
};

export const Exp = () => {
  return (
    <section id="experience" className="w-full max-w-2xl">
      <FadeIn>
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight mb-10">
          Experience
        </h2>
      </FadeIn>

      <div className="relative">
        <div className="absolute left-0 md:left-4 top-0 bottom-0 w-px bg-border" />

        <div className="space-y-12">
          {Experience.map((e, i) => (
            <FadeIn key={e.year + e.title.name} delay={i * 80}>
              <div className="relative pl-8 md:pl-12">
                <div className="absolute left-0 md:left-4 top-1.5 -translate-x-1/2 w-2.5 h-2.5 rounded-full border-2 border-primary bg-background" />

                <div className="space-y-3">
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold">
                      {e.title.name}
                    </h3>
                    <p className="text-sm font-medium text-muted-foreground">
                      {e.title.cargo} &middot; {e.timeline} ({e.year})
                    </p>
                  </div>

                  <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                    {e.description.map((item, index) => (
                      <li key={index} className="relative pl-4 before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-muted-foreground/30">
                        {parseMarkdownLinks(item)}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {e.details.flatMap(d => d.split(', ')).map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center rounded-md bg-secondary/50 border border-border px-2 py-0.5 text-xs font-medium text-muted-foreground"
                      >
                        {tech.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
