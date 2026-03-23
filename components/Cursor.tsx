"use client";
import { useEffect } from "react";

export default function Cursor() {
  useEffect(() => {
    const cursor = document.getElementById("cursor");
    const ring = document.getElementById("cursor-ring");
    const move = (e: MouseEvent) => {
      if (cursor) { cursor.style.left = e.clientX + "px"; cursor.style.top = e.clientY + "px"; }
      if (ring)   { ring.style.left   = e.clientX + "px"; ring.style.top   = e.clientY + "px"; }
    };
    const grow = () => { if (ring) { ring.style.width = "48px"; ring.style.height = "48px"; ring.style.borderColor = "rgba(99,195,255,0.7)"; } };
    const shrink = () => { if (ring) { ring.style.width = "32px"; ring.style.height = "32px"; ring.style.borderColor = "rgba(99,195,255,0.35)"; } };

    document.addEventListener("mousemove", move);
    document.querySelectorAll("a, button").forEach(el => {
      el.addEventListener("mouseenter", grow);
      el.addEventListener("mouseleave", shrink);
    });
    return () => document.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div id="cursor" />
      <div id="cursor-ring" />
    </>
  );
}
