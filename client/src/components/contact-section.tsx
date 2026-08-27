import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Github, Linkedin, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent",
      description: "Thanks for reaching out. I'll get back to you shortly.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" style={{ padding: "74px 0", borderTop: "1px solid var(--rule)", background: "var(--ink)", color: "var(--stock)" }}>
      <div className="wrap">
        <div className="sec-head">
          <h2 style={{ color: "var(--stock)" }}>Work with me</h2>
          <div className="label" style={{ color: "var(--stock)" }}>Open to remote AI/ML roles</div>
        </div>
        <p className="lede" style={{ color: "var(--stock)", opacity: 0.9 }}>
          I am open to remote AI / ML engineering roles and long-term consulting engagements &mdash; especially where an
          LLM system has to be trusted with something consequential: agent orchestration, retrieval over proprietary
          corpora, guardrails and approval workflows, or evaluation infrastructure for a team shipping fast.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7" style={{ marginBottom: 52 }}>
          {[
            ["01 — Describe", "Send the problem in plain language. A dataset, a workflow, a bottleneck — no jargon needed."],
            ["02 — Agree", "We settle scope, stack, and success criteria before any code is written."],
            ["03 — Build", "A working system, deployed and documented, with the honest trade-offs written down."],
            ["04 — Hand over", "You get the code, the model, and the record. Nothing is held back behind a retainer."],
          ].map(([step, body]) => (
            <div key={step} style={{ borderTop: "2px solid var(--vermilion)", paddingTop: 12 }}>
              <b style={{ display: "block", fontFamily: '"Courier Prime", monospace', fontSize: 12, letterSpacing: "0.14em", color: "var(--vermilion)", marginBottom: 6 }}>
                {step}
              </b>
              <p style={{ margin: 0, fontSize: "16.5px", lineHeight: 1.5, opacity: 0.9 }}>{body}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div>
              <h3 style={{ fontSize: 17, margin: "0 0 14px", color: "var(--stock)" }}>Direct lines</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <a href="mailto:azac965@gmail.com" style={{ fontFamily: '"Courier Prime", monospace', fontSize: 14, color: "var(--stock)", textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }} data-testid="contact-email">
                  <Mail className="h-4 w-4" style={{ color: "var(--vermilion)" }} /> azac965@gmail.com
                </a>
                <span style={{ fontFamily: '"Courier Prime", monospace', fontSize: 14, color: "var(--stock)", display: "flex", alignItems: "center", gap: 10 }} data-testid="contact-location">
                  <MapPin className="h-4 w-4" style={{ color: "var(--vermilion)" }} /> Karachi, Pakistan &middot; Remote worldwide
                </span>
                <a href="https://wa.me/923401807019" target="_blank" rel="noopener noreferrer" style={{ fontFamily: '"Courier Prime", monospace', fontSize: 14, color: "var(--stock)", textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }} data-testid="contact-whatsapp">
                  <MessageCircle className="h-4 w-4" style={{ color: "var(--vermilion)" }} /> +92 340 180 7019
                </a>
              </div>
            </div>

            <div>
              <h3 style={{ fontSize: 17, margin: "0 0 14px", color: "var(--stock)" }}>Elsewhere</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
                <a href="https://github.com/Aashir01" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontFamily: '"Courier Prime", monospace', fontSize: 13, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--stock)", textDecoration: "none", borderBottom: "1px solid var(--vermilion)" }} data-testid="social-github">
                  <Github className="h-4 w-4" /> GitHub
                </a>
                <a href="https://linkedin.com/in/aashir-noman-138820152" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontFamily: '"Courier Prime", monospace', fontSize: 13, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--stock)", textDecoration: "none", borderBottom: "1px solid var(--vermilion)" }} data-testid="social-linkedin">
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
                <a href="https://upwork.com/freelancers/aashir1" target="_blank" rel="noopener noreferrer" style={{ fontFamily: '"Courier Prime", monospace', fontSize: 13, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--stock)", textDecoration: "none", borderBottom: "1px solid var(--vermilion)" }} data-testid="social-upwork">
                  Upwork
                </a>
                <a href="https://twitter.com/Aashir002" target="_blank" rel="noopener noreferrer" style={{ fontFamily: '"Courier Prime", monospace', fontSize: 13, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--stock)", textDecoration: "none", borderBottom: "1px solid var(--vermilion)" }}>
                  X / Twitter
                </a>
                <a href="https://orcid.org/0009-0004-2126-5419" target="_blank" rel="noopener noreferrer" style={{ fontFamily: '"Courier Prime", monospace', fontSize: 13, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--stock)", textDecoration: "none", borderBottom: "1px solid var(--vermilion)" }}>
                  ORCID
                </a>
              </div>
            </div>
          </div>

          <div style={{ background: "var(--card)", color: "var(--ink)", border: "1.5px solid var(--ink)", padding: 28, boxShadow: "6px 7px 0 rgba(0,0,0,0.16)" }}>
            <h3 style={{ fontSize: 22, margin: "0 0 18px" }}>Start the conversation</h3>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }} data-testid="contact-form">
              <div>
                <Label htmlFor="name" style={{ fontFamily: '"Courier Prime", monospace', fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: 6 }}>
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Who is asking"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  data-testid="input-name"
                />
              </div>
              <div>
                <Label htmlFor="email" style={{ fontFamily: '"Courier Prime", monospace', fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: 6 }}>
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  data-testid="input-email"
                />
              </div>
              <div>
                <Label htmlFor="message" style={{ fontFamily: '"Courier Prime", monospace', fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: 6 }}>
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Describe the problem, the data, or the workflow."
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  style={{ resize: "none" }}
                  data-testid="textarea-message"
                />
              </div>
              <button
                type="submit"
                style={{
                  fontFamily: '"Courier Prime", monospace',
                  fontSize: 13,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  background: "var(--ink)",
                  color: "var(--stock)",
                  border: "none",
                  padding: "14px 22px",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                }}
                data-testid="button-send-message"
              >
                Send message <Mail className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
