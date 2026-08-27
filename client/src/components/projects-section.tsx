const flagships = [
  {
    id: 1,
    name: "Meridian",
    title: "Autonomous Logistics Control Plane",
    description:
      "An agent mesh that watches ports, vessels and inventory, detects disruptions, and executes a response against ERP/TMS/WMS — inside limits a model cannot talk its way past.",
    take: "Tiered autonomy, signed execution, CVaR₉₀ ranking.",
    stack: "Python · Claude · FastAPI · Kafka · TimescaleDB · React",
    tests: "185 tests",
    href: "https://github.com/Aashir01/Supply-Chain-and-Logistics-Agentic-system",
  },
  {
    id: 2,
    name: "VisaGuard",
    title: "Visa Document Intelligence",
    description:
      "Scans a visa application bundle and reports what is wrong before the consulate does — missing documents, name mismatches, insufficient funds, non-compliant photos.",
    take: "Deterministic-first, 2–3 LLM calls per bundle.",
    stack: "FastAPI · Next.js · Claude / DeepSeek · Tesseract",
    tests: "224 tests",
    href: "https://github.com/Aashir01/Visa-Check",
  },
  {
    id: 3,
    name: "Appeals Bot",
    title: "Medical Insurance Appeals Bot",
    description:
      "Reads denial letters, drafts legally grounded appeals, and routes every one to a licensed human before it leaves the building. The AI never sends anything on its own.",
    take: "Three independent liability gates.",
    stack: "FastAPI · LangGraph · Claude · Postgres · Alembic",
    tests: "119 tests",
    href: "https://github.com/Aashir01/Medical-Insurance-Appeal-Bots",
  },
  {
    id: 4,
    name: "Quran Agent",
    title: "Quran Research Agent",
    description:
      "Deterministic retrieval and agentic research over a closed corpus — 6,236 ayat, 130k morphological segments, 1,651 roots. Scripture is rendered from Postgres, never generated.",
    take: "Exhaustive over probabilistic retrieval.",
    stack: "FastAPI · PostgreSQL · Next.js PWA · LangGraph · MCP",
    tests: "89 tests",
    href: "https://github.com/Aashir01/Quran-Research-Agent",
  },
  {
    id: 5,
    name: "mini-agent",
    title: "A Coding Agent, Built to Be Read",
    description:
      "A coding agent where the edit-application ladder is the hard part. When the model's replacement does not match byte-for-byte, progressively looser passes retry — but each must find exactly one match.",
    take: "Ambiguity is an error, never a guess.",
    stack: "TypeScript · Node 22+ · Anthropic + OpenAI transports",
    tests: "40 tests",
    href: "https://github.com/Aashir01/agent-cli",
  },
  {
    id: 6,
    name: "MFIE",
    title: "Macro-Informed Financial Intelligence Engine",
    description:
      "Treats a chart pattern as a hypothesis and the macroeconomy as the evidence. A setup becomes a signal only after surviving a chain of econometric filters.",
    take: "Corrects for overlapping observations.",
    stack: "Python · pandas/numpy · SQLAlchemy · TimescaleDB · Streamlit",
    tests: "163 tests",
    href: "https://github.com/Aashir01/Trading-Analyst",
  },
];

const moreWork = [
  { title: "DataSense AI", what: "SaaS data-analyst agent with whitelisted query planner", href: "https://github.com/Aashir01/AI-Data-Analyst-Agent" },
  { title: "Enterprise AI Knowledge Assistant", what: "Production RAG assistant for enterprise document search", href: "https://github.com/Aashir01/Enterprise-AI-Knowledge-Assistant" },
  { title: "El Madina Viajes", what: "Tour-booking platform with a shared pricing engine", href: "https://github.com/Aashir01/EL-MADINA-VIAJES" },
  { title: "Hierarchical Agent Swarm", what: "Manager–worker tree coordinating 100+ agents", href: "https://github.com/Aashir01/hierarchical-agent-swarm" },
  { title: "Nexus Motion", what: "Multi-agent pipeline for end-to-end video production", href: "https://github.com/Aashir01/nexus-motion-AI-video-agency" },
  { title: "Spain Appointment Bot", what: "Appointment tracking and notification automation", href: "https://github.com/Aashir01/spain-visa-appointment-bot" },
  { title: "March ML Mania 2026", what: "Kaggle tournament model with calibrated ensembles", href: "https://github.com/Aashir01/-March-Machine-Learning-Mania-2026" },
  { title: "Deep Learning Projects", what: "Applied DL notebooks and experiments", href: "https://github.com/Aashir01/Deep-Learning-Projects" },
];

