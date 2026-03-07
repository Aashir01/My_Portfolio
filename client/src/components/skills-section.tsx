import { useEffect, useRef, useState } from "react";
import { Terminal, Lightbulb, Box, Code2, Database as DbIcon, Cloud as CloudIcon } from "lucide-react";

const skillsData = {
  "Artificial Intelligence": {
    icon: "🧠",
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "Generative AI Systems", level: "Expert", icon: "✨" },
      { name: "LLM Engineering", level: "Expert", icon: "🤖" },
      { name: "RAG Systems", level: "Expert", icon: "📚" },
      { name: "Autonomous AI Agents", level: "Expert", icon: "👤" },
      { name: "AI Automation Systems", level: "Expert", icon: "⚙️" },
      { name: "Natural Lang. Processing", level: "Expert", icon: "💬" },
      { name: "Deep Learning", level: "Expert", icon: "🔬" }
    ]
  },
  "Machine Learning": {
    icon: "📊",
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "Predictive Modeling", level: "Expert", icon: "📈" },
      { name: "Time Series Analysis", level: "Expert", icon: "⏰" },
      { name: "Anomaly Detection", level: "Expert", icon: "🔍" },
      { name: "Classification & Regression", level: "Expert", icon: "🎯" },
      { name: "Feature Engineering", level: "Expert", icon: "⚙️" }
    ]
  },
  "Programming Languages": {
    icon: "💻",
    color: "from-cyan-500 to-blue-500",
    skills: [
      { name: "Python", level: "Expert", icon: "🐍" },
      { name: "SQL", level: "Expert", icon: "🗄️" },
      { name: "JavaScript / TypeScript", level: "Advanced", icon: "🟨" },
      { name: "Node.js", level: "Advanced", icon: "🟢" },
      { name: "React", level: "Advanced", icon: "⚛️" },
      { name: "FastAPI", level: "Expert", icon: "⚡" }
    ]
  }
};

const frameworks = [
  "LangChain", "LangGraph", "CrewAI", "LlamaIndex",
  "OpenAI APIs", "HuggingFace Transformers"
];

const databases = [
  "Apache Spark", "Airflow / Prefect", "Supabase", "PostgreSQL",
  "Pinecone", "Weaviate", "Chroma"
];

const tools = [
  "Docker", "AWS", "Google Cloud", "Azure", "Vercel"
];

function SkillCard({ skill, categoryColor }: { skill: { name: string; level: string; icon: string }, categoryColor: string }) {
  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert": return "text-primary bg-primary/10 border border-primary/30 shadow-glow-cyan";
      case "Advanced": return "text-accent bg-accent/10 border border-accent/30 shadow-glow-purple";
      default: return "text-muted-foreground bg-white/5 border border-white/10";
    }
  };

  return (
    <div className="group relative p-3 rounded-sm bg-black/40 backdrop-blur-sm border border-primary/10 hover:border-primary/50 transition-all duration-300 hover:shadow-glow-cyan hover:-translate-y-1">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <span className="text-xl opacity-80 group-hover:opacity-100 transition-opacity">{skill.icon}</span>
          <span className="text-sm font-mono text-gray-300 group-hover:text-white transition-colors tracking-wide">{skill.name}</span>
        </div>
        <span className={`px-2 py-0.5 rounded-sm text-[10px] font-mono uppercase tracking-widest ${getLevelColor(skill.level)}`}>
          {skill.level}
        </span>
      </div>
      <div className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-primary to-transparent w-0 group-hover:w-full transition-all duration-500" />
    </div>
  );
}

export default function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 bg-background relative overflow-hidden border-y border-white/5" ref={sectionRef}>
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-white [mask-image:linear-gradient(to_bottom,transparent,black)] opacity-10" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-primary/10 text-primary border border-primary/30 font-mono text-xs font-bold uppercase tracking-widest mb-6 shadow-glow-cyan">
            <span className="w-2 h-2 bg-primary animate-pulse"></span>
            CAPABILITY_MATRIX
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground tracking-tight">
            Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent text-glow">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-mono text-sm tracking-wide">
            Comprehensive mapping of artificial intelligence, machine learning, and data science capabilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skillsData).map(([category, data]) => (
            <div
              key={category}
              className="group p-6 rounded-sm bg-black/40 backdrop-blur-md border border-primary/20 hover:border-primary/50 transition-all duration-500"
              data-testid={`skill-category-${category.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="flex items-center mb-6 pb-4 border-b border-white/5">
                <div className={`w-10 h-10 rounded-sm bg-primary/10 border border-primary/30 flex items-center justify-center mr-4 shadow-glow-cyan`}>
                  <Lightbulb className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-gray-200 font-mono tracking-tight uppercase">{category}</h3>
              </div>
              <div className="space-y-3">
                {data.skills.map((skill) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                    categoryColor={data.color}
                  />
                ))}
              </div>
            </div>
          ))}

          {/* Frameworks & Libraries */}
          <div className="group p-6 rounded-sm bg-black/40 backdrop-blur-md border border-accent/20 hover:border-accent/50 transition-all duration-500" data-testid="skill-category-frameworks">
            <div className="flex items-center mb-6 pb-4 border-b border-white/5">
              <div className="w-10 h-10 rounded-sm bg-accent/10 border border-accent/30 flex items-center justify-center mr-4 shadow-glow-purple">
                <Box className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-gray-200 font-mono tracking-tight uppercase">AI Frameworks</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {frameworks.map((framework) => (
                <span
                  key={framework}
                  className="px-3 py-1.5 bg-black/60 text-accent font-mono text-xs rounded-sm border border-accent/30 hover:border-accent hover:shadow-glow-purple cursor-default transition-all"
                >
                  {framework}
                </span>
              ))}
            </div>
          </div>

          {/* Data Engineering & Infrastructure */}
          <div className="group p-6 rounded-sm bg-black/40 backdrop-blur-md border border-primary/20 hover:border-primary/50 transition-all duration-500" data-testid="skill-category-data-science">
            <div className="flex items-center mb-6 pb-4 border-b border-white/5">
              <div className="w-10 h-10 rounded-sm bg-primary/10 border border-primary/30 flex items-center justify-center mr-4 shadow-glow-cyan">
                <DbIcon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-gray-200 font-mono tracking-tight uppercase">Data Engineering</h3>
            </div>
            <div className="space-y-2">
              {databases.map((skill, index) => (
                <div key={skill} className="flex items-center group/item p-2 rounded-sm hover:bg-white/5 transition-colors">
                  <Terminal className="w-4 h-4 text-primary mr-3 opacity-70 group-hover/item:opacity-100" />
                  <span className="text-gray-300 font-mono text-sm tracking-wide">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cloud & DevOps */}
          <div className="group p-6 rounded-sm bg-black/40 backdrop-blur-md border border-accent/20 hover:border-accent/50 transition-all duration-500" data-testid="skill-category-specializations">
            <div className="flex items-center mb-6 pb-4 border-b border-white/5">
              <div className="w-10 h-10 rounded-sm bg-accent/10 border border-accent/30 flex items-center justify-center mr-4 shadow-glow-purple">
                <CloudIcon className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-gray-200 font-mono tracking-tight uppercase">Cloud & DevOps</h3>
            </div>
            <div className="space-y-2">
              {tools.map((tool, index) => (
                <div key={tool} className="flex items-center group/item p-2 rounded-sm hover:bg-white/5 transition-colors">
                  <Terminal className="w-4 h-4 text-accent mr-3 opacity-70 group-hover/item:opacity-100" />
                  <span className="text-gray-300 font-mono text-sm tracking-wide">{tool}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
