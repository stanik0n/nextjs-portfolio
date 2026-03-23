import type { Metadata } from "next";
import PostLayout from "@/components/PostLayout";

export const metadata: Metadata = {
  title: "Building SkyStream — Sai Rajesh Tanikonda",
  description:
    "A real-time flight tracking pipeline: Kafka, Spark Structured Streaming, Redis, FastAPI WebSockets, and deck.gl — processing 9,000 aircraft with sub-5-second latency.",
};

export default function SkyStreamPost() {
  return (
    <PostLayout
      title="Building SkyStream: A Real-Time Flight Tracking Pipeline"
      date="2026"
      category="Case Study · Deep Dive"
      stack={["Python", "Apache Kafka", "Spark Streaming", "Redis", "TimescaleDB", "FastAPI", "deck.gl", "Docker"]}
    >
      <h2 data-num="01 — MOTIVATION">Why I Built This</h2>
      <p>
        Flight data is one of the best publicly available real-time datasets. Aircraft broadcast their position,
        altitude, speed, and heading every few seconds via ADS-B transponders — and APIs like airplanes.live
        aggregate this into a free global feed of roughly <strong>9,000 aircraft</strong> at any given moment.
      </p>
      <p>
        I wanted to build something that demonstrated a <em>complete</em> data engineering stack — not a tutorial
        toy, but a system with real throughput, real latency constraints, and real architectural tradeoffs.
        Flight tracking hit all of those boxes.
      </p>

      <h2 data-num="02 — ARCHITECTURE">System Architecture</h2>
      <p>
        The system has two paths: a <strong>hot path</strong> for live positions and a <strong>cold path</strong>{" "}
        for historical storage. Everything runs in Docker containers orchestrated with Docker Compose on a Linux VPS.
      </p>
      <pre>{`airplanes.live API
       │
       ▼
   Producer (Python)
       │  Kafka topic: raw-flights
       ▼
   Spark Structured Streaming
       │
       ├──▶ Redis          ← live state cache (hot path)
       └──▶ TimescaleDB    ← historical trail storage (cold path)
                │
                ▼
         FastAPI WebSocket API
                │
                ▼
         React + deck.gl frontend`}</pre>

      <h2 data-num="03 — STACK">The Stack</h2>
      <table>
        <thead><tr><th>Layer</th><th>Technology</th></tr></thead>
        <tbody>
          {[
            ["Data source",      "airplanes.live ADS-B API"],
            ["Message broker",   "Apache Kafka (4 partitions, 24hr retention)"],
            ["Stream processor", "Spark Structured Streaming (5s micro-batches)"],
            ["Time-series DB",   "TimescaleDB (PostgreSQL extension)"],
            ["Live cache",       "Redis (HSET per aircraft)"],
            ["Backend API",      "FastAPI + WebSockets"],
            ["Frontend",         "React + deck.gl + MapLibre GL"],
            ["Deployment",       "Docker Compose on Linux VPS"],
          ].map(([l, t]) => (
            <tr key={l}><td>{l}</td><td>{t}</td></tr>
          ))}
        </tbody>
      </table>

      <h2 data-num="04 — INGESTION">The Producer & Kafka</h2>
      <p>
        A Python service polls airplanes.live every 10 seconds, pulling ~9,000 aircraft states per cycle.
        Each state is validated with Pydantic and published to the <code>raw-flights</code> Kafka topic.
        The geographic coverage is configurable via a bounding box environment variable — the contiguous US
        requires a ~1,700nm radius query. Each cycle publishes around <strong>8,800 messages in under one second</strong>.
      </p>
      <p>
        Kafka acts as the buffer between the producer and Spark, providing three key guarantees:
      </p>
      <ul>
        <li>Spark can fall behind without data loss (24-hour log retention)</li>
        <li>Multiple consumers can read the same topic independently</li>
        <li>The producer never blocks on downstream slowness</li>
      </ul>

      <h2 data-num="05 — PROCESSING">Spark Structured Streaming</h2>
      <p>
        Spark reads from the Kafka topic, parses the JSON payloads, enriches each record with a computed{" "}
        <code>flight_phase</code>, and writes to two sinks every 5 seconds.
      </p>
      <pre>{`vertical_rate > +2 m/s   →  CLIMBING
vertical_rate < -2 m/s   →  DESCENDING
on_ground = true          →  GROUND
otherwise                 →  CRUISE`}</pre>
      <p>
        <strong>Sink 1 — TimescaleDB:</strong> stores every position update as a time-series row.
        TimescaleDB's hypertable partitions data automatically by time, making range queries fast.
      </p>
      <p>
        <strong>Sink 2 — Redis:</strong> stores the latest state per aircraft in a hash
        (<code>HSET flights {"{icao24}"} {"{json}"}</code>). The WebSocket server reads from here for
        live positions with minimal latency.
      </p>
      <p>
        A critical decision: Redis writes happen <em>before</em> Postgres writes, and Postgres failures
        never block the Redis write. Independent sinks, independent failure modes.
      </p>

      <h2 data-num="06 — FRONTEND">The Map Interface</h2>
      <p>
        The map is built with <strong>deck.gl</strong> on top of MapLibre GL. deck.gl's{" "}
        <code>IconLayer</code> renders thousands of aircraft icons with GPU acceleration — smooth at
        9,000+ points without breaking a sweat. Aircraft icons rotate to match their heading and are
        colored by flight phase (green climbing, blue cruise, orange descending, gray ground).
        Trail lines use <code>PathLayer</code> showing each aircraft's recent path as a colored polyline.
      </p>
      <p>
        The UI is fully responsive. On mobile, the aircraft info panel becomes a bottom sheet and the
        tracked flights panel becomes a horizontal scroll strip at the top.
      </p>

      <h2 data-num="07 — BUGS">Problems I Actually Hit</h2>

      <div className="callout">
        <span className="callout-label">⚠ Zero aircraft after redeploy</span>
        <p>Spark replayed old Kafka messages → all Redis entries had stale timestamps → WebSocket filtered everything → empty map.</p>
        <span className="fix-label">Fix</span>
        <p>Delete the Spark checkpoint and restart from the latest Kafka offset.</p>
      </div>

      <div className="callout">
        <span className="callout-label">⚠ Postgres failure taking down the live map</span>
        <p>Spark's <code>process_batch</code> wrote to Postgres first, then Redis. A missing database raised an exception that skipped the Redis write entirely.</p>
        <span className="fix-label">Fix</span>
        <p>Write to Redis first. Wrap the Postgres write in its own <code>try/except</code>.</p>
      </div>

      <div className="callout">
        <span className="callout-label">⚠ Data source 404 on global radius</span>
        <p>adsb.fi returns 404 for any radius over ~3,000nm.</p>
        <span className="fix-label">Fix</span>
        <p>Switched to airplanes.live which supports up to a 10,000nm global radius.</p>
      </div>

      <div className="callout">
        <span className="callout-label">⚠ Map auto-following locked aircraft</span>
        <p>The map re-centered every 5 seconds even when the user tried to pan away.</p>
        <span className="fix-label">Fix</span>
        <p>Detect <code>isDragging</code> in deck.gl's <code>onViewStateChange</code> and clear the tracking lock on user interaction.</p>
      </div>

      <h2 data-num="08 — LEARNINGS">What I Learned</h2>
      <ul>
        <li><strong>Checkpoints are double-edged.</strong> Spark checkpoints give fault tolerance but cause stale data replays after downtime. Always have a plan for resetting them.</li>
        <li><strong>Design sinks to be independent.</strong> One sink failing should never take down another.</li>
        <li><strong>Coordinate TTLs and staleness filters.</strong> If your consumer filters records older than 2 minutes, your producer must write fresher than that under all failure scenarios.</li>
        <li><strong>deck.gl handles scale beautifully.</strong> WebGL-accelerated rendering handles 9,000+ moving points without issue. The layer API is clean and composable.</li>
        <li><strong>WebSocket fan-out at scale needs care.</strong> Sending 9,000 aircraft to 100 concurrent users every 5 seconds is ~90MB/s. Viewport filtering is the next optimization.</li>
      </ul>

      <h2 data-num="09 — ROADMAP">What&apos;s Next</h2>
      <ul>
        <li>Viewport-aware broadcasting — only send aircraft visible in the user&apos;s current map view</li>
        <li>Aircraft type enrichment from a static ICAO database</li>
        <li>Anomaly detection — flag unusual squawk codes (7500 hijack, 7700 emergency)</li>
        <li>Historical playback — scrub through a time range and replay recorded flight positions</li>
      </ul>

      <hr />
      <p>
        <a href="https://github.com/stanik0n/skystream" target="_blank" rel="noreferrer">GitHub →</a>
        &nbsp;&nbsp;
        <a href="http://173.212.237.120:5173" target="_blank" rel="noreferrer">Live Demo →</a>
      </p>
    </PostLayout>
  );
}
