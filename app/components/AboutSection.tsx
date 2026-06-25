"use client";

export function AboutSection() {
  return (
    <section id="about" className="w-full py-24 relative font-inter bg-background text-foreground border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Label */}
        <div className="mb-16 flex items-center gap-6">
          <p className="font-mono text-sm tracking-widest text-muted-foreground uppercase">
            // 03 — About
          </p>
          <div className="h-px bg-border/50 flex-1"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left Column: The Anchor */}
          <div className="lg:col-span-5 flex flex-col gap-8 lg:sticky lg:top-32">
            <blockquote className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight relative">
              <span className="absolute -left-4 md:-left-8 top-2 w-1.5 h-full bg-chartreuse"></span>
              "I couldn't finish a single project. Then one day, I did."
            </blockquote>
          </div>

          {/* Right Column: The Prose */}
          <div className="lg:col-span-7 flex flex-col gap-6 md:gap-8 text-lg md:text-xl text-muted-foreground leading-relaxed">
            <p>
              In the beginning, I couldn't finish a single project. I'd start with grand ideas, get stuck in the weeds, and eventually abandon them. That was my reality for a long time. But over time, I learned to push through the friction. Today, I build and maintain multiple live projects with real users.
            </p>
            <p>
              The turning point was <strong className="text-foreground font-semibold">Flickstat</strong>. It was the hardest thing I've ever built. I originally tried to build it alone, but quickly realized the scale required a team—so I brought in two friends and led us to launch. The deepest technical challenge wasn't just shipping; it was canonical ID resolution. We had to map players and clubs across four completely different football data sources into a single, unified identity. It was messy, grueling work—and we solved it. We now serve thousands of pages via SSR/SSG, deliver live match data and odds through WebSockets, and run a real-time prediction leaderboard.
            </p>
            <p>
              I also care deeply about software that matters in the real world. That led me to build <strong className="text-foreground font-semibold">WildWatch</strong>, a fully offline AI desktop app for wildlife conservation teams. No cloud, no API keys—just detection models running locally on field laptops.
            </p>
            <p>
              I am currently a final-year Computer and Communication Engineering student at Manipal University Jaipur (CGPA 8.68). Based in Rajasthan, India, I'm actively looking for opportunities to tackle hard, meaningful engineering problems.
            </p>
            
            {/* Stat Row */}
            <div className="mt-8 pt-8 border-t border-border flex flex-wrap gap-x-6 gap-y-4 font-mono text-sm uppercase tracking-wider text-foreground">
              <span className="flex items-center gap-2"><span className="text-chartreuse text-xl">✦</span> 4 Live Projects</span>
              <span className="flex items-center gap-2"><span className="text-chartreuse text-xl">✦</span> 1 Founded Company</span>
              <span className="flex items-center gap-2"><span className="text-chartreuse text-xl">✦</span> 1,000+ SSR Pages</span>
              <span className="flex items-center gap-2"><span className="text-chartreuse text-xl">✦</span> Real Users</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
