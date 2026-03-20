"use client"

import React, { useState } from "react";
import { DemoGithub } from "./GithubCard";
import { devToolsData, learningProjectsData, liveProjectsData, openSourceContributions } from "@/constants/ProjectData";
import { ProjectCard } from "./LiveLinkCard";
import { FadeIn } from "./FadeIn";

type Filter = 'live' | 'opensource' | 'devtools' | 'learning';

const filterButtons: { label: string; value: Filter }[] = [
  { label: 'Live', value: 'live' },
  { label: 'Open Source', value: 'opensource' },
  { label: 'Dev Tools', value: 'devtools' },
  { label: 'Learning', value: 'learning' },
];

export default function Project() {
  const [activeFilter, setActiveFilter] = useState<Filter>('live');

  return (
    <section id="projects" className="w-full">
      <FadeIn>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight">
            Projects
          </h2>
          <div className="flex flex-wrap gap-1.5">
            {filterButtons.map((button) => (
              <button
                key={button.value}
                onClick={() => setActiveFilter(button.value)}
                className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  activeFilter === button.value
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                }`}
              >
                {button.label}
              </button>
            ))}
          </div>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {activeFilter === 'live' && liveProjectsData.map((item, index) => (
          <FadeIn key={`live-${index}`} delay={index * 60}>
            <ProjectCard
              name={item.name}
              description={item.description}
              imageUrl={`/${item.imageLink}`}
              liveLink={item.liveLink}
            />
          </FadeIn>
        ))}

        {activeFilter === 'opensource' && openSourceContributions.map((item, index) => (
          <FadeIn key={`opensource-${index}`} delay={index * 60}>
            <ProjectCard
              name={item.name}
              description={item.description}
              contributionLink={item.contributionLink}
              liveLink={item.liveLink}
              imageUrl={`/${item.imageLink}`}
            />
          </FadeIn>
        ))}

        {activeFilter === 'devtools' && devToolsData.map((item, index) => (
          <FadeIn key={`devtools-${index}`} delay={index * 60}>
            <DemoGithub
              name={item.name}
              description={item.description}
              stars={item.stars}
              language={item.language}
              link={item.link}
            />
          </FadeIn>
        ))}

        {activeFilter === 'learning' && learningProjectsData.map((item, index) => (
          <FadeIn key={`learning-${index}`} delay={index * 60}>
            <DemoGithub
              name={item.name}
              description={item.description}
              stars={item.stars}
              language={item.language}
              link={item.link}
            />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
