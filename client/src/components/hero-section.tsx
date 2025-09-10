import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Hero gradient background */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-radial from-accent/5 via-transparent to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`text-center lg:text-left transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="mb-6">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium">
                💻 Available for opportunities
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Hi, I'm <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Aashir Noman</span>
              <div className="text-3xl sm:text-4xl lg:text-5xl mt-2">Data Scientist</div>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl" data-testid="text-hero-description">
              With 2+ years of experience as a top-rated freelance Data Scientist, I deliver high-quality machine learning solutions, 
              AI/ML projects, and data aggregation, consistently earning 5-star ratings from clients.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button 
                onClick={() => scrollToSection('projects')}
                className="inline-flex items-center"
                data-testid="button-view-work"
              >
                View My Work <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline"
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center"
                data-testid="button-lets-connect"
              >
                Let's Connect <MessageCircle className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start space-x-6">
              <div className="text-center" data-testid="stat-experience">
                <div className="text-2xl font-bold text-primary">2+</div>
                <div className="text-sm text-muted-foreground">Years XP</div>
              </div>
              <div className="text-center" data-testid="stat-projects">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center" data-testid="stat-clients">
                <div className="text-2xl font-bold text-primary">5⭐</div>
                <div className="text-sm text-muted-foreground">Rating</div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative animate-float">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400" 
                alt="Professional AI Engineer headshot" 
                className="w-72 h-72 sm:w-80 sm:h-80 rounded-full object-cover shadow-2xl border-4 border-primary/20"
                data-testid="img-headshot"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent" />
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-pulse" />
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-accent rounded-full animate-pulse delay-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
