"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const subdomains = [
  {
    tag: "MCP Gateway",
    name: "connect",
    host: "connect.itlikeapro.com",
    href: "https://connect.itlikeapro.com",
    external: true,
    description:
      "A self-hosted, open-source MCP gateway that lets Claude use many accounts of the same service — multiple Gmails, Slacks, GitHubs — through a single connector.",
  },
  {
    tag: "Laundry Service",
    name: "wash",
    host: "wash.itlikeapro.com",
    href: "https://wash.itlikeapro.com",
    external: true,
    description:
      "Laundry pickup, washing, and delivery — booked through a simple WhatsApp-based ordering page.",
  },
  {
    tag: "Coming Soon",
    name: "the platform",
    host: "do.itlikeapro.com/coming-soon",
    href: "/coming-soon",
    external: false,
    description:
      "The main event. Master your craft at the highest level — register to be notified when we launch.",
  },
];

export default function AltDirectoryPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="min-h-screen bg-[#0c0e12] text-[#e8eaee] flex flex-col">
      <header className="border-b border-[#262b36]">
        <div className="max-w-3xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="font-bold tracking-tight text-lg">
            do<span className="text-[#8fa4ff]">itlikeapro</span>.com
          </div>
          <nav className="hidden sm:flex gap-6 text-sm text-[#9299a5]">
            {subdomains.map((s) => (
              <a
                key={s.name}
                href={s.href}
                className="hover:text-[#e8eaee] transition-colors"
              >
                {s.name}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <div className="flex-1">
        <div className="max-w-3xl mx-auto px-6">
          <section className="pt-20 pb-14 text-center">
            <h1
              className={`text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              One domain.
              <br />
              <span className="text-[#8fa4ff]">Everything we're building.</span>
            </h1>
            <p
              className={`mt-5 max-w-xl mx-auto text-lg text-[#9299a5] transition-all duration-700 delay-150 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              A live index of every subdomain on itlikeapro.com and what it's
              for.
            </p>
          </section>

          <section className="pb-20 flex flex-col gap-4">
            {subdomains.map((s, i) => (
              <a
                key={s.host}
                href={s.href}
                target={s.external ? "_blank" : undefined}
                rel={s.external ? "noopener noreferrer" : undefined}
                className={`group block rounded-2xl border border-[#262b36] bg-[#171a22] p-6 sm:p-7 transition-all duration-500 hover:border-[#8fa4ff] hover:bg-[#1c2029] ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${250 + i * 120}ms` }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-baseline gap-3 flex-wrap">
                      <span className="text-xl font-bold tracking-tight text-[#8fa4ff]">
                        {s.host}
                      </span>
                      <span className="text-[11px] uppercase tracking-[0.08em] text-[#9299a5] border border-[#262b36] rounded-full px-2.5 py-0.5">
                        {s.tag}
                      </span>
                    </div>
                    <p className="mt-2.5 text-[15px] leading-relaxed text-[#9299a5]">
                      {s.description}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={22}
                    className="shrink-0 mt-1.5 text-[#9299a5] transition-all group-hover:text-[#8fa4ff] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
              </a>
            ))}
          </section>
        </div>
      </div>

      <footer className="border-t border-[#262b36]">
        <div className="max-w-3xl mx-auto px-6 py-6 text-center text-sm text-[#9299a5]">
          <code className="text-[#e8eaee]">itlikeapro.com</code> and{" "}
          <code className="text-[#e8eaee]">www.itlikeapro.com</code> redirect
          here.
        </div>
      </footer>
    </main>
  );
}
