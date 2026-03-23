import type { Metadata } from "next";
import PostLayout from "@/components/PostLayout";

export const metadata: Metadata = {
  title: "NYPD Arrests Analysis — Sai Rajesh Tanikonda",
  description: "End-to-end analytics pipeline over 500K+ NYPD arrest records using Alteryx, BigQuery, and Power BI.",
};

export default function NypdPost() {
  return (
    <PostLayout
      title="NYPD Arrests Analysis Using Alteryx, BigQuery, and Power BI"
      date="November 11, 2025"
      category="Data Analytics"
      stack={["Alteryx", "BigQuery", "SQL", "Power BI", "Python", "pandas"]}
    >
      <p>
        I took two years of NYPD arrest records — over <strong>500,000 rows</strong> — and built
        a pipeline to clean, model, and visualize them. The goal was to surface patterns in when,
        where, and what types of arrests happen across New York City. Public data like this is
        messy and underdocumented, so a big part of the work was just making it usable.
      </p>

      <h2 data-num="01 — PROCESS">The Process</h2>

      <h3>Profiling with pandas</h3>
      <p>
        Before touching any tooling, I profiled the raw dataset in Python to understand what I was
        working with: missing value rates, column consistency, date ranges, and demographic
        distributions. This step usually surfaces the most important cleaning decisions before you
        commit to a workflow.
      </p>

      <h3>Cleaning with Alteryx</h3>
      <p>
        I used Alteryx Designer to build the cleaning workflow. The main tasks were:
      </p>
      <ul>
        <li>Removing null records and standardizing borough name formats</li>
        <li>Expanding law category codes (Felony, Misdemeanor, Violation) into labeled dimensions</li>
        <li>Formatting date and demographic fields consistently for downstream modeling</li>
      </ul>
      <p>
        Alteryx made it easy to build this as a repeatable workflow. When NYPD releases updated
        data, re-running the workflow takes minutes.
      </p>

      <h3>Dimensional Modeling</h3>
      <p>
        I organized the cleaned data into a structure connecting dates, offenses, demographics, and
        locations. This made it straightforward to slice the data across different dimensions in
        Power BI without writing complex SQL every time.
      </p>

      <h3>Loading to BigQuery</h3>
      <p>
        I loaded the cleaned records into BigQuery and built SQL analytical views on top. BigQuery
        handles 500K+ rows with sub-second query response, which made it a practical backend for
        Power BI without needing to optimize constantly.
      </p>
      <pre>{`-- Arrests by borough and offense category
SELECT
  ARREST_BORO,
  LAW_CAT_CD,
  COUNT(*) AS arrest_count,
  ROUND(COUNT(*) * 100.0 / SUM(COUNT(*)) OVER (PARTITION BY ARREST_BORO), 2) AS pct_of_borough
FROM arrests_clean
WHERE YEAR(ARREST_DATE) = 2024
GROUP BY 1, 2
ORDER BY 1, 3 DESC`}</pre>

      <h2 data-num="02 — DASHBOARD">The Dashboard</h2>
      <p>
        The Power BI dashboard lets you explore arrest trends by time period, borough, precinct,
        offense type, and demographics. Most of the interesting patterns only become visible once
        you can cross-filter across these dimensions interactively.
      </p>

      <h2 data-num="03 — INSIGHTS">What the Data Showed</h2>
      <ul>
        <li><strong>Brooklyn</strong> had the highest arrest count among the five boroughs</li>
        <li><strong>Assault and larceny</strong> were the most common offenses citywide</li>
        <li><strong>Males aged 25–44</strong> accounted for the largest share of arrests</li>
        <li><strong>Precinct 14</strong> in Manhattan had the highest individual arrest total</li>
        <li>Crime density clusters concentrated in Downtown Brooklyn, Midtown Manhattan, and the Bronx</li>
      </ul>

      <h2 data-num="04 — LEARNINGS">What I Learned</h2>
      <p>
        The most useful insight from this project wasn't about crime patterns — it was about data
        quality. Raw public datasets are almost always messier than they look. Spending time on
        profiling before building the pipeline saved a lot of rework downstream. A repeatable
        cleaning workflow also means the analysis stays current as new data comes in, rather than
        becoming a one-time snapshot.
      </p>
    </PostLayout>
  );
}
