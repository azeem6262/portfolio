"use client";

import { useRef, useEffect, useState } from "react";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: React.ReactNode;
  tags: string[];
  link: string;
  linkLabel: string;
  linkIcon?: "external" | "github";
  expandedContent?: React.ReactNode;
  isExpanded?: boolean;
  onToggle?: () => void;
  className?: string;
  titleClassName?: string;
  highlightStat?: React.ReactNode;
  isLive?: boolean;
}

export function ProjectCard({
  title,
  description,
  tags,
  link,
  linkLabel,
  linkIcon = "external",
  expandedContent,
  isExpanded = false,
  onToggle,
  className = "",
  titleClassName = "text-2xl",
  highlightStat,
  isLive,
}: ProjectCardProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState<number | undefined>(0);

  useEffect(() => {
    if (isExpanded && contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    } else {
      setContentHeight(0);
    }
  }, [isExpanded, expandedContent]);

  return (
    <div className={`group relative border border-border p-6 md:p-8 lg:p-12 rounded-2xl bg-background transition-colors duration-500 hover:bg-surface overflow-hidden flex flex-col justify-between items-start shadow-sm ${className}`}>
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-foreground -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
      
      <div className="w-full flex flex-col gap-6 md:gap-8 flex-1">
        <div className="w-full flex flex-col md:flex-row md:items-start justify-between gap-6 md:gap-8">
          <div className="flex flex-col gap-3 md:gap-4 max-w-2xl">
            <div className="flex items-center gap-4">
              <h3 className={`font-serif text-foreground leading-tight ${titleClassName}`}>{title}</h3>
              {isLive && (
                <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-emerald-500 font-mono text-[10px] uppercase tracking-wider font-bold">Live</span>
                </div>
              )}
            </div>
            <p className="text-muted-foreground text-base md:text-lg lg:text-xl leading-relaxed">
              {description}
            </p>
          </div>
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-foreground font-mono text-sm uppercase tracking-wider hover:text-muted-foreground transition-colors whitespace-nowrap border border-border hover:border-muted-foreground px-5 py-2.5 rounded-full focus:outline-none focus:ring-2 focus:ring-foreground"
          >
            {linkLabel} {linkIcon === "external" ? <ExternalLink size={16} /> : <Github size={16} />}
          </a>
        </div>

        <div className="flex flex-wrap items-center gap-2 md:gap-3">
          {tags.map((tag) => (
            <span key={tag} className="px-3 py-1.5 bg-secondary text-secondary-foreground text-xs font-mono rounded-md uppercase tracking-wider">
              {tag}
            </span>
          ))}
        </div>

        {highlightStat && (
          <div className="w-full pt-4 md:pt-6 border-t border-border mt-auto">
            <p className="text-foreground font-mono text-sm flex items-center gap-3">
              <span className="text-muted-foreground text-xl">✦</span> {highlightStat}
            </p>
          </div>
        )}
      </div>

      {expandedContent && (
        <div className="w-full mt-4 flex flex-col items-start">
          <button 
            onClick={onToggle}
            className="text-muted-foreground hover:text-foreground transition-colors font-mono text-sm flex items-center gap-2 py-2"
          >
            {isExpanded ? "− Show less" : "+ Read more"}
          </button>
          
          <div 
            className="w-full overflow-hidden transition-[max-height] duration-400 ease-in-out"
            style={{ maxHeight: isExpanded ? `${contentHeight}px` : "0px" }}
          >
            <div ref={contentRef} className="pt-6 w-full">
              <div className="border-t border-border pt-6 w-full">
                {expandedContent}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
