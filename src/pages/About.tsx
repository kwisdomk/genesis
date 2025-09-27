import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";

const About = () => {
  const timelineItems = [
    {
      icon: "🎓",
      title: "Diploma in Computer Science",
      description: "foundation in programming & IT."
    },
    {
      icon: "🎓", 
      title: "Bachelor's in Computer Science",
      description: "deepening expertise at Zetech University."
    },
    {
      icon: "🚀",
      title: "IBM i3 Cybersecurity Bootcamp",
      description: "advanced training, real-world labs."
    },
    {
      icon: "🔬",
      title: "Linux troubleshooting & forensics projects",
      description: "building resilience & practical skills."
    },
    {
      icon: "🤝",
      title: "Community & mentorship",
      description: "sharing, learning, and growing with peers."
    }
  ];

  const values = [
    {
      icon: "🔍",
      title: "Curiosity before mastery",
      description: "keep learning, keep questioning."
    },
    {
      icon: "⚖️",
      title: "Integrity in technology",
      description: "security without trust is meaningless."
    },
    {
      icon: "🌱",
      title: "Growth through struggle",
      description: "every failure is a lesson."
    },
    {
      icon: "🙏",
      title: "Faith + community impact",
      description: "technology should serve people."
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
              <span className="text-gradient">My Journey</span>
            </h1>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-muted-foreground leading-relaxed">
                Hello, I'm <span className="text-primary font-semibold">Wisdom</span> 👋. I'm an entry-to-intermediate IT professional passionate about cybersecurity, systems, and the philosophy of technology. My journey started with a Diploma and a Bachelor's in Computer Science, and has grown through hands-on labs, technical bootcamps, and countless experiments on Linux systems.
              </p>
            </div>
          </section>

          {/* Timeline Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Timeline</h2>
            <div className="max-w-4xl mx-auto">
              {timelineItems.map((item, index) => (
                <div key={index} className="flex items-start mb-8 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-2xl mr-6">
                    {item.icon}
                  </div>
                  <Card className="flex-1 card-gradient border-border/50 hover:border-primary/30 transition-smooth">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-primary">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </section>

          {/* Philosophy Section */}
          <section>
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="text-gradient">Philosophy & Values</span>
            </h2>
            <p className="text-center text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              Principles that guide me:
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {values.map((value, index) => (
                <Card key={index} className="card-gradient border-border/50 hover:border-primary/30 transition-smooth hover:glow-primary animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4">{value.icon}</div>
                    <h3 className="text-xl font-semibold mb-2 text-primary">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default About;