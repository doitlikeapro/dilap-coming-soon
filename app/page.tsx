"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const subdomains = [
  {
    tag: "MCP GATEWAY",
    name: "CONNECT",
    host: "connect.itlikeapro.com",
    href: "https://connect.itlikeapro.com",
    external: true,
    description:
      "A self-hosted, open-source MCP gateway that lets Claude use many accounts of the same service — multiple Gmails, Slacks, GitHubs — through a single connector.",
  },
  {
    tag: "LAUNDRY SERVICE",
    name: "WASH",
    host: "wash.itlikeapro.com",
    href: "https://wash.itlikeapro.com",
    external: true,
    description:
      "Laundry pickup, washing, and delivery — booked through a simple WhatsApp-based ordering page.",
  },
  {
    tag: "COMING SOON",
    name: "THE PLATFORM",
    host: "do.itlikeapro.com/coming-soon",
    href: "/coming-soon",
    external: false,
    description:
      "The main event. Master your craft at the highest level — register to be notified when we launch.",
  },
];

export default function DirectoryPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Raw Geometric Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary border-8 border-primary opacity-5" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary opacity-5 border-4 border-primary" />
        <div className="absolute left-0 top-1/3 w-2 h-32 bg-accent" />
        <div className="absolute left-0 top-2/3 w-2 h-24 bg-accent" />
      </div>

      {/* Header */}
      <header className="relative z-10 border-b-4 border-primary bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 flex items-center justify-between">
          <div className="text-2xl font-black tracking-tight">
            DO IT LIKE A PRO
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-semibold uppercase tracking-wider">
            {subdomains.map((s) => (
              <a
                key={s.name}
                href={s.href}
                className="hover:opacity-50 transition-opacity"
              >
                {s.name}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center px-6 pt-20 pb-24">
        {/* Pre-heading */}
        <div
          className={`mb-10 text-center transform transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-block border-4 border-primary px-6 py-2">
            <span className="text-xs font-black uppercase tracking-[0.2em]">
              Domain Directory
            </span>
          </div>
        </div>

        {/* Main Heading */}
        <h1
          className={`text-center mb-6 transform transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="block text-5xl sm:text-6xl lg:text-7xl font-black leading-none tracking-tight mb-4">
            EVERYTHING
          </span>
          <span className="block text-5xl sm:text-6xl lg:text-7xl font-black leading-none tracking-tight relative group">
            WE DO
            <span className="absolute -bottom-8 -right-12 w-16 h-16 border-4 border-primary transition-transform duration-500 group-hover:rotate-[60deg] rotate-12 cursor-pointer" />
          </span>
        </h1>

        {/* Decorative line */}
        <div
          className={`w-32 h-1 bg-primary my-10 transform transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
          } origin-left`}
        />

        {/* Subheading */}
        <p
          className={`text-center max-w-2xl text-lg sm:text-xl font-medium text-muted-foreground mb-16 transform transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Every corner of itlikeapro.com, in one place. Pick a door.
        </p>

        {/* Subdomain Cards */}
        <div className="w-full max-w-3xl flex flex-col gap-8">
          {subdomains.map((s, i) => (
            <a
              key={s.host}
              href={s.href}
              target={s.external ? "_blank" : undefined}
              rel={s.external ? "noopener noreferrer" : undefined}
              className={`group block border-4 border-primary bg-background p-8 hover:shadow-2xl hover:-translate-y-2 transition-all transform duration-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? "0ms" : `${500 + i * 150}ms` }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="inline-block bg-accent text-accent-foreground px-3 py-1 text-xs font-black uppercase tracking-[0.2em] mb-4">
                    {s.tag}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black tracking-tight leading-none mb-2">
                    {s.name}
                  </h2>
                  <div className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                    {s.host}
                  </div>
                  <p className="max-w-xl font-medium text-muted-foreground">
                    {s.description}
                  </p>
                </div>
                <ArrowUpRight
                  size={32}
                  strokeWidth={3}
                  className="shrink-0 mt-1 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </div>
            </a>
          ))}
        </div>

        {/* Redirect note */}
        <p
          className={`mt-16 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground transform transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          itlikeapro.com and www.itlikeapro.com land here.
        </p>
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t-4 border-primary bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            © 2025 DO IT LIKE A PRO. ALL RIGHTS RESERVED.
          </div>
          <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            CRAFTED WITH INTENTION
          </div>
        </div>
      </footer>
    </main>
  );
}
