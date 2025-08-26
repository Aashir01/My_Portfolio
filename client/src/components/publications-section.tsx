import { ExternalLink, FileText, Brain, Network, Microscope, Tag, Shield } from "lucide-react";

const publications = [
  {
    id: 1,
    title: "Advancing Pediatric Brain Mapping: An AI-Driven Adaptive Functional MRI Pipeline",
    conference: "RSNA 2024",
    venue: "Radiological Society of North America",
    description: "A self-supervised learning based adaptive pipeline for identification of paediatric functional brain networks using advanced AI techniques for improved clinical assessment.",
    authors: "Akshay Kumaar M, Sachin Patalasingh, Malvika Ganesh, Radha Kumari, Rimjhim Agrawal",
    icon: Brain,
    status: "Conference",
    link: "#"
  },
  {
    id: 2,
    title: "Harmonizing tb-fMRI and rs-fMRI: A Generative approach for mapping Language Networks",
    conference: "ECR 2024",
    venue: "European Congress of Radiology",
    description: "Utilizing generative modelling to map task-based fMRI analogous brain activity maps for Language network using rs-fMRI connectivity data.",
    authors: "Akshay Kumaar M, Sachin Patalasingh, Rimjhim Agrawal, Saurabh Jain, et al.",
    icon: Network,
    status: "Conference",
    link: "https://dx.doi.org/10.26044/ecr2024/C-13388"
  },
  {
    id: 3,
    title: "Brain Tumor Classification using Pre-Trained Auxiliary Classifying Style-based GAN",
    conference: "IJIMAI",
    venue: "International Journal of Interactive Multimedia and AI",
    description: "An auxiliary classifying conditional generative adversarial network based on StyleGAN, achieving ~99.5% accuracy in classifying brain tumors from MR Images.",
    authors: "Akshay Kumaar M, Dr. Duraimurugan Samiayya, Venkatesan Rajinikanth, et al.",
    icon: Microscope,
    status: "Published",
    link: "https://reunir.unir.net/handle/123456789/14357"
  },
  {
    id: 4,
    title: "System and Method for determining Networks of Brain from Resting State MRI data using ML",
    conference: "US Patent",
    venue: "US Patent US20240366087A1",
    description: "A method for determining brain networks using resting-state MRI data and machine learning to evaluate a subject's health and brain connectivity patterns.",
    authors: "Dr. Rimjhim Agrawal, Ruchi Sharma, Dilip Rajeswari, Akshay Kumaar Murali",
    icon: Tag,
    status: "Patent Issued",
    link: "https://patentcenter.uspto.gov/applications/18285639"
  },
  {
    id: 5,
    title: "A Hybrid Framework for Intrusion Detection in Healthcare Systems using Deep Learning",
    conference: "Frontiers",
    venue: "Frontiers in Public Health",
    description: "A Machine Learning based approach to detect network & application intrusions, achieving ~99.2% accuracy in detecting 19 types of cyber attacks.",
    authors: "Akshay Kumaar M, Dr. Duraimurugan Samiayya, Durai Raj Vincent P M, et al.",
    icon: Shield,
    status: "Published",
    link: "https://www.frontiersin.org/articles/10.3389/fpubh.2021.824898/full"
  }
];

export default function PublicationsSection() {
  return (
    <section id="publications" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Research & Publications</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My research contributions in AI, medical imaging, and computer vision published in leading conferences and journals.
          </p>
        </div>

        <div className="space-y-8">
          {publications.map((publication) => {
            const IconComponent = publication.icon;
            return (
              <div 
                key={publication.id}
                className="p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow"
                data-testid={`publication-${publication.id}`}
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="lg:w-20 flex-shrink-0">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center border border-primary/20">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="mb-3">
                      <h3 className="text-xl font-semibold mb-2" data-testid={`publication-title-${publication.id}`}>
                        {publication.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                        <span className={`px-2 py-1 rounded text-xs border ${
                          publication.status === "Published" || publication.status === "Patent Issued"
                            ? "bg-accent/10 text-accent border-accent/20"
                            : "bg-primary/10 text-primary border-primary/20"
                        }`}>
                          {publication.status}
                        </span>
                        <span>{publication.venue}</span>
                      </div>
                      <p className="text-muted-foreground mb-3" data-testid={`publication-description-${publication.id}`}>
                        {publication.description}
                      </p>
                      <div className="text-sm text-muted-foreground" data-testid={`publication-authors-${publication.id}`}>
                        Authors: {publication.authors}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <a 
                      href={publication.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors"
                      data-testid={`publication-link-${publication.id}`}
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                    <a 
                      href="#" 
                      className="text-primary hover:text-primary/80 transition-colors"
                      data-testid={`publication-pdf-${publication.id}`}
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
            href="#" 
            className="inline-flex items-center px-6 py-3 rounded-lg border border-border text-foreground hover:bg-muted transition-colors"
            data-testid="button-view-all-publications"
          >
            View All Publications <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
