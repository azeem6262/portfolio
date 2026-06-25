import { ExternalLink, Github } from "lucide-react";

export function ProjectsSection() {
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
            {/* Flickstat */}
            <div className="group relative border border-border p-8 md:p-12 rounded-2xl bg-background transition-colors duration-500 hover:bg-surface overflow-hidden flex flex-col justify-between items-start gap-8 shadow-sm">
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-chartreuse -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
              
              <div className="w-full flex flex-col md:flex-row md:items-start justify-between gap-8">
                <div className="flex flex-col gap-4 max-w-2xl">
                  <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight">Flickstat</h3>
                  <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                    Football analytics platform providing live match data and predictions. Founded and led a 3-person team, resolving canonical IDs across 4 data sources.
                  </p>
                </div>
                <a 
                  href="https://flickstat.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-chartreuse font-mono text-sm uppercase tracking-wider hover:opacity-80 transition-opacity whitespace-nowrap border border-chartreuse/20 px-5 py-2.5 rounded-full bg-chartreuse/10"
                >
                  Live Project <ExternalLink size={16} />
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1.5 bg-secondary text-secondary-foreground text-xs font-mono rounded-md uppercase tracking-wider">Next.js</span>
                <span className="px-3 py-1.5 bg-secondary text-secondary-foreground text-xs font-mono rounded-md uppercase tracking-wider">WebSockets</span>
                <span className="px-3 py-1.5 bg-secondary text-secondary-foreground text-xs font-mono rounded-md uppercase tracking-wider">SSR / SSG</span>
              </div>

              <div className="w-full pt-6 border-t border-border mt-2">
                <p className="text-foreground font-mono text-sm flex items-center gap-3">
                  <span className="text-chartreuse text-xl">✦</span> 1,000+ pages served via SSR/SSG · Real users · Live WebSocket data
                </p>
              </div>
            </div>

            {/* WildWatch */}
            <div className="group relative border border-border p-6 md:p-10 rounded-2xl bg-background transition-colors duration-500 hover:bg-surface overflow-hidden flex flex-col justify-between items-start gap-8 max-w-4xl ml-auto w-full shadow-sm">
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-chartreuse -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
              
              <div className="w-full flex flex-col md:flex-row md:items-start justify-between gap-8">
                <div className="flex flex-col gap-3 max-w-xl">
                  <h3 className="font-serif text-3xl md:text-4xl text-foreground">WildWatch</h3>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                    Fully offline Windows desktop AI app for wildlife conservation, processing 3,000+ files locally without internet.
                  </p>
                </div>
                <a 
                  href="https://github.com/azeem6262/WildWatch" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-foreground font-mono text-sm uppercase tracking-wider hover:text-chartreuse transition-colors whitespace-nowrap border border-border hover:border-chartreuse px-5 py-2.5 rounded-full"
                >
                  Source <Github size={16} />
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1.5 bg-secondary text-secondary-foreground text-xs font-mono rounded-md uppercase tracking-wider">Python</span>
                <span className="px-3 py-1.5 bg-secondary text-secondary-foreground text-xs font-mono rounded-md uppercase tracking-wider">MegaDetector v5a</span>
                <span className="px-3 py-1.5 bg-secondary text-secondary-foreground text-xs font-mono rounded-md uppercase tracking-wider">Google SpeciesNet</span>
              </div>

              <div className="w-full pt-5 border-t border-border mt-2">
                <p className="text-foreground font-mono text-sm flex items-center gap-3">
                  <span className="text-chartreuse text-xl">✦</span> Fully offline · MegaDetector v5a · 2,400+ species identified
                </p>
              </div>
            </div>
          </div>

          {/* Tier 2: Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full mt-4">
            {/* Batchify.pro */}
            <div className="group relative border border-border p-8 rounded-xl bg-background transition-colors duration-500 hover:bg-surface overflow-hidden flex flex-col gap-6 shadow-sm">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-chartreuse -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
              
              <div className="flex justify-between items-start">
                <h3 className="font-serif text-2xl text-foreground">Batchify.pro</h3>
                <a href="https://batchify.pro" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-chartreuse transition-colors">
                  <ExternalLink size={20} />
                </a>
              </div>
              
              <p className="text-muted-foreground text-base flex-1 leading-relaxed">
                Browser-only bulk image processing using Canvas API and Web Workers.
              </p>
              
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <span className="px-2 py-1 bg-secondary text-secondary-foreground text-[10px] font-mono rounded uppercase tracking-wider">Canvas API</span>
                <span className="px-2 py-1 bg-secondary text-secondary-foreground text-[10px] font-mono rounded uppercase tracking-wider">Web Workers</span>
              </div>
            </div>

            {/* SettleIt */}
            <div className="group relative border border-border p-8 rounded-xl bg-background transition-colors duration-500 hover:bg-surface overflow-hidden flex flex-col gap-6 shadow-sm">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-chartreuse -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
              
              <div className="flex justify-between items-start">
                <h3 className="font-serif text-2xl text-foreground">SettleIt</h3>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-chartreuse transition-colors">
                  <ExternalLink size={20} />
                </a>
              </div>
              
              <p className="text-muted-foreground text-base flex-1 leading-relaxed">
                Full-stack Progressive Web App (PWA) expense manager built for modern teams.
              </p>
              
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <span className="px-2 py-1 bg-secondary text-secondary-foreground text-[10px] font-mono rounded uppercase tracking-wider">PWA</span>
                <span className="px-2 py-1 bg-secondary text-secondary-foreground text-[10px] font-mono rounded uppercase tracking-wider">Full Stack</span>
              </div>
            </div>
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
