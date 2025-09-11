import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Star, Trophy, Award } from "lucide-react";

const filters = ["All", "AI Chatbots", "AI Agents", "Data Processing", "Machine Learning"];

const projects = [
  {
    id: 1,
    title: "AI Chatbot Development using LLMs",
    description: "Architected and deployed enterprise-grade AI chatbot solutions for customer service automation, utilizing OpenAI's advanced language models and LangChain framework to deliver natural, context-aware conversational experiences with seamless integration capabilities.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    tags: ["OpenAI", "LangChain", "LLM", "Customer Service"],
    categories: ["AI Chatbots"],
    github: "#",
    demo: "#",
    achievement: "5⭐ Client Rating",
    achievementType: "rating"
  },
  {
    id: 2,
    title: "AI Agents using CrewAI",
    description: "Engineered sophisticated AI agent systems using CrewAI framework for enterprise workflow automation, delivering intelligent process optimization and significant operational efficiency improvements across diverse industry sectors.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    tags: ["CrewAI", "Automation", "Workflow", "Business Intelligence"],
    categories: ["AI Agents"],
    github: "#",
    demo: "#",
    achievement: "Business Automation",
    achievementType: "business"
  },
  {
    id: 3,
    title: "AI Speech Recognition App",
    description: "Developed a state-of-the-art AI-powered speech recognition system with specialized domain adaptation capabilities, achieving exceptional accuracy in processing industry-specific terminology and technical jargon across multiple professional sectors.",
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    tags: ["Speech Recognition", "NLP", "Industry Jargon", "AI"],
    categories: ["Machine Learning"],
    github: "#",
    demo: "#",
    achievement: "High Accuracy",
    achievementType: "technical"
  },
  {
    id: 4,
    title: "AI-driven PDF Processing",
    description: "Architected advanced AI-driven document processing systems for intelligent PDF data extraction and analysis, implementing cutting-edge OCR and NLP technologies to enable automated document understanding and structured data generation.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    tags: ["PDF Processing", "Data Extraction", "Document AI", "OCR"],
    categories: ["Data Processing"],
    github: "#",
    demo: "#",
    achievement: "Automated Processing",
    achievementType: "automation"
  },
  {
    id: 5,
    title: "Custom JPEG Compression Algorithm",
    description: "Engineered proprietary JPEG compression algorithms with advanced optimization techniques, achieving superior compression ratios while preserving image fidelity, resulting in significant storage efficiency improvements and enhanced performance metrics.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    tags: ["Image Processing", "Compression", "Algorithm", "Optimization"],
    categories: ["Machine Learning", "Data Processing"],
    github: "#",
    demo: "#",
    achievement: "Optimized Storage",
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
