"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/#about",      label: "About" },
  { href: "/#projects",   label: "Projects" },
  { href: "/#experience", label: "Experience" },
  { href: "/#blog",       label: "Blog" },
  { href: "/#contact",    label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 py-4 transition-all"
      style={{
        background: scrolled ? "rgba(7,9,13,0.85)" : "rgba(7,9,13,0.5)",
        backdropFilter: "blur(18px)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <Link
        href="/"
        className="font-display font-extrabold text-lg tracking-tight"
        style={{ color: "var(--white)" }}
      >
        S<span style={{ color: "var(--accent)" }}>.</span>R
        <span style={{ color: "var(--accent)" }}>.</span>T
      </Link>

      <ul className="hidden md:flex gap-8 list-none">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="font-mono text-[11px] uppercase tracking-widest transition-colors duration-200"
              style={{ color: "var(--muted)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      <a
        href="mailto:sairajesh@rajeshchowdary.com"
        className="font-mono text-[11px] uppercase tracking-widest px-4 py-2 rounded-sm transition-all"
        style={{ color: "var(--accent)", border: "1px solid var(--border2)" }}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(99,195,255,0.08)"; }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
      >
        Hire me ↗
      </a>
    </nav>
  );
}
