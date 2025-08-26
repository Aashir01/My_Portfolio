export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My journey in AI and machine learning spans across various domains, from medical technology to autonomous systems.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="space-y-4" data-testid="about-description">
              <p className="text-lg leading-relaxed">
                With 4+ years of experience in AI, I design, develop, and deploy cutting-edge software and AI solutions, 
                specializing in MedTech and beyond. I've led cross-functional teams, translating business goals into 
                actionable Data & AI strategies that deliver results.
              </p>
              <p className="text-lg leading-relaxed">
                Skilled in Python, C++, Java, and deep learning frameworks, I build scalable, high-performance systems. 
                My expertise spans computer vision, natural language processing, and signal processing applications.
              </p>
              <p className="text-lg leading-relaxed">
                I'm passionate about leveraging AI to solve real-world problems, with published research in medical imaging 
                and contributions to open-source AI frameworks.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center p-4 rounded-lg bg-card border border-border" data-testid="stat-computer-vision">
                <div className="text-2xl font-bold text-primary mb-1">95%</div>
                <div className="text-sm text-muted-foreground">Computer Vision</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-card border border-border" data-testid="stat-deep-learning">
                <div className="text-2xl font-bold text-primary mb-1">90%</div>
                <div className="text-sm text-muted-foreground">Deep Learning</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-card border border-border" data-testid="stat-nlp">
                <div className="text-2xl font-bold text-primary mb-1">85%</div>
                <div className="text-sm text-muted-foreground">NLP</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-card border border-border" data-testid="stat-python">
                <div className="text-2xl font-bold text-primary mb-1">92%</div>
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
                <i className="fas fa-brain text-2xl text-primary mb-2"></i>
                <div className="text-sm font-medium">AI Research</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-primary/10 border border-primary/20">
                <i className="fas fa-code text-2xl text-primary mb-2"></i>
                <div className="text-sm font-medium">Full Stack</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-primary/10 border border-primary/20">
                <i className="fas fa-cloud text-2xl text-primary mb-2"></i>
                <div className="text-sm font-medium">Cloud MLOps</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
