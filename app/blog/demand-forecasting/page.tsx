import type { Metadata } from "next";
import PostLayout from "@/components/PostLayout";

export const metadata: Metadata = {
  title: "Building an M5 Demand Forecasting & Inventory Replenishment Pipeline",
  description:
    "An end-to-end ML pipeline that compares LightGBM against baseline forecasters on Walmart's M5 dataset, simulates safety-stock replenishment, and surfaces results through a multi-persona Streamlit dashboard.",
};

export default function DemandForecastingPost() {
  return (
    <PostLayout
      title="Building an M5 Demand Forecasting & Inventory Replenishment Pipeline"
      date="April 15, 2026"
      category="ML · Supply Chain"
      stack={["Python", "LightGBM", "Streamlit", "Pandas", "Parquet"]}
    >
      <p>
        Demand forecasting is one of those problems that looks approachable until you actually sit
        down with it. The M5 competition dataset (Walmart daily sales across 10 stores and 3,000+
        SKUs) gives you enough real-world noise to make that clear fast: promotions, weekends,
        holidays, and sparse item histories all conspire to make a clean moving average look naive.
      </p>
      <p>
        This project is my end-to-end answer to that problem. It compares LightGBM gradient
        boosting against two statistical baselines, feeds the forecasts into a safety-stock
        replenishment simulation, and wraps everything in a Streamlit dashboard with three
        distinct user perspectives.
      </p>

      <h2 data-num="01 / PROBLEM">Why This Problem</h2>
      <p>
        Bad forecasts have a direct cost. Under-forecast and you stock out. Over-forecast and you
        tie up capital in inventory that sits on a shelf. The M5 dataset is interesting because it
        is not a toy. It is real Walmart sales data with all the messiness that implies: zero-sale
        days, seasonal spikes, promotional effects, and item hierarchies.
      </p>
      <p>
        I wanted to build something that went past model training and into the operational question:
        given a forecast, when should you reorder, and how much buffer should you hold? That is
        where the inventory simulation layer comes in.
      </p>

      <h2 data-num="02 / ARCHITECTURE">Pipeline Architecture</h2>
      <p>
        The system is structured as eight sequential modules, each producing outputs consumed by
        the next stage. Running <code>python run_pipeline.py</code> executes the full chain.
      </p>
      <pre>{`M5 raw CSVs (Kaggle)
        |
        v
  1. Data Ingestion & Cleaning
        |
        v
  2. Time-Series Reshaping
     (daily sales fact tables)
        |
        v
  3. Feature Engineering
     (lags, rolling averages, seasonality, pricing)
        |
        +-----------+-----------+
        |                       |
        v                       v
  4. Baseline Models      5. LightGBM Models
     (moving avg,            (gradient boosting
      seasonal naive)         on engineered features)
        |                       |
        +-----------+-----------+
                    |
                    v
  6. Inventory Replenishment Simulation
     (safety stock, reorder points, lead times)
                    |
                    v
  7. Performance Evaluation
     (RMSE, MAE, MAPE per model)
                    |
                    v
  8. Streamlit Dashboard
     (Executive · Analyst · Planner views)`}</pre>

      <h2 data-num="03 / FEATURES">Feature Engineering</h2>
      <p>
        The feature engineering step is where most of the model's predictive power comes from. Raw
        daily sales are reshaped into a flat fact table, then enriched with:
      </p>
      <ul>
        <li><strong>Lag features:</strong> sales at t-7, t-14, t-28 to capture weekly and monthly patterns</li>
        <li><strong>Rolling aggregates:</strong> 7-day and 28-day rolling mean and standard deviation</li>
        <li><strong>Calendar features:</strong> day of week, month, year, SNAP flags, and event indicators</li>
        <li><strong>Price features:</strong> sell price, price change delta, and relative price position</li>
      </ul>
      <p>
        All lag and rolling features are computed with proper temporal shifts to prevent data
        leakage. Validation splits are strictly time-based with no shuffle and no look-ahead.
      </p>

      <h2 data-num="04 / MODELS">Baseline vs. LightGBM</h2>
      <p>
        The pipeline trains two model families so you can honestly measure whether the added
        complexity of gradient boosting pays off.
      </p>
      <table>
        <thead>
          <tr>
            <th>Model</th>
            <th>Approach</th>
            <th>Strengths</th>
          </tr>
        </thead>
        <tbody>
          {[
            ["Moving Average", "Rolling mean of recent history", "Simple, interpretable, low overhead"],
            ["Seasonal Naive", "Repeat same period from prior week", "Captures weekly seasonality cleanly"],
            ["LightGBM", "Gradient boosting on engineered features", "Handles non-linearity, promotions, sparse data"],
          ].map(([model, approach, strengths]) => (
            <tr key={model}>
              <td>{model}</td>
              <td>{approach}</td>
              <td>{strengths}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        LightGBM is trained with a 28-day forecast horizon, matching the M5 competition target.
        The pipeline reports RMSE, MAE, and MAPE for each model, making the comparison explicit
        rather than relying on visual intuition.
      </p>

      <h2 data-num="05 / INVENTORY">Replenishment Simulation</h2>
      <p>
        Forecasts are only useful if they connect to a decision. The simulation layer takes the
        28-day demand forecast and computes an order-up-to inventory policy for each item:
      </p>
      <pre>{`safety_stock = z × demand_std × √(lead_time_days)`}</pre>
      <p>
        The reorder point is set as expected demand over the lead time plus safety stock. When
        simulated inventory falls below that threshold, a replenishment order is triggered. The
        simulation is configurable: lead times, service level targets (the z factor), and
        starting inventory can all be adjusted through <code>settings.yaml</code>.
      </p>
      <p>
        The output includes per-item stockout risk, overstock events, days of supply, and
        actionable reorder recommendations for the planner.
      </p>

      <h2 data-num="06 / DASHBOARD">Three-Persona Dashboard</h2>
      <p>
        The Streamlit dashboard is designed around three distinct users, each with a different
        relationship to the same underlying data.
      </p>
      <ul>
        <li>
          <strong>Executive view:</strong> high-level KPIs including forecast accuracy summary,
          stockout rate, overstock exposure, and top items at risk. Built for a quick status read.
        </li>
        <li>
          <strong>Analyst view:</strong> model comparison charts, error distributions, and
          feature importance. Built for understanding where and why the models diverge.
        </li>
        <li>
          <strong>Planner view:</strong> item-level forecast curves, inventory projections, and
          reorder recommendations. Built for operational decision-making.
        </li>
      </ul>
      <p>
        The dashboard also supports a pilot mode for single-store testing before scaling, which
        makes it practical to validate the pipeline behavior on a subset before committing to a
        full run.
      </p>

      <h2 data-num="07 / LEARNINGS">What I Learned</h2>
      <ul>
        <li>
          <strong>Leakage is subtle at scale.</strong> With thousands of items and a long date
          range, it is easy to accidentally let future information bleed into features. Explicit
          temporal shifting and time-based splits are non-negotiable.
        </li>
        <li>
          <strong>Baselines deserve respect.</strong> Seasonal naive is surprisingly hard to beat
          on weekly-cycle items. LightGBM wins on items with promotions and price sensitivity
          but does not universally dominate.
        </li>
        <li>
          <strong>Forecasting and replenishment are different problems.</strong> A forecast tells
          you what demand will be. Replenishment tells you what to do about uncertainty. Modeling
          demand variability for safety stock is as important as point forecast accuracy.
        </li>
        <li>
          <strong>Dashboard design is part of the product.</strong> Separating views by persona
          made the dashboard substantially more useful than a single monolithic page would have
          been.
        </li>
      </ul>

      <hr />
      <p>
        <a href="https://forecasting-9axkqjqv2oaebabshqbxjj.streamlit.app/" target="_blank" rel="noreferrer">Live Demo</a>
        <a href="https://github.com/stanik0n/demandforecasting" target="_blank" rel="noreferrer">GitHub</a>
      </p>
    </PostLayout>
  );
}
