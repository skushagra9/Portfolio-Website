"use client"

import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Link1Icon } from "@radix-ui/react-icons"
import Image from "next/image"
import React from "react"

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
    <Card className="relative overflow-hidden rounded-lg shadow transition-all duration-300 hover:shadow-lg hover:scale-105">
      {/* Project Image */}
      <div className="relative w-full h-48 bg-gray-200">
        <Image
          src={imageUrl}
          alt={`${name} preview`}
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, 400px"
        />
      </div>

      {/* Card Content */}
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{name}</CardTitle>
        <CardDescription className="line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button
          variant="link"
          onClick={() => window.open(liveLink, "_blank")}
          className="flex items-center space-x-2 dark:text-indigo-300 dark:hover:text-indigo-500 text-indigo-500 hover:text-indigo-900"
        >
          <Link1Icon className="h-4 w-4" />
          <span>Live Demo</span>
        </Button>
       {contributionLink && <Button
          variant="link"
          onClick={() => window.open(contributionLink, "_blank")}
          className="flex items-center space-x-2 dark:text-indigo-300 dark:hover:text-indigo-500 text-indigo-500 hover:text-indigo-900"
        >
          <Link1Icon className="h-4 w-4" />
          <span>Contribution</span>
        </Button>}
      </CardContent>
    </Card>
  )
}
