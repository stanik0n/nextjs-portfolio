"use client";
import { useRouter } from "next/navigation";
import { projects } from "@/lib/data";
import { SectionLabel, SectionTitle } from "./SectionHeading";

const tagColors: Record<string, string> = {
  accent: "var(--accent)",
  accent2: "var(--accent2)",
  accent3: "var(--accent3)",
};

export default function Projects() {
  const router = useRouter();

  function handleCardClick(links: typeof projects[0]["links"]) {
    const internal = links.find((l) => l.href.startsWith("/"));
    if (internal) {
      router.push(internal.href);
      return;
    }
    const external = links.find((l) => l.href !== "#");
    if (external) window.open(external.href, "_blank", "noreferrer");
  }

  return (
    <section
      id="projects"
      className="py-28"
      style={{ background: "var(--bg1)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}
    >
      <div className="max-w-6xl mx-auto px-12">
        <SectionLabel>02 / Work</SectionLabel>
        <SectionTitle>Projects</SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((p) => (
            <div
              key={p.id}
              className={`rounded-lg overflow-hidden flex flex-col transition-all duration-300 group ${
                p.featured ? "md:col-span-2 md:grid md:grid-cols-2" : ""
              }`}
              style={{ background: "var(--bg)", border: "1px solid var(--border)", cursor: "pointer" }}
              onClick={() => handleCardClick(p.links)}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "var(--border2)";
                el.style.transform = "translateY(-3px)";
                el.style.boxShadow = "0 20px 55px rgba(0,0,0,0.45)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "var(--border)";
                el.style.transform = "";
                el.style.boxShadow = "";
              }}
            >
              <div
                className="relative overflow-hidden flex items-center justify-center"
                style={{ background: "var(--bg2)", minHeight: p.featured ? "260px" : "200px" }}
              >
                <ProjectViz id={p.id} />
              </div>

              <div className={`flex flex-col p-7 ${p.featured ? "justify-center" : ""}`}>
                <div
                  className="font-mono text-[10px] uppercase tracking-wider mb-2"
                  style={{ color: tagColors[p.tagColor] || "var(--accent)" }}
                >
                  {p.tag}
                </div>
                <h3
                  className="font-display font-bold mb-2 tracking-tight"
                  style={{ fontSize: p.featured ? "26px" : "20px", color: "var(--white)", letterSpacing: "-0.02em" }}
                >
                  {p.title}
                </h3>
                <p className="text-[14px] leading-relaxed mb-4 flex-1" style={{ color: "var(--text)" }}>
                  {p.desc}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-[10px] px-2 py-0.5 rounded-sm"
                      style={{ color: "var(--muted)", background: "var(--bg2)", border: "1px solid var(--border)" }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {p.links.map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      target={l.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="font-mono text-[11px] uppercase tracking-wider transition-opacity hover:opacity-60"
                      style={{ color: l.primary ? "var(--accent)" : "var(--muted)" }}
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectViz({ id }: { id: string }) {
  if (id === "skystream") {
    return (
      <svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <pattern id="g" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(99,195,255,0.06)" strokeWidth="1" />
        </pattern>
        <rect width="480" height="300" fill="url(#g)" />
        <radialGradient id="mg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#63c3ff" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#63c3ff" stopOpacity="0" />
        </radialGradient>
        <rect width="480" height="300" fill="url(#mg)" />
        <g opacity="0.35">
          <polyline points="30,190 120,155 220,135 330,115 430,85" fill="none" stroke="#22c55e" strokeWidth="1" strokeDasharray="4,4" />
          <polyline points="70,55 155,95 240,125 340,155 440,195" fill="none" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4,4" />
          <polyline points="15,130 100,122 200,115 305,108 405,95" fill="none" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4,4" />
          <polyline points="55,265 140,230 240,195 340,172 430,152" fill="none" stroke="#f97316" strokeWidth="1" strokeDasharray="4,4" />
        </g>
        <polygon points="0,0 -4,7 0,4 4,7" fill="#22c55e" transform="translate(430,85) rotate(-45)">
          <animateMotion dur="20s" repeatCount="indefinite" path="M0,0 L-400,105" />
        </polygon>
        <polygon points="0,0 -4,7 0,4 4,7" fill="#3b82f6" transform="translate(70,55) rotate(40)">
          <animateMotion dur="24s" repeatCount="indefinite" path="M0,0 L370,140" />
        </polygon>
        <polygon points="0,0 -4,7 0,4 4,7" fill="#f97316" transform="translate(430,152) rotate(-155)">
          <animateMotion dur="22s" repeatCount="indefinite" path="M0,0 L-375,113" />
        </polygon>
        <circle cx="240" cy="150" r="4" fill="rgba(99,195,255,0.5)">
          <animate attributeName="r" values="4;44;4" dur="4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.5;0;0.5" dur="4s" repeatCount="indefinite" />
        </circle>
        <text x="20" y="284" fontFamily="monospace" fontSize="9" fill="rgba(99,195,255,0.35)" letterSpacing="2">
          SKYSTREAM LIVE ~9,000 AIRCRAFT
        </text>
      </svg>
    );
  }
  if (id === "url-shortener") {
    return (
      <svg viewBox="0 0 280 180" xmlns="http://www.w3.org/2000/svg" className="w-4/5 h-4/5">
        <radialGradient id="ug">
          <stop offset="0%" stopColor="#00e5b0" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#00e5b0" stopOpacity="0" />
        </radialGradient>
        <rect width="280" height="180" fill="url(#ug)" />
        <g fontFamily="monospace" fontSize="9" fill="rgba(0,229,176,0.65)" letterSpacing="1">
          <rect x="20" y="70" width="60" height="30" rx="3" fill="rgba(0,229,176,0.05)" stroke="rgba(0,229,176,0.25)" strokeWidth="1" />
          <text x="50" y="88" textAnchor="middle">REQUEST</text>
          <rect x="110" y="70" width="60" height="30" rx="3" fill="rgba(0,229,176,0.05)" stroke="rgba(0,229,176,0.25)" strokeWidth="1" />
          <text x="140" y="88" textAnchor="middle">REDIS</text>
          <rect x="200" y="70" width="60" height="30" rx="3" fill="rgba(0,229,176,0.04)" stroke="rgba(0,229,176,0.2)" strokeWidth="1" />
          <text x="230" y="88" textAnchor="middle">POSTGRES</text>
          <line x1="80" y1="85" x2="108" y2="85" stroke="rgba(0,229,176,0.4)" strokeWidth="1" />
          <line x1="170" y1="85" x2="198" y2="85" stroke="rgba(0,229,176,0.25)" strokeWidth="1" strokeDasharray="3,3" />
        </g>
        <circle cx="140" cy="85" r="3" fill="rgba(0,229,176,0.7)">
          <animate attributeName="opacity" values="1;0.2;1" dur="1.8s" repeatCount="indefinite" />
        </circle>
      </svg>
    );
  }
  if (id === "finsight") {
    return (
      <svg viewBox="0 0 280 180" xmlns="http://www.w3.org/2000/svg" className="w-4/5 h-4/5">
        <defs>
          <linearGradient id="fg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#63c3ff" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#00e5b0" stopOpacity="0.02" />
          </linearGradient>
        </defs>
        <rect width="280" height="180" rx="12" fill="url(#fg)" />
        <rect x="22" y="24" width="236" height="132" rx="8" fill="rgba(8,14,24,0.72)" stroke="rgba(99,195,255,0.16)" strokeWidth="1" />
        <rect x="34" y="38" width="66" height="18" rx="4" fill="rgba(99,195,255,0.08)" stroke="rgba(99,195,255,0.18)" strokeWidth="1" />
        <text x="67" y="50" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="rgba(99,195,255,0.62)">MARKETS</text>

        <rect x="34" y="68" width="96" height="56" rx="6" fill="rgba(99,195,255,0.04)" stroke="rgba(99,195,255,0.16)" strokeWidth="1" />
        <polyline
          points="42,112 56,101 69,104 82,88 96,93 110,78 122,82"
          fill="none"
          stroke="rgba(99,195,255,0.5)"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="122" cy="82" r="3" fill="rgba(99,195,255,0.7)">
          <animate attributeName="opacity" values="1;0.35;1" dur="2.4s" repeatCount="indefinite" />
        </circle>

        <rect x="144" y="68" width="46" height="56" rx="6" fill="rgba(0,229,176,0.04)" stroke="rgba(0,229,176,0.18)" strokeWidth="1" />
        {[0, 1, 2, 3].map((i) => (
          <rect key={i} x={153 + i * 8} y={110 - i * 10} width="5" height={10 + i * 10} rx="1" fill="rgba(0,229,176,0.45)" />
        ))}

        <rect x="202" y="68" width="42" height="56" rx="6" fill="rgba(255,107,53,0.04)" stroke="rgba(255,107,53,0.16)" strokeWidth="1" />
        <path d="M210 81 H236" stroke="rgba(255,107,53,0.25)" strokeWidth="1" />
        <path d="M210 93 H236" stroke="rgba(255,107,53,0.25)" strokeWidth="1" />
        <path d="M210 105 H228" stroke="rgba(255,107,53,0.25)" strokeWidth="1" />
        <rect x="210" y="114" width="14" height="4" rx="2" fill="rgba(255,107,53,0.5)">
          <animate attributeName="x" values="210;220;210" dur="3.6s" repeatCount="indefinite" />
        </rect>

        <line x1="34" y1="140" x2="244" y2="140" stroke="rgba(99,195,255,0.12)" strokeWidth="1" strokeDasharray="4,4" />
        <circle cx="48" cy="140" r="2.5" fill="rgba(0,229,176,0.7)">
          <animateMotion dur="5s" repeatCount="indefinite" path="M0,0 L188,0" />
        </circle>
        <text x="34" y="154" fontFamily="monospace" fontSize="8" fill="rgba(99,195,255,0.4)" letterSpacing="1">
          FINSIGHT AI QUERY PORTFOLIO NEWS
        </text>
      </svg>
    );
  }
  if (id === "nypd") {
    return (
      <svg viewBox="0 0 280 180" xmlns="http://www.w3.org/2000/svg" className="w-4/5 h-4/5">
        <radialGradient id="ng">
          <stop offset="0%" stopColor="#63c3ff" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#63c3ff" stopOpacity="0" />
        </radialGradient>
        <rect width="280" height="180" fill="url(#ng)" />
        {[
          { x: 30, h: 90, label: "BK" },
          { x: 75, h: 65, label: "MN" },
          { x: 120, h: 75, label: "BX" },
          { x: 165, h: 40, label: "QN" },
          { x: 210, h: 25, label: "SI" },
        ].map(({ x, h, label }) => (
          <g key={label}>
            <rect x={x} y={140 - h} width="30" height={h} rx="2" fill="rgba(99,195,255,0.12)" stroke="rgba(99,195,255,0.3)" strokeWidth="1" />
            <text x={x + 15} y="155" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="rgba(99,195,255,0.5)">
              {label}
            </text>
          </g>
        ))}
        <line x1="20" y1="140" x2="250" y2="140" stroke="rgba(99,195,255,0.15)" strokeWidth="1" />
        <text x="20" y="20" fontFamily="monospace" fontSize="8" fill="rgba(99,195,255,0.35)" letterSpacing="1">
          ARRESTS BY BOROUGH 500K+ RECORDS
        </text>
      </svg>
    );
  }
  if (id === "ev-adoption") {
    return (
      <svg viewBox="0 0 280 180" xmlns="http://www.w3.org/2000/svg" className="w-4/5 h-4/5">
        <radialGradient id="eg">
          <stop offset="0%" stopColor="#00e5b0" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#00e5b0" stopOpacity="0" />
        </radialGradient>
        <rect width="280" height="180" fill="url(#eg)" />
        <polyline
          points="20,145 55,138 90,128 125,112 160,90 195,62 230,38 260,20"
          fill="none"
          stroke="rgba(0,229,176,0.5)"
          strokeWidth="1.5"
        />
        <polyline
          points="20,145 55,138 90,128 125,112 160,90 195,62 230,38 260,20"
          fill="none"
          stroke="rgba(0,229,176,0.15)"
          strokeWidth="6"
        />
        {[
          { x: 20, label: "2013" },
          { x: 125, label: "2018" },
          { x: 260, label: "2024" },
        ].map(({ x, label }) => (
          <text key={label} x={x} y="165" fontFamily="monospace" fontSize="7" fill="rgba(0,229,176,0.35)" textAnchor="middle">
            {label}
          </text>
        ))}
        <circle cx="260" cy="20" r="4" fill="rgba(0,229,176,0.6)">
          <animate attributeName="r" values="4;10;4" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.6;0;0.6" dur="3s" repeatCount="indefinite" />
        </circle>
        <text x="20" y="18" fontFamily="monospace" fontSize="8" fill="rgba(0,229,176,0.4)" letterSpacing="1">
          EV ADOPTION 200K TO 4M REGISTERED
        </text>
      </svg>
    );
  }
  if (id === "cnc") {
    return (
      <svg viewBox="0 0 280 180" xmlns="http://www.w3.org/2000/svg" className="w-4/5 h-4/5">
        <radialGradient id="cg">
          <stop offset="0%" stopColor="#ff6b35" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#ff6b35" stopOpacity="0" />
        </radialGradient>
        <rect width="280" height="180" fill="url(#cg)" />
        {[0, 1, 2, 3, 4].map((i) => (
          <line key={`h${i}`} x1="30" y1={40 + i * 25} x2="250" y2={40 + i * 25} stroke="rgba(255,107,53,0.08)" strokeWidth="1" />
        ))}
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <line key={`v${i}`} x1={30 + i * 37} y1="40" x2={30 + i * 37} y2="140" stroke="rgba(255,107,53,0.08)" strokeWidth="1" />
        ))}
        <polyline
          points="80,140 80,90 140,90 140,65 200,65 200,90 140,90 140,115 200,115 200,140"
          fill="none"
          stroke="rgba(255,107,53,0.45)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="80" cy="140" r="4" fill="rgba(255,107,53,0.7)">
          <animateMotion dur="5s" repeatCount="indefinite" path="M0,0 L0,-50 L60,-50 L60,-75 L120,-75 L120,-50 L60,-50 L60,-25 L120,-25 L120,0" />
        </circle>
        <text x="20" y="18" fontFamily="monospace" fontSize="8" fill="rgba(255,107,53,0.45)" letterSpacing="1">
          CNC PLOTTER ARDUINO + ESP32 + GRBL
        </text>
      </svg>
    );
  }
  return null;
}
