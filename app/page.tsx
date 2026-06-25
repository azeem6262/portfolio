"use client";

import Image from "next/image";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Terminal } from "./components/Terminal";
import { HeroSection } from "./components/HeroSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { Skills } from "./components/Skills";
import { FadeIn } from "./components/FadeIn";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight * 0.8);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden selection:bg-primary/10">
      {/* Navigation Layer */}
      <nav className={`fixed top-0 left-0 right-0 p-4 sm:p-6 flex items-center justify-between z-50 transition-all duration-300 ${isScrolled ? "bg-background border-b border-border" : "bg-transparent border-transparent"}`}>
        <div className="w-10 h-10 rounded-full border border-border bg-muted overflow-hidden flex items-center justify-center font-bold text-xs shadow-sm" title="Azeem">
          <Image src="/pfp.jpeg" alt="Azeem Profile" width={40} height={40} className="w-full h-full object-cover" />
          <span className="absolute -z-10">A</span>
        </div>
        <div className="flex items-center gap-2 sm:gap-4 text-base tracking-widest uppercase font-semibold text-muted-foreground overflow-hidden">
          <a href="#about" className="px-4 py-2 rounded-lg hover:bg-secondary/40 hover:text-foreground transition-all duration-300 flex items-center relative group">
            <span className="absolute left-2 opacity-0 group-hover:opacity-100 text-chartreuse font-bold transition-all duration-300 -translate-x-2 group-hover:translate-x-0">{'>'}</span>
            <span className="group-hover:ml-4 transition-all duration-300">About</span>
          </a>
          <a href="#projects" className="px-4 py-2 rounded-lg hover:bg-secondary/40 hover:text-foreground transition-all duration-300 flex items-center relative group">
            <span className="absolute left-2 opacity-0 group-hover:opacity-100 text-chartreuse font-bold transition-all duration-300 -translate-x-2 group-hover:translate-x-0">{'>'}</span>
            <span className="group-hover:ml-4 transition-all duration-300">Work</span>
          </a>
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 ml-4 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          )}
        </div>
      </nav>

      <HeroSection />

      {/* Content Sections */}
      <FadeIn delay={100}>
        <Skills />
      </FadeIn>
      <FadeIn delay={200}>
        <ProjectsSection />
      </FadeIn>
      <FadeIn delay={300}>
        <AboutSection />
      </FadeIn>
      <FadeIn delay={400}>
        <ContactSection />
      </FadeIn>
    </div>
  );
}