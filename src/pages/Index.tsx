import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, BookOpen, Code } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const latestUpdates = [
    {
      type: "project",
      title: "TryHackMe Labs: Advanced Penetration Testing",
      date: "2024-12-15",
      description: "Completed advanced network penetration labs focusing on privilege escalation techniques."
    },
    {
      type: "blog",
      title: "Why I See Cybersecurity as Philosophy",
      date: "2024-12-10",
      description: "Exploring the intersection of trust, power, and human behavior in security systems."
    },
    {
      type: "learning",
      title: "IBM i3 Cybersecurity Bootcamp",
      date: "2024-12-01",
      description: "Intensive training in real-world cybersecurity scenarios and incident response."
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case "project": return <Code className="w-4 h-4" />;
      case "blog": return <BookOpen className="w-4 h-4" />;
      default: return <Calendar className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="section-padding pt-32">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-gradient">Securing systems.</span><br/>
              <span className="text-gradient">Learning endlessly.</span><br/>
              <span className="text-gradient">Reflecting deeply.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              I explore technology not just as a career, but as a journey of curiosity, growth, and impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8 py-3">
                <Link to="/about">
                  Explore My Journey
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-3">
                <Link to="/blog">
                  Read My Writings
                  <BookOpen className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Updates Section */}
      <section className="section-padding bg-muted/20 full-width-section">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="text-gradient">Latest Updates</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {latestUpdates.map((update, index) => (
                <Card key={index} className="project-card animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2 text-primary">
                        {getIcon(update.type)}
                        <span className="text-sm font-medium capitalize">{update.type}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">{update.date}</span>
                    </div>
                    <h3 className="font-semibold mb-2 text-foreground">{update.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{update.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button asChild variant="outline">
                <Link to="/timeline">
                  View Full Timeline
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </div>
  );
};

export default Index;
