"use client";

import { useState } from "react";
import { ProjectCard } from "./ProjectCard";

export function ProjectsSection() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const toggleProject = (projectName: string) => {
    setExpandedProject((prev) => (prev === projectName ? null : projectName));
  };

  const flickstatExpanded = (
    <div className="flex flex-col gap-6 text-muted-foreground text-sm leading-relaxed font-inter">
      <div>
        <p className="font-mono text-xs uppercase tracking-widest mb-2 text-muted-foreground/70">// origin</p>
        <p>Azeem originally built this alone under the name "Lens." He scraped everything, built the pipeline, but hit a wall at canonical ID resolution — when Rashford moved from Manchester United to FC Barcelona, he had two completely separate IDs across data sources. None of the sources agreed on player or club names either (Man United vs Manchester United, accented names, aliases). He deleted everything, restarted from scratch, and brought in two college friends — Arnav and Vedant — explaining the entire vision to them and co-designing the schema from zero.</p>
      </div>
      <div>
        <p className="font-mono text-xs uppercase tracking-widest mb-2 text-muted-foreground/70">// under the hood</p>
        <p>Data is combined from five sources — WhoScored, Understat, BSD, Transfermarkt, and TheSportsDB (images). Each source uses its own internal IDs. The team designed a canonical "Flickstat ID" system that maps every player and club across all five sources into one unified identity. Automated daily scraping runs via a run_daily_pipeline triggered by cron-job.org firing a GitHub Actions workflow. Live match data and odds are delivered via WebSockets through BSD running on an Oracle Cloud VM. The site serves 1,000+ pages via SSR and SSG — one of the real production challenges was deciding which rendering strategy to use where, and getting that wrong initially. Azeem owns the backend; Vedant handles frontend; Arnav manages automation.</p>
      </div>
      <div className="pt-2">
        <span className="font-bold text-foreground bg-surface px-2 py-1 rounded">✦ 1,500 users/month</span>
      </div>
    </div>
  );

  const wildwatchExpanded = (
    <div className="flex flex-col gap-6 text-muted-foreground text-sm leading-relaxed font-inter">
      <div>
        <p className="font-mono text-xs uppercase tracking-widest mb-2 text-muted-foreground/70">// origin</p>
        <p>Azeem's cousin is a research student doing field work — planting GoPros and camera traps at wildlife sites in Gujarat, then manually labelling hundreds of videos afterward. One conversation sparked the idea: what if the labelling was automated, entirely offline, on the laptop they already carry? The target user is student researchers and field conservation teams, particularly those working with Indian species.</p>
      </div>
      <div>
        <p className="font-mono text-xs uppercase tracking-widest mb-2 text-muted-foreground/70">// under the hood</p>
        <p>The hardest part wasn't the ML — it was finding the right combination of models. After testing several options, the final pipeline uses MegaDetector v5a for animal detection and flagging, Google SpeciesNet for species identification, and an OpenCLIP model that gave better results specifically for Indian species in Gujarat. Packaging all of this into a single offline .exe installer (PyInstaller + Tauri v2) without internet dependency was genuinely difficult. One feature does optionally use the Gemini API — reading timestamps from video frames — but the core pipeline (detection, species ID, flagging, CSV export) works completely offline. The output is a clean CSV with every frame labelled and flagged, ready for research use. Currently tested end-to-end by Azeem; first external handoff to his cousin is upcoming.</p>
      </div>
      <div className="pt-2">
        <span className="text-muted-foreground/50 text-xs italic">First external deployment coming soon.</span>
      </div>
    </div>
  );

  const batchifyExpanded = (
    <div className="flex flex-col gap-6 text-muted-foreground text-sm leading-relaxed font-inter">
      <div>
        <p className="font-mono text-xs uppercase tracking-widest mb-2 text-muted-foreground/70">// origin</p>
        <p>Built for creators and companies who process images in bulk — designers, social media teams, small businesses. The core design decision was zero server uploads: everything happens natively in the browser. This wasn't just a performance choice — it was a deliberate privacy stance. People are rightfully skeptical of uploading images to unknown servers (think: PDF editors selling your data). On Batchify, nothing leaves your machine.</p>
      </div>
      <div>
        <p className="font-mono text-xs uppercase tracking-widest mb-2 text-muted-foreground/70">// under the hood</p>
        <p>Processes up to 150 images simultaneously in-browser using the Canvas API and Web Workers. The tricky engineering problem was mobile: mobile browsers cannot handle compute-heavy operations like smart crop or background removal via Web Workers — they simply don't have the resources. The solution was device detection to gracefully degrade on mobile while keeping the full feature set intact on desktop. Fast, private, and honest about its constraints.</p>
      </div>
      <div className="pt-2">
        <span className="font-bold text-foreground bg-surface px-2 py-1 rounded">✦ 150 images simultaneously</span>
      </div>
    </div>
  );

  return (
    <section id="projects" className="w-full py-24 relative font-inter bg-background text-foreground border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Label */}
        <div className="mb-16 flex items-center gap-6">
          <p className="font-mono text-sm tracking-widest text-muted-foreground uppercase">
            // 02 — Work
          </p>
          <div className="h-px bg-border/50 flex-1"></div>
        </div>

        <div className="flex flex-col gap-12">
          {/* Tier 1: Featured */}
          <div className="flex flex-col gap-8 md:gap-12">
            <ProjectCard
              title="Flickstat"
              titleClassName="text-4xl md:text-5xl lg:text-6xl"
              description="Football analytics platform providing live match data and predictions. Founded and led a 3-person team, resolving canonical IDs across 4 data sources."
              tags={["Next.js", "WebSockets", "SSR / SSG"]}
              link="https://flickstat.com"
              linkLabel="Live Project"
              linkIcon="external"
              highlightStat="1,000+ pages served via SSR/SSG · Real users · Live WebSocket data"
              isLive={true}
              expandedContent={flickstatExpanded}
              isExpanded={expandedProject === "Flickstat"}
              onToggle={() => toggleProject("Flickstat")}
            />

            <ProjectCard
              title="WildWatch"
              titleClassName="text-3xl md:text-4xl"
              className="max-w-5xl ml-auto w-full"
              description="Fully offline Windows desktop AI app for wildlife conservation, processing 3,000+ files locally without internet."
              tags={["Python", "MegaDetector v5a", "Google SpeciesNet"]}
              link="https://github.com/azeem6262/WildWatch"
              linkLabel="Source"
              linkIcon="github"
              highlightStat="Fully offline · MegaDetector v5a · 2,400+ species identified"
              expandedContent={wildwatchExpanded}
              isExpanded={expandedProject === "WildWatch"}
              onToggle={() => toggleProject("WildWatch")}
            />
          </div>

          {/* Tier 2: Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 w-full mt-4">
            <ProjectCard
              title="Batchify.pro"
              titleClassName="text-2xl"
              description="Browser-only bulk image processing using Canvas API and Web Workers."
              tags={["Canvas API", "Web Workers"]}
              link="https://batchify.pro"
              linkLabel="Live Project"
              linkIcon="external"
              isLive={true}
              expandedContent={batchifyExpanded}
              isExpanded={expandedProject === "Batchify"}
              onToggle={() => toggleProject("Batchify")}
            />

            <ProjectCard
              title="SettleIt"
              titleClassName="text-2xl"
              description="Full-stack Progressive Web App (PWA) expense manager built for modern teams."
              tags={["PWA", "Full Stack"]}
              link="#"
              linkLabel="Live Project"
              linkIcon="external"
            />
          </div>

          {/* Tier 3: Also built */}
          <div className="mt-12 pt-12 border-t border-border">
            <h4 className="font-mono text-sm tracking-widest text-muted-foreground uppercase mb-8">// Also built</h4>
            <div className="flex flex-col sm:flex-row gap-8">
              <a href="#" className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <span className="font-serif text-xl">CollDraw</span>
                <span className="text-muted-foreground group-hover:text-chartreuse opacity-50 transition-all group-hover:opacity-100 group-hover:translate-x-1">→</span>
              </a>
              <a href="#" className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <span className="font-serif text-xl">TrieHub</span>
                <span className="text-muted-foreground group-hover:text-chartreuse opacity-50 transition-all group-hover:opacity-100 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
