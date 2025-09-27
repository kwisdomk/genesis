import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

const Timeline = () => {
  const timelineEvents = [
    {
      date: "December 2024",
      type: "learning",
      title: "Advanced Penetration Testing Labs",
      location: "TryHackMe Platform",
      description: "Completed comprehensive penetration testing scenarios focusing on Active Directory attacks, privilege escalation, and post-exploitation techniques.",
      skills: ["Penetration Testing", "Active Directory", "Privilege Escalation"],
      impact: "Gained hands-on experience with real-world attack vectors and defensive strategies."
    },
    {
      date: "November 2024",
      type: "project",
      title: "Linux System Hardening Project",
      location: "Personal Lab",
      description: "Implemented comprehensive security measures on Ubuntu server including firewall configuration, intrusion detection, and automated security monitoring.",
      skills: ["Linux", "System Administration", "Security Hardening"],
      impact: "Developed deep understanding of system-level security and defensive programming."
    },
    {
      date: "October 2024",
      type: "bootcamp",
      title: "IBM i3 Cybersecurity Bootcamp",
      location: "IBM Skills Academy",
      description: "Intensive 12-week program covering advanced cybersecurity concepts, incident response, and real-world lab exercises with industry mentors.",
      skills: ["Incident Response", "Threat Analysis", "Security Architecture"],
      impact: "Bridged the gap between academic knowledge and industry practices."
    },
    {
      date: "September 2024",
      type: "milestone",
      title: "University Club Attendance System",
      location: "Zetech University",
      description: "Developed full-stack application for tracking club participation, featuring user authentication, data analytics, and automated reporting.",
      skills: ["Full Stack Development", "Database Design", "User Experience"],
      impact: "Learned to balance technical requirements with community needs and user experience."
    },
    {
      date: "June 2024",
      type: "education",
      title: "Bachelor's in Computer Science",
      location: "Zetech University",
      description: "Graduated with focus on cybersecurity, systems programming, and software engineering. Senior project on network security monitoring.",
      skills: ["Computer Science Fundamentals", "Network Security", "Software Engineering"],
      impact: "Built strong foundation in computer science theory and practical programming skills."
    },
    {
      date: "March 2024",
      type: "project",
      title: "GRUB Recovery and System Repair",
      location: "Personal Lab",
      description: "Successfully diagnosed and resolved complex boot loader issues on Lubuntu system, learning low-level system administration and recovery techniques.",
      skills: ["System Recovery", "Boot Processes", "Troubleshooting"],
      impact: "Developed resilience and systematic problem-solving approach to system administration."
    },
    {
      date: "January 2024",
      type: "learning",
      title: "Started Cybersecurity Focused Learning",
      location: "Self-Directed",
      description: "Began intensive self-study in cybersecurity concepts, starting with network fundamentals and progressing to ethical hacking methodologies.",
      skills: ["Network Security", "Ethical Hacking", "Self-Directed Learning"],
      impact: "Discovered passion for cybersecurity and committed to career transition."
    },
    {
      date: "2022",
      type: "education",
      title: "Diploma in Computer Science",
      location: "Technical Institute",
      description: "Completed foundational studies in programming, database management, and system administration. First exposure to information security concepts.",
      skills: ["Programming Fundamentals", "Database Management", "System Administration"],
      impact: "Established core technical skills and discovered interest in security."
    }
  ];

  const getTypeColor = (type: string) => {
    const colors = {
      education: "bg-blue-100 text-blue-800 border-blue-200",
      bootcamp: "bg-purple-100 text-purple-800 border-purple-200",
      project: "bg-green-100 text-green-800 border-green-200",
      learning: "bg-yellow-100 text-yellow-800 border-yellow-200",
      milestone: "bg-orange-100 text-orange-800 border-orange-200"
    };
    return colors[type as keyof typeof colors] || "bg-gray-100 text-gray-800 border-gray-200";
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <section className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Timeline & Journey</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A chronological view of my learning journey, milestones, and growth in cybersecurity and technology. 
              Each step represents not just what I learned, but how it shaped my understanding of the field.
            </p>
          </section>

          {/* Timeline */}
          <section className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block"></div>
              
              <div className="space-y-8">
                {timelineEvents.map((event, index) => (
                  <div key={index} className="relative animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    {/* Timeline Dot */}
                    <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block"></div>
                    
                    <Card className="md:ml-16 project-card">
                      <CardContent className="p-6">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          <Badge className={getTypeColor(event.type)}>
                            {event.type}
                          </Badge>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4 mr-1" />
                            {event.date}
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <MapPin className="w-4 h-4 mr-1" />
                            {event.location}
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-semibold mb-3 text-primary">
                          {event.title}
                        </h3>
                        
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {event.description}
                        </p>
                        
                        <div className="mb-4">
                          <h4 className="text-sm font-medium mb-2">Skills Developed:</h4>
                          <div className="flex flex-wrap gap-2">
                            {event.skills.map((skill, skillIndex) => (
                              <Badge key={skillIndex} variant="outline" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div className="border-t border-border/50 pt-4">
                          <h4 className="text-sm font-medium text-accent mb-2">Key Impact:</h4>
                          <p className="text-sm text-muted-foreground italic">
                            {event.impact}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Summary Stats */}
          <section className="mt-16 animate-fade-in">
            <Card className="max-w-4xl mx-auto bg-muted/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-center mb-8 text-gradient">
                  Journey Summary
                </h3>
                <div className="grid md:grid-cols-4 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">2+</div>
                    <div className="text-sm text-muted-foreground">Years of Study</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">8+</div>
                    <div className="text-sm text-muted-foreground">Major Projects</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">15+</div>
                    <div className="text-sm text-muted-foreground">Skills Acquired</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">∞</div>
                    <div className="text-sm text-muted-foreground">Curiosity Level</div>
                  </div>
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

export default Timeline;