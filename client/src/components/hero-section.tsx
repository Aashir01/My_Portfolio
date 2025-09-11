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
      {/* Enhanced gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900" />
      <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-radial from-accent/10 via-transparent to-transparent" />
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-300/10 rounded-full blur-2xl animate-pulse delay-500" />
      
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
              <div className="text-3xl sm:text-4xl lg:text-5xl mt-2">AI Engineer</div>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl" data-testid="text-hero-description">
              A seasoned AI Engineer with 3+ years of expertise in delivering cutting-edge artificial intelligence solutions, 
              machine learning implementations, and advanced data analytics. Recognized for exceptional client satisfaction and 
              consistently maintaining top-tier performance ratings across diverse industry projects.
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
                <div className="text-2xl font-bold text-primary">3+</div>
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
              {/* Glassmorphism container */}
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-2xl">
                <img 
                  src="/profile_pic.jpg" 
                  alt="Aashir Noman - Professional Data Scientist headshot" 
                  className="w-full h-full rounded-full object-cover"
                  data-testid="img-headshot"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 via-transparent to-purple-500/20" />
              </div>
              
              {/* Floating AI elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-bounce shadow-lg">
                <div className="flex items-center justify-center h-full text-white text-xl">🤖</div>
              </div>
              <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full animate-bounce delay-300 shadow-lg">
                <div className="flex items-center justify-center h-full text-white text-lg">⚡</div>
              </div>
              <div className="absolute top-1/2 -left-8 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse delay-700 shadow-lg">
                <div className="flex items-center justify-center h-full text-white text-sm">💡</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
