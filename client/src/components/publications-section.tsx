import { ExternalLink, FileText, Brain, Network, Microscope, Tag, Shield, Database } from "lucide-react";

const certifications = [
  {
    id: 1,
    title: "Agentic AI Engineer",
    venue: "Udemy",
    description: "Comprehensive training on building autonomous AI agents and multi-agent systems.",
    authors: "ED Donner",
    icon: Brain,
    status: "Certified",
    link: "#"
  },
  {
    id: 2,
    title: "Deep Learning Specialization",
    venue: "DeepLearning.AI",
    description: "Advanced concepts in neural networks, hyperparameter tuning, CNNs, and sequence models.",
    authors: "Andrew Ng",
    icon: Network,
    status: "Certified",
    link: "#"
  },
  {
    id: 3,
    title: "Machine Learning with Python",
    venue: "IBM",
    description: "Practical application of machine learning algorithms using Python and scikit-learn.",
    authors: "IBM Skills Network",
    icon: Microscope,
    status: "Certified",
    link: "#"
  },
  {
    id: 4,
    title: "Databases and SQL for Data Science",
    venue: "IBM",
    description: "Relational database concepts, SQL querying, and database access from Python.",
    authors: "IBM Skills Network",
    icon: Database,
    status: "Certified",
    link: "#"
  },
  {
    id: 5,
    title: "Data Visualization with Python",
    venue: "IBM",
    description: "Creating impactful data visualizations using Matplotlib, Seaborn, and Folium.",
    authors: "IBM Skills Network",
    icon: Tag,
    status: "Certified",
    link: "#"
  }
];

export default function PublicationsSection() {
  return (
    <section id="publications" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Certifications</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional certifications demonstrating continuous learning and expertise in core AI technologies.
          </p>
        </div>

        <div className="space-y-8">
          {certifications.map((cert) => {
            const IconComponent = cert.icon;
            return (
              <div
                key={cert.id}
                className="p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow"
                data-testid={`certification-${cert.id}`}
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="lg:w-20 flex-shrink-0">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center border border-primary/20">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="mb-3">
                      <h3 className="text-xl font-semibold mb-2" data-testid={`certification-title-${cert.id}`}>
                        {cert.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                        <span className={`px-2 py-1 rounded text-xs border bg-primary/10 text-primary border-primary/20`}>
                          {cert.status}
                        </span>
                        <span>{cert.venue}</span>
                      </div>
                      <p className="text-muted-foreground mb-3" data-testid={`certification-description-${cert.id}`}>
                        {cert.description}
                      </p>
                      <div className="text-sm text-muted-foreground" data-testid={`certification-authors-${cert.id}`}>
                        Instructor/Issuer: {cert.authors}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors"
                      data-testid={`certification-link-${cert.id}`}
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                    <a
                      href="#"
                      className="text-primary hover:text-primary/80 transition-colors"
                      data-testid={`certification-pdf-${cert.id}`}
                    >
                      <FileText className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://linkedin.com/in/aashir-noman-138820152"
            target="_blank"
            className="inline-flex items-center px-6 py-3 rounded-lg border border-border text-foreground hover:bg-muted transition-colors"
            data-testid="button-view-all-certifications"
          >
            Connect on LinkedIn <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
