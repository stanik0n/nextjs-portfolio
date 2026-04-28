"use client";
import Link from "next/link";
import { skills, experience, posts } from "@/lib/data";
import { SectionLabel, SectionTitle } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="py-28" style={{ background: "var(--bg)" }}>
      <div className="max-w-6xl mx-auto px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-5 text-[17px] leading-relaxed" style={{ color: "var(--text)" }}>
            <div className="mb-8">
              <SectionLabel>01 / Profile</SectionLabel>
              <SectionTitle>About Me</SectionTitle>
            </div>
            <p>
              I am a data engineer with experience building scalable data pipelines and analytics systems. My work focuses on supply chain operations, including inventory planning, procurement analytics, and supplier performance tracking, enabling data-driven decision-making and operational efficiency.
            </p>
            <p>
              I&apos;ve built pipelines and analytics systems across supply chain and operational workflows, improving data latency, reliability, and decision speed for inventory, procurement, and supplier performance use cases.
            </p>
            <p>
              My work spans batch and streaming architectures, analytics engineering, and data platform design, with a focus on supply chain visibility and operational performance.
            </p>
          </div>

          <div className="space-y-10">
            <div>
              <div className="mb-5">
                <SectionLabel>What I Solve</SectionLabel>
              </div>
              <div className="space-y-3">
                {[
                  "Inventory planning and stock visibility through reliable data pipelines",
                  "Procurement analytics and supplier performance tracking",
                  "Reducing data latency for near real-time supply chain decision-making",
                  "Designing scalable pipelines across supply chain and operations workflows",
                  "Standardizing KPIs and data models for consistent operational reporting",
                ].map((item) => (
                  <div key={item} className="flex gap-3 text-[15px] leading-relaxed" style={{ color: "var(--text)" }}>
                    <span className="font-mono text-[12px] flex-shrink-0 mt-0.5" style={{ color: "var(--accent)", opacity: 0.55 }}>&gt;</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div>
              {skills.map((sg) => (
                <div key={sg.group} className="mb-7">
                  <div
                    className="font-mono text-[10px] uppercase tracking-[0.14em] mb-3 pb-2"
                    style={{ color: "var(--muted)", borderBottom: "1px solid var(--border)" }}
                  >
                    {sg.group}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {sg.tags.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[11px] px-3 py-1 rounded-sm transition-all duration-150 cursor-default"
                        style={{ color: "var(--text)", background: "var(--bg2)", border: "1px solid var(--border)" }}
                        onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.color = "var(--accent)"; el.style.borderColor = "var(--accent)"; el.style.background = "rgba(99,195,255,0.06)"; }}
                        onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.color = "var(--text)"; el.style.borderColor = "var(--border)"; el.style.background = "var(--bg2)"; }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="py-28" style={{ background: "var(--bg)" }}>
      <div className="max-w-6xl mx-auto px-12">
        <SectionLabel>03 / Career</SectionLabel>
        <SectionTitle>Experience</SectionTitle>
        <div className="relative mt-14">
          <div className="absolute left-0 top-2 bottom-0 w-px" style={{ background: "var(--border)" }} />
          {experience.map((e, i) => (
            <div key={i} className="relative grid md:grid-cols-[180px_1fr] gap-9 pb-14">
              <div
                className="absolute w-2 h-2 rounded-full"
                style={{ left: "-3.5px", top: "8px", border: "1px solid var(--accent)", background: "var(--bg)" }}
              />
              <div className="pl-7">
                <div className="font-mono text-[12px] mb-1" style={{ color: "var(--accent)" }}>{e.date}</div>
                <div className="font-mono text-[11px]" style={{ color: "var(--muted)" }}>{e.company}</div>
              </div>
              <div>
                <div className="font-display font-semibold text-[19px] mb-3" style={{ color: "var(--white)", letterSpacing: "-0.01em" }}>{e.role}</div>
                <ul className="space-y-2">
                  {e.points.map((pt, j) => (
                    <li key={j} className="flex gap-3 text-[15px] leading-relaxed" style={{ color: "var(--text)" }}>
                      <span className="font-mono text-[12px] flex-shrink-0 mt-0.5" style={{ color: "var(--accent)", opacity: 0.55 }}>&gt;</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Blog() {
  const featured = posts.find((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);

  return (
    <section
      id="blog"
      className="py-28"
      style={{ background: "var(--bg1)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}
    >
      <div className="max-w-6xl mx-auto px-12">
        <SectionLabel>04 / Blog</SectionLabel>
        <SectionTitle>Blog Posts</SectionTitle>
        <p className="text-[17px] mb-14 max-w-xl leading-relaxed" style={{ color: "var(--muted)" }}>
          Deep dives into the systems I build, the architecture, the decisions, and what I learned.
        </p>

        <div className="space-y-5">
          {featured && (
            <Link
              href={featured.href}
              className="blog-card-featured rounded-lg overflow-hidden grid md:grid-cols-2 transition-all duration-300 block"
            >
              <div className="flex items-center justify-center min-h-[240px]" style={{ background: "var(--bg2)" }}>
                <PipelineDiagram />
              </div>
              <div className="p-10 flex flex-col justify-center">
                <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.13em] mb-4" style={{ color: "var(--accent2)" }}>
                  <span className="block w-5 h-px" style={{ background: "var(--accent2)", opacity: 0.5 }} />
                  {featured.tag}
                </div>
                <div className="font-display font-bold text-[24px] mb-3 leading-tight" style={{ color: "var(--white)", letterSpacing: "-0.02em" }}>{featured.title}</div>
                <p className="text-[14px] leading-relaxed mb-6" style={{ color: "var(--text)" }}>{featured.desc}</p>
                <span className="font-mono text-[11px] uppercase tracking-wider self-start" style={{ color: "var(--accent)" }}>Read Post</span>
                <div className="font-mono text-[11px] mt-6 pt-4" style={{ color: "var(--muted)", borderTop: "1px solid var(--border)" }}>{featured.meta}</div>
              </div>
            </Link>
          )}

          <div className="grid md:grid-cols-3 gap-5">
            {rest.map((p) => (
              <Link
                key={p.id}
                href={p.href}
                className="blog-card rounded-lg overflow-hidden flex flex-col transition-all duration-300"
              >
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.13em] mb-3" style={{ color: "var(--accent2)" }}>
                    <span className="block w-4 h-px" style={{ background: "var(--accent2)", opacity: 0.5 }} />
                    {p.tag}
                  </div>
                  <div className="font-display font-bold text-[17px] mb-2 leading-snug" style={{ color: "var(--white)", letterSpacing: "-0.01em" }}>{p.title}</div>
                  <p className="text-[13px] leading-relaxed mb-4 flex-1" style={{ color: "var(--text)" }}>{p.desc}</p>
                  <span className="font-mono text-[11px] uppercase tracking-wider mb-3" style={{ color: "var(--accent)" }}>Read Post</span>
                  <div className="font-mono text-[11px] pt-3" style={{ color: "var(--muted)", borderTop: "1px solid var(--border)" }}>{p.date}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="py-28" style={{ background: "var(--bg)" }}>
      <div className="max-w-6xl mx-auto px-12">
        <SectionLabel>05 / Let&apos;s Talk</SectionLabel>
        <SectionTitle>Contact</SectionTitle>
        <div className="grid md:grid-cols-2 gap-20 mt-12">
          <div>
            <p className="text-[17px] leading-relaxed mb-6" style={{ color: "var(--text)" }}>
              I&apos;m actively looking for data engineering roles where I can work on high-throughput streaming systems, large-scale data infrastructure, and the tooling that makes data reliable at scale.
            </p>
            <div className="space-y-3">
              {[
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2"/>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    </svg>
                  ),
                  label: "Email", value: "sairajeshtanikonda@gmail.com", href: "mailto:sairajeshtanikonda@gmail.com"
                },
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                    </svg>
                  ),
                  label: "Website", value: "rajeshchowdary.com", href: "https://rajeshchowdary.com"
                },
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
                    </svg>
                  ),
                  label: "GitHub", value: "github.com/stanik0n", href: "https://github.com/stanik0n"
                },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="flex items-center gap-4 px-4 py-3 rounded-md transition-all duration-200"
                  style={{ background: "var(--bg1)", border: "1px solid var(--border)", color: "var(--text)", textDecoration: "none" }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "var(--border2)"; el.style.color = "var(--accent)"; el.style.background = "rgba(99,195,255,0.04)"; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "var(--border)"; el.style.color = "var(--text)"; el.style.background = "var(--bg1)"; }}
                >
                  <span className="flex items-center justify-center w-8 h-8 rounded-sm flex-shrink-0" style={{ background: "rgba(99,195,255,0.07)", color: "var(--accent)" }}>{c.icon}</span>
                  <span className="flex-1">
                    <span className="block font-mono text-[10px] uppercase tracking-wider mb-0.5" style={{ color: "var(--muted)" }}>{c.label}</span>
                    <span className="font-mono text-[13px]">{c.value}</span>
                  </span>
                  <span style={{ color: "var(--muted2)" }}>&gt;</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="rounded-lg overflow-hidden" style={{ background: "var(--bg1)", border: "1px solid var(--border)" }}>
              <div className="flex items-center justify-between px-5 py-3 font-mono text-[11px]" style={{ background: "var(--bg2)", borderBottom: "1px solid var(--border)", color: "var(--muted)" }}>
                availability.json
                <span className="flex items-center gap-2" style={{ color: "var(--accent2)" }}>
                  <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: "var(--accent2)" }} />
                  open to roles
                </span>
              </div>
              <div className="p-5 space-y-0">
                {[
                  ["STATUS", "Open to full-time roles", "yes"],
                  ["LOOKING FOR", "Supply Chain Roles", "pref"],
                  ["FOCUS", "Planning / Analytics / Operations", ""],
                  ["LOCATION", "Houston, TX / Open to relocation", ""],
                  ["RESPONSE", "< 24h", "yes"],
                ].map(([k, v, t]) => (
                  <div key={k} className="flex justify-between items-center py-2.5 font-mono text-[12px]" style={{ borderBottom: "1px solid var(--border)" }}>
                    <span style={{ color: "var(--muted)" }}>{k}</span>
                    <span style={{ color: t === "yes" ? "var(--accent2)" : t === "pref" ? "var(--accent)" : "var(--text)" }}>{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PipelineDiagram() {
  return (
    <svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <pattern id="bp" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M40 0 L 0 0 0 40" fill="none" stroke="rgba(99,195,255,0.05)" strokeWidth="1" />
      </pattern>
      <rect width="400" height="240" fill="url(#bp)" />
      <g fontFamily="monospace" fontSize="9" fill="rgba(99,195,255,0.55)" letterSpacing="1">
        <rect x="20" y="94" width="72" height="32" rx="3" fill="rgba(99,195,255,0.04)" stroke="rgba(99,195,255,0.2)" strokeWidth="1" />
        <text x="56" y="113" textAnchor="middle">ADS-B API</text>
        <line x1="92" y1="110" x2="116" y2="110" stroke="rgba(99,195,255,0.25)" strokeWidth="1" />
        <rect x="116" y="94" width="60" height="32" rx="3" fill="rgba(99,195,255,0.04)" stroke="rgba(99,195,255,0.2)" strokeWidth="1" />
        <text x="146" y="113" textAnchor="middle">KAFKA</text>
        <line x1="176" y1="110" x2="200" y2="110" stroke="rgba(99,195,255,0.25)" strokeWidth="1" />
        <rect x="200" y="94" width="60" height="32" rx="3" fill="rgba(99,195,255,0.04)" stroke="rgba(99,195,255,0.2)" strokeWidth="1" />
        <text x="230" y="113" textAnchor="middle">SPARK</text>
        <line x1="260" y1="110" x2="280" y2="110" stroke="rgba(99,195,255,0.2)" strokeWidth="1" />
        <line x1="280" y1="110" x2="280" y2="72" stroke="rgba(99,195,255,0.2)" strokeWidth="1" />
        <line x1="280" y1="110" x2="280" y2="148" stroke="rgba(0,229,176,0.2)" strokeWidth="1" />
        <rect x="290" y="56" width="56" height="32" rx="3" fill="rgba(99,195,255,0.04)" stroke="rgba(99,195,255,0.2)" strokeWidth="1" />
        <text x="318" y="75" textAnchor="middle">REDIS</text>
        <rect x="290" y="132" width="72" height="32" rx="3" fill="rgba(0,229,176,0.03)" stroke="rgba(0,229,176,0.2)" strokeWidth="1" />
        <text x="326" y="151" textAnchor="middle" fill="rgba(0,229,176,0.55)">TIMESCALE</text>
      </g>
      <circle cx="146" cy="110" r="3" fill="none" stroke="rgba(99,195,255,0.5)">
        <animate attributeName="r" values="3;20" dur="2.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.7;0" dur="2.5s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}
