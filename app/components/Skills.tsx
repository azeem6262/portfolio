"use client";

const skillGroups = [
  {
    category: "Frontend",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Canvas API"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "FastAPI", "Flask", "WebSockets", "REST APIs", "Express.js"],
  },
  {
    category: "Database",
    skills: ["PostgreSQL", "Supabase", "MongoDB", "SQLite", "Firebase"],
  },
  {
    category: "ML & AI",
    skills: ["PyTorch", "MegaDetector v5a", "SpeciesNet", "OpenCLIP"],
  },
  {
    category: "DevOps & Tools",
    skills: ["Docker", "GitHub Actions", "Oracle Cloud", "Git", "Postman"],
  },
  {
    category: "Desktop & Other",
    skills: ["Tauri v2", "PyInstaller", "Web Workers", "Solidity"],
  },
  {
    category: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "C++"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="w-full py-24 relative font-inter bg-background text-foreground">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        {/* Section Label */}
        <div className="mb-16 flex items-center gap-6">
          <p className="font-mono text-sm tracking-widest text-muted-foreground uppercase">
            // 01 — Stack
          </p>
          <div className="h-px bg-border/50 flex-1"></div>
        </div>

        <div className="flex flex-col gap-10 md:gap-12">
          {skillGroups.map((group, index) => (
            <div 
              key={index} 
              className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8"
            >
              {/* Category Label */}
              <div className="w-full md:w-48 shrink-0 md:pt-2">
                <span className="font-mono text-xs md:text-sm tracking-widest text-muted-foreground uppercase">
                  {group.category} <span className="hidden md:inline">—</span>
                </span>
              </div>
              
              {/* Pills */}
              <div className="flex flex-wrap items-center gap-3">
                {group.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-4 py-2 bg-surface text-foreground text-xs md:text-sm font-mono rounded-md border border-border transition-colors duration-300 hover:border-chartreuse hover:text-chartreuse cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
