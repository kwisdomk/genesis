import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const projects = [
    {
      title: "Advanced Web Application Penetration Testing",
      description: "Comprehensive security assessment of web applications using OWASP methodologies, identifying and documenting critical vulnerabilities.",
      tags: ["Cybersecurity", "Web Security", "OWASP", "Penetration Testing"],
      date: "December 2024",
      status: "completed" as const,
      problem: "Web applications are increasingly complex and vulnerable to sophisticated attacks. Traditional security scans miss logic flaws and business logic vulnerabilities.",
      approach: "Implemented manual testing techniques combined with automated tools. Used Burp Suite for proxy analysis, conducted SQL injection tests, and performed authentication bypass attempts.",
      result: "Identified 12 critical vulnerabilities including SQL injection, XSS, and authentication flaws. Provided detailed remediation recommendations.",
      lesson: "Manual testing is irreplaceable for finding complex business logic flaws that automated tools miss."
    },
    {
      title: "Linux System Hardening & Monitoring",
      description: "Implemented comprehensive security measures on Ubuntu server including firewall configuration, intrusion detection, and automated monitoring.",
      tags: ["Linux", "System Administration", "Security Hardening", "Monitoring"],
      date: "November 2024",
      status: "ongoing" as const,
      problem: "Default Linux installations lack proper security configurations, leaving systems vulnerable to common attack vectors.",
      approach: "Applied defense-in-depth strategy: configured iptables, installed and configured fail2ban, implemented log monitoring with ELK stack, and automated security updates.",
      result: "Reduced attack surface by 85%, implemented real-time threat detection, and established automated incident response procedures.",
      lesson: "Security is not a one-time configuration but an ongoing process of monitoring and adaptation."
    },
    {
      title: "TryHackMe Advanced Labs Series",
      description: "Completed complex penetration testing scenarios focusing on Active Directory attacks, privilege escalation, and post-exploitation techniques.",
      tags: ["Cybersecurity", "Penetration Testing", "Active Directory", "Privilege Escalation"],
      date: "October 2024",
      status: "case-study" as const,
      problem: "Real-world penetration testing requires practical experience with complex multi-stage attacks that textbooks can't provide.",
      approach: "Systematically worked through advanced TryHackMe paths, documented each step, analyzed attack vectors, and practiced remediation techniques.",
      result: "Successfully completed 25+ advanced labs, mastered privilege escalation techniques, and developed systematic penetration testing methodology.",
      lesson: "Hands-on practice with realistic scenarios is essential for developing actual penetration testing skills."
    },
    {
      title: "Fixing Lubuntu GRUB Boot Issues",
      description: "Diagnosed and resolved complex boot loader issues, learning low-level system administration and recovery techniques.",
      tags: ["Linux", "System Administration", "Troubleshooting", "Boot Processes"],
      date: "September 2024",
      status: "completed" as const,
      problem: "System became unbootable after a kernel update, with GRUB failing to load and no obvious recovery path available.",
      approach: "Used live USB to access file system, analyzed GRUB configuration, reinstalled boot loader, and documented the entire recovery process.",
      result: "Successfully restored system functionality and created comprehensive recovery documentation for future incidents.",
      lesson: "Deep understanding of boot processes and persistence in troubleshooting builds real sysadmin skills."
    },
    {
      title: "University Club Attendance System",
      description: "Full-stack web application for tracking club participation, featuring user authentication, data analytics, and automated reporting.",
      tags: ["Full Stack", "Web Development", "Database Design", "Community"],
      date: "August 2024",
      status: "completed" as const,
      problem: "Manual attendance tracking was inefficient and error-prone, making it difficult to recognize active members and plan events.",
      approach: "Designed MySQL database schema, built REST API with user authentication, created responsive frontend, and implemented analytics dashboard.",
      result: "Deployed system used by 200+ club members, increased attendance accuracy by 95%, and provided valuable insights for event planning.",
      lesson: "Technology solutions must balance technical requirements with user experience and community needs."
    }
  ];

  const allTags = ["All", ...Array.from(new Set(projects.flatMap(p => p.tags)))];

  const filteredProjects = selectedFilter === "All" 
    ? projects 
    : projects.filter(project => project.tags.includes(selectedFilter));

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
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Each project represents a lesson learned, a skill developed, and a step forward in my cybersecurity journey. 
              From system administration to penetration testing, these experiences shape my understanding of security.
            </p>
          </section>

          {/* Filter Tags */}
          <section className="mb-12">
            <div className="flex justify-center">
              <div className="flex flex-wrap gap-2 justify-center max-w-4xl">
                {allTags.map((tag) => (
                  <Badge
                    key={tag}
                    onClick={() => setSelectedFilter(tag)}
                    className={`filter-tag ${
                      selectedFilter === tag ? "active" : "inactive"
                    }`}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </section>

          {/* Projects Grid */}
          <section className="max-w-6xl mx-auto mb-16">
            <div className="grid lg:grid-cols-2 gap-8">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>
          </section>

          {/* Future Projects Placeholder */}
          <section className="animate-fade-in">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h3 className="text-2xl font-bold text-gradient">More Projects in Development</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="p-4 bg-muted/20 rounded-lg border border-dashed border-primary/30">
                  <h4 className="font-medium text-primary mb-2">Cloud Security Architecture</h4>
                  <p className="text-muted-foreground">AWS security implementation with automated compliance monitoring</p>
                </div>
                <div className="p-4 bg-muted/20 rounded-lg border border-dashed border-primary/30">
                  <h4 className="font-medium text-primary mb-2">Malware Analysis Lab</h4>
                  <p className="text-muted-foreground">Controlled environment for reverse engineering and behavior analysis</p>
                </div>
                <div className="p-4 bg-muted/20 rounded-lg border border-dashed border-primary/30">
                  <h4 className="font-medium text-primary mb-2">Security Automation Tools</h4>
                  <p className="text-muted-foreground">Custom Python tools for vulnerability scanning and reporting</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;