import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";

const Blog = () => {
  const posts = [
    {
      title: "Why I See Cybersecurity as Philosophy",
      excerpt: "Cybersecurity isn't only about firewalls and exploits—it's about how we think about trust, power, and systems. To me, every penetration test is also a reflection on human behavior, incentives, and resilience.",
      date: "December 2024",
      readTime: "5 min read",
      tags: ["Philosophy", "Cybersecurity", "Reflection"],
      category: "Philosophy"
    },
    {
      title: "Fixing Lubuntu Taught Me More Than Just Linux", 
      excerpt: "While troubleshooting GRUB errors and dependency conflicts, I learned not just commands, but patience. The process reminded me that real growth comes from solving messy, real-world problems.",
      date: "November 2024", 
      readTime: "7 min read",
      tags: ["Linux", "Learning", "Growth"],
      category: "Technical"
    }
  ];

  const upcomingTopics = [
    "The Intersection of Faith and Technology Ethics",
    "Building Resilience Through System Hardening",
    "Community Learning in the Age of AI",
    "From Theory to Practice: My IBM Bootcamp Reflections"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <section className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Blog & Reflections</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Thoughts on technology, philosophy, and the journey of continuous learning. 
              Where cybersecurity meets deeper questions about trust, growth, and human nature.
            </p>
          </section>

          {/* Featured Posts */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Recent Posts</h2>
            <div className="max-w-4xl mx-auto space-y-8">
              {posts.map((post, index) => (
                <Card key={index} className="card-gradient border-border/50 hover:border-primary/30 transition-smooth hover:glow-primary animate-fade-in group" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                        {post.category}
                      </Badge>
                      <div className="text-sm text-muted-foreground">
                        {post.date} • {post.readTime}
                      </div>
                    </div>
                    <CardTitle className="text-2xl md:text-3xl text-primary group-hover:text-gradient transition-smooth">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 pt-4">
                      {post.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="border-primary/30 text-primary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Upcoming Topics */}
          <section className="animate-fade-in">
            <div className="max-w-4xl mx-auto">
              <Card className="card-gradient border-border/50">
                <CardHeader>
                  <CardTitle className="text-2xl text-center text-gradient">Coming Soon</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-muted-foreground mb-6">
                    Topics I'm exploring and will be writing about:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {upcomingTopics.map((topic, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-primary/5 border border-primary/10">
                        <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                        <span className="text-muted-foreground">{topic}</span>
                      </div>
                    ))}
                  </div>
                  <div className="text-center mt-8">
                    <p className="text-sm text-muted-foreground italic">
                      "Writing is thinking made visible. Each post is a step in understanding not just technology, but ourselves."
                    </p>
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

export default Blog;