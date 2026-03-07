import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Code, Database, Brain, Zap, TrendingUp, Users } from "lucide-react";

const technicalMetrics = [
  {
    icon: Code,
    title: "Code Quality",
    value: "98%",
    description: "Clean, maintainable code with comprehensive documentation",
    color: "from-primary to-primary/50"
  },
  {
    icon: Database,
    title: "Data Processing",
    value: "10TB+",
    description: "Successfully processed massive datasets for enterprise clients",
    color: "from-accent to-accent/50"
  },
  {
    icon: Brain,
    title: "Model Accuracy",
    value: "94.7%",
    description: "Average accuracy across all deployed ML models",
    color: "from-primary to-accent"
  },
  {
    icon: Zap,
    title: "Performance",
    value: "99.9%",
    description: "Uptime and reliability across production systems",
    color: "from-accent to-primary"
  },
  {
    icon: TrendingUp,
    title: "Business Impact",
    value: "300%",
    description: "Average ROI improvement for client projects",
    color: "from-primary to-primary/50"
  },
  {
    icon: Users,
    title: "Client Satisfaction",
    value: "5.0★",
    description: "Perfect rating across all completed projects",
    color: "from-accent to-accent/50"
  }
];

const codeSnippets = [
  {
    language: "Python",
    title: "Deep Learning Model",
    code: `import torch
import torch.nn as nn

class AdvancedCNN(nn.Module):
    def __init__(self, num_classes=10):
        super(AdvancedCNN, self).__init__()
        self.features = nn.Sequential(
            nn.Conv2d(3, 64, 3, padding=1),
            nn.ReLU(inplace=True),
            nn.BatchNorm2d(64),
            nn.MaxPool2d(2, 2),
            nn.Conv2d(64, 128, 3, padding=1),
            nn.ReLU(inplace=True),
            nn.BatchNorm2d(128),
            nn.MaxPool2d(2, 2)
        )
        self.classifier = nn.Sequential(
            nn.Dropout(0.5),
            nn.Linear(128 * 8 * 8, 512),
            nn.ReLU(inplace=True),
            nn.Dropout(0.5),
            nn.Linear(512, num_classes)
        )`
  },
  {
    language: "Python",
    title: "AI Agent Implementation",
    code: `from crewai import Agent, Task, Crew
from langchain.llms import OpenAI

# Create AI Agent
data_scientist = Agent(
    role='Senior Data Scientist',
    goal='Analyze complex datasets and provide insights',
    backstory='Expert in ML with 3+ years experience',
    verbose=True,
    allow_delegation=False,
    llm=OpenAI(temperature=0.7)
)

# Define task
analysis_task = Task(
    description='Perform comprehensive data analysis',
    agent=data_scientist,
    expected_output='Detailed insights report'
)

# Execute crew
crew = Crew(
    agents=[data_scientist],
    tasks=[analysis_task],
    verbose=2
)
result = crew.kickoff()`
  }
];

