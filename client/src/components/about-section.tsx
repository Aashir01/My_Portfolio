export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My journey as a freelance Data Scientist spans across various AI/ML domains, consistently delivering high-quality solutions.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="space-y-4" data-testid="about-description">
              <p className="text-lg leading-relaxed">
                With 2+ years of experience as a top-rated freelance Data Scientist on Upwork, I design, develop, and deploy 
                cutting-edge AI/ML solutions. I've consistently earned 5-star ratings and commendations from clients across 
                various industries, specializing in chatbot development, AI agents, and data processing.
              </p>
              <p className="text-lg leading-relaxed">
                Skilled in Python, SQL, and modern deep learning frameworks like TensorFlow and PyTorch, I build 
                scalable AI solutions. My expertise spans machine learning, data science, web scraping, and AI agent 
                frameworks like CrewAI for business automation.
              </p>
              <p className="text-lg leading-relaxed">
                I'm passionate about leveraging AI to solve real-world problems, from speech recognition systems to 
                AI-driven PDF processing and custom algorithms for data optimization.
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
              src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600" 
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
