"use client";

import { ArrowUpRight } from "lucide-react";

// Duplicate projects array to ensure smooth infinite scrolling without gaps
const singleProjects = [
  {
    title: "Batchify",
    description: "High-performance image and file processing tool that relies heavily on WebAssembly (jsquash) for running transformations entirely client-side.",
    technologies: ["React", "Vite", "WASM", "Supabase"],
    link: "https://www.batchify.pro/",
  },
  {
    title: "SettleIt",
    description: "A group expense splitting application that allows users to seamlessly track sharing, balances, and view detailed analytical expense breakdowns.",
    technologies: ["Next.js", "MongoDB", "Auth.js", "Chart.js"],
    link: "https://settle-it-x637.vercel.app/",
  },
  {
    title: "Flickstat",
    description: "A comprehensive football analytics platform that provides in-depth match analysis and player statistics utilizing data visualizations.",
    technologies: ["Next.js", "Python", "Supabase", "TailwindCSS"],
    link: "https://flickstat.com/",
  },
  {
    title: "CollDraw",
    description: "A real-time collaborative canvas application where users can draw, sketch, and interact with their friends instantly.",
    technologies: ["React", "Node.js", "WebSockets"],
    link: "https://collaborative-draw-q2f9.onrender.com/",
  },
  {
    title: "TrieHub",
    description: "A developer productivity tool to visualize entire GitHub repositories as interactive tree structures for rapid codebase comprehension.",
    technologies: ["Next.js", "D3.js", "Python", "Octokit"],
    link: "https://trie-hub.vercel.app/",
  }
];

const projects = [...singleProjects, ...singleProjects];

export function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 w-full relative overflow-hidden">
      <div className="flex flex-col gap-4 mb-12 px-4 md:px-6 max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-foreground">Featured Work</h2>
        <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl">
          A selection of projects where I've focused on performance, user experience, and robust architecture.
        </p>
      </div>

      {/* Infinite Slider Container */}
      <div className="relative w-full flex overflow-hidden group mask-image-fade">
        <div className="flex gap-6 animate-marquee hover:[animation-play-state:paused] min-w-max px-3">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              className="relative w-[280px] sm:w-[350px] md:w-[450px] group/card flex flex-col justify-between p-6 sm:p-8 rounded-3xl border border-border bg-card hover:bg-zinc-900 dark:hover:bg-zinc-100 hover:border-transparent transition-all duration-500 overflow-hidden"
            >
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-foreground group-hover/card:text-background transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="p-2 rounded-full bg-secondary group-hover/card:bg-background/20 transition-colors">
                    <ArrowUpRight className="text-foreground group-hover/card:text-background transition-colors" size={24} />
                  </div>
                </div>
                <p className="text-muted-foreground group-hover/card:text-background/80 mb-8 leading-relaxed whitespace-normal transition-colors duration-300">
                  {project.description}
                </p>
              </div>
              
              <div className="relative z-10 flex flex-wrap gap-2 mt-auto">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-4 py-1.5 rounded-full text-xs font-mono font-medium bg-secondary text-secondary-foreground border border-border/50 group-hover/card:bg-background/10 group-hover/card:border-transparent group-hover/card:text-background transition-colors duration-300 whitespace-nowrap"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
