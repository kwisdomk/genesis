import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Tag } from "lucide-react";
import { JournalPost as JournalPostType } from "@/lib/journal";

interface JournalPostProps {
  post: JournalPostType;
  showContent?: boolean;
  className?: string;
}

const JournalPost = ({ post, showContent = false, className = "" }: JournalPostProps) => {
  return (
    <Card className={`journal-post bg-card border-border/50 ${className}`}>
      <CardHeader className="pb-4">
        <div className="flex flex-col space-y-3">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>{new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
            {post.lastUpdated !== post.date && (
              <span className="text-xs">
                Updated: {new Date(post.lastUpdated).toLocaleDateString()}
              </span>
            )}
          </div>
          
          <CardTitle className="text-2xl font-bold text-foreground leading-tight">
            {post.title}
          </CardTitle>
          
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="text-xs bg-accent/10 text-accent border-accent/20 hover:bg-accent/20 transition-colors"
              >
                <Tag className="w-3 h-3 mr-1" />
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          {showContent ? (
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed text-lg">
                {post.excerpt || post.content.substring(0, 200) + '...'}
              </p>
              {/* MDX content would be rendered here */}
              <div className="border-l-4 border-accent/30 pl-4 mt-6">
                <p className="text-sm text-muted-foreground italic">
                  Full MDX content would be rendered here in the actual implementation.
                </p>
              </div>
            </div>
          ) : (
            <p className="text-muted-foreground leading-relaxed">
              {post.excerpt || post.content.substring(0, 150) + '...'}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default JournalPost;