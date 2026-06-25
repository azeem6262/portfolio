"use client";

import { useState, useEffect } from "react";
import { Terminal } from "./Terminal";

export function HeroSection() {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const opacity = Math.max(0, 1 - scrollY / 500);
  const translateY = scrollY * 0.4; // subtle parallax

  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center pt-20 pb-20">
      <div 
        className="w-full flex flex-col px-4 md:px-6 max-w-7xl mx-auto relative z-10"
        style={{ 
          opacity,
          transform: `translateY(${translateY}px)`
        }}
      >
        <div className="flex flex-col gap-6 max-w-4xl">
          {/* Headline */}
          <h1 className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.1] tracking-tight">
            <span className="block text-muted-foreground/70 mb-2">Engineer by training.</span>
            <span className="block text-foreground">Builder by obsession.</span>
          </h1>

          {/* Subline */}
          <p className="font-mono text-xs md:text-sm text-muted-foreground uppercase tracking-widest mt-6 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-0">
            <span>Founder of Flickstat</span>
            <span className="hidden sm:inline text-chartreuse mx-3">·</span>
            <span>Final-year CS student</span>
            <span className="hidden sm:inline text-chartreuse mx-3">·</span>
            <span>Open to opportunities</span>
          </p>

          {/* Status line */}
          <div className="font-mono text-sm md:text-base text-foreground flex items-center gap-3 mt-8 bg-surface/50 w-fit px-4 py-2 rounded-full border border-border/50">
            <span className="text-chartreuse font-bold">{'>'}</span> 
            currently: building in public
            <span className="animate-pulse bg-chartreuse w-2 h-4 inline-block"></span>
          </div>
        </div>
      </div>

      {/* Terminal Toggle Button in Corner */}
      <div className="absolute bottom-8 right-4 md:right-8 z-50">
        <button 
          onClick={() => setTerminalOpen(!terminalOpen)}
          className="font-mono text-xs text-muted-foreground hover:text-chartreuse transition-colors uppercase tracking-widest border border-transparent hover:border-border px-3 py-2 rounded"
        >
          [ {terminalOpen ? "close terminal" : "open terminal"} ]
        </button>
      </div>

      {/* Terminal Overlay */}
      {terminalOpen && (
        <div className="absolute bottom-20 right-4 md:right-8 w-[90vw] sm:w-[450px] z-40 animate-in slide-in-from-bottom-4 fade-in duration-300 shadow-xl">
          <Terminal />
        </div>
      )}
    </section>
  );
}
