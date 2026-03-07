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
    image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
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
    <section id="projects" className="py-20 bg-background relative overflow-hidden border-y border-white/5">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-white [mask-image:linear-gradient(to_bottom,transparent,black)] opacity-10" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-20 right-20 w-80 h-80 bg-primary/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-accent/10 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-primary/10 text-primary border border-primary/30 font-mono text-xs font-bold uppercase tracking-widest mb-6 shadow-glow-cyan">
            <span className="w-2 h-2 bg-primary animate-pulse"></span>
            DEPLOYED_SYSTEMS
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground tracking-tight">
            System <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent text-glow">Dashboards</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-mono text-sm tracking-wide">
            Execution logs and architecture overviews for deployed AI and machine learning solutions.
          </p>
        </div>

        {/* Project Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 font-mono">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              onClick={() => setActiveFilter(filter)}
              className={`text-xs uppercase tracking-widest rounded-sm ${activeFilter === filter ? 'bg-primary text-black shadow-glow-cyan hover:bg-primary/90' : 'bg-transparent border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/80'}`}
              data-testid={`filter-${filter.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <span className="opacity-50 mr-2">/</span> {filter}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-black/60 backdrop-blur-md border border-primary/20 hover:border-primary/60 rounded-sm overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-glow-cyan flex flex-col"
              data-testid={`project-card-${project.id}`}
            >
              {/* Terminal Window Header */}
              <div className="h-6 bg-black border-b border-primary/20 flex items-center px-3 gap-1.5 opacity-80">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                <div className="ml-auto text-[10px] text-muted-foreground font-mono">system_v{project.id}.0</div>
              </div>

              <div className="relative overflow-hidden border-b border-primary/20">
                <img
                  src={project.image}
                  alt={`${project.title} project visualization`}
                  className="w-full h-48 object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500 mix-blend-luminosity group-hover:mix-blend-normal"
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay pointer-events-none group-hover:opacity-0 transition-opacity" />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold mb-3 font-mono tracking-tight text-gray-200 group-hover:text-primary transition-colors" data-testid={`project-title-${project.id}`}>
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 font-mono opacity-80 flex-1" data-testid={`project-description-${project.id}`}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-black text-primary rounded-sm text-[10px] font-mono border border-primary/30 tracking-widest uppercase shadow-[inset_0_0_8px_rgba(0,240,255,0.1)]"
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
          <h3 className="text-2xl font-bold mb-8 text-center text-foreground font-mono tracking-tight uppercase">
            <span className="text-primary mr-2">/</span>Additional Systems
          </h3>
          <div className="max-w-4xl mx-auto bg-black/60 backdrop-blur-md rounded-sm border border-primary/20 p-6 shadow-glow-cyan">
            <div className="flex items-center mb-4 border-b border-white/10 pb-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80 mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80 mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80 mr-4"></div>
              <span className="text-xs font-mono text-muted-foreground">bash ~ agent_modules</span>
            </div>
            <ul className="space-y-4 text-left font-mono text-sm">
              <li className="flex items-start group hover:bg-white/5 p-2 rounded-sm transition-colors cursor-default">
                <span className="text-primary font-bold mr-3 mt-0.5 group-hover:text-glow">{`>`}</span>
                <span className="text-muted-foreground group-hover:text-gray-300 transition-colors">
                  [SUCCESS] Deployed <strong className="text-primary font-normal">AI Document Intelligence System</strong> for automated extraction from passports, IDs, and financial documents
                </span>
              </li>
              <li className="flex items-start group hover:bg-white/5 p-2 rounded-sm transition-colors cursor-default">
                <span className="text-accent font-bold mr-3 mt-0.5" style={{ textShadow: "0 0 8px rgba(138,43,226,0.6)" }}>{`>`}</span>
                <span className="text-muted-foreground group-hover:text-gray-300 transition-colors">
                  [SUCCESS] Trained <strong className="text-accent font-normal">Speech recognition application</strong> for industry-specific terminology
                </span>
              </li>
              <li className="flex items-start group hover:bg-white/5 p-2 rounded-sm transition-colors cursor-default">
                <span className="text-primary font-bold mr-3 mt-0.5 group-hover:text-glow">{`>`}</span>
                <span className="text-muted-foreground group-hover:text-gray-300 transition-colors">
                  [SUCCESS] Compiled <strong className="text-primary font-normal">Custom JPEG compression algorithm</strong> for optimized image processing
                </span>
              </li>
              <li className="flex items-start group hover:bg-white/5 p-2 rounded-sm transition-colors cursor-default">
                <span className="text-accent font-bold mr-3 mt-0.5" style={{ textShadow: "0 0 8px rgba(138,43,226,0.6)" }}>{`>`}</span>
                <span className="text-muted-foreground group-hover:text-gray-300 transition-colors">
                  [SUCCESS] Initialized <strong className="text-accent font-normal">AI-driven data analytics dashboards</strong> for business insights
                </span>
              </li>
              <li className="flex items-start p-2 rounded-sm">
                <span className="text-green-500 font-bold mr-3 mt-0.5 animate-pulse">_</span>
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
