import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { getLatestJournalPosts } from "@/lib/journal";

const LatestInsights = () => {
  const latestPosts = getLatestJournalPosts(3);

  return (
    <section className="section-padding bg-muted/20 full-width-section">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-gradient">— Latest Case Files</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {latestPosts.map((post, index) => (
              <Link key={post.slug} to={`/journal/${post.slug}`} className="group">
                <Card className="project-card animate-slide-up h-full hover:scale-[1.02] transition-all duration-300 bg-card border-border/50 shadow-sm hover:shadow-md group-hover:border-accent/30">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span className="font-mono text-xs">
                          {new Date(post.date).toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric' 
                          })}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span className="font-mono text-xs">{post.readTime}</span>
                      </div>
                    </div>
                    <CardTitle className="text-lg font-bold text-foreground leading-tight group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-4 pt-0">
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 2).map((tag, tagIndex) => (
                        <Badge 
                          key={tagIndex} 
                          variant="outline" 
                          className="text-xs font-mono bg-background border-border hover:bg-muted/50 transition-colors"
                        >
                          {tag}
                        </Badge>
                      ))}
                      {post.tags.length > 2 && (
                        <Badge 
                          variant="outline" 
                          className="text-xs font-mono bg-background border-border"
                        >
                          +{post.tags.length - 2}
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex items-center text-primary text-sm font-medium group-hover:text-accent transition-colors">
                      <span>Read analysis</span>
                      <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestInsights;