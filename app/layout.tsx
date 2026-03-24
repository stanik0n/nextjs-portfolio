import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Cursor from "@/components/Cursor";

export const metadata: Metadata = {
  title: "Sai Rajesh Tanikonda — Data Engineer",
  description:
    "Data Engineer specializing in real-time pipelines, streaming infrastructure, and cloud data platforms. MS MIS, University of Houston.",
  keywords: ["data engineer", "kafka", "spark", "pipeline", "Houston"],
  openGraph: {
    title: "Sai Rajesh Tanikonda — Data Engineer",
    description: "Building scalable data pipelines and cloud-based data platforms.",
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
              © 2026 Sai Rajesh Tanikonda · Data Engineer · Houston, TX
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}
