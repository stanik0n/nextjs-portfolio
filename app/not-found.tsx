import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-center px-8"
      style={{ background: "var(--bg)" }}
    >
      <div
        className="font-display font-extrabold mb-4"
        style={{ fontSize: "120px", color: "transparent", WebkitTextStroke: "1px rgba(99,195,255,0.2)", lineHeight: 1 }}
      >
        404
      </div>
      <div
        className="font-mono text-[11px] uppercase tracking-[0.18em] mb-6"
        style={{ color: "var(--accent)" }}
      >
        Page not found
      </div>
      <p className="text-[17px] mb-10 max-w-sm" style={{ color: "var(--muted)" }}>
        This page doesn&apos;t exist. Maybe it was moved, or you followed a stale link.
      </p>
      <Link
        href="/"
        className="font-mono text-[12px] uppercase tracking-wider px-6 py-3 rounded-sm transition-all"
        style={{ background: "var(--accent)", color: "var(--bg)", fontWeight: 500 }}
      >
        ← Back home
      </Link>
    </div>
  );
}
