export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A distinguished Data Scientist with extensive experience across multiple AI/ML domains, specializing in 
            innovative solutions that drive business value and operational excellence.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="space-y-4" data-testid="about-description">
              <p className="text-lg leading-relaxed">
                With 3+ years of distinguished experience as a top-rated freelance Data Scientist, I architect, develop, and deploy 
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
