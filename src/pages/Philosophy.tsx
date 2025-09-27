import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Philosophy = () => {
  const principles = [
    {
      title: "Curiosity before mastery",
      description: "Keep learning, keep questioning. The moment we think we know everything is the moment we stop growing.",
      reflection: "Every vulnerability I discover, every system I analyze, reminds me that there's always more to learn. Curiosity drives innovation and keeps our defenses strong."
    },
    {
      title: "Integrity in technology",
      description: "Security without trust is meaningless. Technology must serve humanity with ethical foundations.",
      reflection: "In cybersecurity, we hold the keys to digital trust. Our responsibility extends beyond technical skills to moral leadership in how technology shapes society."
    },
    {
      title: "Growth through struggle",
      description: "Every failure is a lesson. Every challenge is an opportunity to become more resilient.",
      reflection: "Debugging a failing system at 2 AM taught me more about persistence than any textbook. Real growth happens when we push through the uncomfortable moments."
    },
    {
      title: "Faith + community impact",
      description: "Technology should serve people. Our skills are gifts meant to be shared and used for good.",
      reflection: "Whether it's securing a small business's data or teaching someone about digital privacy, technology becomes meaningful when it serves others."
    }
  ];

  const quotes = [
    {
      text: "Every line of code is a decision about how the world should work.",
      context: "On the responsibility of technologists"
    },
    {
      text: "Security is not about eliminating risk—it's about understanding it and making informed choices.",
      context: "On risk management philosophy"
    },
    {
      text: "The best defense against cyber threats isn't just technology—it's critical thinking.",
      context: "On human factors in security"
    },
    {
      text: "In vulnerability lies opportunity—both for attackers and defenders. The difference is intention.",
      context: "On ethical hacking"
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
              <span className="text-gradient">Philosophy & Principles</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Technology and philosophy aren't separate domains—they're interconnected ways of understanding and shaping our world. 
              Here are the principles that guide my approach to cybersecurity, learning, and life.
            </p>
          </section>

          {/* Core Principles */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Core Principles</h2>
            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {principles.map((principle, index) => (
                <Card key={index} className="project-card animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">
                      {principle.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      {principle.description}
                    </p>
                    <div className="border-l-4 border-accent pl-4 bg-accent/5 py-3">
                      <p className="text-sm text-foreground italic">
                        {principle.reflection}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Quotes & Reflections */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="text-gradient">Reflections</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {quotes.map((quote, index) => (
                <Card key={index} className="bg-muted/20 border-l-4 border-l-primary animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <Quote className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-foreground font-medium mb-2 leading-relaxed">
                          "{quote.text}"
                        </p>
                        <p className="text-xs text-muted-foreground uppercase tracking-wide">
                          {quote.context}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Personal Statement */}
          <section className="animate-fade-in">
            <Card className="max-w-4xl mx-auto bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-6 text-gradient">
                  Why Philosophy Matters in Cybersecurity
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Cybersecurity isn't just about technical skills—it's about understanding human nature, 
                    power dynamics, and the ethical implications of our digital world. Every security decision 
                    reflects our values about privacy, trust, and freedom.
                  </p>
                  <p>
                    When I analyze a vulnerability, I'm not just looking at code—I'm examining how systems 
                    can be exploited, how trust can be broken, and how we can build more resilient communities. 
                    Philosophy gives context to the technical work and reminds us why it matters.
                  </p>
                  <p className="text-primary font-medium">
                    "Security is ultimately about protecting what we value most—and that requires both 
                    technical expertise and moral clarity."
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

export default Philosophy;