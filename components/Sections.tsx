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
              I&apos;m a Data Engineer / Analytics Engineer focused on building scalable data systems that turn raw data into reliable insights.
            </p>
            <p>
              I&apos;ve worked across real-world environments including supply chain and operational analytics, designing pipelines and data models that support inventory tracking, procurement workflows, and decision-making.
            </p>
            <p>
              My work spans batch and streaming systems, analytics engineering, and data platform design, with a focus on performance, reliability, and usability.
            </p>
          </div>

          <div className="space-y-10">
            <div>
              <div className="mb-5">
                <SectionLabel>What I Solve</SectionLabel>
              </div>
              <div className="space-y-3">
                {[
                  "Turning fragmented data into reliable, analytics-ready datasets",
                  "Reducing data latency to enable near real-time decision-making",
                  "Designing scalable pipelines for supply chain and operational workflows",
                  "Standardizing metrics and data models for consistent reporting",
                  "Making data accessible to non-technical users through intuitive analytics layers",
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
  const featured = posts.find(p => p.featured);
  const rest = posts.filter(p => !p.featured);

  return (
    <section
      id="blog"
      className="py-28"
      style={{ background: "var(--bg1)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}
    >
      <div className="max-w-6xl mx-auto px-12">
        <SectionLabel>04 â€” Blog</SectionLabel>
        <SectionTitle>Blog Posts</SectionTitle>
        <p className="text-[17px] mb-14 max-w-xl leading-relaxed" style={{ color: "var(--muted)" }}>
          Deep dives into the systems I build â€” the architecture, the decisions, and what I learned.
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
                <span className="font-mono text-[11px] uppercase tracking-wider self-start" style={{ color: "var(--accent)" }}>Read Post â†’</span>
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
                  <span className="font-mono text-[11px] uppercase tracking-wider mb-3" style={{ color: "var(--accent)" }}>Read Post â†’</span>
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
        <SectionLabel>05 â€” Let&apos;s Talk</SectionLabel>
        <SectionTitle>Contact</SectionTitle>
        <div className="grid md:grid-cols-2 gap-20 mt-12">
          <div>
            <p className="text-[17px] leading-relaxed mb-6" style={{ color: "var(--text)" }}>
              I&apos;m actively looking for data engineering roles where I can work on high-throughput streaming systems, large-scale data infrastructure, and the tooling that makes data reliable at scale.
            </p>
            <div className="space-y-3">
              {[
                { icon: "âœ‰", label: "Email",   value: "tanikondasairajesh@gmail.com", href: "mailto:tanikondasairajesh@gmail.com" },
                { icon: "ðŸŒ", label: "Website", value: "rajeshchowdary.com",           href: "https://rajeshchowdary.com" },
                { icon: "âŒ¥", label: "GitHub",  value: "github.com/stanik0n",          href: "https://github.com/stanik0n" },
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
                  <span className="text-lg">{c.icon}</span>
                  <span className="flex-1">
                    <span className="block font-mono text-[10px] uppercase tracking-wider mb-0.5" style={{ color: "var(--muted)" }}>{c.label}</span>
                    <span className="font-mono text-[13px]">{c.value}</span>
                  </span>
                  <span style={{ color: "var(--muted2)" }}>â†’</span>
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
                  ["STATUS",       "Open to full-time roles",           "yes"],
                  ["LOOKING FOR", "Data Engineering Roles",          "pref"],
                  ["STACK",       "AWS Â· Kafka Â· Spark Â· dbt",       ""],
                  ["LOCATION",    "Houston, TX Â· Open to relocation", ""],
                  ["RESPONSE",    "< 24h",                           "yes"],
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
        <path d="M40 0 L 0 0 0 40" fill="none" stroke="rgba(99,195,255,0.05)" strokeWidth="1"/>
      </pattern>
      <rect width="400" height="240" fill="url(#bp)"/>
      <g fontFamily="monospace" fontSize="9" fill="rgba(99,195,255,0.55)" letterSpacing="1">
        <rect x="20" y="94" width="72" height="32" rx="3" fill="rgba(99,195,255,0.04)" stroke="rgba(99,195,255,0.2)" strokeWidth="1"/>
        <text x="56" y="113" textAnchor="middle">ADS-B API</text>
        <line x1="92" y1="110" x2="116" y2="110" stroke="rgba(99,195,255,0.25)" strokeWidth="1"/>
        <rect x="116" y="94" width="60" height="32" rx="3" fill="rgba(99,195,255,0.04)" stroke="rgba(99,195,255,0.2)" strokeWidth="1"/>
        <text x="146" y="113" textAnchor="middle">KAFKA</text>
        <line x1="176" y1="110" x2="200" y2="110" stroke="rgba(99,195,255,0.25)" strokeWidth="1"/>
        <rect x="200" y="94" width="60" height="32" rx="3" fill="rgba(99,195,255,0.04)" stroke="rgba(99,195,255,0.2)" strokeWidth="1"/>
        <text x="230" y="113" textAnchor="middle">SPARK</text>
        <line x1="260" y1="110" x2="280" y2="110" stroke="rgba(99,195,255,0.2)" strokeWidth="1"/>
        <line x1="280" y1="110" x2="280" y2="72" stroke="rgba(99,195,255,0.2)" strokeWidth="1"/>
        <line x1="280" y1="110" x2="280" y2="148" stroke="rgba(0,229,176,0.2)" strokeWidth="1"/>
        <rect x="290" y="56" width="56" height="32" rx="3" fill="rgba(99,195,255,0.04)" stroke="rgba(99,195,255,0.2)" strokeWidth="1"/>
        <text x="318" y="75" textAnchor="middle">REDIS</text>
        <rect x="290" y="132" width="72" height="32" rx="3" fill="rgba(0,229,176,0.03)" stroke="rgba(0,229,176,0.2)" strokeWidth="1"/>
        <text x="326" y="151" textAnchor="middle" fill="rgba(0,229,176,0.55)">TIMESCALE</text>
      </g>
      <circle cx="146" cy="110" r="3" fill="none" stroke="rgba(99,195,255,0.5)">
        <animate attributeName="r" values="3;20" dur="2.5s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.7;0" dur="2.5s" repeatCount="indefinite"/>
      </circle>
    </svg>
  );
}
