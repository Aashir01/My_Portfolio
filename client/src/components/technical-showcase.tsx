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
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Database,
    title: "Data Processing",
    value: "10TB+",
    description: "Successfully processed massive datasets for enterprise clients",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Brain,
    title: "Model Accuracy",
    value: "94.7%",
    description: "Average accuracy across all deployed ML models",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Zap,
    title: "Performance",
    value: "99.9%",
    description: "Uptime and reliability across production systems",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: TrendingUp,
    title: "Business Impact",
    value: "300%",
    description: "Average ROI improvement for client projects",
    color: "from-indigo-500 to-purple-500"
  },
  {
    icon: Users,
    title: "Client Satisfaction",
    value: "5.0★",
    description: "Perfect rating across all completed projects",
    color: "from-pink-500 to-rose-500"
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
    <section className="py-20 bg-gradient-to-br from-gray-50 to-slate-50 dark:from-gray-900 dark:to-slate-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-gray-500/5 via-transparent to-slate-500/5" />
      <div className="absolute top-20 right-20 w-80 h-80 bg-gray-300/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-slate-300/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-gray-500 rounded-full animate-pulse"></span>
            Technical Excellence
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-slate-600 dark:from-white dark:to-slate-400 bg-clip-text text-transparent">
            Technical Showcase
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Demonstrating technical prowess through measurable achievements, clean code, and innovative solutions.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {technicalMetrics.map((metric, index) => (
            <Card key={index} className="group p-6 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md border border-white/20 dark:border-white/10 hover:shadow-2xl hover:shadow-gray-500/10 transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${metric.color} flex items-center justify-center mr-4 shadow-lg`}>
                  <metric.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{metric.title}</h3>
                  <p className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-slate-600 dark:from-white dark:to-slate-400 bg-clip-text text-transparent">
                    {metric.value}
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">{metric.description}</p>
            </Card>
          ))}
        </div>

        {/* Code Showcase */}
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">Code Excellence</h3>
            <div className="flex gap-2 mb-4">
              {codeSnippets.map((snippet, index) => (
                <Button
                  key={index}
                  variant={activeSnippet === index ? "default" : "outline"}
                  onClick={() => setActiveSnippet(index)}
                  className="text-sm"
                >
                  {snippet.title}
                </Button>
              ))}
            </div>
            <Card className="p-6 bg-gray-900 text-gray-100 font-mono text-sm overflow-x-auto">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="ml-4 text-gray-400">{codeSnippets[activeSnippet].language}</span>
              </div>
              <pre className="whitespace-pre-wrap">{codeSnippets[activeSnippet].code}</pre>
            </Card>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">Key Achievements</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-white/30 dark:border-white/10">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">🏆</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200">Top-Rated Freelancer</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Consistently maintaining 5-star ratings across all platforms</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-white/30 dark:border-white/10">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">🚀</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200">Enterprise Solutions</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Delivered scalable AI solutions for Fortune 500 companies</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-white/30 dark:border-white/10">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">💡</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200">Innovation Leader</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Pioneered cutting-edge AI implementations using latest technologies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
