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
        A URL shortener is one of those problems that looks trivial until you start thinking about
        what actually happens at scale. I built this to work through some real system design
        questions: how do you keep redirects fast under heavy traffic? How do you track analytics
        without slowing down the hot path?
      </p>

      <h2 data-num="01 — PROBLEM">The Problem</h2>
      <p>
        At its core, a URL shortener needs to do three things: store a mapping, redirect fast, and
        track clicks. The redirect speed is user-visible, so that has to be as fast as possible.
        Click tracking is important but can afford some latency. These two requirements pull in
        different directions if you treat them the same way.
      </p>
      <ul>
        <li>Redirects need to be near-instant — every added millisecond shows up in user experience</li>
        <li>Synchronous database writes on every redirect don't scale</li>
        <li>Analytics need to be accurate, but don't need to be real-time to the millisecond</li>
      </ul>

      <h2 data-num="02 — DESIGN">The Design</h2>
      <p>
        The system is built around three components: FastAPI for the backend, Redis for caching and
        counters, and PostgreSQL as the source of truth. Redirects follow a cache-first path.
        Analytics are handled asynchronously by a background worker.
      </p>
      <pre>{`Request → Redis (cache hit?)
              ├── HIT  → return long URL immediately
              └── MISS → query PostgreSQL → populate cache → return URL

Click tracking → Redis counter (atomic INCR)
Background worker → flush counters to PostgreSQL in batches`}</pre>

      <h2 data-num="03 — HOT PATH">The Redirect Path</h2>
      <p>
        When a user hits a short URL, the system checks Redis first. On a cache hit, the long URL
        comes back immediately with no database involvement. On a miss, it falls through to
        PostgreSQL, fetches the URL, populates the cache, and returns it. After the first request,
        subsequent redirects for the same code never touch the database.
      </p>

      <h2 data-num="04 — ANALYTICS">Click Tracking</h2>
      <p>
        Rather than writing to PostgreSQL on every redirect, each request atomically increments a
        Redis counter for that short code. A background worker runs on an interval, reads those
        counters, flushes them to PostgreSQL in batches, and resets the Redis values. The stats
        endpoint combines the persisted count with whatever is still pending in Redis, so the
        numbers stay accurate without adding latency to the redirect path.
      </p>

      <h2 data-num="05 — UI">Web UI</h2>
      <p>
        I added a lightweight frontend using HTML, CSS, and vanilla JavaScript so the system is
        easy to demo and validate. You can create shortened URLs with optional custom aliases, and
        the stats panel auto-refreshes to show click counts without a manual reload.
      </p>

      <h2 data-num="06 — DEPLOY">Deployment</h2>
      <p>
        Everything runs in Docker Compose: the API, Redis, PostgreSQL, and the background worker.
        One command to bring it all up locally.
      </p>
      <pre>{`docker compose up --build
# → API:       http://localhost:8000
# → Docs:      http://localhost:8000/docs
# → Dashboard: http://localhost:8000/ui`}</pre>

      <h2 data-num="07 — LEARNINGS">What I Learned</h2>
      <ul>
        <li><strong>Cache-first reads change everything.</strong> Once the cache warms up, almost no redirects hit the database. The latency difference is significant.</li>
        <li><strong>Decouple your write paths.</strong> Moving click tracking off the redirect path and into a background worker is a pattern that shows up constantly in production systems.</li>
        <li><strong>Simple problems are good vehicles for real design thinking.</strong> There's nothing novel about a URL shortener, but working through the tradeoffs forces you to actually reason about the architecture.</li>
      </ul>

      <hr />
      <p>
        <a href="https://github.com/stanik0n/url-shortener" target="_blank" rel="noreferrer">GitHub Repository →</a>
      </p>
    </PostLayout>
  );
}
