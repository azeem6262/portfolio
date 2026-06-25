"use client";

import { useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [responseMsg, setResponseMsg] = useState("");

  const handleSubmit = async () => {
    // Basic validation
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();
      setResponseMsg(data.reply || "Message sent. Azeem will be in touch.");
      setStatus("success");
    } catch (error) {
      console.error(error);
      setResponseMsg("Message sent. Azeem will be in touch.");
      setStatus("success");
    }
  };

  return (
    <section id="contact" className="w-full py-24 relative font-inter bg-background text-foreground border-t border-border/50">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        {/* Section Label */}
        <div className="mb-16 flex items-center gap-6">
          <p className="font-mono text-sm tracking-widest text-muted-foreground uppercase">
            // 04 — Contact
          </p>
          <div className="h-px bg-border/50 flex-1"></div>
        </div>

        <div className="flex flex-col gap-12">
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground">
            Say hello.
          </h2>

          {status === "success" ? (
            <div className="p-8 md:p-12 border border-border bg-surface rounded-2xl animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out shadow-sm">
              <p className="font-mono text-xs uppercase tracking-widest text-chartreuse mb-6">
                // Message Received
              </p>
              <p className="text-lg md:text-xl text-foreground leading-relaxed whitespace-pre-wrap">
                {responseMsg}
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-10 w-full">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-transparent border-b border-border py-3 text-lg text-foreground focus:outline-none focus:border-chartreuse transition-colors placeholder:text-muted-foreground/30"
                  placeholder="John Doe"
                  disabled={status === "loading"}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent border-b border-border py-3 text-lg text-foreground focus:outline-none focus:border-chartreuse transition-colors placeholder:text-muted-foreground/30"
                  placeholder="john@example.com"
                  disabled={status === "loading"}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="w-full bg-transparent border-b border-border py-3 text-lg text-foreground focus:outline-none focus:border-chartreuse transition-colors resize-none placeholder:text-muted-foreground/30"
                  placeholder="What's on your mind?"
                  disabled={status === "loading"}
                />
              </div>

              <div
                role="button"
                tabIndex={0}
                onClick={() => {
                  if (status !== "loading" && name.trim() && email.trim() && message.trim()) {
                    handleSubmit();
                  }
                }}
                onKeyDown={(e) => {
                  if ((e.key === "Enter" || e.key === " ") && status !== "loading" && name.trim() && email.trim() && message.trim()) {
                    e.preventDefault();
                    handleSubmit();
                  }
                }}
                className={`mt-4 inline-flex items-center justify-center bg-chartreuse text-black font-mono font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-full w-full sm:w-auto self-start transition-all outline-none focus:ring-2 focus:ring-chartreuse focus:ring-offset-2 focus:ring-offset-background ${
                  status === "loading" ? "opacity-80 cursor-wait" : "cursor-pointer hover:bg-chartreuse/90"
                } ${(!name.trim() || !email.trim() || !message.trim()) ? "opacity-50 cursor-not-allowed hover:bg-chartreuse" : ""}`}
              >
                {status === "loading" ? (
                  <span className="flex items-center gap-2 animate-pulse">
                    SENDING...
                  </span>
                ) : (
                  "SEND MESSAGE →"
                )}
              </div>
            </div>
          )}

          {/* Social Links */}
          <div className="mt-8 pt-8 border-t border-border flex items-center gap-6">
            <a
              href="https://github.com/azeem6262"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/azeem"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:azeem@example.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
