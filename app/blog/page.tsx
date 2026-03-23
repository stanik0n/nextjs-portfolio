import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/lib/data";
import { SectionLabel, SectionTitle } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Writing — Sai Rajesh Tanikonda",
  description: "Case studies and technical posts on data engineering, streaming systems, and analytics.",
};

const allPosts = [
  ...posts,
  {
    id: "cnc-plotter",
    tag: "Hardware + IoT",
    title: "CNC Machine Using Arduino — DIY 2-Axis Plotter System",
    desc: "Building a 2-axis CNC plotting machine with Arduino UNO, GRBL firmware, 3D-printed components, and an ESP32 IoT layer for wireless G-code transmission and real-time telemetry.",
    date: "Jan 31, 2026",
    meta: "Arduino · ESP32 · Python · GRBL",
    href: "/blog/cnc-plotter",
    featured: false,
  },
];

const tagColors: Record<string, string> = {
  "Case Study · Deep Dive": "var(--accent2)",
  "System Design":          "var(--accent2)",
  "Data Analytics":         "var(--accent)",
  "Data Visualization":     "var(--accent2)",
  "Hardware + IoT":         "var(--accent3)",
};

export default function BlogIndex() {
  return (
    <div className="min-h-screen pt-28 pb-24" style={{ background: "var(--bg)" }}>
      <div className="max-w-6xl mx-auto px-12">
        <SectionLabel>Writing</SectionLabel>
        <SectionTitle>Posts & Case Studies</SectionTitle>
        <p className="text-[17px] max-w-xl leading-relaxed mb-16" style={{ color: "var(--muted)" }}>
          Deep dives into the systems I build — the architecture decisions, the failures, and what stuck.
        </p>

        <div className="space-y-4">
          {allPosts.map((p) => (
            <Link
              key={p.id}
              href={p.href}
              className="group flex gap-8 items-start p-6 rounded-lg transition-all duration-200"
              style={{ background: "var(--bg1)", border: "1px solid var(--border)", textDecoration: "none" }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "var(--border2)";
                el.style.background = "var(--bg2)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "var(--border)";
                el.style.background = "var(--bg1)";
              }}
            >
              {/* date */}
              <div className="font-mono text-[11px] pt-1 w-28 flex-shrink-0" style={{ color: "var(--muted)" }}>
                {p.date}
              </div>

              {/* content */}
              <div className="flex-1">
                <div
                  className="font-mono text-[10px] uppercase tracking-[0.13em] mb-2"
                  style={{ color: tagColors[p.tag] || "var(--accent)" }}
                >
                  {p.tag}
                </div>
                <div
                  className="font-display font-bold text-[18px] mb-2 leading-snug transition-colors"
                  style={{ color: "var(--white)", letterSpacing: "-0.01em" }}
                >
                  {p.title}
                </div>
                <p className="text-[14px] leading-relaxed" style={{ color: "var(--text)" }}>
                  {p.desc}
                </p>
              </div>

              {/* arrow */}
              <div
                className="font-mono text-[13px] pt-1 flex-shrink-0 transition-transform group-hover:translate-x-1"
                style={{ color: "var(--muted2)" }}
              >
                →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
