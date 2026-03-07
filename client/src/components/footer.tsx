import { Github, Linkedin, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 bg-black border-t border-white/5 relative z-10 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <div className="text-lg font-mono font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-1 flex items-center justify-center md:justify-start">
              <span className="text-primary mr-2 opacity-50">{`/>`}</span> Aashir Noman
            </div>
            <p className="text-muted-foreground font-mono text-xs tracking-widest uppercase">System Control Unit // 2024</p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex items-center space-x-6">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary font-mono text-xs tracking-widest uppercase transition-colors"
                data-testid="link-privacy"
              >
                [ Privacy ]
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary font-mono text-xs tracking-widest uppercase transition-colors"
                data-testid="link-terms"
              >
                [ TOS ]
              </a>
            </div>

            <div className="flex space-x-4">
              <a
                href="https://github.com/Aashir01"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.8)] transition-all"
                data-testid="footer-github"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/aashir-noman-138820152"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent hover:drop-shadow-[0_0_8px_rgba(138,43,226,0.8)] transition-all"
                data-testid="footer-linkedin"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/923401807019"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.8)] transition-all"
                data-testid="footer-whatsapp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
