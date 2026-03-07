import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [typedRole, setTypedRole] = useState("");
  const fullRole = "> SYSTEM.INIT: Applied AI Engineer | LLM & Agentic Systems Engineer_";

  useEffect(() => {
    setIsVisible(true);
    let index = 0;
    const timer = setInterval(() => {
      setTypedRole(fullRole.substring(0, index));
      index++;
      if (index > fullRole.length) clearInterval(timer);
    }, 40);
    return () => clearInterval(timer);
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
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background"
    >
      {/* Neo-Cyberpunk background elements */}
      <div className="absolute inset-0 bg-grid-white [mask-image:linear-gradient(to_bottom,transparent,black)] opacity-20" />
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent" />

      {/* Animated glowing orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`text-center lg:text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-primary/10 text-primary border border-primary/30 font-mono text-xs font-bold uppercase tracking-widest shadow-glow-cyan">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                SYSTEM STATUS: ACTIVE_
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-foreground">
              Aashir <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent text-glow">Noman</span>
              <div className="text-xl sm:text-2xl lg:text-3xl mt-4 font-mono text-accent min-h-[4rem]">
                {typedRole}
              </div>
            </h1>

            <div className="p-4 border-l-2 border-primary bg-primary/5 mb-8 max-w-2xl text-left" data-testid="text-hero-description">
              <p className="font-mono text-sm leading-relaxed text-muted-foreground">
                <span className="text-primary">{`{ `}</span>
                "role": "Applied AI Engineer",
                <br />
                "specialization": ["LLMs", "Autonomous Agents", "RAG Systems"],
                <br />
                "mission": "Deliver scalable AI solutions for automated decision-making."
                <span className="text-primary">{` }`}</span>
              </p>
            </div>

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
                <div className="text-2xl font-bold text-primary">27+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center" data-testid="stat-clients">
                <div className="text-2xl font-bold text-primary">5⭐</div>
                <div className="text-sm text-muted-foreground">Rating</div>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end relative">
            <div className="relative animate-float z-20">
              {/* Neo-Cyberpunk hexagon/tech container */}
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-card/80 backdrop-blur-md border-2 border-primary shadow-glow-cyan overflow-hidden group">
                <img
                  src="/profile_pic.jpeg"
                  alt="Aashir Noman - Applied AI Engineer headshot"
                  className="w-full h-full rounded-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                  data-testid="img-headshot"
                />
                {/* Tech overlay grid line */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.1)_1px,transparent_1px)] bg-[size:100%_4px] mix-blend-overlay pointer-events-none" />
                <div className="absolute inset-0 rounded-full border-4 border-accent/20 scale-[1.05] group-hover:scale-100 transition-transform duration-500" />
              </div>

              {/* Floating tech nodes */}
              <div className="absolute -top-4 -right-4 px-3 py-1 bg-black/80 border border-primary text-primary font-mono text-xs rounded-sm shadow-glow-cyan animate-bounce backdrop-blur-sm">
                [AGENT_01_READY]
              </div>
              <div className="absolute -bottom-2 -left-6 px-3 py-1 bg-black/80 border border-accent text-accent font-mono text-xs rounded-sm shadow-glow-purple animate-bounce delay-300 backdrop-blur-sm">
                LLM_CORE_ONLINE
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
