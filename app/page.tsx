"use client";

import { useEffect, useState, type ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

const subdomains = [
  {
    tag: "MCP GATEWAY",
    name: "CONNECT",
    host: "connect.itlikeapro.com",
    href: "https://connect.itlikeapro.com",
    external: true,
    dev: false,
    description:
      "A self-hosted, open-source MCP gateway that lets Claude use many accounts of the same service — multiple Gmails, Slacks, GitHubs — through a single connector.",
  },
  {
    tag: "WORDPRESS AI",
    name: "AI TUNNEL",
    host: "tunnel.itlikeapro.com",
    href: "https://tunnel.itlikeapro.com",
    external: true,
    dev: false,
    description:
      "A safe, permission-scoped door into WordPress for Claude, ChatGPT and any AI assistant — with the Guard add-on for spend limits and approvals.",
  },
  {
    tag: "CI AUTOMATION",
    name: "AO WATCHTOWER",
    host: "watchtower.itlikeapro.com",
    href: "https://watchtower.itlikeapro.com",
    external: true,
    dev: false,
    description:
      "Turns failed GitHub pull-request checks into supervised AI repairs. Self-hosted, one binary, approval-first, full audit ledger.",
  },
  {
    tag: "ANDROID APP",
    name: "SHOTBOX",
    host: "shotbox.itlikeapro.com",
    href: "https://shotbox.itlikeapro.com",
    external: true,
    dev: false,
    description:
      "Screenshots auto-sorted and searchable by the text inside them. 100% on-device — no cloud, no account, no ads. Live on Google Play.",
  },
  {
    tag: "EMAIL AI",
    name: "AUTODRAFT",
    host: "autodraft.itlikeapro.com",
    href: "https://autodraft.itlikeapro.com",
    external: true,
    dev: false,
    description:
      "A draft reply in your own style for every new Outlook email — read-and-draft permissions only, it physically cannot send. Ships with the Insights dashboard.",
  },
  {
    tag: "FLEET SECURITY",
    name: "EAGLE",
    host: "eagle.itlikeapro.com",
    href: "https://eagle.itlikeapro.com",
    external: true,
    dev: false,
    description:
      "WordPress fleet security: a read-only watchdog every 15 minutes plus Curfew, the out-of-hours editing lock.",
  },
  {
    tag: "BACKUPS",
    name: "BACKUP MCP",
    host: "backup.itlikeapro.com",
    href: "https://backup.itlikeapro.com",
    external: true,
    dev: false,
    description:
      "Full-site WordPress backups your AI assistant can drive — built for shared hosting, no SSH or WP-CLI needed.",
  },
  {
    tag: "SEO",
    name: "SEO PILOT",
    host: "seopilot.itlikeapro.com",
    href: "https://seopilot.itlikeapro.com",
    external: true,
    dev: false,
    description:
      "The SEO tool that grades its own advice: daily Google data, weekly AI analysis, every recommendation judged against real results.",
  },
  {
    tag: "FLEET OPS",
    name: "TGFLEET",
    host: "tgfleet.itlikeapro.com",
    href: "https://tgfleet.itlikeapro.com",
    external: true,
    dev: false,
    description:
      "Run your whole WordPress fleet from one Telegram chat — reads are instant, changes wait for your Approve button.",
  },
  {
    tag: "LAUNDRY SERVICE",
    name: "WASH",
    host: "wash.itlikeapro.com",
    href: "https://wash.itlikeapro.com",
    external: true,
    dev: false,
    description:
      "Laundry pickup, washing, and delivery — booked through a simple WhatsApp-based ordering page.",
  },
  {
    tag: "PORTFOLIO",
    name: "BRAMHANK",
    host: "bramhank.does.itlikeapro.com",
    href: "https://bramhank.does.itlikeapro.com",
    external: true,
    dev: false,
    description:
      "Bramhank Mishra — full-stack web developer & technical operations. Experience, projects, and skills.",
  },
  {
    tag: "IN DEVELOPMENT",
    name: "FLOWS",
    host: "flows.itlikeapro.com",
    href: "https://flows.itlikeapro.com",
    external: true,
    dev: true,
    description:
      "Done-for-you business automation: workflows designed, hosted and monitored on hardened infrastructure. Founding waitlist open.",
  },
  {
    tag: "IN DEVELOPMENT",
    name: "WTWT",
    host: "wtwt.itlikeapro.com",
    href: "https://wtwt.itlikeapro.com",
    external: true,
    dev: true,
    description:
      "What To Wear Today — a digital closet that reasons over your real wardrobe. Android app in final testing.",
  },
  {
    tag: "IN DEVELOPMENT",
    name: "LINGO",
    host: "lingo.itlikeapro.com",
    href: "https://lingo.itlikeapro.com",
    external: true,
    dev: true,
    description:
      "Lightweight WordPress translation that owns its data — TranslatePress-compatible, hreflang-correct, machine translation optional.",
  },
  {
    tag: "IN DEVELOPMENT",
    name: "TASKBRIDGE",
    host: "taskbridge.itlikeapro.com",
    href: "https://taskbridge.itlikeapro.com",
    external: true,
    dev: true,
    description:
      "A Planner-style task portal for contractors and external staff — synced with Microsoft Planner, no tenant mailboxes needed.",
  },
  {
    tag: "IN DEVELOPMENT",
    name: "TRADEKIT",
    host: "tradekit.itlikeapro.com",
    href: "https://tradekit.itlikeapro.com",
    external: true,
    dev: true,
    description:
      "A precision toolkit for market data: fetcher, indicators, backtesting and one clean OHLCV pipeline.",
  },
  {
    tag: "COMING SOON",
    name: "THE PLATFORM",
    host: "do.itlikeapro.com/coming-soon",
    href: "/coming-soon",
    external: false,
    dev: true,
    description:
      "The main event. Master your craft at the highest level — register to be notified when we launch.",
  },
];

const MAIL = "mailto:bramhankmishra12b@gmail.com";
const DEMO = "https://demo.itlikeapro.com";

const niches = [
  {
    name: "Restaurants",
    status: "live" as const,
    blurb:
      "Menus that make people hungry, story told in chapters, one tap to book or order. Built from three award-winning restaurant sites.",
    refs: "Luckyfolks · Amrit Palace (Awwwards Site of the Day) · Gelato La Boca (Webby 2025)",
    links: [
      { label: "View sample site", href: `${DEMO}/restaurant-template/` },
      { label: "View email design", href: `${DEMO}/email-restaurant/` },
    ],
  },
  {
    name: "Cafés & bakeries",
    status: "studio" as const,
    blurb: "Menu board, today's bakes, order ahead. Researched from three Site of the Day winners.",
    refs: "UND NY · Escape Coffee · Ceremony Coffee",
    links: [],
  },
  {
    name: "Salons & barbers",
    status: "next" as const,
    blurb: "Services and prices, stylists, online booking.",
    refs: "",
    links: [],
  },
  {
    name: "Clinics & dentists",
    status: "next" as const,
    blurb: "Treatments, team, trust signals, appointment requests.",
    refs: "",
    links: [],
  },
  {
    name: "Gyms & studios",
    status: "next" as const,
    blurb: "Timetable, memberships, free-trial sign-up.",
    refs: "",
    links: [],
  },
  {
    name: "Laundries & dry cleaners",
    status: "next" as const,
    blurb: "Price list, collection booking, order tracking — the playbook behind WASH.",
    refs: "",
    links: [],
  },
];

const statusLabel = { live: "Live", studio: "In the studio", next: "Planned" };

const steps = [
  {
    n: "01",
    title: "We study what you already have",
    body: "Your current site, menu, photos, opening hours and reviews. Nothing is invented — every word and image comes from your business.",
  },
  {
    n: "02",
    title: "Design grounded in the best",
    body: "Every niche template is distilled from three award-winning sites in that niche, then tuned to your colours and personality.",
  },
  {
    n: "03",
    title: "You see it before you pay",
    body: "We build a working preview of your new site with your own content, so you judge the real thing, not a pitch deck.",
  },
  {
    n: "04",
    title: "Launch, then automate",
    body: "Go live fast, then add what saves you time: bookings, WhatsApp ordering, email that writes itself, tools that watch your site.",
  },
];

const roadmap = [
  {
    when: "Now",
    title: "Independent restaurants",
    body: "Restaurant template and email design live. Personal previews being built for independent restaurants.",
    state: "now",
  },
  {
    when: "Next",
    title: "Cafés & bakeries",
    body: "Template in the studio, built from three Awwwards Site of the Day cafés.",
    state: "next",
  },
  {
    when: "Then",
    title: "Salons · clinics · gyms · laundries",
    body: "One researched template and one email design per niche, rolled out in turn.",
    state: "later",
  },
  {
    when: "Beyond",
    title: "Flows & the platform",
    body: "Done-for-you automation hosted and monitored for you, and the itlikeapro platform.",
    state: "later",
  },
];

const nicheWords = [
  "Restaurants",
  "Cafés",
  "Bakeries",
  "Salons",
  "Barbers",
  "Clinics",
  "Dentists",
  "Gyms",
  "Studios",
  "Laundries",
];

function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      els.forEach((el) => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.14em] text-[var(--brand)]">
      <span className="h-[2px] w-6 bg-[var(--brand)]" />
      {children}
    </div>
  );
}