export default function ProjectsSection() {
  return (
    <section id="projects" style={{ padding: "74px 0", borderTop: "1px solid var(--rule)" }}>
      <div className="wrap">
        <div className="sec-head">
          <h2>Selected systems</h2>
          <div className="label">Six flagship builds &middot; 820 tests</div>
        </div>
        <p className="lede">
          Six production-grade systems in the open, carrying 820 tests between them — engines, guardrails, and eval
          suites, not notebooks. Five of the six run end-to-end with no API key, on deterministic or synthetic fallbacks.
        </p>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px"
          style={{ background: "var(--rule)", border: "1px solid var(--rule)" }}
        >
          {flagships.map((project) => (
            <a
              key={project.id}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ background: "var(--stock)", padding: 22, textDecoration: "none", display: "block", transition: "background 0.15s" }}
              className="hover:bg-[var(--stock-2)]"
              data-testid={`project-card-${project.id}`}
            >
              <div style={{ fontFamily: '"Courier Prime", monospace', fontSize: 12, letterSpacing: "0.1em", color: "var(--vermilion)" }}>
                {project.name}
              </div>
              <h4 style={{ fontSize: 18, margin: "6px 0 9px", fontFamily: '"Archivo Black", sans-serif' }} data-testid={`project-title-${project.id}`}>
                {project.title}
              </h4>
              <p style={{ margin: "0 0 12px", fontSize: 16, lineHeight: 1.5 }} data-testid={`project-description-${project.id}`}>
                {project.description}
              </p>
              <div style={{ marginTop: 11, fontFamily: '"Courier Prime", monospace', fontSize: "12.5px", lineHeight: 1.5, color: "var(--violet)", borderTop: "1px dashed var(--rule)", paddingTop: 9 }}>
                {project.take}
              </div>
              <div style={{ fontFamily: '"Courier Prime", monospace', fontSize: 12, opacity: 0.72, marginTop: 10, lineHeight: 1.4 }}>
                {project.stack}
              </div>
              <div style={{ fontFamily: '"Courier Prime", monospace', fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--vermilion)", marginTop: 10 }}>
                {project.tests}
              </div>
            </a>
          ))}
        </div>

        <div style={{ marginTop: 44 }}>
          <div className="sec-head">
            <h3 style={{ fontSize: 24, margin: 0 }}>More work</h3>
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-px"
            style={{ background: "var(--rule)", border: "1px solid var(--rule)" }}
          >
            {moreWork.map((item) => (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ background: "var(--stock)", padding: "18px 22px", textDecoration: "none", display: "flex", gap: 14, alignItems: "baseline", transition: "background 0.15s" }}
                className="hover:bg-[var(--stock-2)]"
              >
                <b style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 15, flex: "none" }}>{item.title}</b>
                <span style={{ fontFamily: '"Courier Prime", monospace', fontSize: 13, opacity: 0.75, lineHeight: 1.5 }}>{item.what}</span>
              </a>
            ))}
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: 40 }}>
          <a
            href="https://github.com/Aashir01"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: '"Courier Prime", monospace',
              fontSize: 13,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--stock)",
              background: "var(--ink)",
              padding: "12px 22px",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
            }}
            data-testid="button-view-all-projects"
          >
            Full record on GitHub &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
