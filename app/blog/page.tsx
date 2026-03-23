import type { Metadata } from "next";
import { posts } from "@/lib/data";
import { SectionLabel, SectionTitle } from "@/components/SectionHeading";
import BlogList from "@/components/BlogList";

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

export default function BlogIndex() {
  return (
    <div className="min-h-screen pt-28 pb-24" style={{ background: "var(--bg)" }}>
      <div className="max-w-6xl mx-auto px-12">
        <SectionLabel>Writing</SectionLabel>
        <SectionTitle>Posts & Case Studies</SectionTitle>
        <p className="text-[17px] max-w-xl leading-relaxed mb-16" style={{ color: "var(--muted)" }}>
          Deep dives into the systems I build — the architecture decisions, the failures, and what stuck.
        </p>
        <BlogList posts={allPosts} />
      </div>
    </div>
  );
}