export default function TechnicalShowcase() {
  const [activeSnippet, setActiveSnippet] = useState(0);

  return (
    <section className="py-20 bg-background relative overflow-hidden border-y border-white/5">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px] opacity-20" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-20 right-20 w-80 h-80 bg-primary/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-primary/10 text-primary border border-primary/30 font-mono text-xs font-bold uppercase tracking-widest mb-6 shadow-glow-cyan">
            <span className="w-2 h-2 bg-primary animate-pulse"></span>
            SYSTEM_METRICS
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground tracking-tight">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent text-glow">Showcase</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-mono text-sm tracking-wide">
            Demonstrating technical prowess through measurable achievements, clean code, and innovative solutions.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {technicalMetrics.map((metric, index) => (
            <Card key={index} className="group p-6 bg-black/60 backdrop-blur-md border border-primary/20 hover:border-primary/50 hover:shadow-glow-cyan transition-all duration-300 hover:-translate-y-1 rounded-sm flex flex-col justify-center">
              <div className="flex items-center mb-4 border-b border-white/5 pb-4">
                <div className={`w-12 h-12 rounded-sm bg-gradient-to-br ${metric.color} flex items-center justify-center mr-4 shadow-[0_0_15px_currentColor] opacity-90 group-hover:opacity-100`}>
                  <metric.icon className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-xs font-mono font-bold tracking-widest uppercase text-muted-foreground mt-1 group-hover:text-primary transition-colors">{metric.title}</h3>
                  <p className="text-3xl font-bold text-foreground tracking-tight group-hover:text-accent transition-colors" style={{ textShadow: "0 0 10px rgba(0,240,255,0.2)" }}>
                    {metric.value}
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-400 font-mono tracking-wide">{metric.description}</p>
            </Card>
          ))}
        </div>

        {/* Code Showcase & Achievements */}
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-foreground font-mono tracking-tight flex items-center mb-6">
              <span className="text-primary mr-3">{`{ }`}</span>Code Architecture
            </h3>
            <div className="flex gap-2 mb-4 font-mono">
              {codeSnippets.map((snippet, index) => (
                <Button
                  key={index}
                  variant={activeSnippet === index ? "default" : "outline"}
                  onClick={() => setActiveSnippet(index)}
                  className={`text-xs uppercase tracking-widest rounded-sm ${activeSnippet === index ? 'bg-primary text-black shadow-glow-cyan hover:bg-primary/90' : 'bg-transparent border-primary/30 text-primary hover:bg-primary/10'}`}
                >
                  <span className="opacity-50 mr-2">_</span>{snippet.title}
                </Button>
              ))}
            </div>
            {/* Terminal Window */}
            <Card className="rounded-sm border border-primary/30 bg-black/80 shadow-[0_0_20px_rgba(0,240,255,0.15)] overflow-hidden flex flex-col">
              <div className="h-8 bg-black border-b border-primary/20 flex items-center px-4 gap-2 opacity-90">
                <div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-400 transition-colors cursor-pointer"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-400 transition-colors cursor-pointer"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-400 transition-colors cursor-pointer"></div>
                <span className="ml-auto text-[10px] uppercase font-mono tracking-widest text-primary/70">{codeSnippets[activeSnippet].language} :: {codeSnippets[activeSnippet].title}</span>
              </div>
              <div className="p-6 overflow-x-auto">
                <pre className="font-mono text-xs sm:text-sm text-primary/90 leading-relaxed font-light">
                  <code style={{ textShadow: "0 0 5px rgba(0,240,255,0.3)" }}>{codeSnippets[activeSnippet].code}</code>
                </pre>
              </div>
            </Card>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground font-mono tracking-tight flex items-center mb-6">
              <span className="text-accent mr-3">/</span>Key Achievements
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-5 rounded-sm bg-black/40 backdrop-blur-md border border-accent/20 hover:border-accent hover:shadow-glow-purple transition-all duration-300 group">
                <div className="w-10 h-10 rounded-sm bg-accent/10 flex items-center justify-center flex-shrink-0 border border-accent/30 group-hover:scale-110 transition-transform">
                  <span className="text-accent text-lg">🏆</span>
                </div>
                <div>
                  <h4 className="font-mono font-bold tracking-tight text-gray-200 group-hover:text-accent transition-colors">Top-Rated Freelancer</h4>
                  <p className="text-sm font-mono tracking-wide text-muted-foreground mt-1">Consistently maintaining 5-star ratings across all platforms</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-sm bg-black/40 backdrop-blur-md border border-primary/20 hover:border-primary hover:shadow-glow-cyan transition-all duration-300 group">
                <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/30 group-hover:scale-110 transition-transform">
                  <span className="text-primary text-lg">🚀</span>
                </div>
                <div>
                  <h4 className="font-mono font-bold tracking-tight text-gray-200 group-hover:text-primary transition-colors">Enterprise Solutions</h4>
                  <p className="text-sm font-mono tracking-wide text-muted-foreground mt-1">Delivered scalable AI solutions for Fortune 500 companies</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-sm bg-black/40 backdrop-blur-md border border-accent/20 hover:border-accent hover:shadow-glow-purple transition-all duration-300 group">
                <div className="w-10 h-10 rounded-sm bg-accent/10 flex items-center justify-center flex-shrink-0 border border-accent/30 group-hover:scale-110 transition-transform">
                  <span className="text-accent text-lg">💡</span>
                </div>
                <div>
                  <h4 className="font-mono font-bold tracking-tight text-gray-200 group-hover:text-accent transition-colors">Innovation Leader</h4>
                  <p className="text-sm font-mono tracking-wide text-muted-foreground mt-1">Pioneered cutting-edge AI implementations using latest technologies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
