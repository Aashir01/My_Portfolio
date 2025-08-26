import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Star, Trophy, Award } from "lucide-react";

const filters = ["All", "Computer Vision", "NLP", "Deep Learning", "Web Apps"];

const projects = [
  {
    id: 1,
    title: "Neural Black - AI Brain Tumor Detection",
    description: "Complete brain tumor detection & classification system using CNNs with 99.5% accuracy for classifying Glioma, Meningioma, & Pituitary tumors from MR Images.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
    tags: ["Computer Vision", "CNN", "Medical AI", "PyTorch"],
    categories: ["Computer Vision", "Deep Learning"],
    github: "https://github.com/aksh-ai/neuralBlack",
    demo: "#",
    stars: 136,
    achievement: "stars"
  },
  {
    id: 2,
    title: "Drive AI - Smart Warning System",
    description: "Computer Vision & Deep Learning system for detecting traffic signs, driver drowsiness, lane changes, and pedestrian movements with real-time warnings.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
    tags: ["Computer Vision", "Object Detection", "Real-time", "OpenCV"],
    categories: ["Computer Vision", "Deep Learning"],
    github: "https://github.com/aksh-ai/drive-ai",
    demo: "#",
    stars: 42,
    achievement: "stars"
  },
  {
    id: 3,
    title: "Text Readability Prediction with Transformers",
    description: "Comprehensive PyTorch/HuggingFace pipeline using BERT and RoBERTa for text complexity estimation. Includes interactive web app for custom text analysis.",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
    tags: ["NLP", "BERT", "Transformers", "Web App"],
    categories: ["NLP", "Web Apps"],
    github: "https://github.com/kozodoi/Text_Readability_Prediction",
    demo: "#",
    achievement: "Top 9% Kaggle",
    achievementType: "competition"
  },
  {
    id: 4,
    title: "Chemical Structure Image-to-Text Translation",
    description: "CNN-LSTM encoder-decoder architecture for translating chemical images into formula strings. Achieved top-5% placement in Kaggle competition with silver medal.",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
    tags: ["Computer Vision", "CNN-LSTM", "Chemistry", "PyTorch"],
    categories: ["Computer Vision", "Deep Learning"],
    github: "https://github.com/kozodoi/BMS_Molecular_Translation",
    demo: "#",
    achievement: "Silver Medal",
    achievementType: "medal"
  },
  {
    id: 5,
    title: "AI Stock Trading Bot",
    description: "Reinforcement Learning bot using Deep Q Learning to make automated trading decisions. Simulates profit and loss based on real market data and technical indicators.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
    tags: ["RL", "Deep Q Learning", "Finance", "Trading"],
    categories: ["Deep Learning"],
    github: "https://github.com/aksh-ai/stock_bot",
    demo: "#",
    stars: 28,
    achievement: "stars"
  },
  {
    id: 6,
    title: "Tofu - Deep Learning Framework",
    description: "User-friendly deep learning framework for Python, C, C++, and Java designed to simplify technical complexity and improve accessibility to machine learning.",
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
    tags: ["Deep Learning", "Framework", "Multi-language", "Open Source"],
    categories: ["Deep Learning"],
    github: "https://github.com/aksh-ai/tofu",
    demo: "#",
    stars: 15,
    achievement: "stars"
  }
];

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.categories.includes(activeFilter));

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore my latest AI and machine learning projects across various domains.
          </p>
        </div>

        {/* Project Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "secondary"}
              onClick={() => setActiveFilter(filter)}
              className="text-sm font-medium"
              data-testid={`filter-${filter.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              data-testid={`project-card-${project.id}`}
            >
              <img 
                src={project.image}
                alt={`${project.title} project visualization`}
                className="w-full h-48 object-cover"
              />
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2" data-testid={`project-title-${project.id}`}>
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4" data-testid={`project-description-${project.id}`}>
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2 py-1 bg-primary/10 text-primary rounded text-xs border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    {project.achievement === "stars" ? (
                      <>
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="text-sm">{project.stars} stars</span>
                      </>
                    ) : project.achievementType === "competition" ? (
                      <>
                        <Trophy className="h-4 w-4 text-yellow-500" />
                        <span className="text-sm">{project.achievement}</span>
                      </>
                    ) : project.achievementType === "medal" ? (
                      <>
                        <Award className="h-4 w-4 text-gray-400" />
                        <span className="text-sm">{project.achievement}</span>
                      </>
                    ) : null}
                  </div>
                  
                  <div className="flex space-x-3">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors"
                      data-testid={`project-github-${project.id}`}
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a 
                      href={project.demo} 
                      className="text-primary hover:text-primary/80 transition-colors"
                      data-testid={`project-demo-${project.id}`}
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" asChild data-testid="button-view-all-projects">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              View All Projects on GitHub <Github className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
