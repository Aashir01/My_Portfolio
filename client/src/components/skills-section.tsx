const departments = [
  {
    code: "LLM 1XX",
    name: "LLMs & Fine-Tuning",
    description: "Taking an open-weight model and training it for the job in front of it.",
    items: ["LoRA / QLoRA", "PEFT", "Supervised & instruction fine-tuning", "Dataset curation", "Quantization (GGUF)", "Evaluation harnesses"],
  },
  {
    code: "RAG 2XX",
    name: "RAG Systems",
    description: "Retrieval that shows where an answer came from, and admits when it has nothing.",
    items: ["Chunking strategies", "Embeddings", "Vector stores (pgvector, FAISS, Chroma)", "Hybrid search", "Reranking", "Grounded citation answers"],
  },
  {
    code: "AGT 3XX",
    name: "Agentic AI & Automation",
    description: "Getting several agents to cooperate inside limits they can't negotiate.",
    items: ["Multi-agent orchestration", "Tool / function calling", "MCP", "LangChain", "LangGraph", "CrewAI", "Workflow automation"],
  },
  {
    code: "SER 4XX",
    name: "Model Serving & Infrastructure",
    description: "Getting a trained model out of a notebook and onto a box that stays up.",
    items: ["Ollama", "vLLM", "Hugging Face Transformers", "FastAPI", "Docker", "GPU rental (RunPod, Vast.ai)", "Self-hosted inference"],
  },
  {
    code: "ML 5XX",
    name: "Machine & Deep Learning",
    description: "Classical models, still the right answer more often than people expect.",
    items: ["CNN", "KNN", "Time series clustering", "Supervised & unsupervised learning", "Gradient boosting", "Ensembling", "Model fine-tuning"],
  },
  {
    code: "DATA 6XX",
    name: "Data Engineering & Analysis",
    description: "Moving, cleaning and indexing data so everything downstream stays accurate.",
    items: ["Pandas", "NumPy", "PySpark", "SQL / PostgreSQL (Supabase)", "Web scraping", "EDA", "Matplotlib", "Tableau"],
  },
  {
    code: "PROG 7XX",
    name: "Programming",
    description: "What all of the above is written in.",
    items: ["Python", "SQL"],
  },
  {
    code: "API 8XX",
    name: "APIs & Platforms",
    description: "Providers I've wired into production work, model and otherwise.",
    items: ["OpenAI", "Anthropic Claude", "DeepSeek", "Qwen", "Supabase", "Duffel", "Amadeus", "Mollie", "GoCardless", "Wise"],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" style={{ padding: "74px 0", borderTop: "1px solid var(--rule)" }}>
      <div className="wrap">
        <div className="sec-head">
          <h2>Capabilities</h2>
          <div className="label">Eight groups &middot; Skills that ship</div>
        </div>
        <p className="lede">
          Grouped by layer and numbered like a course catalogue, though nothing here is a prerequisite for anything
          else. Pick a thread and follow it. The 100s are foundations. The 600s assume the harder questions are
          already settled.
        </p>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-px"
          style={{ background: "var(--rule)", border: "1px solid var(--rule)" }}
        >
          {departments.map((dept) => (
            <div
              key={dept.code}
              style={{ background: "var(--stock)", padding: 26, transition: "background 0.15s" }}
              className="hover:bg-[var(--stock-2)]"
              data-testid={`skill-category-${dept.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
            >
              <div style={{ fontFamily: '"Courier Prime", monospace', fontSize: 12, letterSpacing: "0.16em", color: "var(--vermilion)" }}>
                {dept.code}
              </div>
              <h3 style={{ fontSize: 22, margin: "7px 0 9px" }}>{dept.name}</h3>
              <p style={{ margin: "0 0 14px", fontSize: "16.5px", lineHeight: 1.5 }}>{dept.description}</p>
              <ol style={{ margin: 0, padding: 0, listStyle: "none", borderTop: "1px dashed var(--rule)", paddingTop: 12 }}>
                {dept.items.map((item) => (
                  <li
                    key={item}
                    style={{ fontFamily: '"Courier Prime", monospace', fontSize: 13, lineHeight: 1.7, display: "flex", gap: 10 }}
                  >
                    <b style={{ color: "var(--violet)", fontWeight: 400, flex: "none" }}>{dept.code.split(" ")[0]} {String(dept.items.indexOf(item) + 1).padStart(2, "0")}</b>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
