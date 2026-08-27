import { Download } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navigation() {
  const [current, setCurrent] = useState("home");

  useEffect(() => {
    const sections = ["home", "about", "skills", "experience", "projects", "certifications", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrent(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="masthead" style={{ borderBottom: "1px solid var(--rule)", position: "sticky", top: 0, zIndex: 50, background: "var(--stock)" }}>
      <div className="wrap" style={{ display: "flex", alignItems: "center", gap: 20, minHeight: 56, flexWrap: "wrap", paddingTop: 8, paddingBottom: 8 }}>
        <a
          href="#home"
          className="crest"
          onClick={(e) => { e.preventDefault(); scrollToSection("home"); }}
        >
          Aashir<span>Noman</span>
        </a>

        <nav style={{ marginLeft: "auto", display: "flex", gap: 20, flexWrap: "wrap" }} className="mono">
          {[
            ["about", "About"],
            ["skills", "Skills"],
            ["experience", "Experience"],
            ["projects", "Projects"],
            ["contact", "Contact"],
          ].map(([id, label]) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              aria-current={current === id ? "page" : undefined}
              style={{
                fontFamily: '"Courier Prime", monospace',
                fontSize: 12,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                textDecoration: "none",
                padding: "3px 0",
                border: "none",
                background: "none",
                cursor: "pointer",
                color: "inherit",
                borderBottom: current === id ? "1px solid var(--ink)" : "1px solid transparent",
              }}
              data-testid={`nav-${id}`}
            >
              {label}
            </button>
          ))}
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <a
            href="/Aashir_Noman_Resume.pdf"
            download="Aashir_Noman_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: '"Courier Prime", monospace',
              fontSize: 12,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--stock)",
              background: "var(--ink)",
              padding: "8px 14px",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
            }}
            data-testid="button-download-cv"
          >
            Download CV <Download className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
