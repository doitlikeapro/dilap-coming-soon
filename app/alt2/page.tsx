"use client";

import { ArrowUpRight } from "lucide-react";

const subdomains = [
  {
    name: "connect.itlikeapro.com",
    tag: "Live",
    live: true,
    kind: "MCP Gateway",
    href: "https://connect.itlikeapro.com",
    external: true,
    description:
      "A self-hosted, open-source MCP gateway that lets Claude use many accounts of the same service — multiple Gmails, Slacks, GitHubs — through a single connector.",
  },
  {
    name: "wash.itlikeapro.com",
    tag: "Live",
    live: true,
    kind: "Laundry Service",
    href: "https://wash.itlikeapro.com",
    external: true,
    description:
      "Laundry pickup, washing, and delivery — booked through a simple WhatsApp-based ordering page.",
  },
  {
    name: "the platform",
    tag: "Coming soon",
    live: false,
    kind: "The Main Event",
    href: "/coming-soon",
    external: false,
    description:
      "Master your craft at the highest level. Register to be notified when we launch.",
  },
];

export default function AltDirectoryTwoPage() {
  return (
    <main
      className="min-h-screen bg-[#fafafa] text-[#171717]"
      style={{
        fontFamily:
          'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      }}
    >
      {/* Sticky nav */}
      <header className="sticky top-0 z-10 bg-[#fafafa]/85 backdrop-blur-md">
        <nav className="max-w-[640px] mx-auto px-5 py-3.5 flex items-center gap-4 text-sm text-[#525252]">
          {subdomains.map((s) => (
            <a
              key={s.name}
              href={s.href}
              className="hover:text-[#171717] transition-colors"
            >
              {s.kind}
            </a>
          ))}
        </nav>
      </header>

      <div className="max-w-[640px] mx-auto px-5">
        {/* Hero */}
        <section className="pt-12 pb-12">
          <h1 className="text-[1.65rem] font-extrabold tracking-[-0.03em] leading-tight">
            itlikeapro.com
          </h1>
          <p className="mt-1.5 text-[0.9rem] text-[#525252]">
            Domain directory · everything we're building, in one place
          </p>
          <p className="mt-3.5 text-[0.95rem] text-[#525252]">
            Each subdomain is its own project. Pick one below — or register on
            the coming-soon page to hear about the main platform first.
          </p>
          <p className="mt-3.5 flex items-center gap-2 text-[0.85rem] text-[#525252]">
            <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
            2 sites live · 1 in the works
          </p>
        </section>

        {/* Cards */}
        <section className="pb-16 flex flex-col gap-3">
          {subdomains.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target={s.external ? "_blank" : undefined}
              rel={s.external ? "noopener noreferrer" : undefined}
              className="group block bg-white border border-[#e5e5e5] rounded-xl px-[1.1rem] py-[0.9rem] transition-colors hover:border-[#a3a3a3]"
            >
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-[0.95rem] font-semibold tracking-[-0.01em]">
                  {s.name}
                </h3>
                <span
                  className={`inline-flex items-center gap-1.5 text-[0.7rem] font-medium px-2 py-0.5 rounded-full ${
                    s.live
                      ? "bg-[#dcfce7] text-[#166534]"
                      : "bg-[#f5f5f5] text-[#525252]"
                  }`}
                >
                  {s.live && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]" />
                  )}
                  {s.tag}
                </span>
                <ArrowUpRight
                  size={14}
                  className="ml-auto text-[#a3a3a3] transition-colors group-hover:text-[#171717]"
                />
              </div>
              <p className="mt-1 text-[0.85rem] text-[#525252]">
                {s.description}
              </p>
            </a>
          ))}
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t border-[#e5e5e5] py-8">
        <div className="max-w-[640px] mx-auto px-5 text-[0.8rem] text-[#a3a3a3]">
          <p>
            itlikeapro.com and www.itlikeapro.com redirect here. © 2025 Do It
            Like A Pro.
          </p>
        </div>
      </footer>
    </main>
  );
}
