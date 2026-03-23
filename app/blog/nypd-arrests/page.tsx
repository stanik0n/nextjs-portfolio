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
      <h2 data-num="01 — INTRO">Introduction</h2>
      <p>
        This project explores over <strong>500,000 NYPD arrest records</strong> from 2023–2024 to understand
        how crime patterns vary across time, boroughs, and demographics. My goal was to turn raw public data
        into an interactive dashboard that helps visualize <em>when, where, and who</em> drives arrest
        activity across New York City.
      </p>

      <h2 data-num="02 — PROCESS">The Process</h2>

      <h3>A. Data Profiling</h3>
      <p>
        I started by profiling the initial dataset using <strong>pandas</strong> to understand its structure,
        completeness, and data quality. This helped identify missing values, check column consistency, and
        reveal early insights like the total date range, distinct offense codes, and demographic distributions.
      </p>

      <h3>B. Data Cleaning with Alteryx</h3>
      <p>
        After profiling, I used <strong>Alteryx Designer</strong> to clean and prepare the dataset. The
        workflow involved:
      </p>
      <ul>
        <li>Removing null records and standardizing borough names</li>
        <li>Expanding law categories (Felony, Misdemeanor, Violation) into analyzable dimensions</li>
        <li>Formatting date and demographic fields for consistent modeling</li>
        <li>Automating these transformations into a repeatable, auditable workflow</li>
      </ul>

      <h3>C. Dimensional Modeling</h3>
      <p>
        I organized the cleaned data into a structured model connecting <strong>dates, offenses,
        demographics, and locations</strong>. This dimensional structure made it straightforward to analyze
        arrest patterns across different perspectives — which boroughs report the most arrests, how offense
        types vary by age group, and how patterns shift over time.
      </p>

      <h3>D. BigQuery Integration</h3>
      <p>
        To manage and query the large dataset efficiently, I loaded the cleaned records into{" "}
        <strong>Google BigQuery</strong>. SQL analytical views aggregate arrests by borough, offense type,
        gender, and age group. BigQuery&apos;s scalability allowed seamless exploration of 500K+ rows with
        sub-second query responses — making it an ideal backend for Power BI.
      </p>
      <pre>{`-- Example: Arrests by borough and offense category
SELECT
  ARREST_BORO,
  LAW_CAT_CD,
  COUNT(*) AS arrest_count,
  ROUND(COUNT(*) * 100.0 / SUM(COUNT(*)) OVER (PARTITION BY ARREST_BORO), 2) AS pct_of_borough
FROM arrests_clean
WHERE YEAR(ARREST_DATE) = 2024
GROUP BY 1, 2
ORDER BY 1, 3 DESC`}</pre>

      <h2 data-num="03 — DASHBOARD">Data Visualization</h2>
      <p>
        I built an interactive <strong>Power BI dashboard</strong> that brings the data to life through
        charts, maps, and KPIs. The visuals allow users to explore arrest trends by time, borough, precinct,
        and demographic — revealing patterns that aren&apos;t obvious in raw data.
      </p>

      <h2 data-num="04 — INSIGHTS">Key Insights</h2>
      <ul>
        <li><strong>Brooklyn</strong> recorded the highest number of arrests among all five boroughs</li>
        <li><strong>Assault and larceny</strong> were the most common offenses citywide</li>
        <li><strong>Males aged 25–44</strong> accounted for the largest share of arrests</li>
        <li><strong>Precinct 14</strong> in Manhattan had the highest individual arrest total</li>
        <li>Crime density clusters appeared in <strong>Downtown Brooklyn, Midtown Manhattan, and the Bronx</strong></li>
      </ul>

      <h2 data-num="05 — CONCLUSION">Conclusion</h2>
      <p>
        By following a simple three-step process — <em>profile, model, and visualize</em> — I transformed
        raw NYPD arrest data into a meaningful and interactive story about New York City&apos;s crime landscape.
        This project shows how open data, when properly structured and visualized, can help uncover deeper
        insights about urban dynamics.
      </p>
      <p>
        The pipeline is fully repeatable: when NYPD releases updated data, re-running the Alteryx workflow
        and refreshing the BigQuery connection updates the entire dashboard automatically.
      </p>
    </PostLayout>
  );
}
