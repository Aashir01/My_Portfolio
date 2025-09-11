import { useEffect, useRef, useState } from "react";

const skillsData = {
  "Machine Learning": {
    icon: "🧠",
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "Deep Learning & Neural Networks", level: "Expert", icon: "🔬" },
      { name: "CNN & Computer Vision", level: "Expert", icon: "👁️" },
      { name: "RNN & LSTM", level: "Advanced", icon: "🔄" },
      { name: "Transformer Models", level: "Expert", icon: "⚡" },
      { name: "Supervised Learning", level: "Expert", icon: "🎯" },
      { name: "Unsupervised Learning", level: "Advanced", icon: "🔍" },
      { name: "Reinforcement Learning", level: "Advanced", icon: "🎮" },
      { name: "Ensemble Methods", level: "Expert", icon: "🎭" }
    ]
  },
  "AI Frameworks": {
    icon: "⚡", 
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "PyTorch", level: "Expert", icon: "🔥" },
      { name: "TensorFlow", level: "Expert", icon: "🧮" },
      { name: "Keras", level: "Advanced", icon: "🎨" },
      { name: "Scikit-learn", level: "Expert", icon: "🔧" },
      { name: "Hugging Face", level: "Expert", icon: "🤗" },
      { name: "OpenAI API", level: "Expert", icon: "🧠" },
      { name: "LangChain", level: "Advanced", icon: "⛓️" },
      { name: "CrewAI", level: "Advanced", icon: "👥" }
    ]
  },
  "Data Science": {
    icon: "📊",
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "Pandas & NumPy", level: "Expert", icon: "🐼" },
      { name: "Data Visualization", level: "Expert", icon: "📈" },
      { name: "Statistical Analysis", level: "Advanced", icon: "📉" },
      { name: "Feature Engineering", level: "Expert", icon: "⚙️" },
      { name: "Data Preprocessing", level: "Expert", icon: "🔄" },
      { name: "Time Series Analysis", level: "Advanced", icon: "⏰" },
      { name: "A/B Testing", level: "Advanced", icon: "🧪" },
      { name: "Data Pipeline Design", level: "Expert", icon: "🏗️" }
    ]
  },
  "AI Applications": {
    icon: "🚀",
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "Natural Language Processing", level: "Expert", icon: "💬" },
      { name: "Computer Vision", level: "Expert", icon: "👁️" },
      { name: "Speech Recognition", level: "Advanced", icon: "🎤" },
      { name: "Recommendation Systems", level: "Advanced", icon: "💡" },
      { name: "Chatbot Development", level: "Expert", icon: "🤖" },
      { name: "AI Agents", level: "Advanced", icon: "👤" },
      { name: "Model Deployment", level: "Expert", icon: "🚀" },
      { name: "MLOps & CI/CD", level: "Advanced", icon: "⚙️" }
    ]
  },
  "Cloud & Infrastructure": {
    icon: "☁️",
    color: "from-indigo-500 to-purple-500",
    skills: [
      { name: "AWS SageMaker", level: "Advanced", icon: "☁️" },
      { name: "Google Cloud AI", level: "Advanced", icon: "🌐" },
      { name: "Azure ML", level: "Advanced", icon: "🔵" },
      { name: "Docker & Kubernetes", level: "Advanced", icon: "🐳" },
      { name: "RESTful APIs", level: "Expert", icon: "🔌" },
      { name: "Microservices", level: "Advanced", icon: "🔧" },
      { name: "Database Design", level: "Expert", icon: "🗄️" },
      { name: "Cloud Architecture", level: "Advanced", icon: "🏗️" }
    ]
  },
  "Programming Languages": {
    icon: "💻",
    color: "from-cyan-500 to-blue-500",
    skills: [
      { name: "Python", level: "Expert", icon: "🐍" },
      { name: "R", level: "Advanced", icon: "📊" },
      { name: "SQL", level: "Expert", icon: "🗄️" },
      { name: "JavaScript", level: "Advanced", icon: "🟨" },
      { name: "TypeScript", level: "Advanced", icon: "🔷" },
      { name: "Bash/Shell", level: "Advanced", icon: "🐚" },
      { name: "Git Version Control", level: "Expert", icon: "📝" },
      { name: "Algorithm Design", level: "Expert", icon: "🧩" }
    ]
  }
};

const frameworks = [
  "PyTorch", "TensorFlow", "Keras", "Scikit-learn", "Hugging Face", 
  "OpenAI API", "LangChain", "CrewAI", "Pandas", "NumPy", 
  "Matplotlib", "Seaborn", "Plotly", "Streamlit", "FastAPI"
];

const databases = [
  "PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch", 
  "BigQuery", "Snowflake", "Apache Spark", "Apache Kafka", "Airflow"
];

const tools = [
  "Jupyter Notebooks", "Google Colab", "VS Code", "Docker", "Kubernetes",
  "Git", "GitHub Actions", "MLflow", "Weights & Biases", "TensorBoard",
  "AWS SageMaker", "Google Cloud AI", "Azure ML", "Heroku", "Vercel"
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
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Frameworks</h3>
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

          {/* Data Science */}
          <div className="group p-6 rounded-2xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-md border border-white/20 dark:border-white/10 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 hover:-translate-y-2" data-testid="skill-category-data-science">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mr-4 shadow-lg">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Data Science</h3>
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

          {/* Specializations */}
          <div className="group p-6 rounded-2xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-md border border-white/20 dark:border-white/10 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300 hover:-translate-y-2" data-testid="skill-category-specializations">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center mr-4 shadow-lg">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Specializations</h3>
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
