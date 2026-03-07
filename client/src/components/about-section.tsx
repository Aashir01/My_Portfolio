export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-blue-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5" />
      <div className="absolute top-20 right-20 w-64 h-64 bg-blue-300/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-300/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            About Me
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-600 dark:from-white dark:to-blue-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            An Applied AI Engineer specializing in building production-grade AI systems powered by Large Language Models (LLMs), autonomous agents, and machine learning.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="space-y-4" data-testid="about-description">
              <p className="text-lg leading-relaxed">
                With over 3 years of experience as a top-rated Applied AI Engineer, I design and deploy
                intelligent applications including enterprise knowledge assistants, AI automation agents,
                and real-time analytics platforms. My work focuses on transforming complex data into
                scalable AI solutions that support business decision-making and automation.
              </p>
              <p className="text-lg leading-relaxed">
                I have successfully delivered 27+ projects for international clients and maintain a
                consistent 5-star rating on Upwork for delivering reliable, high-impact AI solutions.
                My core expertise spans Generative AI Systems, RAG pipelines, and building autonomous
                AI agents utilizing frameworks like LangChain, LangGraph, and CrewAI.
              </p>
              <p className="text-lg leading-relaxed">
                Proficient in Python, SQL, and robust web technologies (Node.js, React), I build
                end-to-end applications seamlessly integrating with vector databases, cloud infrastructure,
                and powerful LLM APIs to drive operational efficiency and business growth.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center p-4 rounded-lg bg-card border border-border" data-testid="stat-machine-learning">
                <div className="text-2xl font-bold text-primary mb-1">98%</div>
                <div className="text-sm text-muted-foreground">GenAI & LLMs</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-card border border-border" data-testid="stat-data-science">
                <div className="text-2xl font-bold text-primary mb-1">95%</div>
                <div className="text-sm text-muted-foreground">AI Agents</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-card border border-border" data-testid="stat-chatbots">
                <div className="text-2xl font-bold text-primary mb-1">92%</div>
                <div className="text-sm text-muted-foreground">Machine Learning</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-card border border-border" data-testid="stat-python">
                <div className="text-2xl font-bold text-primary mb-1">95%</div>
                <div className="text-sm text-muted-foreground">Python & Cloud</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <img
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Modern AI development workspace with multiple monitors showing code and data visualizations"
              className="rounded-xl shadow-2xl w-full object-cover"
              data-testid="img-workspace"
            />
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="text-center p-4 rounded-lg bg-primary/10 border border-primary/20">
                <i className="fas fa-robot text-2xl text-primary mb-2"></i>
                <div className="text-sm font-medium">AI Agents</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-primary/10 border border-primary/20">
                <i className="fas fa-comments text-2xl text-primary mb-2"></i>
                <div className="text-sm font-medium">Chatbots</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-primary/10 border border-primary/20">
                <i className="fas fa-chart-bar text-2xl text-primary mb-2"></i>
                <div className="text-sm font-medium">Data Analytics</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
