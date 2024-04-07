"use client"
import React from "react";
import { DemoGithub } from "./GithubCard";
import { data } from "@/constants/ProjectData";

export default function Contact() {
  return (
    <div id="projects" className="max-w-screen-lg mx-auto mt-16 flex flex-col items-center gap-y-4">
      <span className="text-indigo-900 dark:text-indigo-300 font-bold">🌟 Projects</span>
      <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8">
        {data.map((item, index) => (
          <div key={index} className="w-full px-8 sm:w-1/3 sm:p-0 md:w-1/4 md:p-0">
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
  );
}

