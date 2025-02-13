"use client"

import React, { useState } from "react";
import { DemoGithub } from "./GithubCard";
import { devToolsData, learningProjectsData, liveProjectsData, openSourceContributions } from "@/constants/ProjectData";
import { ProjectCard } from "./LiveLinkCard";

export default function Project() {
  const [activeFilter, setActiveFilter] = useState<'learning' | 'live' | 'opensource' | 'devtools'>('live');

  const filterButtons = [
    { label: 'Live Projects', value: 'live' },
    { label: 'Open Source Contributions', value: 'opensource' },
    { label: 'Developer Tools', value: 'devtools' },
    { label: 'Learning Projects', value: 'learning' },
  ];

  return (
    <div id="projects" className="max-w-screen-lg mx-auto mt-16 flex flex-col items-center gap-y-8">
      <span className="text-indigo-900 dark:text-indigo-300 font-bold">🌟 Projects</span>
      
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3">
        {filterButtons.map((button) => (
          <button
            key={button.value}
            onClick={() => setActiveFilter(button.value as any)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeFilter === button.value
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            {button.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="w-full">
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8">
          {activeFilter === 'live' && liveProjectsData.map((item, index) => (
            <div key={`live-${index}`} className="w-full px-8 sm:w-1/3 sm:p-0 md:w-1/3 md:p-0">
              <ProjectCard
                name={item.name}
                description={item.description}
                imageUrl={`/${item.imageLink}`}
                liveLink={item.liveLink}
              />
            </div>
          ))}
          
          {(activeFilter === 'opensource') && 
            openSourceContributions.map((item, index) => (
              <div key={`opensource-${index}`} className="w-full px-8 sm:w-1/3 sm:p-0 md:w-1/3 md:p-0">
                <ProjectCard
                  name={item.name}
                  description={item.description}
                  contributionLink={item.contributionLink}
                  liveLink={item.liveLink}
                  imageUrl={`/${item.imageLink}`}
                />
              </div>
            ))}
          
          {(activeFilter === 'devtools') && 
            devToolsData.map((item, index) => (
              <div key={`devtools-${index}`} className="w-full px-8 sm:w-1/3 sm:p-0 md:w-1/4 md:p-0">
                <DemoGithub
                  name={item.name}
                  description={item.description}
                  stars={item.stars}
                  language={item.language}
                  link={item.link}
                />
              </div>
            ))}
            {(activeFilter === 'learning') && 
            learningProjectsData.map((item, index) => (
              <div key={`learning-${index}`} className="w-full px-8 sm:w-1/3 sm:p-0 md:w-1/4 md:p-0">
                <DemoGithub
                  name={item.name}
                  description={item.description}
                  stars={item.stars}
                  language={item.language}
                  link={item.link}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

