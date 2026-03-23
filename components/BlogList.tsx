"use client";
import Link from "next/link";

const tagColors: Record<string, string> = {
  "Case Study · Deep Dive": "var(--accent2)",
  "System Design":          "var(--accent2)",
  "Data Analytics":         "var(--accent)",
  "Data Visualization":     "var(--accent2)",
  "Hardware + IoT":         "var(--accent3)",
};

type Post = {
  id: string;
  tag: string;
  title: string;
  desc: string;
  date: string;
  meta: string;
  href: string;
  featured: boolean;
};

export default function BlogList({ posts }: { posts: Post[] }) {
  return (
    <div className="space-y-4">
      {posts.map((p) => (
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
          <div className="font-mono text-[11px] pt-1 w-28 flex-shrink-0" style={{ color: "var(--muted)" }}>
            {p.date}
          </div>
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
          <div
            className="font-mono text-[13px] pt-1 flex-shrink-0 transition-transform group-hover:translate-x-1"
            style={{ color: "var(--muted2)" }}
          >
            →
          </div>
        </Link>
      ))}
    </div>
  );
}
