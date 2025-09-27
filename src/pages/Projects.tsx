import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";

const Projects = () => {
  const projects = [
    {
      title: "Fixing Lubuntu GRUB",
      description: "Learned how low-level system boot works and how persistence in troubleshooting builds real sysadmin skills.",
      tags: ["Linux", "System Administration", "Troubleshooting"],
      impact: "Deep understanding of boot processes and system recovery"
    },
    {
      title: "Customizing Linux for Performance", 
      description: "Explored package conflicts, GUI trimming, and usability tweaks—bridging IT with user experience.",
      tags: ["Linux", "Performance", "UX Design"],
      impact: "Balanced technical optimization with user experience"
    },
    {
      title: "TryHackMe Labs",
      description: "Hands-on penetration testing and ethical hacking practice; documenting vulnerabilities and mitigation steps.",
      tags: ["Cybersecurity", "Penetration Testing", "Documentation"],
      impact: "Practical ethical hacking skills and security mindset"
    },
    {
      title: "University Club Attendance System",
      description: "A project blending IT systems, usability, and recognition of community efforts.",
      tags: ["Full Stack", "Community", "Systems Design"],
      impact: "Bridged technology with community engagement"
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
              <span className="text-gradient">Projects & Portfolio</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Each project represents a lesson learned, a skill developed, and a step forward in my cybersecurity journey.
            </p>
          </section>

          {/* Projects Grid */}
          <section className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="card-gradient border-border/50 hover:border-primary/30 transition-smooth hover:glow-primary animate-fade-in group" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary group-hover:text-gradient transition-smooth">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="pt-4 border-t border-border/50">
                      <h4 className="font-semibold text-accent mb-2">Key Learning:</h4>
                      <p className="text-sm text-muted-foreground italic">
                        {project.impact}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center mt-16 animate-fade-in">
            <Card className="max-w-2xl mx-auto card-gradient border-border/50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-gradient">More Projects Coming</h3>
                <p className="text-muted-foreground mb-6">
                  I'm constantly working on new challenges and documenting my learning journey. 
                  Stay tuned for more cybersecurity labs, system administration projects, and philosophical explorations.
                </p>
                <p className="text-sm text-muted-foreground italic">
                  "Every project is a step toward mastery, but curiosity is the compass that guides the journey."
                </p>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Projects;