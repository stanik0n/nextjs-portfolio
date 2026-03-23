"use client";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* grid bg */}
      <div
        className="absolute inset-0 grid-bg"
        style={{
          maskImage:
            "radial-gradient(ellipse 75% 65% at 60% 50%, black 20%, transparent 80%)",
        }}
      />
      {/* glows */}
      <div
        className="absolute pointer-events-none"
        style={{
          right: "-80px", top: "50%", transform: "translateY(-50%)",
          width: "680px", height: "680px",
          background: "radial-gradient(circle, rgba(99,195,255,0.05) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          left: "8%", bottom: "8%",
          width: "380px", height: "380px",
          background: "radial-gradient(circle, rgba(0,229,176,0.03) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-12 grid grid-cols-1 md:grid-cols-2 gap-14 items-center w-full">
        {/* left */}
        <div>
          <div
            className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] mb-6"
            style={{ color: "var(--accent)", opacity: 0, animation: "fade-up 0.7s 0.1s ease forwards" }}
          >
            <span className="block w-7 h-px" style={{ background: "var(--accent)", opacity: 0.5 }} />
            Data Engineer · Houston, TX
          </div>

          <h1
            className="font-display font-extrabold tracking-tight mb-6"
            style={{
              fontSize: "clamp(44px,6.5vw,88px)", lineHeight: 0.96,
              letterSpacing: "-0.04em", color: "var(--white)",
              opacity: 0, animation: "fade-up 0.7s 0.2s ease forwards",
            }}
          >
            Sai Rajesh
            <br />
            <span
              style={{
                color: "transparent",
                WebkitTextStroke: "1px rgba(99,195,255,0.35)",
              }}
            >
              Tanikonda
            </span>
          </h1>

          <p
            className="text-[17px] leading-relaxed max-w-md mb-9"
            style={{
              color: "var(--text)",
              opacity: 0, animation: "fade-up 0.7s 0.3s ease forwards",
            }}
          >
            I build scalable data pipelines and cloud-based data platforms that
            turn raw data into reliable, high-impact systems. Focused on data
            architecture, ETL development, and performance optimization.
          </p>

          <div
            className="flex gap-3 flex-wrap"
            style={{ opacity: 0, animation: "fade-up 0.7s 0.4s ease forwards" }}
          >
            <a
              href="#projects"
              className="font-mono text-xs uppercase tracking-wider px-6 py-3 rounded-sm transition-all"
              style={{ background: "var(--accent)", color: "var(--bg)", fontWeight: 500 }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#8dd6ff"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "var(--accent)"; }}
            >
              View Projects ↓
            </a>
            <a
              href="#contact"
              className="font-mono text-xs uppercase tracking-wider px-6 py-3 rounded-sm transition-all"
              style={{ border: "1px solid var(--border2)", color: "var(--text)" }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "var(--accent)"; el.style.color = "var(--accent)"; el.style.background = "rgba(99,195,255,0.05)"; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "var(--border2)"; el.style.color = "var(--text)"; el.style.background = "transparent"; }}
            >
              Get in touch
            </a>
          </div>
        </div>

        {/* right — stats panel */}
        <div style={{ opacity: 0, animation: "fade-up 0.7s 0.5s ease forwards" }}>
          <div className="rounded-lg overflow-hidden" style={{ background: "var(--bg1)", border: "1px solid var(--border)" }}>
            <div className="flex items-center gap-3 px-5 py-3 font-mono text-[11px] tracking-wider" style={{ background: "var(--bg2)", borderBottom: "1px solid var(--border)", color: "var(--muted)" }}>
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
              </div>
              pipeline.status
            </div>
            <div className="p-6 space-y-0">
              {[
                ["EXPERIENCE",       "4+",      "YRS"],
                ["AIRCRAFT TRACKED", "~9,000",  "LIVE"],
                ["PIPELINE LATENCY", "<5",      "SEC"],
                ["ARREST RECORDS",   "500K+",   "ANALYZED"],
                ["EDUCATION",        "MS MIS",  "UH"],
              ].map(([label, val, unit]) => (
                <div key={label} className="flex justify-between items-baseline py-3" style={{ borderBottom: "1px solid var(--border)" }}>
                  <span className="font-mono text-[11px] tracking-wider" style={{ color: "var(--muted)" }}>{label}</span>
                  <span className="font-display font-bold text-lg" style={{ color: "var(--white)" }}>
                    {val}{" "}
                    <span className="font-mono font-normal text-[10px]" style={{ color: "var(--accent)" }}>{unit}</span>
                  </span>
                </div>
              ))}
              <div className="flex items-center gap-2 pt-4 font-mono text-[11px]" style={{ color: "var(--accent2)" }}>
                <PulseDot />
                SkyStream pipeline · live
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* scroll hint */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.15em]"
        style={{ color: "var(--muted2)", opacity: 0, animation: "fade-up 1s 1.1s ease forwards" }}
      >
        <div
          className="w-px h-9 animate-scroll-line"
          style={{ background: "linear-gradient(to bottom, var(--muted2), transparent)" }}
        />
        scroll
      </div>
    </section>
  );
}

function PulseDot() {
  return (
    <span className="relative inline-block w-2 h-2">
      <span className="block w-full h-full rounded-full" style={{ background: "var(--accent2)" }} />
      <span
        className="absolute inset-0 rounded-full animate-pulse-ring"
        style={{ border: "1px solid var(--accent2)" }}
      />
    </span>
  );
}
