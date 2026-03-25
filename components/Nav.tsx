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
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-12 py-4 transition-all"
        style={{
          background: scrolled || open ? "rgba(7,9,13,0.95)" : "rgba(7,9,13,0.5)",
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

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 list-none">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-mono text-[11px] uppercase tracking-widest transition-colors duration-200"
                style={{ color: "var(--text)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--text)")}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="mailto:tanikondasairajesh@gmail.com"
          className="hidden md:block font-mono text-[11px] uppercase tracking-widest px-4 py-2 rounded-sm transition-all"
          style={{ color: "var(--accent)", border: "1px solid var(--border2)" }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(99,195,255,0.08)"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
        >
          Hire me ↗
        </a>

        {/* Hamburger button */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            className="block w-5 h-px transition-all duration-300"
            style={{
              background: "var(--text)",
              transform: open ? "translateY(5px) rotate(45deg)" : "none",
            }}
          />
          <span
            className="block w-5 h-px transition-all duration-300"
            style={{
              background: "var(--text)",
              opacity: open ? 0 : 1,
            }}
          />
          <span
            className="block w-5 h-px transition-all duration-300"
            style={{
              background: "var(--text)",
              transform: open ? "translateY(-5px) rotate(-45deg)" : "none",
            }}
          />
        </button>
      </nav>

      {/* Mobile menu drawer */}
      <div
        className="fixed inset-0 z-40 md:hidden transition-all duration-300"
        style={{
          pointerEvents: open ? "auto" : "none",
          opacity: open ? 1 : 0,
        }}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0"
          style={{ background: "rgba(7,9,13,0.6)" }}
          onClick={() => setOpen(false)}
        />

        {/* Panel */}
        <div
          className="absolute top-[57px] left-0 right-0 px-8 py-6 flex flex-col gap-1 transition-transform duration-300"
          style={{
            background: "rgba(7,9,13,0.97)",
            borderBottom: "1px solid var(--border)",
            backdropFilter: "blur(18px)",
            transform: open ? "translateY(0)" : "translateY(-8px)",
          }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-[13px] uppercase tracking-widest py-3 transition-colors duration-200"
              style={{ color: "var(--text)", borderBottom: "1px solid var(--border)" }}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="mailto:tanikondasairajesh@gmail.com"
            className="font-mono text-[13px] uppercase tracking-widest py-3 mt-1"
            style={{ color: "var(--accent)" }}
            onClick={() => setOpen(false)}
          >
            Hire me ↗
          </a>
        </div>
      </div>
    </>
  );
}
