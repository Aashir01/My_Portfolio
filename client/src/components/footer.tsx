import { Github, Linkedin, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <div className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
              AI Engineer Portfolio
            </div>
            <p className="text-muted-foreground text-sm">© 2024 Aashir Noman. All rights reserved.</p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
              data-testid="link-privacy"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
              data-testid="link-terms"
            >
              Terms of Service
            </a>
            <div className="flex space-x-3">
              <a 
                href="https://github.com/Aashir01" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="footer-github"
              >
                <Github className="h-4 w-4" />
              </a>
              <a 
                href="https://linkedin.com/in/aashir-noman-138820152" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="footer-linkedin"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a 
                href="https://wa.me/923401807019" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="footer-whatsapp"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
