import type { Metadata } from "next";
import PostLayout from "@/components/PostLayout";

export const metadata: Metadata = {
  title: "Building a Scalable URL Shortener — Sai Rajesh Tanikonda",
  description: "Cache-first architecture, async click tracking, and real-time analytics in a URL shortener built for high read throughput.",
};

export default function UrlShortenerPost() {
  return (
    <PostLayout
      title="Building a Scalable URL Shortener from Scratch"
      date="February 10, 2026"
      category="System Design"
      stack={["FastAPI", "Redis", "PostgreSQL", "Docker", "Python"]}
    >
      <p>
        Modern web systems are often judged not by whether they work, but by{" "}
        <em>how well they scale</em>. In this project, I set out to build a URL shortener that goes beyond
        basic CRUD functionality and instead focuses on <strong>performance, scalability, and real-world
        system design considerations</strong>.
      </p>

      <h2 data-num="01 — PROBLEM">Problem Statement</h2>
      <p>
        At first glance, a URL shortener seems simple: store a long URL, generate a short code, and redirect
        users. However, in real-world scenarios, this problem becomes more interesting:
      </p>
      <ul>
        <li>Redirects must be <strong>extremely fast</strong> — every millisecond of latency is user-visible</li>
        <li>Click analytics should not slow down redirect requests</li>
        <li>The system must handle <strong>high read traffic</strong> with minimal database pressure</li>
        <li>Writes (click tracking) should scale efficiently and independently</li>
        <li>The system should be easy to deploy and reason about</li>
      </ul>

      <h2 data-num="02 — DESIGN">High-Level Design</h2>
      <p>
        The system is built around three core components:
      </p>
      <ul>
        <li><strong>FastAPI</strong> as the backend service</li>
        <li><strong>Redis</strong> for low-latency caching and atomic counters</li>
        <li><strong>PostgreSQL</strong> as the durable source of truth</li>
      </ul>
      <p>
        Redirect requests follow a <strong>cache-first strategy</strong>, while analytics are handled
        asynchronously to keep the hot path fast.
      </p>
      <pre>{`Request → Redis (cache hit?)
              ├── HIT  → return long URL immediately
              └── MISS → query PostgreSQL → populate cache → return URL

Click tracking → Redis counter (atomic INCR)
Background worker → flush counters to PostgreSQL in batches`}</pre>

      <h2 data-num="03 — HOT PATH">Optimizing the Redirect Hot Path</h2>
      <p>
        The most performance-critical operation in a URL shortener is the redirect itself. To optimize:
      </p>
      <ul>
        <li>The system first checks Redis for the short code</li>
        <li>On a cache hit, the long URL is returned immediately — no database touch</li>
        <li>PostgreSQL is only queried on cache misses, then the result is cached for future requests</li>
      </ul>
      <p>
        This ensures that the vast majority of redirect requests avoid database access entirely,
        significantly reducing latency and load on PostgreSQL.
      </p>

      <h2 data-num="04 — ANALYTICS">Asynchronous Click Tracking</h2>
      <p>
        Tracking clicks is important, but performing a synchronous database write on every redirect
        does not scale. The solution:
      </p>
      <ul>
        <li>Each redirect atomically increments a <strong>Redis counter</strong> for that short code</li>
        <li>A background worker periodically flushes these counters to PostgreSQL in batches</li>
        <li>The stats endpoint combines persisted counts from PostgreSQL with pending counts from Redis for near real-time accuracy</li>
      </ul>
      <p>
        This design eliminates database writes from the redirect hot path entirely, reduces write
        amplification, and allows analytics to scale independently from user traffic.
      </p>

      <h2 data-num="05 — UI">Web UI</h2>
      <p>
        To make the system easy to demo and validate, I built a lightweight web UI using HTML, CSS,
        and vanilla JavaScript. The UI allows users to:
      </p>
      <ul>
        <li>Create multiple shortened URLs with optional custom aliases</li>
        <li>View real-time click statistics that auto-refresh without manual reloads</li>
        <li>Visually validate that async analytics are working correctly</li>
      </ul>

      <h2 data-num="06 — DEPLOY">Deployment</h2>
      <p>
        The entire system is containerized using <strong>Docker Compose</strong>, including the API
        service, Redis, PostgreSQL, and the background worker. One-command local setup, consistent
        environments, easy onboarding.
      </p>
      <pre>{`docker compose up --build
# → API:      http://localhost:8000
# → Docs:     http://localhost:8000/docs
# → Dashboard: http://localhost:8000/ui`}</pre>

      <h2 data-num="07 — LEARNINGS">Key Takeaways</h2>
      <ul>
        <li><strong>Cache-first designs dramatically improve read performance.</strong> Most redirects never touch the database.</li>
        <li><strong>Asynchronous processing is essential for scalable analytics.</strong> Decoupling the write path from user-facing requests is a pattern that applies far beyond URL shorteners.</li>
        <li><strong>Good system design matters even for "simple" problems.</strong> A URL shortener is a great vehicle for practicing real architectural thinking.</li>
      </ul>

      <hr />
      <p>
        <a href="https://github.com/stanik0n/url-shortener" target="_blank" rel="noreferrer">GitHub Repository →</a>
      </p>
    </PostLayout>
  );
}
