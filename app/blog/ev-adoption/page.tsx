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
      <h2 data-num="01 — INTRO">Why EV Adoption Matters</h2>
      <p>
        A decade ago, electric vehicles were a futuristic idea found mostly in Silicon Valley parking
        lots. Today, they're reshaping America's automotive landscape. What began as a niche
        experiment has become one of the fastest technology transitions in modern history — from
        fewer than <strong>200,000 EVs in 2013</strong> to more than{" "}
        <strong>4 million registered nationwide by 2024</strong>.
      </p>
      <p>
        This rapid expansion reflects not just consumer enthusiasm but a massive public and private
        investment in clean transportation. Federal programs like the Inflation Reduction Act and
        Infrastructure Investment and Jobs Act have unlocked billions for EV tax credits, battery
        plants, and charging networks. Meanwhile, state-level incentives — rebates, HOV lane access,
        and zero-emission mandates — have turned local policy into a major adoption driver.
      </p>
      <p>
        Yet, this growth also exposes a critical challenge: infrastructure hasn't kept pace with the
        vehicles themselves. For every new EV sold, the U.S. must add reliable, accessible charging
        stations across highways, cities, and rural areas. Without that balance, range anxiety and
        uneven access could slow progress toward a zero-emission future.
      </p>
      <FlourishChart id="25931143" title="EV adoption overview" />

      <h2 data-num="02 — EARLY">The Early Days (2010–2015)</h2>
      <p>
        Between 2010 and 2015, electric vehicles were more of a science experiment than a
        mass-market option. Most Americans had never seen one on the road, and public chargers were
        rare sights tucked behind grocery stores or tech campuses. Yet during this quiet phase, the
        foundation of today's EV boom was being built.
      </p>
      <p>
        Two models changed public perception. The Nissan Leaf, launched in 2010, proved that a fully
        electric car could handle everyday commutes, while Tesla's Model S (2012) showed that EVs
        could be fast, stylish, and aspirational. This era was defined by curiosity and cautious
        optimism.
      </p>
      <p>
        Early adoption clustered in a few forward-thinking states. California, Oregon, and Washington
        led the charge, supported by aggressive clean-air mandates and early infrastructure pilots.
        By 2015, California alone accounted for nearly half of all EVs in the United States.
      </p>
      <FlourishChart id="25926059" title="EV adoption 2010–2015" />

      <h2 data-num="03 — GROWTH">Growth Era (2016–2020)</h2>
      <p>
        By 2016, electric vehicles had outgrown their experimental phase. Falling battery prices,
        longer driving ranges, and a wave of new models — from the Chevrolet Bolt to the Tesla
        Model 3 — turned EVs into realistic choices for everyday drivers. What began as a movement
        concentrated on the West Coast started to spread across the country.
      </p>
      <p>
        California remained the undisputed leader, home to nearly half of all U.S. EVs, thanks to
        zero-emission mandates and robust rebate programs. But new growth pockets began to appear.
        Florida, Texas, and New York climbed the rankings as urban density and consumer awareness
        increased. Meanwhile, the Midwest began catching up, driven by lower-cost plug-in hybrids
        and expanding charging corridors along interstate highways.
      </p>
      <p>
        By the end of 2020, more than <strong>1.5 million EVs</strong> were registered nationwide,
        representing a clear shift from early adopters to mainstream consumers.
      </p>
      <FlourishChart id="25929241" title="EV growth era 2016–2020" />

      <h2 data-num="04 — INFRA">The Infrastructure Race (2020–2024)</h2>
      <p>
        As electric vehicles surged past the two-million mark, another race began — the race to
        keep them powered. Between 2020 and 2024, public charging in the U.S. expanded to over{" "}
        <strong>65,000 stations and 180,000 charging ports</strong>. The NEVI program committed $5
        billion in federal funding to build fast-charging corridors along major highways.
      </p>
      <p>
        But the map still shows imbalance. Coastal and urban regions enjoy charger-dense grids where
        stations are found every few miles, while much of the Midwest and South remain sparse. In
        some rural states, a single public charger may serve hundreds of EVs.
      </p>
      <p>
        Nationwide, EV registrations rose roughly <strong>120%</strong> from 2020 to 2024, but
        public charging ports grew about <strong>80%</strong> in the same period. The infrastructure
        is expanding — just not fast enough to match adoption.
      </p>
      <FlourishChart id="25931001" title="Charger vs EV growth 2020–2024" />

      <h2 data-num="05 — LEADERS">Leaders and Laggards</h2>
      <p>
        Comparing EVs per 10,000 residents with chargers per 10,000 EVs reveals two clear clusters.
        California, Washington, Colorado, Hawaii, and Nevada top the list — California leads with
        over 319 EVs per 10,000 residents and a charger ratio of 151 per 10,000 EVs. Washington and
        Colorado maintain 180+ chargers per 10,000 EVs, backed by long-term rebate programs.
      </p>
      <p>
        At the other end, Mississippi, North Dakota, West Virginia, Louisiana, and South Dakota lag
        in both adoption and infrastructure. Louisiana has fewer than 18 EVs per 10,000 residents
        and one of the lowest charger densities among its peers.
      </p>
      <FlourishChart id="25945001" title="State leaders and laggards" />

      <h2 data-num="06 — FUTURE">What Comes Next</h2>
      <p>
        As federal and state investments ramp up, the next decade will determine whether America's
        charging infrastructure can match its accelerating EV adoption. The NEVI program will fund
        over <strong>500,000 public chargers</strong> nationwide, prioritizing highway corridors and
        underserved communities.
      </p>
      <p>
        Emerging states such as Texas, Florida, and Arizona face the challenge of scaling
        infrastructure across vast geographies while maintaining equitable access. Meanwhile,
        regions with low adoption but improving infrastructure — including parts of the Midwest and
        Southeast — could become the next growth frontiers.
      </p>
      <p>
        In short, 2025 marks the start of a new era: one where the question is no longer{" "}
        <em>if</em> Americans will drive electric, but <em>how quickly</em> the infrastructure can
        evolve to keep them moving.
      </p>
    </PostLayout>
  );
}
