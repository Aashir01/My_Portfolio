const roles = [
  {
    period: "2024 — Present",
    company: "Madina Travels",
    location: "Rawalpindi & Barcelona",
    title: "AI/ML Engineer & Founder",
    points: [
      "Solved the fragmented booking problem for flight and Umrah travel — built SkyNest on Supabase/PostgreSQL with a mock-first strategy, integrating Duffel and Amadeus flight APIs and EU payment rails (Mollie, GoCardless, Wise Business) so bookings and payouts work across markets without a modern payment stack fight.",
      "Removed the drag of hand-written, drifting code by authoring a production-grade AI coding agent specification that drives feature development, schema migrations, and QA across the codebase — features ship in step, not out of sync.",
      "Cut manual visa and Umrah case review time sharply by building LLM-powered extraction, validation, and checklist generation — the paperwork is pre-checked before a human touches it.",
      "Broke the deadlock of a legacy Galileo GDS with no modern API by prototyping Python middleware and RPA to reach it — the old system talks to the new stack.",
    ],
  },
  {
    period: "2023 — Present",
    company: "Upwork",
    location: "Remote",
    title: "Freelance AI/ML Engineer — Top Rated",
    points: [
      "Solved the 'answers with no receipts' problem over private datasets — built RAG and document intelligence systems that ingest large PDF corpora, index them into vector stores, and return grounded, cited answers instead of confident guesses.",
      "Won measurable accuracy gains where off-the-shelf models underperformed client data — fine-tuned deep learning models with data-efficient training loops and rigorous evaluation.",
      "Automated downstream workflows that were drowning in manual output — delivered chatbot and OpenAI ChatCompletion integrations, prompt pipelines, and structured-output tooling.",
      "Applied ML and data engineering to specific, messy real-world problems: time series clustering, speech recognition for industry jargon, custom JPEG compression, octave-convolution CNNs, a Tableau Prep to PySpark migration, and large-scale data cleaning and visualization.",
      "Kept the work coming by solving clients' problems well — maintained five-star ratings and repeat engagements across a broad portfolio.",
    ],
  },
  {
    period: "2023 — 2024",
    company: "Omdena",
    location: "Remote",
    title: "Collaborator",
    points: [
      "Helped toward early identification of autism indicators in toddlers where timely screening is scarce — contributed modelling and evaluation to the Sri Lankan Autism Prediction Project for an applied AI system.",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" style={{ padding: "74px 0", borderTop: "1px solid var(--rule)" }}>
      <div className="wrap">
        <div className="sec-head">
          <h2>Experience</h2>
          <div className="label">Where the work happened</div>
        </div>
        <p className="lede">
          Three years of being handed a slow, broken, or impossible thing and handing back a system that works — for
          clients across travel, document intelligence, and applied machine learning.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {roles.map((role) => (
            <article
              key={`${role.company}-${role.period}`}
              style={{ borderTop: "2px solid var(--ink)", padding: "28px 0", display: "grid", gridTemplateColumns: "1fr", gap: 16 }}
              className="md:grid-cols-[220px_1fr] md:gap-10"
            >
              <div>
                <div style={{ fontFamily: '"Courier Prime", monospace', fontSize: 13, letterSpacing: "0.08em", color: "var(--vermilion)" }}>
                  {role.period}
                </div>
                <div style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 18, marginTop: 4 }}>{role.company}</div>
                <div style={{ fontFamily: '"Courier Prime", monospace', fontSize: 12.5, opacity: 0.75, marginTop: 2 }}>{role.location}</div>
              </div>
              <div>
                <div style={{ fontFamily: '"Newsreader", serif', fontSize: 19, fontWeight: 600, marginBottom: 12 }}>{role.title}</div>
                <ul style={{ margin: 0, paddingLeft: 0, listStyle: "none" }}>
                  {role.points.map((point) => (
                    <li key={point} style={{ paddingLeft: 18, position: "relative", marginBottom: 10, fontSize: 16.5, lineHeight: 1.5 }}>
                      <span style={{ position: "absolute", left: 0, opacity: 0.5 }}>&mdash;</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
