"use client";

import { useState, useRef, useEffect } from "react";

type HistoryItem = {
  type: "input" | "output" | "error";
  text: string;
  color?: string;
};

export function Terminal() {
  const [history, setHistory] = useState<HistoryItem[]>([
    { type: "output", text: "Welcome to the interactive portfolio terminal.", color: "text-muted-foreground" },
    { type: "output", text: "Type 'help' to see a list of available commands.", color: "text-green-500" },
  ]);
  const [input, setInput] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim();
    if (!cmd) return;

    const newHistory: HistoryItem[] = [...history, { type: "input", text: cmd }];
    const lowerCmd = cmd.toLowerCase();

    switch (lowerCmd) {
      case "help":
      case "--help":
        newHistory.push({ type: "output", text: "Available commands:", color: "text-indigo-400" });
        newHistory.push({ type: "output", text: "  help    - Show this help message" });
        newHistory.push({ type: "output", text: "  whoami  - Display brief information about me" });
        newHistory.push({ type: "output", text: "  skills  - List my technical expertise" });
        newHistory.push({ type: "output", text: "  clear   - Clear the terminal screen" });
        break;
      case "whoami":
        newHistory.push({ type: "output", text: "Azeem - Software Engineer building reliable backends and stunning frontends.", color: "text-indigo-500" });
        break;
      case "skills":
        newHistory.push({ type: "output", text: "Languages, Tools & Expertise:", color: "text-indigo-400" });
        newHistory.push({ type: "output", text: "  Next.js, React, TypeScript, TailwindCSS, Node.js, Python, PostgreSQL, MongoDB, Supabase, Docker, Redis, GitHub, System Design" });
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      case "sudo":
        newHistory.push({ type: "error", text: "Permission denied. You do not have root access.", color: "text-destructive" });
        break;
      default:
        newHistory.push({ type: "error", text: `Command not found: ${cmd}. Type 'help' for a list of commands.`, color: "text-destructive" });
    }

    setHistory(newHistory);
    setInput("");
  };

  return (
    <div 
      className="w-full h-[300px] md:h-[400px] border border-border bg-card rounded-xl shadow-sm flex flex-col relative overflow-hidden backdrop-blur-md cursor-text"
      onClick={() => inputRef.current?.focus()}
    >
      {/* Terminal Header */}
      <div className="absolute top-0 left-0 right-0 h-10 border-b border-border flex items-center px-4 gap-2 bg-muted/50 z-10">
        <div className="w-3 h-3 rounded-full bg-destructive/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <div className="w-3 h-3 rounded-full bg-green-500/80" />
        <span className="font-mono text-xs text-muted-foreground ml-4">terminal ~ azeem</span>
      </div>
      
      {/* Terminal Body */}
      <div 
        ref={containerRef} 
        className="flex-1 px-4 md:px-6 pb-4 md:pb-6 pt-14 md:pt-[3.5rem] font-mono text-xs sm:text-sm md:text-base text-foreground w-full flex flex-col gap-2 overflow-y-auto no-scrollbar"
      >
        {history.map((line, i) => (
          <div key={i} className={`whitespace-pre-wrap break-words ${line.color || ""}`}>
            {line.type === "input" && (
              <span><span className="text-indigo-500">guest@portfolio</span>:<span className="text-muted-foreground">~/dev</span>$ </span>
            )}
            {line.text}
          </div>
        ))}

        {/* Active Input Line */}
        <form onSubmit={handleCommand} className="flex flex-wrap items-center">
          <span className="mr-2"><span className="text-indigo-500">guest@portfolio</span>:<span className="text-muted-foreground">~/dev</span>$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent outline-none border-none text-foreground min-w-[100px]"
            autoFocus
            autoComplete="off"
            spellCheck="false"
          />
        </form>
      </div>
    </div>
  );
}
