import type { Metadata } from "next";
import PostLayout from "@/components/PostLayout";

export const metadata: Metadata = {
  title: "Building FinSight: An AI-Assisted Financial Analytics Platform",
  description:
    "An end-to-end financial analytics product combining market dashboards, portfolio intelligence, warehouse modeling, news aggregation, and a natural-language analysis layer.",
};

export default function FinSightPost() {
  return (
    <PostLayout
      title="Building FinSight: An AI-Assisted Financial Analytics Platform"
      date="April 6, 2026"
      category="Full-Stack Product"
      stack={["React", "FastAPI", "DuckDB", "Apache Spark", "Apache Kafka", "dbt", "Telegram", "Docker"]}
    >
      <p>
        FinSight started as a question I kept coming back to: what would a financial analytics
        product look like if market data, portfolio context, research notes, news, and AI-assisted
        analysis all lived in the same system instead of across five disconnected tools?
      </p>
      <p>
        I wanted something that felt like a real product, not a dashboard demo. That meant going
        past charts and building the plumbing behind them: ingestion jobs, transformations,
        warehouse models, product APIs, authentication, and delivery workflows outside the browser.
      </p>

      <h2 data-num="01 / PRODUCT">What FinSight Does</h2>
      <p>
        FinSight is a full-stack financial analytics platform built around four core surfaces:
        Markets, Analysis, Portfolio, and News. The app gives users benchmark context, sector
        summaries, portfolio tracking, structured research notes, article feeds, and a query layer
        that turns natural-language prompts into data-backed responses.
      </p>
      <ul>
        <li>Market overview with movers, sector summaries, volatility signals, and ticker context</li>
        <li>Portfolio tracking with holdings, watchlist, P&amp;L, concentration, and alert summaries</li>
        <li>Research notes board for thesis, risk, review, and exit-trigger workflows</li>
        <li>News feed with source article pages and links back to the original publishers</li>
        <li>Telegram integration for account linking, portfolio briefs, and delivery workflows</li>
      </ul>

      <h2 data-num="02 / ARCHITECTURE">Architecture</h2>
      <p>
        The system combines external market and news providers with a small analytics platform
        behind the scenes. Data moves through ingestion jobs, streaming transport, warehouse
        modeling, and an application layer that serves both the UI and the AI-assisted analysis
        experience.
      </p>
      <pre>{`Alpaca / Twelve Data / Brave News / yfinance
                    |
                    v
      Ingestion + streaming jobs (Python)
                    |
        +-----------+-----------+
        |                       |
        v                       v
      Kafka                  Spark
        |                 indicator transforms
        +-----------+-----------+
                    |
                    v
               dbt + DuckDB
                    |
                    v
                 FastAPI
           +--------+--------+
           |        |        |
           v        v        v
         React    Query   Telegram
                   layer     bot`}</pre>

      <h2 data-num="03 / DATA FLOW">Data Pipeline</h2>
      <p>
        The pipeline is where the product became interesting. Raw market data comes in from
        providers like Alpaca, Twelve Data, and yfinance. From there, jobs push data through Kafka
        and Spark to compute indicator-oriented features such as RSI, SMA, VWAP deviation, daily
        percent change, and volume z-scores.
      </p>
      <p>
        DuckDB acts as the analytics warehouse, with dbt shaping the raw and transformed data into
        serving-friendly marts for market snapshots, sector summaries, anomaly detection, and query
        context. That structure makes the frontend fast and gives the analysis layer a much cleaner
        surface to work against.
      </p>

      <h2 data-num="04 / APP LAYER">Application Layer</h2>
      <p>
        FastAPI sits at the center of the product. It exposes endpoints for market snapshots, news,
        portfolio operations, notes management, query handling, and Telegram workflows. I liked this
        setup because it kept the product contract explicit while still leaving room for batch jobs
        and external services around it.
      </p>
      <table>
        <thead>
          <tr>
            <th>Area</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          {[
            ["/market-snapshot", "Serves market overview, sector context, and top-level dashboard data"],
            ["/market-news", "Provides aggregated market news and article detail views"],
            ["/query", "Handles natural-language analysis requests against structured context"],
            ["/portfolio", "Supports holdings, watchlist, performance, and summary logic"],
            ["/notes", "Backs the research notes board and workflow state"],
            ["/telegram", "Coordinates account linking and delivery flows"],
          ].map(([area, purpose]) => (
            <tr key={area}>
              <td>{area}</td>
              <td>{purpose}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 data-num="05 / ANALYSIS">AI-Assisted Analysis</h2>
      <p>
        One of the more interesting parts of FinSight is the query layer. Instead of limiting the
        app to predefined charts and cards, I added a Qwen-oriented text-to-SQL style flow through
        Groq so users can ask analytical questions in plain language. The backend then maps those
        prompts into structured query behavior across live, historical, news, watchlist, and
        portfolio-aware contexts.
      </p>
      <p>
        That matters because financial questions are rarely isolated. A good answer often needs both
        market context and user context. If someone asks what names in their portfolio look weak, the
        system should understand holdings, recent moves, and relevant market signals together.
      </p>

      <h2 data-num="06 / UX">Product Experience</h2>
      <p>
        On the frontend, I kept the experience organized around product areas rather than around the
        backend itself. Markets gives the snapshot view. Analysis handles natural-language Q&amp;A.
        Portfolio covers holdings, watchlist, alerts, and notes. News gives a dedicated feed plus
        article pages. The app is also responsive, so the experience still works cleanly on smaller
        screens.
      </p>
      <p>
        I also wanted the product to extend beyond the web UI. Telegram made that possible by giving
        FinSight a delivery channel for account linking, briefs, and alerts, which makes the project
        feel more like a usable product than a browser-only prototype.
      </p>

      <h2 data-num="07 / LEARNINGS">What I Learned</h2>
      <ul>
        <li><strong>Product cohesion matters as much as infrastructure.</strong> The value was not just in building a pipeline. It was in making market data, portfolio context, news, and notes work together.</li>
        <li><strong>DuckDB and dbt are a strong pairing for lightweight analytics products.</strong> They gave me a fast local warehouse loop without overcomplicating the stack.</li>
        <li><strong>AI features get better when the underlying data model is disciplined.</strong> The query layer became much more useful once the warehouse and API surfaces were clearly shaped.</li>
        <li><strong>Delivery channels change how a product feels.</strong> Adding Telegram pushed the project beyond a dashboard and closer to a real user workflow.</li>
      </ul>

      <hr />
      <p>
        <a href="https://finsight.rajeshchowdary.com/" target="_blank" rel="noreferrer">Live Demo</a>
        <a href="https://github.com/stanik0n/finsight" target="_blank" rel="noreferrer">GitHub</a>
      </p>
    </PostLayout>
  );
}
