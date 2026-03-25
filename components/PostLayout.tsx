"use client";
import Link from "next/link";

interface PostLayoutProps {
  title: string;
  date: string;
  category: string;
  stack: string[];
  children: React.ReactNode;
}

export default function PostLayout({ title, date, category, stack, children }: PostLayoutProps) {
  return (
    <article className="min-h-screen pt-28 pb-24" style={{ background: "var(--bg)" }}>
      <div className="max-w-3xl mx-auto px-8">

        {/* back */}
        <Link
          href="/#blog"
          className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider mb-12 transition-opacity hover:opacity-60"
          style={{ color: "var(--muted)" }}
        >
          ← Back
        </Link>

        {/* header */}
        <header className="mb-14">
          <div
            className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] mb-5"
            style={{ color: "var(--accent2)" }}
          >
            <span className="block w-5 h-px" style={{ background: "var(--accent2)", opacity: 0.5 }} />
            {category}
          </div>

          <h1
            className="font-display font-extrabold mb-6 leading-tight"
            style={{
              fontSize: "clamp(28px,5vw,52px)",
              color: "var(--white)",
              letterSpacing: "-0.03em",
              lineHeight: 1.08,
            }}
          >
            {title}
          </h1>

          <div
            className="flex flex-wrap items-center gap-4 pb-6"
            style={{ borderBottom: "1px solid var(--border)" }}
          >
            <span className="font-mono text-[12px]" style={{ color: "var(--muted)" }}>{date}</span>
            <span style={{ color: "var(--muted2)" }}>·</span>
            <div className="flex flex-wrap gap-2">
              {stack.map((s) => (
                <span
                  key={s}
                  className="font-mono text-[10px] px-2 py-0.5 rounded-sm"
                  style={{ color: "var(--muted)", background: "var(--bg2)", border: "1px solid var(--border)" }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </header>

        {/* content */}
        <div className="post-body">
          {children}
        </div>

      </div>

      <style>{`
        .post-body { color: var(--text); font-size: 17px; line-height: 1.82; }
        .post-body h2 {
          font-family: 'Syne', sans-serif;
          font-size: clamp(20px, 3vw, 28px);
          font-weight: 700;
          color: var(--white);
          letter-spacing: -0.02em;
          margin: 52px 0 16px;
          padding-top: 8px;
        }
        .post-body h2::before {
          content: attr(data-num);
          display: block;
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          color: var(--accent);
          letter-spacing: 0.15em;
          margin-bottom: 8px;
          opacity: 0.75;
        }
        .post-body h3 {
          font-family: 'Syne', sans-serif;
          font-size: 18px;
          font-weight: 600;
          color: #e8f4ff;
          margin: 32px 0 10px;
        }
        .post-body p { margin-bottom: 18px; }
        .post-body strong { color: var(--white); font-weight: 600; }
        .post-body em { color: var(--white); }
        .post-body code {
          font-family: 'DM Mono', monospace;
          font-size: 0.84em;
          background: rgba(99,195,255,0.08);
          border: 1px solid rgba(99,195,255,0.12);
          color: var(--accent);
          padding: 2px 7px;
          border-radius: 3px;
        }
        .post-body pre {
          background: #0a1018;
          border: 1px solid var(--border);
          border-left: 3px solid var(--accent);
          border-radius: 4px;
          padding: 22px 26px;
          overflow-x: auto;
          margin: 24px 0;
          font-family: 'DM Mono', monospace;
          font-size: 13px;
          line-height: 1.7;
          color: #a8c8e8;
        }
        .post-body pre code { background:none; border:none; color:inherit; padding:0; font-size:inherit; }
        .post-body ul, .post-body ol { margin: 0 0 18px 0; padding-left: 0; list-style: none; }
        .post-body ul li, .post-body ol li {
          display: block !important;
          position: relative; padding-left: 22px; margin-bottom: 10px; font-size: 16px;
          line-height: 1.75;
        }
        .post-body ul li strong, .post-body ol li strong {
          display: inline !important;
        }
        .post-body ul li::before {
          content: '→';
          position: absolute; left: 0; top: 3px;
          font-family: 'DM Mono', monospace;
          font-size: 12px;
          color: var(--accent);
          opacity: 0.6;
        }
        .post-body ol { counter-reset: item; }
        .post-body ol li::before {
          content: counter(item, decimal-leading-zero);
          counter-increment: item;
          position: absolute; left: 0; top: 1px;
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          color: var(--accent);
          opacity: 0.6;
        }
        .post-body .callout {
          background: var(--bg1);
          border: 1px solid var(--border);
          border-left: 3px solid var(--accent3);
          border-radius: 4px;
          padding: 18px 22px;
          margin: 24px 0;
        }
        .post-body .callout .callout-label {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--accent3);
          display: block;
          margin-bottom: 6px;
        }
        .post-body .callout p { margin: 0; font-size: 15px; }
        .post-body .callout .fix-label {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--accent2);
          display: block;
          margin: 10px 0 4px;
        }
        .post-body hr {
          border: none;
          border-top: 1px solid var(--border);
          margin: 48px 0 32px;
        }
        .post-body a { color: var(--accent); text-decoration: underline; text-underline-offset: 3px; opacity: 0.85; }
        .post-body a:hover { opacity: 1; }
        .post-body hr + p {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 0;
        }
        .post-body hr + p a {
          display: inline-flex;
          align-items: center;
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          text-decoration: none;
          padding: 10px 20px;
          border-radius: 3px;
          border: 1px solid var(--border2);
          background: var(--bg1);
          color: var(--text);
          opacity: 1;
          transition: border-color 0.15s, color 0.15s, background 0.15s;
        }
        .post-body hr + p a:first-child {
          background: var(--accent);
          color: var(--bg);
          border-color: var(--accent);
          font-weight: 500;
        }
        .post-body hr + p a:first-child:hover {
          background: #8dd6ff;
          border-color: #8dd6ff;
          color: var(--bg);
          opacity: 1;
        }
        .post-body hr + p a:not(:first-child):hover {
          border-color: var(--accent);
          color: var(--accent);
          background: rgba(99,195,255,0.05);
          opacity: 1;
        }
        .post-body table {
          width: 100%; border-collapse: collapse; margin: 24px 0; font-size: 14px;
        }
        .post-body th {
          font-family: 'DM Mono', monospace; font-size: 10px;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: var(--muted); text-align: left;
          padding: 10px 14px; border-bottom: 1px solid var(--border2);
        }
        .post-body td {
          padding: 10px 14px; border-bottom: 1px solid var(--border);
          color: var(--text); vertical-align: top;
        }
        .post-body td:first-child { color: var(--accent); font-family: 'DM Mono', monospace; font-size: 13px; }
      `}</style>
    </article>
  );
}
