export const projects = [
  {
    id: "skystream",
    featured: true,
    tag: "✦ Featured Project",
    tagColor: "accent",
    title: "SkyStream",
    desc: "Real-time global flight tracking pipeline. Ingests ADS-B telemetry from ~9,000 aircraft every 10 seconds via Kafka → Spark Structured Streaming → Redis, rendered on a GPU-accelerated deck.gl map with sub-5-second end-to-end latency. Includes email landing alerts and 48-hour historical trail queries via TimescaleDB.",
    stack: ["Python", "Apache Kafka", "Spark Streaming", "Redis", "TimescaleDB", "FastAPI", "deck.gl", "Docker"],
    links: [
      { label: "↗ Live Demo", href: "http://173.212.237.120:5173", primary: true },
      { label: "GitHub", href: "https://github.com/stanik0n/skystream" },
      { label: "Blog Post →", href: "/blog/skystream" },
    ],
  },
  {
    id: "url-shortener",
    featured: false,
    tag: "System Design",
    tagColor: "accent2",
    title: "Scalable URL Shortener",
    desc: "Cache-first URL shortener engineered for high read throughput. Redis handles the redirect hot path; async background workers flush click counters to PostgreSQL in batches. Real-time analytics UI, one-command Docker Compose deploy.",
    stack: ["FastAPI", "Redis", "PostgreSQL", "Docker", "Python"],
    links: [
      { label: "GitHub ↗", href: "https://github.com/stanik0n/url-shortener", primary: true },
      { label: "Blog Post →", href: "/blog/url-shortener" },
    ],
  },
  {
    id: "nypd",
    featured: false,
    tag: "Data Analytics",
    tagColor: "accent",
    title: "NYPD Arrests Pipeline",
    desc: "End-to-end analytics pipeline over 500K+ NYPD arrest records (2023–2024). Cleaned with Alteryx, modeled dimensionally, loaded to BigQuery for sub-second aggregations, visualized in an interactive Power BI dashboard by borough, offense type, and demographics.",
    stack: ["Alteryx", "BigQuery", "SQL", "Power BI", "Python"],
    links: [
      { label: "Blog Post →", href: "/blog/nypd-arrests", primary: true },
    ],
  },
  {
    id: "ev-adoption",
    featured: false,
    tag: "Data Visualization",
    tagColor: "accent2",
    title: "EV Adoption Analysis",
    desc: "Visual deep-dive into U.S. electric vehicle adoption from 2010–2024. Analyzes charging infrastructure gaps, state-by-state adoption rates, and federal policy impact — from 200K EVs in 2013 to over 4 million by 2024.",
    stack: ["Python", "Data Viz", "Public Data"],
    links: [
      { label: "Blog Post →", href: "/blog/ev-adoption", primary: true },
    ],
  },
  {
    id: "cnc",
    featured: false,
    tag: "Hardware + IoT",
    tagColor: "accent3",
    title: "DIY CNC Plotter",
    desc: "2-axis CNC plotting machine built with Arduino UNO + GRBL firmware, 3D-printed components, and NEMA 17 stepper motors. Extended with an ESP32 IoT layer for wireless G-code transmission, browser-based control, and real-time telemetry.",
    stack: ["Arduino", "ESP32", "Python", "GRBL", "IoT"],
    links: [
      { label: "Blog Post →", href: "/blog/cnc-plotter", primary: true },
    ],
  },
];

export const posts = [
  {
    id: "skystream",
    tag: "Case Study · Deep Dive",
    title: "Building SkyStream: A Real-Time Flight Tracking Pipeline",
    desc: "Every layer of the system: Kafka checkpoint gotchas that blanked the map, why Redis writes must precede Postgres, how deck.gl handles 9,000+ GPU-accelerated points, and the four production bugs I actually hit.",
    date: "2026",
    meta: "Kafka · Spark · Redis · deck.gl · TimescaleDB",
    href: "/blog/skystream",
    featured: true,
  },
  {
    id: "url-shortener",
    tag: "System Design",
    title: "Building a Scalable URL Shortener from Scratch",
    desc: "How cache-first architecture and async click tracking combine to build a URL shortener that stays fast under heavy read load — without sacrificing analytics accuracy.",
    date: "Feb 10, 2026",
    meta: "FastAPI · Redis · PostgreSQL",
    href: "/blog/url-shortener",
    featured: false,
  },
  {
    id: "nypd-arrests",
    tag: "Data Analytics",
    title: "NYPD Arrests Analysis Using Alteryx, BigQuery, and Power BI",
    desc: "Profiling, cleaning, and modeling 500K+ arrest records into an interactive Power BI dashboard that surfaces borough-level crime patterns and demographic trends.",
    date: "Nov 11, 2025",
    meta: "Alteryx · BigQuery · Power BI",
    href: "/blog/nypd-arrests",
    featured: false,
  },
  {
    id: "ev-adoption",
    tag: "Data Visualization",
    title: "EV Adoption Across the U.S. — A Visual Blog",
    desc: "From 200K EVs in 2013 to over 4 million by 2024 — a state-by-state breakdown of adoption rates, charging infrastructure gaps, and the policy drivers behind the transition.",
    date: "Oct 29, 2025",
    meta: "Python · Data Viz",
    href: "/blog/ev-adoption",
    featured: false,
  },
];

export const experience = [
  {
    date: "Sep 2025 — Present",
    company: "WoMen of Connections Ministry · Remote",
    role: "Analyst, Community Platforms",
    points: [
      "Unified 6 operational data sources into a PostgreSQL reporting layer via Python ETL and SQL transformations, cutting 20+ hours/week of manual reconciliation.",
      "Enforced schema validation, deduplication, and cross-table reconciliation checks, reducing grant reporting discrepancies by 40%.",
      "Built a FastAPI metrics service standardizing KPI definitions across the org, reducing ad hoc data requests by 40%.",
    ],
  },
  {
    date: "Jan 2020 — Jun 2023",
    company: "Brainovision Solutions · Hyderabad, India",
    role: "Data Engineer",
    points: [
      "Owned architecture and delivery of an enterprise Salesforce-to-AWS migration — redesigning batch ingestion to incremental loads, cutting delivery timelines by 30% and processing latency by 20%.",
      "Built AWS Glue pipelines ingesting structured and semi-structured data into S3/Redshift, applying partition pruning and WLM tuning to improve query performance by 40%.",
      "Designed a Redshift-based Customer 360 warehouse unifying CRM, marketing, and service data across 5+ business units, giving 150+ analysts a single source of truth.",
      "Integrated Apache Kafka to stream real-time CRM events into the ingestion layer, reducing data latency from overnight batch windows to under 15 minutes.",
      "Diagnosed and resolved a PySpark shuffle bottleneck processing 10M+ records per batch, cutting pipeline runtime by 45%.",
    ],
  },
];

export const skills = [
  { group: "Languages & Query", tags: ["Python", "SQL", "Java", "R", "SparkSQL"] },
  { group: "Data Engineering", tags: ["Apache Kafka", "Apache Spark", "Apache Airflow", "Hadoop", "dbt"] },
  { group: "Cloud Platforms", tags: ["AWS", "Azure", "GCP", "Snowflake", "Databricks"] },
  { group: "Databases & Storage", tags: ["PostgreSQL", "MySQL", "MongoDB", "DynamoDB", "BigQuery", "Redshift", "TimescaleDB"] },
  { group: "ML & Analytics", tags: ["Scikit-learn", "TensorFlow", "PyTorch", "NumPy", "Pandas"] },
  { group: "Visualization & Tools", tags: ["Power BI", "Tableau", "QuickSight", "Docker", "Git"] },
];
