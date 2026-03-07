import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Coffee, Github, Linkedin, Download, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual form submission to backend
    toast({
      title: "Message Sent!",
      description: "Thank you for your message! I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden border-y border-white/5">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px] opacity-20" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-primary/10 text-primary border border-primary/30 font-mono text-xs font-bold uppercase tracking-widest mb-6 shadow-glow-cyan">
            <span className="w-2 h-2 bg-primary animate-pulse"></span>
            INITIATE_CONNECTION
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground tracking-tight">
            Secure <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent text-glow">Channel</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-mono text-sm tracking-wide">
            I welcome opportunities to collaborate on innovative projects and strategic initiatives.
            Let's explore how we can work together to achieve your business objectives.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-6 flex flex-col justify-center">
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-black/40 backdrop-blur-md rounded-sm border border-primary/20 hover:border-primary hover:shadow-glow-cyan transition-all duration-300 group" data-testid="contact-email">
                <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center border border-primary/30 group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-6 w-6 text-primary group-hover:text-glow" />
                </div>
                <div>
                  <h3 className="font-mono text-xs text-muted-foreground tracking-widest uppercase">Email Protocol</h3>
                  <p className="text-foreground font-mono mt-1 group-hover:text-primary transition-colors">azac965@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-black/40 backdrop-blur-md rounded-sm border border-accent/20 hover:border-accent hover:shadow-glow-purple transition-all duration-300 group" data-testid="contact-location">
                <div className="w-12 h-12 bg-accent/10 rounded-sm flex items-center justify-center border border-accent/30 group-hover:bg-accent/20 transition-colors">
                  <MapPin className="h-6 w-6 text-accent group-hover:drop-shadow-[0_0_8px_rgba(138,43,226,0.8)]" />
                </div>
                <div>
                  <h3 className="font-mono text-xs text-muted-foreground tracking-widest uppercase">Node Location</h3>
                  <p className="text-foreground font-mono mt-1 group-hover:text-accent transition-colors">Karachi, Pakistan | Global Remote</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-black/40 backdrop-blur-md rounded-sm border border-primary/20 hover:border-primary hover:shadow-glow-cyan transition-all duration-300 group" data-testid="contact-coffee">
                <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center border border-primary/30 group-hover:bg-primary/20 transition-colors">
                  <Coffee className="h-6 w-6 text-primary group-hover:text-glow" />
                </div>
                <div>
                  <h3 className="font-mono text-xs text-muted-foreground tracking-widest uppercase">Direct Comms</h3>
                  <p className="text-foreground font-mono mt-1 group-hover:text-primary transition-colors text-sm">WhatsApp: +923401807019</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-black/40 backdrop-blur-md rounded-sm border border-accent/20 hover:border-accent hover:shadow-glow-purple transition-all duration-300 group" data-testid="contact-cv">
                <div className="w-12 h-12 bg-accent/10 rounded-sm flex items-center justify-center border border-accent/30 group-hover:bg-accent/20 transition-colors">
                  <Download className="h-6 w-6 text-accent group-hover:drop-shadow-[0_0_8px_rgba(138,43,226,0.8)]" />
                </div>
                <div>
                  <h3 className="font-mono text-xs text-muted-foreground tracking-widest uppercase">System Specs</h3>
                  <a
                    href="/Aashir_Noman_Resume.pdf"
                    download="Aashir_Noman_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground font-mono mt-1 hover:text-accent transition-colors inline-flex items-center"
                  >
                    Download_CV.pdf
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-white/5">
              <h3 className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-4">External Connections</h3>
              <div className="flex space-x-4">
                <a
                  href="https://upwork.com/freelancers/aashir1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-black/60 border border-primary/30 rounded-sm flex items-center justify-center text-primary hover:bg-primary hover:text-black hover:shadow-glow-cyan transition-all duration-300 group"
                  data-testid="social-upwork"
                >
                  <span className="text-lg font-mono font-bold">U</span>
                </a>
                <a
                  href="https://linkedin.com/in/aashir-noman-138820152"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-black/60 border border-accent/30 rounded-sm flex items-center justify-center text-accent hover:bg-accent hover:text-black hover:shadow-glow-purple transition-all duration-300 group"
                  data-testid="social-linkedin"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://github.com/Aashir01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-black/60 border border-primary/30 rounded-sm flex items-center justify-center text-primary hover:bg-primary hover:text-black hover:shadow-glow-cyan transition-all duration-300 group"
                  data-testid="social-github"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://wa.me/923401807019"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-black/60 border border-accent/30 rounded-sm flex items-center justify-center text-accent hover:bg-accent hover:text-black hover:shadow-glow-purple transition-all duration-300 group"
                  data-testid="social-whatsapp"
                >
                  <MessageCircle className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border border-border rounded-xl p-8">
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
            <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="block text-sm font-medium mb-2">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    data-testid="input-name"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="block text-sm font-medium mb-2">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    data-testid="input-email"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  data-testid="input-subject"
                />
              </div>

              <div>
                <Label htmlFor="message" className="block text-sm font-medium mb-2">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Describe your project requirements or business objectives..."
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="resize-none"
                  data-testid="textarea-message"
                />
              </div>

              <Button type="submit" className="w-full" data-testid="button-send-message">
                Send Message <Mail className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
