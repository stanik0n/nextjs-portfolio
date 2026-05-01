import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Cursor from "@/components/Cursor";

export const metadata: Metadata = {
  title: "Sai Rajesh Tanikonda",
  description:
    "Supply Chain Analyst with experience in procurement, supplier performance, inventory planning, and supply chain operations. MS MIS, University of Houston.",
  keywords: ["supply chain analyst", "procurement", "inventory planning", "supplier performance", "Houston"],
  openGraph: {
    title: "Sai Rajesh Tanikonda - Supply Chain Analyst",
    description: "Supply chain professional specializing in procurement, inventory management, and operational analytics.",
    url: "https://rajeshchowdary.com",
    siteName: "Sai Rajesh Tanikonda",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Cursor />
        <Nav />
        <main>{children}</main>
        <footer className="border-t py-9" style={{ borderColor: "var(--border)" }}>
          <div className="max-w-6xl mx-auto px-12 flex items-center justify-between flex-wrap gap-4">
            <span
              className="font-mono text-xs tracking-wider"
              style={{ color: "var(--muted2)" }}
            >
              Copyright 2026 Sai Rajesh Tanikonda / Supply Chain Analyst / Houston, TX
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}
