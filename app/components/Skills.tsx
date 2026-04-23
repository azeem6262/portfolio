"use client";

import { useRef, useEffect, useState } from "react";
import { 
  SiNextdotjs, 
  SiReact, 
  SiTypescript, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiPostgresql, 
  SiPython,
  SiMongodb,
  SiSupabase,
  SiDocker,
  SiRedis,
  SiGithub
} from "react-icons/si";
import { Network } from "lucide-react";

const skills = [
  { name: "Next.js", level: "Expert", icon: <SiNextdotjs /> },
  { name: "React", level: "Expert", icon: <SiReact /> },
  { name: "TypeScript", level: "Advanced", icon: <SiTypescript /> },
  { name: "Tailwind CSS", level: "Expert", icon: <SiTailwindcss /> },
  { name: "Node.js", level: "Advanced", icon: <SiNodedotjs /> },
  { name: "Python", level: "Advanced", icon: <SiPython /> },
  { name: "PostgreSQL", level: "Intermediate", icon: <SiPostgresql /> },
  { name: "MongoDB", level: "Advanced", icon: <SiMongodb /> },
  { name: "Supabase", level: "Advanced", icon: <SiSupabase /> },
  { name: "Docker", level: "Intermediate", icon: <SiDocker /> },
  { name: "Redis", level: "Intermediate", icon: <SiRedis /> },
  { name: "GitHub", level: "Advanced", icon: <SiGithub /> },
  { name: "System Design", level: "Intermediate", icon: <Network /> },
];

export function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 px-4 md:px-6 max-w-7xl mx-auto w-full">
      <div className="flex flex-col gap-4 mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-foreground">Technical Expertise</h2>
        <p className="text-muted-foreground text-sm md:text-base max-w-2xl">
          Core technologies I specialize in for building robust, scalable applications.
        </p>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="group relative p-4 rounded-xl border border-border bg-card overflow-hidden cursor-crosshair transition-all duration-500 hover:border-indigo-500/50 hover:bg-indigo-500/5 flex flex-col items-center justify-center text-center gap-3 aspect-square"
          >
            {/* Soft Glow Effect on Hover */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/0 via-indigo-500/0 to-indigo-500/0 group-hover:from-indigo-500/10 group-hover:to-transparent transition-all duration-500 opacity-0 group-hover:opacity-100" />
            
            <div className="relative z-10 flex flex-col items-center justify-center gap-2">
              <div className="text-2xl text-muted-foreground group-hover:text-indigo-400 transition-colors duration-300">
                {skill.icon}
              </div>
              <h3 className="text-sm font-medium text-foreground group-hover:text-indigo-500 transition-colors duration-300">
                {skill.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
