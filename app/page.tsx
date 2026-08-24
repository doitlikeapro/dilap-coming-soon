"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Linkedin, Mail, Phone } from "lucide-react";
import { sites, experience, projects, skills, education, bio, quote } from "./portfolio-data";

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-block border-4 border-primary px-4 py-1 mb-8">
      <span className="text-sm font-black uppercase tracking-[0.2em]">{children}</span>
    </div>
  );
}

export default function BrutalistPortfolioPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fade = (delay: string) =>
    `transform transition-all duration-1000 ${delay} ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
    }`;

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
        <div className="max-w-4xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="text-xl font-black tracking-tight">BRAMHANK MISHRA</div>
          <nav className="hidden md:flex gap-6 text-sm font-semibold uppercase tracking-wider">
            <a href="#home" className="hover:opacity-50 transition-opacity">HOME</a>
            <a href="#sites" className="hover:opacity-50 transition-opacity">SITES</a>
            <a href="#experience" className="hover:opacity-50 transition-opacity">WORK</a>
            <a href="#projects" className="hover:opacity-50 transition-opacity">PROJECTS</a>
            <a href="#skills" className="hover:opacity-50 transition-opacity">SKILLS</a>
          </nav>
        </div>
      </header>

      <div className="relative z-10 max-w-4xl mx-auto px-6" id="home">
        {/* Hero */}
        <section className={`pt-16 pb-14 ${fade("")}`}>
          <div className="flex items-center gap-6 mb-6 flex-wrap">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/avatar-sprite.png"
              alt="Bramhank Mishra"
              className="w-24 h-24 border-4 border-primary [image-rendering:pixelated]"
            />
            <div>
              <h1 className="text-4xl sm:text-5xl font-black leading-none tracking-tight">
                BRAMHANK
                <br />
                MISHRA
              </h1>
            </div>
          </div>
          <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
            Builder 👷🏻 · Full-Stack Developer ·{" "}
            <a href="mailto:bramhankmishra12b@gmail.com" className="underline underline-offset-4">
              bramhankmishra12b@gmail.com
            </a>
          </p>
          <p className="max-w-2xl text-lg font-medium text-muted-foreground mb-6">{bio}</p>
          <p className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] mb-8">
            <span className="w-3 h-3 bg-accent animate-pulse" />
            Available part-time · Remote · India
          </p>
          <div className="flex gap-4 flex-wrap">
            <a
              href="https://www.linkedin.com/in/bramhank-mishra/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-4 border-primary p-2.5 hover:shadow-2xl hover:-translate-y-1 hover:rotate-3 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} strokeWidth={3} />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.bramhank.screenshotbookmark"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-4 border-primary p-2.5 hover:shadow-2xl hover:-translate-y-1 hover:rotate-3 transition-all"
              aria-label="Google Play"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35l13.69 8.5v.7l-13.69 8.5c-.5-.24-.84-.76-.84-1.35zm16.81-8.94l-2.72-1.69-2.35 2.13 2.35 2.13 2.72-1.69c.63-.39.63-1.49 0-1.88h-.001z" />
              </svg>
            </a>
            <a
              href="mailto:bramhankmishra12b@gmail.com"
              className="inline-block border-4 border-primary p-2.5 hover:shadow-2xl hover:-translate-y-1 hover:rotate-3 transition-all"
              aria-label="Email"
            >
              <Mail size={18} strokeWidth={3} />
            </a>
            <a
              href="tel:+918810830562"
              className="inline-block border-4 border-primary p-2.5 hover:shadow-2xl hover:-translate-y-1 hover:rotate-3 transition-all"
              aria-label="Phone"
            >
              <Phone size={18} strokeWidth={3} />
            </a>
          </div>
        </section>

        {/* Sites */}
        <section id="sites" className={`pb-14 ${fade("delay-200")}`}>
          <SectionHeading>Sites</SectionHeading>
          <div className="flex flex-col gap-6">
            {sites.map((s) => (
              <a
                key={s.host}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group block border-4 border-primary bg-background p-6 hover:shadow-2xl hover:-translate-y-1 transition-all"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span
                      className={`inline-block px-3 py-1 text-xs font-black uppercase tracking-[0.2em] mb-3 ${
                        s.live
                          ? "bg-accent text-accent-foreground"
                          : "border-2 border-primary text-foreground"
                      }`}
                    >
                      {s.live ? "LIVE" : "COMING SOON"}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black tracking-tight leading-none mb-2">
                      {s.host}
                    </h3>
                    <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                      {s.kind}
                    </div>
                    <p className="max-w-xl font-medium text-muted-foreground text-sm">{s.description}</p>
                  </div>
                  <ArrowUpRight
                    size={28}
                    strokeWidth={3}
                    className="shrink-0 mt-1 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className={`pb-14 ${fade("delay-300")}`}>
          <SectionHeading>Experience</SectionHeading>
          <div className="flex flex-col gap-6">
            {experience.map((xp) => (
              <div key={xp.company + xp.role} className="border-4 border-primary p-6">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <h3 className="text-lg font-black tracking-tight flex items-center gap-3 flex-wrap">
                      {xp.company.toUpperCase()}
                      {xp.working && (
                        <span className="bg-accent text-accent-foreground px-2 py-0.5 text-[10px] font-black uppercase tracking-[0.2em]">
                          Working
                        </span>
                      )}
                    </h3>
                    <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mt-1">
                      {xp.role}
                    </p>
                  </div>
                  <div className="text-right text-xs font-semibold uppercase tracking-wider text-muted-foreground shrink-0">
                    <p>{xp.period}</p>
                    <p>{xp.location}</p>
                  </div>
                </div>
                <ul className="mt-4 flex flex-col gap-1.5 pl-5 list-[square] text-sm font-medium text-muted-foreground">
                  {xp.details.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className={`pb-14 ${fade("delay-400")}`}>
          <SectionHeading>Projects</SectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {projects.map((p) =>
              p.href ? (
                <a
                  key={p.title}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group border-4 border-primary p-6 hover:shadow-2xl hover:-translate-y-1 transition-all"
                >
                  <h3 className="font-black tracking-tight flex items-center justify-between gap-2">
                    {p.title}
                    <ArrowUpRight size={18} strokeWidth={3} className="shrink-0" />
                  </h3>
                  <p className="mt-2 text-sm font-medium text-muted-foreground">{p.description}</p>
                </a>
              ) : (
                <div key={p.title} className="border-4 border-primary p-6">
                  <h3 className="font-black tracking-tight">{p.title}</h3>
                  <p className="mt-2 text-sm font-medium text-muted-foreground">{p.description}</p>
                </div>
              )
            )}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className={`pb-14 ${fade("delay-500")}`}>
          <SectionHeading>Skills</SectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((s) => (
              <div key={s.title} className="border-4 border-primary p-5">
                <h3 className="font-black tracking-tight text-sm uppercase">{s.title}</h3>
                <p className="mt-2 text-sm font-medium text-muted-foreground">{s.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section id="education" className={`pb-14 ${fade("delay-600")}`}>
          <SectionHeading>Education</SectionHeading>
          <div className="border-4 border-primary p-6 flex items-start justify-between gap-4 flex-wrap">
            <div>
              <h3 className="text-lg font-black tracking-tight">
                {education.school.toUpperCase()}
              </h3>
              <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mt-1">
                {education.degree}
              </p>
            </div>
            <div className="text-right text-xs font-semibold uppercase tracking-wider text-muted-foreground shrink-0">
              <p>{education.period}</p>
              <p>{education.location}</p>
            </div>
          </div>
        </section>

        {/* Quote */}
        <figure className={`border-4 border-primary p-8 mb-16 font-mono ${fade("delay-700")}`}>
          <blockquote className="text-sm italic text-muted-foreground">{quote.text}</blockquote>
          <figcaption className="text-right text-xs italic text-muted-foreground mt-2">
            {quote.source}
          </figcaption>
        </figure>
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t-4 border-primary bg-background">
        <div className="max-w-4xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            © 2026 BRAMHANK MISHRA. ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            <a href="https://connect.itlikeapro.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-50 transition-opacity">CONNECT</a>
            <a href="https://wash.itlikeapro.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-50 transition-opacity">WASH</a>
            <a href="/coming-soon" className="hover:opacity-50 transition-opacity">DO IT LIKE A PRO</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
