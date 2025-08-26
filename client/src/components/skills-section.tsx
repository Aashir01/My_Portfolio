import { useEffect, useRef, useState } from "react";

const skillsData = {
  "Data Science & AI": {
    icon: "🤖",
    skills: [
      { name: "Computer Vision", percentage: 95 },
      { name: "Natural Language Processing", percentage: 90 },
      { name: "Deep Learning", percentage: 92 },
      { name: "Signal Processing", percentage: 85 }
    ]
  },
  "Programming": {
    icon: "💻", 
    skills: [
      { name: "Python", percentage: 95 },
      { name: "C++/C", percentage: 88 },
      { name: "Java", percentage: 85 },
      { name: "JavaScript/TypeScript", percentage: 80 }
    ]
  },
  "Cloud & DevOps": {
    icon: "☁️",
    skills: [
      { name: "AWS", percentage: 85 },
      { name: "Google Cloud Platform", percentage: 82 },
      { name: "Docker & Kubernetes", percentage: 78 },
      { name: "MLOps & CI/CD", percentage: 80 }
    ]
  }
};

const frameworks = [
  "PyTorch", "TensorFlow", "HuggingFace", "OpenCV", 
  "Scikit-learn", "FastAPI", "React", "Node.js"
];

const databases = [
  "PostgreSQL", "MongoDB", "Redis", "Vector DBs"
];

const tools = [
  "Git & GitHub", "Jupyter & Colab", "VS Code", "Linux"
];

function SkillProgress({ skill, isVisible }: { skill: { name: string; percentage: number }, isVisible: boolean }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setWidth(skill.percentage);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isVisible, skill.percentage]);

  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium">{skill.name}</span>
        <span className="text-sm text-primary">{skill.percentage}%</span>
      </div>
      <div className="w-full bg-muted rounded-full h-2">
        <div 
          className="bg-primary h-2 rounded-full transition-all duration-2000 ease-in-out"
          style={{ width: `${width}%` }}
        />
      </div>
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
    <section id="skills" className="py-20" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My expertise spans across multiple domains of AI and software engineering.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skillsData).map(([category, data]) => (
            <div 
              key={category}
              className="p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow"
              data-testid={`skill-category-${category.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">{data.icon}</span>
                <h3 className="text-xl font-semibold">{category}</h3>
              </div>
              <div className="space-y-4">
                {data.skills.map((skill) => (
                  <SkillProgress 
                    key={skill.name} 
                    skill={skill} 
                    isVisible={isVisible}
                  />
                ))}
              </div>
            </div>
          ))}

          {/* Frameworks & Libraries */}
          <div className="p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow" data-testid="skill-category-frameworks">
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-3">📚</span>
              <h3 className="text-xl font-semibold">Frameworks</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {frameworks.map((framework) => (
                <span 
                  key={framework}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20"
                >
                  {framework}
                </span>
              ))}
            </div>
          </div>

          {/* Databases */}
          <div className="p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow" data-testid="skill-category-databases">
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-3">🗄️</span>
              <h3 className="text-xl font-semibold">Databases</h3>
            </div>
            <div className="space-y-3">
              {databases.map((db) => (
                <div key={db} className="flex items-center">
                  <span className="w-4 h-4 bg-primary rounded-full mr-3"></span>
                  <span>{db}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow" data-testid="skill-category-tools">
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-3">🛠️</span>
              <h3 className="text-xl font-semibold">Tools</h3>
            </div>
            <div className="space-y-3">
              {tools.map((tool) => (
                <div key={tool} className="flex items-center">
                  <span className="w-4 h-4 bg-primary rounded-full mr-3"></span>
                  <span>{tool}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
