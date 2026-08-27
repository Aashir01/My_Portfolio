import { useEffect, useState } from "react";

export default function HeroSection() {
  const [roll, setRoll] = useState("—");

  useEffect(() => {
    setRoll(`AN/${new Date().getFullYear()}/${String(Math.floor(Math.random() * 900000) + 100000)}`);
  }, []);

  return (
    <div className="hero" style={{ padding: "64px 0 40px", overflowX: "hidden" }}>
      <div className="wrap grid grid-cols-1 md:grid-cols-[1.25fr_0.75fr] gap-10 md:gap-14 items-start">
        <div>
          <div className="label">AI / ML Engineer &middot; Agentic Systems &middot; Karachi</div>
          <h1 style={{ fontSize: "clamp(40px, 6.8vw, 84px)", margin: "14px 0 20px" }}>
            Aashir<br />
            <em style={{ fontStyle: "normal", color: "var(--vermilion)" }}>Noman</em>
          </h1>
          <p className="kicker" style={{ maxWidth: "36rem", fontSize: 20 }}>
            I build LLM systems that are allowed to touch real money, real patients, and real decisions &mdash;
            retrieval that cites its sources, agents that respect a budget, and guardrails that fail the build before
            a model gets a chance to fail in production.
          </p>
          <div className="est" style={{ marginTop: 26, display: "flex", gap: 26, flexWrap: "wrap" }}>
            <div style={{ borderLeft: "2px solid var(--violet)", paddingLeft: 12 }}>
              <b style={{ display: "block", fontFamily: '"Archivo Black", sans-serif', fontSize: 22 }}>3+</b>
              <span className="label">Years shipping LLMs</span>
            </div>
            <div style={{ borderLeft: "2px solid var(--violet)", paddingLeft: 12 }}>
              <b style={{ display: "block", fontFamily: '"Archivo Black", sans-serif', fontSize: 22 }}>6</b>
              <span className="label">Systems in the open</span>
            </div>
            <div style={{ borderLeft: "2px solid var(--violet)", paddingLeft: 12 }}>
              <b style={{ display: "block", fontFamily: '"Archivo Black", sans-serif', fontSize: 22 }}>820</b>
              <span className="label">Tests between them</span>
            </div>
            <div style={{ borderLeft: "2px solid var(--violet)", paddingLeft: 12 }}>
              <b style={{ display: "block", fontFamily: '"Archivo Black", sans-serif', fontSize: 22 }}>5&#9733;</b>
              <span className="label">Upwork, kept</span>
            </div>
          </div>

          <div style={{ display: "flex", gap: 14, marginTop: 32, flexWrap: "wrap" }}>
            <a
              href="#projects"
              style={{
                fontFamily: '"Courier Prime", monospace',
                fontSize: 13,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                background: "var(--ink)",
                color: "var(--stock)",
                padding: "12px 22px",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              See the work
            </a>
            <a
              href="#contact"
              style={{
                fontFamily: '"Courier Prime", monospace',
                fontSize: 13,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                background: "transparent",
                color: "var(--ink)",
                border: "1.5px solid var(--ink)",
                padding: "12px 22px",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              Work with me
            </a>
          </div>
        </div>

        <div style={{ position: "relative", justifySelf: "center", width: "100%", maxWidth: 360 }}>
          <div
            className="card"
            style={{
              background: "#F2F3EC",
              border: "1.5px solid var(--ink)",
              padding: 18,
              position: "relative",
              transform: "rotate(-1.4deg)",
              boxShadow: "6px 7px 0 rgba(27, 42, 44, 0.16)",
            }}
          >
            <div style={{ position: "absolute", inset: 6, border: "1px dashed var(--rule)", pointerEvents: "none" }} />
            <div style={{ borderBottom: "2px solid var(--ink)", paddingBottom: 10, marginBottom: 14, display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
              <div style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 13 }}>OPERATOR FILE</div>
              <div className="label">Form AI/01</div>
            </div>

            <div style={{ position: "relative", marginBottom: 16 }}>
              <img
                src="/profile_pic.jpeg"
                alt="Aashir Noman, AI / ML Engineer"
                style={{
                  width: "100%",
                  aspectRatio: "4 / 5",
                  objectFit: "cover",
                  objectPosition: "top center",
                  display: "block",
                  border: "1px solid var(--ink)",
                  filter: "grayscale(15%) contrast(1.02)",
                }}
                data-testid="img-headshot"
              />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "76px 1fr", gap: 8, alignItems: "end", marginBottom: 8 }}>
              <div style={{ fontFamily: '"Courier Prime", monospace', fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", opacity: 0.7, paddingBottom: 3 }}>Name</div>
              <div style={{ fontFamily: '"Courier Prime", monospace', fontSize: 14, borderBottom: "1px solid var(--rule)", paddingBottom: 3, color: "var(--violet)" }}>Aashir Noman</div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "76px 1fr", gap: 8, alignItems: "end", marginBottom: 8 }}>
              <div style={{ fontFamily: '"Courier Prime", monospace', fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", opacity: 0.7, paddingBottom: 3 }}>Role</div>
              <div style={{ fontFamily: '"Courier Prime", monospace', fontSize: 14, borderBottom: "1px solid var(--rule)", paddingBottom: 3, color: "var(--violet)" }}>AI / ML Engineer</div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "76px 1fr", gap: 8, alignItems: "end", marginBottom: 8 }}>
              <div style={{ fontFamily: '"Courier Prime", monospace', fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", opacity: 0.7, paddingBottom: 3 }}>Focus</div>
              <div style={{ fontFamily: '"Courier Prime", monospace', fontSize: 14, borderBottom: "1px solid var(--rule)", paddingBottom: 3, color: "var(--violet)" }}>LLM &middot; Agents &middot; RAG</div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "76px 1fr", gap: 8, alignItems: "end", marginBottom: 8 }}>
              <div style={{ fontFamily: '"Courier Prime", monospace', fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", opacity: 0.7, paddingBottom: 3 }}>File No.</div>
              <div style={{ fontFamily: '"Courier Prime", monospace', fontSize: 14, borderBottom: "1px solid var(--rule)", paddingBottom: 3, color: "var(--violet)" }}>{roll}</div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "76px 1fr", gap: 8, alignItems: "end" }}>
              <div style={{ fontFamily: '"Courier Prime", monospace', fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", opacity: 0.7, paddingBottom: 3 }}>Status</div>
              <div style={{ fontFamily: '"Courier Prime", monospace', fontSize: 14, borderBottom: "1px solid var(--rule)", paddingBottom: 3, color: "var(--vermilion)" }}>Open to remote AI/ML roles</div>
            </div>
          </div>
        </div>
      </div>

      <div className="wrap">
        <div className="notice">
          <div className="label">Working note</div>
          <p>
            Most of my work is the part that is not the prompt: deterministic fallbacks, tiered autonomy limits,
            injection boundaries, human approval gates, and evaluation harnesses that fail the build before it ships.
          </p>
        </div>
      </div>
    </div>
  );
}
