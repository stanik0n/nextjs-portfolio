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
      <h2 data-num="01 — INTRO">Why EV Adoption Matters</h2>
      <p>
        A decade ago, electric vehicles were a futuristic idea found mostly in Silicon Valley parking lots.
        Today, they&apos;re reshaping America&apos;s automotive landscape. What began as a niche experiment has
        become one of the fastest technology transitions in modern history — from fewer than{" "}
        <strong>200,000 EVs in 2013</strong> to more than <strong>4 million registered nationwide by 2024</strong>.
      </p>
      <p>
        This rapid expansion reflects not just consumer enthusiasm, but a massive public and private investment
        in clean transportation. Federal programs like the Inflation Reduction Act and Infrastructure
        Investment and Jobs Act have unlocked billions for EV tax credits, battery plants, and charging networks.
      </p>

      <h2 data-num="02 — EARLY">The Early Days (2010–2015): Electric Curiosity</h2>
      <p>
        Between 2010 and 2015, electric vehicles were more of a science experiment than a mass-market option.
        Two models changed public perception: the <strong>Nissan Leaf</strong> (2010) proved that a fully
        electric car could handle everyday commutes, while <strong>Tesla&apos;s Model S</strong> (2012) showed
        that EVs could be fast, stylish, and aspirational.
      </p>
      <p>
        Early adoption clustered in a few forward-thinking states. California, Oregon, and Washington led
        the charge, supported by aggressive clean-air mandates and early infrastructure pilots. By 2015,
        California alone accounted for nearly half of all EVs in the United States.
      </p>

      <h2 data-num="03 — GROWTH">The Growth Era (2016–2020): From Niche to Normal</h2>
      <p>
        Falling battery prices, longer driving ranges, and a wave of new models — from the Chevrolet Bolt
        to the Tesla Model 3 — turned EVs into realistic choices for everyday drivers. New growth pockets
        appeared in Florida, Texas, and New York as urban density and consumer awareness increased.
      </p>
      <p>
        By the end of 2020, more than <strong>1.5 million EVs</strong> were registered nationwide — a clear
        shift from early adopters to mainstream consumers.
      </p>

      <h2 data-num="04 — INFRA">The Infrastructure Race (2020–2024)</h2>
      <p>
        As EVs surged past the two-million mark, another race began — the race to keep them powered. Between
        2020 and 2024, public charging infrastructure expanded from a scattered network to over{" "}
        <strong>65,000 public stations and 180,000 charging ports</strong>.
      </p>
      <p>
        The NEVI program committed <strong>$5 billion</strong> in federal funding to build fast-charging
        corridors along major highways. But the map still shows imbalance — coastal and urban regions
        enjoy dense grids while much of the Midwest and South remain sparse.
      </p>
      <pre>{`EV registrations 2020→2024:  +120%
Public charging ports:        +80%

Infrastructure is expanding — just not fast enough to match adoption.`}</pre>

      <h2 data-num="05 — LEADERS">Leaders and Laggards</h2>
      <p>
        Comparing EVs per 10,000 residents with chargers per 10,000 EVs reveals two distinct clusters:
      </p>
      <ul>
        <li><strong>California</strong> — 319 EVs per 10K residents, 151 chargers per 10K EVs</li>
        <li><strong>Washington & Colorado</strong> — 180+ chargers per 10K EVs, strong rebate programs</li>
        <li><strong>Mississippi, North Dakota, West Virginia</strong> — fewer than 20 EVs per 10K residents</li>
        <li><strong>Louisiana</strong> — under 18 EVs per 10K residents, one of the lowest charger densities</li>
      </ul>

      <h2 data-num="06 — FUTURE">2025 and Beyond</h2>
      <p>
        The next decade will determine whether America&apos;s charging infrastructure can match its accelerating
        EV adoption. The NEVI program will fund over <strong>500,000 public chargers</strong>, prioritizing
        highway corridors and underserved communities.
      </p>
      <p>
        In short, 2025 marks the start of a new era — one where the question is no longer{" "}
        <em>if</em> Americans will drive electric, but <em>how quickly</em> the infrastructure can evolve
        to keep them moving.
      </p>
    </PostLayout>
  );
}