export default function HomePage() {
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  useReveal();

  const live = subdomains.filter((s) => !s.dev);
  const building = subdomains.filter((s) => s.dev);

  return (
    <main
      className="dilap min-h-screen overflow-x-hidden bg-[var(--paper)] text-[var(--ink)]"
      style={{ fontFamily: "var(--font-jakarta), system-ui, sans-serif" }}
    >
      <style>{`
        .dilap{--paper:#F7F3EC;--ink:#15171C;--soft:#4B5060;--line:#E5DCCD;--brand:#C2412C;--brand-ink:#9E3221;--card:#FFFFFF;--ok:#2F7A4A}
        .dilap [data-reveal]{opacity:0;transform:translateY(22px);transition:opacity .8s cubic-bezier(.2,.7,.2,1),transform .8s cubic-bezier(.2,.7,.2,1)}
        .dilap [data-reveal].is-in{opacity:1;transform:none}
        .dilap .marquee-track{animation:dilap-marquee 38s linear infinite}
        @keyframes dilap-marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}
        .dilap .float-a{animation:dilap-float 7s ease-in-out infinite}
        .dilap .float-b{animation:dilap-float 9s ease-in-out infinite reverse}
        @keyframes dilap-float{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
        .dilap .ink-underline{background-image:linear-gradient(var(--brand),var(--brand));background-repeat:no-repeat;background-size:0% 6px;background-position:0 92%;transition:background-size 1.1s cubic-bezier(.2,.7,.2,1) .5s}
        .dilap .ink-underline.on{background-size:100% 6px}
        @media (prefers-reduced-motion:reduce){
          .dilap [data-reveal]{opacity:1;transform:none;transition:none}
          .dilap .marquee-track,.dilap .float-a,.dilap .float-b{animation:none}
          .dilap .ink-underline{transition:none;background-size:100% 6px}
        }
      `}</style>

      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-[var(--line)] bg-[var(--paper)]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <a href="/" className="flex items-center gap-2.5 font-extrabold tracking-tight">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-[var(--ink)] text-[13px] text-white">
              DI
            </span>
            <span className="text-[17px]">Do it like a pro</span>
          </a>
          <nav className="hidden items-center gap-7 text-[14px] font-semibold text-[var(--soft)] md:flex">
            <a href="#work" className="hover:text-[var(--ink)]">Work</a>
            <a href="#process" className="hover:text-[var(--ink)]">How we work</a>
            <a href="#roadmap" className="hover:text-[var(--ink)]">Roadmap</a>
            <a href="#products" className="hover:text-[var(--ink)]">Products</a>
          </nav>
          <a
            href={`${MAIL}?subject=${encodeURIComponent("A preview for my business")}`}
            className="rounded-full bg-[var(--ink)] px-4 py-2 text-[14px] font-bold text-white transition-colors hover:bg-[var(--brand)]"
          >
            Get in touch
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full bg-[var(--brand)] opacity-[0.07] blur-3xl" />
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)] items-center gap-12 px-4 pb-16 pt-14 sm:px-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,.95fr)] lg:pb-24 lg:pt-20">
          <div
            className={`transition-all duration-1000 ${ready ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
          >
            <Eyebrow>Do it like a pro · digital studio</Eyebrow>
            <h1 className="mt-5 text-[clamp(36px,5.2vw,60px)] font-extrabold leading-[1.1] tracking-[-0.03em] [text-wrap:balance]">
              Websites, automation &amp;{" "}
              <span className={`ink-underline ${ready ? "on" : ""}`}>modern technology</span>{" "}
              for independent businesses.
            </h1>
            <p className="mt-6 max-w-[54ch] text-[18px] leading-relaxed text-[var(--soft)]">
              We start by building a working preview of your new website from your own menu, photos
              and hours, so you see the result before you commit to anything.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`${DEMO}/restaurant-template/`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--brand)] px-6 py-3.5 text-[15px] font-bold text-white transition-transform hover:-translate-y-0.5 hover:bg-[var(--brand-ink)]"
              >
                See a sample site <ArrowUpRight size={18} strokeWidth={2.5} />
              </a>
              <a
                href="#process"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-bold shadow-[inset_0_0_0_1.5px_var(--ink)] transition-colors hover:bg-[var(--ink)] hover:text-white"
              >
                How it works
              </a>
            </div>
            <dl className="mt-10 grid max-w-md grid-cols-3 gap-3 border-t border-[var(--line)] pt-6">
              {[
                ["6", "niches on the roadmap"],
                ["3", "award winners behind each template"],
                [String(subdomains.length), "products & tools built"],
              ].map(([n, l]) => (
                <div key={l}>
                  <dt className="text-[28px] font-extrabold tracking-tight">{n}</dt>
                  <dd className="text-[13px] leading-snug text-[var(--soft)]">{l}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Live preview */}
          <div
            className={`relative transition-all delay-300 duration-1000 ${ready ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="float-a absolute -left-4 top-10 z-10 hidden rounded-2xl border border-[var(--line)] bg-[var(--card)] px-4 py-3 shadow-lg sm:block">
              <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--ok)]">● Live template</div>
              <div className="text-[14px] font-bold">Restaurants</div>
            </div>
            <div className="float-b absolute bottom-14 -right-3 z-10 hidden rounded-2xl bg-[var(--ink)] px-4 py-3 text-white shadow-lg sm:block">
              <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-white/70">Built from</div>
              <div className="text-[14px] font-bold">your own content</div>
            </div>
            <a
              href={`${DEMO}/restaurant-template/`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open the sample restaurant website in a new tab"
              className="group block overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--card)] shadow-[0_30px_80px_-30px_rgba(21,23,28,.35)] transition-transform duration-500 hover:-translate-y-1"
            >
              <div className="flex items-center gap-2 border-b border-[var(--line)] px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#E5806B]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#E9C46A]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#7FB685]" />
                <span className="ml-3 truncate rounded-md bg-[var(--paper)] px-3 py-1 text-[12px] font-medium text-[var(--soft)]">
                  demo.itlikeapro.com/restaurant-template
                </span>
              </div>
              <div className="relative aspect-[4/3.4] overflow-hidden bg-[var(--paper)]">
                <iframe
                  src={`${DEMO}/restaurant-template/`}
                  title="Sample restaurant website preview"
                  loading="lazy"
                  tabIndex={-1}
                  aria-hidden="true"
                  className="pointer-events-none absolute left-0 top-0 h-[250%] w-[250%] origin-top-left scale-[0.4] border-0"
                />
                <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-[rgba(21,23,28,.55)] via-transparent to-transparent p-5 opacity-0 transition-opacity group-hover:opacity-100">
                  <span className="rounded-full bg-white px-4 py-2 text-[13px] font-bold text-[var(--ink)]">
                    Open the full sample ↗
                  </span>
                </div>
              </div>
            </a>
            <p className="mt-3 text-center text-[12px] text-[var(--soft)]">
              Sample site for a fictional restaurant. Real previews use the business&rsquo;s own words and photos.
            </p>
          </div>
        </div>

        {/* Niche marquee */}
        <div className="overflow-hidden border-y border-[var(--line)] bg-[var(--ink)] py-4 text-white" aria-hidden="true">
          <div className="marquee-track flex w-max gap-10 whitespace-nowrap text-[20px] font-bold tracking-tight">
            {[...nicheWords, ...nicheWords].map((w, i) => (
              <span key={i} className="flex items-center gap-10">
                {w}
                <span className="text-[var(--brand)]">✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Work: niche library */}
      <section id="work" className="scroll-mt-20">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
          <div data-reveal className="max-w-2xl">
            <Eyebrow>Current work</Eyebrow>
            <h2 className="mt-4 text-[clamp(30px,4vw,46px)] font-extrabold leading-[1.12] tracking-[-0.025em]">
              A design system for every kind of local business.
            </h2>
            <p className="mt-4 text-[17px] leading-relaxed text-[var(--soft)]">
              One website template and one matching email design per niche. Each starts from three
              award-winning sites in that niche, so a corner café gets the craft of a studio-built brand site.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {niches.map((n, i) => (
              <article
                key={n.name}
                data-reveal
                style={{ transitionDelay: `${(i % 3) * 90}ms` }}
                className={`flex flex-col rounded-2xl border p-6 ${
                  n.status === "live"
                    ? "border-[var(--ink)] bg-[var(--ink)] text-white"
                    : "border-[var(--line)] bg-[var(--card)]"
                }`}
              >
                <span
                  className={`self-start rounded-full px-3 py-1 text-[12px] font-bold ${
                    n.status === "live"
                      ? "bg-[var(--brand)] text-white"
                      : n.status === "studio"
                        ? "bg-[#FDEBD0] text-[#8A5200]"
                        : "bg-[var(--paper)] text-[var(--soft)]"
                  }`}
                >
                  {statusLabel[n.status]}
                </span>
                <h3 className="mt-4 text-[22px] font-extrabold tracking-tight">{n.name}</h3>
                <p className={`mt-2 text-[15px] leading-relaxed ${n.status === "live" ? "text-white/80" : "text-[var(--soft)]"}`}>
                  {n.blurb}
                </p>
                {n.refs && (
                  <p className={`mt-4 text-[13px] leading-snug ${n.status === "live" ? "text-white/65" : "text-[var(--soft)]"}`}>
                    <span className="font-bold">References:</span> {n.refs}
                  </p>
                )}
                {n.links.length > 0 && (
                  <div className="mt-auto flex flex-wrap gap-2 pt-6">
                    {n.links.map((l, j) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2.5 text-[14px] font-bold transition-colors ${
                          j === 0
                            ? "bg-white text-[var(--ink)] hover:bg-[var(--brand)] hover:text-white"
                            : "shadow-[inset_0_0_0_1.5px_rgba(255,255,255,.6)] hover:bg-white hover:text-[var(--ink)]"
                        }`}
                      >
                        {l.label} <ArrowUpRight size={15} strokeWidth={2.5} />
                      </a>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="scroll-mt-20 border-y border-[var(--line)] bg-[var(--card)]">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
          <div data-reveal className="max-w-2xl">
            <Eyebrow>How we work</Eyebrow>
            <h2 className="mt-4 text-[clamp(30px,4vw,46px)] font-extrabold leading-[1.12] tracking-[-0.025em]">
              Show first. Talk second.
            </h2>
          </div>
          <ol className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <li
                key={s.n}
                data-reveal
                style={{ transitionDelay: `${i * 110}ms` }}
                className="group bg-[var(--card)] p-7 transition-colors hover:bg-[var(--paper)]"
              >
                <div className="text-[15px] font-extrabold text-[var(--brand)]">{s.n}</div>
                <h3 className="mt-6 text-[19px] font-extrabold leading-snug tracking-tight">{s.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[var(--soft)]">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="scroll-mt-20">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
          <div data-reveal className="max-w-2xl">
            <Eyebrow>Where we&rsquo;re heading</Eyebrow>
            <h2 className="mt-4 text-[clamp(30px,4vw,46px)] font-extrabold leading-[1.12] tracking-[-0.025em]">
              Pro-grade presence for every independent business, one niche at a time.
            </h2>
          </div>
          <div className="relative mt-14">
            <div className="absolute left-[11px] top-2 bottom-2 w-[2px] bg-[var(--line)] lg:left-0 lg:right-0 lg:top-[11px] lg:bottom-auto lg:h-[2px] lg:w-auto" />
            <ol className="relative grid gap-10 lg:grid-cols-4 lg:gap-6">
              {roadmap.map((r, i) => (
                <li
                  key={r.when}
                  data-reveal
                  style={{ transitionDelay: `${i * 120}ms` }}
                  className="relative pl-10 lg:pl-0 lg:pt-10"
                >
                  <span
                    className={`absolute left-0 top-0 grid h-6 w-6 place-items-center rounded-full border-2 ${
                      r.state === "now"
                        ? "border-[var(--brand)] bg-[var(--brand)]"
                        : r.state === "next"
                          ? "border-[var(--brand)] bg-[var(--paper)]"
                          : "border-[var(--line)] bg-[var(--paper)]"
                    }`}
                  >
                    {r.state === "now" && <span className="h-2 w-2 animate-ping rounded-full bg-white" />}
                  </span>
                  <div className="text-[13px] font-bold uppercase tracking-[0.14em] text-[var(--brand)]">{r.when}</div>
                  <h3 className="mt-2 text-[20px] font-extrabold leading-snug tracking-tight">{r.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-[var(--soft)]">{r.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6">
        <div
          data-reveal
          className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-[var(--brand)] px-6 py-14 text-white sm:px-12 lg:py-20"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border-[40px] border-white/10" />
          <div className="relative max-w-2xl">
            <h2 className="text-[clamp(28px,4vw,44px)] font-extrabold leading-[1.12] tracking-[-0.025em]">
              Curious what your business would look like?
            </h2>
            <p className="mt-4 text-[17px] leading-relaxed text-white/85">
              Send us your website or your social page. We&rsquo;ll come back with a preview built from your own
              content.
            </p>
            <a
              href={`${MAIL}?subject=${encodeURIComponent("A preview for my business")}`}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-[15px] font-bold text-[var(--ink)] transition-transform hover:-translate-y-0.5"
            >
              Ask for a preview <ArrowUpRight size={18} strokeWidth={2.5} />
            </a>
          </div>
        </div>
      </section>

      {/* Products & earlier work (full directory, unchanged entries) */}
      <section id="products" className="scroll-mt-20">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
          <div data-reveal className="max-w-2xl">
            <Eyebrow>Products &amp; tools from the studio</Eyebrow>
            <h2 className="mt-4 text-[clamp(30px,4vw,46px)] font-extrabold leading-[1.12] tracking-[-0.025em]">
              The same craft, packaged as software.
            </h2>
            <p className="mt-4 text-[17px] leading-relaxed text-[var(--soft)]">
              Everything on itlikeapro.com in one place. The tools we build for ourselves and our clients, from
              AI gateways to WordPress fleet care.
            </p>
          </div>

          {[
            { title: "Shipped", items: live },
            { title: "In development", items: building },
          ].map((group) => (
            <div key={group.title} className="mt-12">
              <h3 className="mb-5 flex items-center gap-3 text-[14px] font-bold uppercase tracking-[0.14em] text-[var(--soft)]">
                {group.title}
                <span className="rounded-full bg-[var(--card)] px-2.5 py-0.5 text-[12px] text-[var(--ink)] shadow-[inset_0_0_0_1px_var(--line)]">
                  {group.items.length}
                </span>
              </h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map((s) => (
                  <a
                    key={s.host}
                    href={s.href}
                    target={s.external ? "_blank" : undefined}
                    rel={s.external ? "noopener noreferrer" : undefined}
                    data-reveal
                    className="group flex flex-col rounded-2xl border border-[var(--line)] bg-[var(--card)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--ink)] hover:shadow-[0_20px_50px_-25px_rgba(21,23,28,.35)]"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <span
                        className={`rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.1em] ${
                          s.dev ? "bg-[var(--paper)] text-[var(--soft)]" : "bg-[#FBE7E2] text-[var(--brand-ink)]"
                        }`}
                      >
                        {s.tag}
                      </span>
                      <ArrowUpRight
                        size={20}
                        strokeWidth={2.5}
                        className="shrink-0 text-[var(--soft)] transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--brand)]"
                      />
                    </div>
                    <h4 className="mt-4 text-[20px] font-extrabold tracking-tight">{s.name}</h4>
                    <div className="mt-1 break-all text-[12.5px] font-medium text-[var(--soft)]">{s.host}</div>
                    <p className="mt-3 text-[14.5px] leading-relaxed text-[var(--soft)]">{s.description}</p>
                  </a>
                ))}
              </div>
            </div>
          ))}

          <p className="mt-12 text-center text-[13px] text-[var(--soft)]">
            itlikeapro.com and www.itlikeapro.com land here.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--line)]">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-[13px] text-[var(--soft)] sm:flex-row sm:px-6">
          <div>© {new Date().getFullYear()} Do it like a pro · itlikeapro.com</div>
          <div className="flex flex-wrap justify-center gap-5 font-semibold">
            <a href="https://bramhank.does.itlikeapro.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--ink)]">
              Founder
            </a>
            <a href="/coming-soon" className="hover:text-[var(--ink)]">The platform</a>
            <a href={MAIL} className="hover:text-[var(--ink)]">Email us</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
