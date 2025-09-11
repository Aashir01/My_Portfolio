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
            A distinguished AI Engineer with extensive experience across multiple AI/ML domains, specializing in 
            innovative solutions that drive business value and operational excellence.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="space-y-4" data-testid="about-description">
              <p className="text-lg leading-relaxed">
                With 3+ years of distinguished experience as a top-rated freelance AI Engineer, I architect, develop, and deploy 
                enterprise-grade AI/ML solutions that deliver measurable business impact. Recognized for exceptional client satisfaction 
                and consistently maintaining 5-star ratings across diverse industry verticals, specializing in intelligent automation, 
                conversational AI, and advanced data processing systems.
              </p>
              <p className="text-lg leading-relaxed">
                Proficient in Python, SQL, and cutting-edge deep learning frameworks including TensorFlow and PyTorch, I engineer 
                scalable, production-ready AI solutions. My comprehensive expertise encompasses machine learning, data science, 
                intelligent web scraping, and sophisticated AI agent frameworks such as CrewAI for enterprise automation workflows.
              </p>
              <p className="text-lg leading-relaxed">
                Passionate about transforming complex data challenges into innovative solutions, I specialize in developing 
                advanced speech recognition systems, AI-powered document processing pipelines, and custom optimization algorithms 
                that drive operational efficiency and business growth.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center p-4 rounded-lg bg-card border border-border" data-testid="stat-machine-learning">
                <div className="text-2xl font-bold text-primary mb-1">95%</div>
                <div className="text-sm text-muted-foreground">Machine Learning</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-card border border-border" data-testid="stat-data-science">
                <div className="text-2xl font-bold text-primary mb-1">92%</div>
                <div className="text-sm text-muted-foreground">Data Science</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-card border border-border" data-testid="stat-chatbots">
                <div className="text-2xl font-bold text-primary mb-1">90%</div>
                <div className="text-sm text-muted-foreground">AI Chatbots</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-card border border-border" data-testid="stat-python">
                <div className="text-2xl font-bold text-primary mb-1">95%</div>
                <div className="text-sm text-muted-foreground">Python</div>
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
