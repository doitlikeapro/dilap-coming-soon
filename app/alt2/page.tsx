"use client";

/* Option C — Bramhank's portfolio with a Sites (subdomain directory) section added.
   Markup and styles ported from the bramhank.does.itlikeapro.com static site;
   selectors are scoped under .bp so they don't leak into other routes. */

const css = `
.bp {
  --bg: #fafafa;
  --bg-card: #ffffff;
  --text: #171717;
  --text-secondary: #525252;
  --text-muted: #a3a3a3;
  --border: #e5e5e5;
  --accent-bg: #dcfce7;
  --accent-fg: #166534;
  --accent-dot: #22c55e;
  --hover-bg: #f5f5f5;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  background: var(--bg);
  color: var(--text);
  line-height: 1.6;
  font-size: 15px;
  min-height: 100vh;
}
.bp * { margin: 0; padding: 0; box-sizing: border-box; }
.bp a { color: inherit; text-decoration: none; }
.bp .container { max-width: 640px; margin: 0 auto; padding: 0 1.25rem; }
.bp section { margin-bottom: 3.5rem; }
.bp h2 { font-size: 1.35rem; font-weight: 700; letter-spacing: -0.02em; margin-bottom: 1.25rem; }
.bp .site-header { position: sticky; top: 0; z-index: 10; background: color-mix(in srgb, var(--bg) 85%, transparent); backdrop-filter: blur(8px); }
.bp .nav { max-width: 640px; margin: 0 auto; padding: 0.9rem 1.25rem; display: flex; align-items: center; justify-content: space-between; }
.bp .nav-links { display: flex; gap: 1.1rem; }
.bp .nav-links a { font-size: 0.875rem; color: var(--text-secondary); transition: color 0.15s ease; }
.bp .nav-links a:hover { color: var(--text); }
.bp .hero { padding-top: 3rem; }
.bp .hero-top { display: flex; align-items: center; gap: 1.25rem; margin-bottom: 1.25rem; }
.bp .avatar { width: 72px; height: 72px; flex-shrink: 0; border-radius: 50%; object-fit: cover; image-rendering: pixelated; }
.bp .hero-id h1 { font-size: 1.65rem; font-weight: 800; letter-spacing: -0.03em; line-height: 1.2; }
.bp .hero-tagline { font-size: 0.9rem; color: var(--text-secondary); margin-top: 0.35rem; }
.bp .email-link { text-decoration: underline; text-underline-offset: 3px; text-decoration-color: var(--text-muted); }
.bp .email-link:hover { text-decoration-color: var(--text); }
.bp .hero-bio { color: var(--text-secondary); font-size: 0.95rem; }
.bp .hero-status { display: flex; align-items: center; gap: 0.5rem; margin-top: 0.85rem; font-size: 0.85rem; color: var(--text-secondary); }
.bp .dot { width: 8px; height: 8px; border-radius: 50%; background: var(--accent-dot); animation: bp-pulse 2s infinite; }
@keyframes bp-pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
.bp .socials { display: flex; gap: 0.4rem; margin-top: 1.1rem; margin-bottom: 3.5rem; }
.bp .socials a { display: inline-flex; align-items: center; justify-content: center; width: 30px; height: 30px; border-radius: 8px; color: var(--text-muted); transition: background 0.15s ease, color 0.15s ease; }
.bp .socials a:hover { background: var(--hover-bg); color: var(--text); }
.bp .xp { display: flex; flex-direction: column; gap: 1.75rem; }
.bp .xp-row { display: flex; justify-content: space-between; gap: 1rem; }
.bp .xp-left h3 { font-size: 1rem; font-weight: 600; letter-spacing: -0.01em; display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap; }
.bp .xp-role { font-size: 0.875rem; color: var(--text-secondary); margin-top: 0.15rem; }
.bp .xp-details { margin-top: 0.6rem; padding-left: 1.1rem; font-size: 0.85rem; color: var(--text-secondary); display: flex; flex-direction: column; gap: 0.3rem; }
.bp .xp-right { text-align: right; font-size: 0.8rem; color: var(--text-muted); white-space: nowrap; flex-shrink: 0; }
.bp .badge { display: inline-flex; align-items: center; gap: 0.35rem; font-size: 0.7rem; font-weight: 500; padding: 0.15rem 0.55rem; border-radius: 999px; background: var(--accent-bg); color: var(--accent-fg); }
.bp .badge-muted { background: var(--hover-bg); color: var(--text-secondary); }
.bp .badge-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--accent-dot); }
.bp .cards { display: flex; flex-direction: column; gap: 0.75rem; }
.bp .card { display: block; background: var(--bg-card); border: 1px solid var(--border); border-radius: 12px; padding: 0.9rem 1.1rem; transition: border-color 0.15s ease, background 0.15s ease; }
.bp a.card:hover { border-color: var(--text-muted); }
.bp .card h3 { font-size: 0.95rem; font-weight: 600; letter-spacing: -0.01em; display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap; }
.bp .card p { font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.25rem; }
.bp .card-arrow { color: var(--text-muted); font-size: 0.85rem; }
.bp .quote { background: var(--bg-card); border: 1px solid var(--border); border-radius: 12px; padding: 1.5rem 1.75rem; margin: 4rem 0 3rem; font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace; }
.bp .quote blockquote { font-size: 0.9rem; font-style: italic; color: var(--text-secondary); }
.bp .quote figcaption { text-align: right; font-size: 0.8rem; font-style: italic; color: var(--text-muted); margin-top: 0.5rem; }
.bp .site-footer { border-top: 1px solid var(--border); padding: 2.5rem 0 2rem; }
.bp .footer-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; }
.bp .site-footer h4 { font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: var(--text-muted); margin-bottom: 0.75rem; }
.bp .footer-links { display: flex; flex-wrap: wrap; gap: 0.35rem 1rem; font-size: 0.85rem; color: var(--text-secondary); }
.bp .footer-links a:hover { color: var(--text); }
.bp .copyright { margin-top: 2.5rem; font-size: 0.8rem; color: var(--text-muted); }
@media (max-width: 540px) {
  .bp .xp-row { flex-direction: column; gap: 0.35rem; }
  .bp .xp-right { text-align: left; display: flex; gap: 0.75rem; }
  .bp .hero-top { flex-direction: column; align-items: flex-start; gap: 0.9rem; }
  .bp .footer-grid { grid-template-columns: 1fr; }
}
`;

