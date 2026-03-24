import type { Metadata } from "next";
import PostLayout from "@/components/PostLayout";

export const metadata: Metadata = {
  title: "EV Adoption Across the U.S. — Sai Rajesh Tanikonda",
  description: "A visual analysis of U.S. electric vehicle adoption from 2010–2024, covering charging infrastructure gaps and policy drivers.",
};

function FlourishChart({ id, title }: { id: string; title: string }) {
  return (
    <iframe
      src={`https://flo.uri.sh/visualisation/${id}/embed`}
      title={title}
      scrolling="no"
      frameBorder={0}
      style={{ width: "100%", height: "575px", border: "none", margin: "8px 0 24px", borderRadius: "6px" }}
      allowFullScreen
    />
  );
}

export default function EvPost() {
  return (
    <PostLayout
      title="EV Adoption Across the U.S. — A Visual Blog"
      date="October 29, 2025"
      category="Data Visualization"
      stack={["Python", "Data Visualization", "Public Datasets", "Flourish"]}
    >
      <p>
        Electric vehicles went from fewer than <strong>200,000 registered in 2013</strong> to over{" "}
        <strong>4 million by 2024</strong>. That kind of growth doesn't happen on its own. Federal
        programs, state incentives, and falling battery costs all played a role. So did a growing
        gap between where people want to charge and where the infrastructure actually is. This post
        walks through how adoption spread across the country, decade by decade.
      </p>
      <FlourishChart id="25931143" title="EV adoption overview" />

      <h2 data-num="01 — EARLY">The Early Days (2010–2015)</h2>
      <p>
        The first wave of EVs was more proof-of-concept than mass market. The Nissan Leaf showed
        that a fully electric car could handle daily commutes. Tesla's Model S showed they could be
        fast and aspirational. Together they shifted the conversation from "will anyone buy these"
        to "who's buying them and why."
      </p>
      <p>
        Early adoption was heavily concentrated. California, Oregon, and Washington led by a wide
        margin, backed by clean-air mandates and early charging pilots. By 2015, California alone
        accounted for nearly half of all EVs in the country.
      </p>
      <FlourishChart id="25926059" title="EV adoption 2010–2015" />

      <h2 data-num="02 — GROWTH">Growth Era (2016–2020)</h2>
      <p>
        Falling battery costs and longer ranges brought EVs within reach of everyday buyers. The
        Chevy Bolt and Tesla Model 3 pushed the category further into the mainstream. New growth
        pockets appeared in Florida, Texas, and New York as urban density and consumer awareness
        caught up. The Midwest started moving too, driven by plug-in hybrids and expanding highway
        charging corridors.
      </p>
      <p>
        By the end of 2020, registrations had passed <strong>1.5 million nationwide</strong>. That
        was the clearest sign yet that EVs had moved from early adopters to mainstream buyers.
      </p>
      <FlourishChart id="25929241" title="EV growth era 2016–2020" />

      <h2 data-num="03 — INFRA">The Infrastructure Race (2020–2024)</h2>
      <p>
        As adoption accelerated, the pressure on charging became obvious. Between 2020 and 2024,
        public charging expanded to over <strong>65,000 stations and 180,000 ports</strong>. The
        NEVI program committed $5 billion to build fast-charging corridors along major highways.
      </p>
      <p>
        But the map shows real imbalance. Coastal and urban areas are reasonably covered. Most of
        the Midwest and South are not. EV registrations grew roughly <strong>120%</strong> from
        2020 to 2024. Public charging ports grew about <strong>80%</strong>. The infrastructure is
        expanding — just not at the same pace as the vehicles.
      </p>
      <FlourishChart id="25931001" title="Charger vs EV growth 2020–2024" />

      <h2 data-num="04 — LEADERS">Leaders and Laggards</h2>
      <p>
        Looking at EVs per 10,000 residents alongside chargers per 10,000 EVs shows two clear
        groups. California leads with 319 EVs per 10,000 residents and 151 chargers per 10,000 EVs.
        Washington and Colorado are close behind, both exceeding 180 chargers per 10,000 EVs.
      </p>
      <p>
        At the other end, Mississippi, North Dakota, West Virginia, Louisiana, and South Dakota lag
        in both adoption and infrastructure. Louisiana has fewer than 18 EVs per 10,000 residents
        and one of the lowest charger densities in the country.
      </p>
      <FlourishChart id="25945001" title="State leaders and laggards" />

      <h2 data-num="05 — FUTURE">What Comes Next</h2>
      <p>
        The NEVI program is expected to fund over <strong>500,000 public chargers</strong> over the
        next several years, with a focus on highway corridors and underserved communities. States
        that already lead are shifting from basic coverage to grid reliability and fast-charge
        performance. States that are behind face a different problem: scaling across large
        geographies with less existing infrastructure to build on.
      </p>
      <p>
        The question now isn't really whether EV adoption continues. It's whether the infrastructure
        can close the gap with demand in the states that are already a few years behind.
      </p>
    </PostLayout>
  );
}
