"use client"

import { Link1Icon } from "@radix-ui/react-icons"
import Image from "next/image"

interface ProjectCardProps {
  name: string
  description: string
  imageUrl: string
  liveLink: string
  contributionLink?: string
}

export function ProjectCard({
  name,
  description,
  imageUrl,
  liveLink,
  contributionLink,
}: ProjectCardProps) {
  return (
    <div className="group h-full rounded-xl border border-border bg-card overflow-hidden transition-all duration-200 hover:border-primary/30 hover:shadow-md hover:shadow-primary/5">
      <div className="relative w-full h-44 bg-muted overflow-hidden">
        <Image
          src={imageUrl}
          alt={`${name} preview`}
          fill
          className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 400px"
        />
      </div>

      <div className="p-5 space-y-3">
        <div className="space-y-1.5">
          <h3 className="font-[family-name:var(--font-display)] font-semibold text-card-foreground">
            {name}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
            {description}
          </p>
        </div>

        <div className="flex items-center gap-3 pt-1">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
          >
            <Link1Icon className="h-3.5 w-3.5" />
            Live Demo
          </a>
          {contributionLink && (
            <a
              href={contributionLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:underline"
            >
              <Link1Icon className="h-3.5 w-3.5" />
              Contribution
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
