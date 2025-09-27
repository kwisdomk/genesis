import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";

const Contact = () => {
  const contactMethods = [
    {
      icon: "📧",
      title: "Email",
      value: "yourname@domain.com",
      href: "mailto:yourname@domain.com",
      description: "Best for detailed discussions and collaboration opportunities"
    },
    {
      icon: "💻", 
      title: "GitHub",
      value: "github.com/yourhandle",
      href: "https://github.com/yourhandle",
      description: "Explore my code, projects, and contributions"
    },
    {
      icon: "🔗",
      title: "LinkedIn", 
      value: "linkedin.com/in/yourhandle",
      href: "https://linkedin.com/in/yourhandle",
      description: "Professional networking and career updates"
    }
  ];

  const collaborationAreas = [
    {
      title: "Cybersecurity Projects",
      description: "Hands-on labs, penetration testing, or security research initiatives"
    },
    {
      title: "Linux & System Administration",
      description: "Troubleshooting, optimization, or infrastructure projects"
    },
    {
      title: "Community Learning",
      description: "Mentorship, study groups, or knowledge sharing sessions"
    },
    {
      title: "Tech Philosophy Discussions",
      description: "Exploring the deeper implications of technology on society"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <section className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Let's Connect</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to build something meaningful together? Whether it's a cybersecurity project, 
              a philosophical discussion about technology, or just sharing knowledge—I'd love to hear from you.
            </p>
          </section>

          {/* Contact Methods */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
              {contactMethods.map((method, index) => (
                <Card key={index} className="card-gradient border-border/50 hover:border-primary/30 transition-smooth hover:glow-primary animate-fade-in group text-center" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader>
                    <div className="text-4xl mb-4 group-hover:animate-float">
                      {method.icon}
                    </div>
                    <CardTitle className="text-xl text-primary group-hover:text-gradient transition-smooth">
                      {method.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      {method.description}
                    </p>
                    <Button 
                      asChild
                      variant="outline" 
                      className="w-full border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
                    >
                      <a href={method.href} target="_blank" rel="noopener noreferrer">
                        {method.value}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Collaboration Areas */}
          <section className="mb-16 animate-fade-in">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">
                <span className="text-gradient">Areas of Collaboration</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {collaborationAreas.map((area, index) => (
                  <Card key={index} className="card-gradient border-border/50 hover:border-accent/30 transition-smooth" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-3 text-accent">{area.title}</h3>
                      <p className="text-muted-foreground">{area.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Personal Note */}
          <section className="animate-fade-in">
            <div className="max-w-2xl mx-auto">
              <Card className="card-gradient border-border/50 text-center">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-gradient">A Personal Note</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    I believe the best collaborations happen when we bring both technical expertise and human curiosity to the table. 
                    Whether you're a fellow learner, an experienced professional, or someone with a completely different perspective—
                    let's explore what we can build together.
                  </p>
                  <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                    <span>🤝</span>
                    <span>Open to opportunities</span>
                    <span>•</span>
                    <span>🌱</span>
                    <span>Always learning</span>
                    <span>•</span>
                    <span>🚀</span>
                    <span>Ready to build</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Contact;