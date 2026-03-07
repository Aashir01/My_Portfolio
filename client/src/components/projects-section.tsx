import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Star, Trophy, Award } from "lucide-react";

const filters = ["All", "AI Agents", "Automated RAG", "Data Intel"];

const projects = [
  {
    id: 1,
    title: "Autonomous AI Video Agency",
    description: "A multi-agent AI system capable of generating complete marketing videos from a single text prompt. The system orchestrates multiple agents for script generation, voice synthesis, visual generation, and video assembly to produce automated marketing content.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    tags: ["Multi-Agent System", "AI Video Generation", "Marketing Automation"],
    categories: ["AI Agents"],
    github: "#",
    demo: "#",
    achievement: "End-to-End Automation",
    achievementType: "automation"
  },
  {
    id: 2,
    title: "Enterprise AI Knowledge Assistant",
    description: "Developed an enterprise knowledge assistant using Retrieval Augmented Generation (RAG) to enable natural language interaction with large document collections. Implemented document ingestion pipelines, vector embeddings, and semantic search.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    tags: ["RAG System", "Semantic Search", "LLMs", "Vector Embeddings"],
    categories: ["Automated RAG"],
    github: "#",
    demo: "#",
    achievement: "Intelligent Retrieval",
    achievementType: "technical"
  },
  {
    id: 3,
    title: "AI Crypto Intelligence Dashboard",
    description: "Built a real-time cryptocurrency analytics platform that monitors market activity, detects anomalies, and generates insights for short-term trading strategies using machine learning models and real-time data streams.",
    image: "https://images.unsplash.com/photo-1621504450181-5d1566bc90e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    tags: ["Machine Learning", "Time Series", "Anomaly Detection", "Real-Time Data"],
    categories: ["Data Intel"],
    github: "#",
    demo: "#",
    achievement: "Predictive Intelligence",
    achievementType: "business"
  },
  {
    id: 4,
    title: "AI Agent Automation Framework",
    description: "Designed a modular agent framework capable of autonomous task planning, reasoning, and execution. The system integrates LLMs with external APIs and databases to automate research, data analysis, and decision workflows.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    tags: ["AI Agents", "Task Planning", "Autonomous Execution", "API Integration"],
    categories: ["AI Agents"],
    github: "#",
    demo: "#",
    achievement: "Autonomous Workflow",
    achievementType: "performance"
  }
];

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(project => project.categories.includes(activeFilter));

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-pink-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-500/5 via-transparent to-pink-500/5" />
      <div className="absolute top-20 right-20 w-80 h-80 bg-purple-300/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-pink-300/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
            Featured Projects
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-purple-600 dark:from-white dark:to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover innovative AI and machine learning solutions that demonstrate technical excellence and
            deliver tangible business value across multiple industry verticals.
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
              className="group bg-white/70 dark:bg-gray-800/70 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 hover:-translate-y-3"
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
                    {project.achievementType === "rating" ? (
                      <>
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="text-sm">{project.achievement}</span>
                      </>
                    ) : project.achievementType === "business" ? (
                      <>
                        <Trophy className="h-4 w-4 text-blue-500" />
                        <span className="text-sm">{project.achievement}</span>
                      </>
                    ) : project.achievementType === "technical" ? (
                      <>
                        <Award className="h-4 w-4 text-green-500" />
                        <span className="text-sm">{project.achievement}</span>
                      </>
                    ) : project.achievementType === "automation" ? (
                      <>
                        <Award className="h-4 w-4 text-purple-500" />
                        <span className="text-sm">{project.achievement}</span>
                      </>
                    ) : project.achievementType === "performance" ? (
                      <>
                        <Award className="h-4 w-4 text-orange-500" />
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

        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-800 dark:text-gray-200">Additional Projects</h3>
          <div className="max-w-4xl mx-auto bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-white/20 dark:border-white/10 p-8 shadow-lg">
            <ul className="space-y-4 text-left">
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">✓</span>
                <span className="text-gray-700 dark:text-gray-300"><strong>AI Document Intelligence System</strong> for automated extraction from passports, IDs, and financial documents</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">✓</span>
                <span className="text-gray-700 dark:text-gray-300"><strong>Speech recognition application</strong> trained for industry-specific terminology</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">✓</span>
                <span className="text-gray-700 dark:text-gray-300"><strong>Custom JPEG compression algorithm</strong> for optimized image processing</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">✓</span>
                <span className="text-gray-700 dark:text-gray-300"><strong>AI-driven data analytics dashboards</strong> for business insights</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" asChild data-testid="button-view-all-projects">
            <a href="https://upwork.com/freelancers/aashir1" target="_blank" rel="noopener noreferrer">
              View All Projects on Upwork <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
