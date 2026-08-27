const flagships = [
  {
    id: 1,
    name: "Meridian",
    title: "Autonomous Logistics Control Plane",
    description:
      "Disruptions at ports, on vessels, and in inventory were being caught late and resolved by manual phone calls across suppliers, TMS, WMS, and ERP — a slow, error-prone chain. I built an agent mesh that watches all of them, detects a disruption, and executes the response itself against ERP/TMS/WMS — but only inside hard limits the model cannot talk its way past. Delays and stock-outs now get handled in minutes, not days, and anything out of bounds escalates instead of guessing.",
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
      "Visa applications were getting refused for avoidable errors — missing documents, name mismatches, insufficient funds, non-compliant photos — only discovered at the consulate after fees and time were already lost. I built a system that scans the whole application bundle and reports exactly what is wrong before it ever gets submitted. Rejections that used to cost weeks now get caught in a single deterministic pass — 2–3 LLM calls per bundle, so it is fast and cheap to run per check.",
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
      "Insurers keep denying legitimate claims with opaque letters, and patients — who rarely know the legal grounds — almost never fight back, so valid appeals fail. I built a system that reads each denial letter, drafts a legally grounded appeal, and routes every single one to a licensed human before it leaves the building. The AI writes the case; it never sends anything on its own — three independent liability gates keep a person responsible, so appeals go out grounded in regulation rather than guesswork.",
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
      "Generic search tools over an authoritative religious corpus return loosely-sourced or model-guessed answers — unacceptable where every citation has to be exact. I built deterministic retrieval and agentic research over a closed corpus of 6,236 ayat, 130k morphological segments, and 1,651 roots, where scripture is rendered from PostgreSQL, never generated. The result is answers that cite the actual text — no hallucinated verses, no fabricated references.",
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
      "Most coding agents apply an LLM's patch too loosely and silently corrupt the wrong region of code when the replacement drifts from the source. I built an agent where the edit-application ladder is the hard part: when the model's replacement does not match byte-for-byte, progressively looser passes retry — but each must find exactly one match. The outcome is edits that land where they were intended, and ambiguity is an error, never a guess.",
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
      "Chart patterns in isolation fire false signals, so traders act on setups the macro picture quietly contradicts — a reliable way to lose money. I built an engine that treats a chart pattern as a hypothesis and the macroeconomy as the evidence: a setup becomes a signal only after surviving a chain of econometric filters that correct for overlapping observations. The result is far fewer false setups and signals only when the macro evidence actually corroborates.",
    take: "Corrects for overlapping observations.",
    stack: "Python · pandas/numpy · SQLAlchemy · TimescaleDB · Streamlit",
    tests: "163 tests",
    href: "https://github.com/Aashir01/Trading-Analyst",
  },
];

const moreWork = [
  { title: "DataSense AI", what: "Stops non-analysts from mis-querying data — SaaS agent with a whitelisted query planner that only allows safe SQL", href: "https://github.com/Aashir01/AI-Data-Analyst-Agent" },
  { title: "Enterprise AI Knowledge Assistant", what: "Fixes slow, siloed document search — production RAG assistant returning grounded answers over enterprise docs", href: "https://github.com/Aashir01/Enterprise-AI-Knowledge-Assistant" },
  { title: "El Madina Viajes", what: "Removes pricing inconsistencies across a booking site — tour platform with one shared, source-of-truth pricing engine", href: "https://github.com/Aashir01/EL-MADINA-VIAJES" },
  { title: "Hierarchical Agent Swarm", what: "Solves coordination breaking down at scale — manager–worker tree running 100+ agents without collisions", href: "https://github.com/Aashir01/hierarchical-agent-swarm" },
  { title: "Nexus Motion", what: "Cuts the manual pipeline in video production — multi-agent pipeline handling it end to end", href: "https://github.com/Aashir01/nexus-motion-AI-video-agency" },
  { title: "Spain Appointment Bot", what: "Kills the dead-time of watching a portal — appointment tracking and instant notification automation", href: "https://github.com/Aashir01/spain-visa-appointment-bot" },
  { title: "March ML Mania 2026", what: "Tames noisy brackets with calibrated, ensembled predictions — Kaggle tournament model", href: "https://github.com/Aashir01/-March-Machine-Learning-Mania-2026" },
  { title: "Deep Learning Projects", what: "Applied DL notebooks and experiments — working demos, not toy tutorials", href: "https://github.com/Aashir01/Deep-Learning-Projects" },
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
          Each build below exists because a real problem kept costing someone time, money, or trust. I went after the
          problem first, shipped the system that removes it, and left the outcome written down — 820 tests between six
          flagship systems, polished guardrails, and engines, not notebooks. Five of the six run end-to-end with no API
          key, on deterministic or synthetic fallbacks.
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
