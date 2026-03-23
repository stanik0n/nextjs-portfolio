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
      { label: "Case Study →", href: "/blog/skystream" },
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
      { label: "Write-up →", href: "/blog/url-shortener" },
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
      { label: "Read Write-up →", href: "/blog/nypd-arrests", primary: true },
    ],
  },
  {
    id: "priceshield",
    featured: false,
    tag: "In Progress",
    tagColor: "accent3",
    title: "PriceShield",
    desc: "Cross-retailer price tracker for Amazon, Walmart, Best Buy, Target, and Microcenter. Browser extension + web app using a four-strategy hybrid extraction approach (JSON-LD → meta → CSS → regex), Playwright scraping, BullMQ queues, TimescaleDB for price history.",
    stack: ["Hono", "BullMQ", "Redis", "Playwright", "TimescaleDB", "WXT"],
    links: [
      { label: "GitHub (soon)", href: "#" },
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
      { label: "Read Post →", href: "/blog/ev-adoption", primary: true },
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
      { label: "Read Write-up →", href: "/blog/cnc-plotter", primary: true },
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
    date: "2023 — Present",
    company: "Community Org · Houston",
    role: "Data Analyst",
    points: [
      "Designed and maintained operational reporting pipelines powering day-to-day program decisions across departments.",
      "Built and managed data infrastructure connecting disparate source systems into a unified reporting layer.",
      "Collaborated with stakeholders to translate business requirements into reliable, repeatable data products.",
    ],
  },
  {
    date: "2021 — 2023",
    company: "Enterprise",
    role: "Data Engineer",
    points: [
      "Led Salesforce-to-AWS migration, redesigning data flows to reduce sync latency and improve reliability across downstream consumers.",
      "Built real-time Kafka ingestion pipelines handling high-throughput event streams from multiple production systems.",
      "Developed dbt transformation layers and Spark processing jobs for analytics-ready datasets in Redshift.",
    ],
  },
  {
    date: "2019 — 2021",
    company: "Early Career",
    role: "Data & BI Analyst",
    points: [
      "Built SQL-based reporting across operational databases serving finance and operations teams.",
      "Maintained ETL processes, dashboards, and ad-hoc analyses supporting executive decision-making.",
    ],
  },
];

export const skills = [
  { group: "Streaming & Pipelines", tags: ["Apache Kafka", "Spark Streaming", "dbt", "Airflow"] },
  { group: "Storage & Warehousing", tags: ["PostgreSQL", "TimescaleDB", "BigQuery", "Redis", "AWS S3", "Redshift"] },
  { group: "Languages & Frameworks", tags: ["Python", "SQL", "FastAPI", "Hono", "React"] },
  { group: "Analytics & Viz", tags: ["Power BI", "Alteryx", "deck.gl", "MapLibre GL"] },
  { group: "Infra", tags: ["Docker", "AWS", "Salesforce", "Arduino", "ESP32"] },
];
