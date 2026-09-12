const flagships = [
  {
    id: 1,
    name: "Meridian",
    image: "/plates/meridian.svg",
    alt: "Container port with gantry cranes and an autonomous routing arc",
    title: "Autonomous Logistics Control Plane",
    description:
      "Port delays, vessel changes and stock-outs were getting spotted late, then sorted out over the phone between suppliers, the TMS, the WMS and the ERP. Meridian watches all four and acts on what it finds, writing back to those systems inside limits it can't argue its way around. Work that used to take two days of calls now clears in minutes, and anything outside the limits goes to a person instead.",
    take: "Autonomy tiers, signed tool calls, CVaR\u2089\u2080 risk ranking",
    stack: "Python \u00b7 Claude \u00b7 FastAPI \u00b7 Kafka \u00b7 TimescaleDB \u00b7 React",
    tests: "185 tests",
    href: "https://github.com/Aashir01/Supply-Chain-and-Logistics-Agentic-system",
  },
  {
    id: 2,
    name: "VisaGuard",
    image: "/plates/visaguard.svg",
    alt: "Passport and application documents checked against a compliance list",
    title: "Visa Document Intelligence",
    description:
      "Visa refusals usually come down to things nobody checked. A missing bank statement. A name spelled two ways across three forms. A photo that fails the crop rules. By the time the consulate says so, the fee is gone and the trip is off. VisaGuard reads the whole bundle and lists what's wrong while there's still time to fix it. Most of the checking is ordinary code, so a full pass costs two or three model calls.",
    take: "Rule checks first, 2 to 3 model calls per bundle",
    stack: "FastAPI \u00b7 Next.js \u00b7 Claude / DeepSeek \u00b7 Tesseract",
    tests: "224 tests",
    href: "https://github.com/Aashir01/Visa-Check",
  },
  {
    id: 3,
    name: "Appeals Bot",
    image: "/plates/appeals.svg",
    alt: "A denied insurance letter passing through three review gates into a signed appeal",
    title: "Medical Insurance Appeals Bot",
    description:
      "Insurers deny claims in letters most people can't parse, so plenty of valid appeals never get written at all. This reads the denial, works out which regulation it runs into, and drafts the appeal on that basis. Nothing leaves the system until a licensed human signs it. Three separate checks enforce that, because the cost of getting it wrong is somebody's medical bill.",
    take: "Three liability gates before anything sends",
    stack: "FastAPI \u00b7 LangGraph \u00b7 Claude \u00b7 Postgres \u00b7 Alembic",
    tests: "119 tests",
    href: "https://github.com/Aashir01/Medical-Insurance-Appeal-Bots",
  },
  {
    id: 4,
    name: "Quran Agent",
    image: "/plates/quran.svg",
    alt: "Manuscript page with a geometric star panel and exact verse citations",
    title: "Quran Research Agent",
    description:
      "A general search tool will happily invent a verse number. Tolerable in a blog post, useless here. Every ayah this returns is read straight out of PostgreSQL: 6,236 verses, 130k morphological segments and 1,651 roots, all indexed for exact lookup. The agent does the research around the text and cites the line it came from, so a claim can be checked in a second.",
    take: "Scripture is queried, never generated",
    stack: "FastAPI \u00b7 PostgreSQL \u00b7 Next.js PWA \u00b7 LangGraph \u00b7 MCP",
    tests: "89 tests",
    href: "https://github.com/Aashir01/Quran-Research-Agent",
  },
  {
    id: 5,
    name: "mini-agent",
    image: "/plates/mini-agent.svg",
    alt: "Terminal window showing an exact-match diff being applied",
    title: "A Coding Agent, Built to Be Read",
    description:
      "Coding agents quietly wreck files when the model's patch no longer matches what is on disk and the tool applies it anyway. This one refuses. If the replacement isn't byte-identical it retries with looser matching, and every pass has to land on exactly one match or the edit stops and says why. Forty tests, no framework, small enough to read in an afternoon.",
    take: "One match, or it stops and tells you",
    stack: "TypeScript \u00b7 Node 22+ \u00b7 Anthropic + OpenAI transports",
    tests: "40 tests",
    href: "https://github.com/Aashir01/agent-cli",
  },
  {
    id: 6,
    name: "MFIE",
    image: "/plates/mfie.svg",
    alt: "Candlestick chart filtered by a macroeconomic evidence curve",
    title: "Macro-Informed Financial Intelligence Engine",
    description:
      "A chart pattern on its own tells you very little, which is how traders end up long into a tightening cycle. MFIE treats the pattern as a guess and tests it against macro data before it will call anything a signal, with the significance maths corrected for overlapping windows so the backtest stops flattering itself. Far fewer setups survive the filter. That's the point of it.",
    take: "Overlap-corrected significance testing",
    stack: "Python \u00b7 pandas/numpy \u00b7 SQLAlchemy \u00b7 TimescaleDB \u00b7 Streamlit",
    tests: "163 tests",
    href: "https://github.com/Aashir01/Trading-Analyst",
  },
];

