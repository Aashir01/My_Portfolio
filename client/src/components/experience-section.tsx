const roles = [
  {
    period: "Since 2024",
    company: "Madina Travels",
    location: "Rawalpindi & Barcelona",
    title: "AI/ML Engineer & Founder",
    points: [
      "Built SkyNest, a booking platform for flights and Umrah packages, on Supabase and PostgreSQL. Duffel and Amadeus supply the flight inventory, Mollie, GoCardless and Wise Business move the money, and the whole thing runs mock-first so development never waits on a provider account.",
      "Wrote the specification for an in-house AI coding agent that now carries feature work, schema migrations and QA. It keeps the codebase from drifting in four directions at once, which is what was happening before.",
      "Cut the time spent reviewing visa and Umrah cases by pre-checking the paperwork with LLM extraction and validation. A person still signs off, but on a file that has already been read properly.",
      "Got a legacy Galileo GDS talking to the new stack using Python middleware and some RPA, since it has no API worth the name.",
    ],
  },
  {
    period: "Since 2023",
    company: "Upwork",
    location: "Remote",
    title: "Freelance AI/ML Engineer (Top Rated)",
    points: [
      "Built RAG and document intelligence systems over private data. Large PDF corpora ingested, indexed into vector stores, and answers returned with the citation attached so anyone can check them.",
      "Fine-tuned deep learning models for clients whose data the off-the-shelf versions handled badly, with the evaluation work to show the gain was real.",
      "Delivered chatbots, ChatCompletion integrations, prompt pipelines and structured-output tooling for teams that were drowning in manual work.",
      "Took on the awkward jobs: time series clustering, speech recognition for trade jargon, a custom JPEG compressor, octave-convolution CNNs, a Tableau Prep to PySpark migration, and a great deal of data cleaning.",
      "Held a five-star rating throughout, and most of the work came from clients who had hired me before.",
    ],
  },
  {
    period: "2023 to 2024",
    company: "Omdena",
    location: "Remote",
    title: "Collaborator",
    points: [
      "Contributed modelling and evaluation to the Sri Lankan Autism Prediction Project, aimed at catching indicators in toddlers early in a setting where screening is hard to come by.",
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
          Three years of being handed something slow or broken and sending back something that works. Travel,
          document intelligence and applied machine learning, mostly.
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
                      <span style={{ position: "absolute", left: 0, opacity: 0.55, fontSize: 12, top: 5 }}>&#9642;</span>
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
