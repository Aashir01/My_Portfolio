export default function AboutSection() {
  return (
    <section id="about" style={{ padding: "74px 0", borderTop: "1px solid var(--rule)" }}>
      <div className="wrap">
        <div className="sec-head">
          <h2>About</h2>
          <div className="label">The operator, in brief</div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 items-start">
          <div>
            <p className="lede" style={{ marginBottom: 18 }}>
              AI / ML Engineer with 3+ years of hands-on experience shipping production LLM systems &mdash;
              retrieval-augmented generation, multi-agent workflows, fine-tuned open-weight models, and end-to-end AI
              automation.
            </p>
            <p style={{ maxWidth: "36rem", fontSize: 18, lineHeight: 1.6, margin: "0 0 18px" }}>
              Top Rated on Upwork with a consistent five-star record across data science and applied AI engagements.
              Currently architecting an AI-assisted travel booking platform covering flight APIs, payments, and
              document automation. Seeking senior remote and contract engagements building LLM and agentic AI products.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-7" style={{ marginTop: 32 }}>
              <div style={{ borderTop: "3px solid var(--ink)", paddingTop: 14 }}>
                <h3 style={{ fontSize: 16, margin: "0 0 8px" }}>The trust layer</h3>
                <p style={{ margin: 0, fontSize: "16px", lineHeight: 1.55 }}>
                  Prompt-injection defence, signed execution, spend ceilings, human-in-the-loop enforcement, honest
                  statistics. The part that keeps a model honest.
                </p>
              </div>
              <div style={{ borderTop: "3px solid var(--ink)", paddingTop: 14 }}>
                <h3 style={{ fontSize: 16, margin: "0 0 8px" }}>Degrade, never stop</h3>
                <p style={{ margin: 0, fontSize: "16px", lineHeight: 1.55 }}>
                  Systems that boot with no API key and no vendor: deterministic policies, synthetic providers, offline
                  engines. Evaluate the whole product before signing anything.
                </p>
              </div>
              <div style={{ borderTop: "3px solid var(--ink)", paddingTop: 14 }}>
                <h3 style={{ fontSize: 16, margin: "0 0 8px" }}>Name the gaps</h3>
                <p style={{ margin: 0, fontSize: "16px", lineHeight: 1.55 }}>
                  A tool that hides what it has not built is worse than no tool. I document the missing pieces rather
                  than dressing up a demo as a product.
                </p>
              </div>
            </div>
          </div>

          <div style={{ border: "1px solid var(--rule)", padding: 20 }}>
            <div className="label" style={{ color: "var(--violet)", opacity: 1, marginBottom: 12 }}>Education</div>
            <div style={{ marginBottom: 16 }}>
              <b style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 15 }}>Virtual University of Pakistan</b>
              <div style={{ fontFamily: '"Courier Prime", monospace', fontSize: 13, opacity: 0.75 }}>Ongoing coursework in Statistics &amp; Economics</div>
            </div>
            <div style={{ marginBottom: 20 }}>
              <b style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 15 }}>University of Sargodha</b>
              <div style={{ fontFamily: '"Courier Prime", monospace', fontSize: 13, opacity: 0.75 }}>Bachelor's in Economics &middot; 2018&ndash;2020</div>
            </div>

            <div className="label" style={{ color: "var(--violet)", opacity: 1, marginBottom: 12 }}>Languages</div>
            <div style={{ fontFamily: '"Courier Prime", monospace', fontSize: 13, lineHeight: 1.8 }}>
              English &mdash; Fluent<br />
              Urdu &mdash; Native or bilingual
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
