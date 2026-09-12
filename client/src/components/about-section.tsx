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
              AI / ML engineer, three years in. Nearly all of it LLM work: retrieval over private documents,
              multi-agent workflows, fine-tuning open-weight models, and automating the parts of a business that were
              running on copy and paste.
            </p>
            <p style={{ maxWidth: "36rem", fontSize: 18, lineHeight: 1.6, margin: "0 0 18px" }}>
              Top Rated on Upwork, five stars held across data science and applied AI contracts. Clients tend to come
              back, which I take as the more useful signal. At the moment I'm building a travel booking platform that
              has to handle flight APIs, EU payment rails and visa paperwork in one place. I'm looking for senior
              remote or contract work where an LLM system has to be trusted with something that matters.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-7" style={{ marginTop: 32 }}>
              <div style={{ borderTop: "3px solid var(--ink)", paddingTop: 14 }}>
                <h3 style={{ fontSize: 16, margin: "0 0 8px" }}>The trust layer</h3>
                <p style={{ margin: 0, fontSize: "16px", lineHeight: 1.55 }}>
                  Injection defence, signed tool calls, spend ceilings, approval steps, statistics that don't flatter
                  the model. This is the work that holds up when nobody is watching the output.
                </p>
              </div>
              <div style={{ borderTop: "3px solid var(--ink)", paddingTop: 14 }}>
                <h3 style={{ fontSize: 16, margin: "0 0 8px" }}>Runs without a vendor</h3>
                <p style={{ margin: 0, fontSize: "16px", lineHeight: 1.55 }}>
                  My systems boot with no API key: deterministic policies, fake providers, offline engines. You can run
                  the whole thing and judge it before you sign anything.
                </p>
              </div>
              <div style={{ borderTop: "3px solid var(--ink)", paddingTop: 14 }}>
                <h3 style={{ fontSize: 16, margin: "0 0 8px" }}>I tell you what's missing</h3>
                <p style={{ margin: 0, fontSize: "16px", lineHeight: 1.55 }}>
                  A tool that hides its gaps is worse than no tool at all. Whatever is unfinished goes in the README,
                  where you'll read it before it bites you.
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
              <div style={{ fontFamily: '"Courier Prime", monospace', fontSize: 13, opacity: 0.75 }}>Bachelor's in Economics &middot; 2018 to 2020</div>
            </div>

            <div className="label" style={{ color: "var(--violet)", opacity: 1, marginBottom: 12 }}>Languages</div>
            <div style={{ fontFamily: '"Courier Prime", monospace', fontSize: 13, lineHeight: 1.8 }}>
              English &middot; Fluent<br />
              Urdu &middot; Native
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
