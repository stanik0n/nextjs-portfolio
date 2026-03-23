export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-4 font-mono text-[11px] uppercase tracking-[0.18em]" style={{ color: "var(--accent)" }}>
      {children}
      <span className="block h-px w-14" style={{ background: "var(--border2)" }} />
    </div>
  );
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="font-display font-extrabold tracking-tight mb-3"
      style={{ fontSize: "clamp(30px,4.5vw,52px)", color: "var(--white)", lineHeight: 1.06, letterSpacing: "-0.03em" }}
    >
      {children}
    </h2>
  );
}
