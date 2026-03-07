import { useEffect, useRef, useState } from "react";

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
      case "Expert": return "text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30";
      case "Advanced": return "text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30";
      default: return "text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-900/30";
    }
  };

  return (
    <div className="group relative p-4 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-white/30 dark:border-white/10 hover:bg-white/70 dark:hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 hover:shadow-lg">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-lg">{skill.icon}</span>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
        </div>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(skill.level)}`}>
          {skill.level}
        </span>
      </div>
      <div className={`h-1 bg-gradient-to-r ${categoryColor} rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />
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
    <section id="skills" className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-purple-900 relative overflow-hidden" ref={sectionRef}>
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-indigo-500/5 via-transparent to-purple-500/5" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-indigo-300/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-300/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></span>
            Technical Skills
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-indigo-600 dark:from-white dark:to-indigo-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive expertise in artificial intelligence, machine learning, and data science, demonstrated through
            successful project delivery and exceptional client outcomes across diverse industry sectors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skillsData).map(([category, data]) => (
            <div
              key={category}
              className="group p-6 rounded-2xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-md border border-white/20 dark:border-white/10 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-2"
              data-testid={`skill-category-${category.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${data.color} flex items-center justify-center mr-4 shadow-lg`}>
                  <span className="text-2xl">{data.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{category}</h3>
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
          <div className="group p-6 rounded-2xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-md border border-white/20 dark:border-white/10 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 hover:-translate-y-2" data-testid="skill-category-frameworks">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mr-4 shadow-lg">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">AI Frameworks & Tools</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {frameworks.map((framework) => (
                <span
                  key={framework}
                  className="group/tag px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-700 dark:text-purple-300 rounded-xl text-sm font-medium border border-purple-200 dark:border-purple-700 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-default"
                >
                  {framework}
                </span>
              ))}
            </div>
          </div>

          {/* Data Engineering & Infrastructure */}
          <div className="group p-6 rounded-2xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-md border border-white/20 dark:border-white/10 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 hover:-translate-y-2" data-testid="skill-category-data-science">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mr-4 shadow-lg">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Data Engineering & DBs</h3>
            </div>
            <div className="space-y-3">
              {databases.map((skill, index) => (
                <div key={skill} className="flex items-center group/item">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-900/30 dark:to-blue-900/30 flex items-center justify-center mr-3 group-hover/item:scale-110 transition-transform duration-300">
                    <span className="text-cyan-600 dark:text-cyan-400 text-sm">📈</span>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cloud & DevOps */}
          <div className="group p-6 rounded-2xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-md border border-white/20 dark:border-white/10 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300 hover:-translate-y-2" data-testid="skill-category-specializations">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center mr-4 shadow-lg">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Cloud & DevOps</h3>
            </div>
            <div className="space-y-3">
              {tools.map((tool, index) => (
                <div key={tool} className="flex items-center group/item">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 flex items-center justify-center mr-3 group-hover/item:scale-110 transition-transform duration-300">
                    <span className="text-orange-600 dark:text-orange-400 text-sm">🔧</span>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{tool}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
