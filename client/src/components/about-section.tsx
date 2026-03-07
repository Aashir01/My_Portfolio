import { Bot, Cpu, Database } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden border-y border-white/5">
      {/* Neo-Cyberpunk Background elements */}
      <div className="absolute inset-0 bg-grid-white [mask-image:linear-gradient(to_bottom,transparent,black)] opacity-10" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent/10 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 p-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-primary/10 text-primary border border-primary/30 font-mono text-xs font-bold uppercase tracking-widest mb-6 shadow-glow-cyan">
            <span className="w-2 h-2 bg-primary animate-pulse"></span>
            WHOAMI_
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground tracking-tight">
            System <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent text-glow">Architecture</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-mono text-sm">
            An Applied AI Engineer specializing in building production-grade AI systems powered by Large Language Models (LLMs), autonomous agents, and machine learning.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="space-y-4 text-muted-foreground" data-testid="about-description">
              <p className="text-lg leading-relaxed">
                <span className="text-primary font-mono">{`> `}</span>
                With over 3 years of experience as a top-rated Applied AI Engineer, I design and deploy
                intelligent applications including enterprise knowledge assistants, AI automation agents,
                and real-time analytics platforms. My work focuses on transforming complex data into
                scalable AI solutions that support business decision-making and automation.
              </p>
              <p className="text-lg leading-relaxed">
                <span className="text-accent font-mono">{`> `}</span>
                I have successfully delivered <span className="text-primary font-bold">27+ projects</span> for international clients and maintain a
                consistent <span className="text-primary font-bold">5-star rating</span> on Upwork for delivering reliable, high-impact AI solutions.
                My core expertise spans Generative AI Systems, RAG pipelines, and building autonomous
                AI agents utilizing frameworks like <span className="font-mono text-xs bg-card px-1 rounded">LangChain</span>, <span className="font-mono text-xs bg-card px-1 rounded">LangGraph</span>, and <span className="font-mono text-xs bg-card px-1 rounded">CrewAI</span>.
              </p>
              <p className="text-lg leading-relaxed">
                <span className="text-primary font-mono">{`> `}</span>
                Proficient in Python, SQL, and robust web technologies (Node.js, React), I build
                end-to-end applications seamlessly integrating with vector databases, cloud infrastructure,
                and powerful LLM APIs to drive operational efficiency and business growth.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 auto-rows-fr pt-6 font-mono">
              <div className="flex flex-col justify-center text-center p-4 rounded-sm bg-black/40 border border-primary/30 shadow-[inset_0_0_15px_rgba(0,240,255,0.05)] group hover:border-primary transition-colors cursor-default" data-testid="stat-machine-learning">
                <div className="text-2xl font-bold text-primary mb-1 text-glow group-hover:scale-105 transition-transform">98%</div>
                <div className="text-xs text-muted-foreground tracking-widest uppercase">GenAI & LLMs</div>
              </div>
              <div className="flex flex-col justify-center text-center p-4 rounded-sm bg-black/40 border border-accent/30 shadow-[inset_0_0_15px_rgba(138,43,226,0.05)] group hover:border-accent transition-colors cursor-default" data-testid="stat-data-science">
                <div className="text-2xl font-bold text-accent mb-1 group-hover:scale-105 transition-transform" style={{ textShadow: "0 0 10px rgba(138, 43, 226, 0.5)" }}>95%</div>
                <div className="text-xs text-muted-foreground tracking-widest uppercase">AI Agents</div>
              </div>
              <div className="flex flex-col justify-center text-center p-4 rounded-sm bg-black/40 border border-primary/30 shadow-[inset_0_0_15px_rgba(0,240,255,0.05)] group hover:border-primary transition-colors cursor-default" data-testid="stat-chatbots">
                <div className="text-2xl font-bold text-primary mb-1 text-glow group-hover:scale-105 transition-transform">92%</div>
                <div className="text-xs text-muted-foreground tracking-widest uppercase">Machine Learning</div>
              </div>
              <div className="flex flex-col justify-center text-center p-4 rounded-sm bg-black/40 border border-accent/30 shadow-[inset_0_0_15px_rgba(138,43,226,0.05)] group hover:border-accent transition-colors cursor-default" data-testid="stat-python">
                <div className="text-2xl font-bold text-accent mb-1 group-hover:scale-105 transition-transform" style={{ textShadow: "0 0 10px rgba(138, 43, 226, 0.5)" }}>95%</div>
                <div className="text-xs text-muted-foreground tracking-widest uppercase">Python & Cloud</div>
              </div>
            </div>
          </div>

          <div className="space-y-6 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-black rounded-xl border border-primary/20 overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Cyberpunk high-tech AI development workspace showing code and glowing nodes"
                className="w-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                data-testid="img-workspace"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay pointer-events-none"></div>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="flex flex-col items-center justify-center text-center p-4 rounded-sm bg-black/40 border border-primary/30 shadow-glow-cyan hover:-translate-y-1 transition-transform">
                <Bot className="h-8 w-8 text-primary mb-3 text-glow" />
                <div className="text-xs font-mono font-medium tracking-wider text-primary">AGENTS</div>
              </div>
              <div className="flex flex-col items-center justify-center text-center p-4 rounded-sm bg-black/40 border border-accent/30 shadow-glow-purple hover:-translate-y-1 transition-transform">
                <Cpu className="h-8 w-8 text-accent mb-3" style={{ filter: "drop-shadow(0 0 5px rgba(138,43,226,0.8))" }} />
                <div className="text-xs font-mono font-medium tracking-wider text-accent">COMPUTE</div>
              </div>
              <div className="flex flex-col items-center justify-center text-center p-4 rounded-sm bg-black/40 border border-primary/30 shadow-glow-cyan hover:-translate-y-1 transition-transform">
                <Database className="h-8 w-8 text-primary mb-3 text-glow" />
                <div className="text-xs font-mono font-medium tracking-wider text-primary">VECTOR.DB</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
