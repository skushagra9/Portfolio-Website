"use client"

import React from "react";
import { DemoGithub } from "./GithubCard";
import { data } from "@/constants/ProjectData";

export default function Project() {
  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 max-w-screen-lg mx-auto">
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
  );
}

