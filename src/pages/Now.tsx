import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Target, BookOpen, Code, Brain } from "lucide-react";

const Now = () => {
  const currentMonth = "December 2024";
  
  const currentFocus = [
    {
      icon: Code,
      title: "Advanced Web Application Security",
      description: "Deep diving into OWASP Top 10 vulnerabilities through hands-on labs and real-world scenarios. Currently working through complex SQL injection and XSS attack vectors.",
      progress: 75
    },
    {
      icon: Brain,
      title: "Cloud Security Architecture", 
      description: "Learning AWS security best practices, IAM policies, and cloud-native security tools. Building secure cloud infrastructures from the ground up.",
      progress: 45
    },
    {
      icon: BookOpen,
      title: "Security Philosophy Writing",
      description: "Working on a series of blog posts exploring the intersection of technology ethics, cybersecurity, and human behavior in digital systems.",
      progress: 60
    }
  ];

  const recentAccomplishments = [
    "Completed advanced privilege escalation lab series on TryHackMe",
    "Published 'Why I See Cybersecurity as Philosophy' blog post",
    "Set up personal security monitoring lab with ELK stack",
    "Participated in local cybersecurity meetup and networking event"
  ];

  const nextGoals = [
    {
      timeframe: "This Month",
      goals: [
        "Complete OSCP-style practice exams",
        "Finish cloud security certification prep",
        "Publish post on 'The Human Factor in Security'"
      ]
    },
    {
      timeframe: "Next Quarter",
      goals: [
        "Launch personal cybersecurity blog series",
        "Complete advanced malware analysis course", 
        "Start contributing to open-source security tools"
      ]
    }
  ];

  const currentReading = [
    {
      title: "The Web Application Hacker's Handbook",
      author: "Dafydd Stuttard & Marcus Pinto",
      progress: "Chapter 12 of 21",
      thoughts: "Excellent deep dive into web security. The practical examples are incredibly valuable."
    },
    {
      title: "Thinking, Fast and Slow",
      author: "Daniel Kahneman",
      progress: "50% complete",
      thoughts: "Understanding cognitive biases is crucial for security awareness and social engineering defense."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <section className="text-center mb-16 animate-fade-in">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Calendar className="w-6 h-6 text-primary" />
              <Badge className="bg-primary/10 text-primary border-primary/20">
                {currentMonth}
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">What I'm Doing Now</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A monthly snapshot of my current learning focus, projects, and goals. 
              Inspired by Derek Sivers' "now page" concept—keeping myself accountable and sharing my journey.
            </p>
          </section>

          {/* Current Focus */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Current Focus Areas</h2>
            <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {currentFocus.map((focus, index) => (
                <Card key={index} className="project-card animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-2">
                      <focus.icon className="w-6 h-6 text-primary" />
                      <CardTitle className="text-lg">{focus.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {focus.description}
                    </p>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Progress</span>
                        <span className="text-primary font-medium">{focus.progress}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-primary rounded-full h-2 transition-all duration-300"
                          style={{ width: `${focus.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Recent Accomplishments */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Recent Wins</h2>
            <Card className="max-w-4xl mx-auto animate-fade-in">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-primary">This Month's Accomplishments</h3>
                    <ul className="space-y-3">
                      {recentAccomplishments.map((accomplishment, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground text-sm">{accomplishment}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-primary">Currently Reading</h3>
                    <div className="space-y-4">
                      {currentReading.map((book, index) => (
                        <div key={index} className="border-l-4 border-accent pl-4 bg-accent/5 py-3 rounded-r">
                          <h4 className="font-medium text-sm">{book.title}</h4>
                          <p className="text-xs text-muted-foreground mb-1">by {book.author}</p>
                          <p className="text-xs text-primary mb-2">{book.progress}</p>
                          <p className="text-xs text-muted-foreground italic">{book.thoughts}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Upcoming Goals */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="text-gradient">Looking Ahead</span>
            </h2>
            <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {nextGoals.map((period, index) => (
                <Card key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <Target className="w-5 h-5 text-primary" />
                      <CardTitle className="text-lg">{period.timeframe}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {period.goals.map((goal, goalIndex) => (
                        <li key={goalIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground text-sm">{goal}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Update Note */}
          <section className="animate-fade-in">
            <Card className="max-w-3xl mx-auto bg-muted/20 border-primary/20">
              <CardContent className="p-6 text-center">
                <p className="text-muted-foreground text-sm mb-4">
                  This page is updated monthly to reflect my current priorities and progress. 
                  It's a way to stay accountable to my goals and share my learning journey transparently.
                </p>
                <p className="text-xs text-muted-foreground">
                  Last updated: {currentMonth} • Next update: January 2025
                </p>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Now;