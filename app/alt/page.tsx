"use client";

import { ArrowUpRight, Linkedin, Mail, Phone } from "lucide-react";
import { sites, experience, projects, skills, education, bio, quote } from "../portfolio-data";

const c = {
  bg: "#0c0e12",
  panel: "#171a22",
  panelHover: "#1c2029",
  line: "#262b36",
  text: "#e8eaee",
  muted: "#9299a5",
  accent: "#8fa4ff",
  good: "#4cc38a",
};

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl font-bold tracking-tight mb-5">
      <span style={{ color: c.accent }}>#</span> {children}
    </h2>
  );
}

export default function DarkPortfolioPage() {
  return (
    <main
      className="min-h-screen"
      style={{ background: c.bg, color: c.text }}
    >
      {/* Header */}
      <header className="sticky top-0 z-10 backdrop-blur-md" style={{ background: "rgba(12,14,18,0.85)", borderBottom: `1px solid ${c.line}` }}>
        <nav className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="font-bold tracking-tight">
            bramhank<span style={{ color: c.accent }}>mishra</span>
          </div>
          <div className="hidden sm:flex gap-5 text-sm" style={{ color: c.muted }}>
            <a href="#home" className="hover:text-white transition-colors">home</a>
            <a href="#sites" className="hover:text-white transition-colors">sites</a>
            <a href="#experience" className="hover:text-white transition-colors">work</a>
            <a href="#projects" className="hover:text-white transition-colors">projects</a>
            <a href="#skills" className="hover:text-white transition-colors">skills</a>
          </div>
        </nav>
      </header>

      <div className="max-w-3xl mx-auto px-6" id="home">
        {/* Hero */}
        <section className="pt-14 pb-12">
          <div className="flex items-center gap-5 mb-5 flex-wrap">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/avatar-sprite.png"
              alt="Bramhank Mishra"
              className="w-20 h-20 rounded-full [image-rendering:pixelated]"
              style={{ border: `1px solid ${c.line}` }}
            />
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                Bramhank Mishra
              </h1>
              <p className="mt-1 text-sm" style={{ color: c.muted }}>
                Builder 👷🏻 · Full-Stack Developer ·{" "}
                <a
                  href="mailto:bramhankmishra12b@gmail.com"
                  className="underline underline-offset-4"
                  style={{ color: c.accent }}
                >
                  bramhankmishra12b@gmail.com
                </a>
              </p>
            </div>
          </div>
          <p className="max-w-2xl" style={{ color: c.muted }}>{bio}</p>
          <p className="mt-4 flex items-center gap-2 text-sm" style={{ color: c.muted }}>
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: c.good }} />
            Available part-time · Remote · India
          </p>
          <div className="mt-5 flex gap-2">
            <a
              href="https://www.linkedin.com/in/bramhank-mishra/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex items-center justify-center w-9 h-9 rounded-lg transition-colors hover:text-white"
              style={{ border: `1px solid ${c.line}`, color: c.muted }}
            >
              <Linkedin size={16} />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.bramhank.screenshotbookmark"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google Play"
              className="inline-flex items-center justify-center w-9 h-9 rounded-lg transition-colors hover:text-white"
              style={{ border: `1px solid ${c.line}`, color: c.muted }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35l13.69 8.5v.7l-13.69 8.5c-.5-.24-.84-.76-.84-1.35zm16.81-8.94l-2.72-1.69-2.35 2.13 2.35 2.13 2.72-1.69c.63-.39.63-1.49 0-1.88h-.001z" />
              </svg>
            </a>
            <a
              href="mailto:bramhankmishra12b@gmail.com"
              aria-label="Email"
              className="inline-flex items-center justify-center w-9 h-9 rounded-lg transition-colors hover:text-white"
              style={{ border: `1px solid ${c.line}`, color: c.muted }}
            >
              <Mail size={16} />
            </a>
            <a
              href="tel:+918810830562"
              aria-label="Phone"
              className="inline-flex items-center justify-center w-9 h-9 rounded-lg transition-colors hover:text-white"
              style={{ border: `1px solid ${c.line}`, color: c.muted }}
            >
              <Phone size={16} />
            </a>
          </div>
        </section>

        {/* Sites */}
        <section id="sites" className="pb-12">
          <SectionHeading>sites</SectionHeading>
          <div className="flex flex-col gap-4">
            {sites.map((s) => (
              <a
                key={s.host}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group block rounded-2xl p-6 transition-colors"
                style={{ background: c.panel, border: `1px solid ${c.line}` }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-baseline gap-3 flex-wrap">
                      <span className="text-lg font-bold tracking-tight" style={{ color: c.accent }}>
                        {s.host}
                      </span>
                      <span
                        className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.08em] rounded-full px-2.5 py-0.5"
                        style={
                          s.live
                            ? { border: `1px solid ${c.line}`, color: c.good }
                            : { border: `1px solid ${c.line}`, color: c.muted }
                        }
                      >
                        {s.live && <span className="w-1.5 h-1.5 rounded-full" style={{ background: c.good }} />}
                        {s.live ? "Live" : "Coming soon"}
                      </span>
                    </div>
                    <div className="mt-1 text-xs uppercase tracking-[0.08em]" style={{ color: c.muted }}>
                      {s.kind}
                    </div>
                    <p className="mt-2 text-[15px] leading-relaxed" style={{ color: c.muted }}>
                      {s.description}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={20}
                    className="shrink-0 mt-1.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    style={{ color: c.muted }}
                  />
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="pb-12">
          <SectionHeading>work</SectionHeading>
          <div className="flex flex-col gap-4">
            {experience.map((xp) => (
              <div
                key={xp.company + xp.role}
                className="rounded-2xl p-6"
                style={{ background: c.panel, border: `1px solid ${c.line}` }}
              >
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <h3 className="font-bold tracking-tight flex items-center gap-2.5 flex-wrap">
                      {xp.company}
                      {xp.working && (
                        <span
                          className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.08em] rounded-full px-2.5 py-0.5"
                          style={{ border: `1px solid ${c.line}`, color: c.good }}
                        >
                          <span className="w-1.5 h-1.5 rounded-full" style={{ background: c.good }} />
                          Working
                        </span>
                      )}
                    </h3>
                    <p className="text-sm mt-0.5" style={{ color: c.muted }}>{xp.role}</p>
                  </div>
                  <div className="text-right text-xs shrink-0" style={{ color: c.muted }}>
                    <p>{xp.period}</p>
                    <p>{xp.location}</p>
                  </div>
                </div>
                <ul className="mt-3 flex flex-col gap-1.5 pl-5 list-disc text-sm" style={{ color: c.muted }}>
                  {xp.details.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="pb-12">
          <SectionHeading>projects</SectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {projects.map((p) =>
              p.href ? (
                <a
                  key={p.title}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-2xl p-6 transition-colors"
                  style={{ background: c.panel, border: `1px solid ${c.line}` }}
                >
                  <h3 className="font-bold tracking-tight flex items-center justify-between gap-2">
                    {p.title}
                    <ArrowUpRight size={16} className="shrink-0" style={{ color: c.muted }} />
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: c.muted }}>{p.description}</p>
                </a>
              ) : (
                <div
                  key={p.title}
                  className="rounded-2xl p-6"
                  style={{ background: c.panel, border: `1px solid ${c.line}` }}
                >
                  <h3 className="font-bold tracking-tight">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: c.muted }}>{p.description}</p>
                </div>
              )
            )}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="pb-12">
          <SectionHeading>skills</SectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skills.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl p-5"
                style={{ background: c.panel, border: `1px solid ${c.line}` }}
              >
                <h3 className="font-bold tracking-tight text-sm">{s.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed" style={{ color: c.muted }}>{s.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section id="education" className="pb-12">
          <SectionHeading>education</SectionHeading>
          <div
            className="rounded-2xl p-6 flex items-start justify-between gap-4 flex-wrap"
            style={{ background: c.panel, border: `1px solid ${c.line}` }}
          >
            <div>
              <h3 className="font-bold tracking-tight">{education.school}</h3>
              <p className="text-sm mt-0.5" style={{ color: c.muted }}>{education.degree}</p>
            </div>
            <div className="text-right text-xs shrink-0" style={{ color: c.muted }}>
              <p>{education.period}</p>
              <p>{education.location}</p>
            </div>
          </div>
        </section>

        {/* Quote */}
        <figure
          className="rounded-2xl p-7 mb-14 font-mono"
          style={{ background: c.panel, border: `1px solid ${c.line}` }}
        >
          <blockquote className="text-sm italic" style={{ color: c.muted }}>{quote.text}</blockquote>
          <figcaption className="text-right text-xs italic mt-2" style={{ color: c.muted }}>
            {quote.source}
          </figcaption>
        </figure>
      </div>

      {/* Footer */}
      <footer style={{ borderTop: `1px solid ${c.line}` }}>
        <div className="max-w-3xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-sm" style={{ color: c.muted }}>
          <p>© 2026 Bramhank Mishra. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="https://connect.itlikeapro.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">connect</a>
            <a href="https://wash.itlikeapro.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">wash</a>
            <a href="/coming-soon" className="hover:text-white transition-colors">do it like a pro</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
