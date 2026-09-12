const certifications = [
  { id: 1, code: "CERT 101", title: "Agentic AI Engineer", venue: "Udemy" },
  { id: 2, code: "CERT 102", title: "IBM Data Science Professional Certificate", venue: "IBM" },
  { id: 3, code: "CERT 103", title: "Databases and SQL for Data Science", venue: "IBM" },
  { id: 4, code: "CERT 104", title: "Machine Learning", venue: "IBM" },
  { id: 5, code: "CERT 105", title: "Deep Learning", venue: "IBM" },
  { id: 6, code: "CERT 106", title: "Data Visualization with Python", venue: "IBM" },
];

export default function PublicationsSection() {
  return (
    <section id="certifications" style={{ padding: "74px 0", borderTop: "1px solid var(--rule)" }}>
      <div className="wrap">
        <div className="sec-head">
          <h2>Credentials</h2>
          <div className="label">Six certificates &middot; IBM and Udemy</div>
        </div>
        <p className="lede">
          Certificates are the easy part. The real record is the section above, where these same skills have had to
          survive contact with production and a client's deadline. Listed here for completeness.
        </p>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-px"
          style={{ background: "var(--rule)", border: "1px solid var(--rule)" }}
        >
          {certifications.map((cert) => (
            <div
              key={cert.id}
              style={{ background: "var(--stock)", padding: 22, transition: "background 0.15s" }}
              className="hover:bg-[var(--stock-2)]"
              data-testid={`certification-${cert.id}`}
            >
              <div style={{ fontFamily: '"Courier Prime", monospace', fontSize: 12, letterSpacing: "0.16em", color: "var(--vermilion)" }}>
                {cert.code}
              </div>
              <h4 style={{ fontSize: 18, margin: "6px 0 4px", fontFamily: '"Archivo Black", sans-serif' }} data-testid={`certification-title-${cert.id}`}>
                {cert.title}
              </h4>
              <div style={{ fontFamily: '"Courier Prime", monospace', fontSize: 13, opacity: 0.75 }}>
                {cert.venue}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
