import { Mail, Github, Linkedin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      href: "mailto:wisdom@example.com",
      text: "wisdom@example.com"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/wisdom",
      text: "github.com/wisdom"
    },
    {
      icon: Linkedin,
      label: "LinkedIn", 
      href: "https://linkedin.com/in/wisdom",
      text: "linkedin.com/in/wisdom"
    }
  ];

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold text-gradient mb-4">Wisdom</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Securing systems. Learning endlessly. Reflecting deeply.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <a href="/projects" className="block text-muted-foreground hover:text-primary transition-smooth">
                Latest Projects
              </a>
              <a href="/blog" className="block text-muted-foreground hover:text-primary transition-smooth">
                Recent Posts
              </a>
              <a href="/now" className="block text-muted-foreground hover:text-primary transition-smooth">
                What I'm Doing Now
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="space-y-3">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex items-center space-x-3 text-sm text-muted-foreground hover:text-primary transition-smooth group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <link.icon className="w-4 h-4" />
                  <span>{link.text}</span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-smooth" />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-border/50 mt-8 pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            © 2024 Wisdom. Built with curiosity, secured with integrity.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;