"use client";

import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function Contact() {
  return (
    <section id="about" className="py-16 md:py-24 px-4 md:px-6 max-w-7xl mx-auto w-full border-t border-border mt-8 md:mt-12 mb-8 md:mb-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="flex flex-col gap-6 max-w-3xl">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-foreground">Let's build something.</h2>
          
          <div className="flex flex-col gap-4 text-muted-foreground text-lg leading-relaxed">
            <p>
              My engineering journey is driven by taking raw ideas from paper sketches to live, real-time products. I learn best by doing—which is exactly how <strong className="text-foreground font-medium">Batchify</strong> and <strong className="text-foreground font-medium">Flickstat</strong> were created. Both evolved from scratch into full applications that are actively used by people today.
            </p>
            <p>
              I thrive in collaborative environments just as much as solo deep dives; for example, I served as the project lead for a talented three-person team to bring Flickstat's vision to life.
            </p>
            <p>
              I'm currently open for new opportunities. Whether you have an idea, a question, or just want to say hi, I'll try my best to get back to you!
            </p>
          </div>
        </div>

        <div className="flex gap-4 mt-8 md:mt-0">
          <a href="https://github.com/azeem6262" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-border bg-card hover:bg-foreground hover:text-background transition-colors" aria-label="GitHub">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/mohammed-azeem-476094250/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-border bg-card hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] transition-colors" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href="mailto:mazeem.ajm@gmail.com" className="p-3 rounded-full border border-border bg-card hover:bg-destructive hover:text-white hover:border-destructive transition-colors" aria-label="Email">
            <Mail size={20} />
          </a>
        </div>
      </div>
      
      <div className="mt-24 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground font-mono">
        <p>© {new Date().getFullYear()} Azeem. All rights reserved.</p>
        <p>Built with Next.js, Tailwind, and Coffee.</p>
      </div>
    </section>
  );
}
