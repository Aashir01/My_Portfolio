const roles = [
  {
    period: "2024 — Present",
    company: "Madina Travels",
    location: "Rawalpindi & Barcelona",
    title: "AI/ML Engineer & Founder",
    points: [
      "Architected and built a flight and Umrah booking platform (SkyNest) on Supabase/PostgreSQL, integrating Duffel and Amadeus flight APIs with a mock-first strategy and EU payment rails (Mollie, GoCardless, Wise Business).",
      "Authored a production-grade AI coding agent specification that drives feature development, schema migrations, and QA across the platform codebase.",
      "Built LLM-powered extraction, validation, and checklist generation for visa and Umrah documentation, sharply reducing manual review time per case.",
      "Prototyped Python middleware and RPA to reach a legacy Galileo GDS where no modern API was available.",
    ],
  },
  {
    period: "2023 — Present",
    company: "Upwork",
    location: "Remote",
    title: "Freelance AI/ML Engineer — Top Rated",
    points: [
      "Built RAG and document intelligence systems that ingest large PDF corpora, index them into vector stores, and return grounded, cited answers over private datasets.",
      "Fine-tuned deep learning models for measurable accuracy gains on client data, including data-efficient training loops and evaluation.",
      "Delivered chatbot and OpenAI ChatCompletion integrations, prompt pipelines, and structured-output tooling for downstream automation.",
      "Applied ML and data engineering: time series clustering, speech recognition for domain jargon, custom JPEG compression, octave-convolution CNNs, Tableau Prep to PySpark migration, and large-scale data cleaning and visualization.",
      "Maintained five-star ratings and repeat engagements across a broad client portfolio.",
    ],
  },
  {
    period: "2023 — 2024",
    company: "Omdena",
    location: "Remote",
    title: "Collaborator",
    points: [
      "Collaborated on the Sri Lankan Autism Prediction Project, contributing to modelling and evaluation for an applied AI system predicting autism indicators in toddlers.",
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
          Three years of building and shipping AI systems for clients across travel, document intelligence, and
          applied machine learning.
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