const sites = [
  {
    host: "connect.itlikeapro.com",
    href: "https://connect.itlikeapro.com",
    live: true,
    description:
      "Self-hosted, open-source MCP gateway that lets Claude use many accounts of the same service — multiple Gmails, Slacks, GitHubs — through a single connector.",
  },
  {
    host: "wash.itlikeapro.com",
    href: "https://wash.itlikeapro.com",
    live: true,
    description:
      "Laundry pickup, washing, and delivery — booked through a simple WhatsApp-based ordering page.",
  },
  {
    host: "do.itlikeapro.com",
    href: "/coming-soon",
    live: false,
    description:
      "Do It Like A Pro — master your craft at the highest level. Register to be notified when it launches.",
  },
];

export default function PortfolioDirectoryPage() {
  return (
    <div className="bp">
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <header className="site-header">
        <nav className="nav">
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#sites">Sites</a>
            <a href="#experience">Work</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
          </div>
        </nav>
      </header>

      <main className="container" id="home">
        <section className="hero">
          <div className="hero-top">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="avatar" src="/avatar-sprite.png" alt="Bramhank Mishra" />
            <div className="hero-id">
              <h1>Bramhank Mishra</h1>
              <p className="hero-tagline">
                Builder 👷🏻 · Full-Stack Developer ·{" "}
                <a href="mailto:bramhankmishra12b@gmail.com" className="email-link">
                  bramhankmishra12b@gmail.com
                </a>
              </p>
            </div>
          </div>
          <p className="hero-bio">
            Full-stack web developer &amp; technical operations. I build websites,
            apps, and automations — and take ownership from ideation to deployment.
          </p>
          <p className="hero-status">
            <span className="dot" /> Available part-time · Remote · India
          </p>
          <div className="socials">
            <a href="https://www.linkedin.com/in/bramhank-mishra/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.bramhank.screenshotbookmark" target="_blank" rel="noopener noreferrer" aria-label="Google Play" title="My app on Google Play">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M3 20.5v-17c0-.59.34-1.11.84-1.35l13.69 8.5v.7l-13.69 8.5c-.5-.24-.84-.76-.84-1.35zm16.81-8.94l-2.72-1.69-2.35 2.13 2.35 2.13 2.72-1.69c.63-.39.63-1.49 0-1.88h-.001z"/></svg>
            </a>
            <a href="mailto:bramhankmishra12b@gmail.com" aria-label="Email" title="Email">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </a>
            <a href="tel:+918810830562" aria-label="Phone" title="Call me">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </a>
          </div>
        </section>

        <section id="sites">
          <h2>Sites</h2>
          <div className="cards">
            {sites.map((s) => (
              <a
                key={s.host}
                className="card"
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                <h3>
                  {s.host}{" "}
                  {s.live ? (
                    <span className="badge">
                      <span className="badge-dot" />
                      Live
                    </span>
                  ) : (
                    <span className="badge badge-muted">Coming soon</span>
                  )}{" "}
                  <span className="card-arrow">↗</span>
                </h3>
                <p>{s.description}</p>
              </a>
            ))}
          </div>
        </section>

        <section id="experience">
          <h2>Experience</h2>
          <div className="xp">
            <div className="xp-row">
              <div className="xp-left">
                <h3>
                  Eurospeak Language School{" "}
                  <span className="badge">
                    <span className="badge-dot" />
                    Working
                  </span>
                </h3>
                <p className="xp-role">Full-Stack Web Developer</p>
                <ul className="xp-details">
                  <li>Built and maintain production websites for Eurospeak, BigBucket, Euroreach, and other Erasmus project platforms.</li>
                  <li>Developed multilingual systems, LMS platforms, and custom integrations across MERN, WordPress, and Firebase stacks.</li>
                  <li>Manage GoDaddy server configuration, deployments, and site performance optimisation.</li>
                </ul>
              </div>
              <div className="xp-right">
                <p>May 2024 – Present</p>
                <p>Remote</p>
              </div>
            </div>

            <div className="xp-row">
              <div className="xp-left">
                <h3>
                  Erasmus Project Platforms{" "}
                  <span className="badge">
                    <span className="badge-dot" />
                    Working
                  </span>
                </h3>
                <p className="xp-role">Technical Operations &amp; Automation</p>
                <ul className="xp-details">
                  <li>Contribute to development and maintenance of the Democracy Tree App as part of an Erasmus project.</li>
                  <li>Built Zoho CRM workflows aligned with day-to-day operational requirements.</li>
                  <li>Automated recurring processes with Zapier and JotForm, cutting manual handling time.</li>
                </ul>
              </div>
              <div className="xp-right">
                <p>May 2024 – Present</p>
                <p>Remote</p>
              </div>
            </div>

            <div className="xp-row">
              <div className="xp-left">
                <h3>Independent</h3>
                <p className="xp-role">Android App Developer</p>
                <ul className="xp-details">
                  <li>Designed, built, and published a productivity app on the Google Play Store, solo — architecture, UI/UX, release management.</li>
                  <li>On-device OCR and AI-based categorisation across five languages; fully offline, no accounts, no data collection.</li>
                </ul>
              </div>
              <div className="xp-right">
                <p>2025 – Present</p>
                <p>India</p>
              </div>
            </div>
          </div>
        </section>

        <section id="projects">
          <h2>Projects</h2>
          <div className="cards">
            <a className="card" href="https://play.google.com/store/apps/details?id=com.bramhank.screenshotbookmark" target="_blank" rel="noopener noreferrer">
              <h3>
                Screenshot Organizer &amp; Search <span className="card-arrow">↗</span>
              </h3>
              <p>Android app that auto-organises screenshots and makes their text searchable. On-device OCR, AI categorisation, five languages, fully offline. Live on Google Play.</p>
            </a>
            <div className="card">
              <h3>Kissan Connect 🏆</h3>
              <p>Farmer-centric mobile app. National winner at MSME Idea Hackathon 4.0 — awarded a ₹5 lakh government grant for innovation in Indian agriculture.</p>
            </div>
            <a className="card" href="https://play.google.com/store/apps/details?id=com.democracytree" target="_blank" rel="noopener noreferrer">
              <h3>
                Democracy Tree App <span className="card-arrow">↗</span>
              </h3>
              <p>Erasmus project app on Google Play — contributed to development and ongoing maintenance.</p>
            </a>
            <div className="card">
              <h3>Baigan Bytes 🍆</h3>
              <p>A daily computer-science newsletter — exciting and humorous articles that make CS concepts stick.</p>
            </div>
          </div>
        </section>

        <section id="skills">
          <h2>Skills</h2>
          <div className="cards">
            <div className="card">
              <h3>Full-Stack Development</h3>
              <p>MERN stack, WordPress, Firebase — from architecture to deployment.</p>
            </div>
            <div className="card">
              <h3>Servers &amp; Deployment</h3>
              <p>GoDaddy server management, configuration, and performance optimisation.</p>
            </div>
            <div className="card">
              <h3>Zoho CRM</h3>
              <p>CRM development and workflow design aligned with real operations.</p>
            </div>
            <div className="card">
              <h3>Automation</h3>
              <p>Zapier and JotForm pipelines that remove manual, repetitive work.</p>
            </div>
            <div className="card">
              <h3>Design</h3>
              <p>Canva and Figma for content and UI/UX design.</p>
            </div>
            <div className="card">
              <h3>Productivity Tooling</h3>
              <p>Google Workspace and Microsoft tools.</p>
            </div>
          </div>
        </section>

        <section id="education">
          <h2>Education</h2>
          <div className="xp-row">
            <div className="xp-left">
              <h3>Lovely Professional University</h3>
              <p className="xp-role">Bachelor of Computer Applications · 9.33 GPA</p>
            </div>
            <div className="xp-right">
              <p>2022 – 2025</p>
              <p>Punjab, India</p>
            </div>
          </div>
        </section>

        <figure className="quote">
          <blockquote>&quot;You have the right to work, but never to the fruit of work.&quot;</blockquote>
          <figcaption>— Bhagavad Gita</figcaption>
        </figure>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <h4>Navigate</h4>
            <div className="footer-links">
              <a href="#home">Home</a>
              <a href="#sites">Sites</a>
              <a href="#experience">Work</a>
              <a href="#projects">Projects</a>
              <a href="#skills">Skills</a>
              <a href="#education">Education</a>
            </div>
          </div>
          <div>
            <h4>Sites</h4>
            <div className="footer-links">
              <a href="https://connect.itlikeapro.com" target="_blank" rel="noopener noreferrer">connect</a>
              <a href="https://wash.itlikeapro.com" target="_blank" rel="noopener noreferrer">wash</a>
              <a href="/coming-soon">do it like a pro</a>
            </div>
          </div>
        </div>
        <div className="container copyright">
          <p>© 2026 Bramhank Mishra. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
