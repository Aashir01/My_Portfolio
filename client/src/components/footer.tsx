import { Github, Linkedin, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--rule)", padding: "46px 0 60px", fontSize: 15 }}>
      <div className="wrap">
        <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr] gap-12">
          <div className="disclaimer" style={{ border: "1px solid var(--rule)", padding: "18px 20px", fontFamily: '"Courier Prime", monospace', fontSize: "12.5px", lineHeight: 1.7 }}>
            <p>
              This is a working portfolio, maintained in the open. It is not connected to, endorsed by, or speaking for
              any current or former client, employer, or platform. It collects no data and sells nothing.
            </p>
            <p>
              Every project here was delivered under its own terms; names and specifics are summarised where an NDA
              applies. Nothing here is an offer of services beyond what is stated.
            </p>
          </div>

          <div className="colophon">
            <p style={{ margin: "0 0 12px", lineHeight: 1.55 }}>
              Aashir Noman &mdash; AI / ML Engineer, Karachi. Building LLM systems that ship.
            </p>
            <p style={{ margin: "0 0 12px", lineHeight: 1.55, fontFamily: '"Courier Prime", monospace', fontSize: 13 }}>
              azac965@gmail.com
            </p>
            <div style={{ display: "flex", gap: 18 }}>
              <a href="https://github.com/Aashir01" target="_blank" rel="noopener noreferrer" style={{ color: "var(--ink)" }} data-testid="footer-github">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/in/aashir-noman-138820152" target="_blank" rel="noopener noreferrer" style={{ color: "var(--ink)" }} data-testid="footer-linkedin">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://wa.me/923401807019" target="_blank" rel="noopener noreferrer" style={{ color: "var(--ink)" }} data-testid="footer-whatsapp">
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