const moreWork = [
  { title: "DataSense AI", what: "Lets non-analysts ask a database questions without writing SQL. A query planner decides what is safe to run.", href: "https://github.com/Aashir01/AI-Data-Analyst-Agent" },
  { title: "Enterprise AI Knowledge Assistant", what: "RAG assistant over internal documents. Answers arrive with the source attached, so people stop chasing each other for PDFs.", href: "https://github.com/Aashir01/Enterprise-AI-Knowledge-Assistant" },
  { title: "El Madina Viajes", what: "Tour booking site where one pricing engine is the only place a price can come from. Three pages used to disagree.", href: "https://github.com/Aashir01/EL-MADINA-VIAJES" },
  { title: "Hierarchical Agent Swarm", what: "A manager and worker tree that keeps 100+ agents from colliding with each other's work.", href: "https://github.com/Aashir01/hierarchical-agent-swarm" },
  { title: "Nexus Motion", what: "Video production pipeline handled by a set of agents, from brief through to finished cut.", href: "https://github.com/Aashir01/nexus-motion-AI-video-agency" },
  { title: "Spain Appointment Bot", what: "Watches the consulate portal so nobody has to sit refreshing it, and pings the moment a slot opens.", href: "https://github.com/Aashir01/spain-visa-appointment-bot" },
  { title: "March ML Mania 2026", what: "Kaggle bracket model, calibrated and ensembled, because tournament data punishes a confident guess.", href: "https://github.com/Aashir01/-March-Machine-Learning-Mania-2026" },
  { title: "Deep Learning Projects", what: "Notebooks and experiments from things I was working through at the time. They all run.", href: "https://github.com/Aashir01/Deep-Learning-Projects" },
];

function GitHubMark({ size = 14 }: { size?: number }) {
  return (
    <svg viewBox="0 0 16 16" width={size} height={size} fill="currentColor" aria-hidden="true" style={{ flex: "none" }}>
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.6 7.6 0 0 1 2-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
    </svg>
  );
}

const repoOf = (href: string) => href.replace("https://github.com/", "");

export default function ProjectsSection() {
  return (
    <section id="projects" style={{ padding: "74px 0", borderTop: "1px solid var(--rule)" }}>
      <div className="wrap">
        <div className="sec-head">
          <h2>Selected systems</h2>
          <div className="label">Six flagship builds &middot; 820 tests</div>
        </div>
        <p className="lede">
          Six systems, each one built because something specific was going wrong and somebody was paying for it.
          There are 820 tests across them. Five of the six boot and run with no API key at all, on deterministic or
          fake providers, so you can try one before spending a cent on tokens. Every card links to its repo.
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
              style={{ background: "var(--stock)", textDecoration: "none", display: "flex", flexDirection: "column", transition: "background 0.15s" }}
              className="hover:bg-[var(--stock-2)]"
              data-testid={`project-card-${project.id}`}
            >
              <img
                src={project.image}
                alt={project.alt}
                width={800}
                height={420}
                loading={project.id <= 2 ? "eager" : "lazy"}
                decoding="async"
                style={{ display: "block", width: "100%", height: "auto", aspectRatio: "800 / 420", objectFit: "cover", borderBottom: "1px solid var(--rule)" }}
                data-testid={`project-image-${project.id}`}
              />
              <div style={{ padding: 22, display: "flex", flexDirection: "column", flex: 1 }}>
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
                <div
                  style={{ marginTop: "auto", paddingTop: 14, display: "flex", alignItems: "center", gap: 7, fontFamily: '"Courier Prime", monospace', fontSize: 12, opacity: 0.8, wordBreak: "break-all" }}
                  data-testid={`project-github-${project.id}`}
                >
                  <GitHubMark />
                  {repoOf(project.href)}
                </div>
              </div>
            </a>
          ))}
        </div>

        <div style={{ marginTop: 44 }}>
          <div className="sec-head">
            <h3 style={{ fontSize: 24, margin: 0 }}>More work</h3>
            <div className="label">All open on GitHub</div>
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
                style={{ background: "var(--stock)", padding: "18px 22px", textDecoration: "none", display: "flex", gap: 12, alignItems: "baseline", transition: "background 0.15s" }}
                className="hover:bg-[var(--stock-2)]"
                data-testid={`more-work-${item.title}`}
              >
                <span style={{ color: "var(--vermilion)", flex: "none", position: "relative", top: 2 }}>
                  <GitHubMark size={15} />
                </span>
                <span>
                  <b style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 15, marginRight: 10 }}>{item.title}</b>
                  <span style={{ fontFamily: '"Courier Prime", monospace', fontSize: 13, opacity: 0.75, lineHeight: 1.5 }}>{item.what}</span>
                </span>
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
            <GitHubMark size={15} />
            Full record on GitHub &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
