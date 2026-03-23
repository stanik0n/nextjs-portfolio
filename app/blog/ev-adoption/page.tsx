import type { Metadata } from "next";
import PostLayout from "@/components/PostLayout";

export const metadata: Metadata = {
  title: "EV Adoption Across the U.S. — Sai Rajesh Tanikonda",
  description: "A visual analysis of U.S. electric vehicle adoption from 2010–2024, covering charging infrastructure gaps and policy drivers.",
};

export default function EvPost() {
  return (
    <PostLayout
      title="EV Adoption Across the U.S. — A Visual Blog"
      date="October 29, 2025"
      category="Data Visualization"
      stack={["Python", "Data Visualization", "Public Datasets"]}
    >
      <p>
        Electric vehicles went from fewer than <strong>200,000 registered nationwide in 2013</strong> to
        more than <strong>4 million by 2024</strong>. That kind of growth rate doesn't happen on its
        own. This post looks at how adoption spread across the country, where the charging
        infrastructure is struggling to keep up, and what's driving the gap between leading and
        lagging states.
      </p>

      <h2 data-num="01 — EARLY">The Early Days (2010–2015)</h2>
      <p>
        The first wave of EVs was more proof-of-concept than mass market. The Nissan Leaf showed
        that a fully electric car could handle daily commutes. Tesla's Model S showed that EVs
        could be fast and aspirational. Together they changed the public conversation from "will
        anyone buy these" to "who's buying them and why."
      </p>
      <p>
        Early adoption was heavily concentrated in a few states. California, Oregon, and Washington
        led by a wide margin, supported by clean-air mandates and early charging infrastructure.
        By 2015, California alone accounted for nearly half of all EVs in the country.
      </p>

      <h2 data-num="02 — GROWTH">Growth Era (2016–2020)</h2>
      <p>
        Falling battery costs and longer ranges brought EVs within reach of everyday buyers. The
        Chevy Bolt and Tesla Model 3 pushed the category further into the mainstream. New growth
        pockets appeared in Florida, Texas, and New York as urban density and consumer awareness
        increased. By the end of 2020, registrations had passed <strong>1.5 million nationwide</strong>.
      </p>

      <h2 data-num="03 — INFRA">The Infrastructure Race (2020–2024)</h2>
      <p>
        As adoption accelerated, the pressure on charging infrastructure became obvious. Between
        2020 and 2024, public charging expanded to over{" "}
        <strong>65,000 stations and 180,000 ports</strong>. The NEVI program committed $5 billion
        in federal funding for highway fast-charging corridors. But the map still shows real
        imbalance: coastal and urban areas are reasonably covered, while most of the Midwest and
        South remain sparse.
      </p>
      <pre>{`EV registrations 2020→2024:  +120%
Public charging ports:        +80%

Infrastructure is growing — just not at the same pace as adoption.`}</pre>

      <h2 data-num="04 — LEADERS">State-Level Breakdown</h2>
      <p>
        Looking at EVs per 10,000 residents alongside chargers per 10,000 EVs shows two distinct
        clusters:
      </p>
      <ul>
        <li><strong>California</strong> — 319 EVs per 10K residents, 151 chargers per 10K EVs</li>
        <li><strong>Washington and Colorado</strong> — 180+ chargers per 10K EVs, strong rebate programs</li>
        <li><strong>Mississippi, North Dakota, West Virginia</strong> — fewer than 20 EVs per 10K residents</li>
        <li><strong>Louisiana</strong> — under 18 EVs per 10K residents, one of the lowest charger densities</li>
      </ul>

      <h2 data-num="05 — FUTURE">What Comes Next</h2>
      <p>
        The NEVI program is expected to fund over 500,000 public chargers over the next several
        years, with explicit focus on highway corridors and underserved communities. The question
        now is less about whether EV adoption continues and more about whether the infrastructure
        can close the gap with demand in the states that are already behind.
      </p>
    </PostLayout>
  );
}
