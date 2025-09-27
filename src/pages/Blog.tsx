import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import { useState } from "react";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const posts = [
    {
      title: "Why I See Cybersecurity as Philosophy",
      excerpt: "Cybersecurity isn't only about firewalls and exploits—it's about how we think about trust, power, and systems. To me, every penetration test is also a reflection on human behavior, incentives, and resilience.",
      publishDate: "December 10, 2024",
      lastUpdated: "December 15, 2024",
      readTime: "5 min read",
      tags: ["Philosophy", "Cybersecurity", "Reflection", "Trust"],
      category: "Philosophy"
    },
    {
      title: "Fixing Lubuntu Taught Me More Than Just Linux", 
      excerpt: "While troubleshooting GRUB errors and dependency conflicts, I learned not just commands, but patience. The process reminded me that real growth comes from solving messy, real-world problems.",
      publishDate: "November 25, 2024", 
      lastUpdated: "November 25, 2024",
      readTime: "7 min read",
      tags: ["Linux", "Learning", "Growth", "System Administration"],
      category: "Technical"
    },
    {
      title: "The Human Factor in Security",
      excerpt: "Technology is only as secure as the humans who use it. Exploring how psychology, social engineering, and human behavior are central to cybersecurity strategy.",
      publishDate: "November 15, 2024",
      lastUpdated: "November 20, 2024", 
      readTime: "6 min read",
      tags: ["Security", "Psychology", "Social Engineering", "Human Behavior"],
      category: "Security"
    }
  ];

  const upcomingTopics = [
    "The Intersection of Faith and Technology Ethics",
    "Building Resilience Through System Hardening", 
    "Community Learning in the Age of AI",
    "From Theory to Practice: My IBM Bootcamp Reflections",
    "Vulnerability Disclosure: Balancing Security and Responsibility",
    "The Philosophy of Open Source Security"
  ];

  const categories = ["All", "Philosophy", "Technical", "Security"];
  
  const filteredPosts = selectedCategory === "All" 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

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

          {/* Category Filter */}
          <section className="mb-12">
            <div className="flex justify-center">
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => (
                  <Badge
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`filter-tag ${
                      selectedCategory === category ? "active" : "inactive"
                    }`}
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </div>
          </section>

          {/* Featured Posts */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Recent Posts</h2>
            <div className="max-w-5xl mx-auto space-y-8">
              {filteredPosts.map((post, index) => (
                <Card key={index} className="project-card animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                        {post.category}
                      </Badge>
                      <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3" />
                          <span>Published: {post.publishDate}</span>
                        </div>
                        {post.lastUpdated !== post.publishDate && (
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-3 h-3" />
                            <span>Updated: {post.lastUpdated}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <CardTitle className="text-2xl md:text-3xl text-primary hover:text-gradient transition-smooth">
                      {post.title}
                    </CardTitle>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>Wisdom</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed text-base">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 pt-4">
                      {post.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="border-primary/30 text-primary text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="pt-4">
                      <button className="flex items-center space-x-2 text-sm text-primary hover:text-accent transition-smooth">
                        <span>Read full post</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Upcoming Topics */}
          <section className="animate-fade-in">
            <div className="max-w-5xl mx-auto">
              <Card className="bg-muted/20">
                <CardHeader>
                  <CardTitle className="text-2xl text-center text-gradient">Coming Soon</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-muted-foreground mb-8">
                    Topics I'm exploring and will be writing about in the coming months:
                  </p>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {upcomingTopics.map((topic, index) => (
                      <div key={index} className="flex items-start space-x-3 p-4 rounded-lg bg-background border border-border/50 hover:border-primary/30 transition-smooth">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 animate-pulse flex-shrink-0" />
                        <span className="text-muted-foreground text-sm leading-relaxed">{topic}</span>
                      </div>
                    ))}
                  </div>
                  <div className="text-center mt-8 pt-8 border-t border-border/50">
                    <p className="text-sm text-muted-foreground italic max-w-2xl mx-auto">
                      "Writing is thinking made visible. Each post is a step in understanding not just technology, but ourselves. 
                      Subscribe to my journey as I explore the intersection of security, philosophy, and human nature."
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;