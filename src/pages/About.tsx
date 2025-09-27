import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const skills = [
    { category: "Security", items: ["Penetration Testing", "Network Security", "Vulnerability Assessment", "Incident Response"] },
    { category: "Systems", items: ["Linux Administration", "System Hardening", "Cloud Security", "Monitoring"] },
    { category: "Development", items: ["Python", "JavaScript", "Database Design", "API Security"] },
    { category: "Soft Skills", items: ["Technical Writing", "Problem Solving", "Continuous Learning", "Collaboration"] }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <section className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">About Me</span>
            </h1>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Hello, I'm <span className="text-primary font-semibold">Wisdom</span> 👋. I'm a cybersecurity enthusiast and systems thinker passionate about the intersection of technology, security, and human behavior.
              </p>
            </div>
          </section>

          {/* Bio Section */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <Card className="card-gradient">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6 text-center text-gradient">Mission & Approach</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      My journey into cybersecurity began with a simple question: "How do we build systems that people can trust?" 
                      This led me from computer science fundamentals through hands-on security labs, bootcamps, and countless hours 
                      of self-directed learning.
                    </p>
                    <p>
                      I believe cybersecurity is fundamentally about understanding human nature, not just technology. Every vulnerability 
                      tells a story about how systems fail, how people make decisions under pressure, and how we can build more 
                      resilient communities.
                    </p>
                    <p>
                      Today, I focus on bridging the gap between technical security expertise and practical implementation, 
                      always with an eye toward the philosophical implications of our digital choices.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Skills Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Skills & Expertise</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {skills.map((skillGroup, index) => (
                <Card key={index} className="project-card animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-primary mb-4">{skillGroup.category}</h3>
                    <div className="space-y-2">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="mr-2 mb-2 text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Personal Touch */}
          <section className="animate-fade-in">
            <Card className="max-w-4xl mx-auto bg-muted/20">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-6 text-gradient">Beyond the Technical</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    When I'm not diving into security labs or writing code, you'll find me reading philosophy, 
                    exploring the ethical implications of technology, or mentoring others in their tech journey.
                  </p>
                  <p>
                    I believe that the best cybersecurity professionals are not just technical experts, but critical thinkers 
                    who understand that every system serves people, and every security decision reflects our values about 
                    privacy, trust, and human dignity.
                  </p>
                  <p className="text-primary font-medium">
                    "Security is not just about protecting systems—it's about protecting what we value most as human beings."
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;