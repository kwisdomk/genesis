import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, Calendar, Target, Lightbulb, Shield, AlertTriangle, CheckCircle } from "lucide-react";
import { useState } from "react";

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    tags: string[];
    date: string;
    problem?: string;
    approach?: string;
    result?: string;
    lesson: string;
    status?: 'completed' | 'ongoing' | 'case-study';
  };
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getStatusBadge = () => {
    const status = project.status || 'completed';
    switch (status) {
      case 'completed':
        return (
          <Badge className="bg-success/10 text-success border-success/20 hover:bg-success/20">
            <CheckCircle className="w-3 h-3 mr-1" />
            Patched
          </Badge>
        );
      case 'ongoing':
        return (
          <Badge className="bg-warning/10 text-warning border-warning/20 hover:bg-warning/20">
            <AlertTriangle className="w-3 h-3 mr-1" />
            Monitoring
          </Badge>
        );
      case 'case-study':
        return (
          <Badge className="bg-destructive/10 text-destructive border-destructive/20 hover:bg-destructive/20">
            <Shield className="w-3 h-3 mr-1" />
            Case Study
          </Badge>
        );
      default:
        return null;
    }
  };

  return (
    <Card 
      className="project-card animate-slide-up hover:scale-[1.01] transition-all duration-300 bg-card border-border/50 shadow-sm hover:shadow-md" 
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span className="font-mono text-xs">{project.date}</span>
          </div>
          {getStatusBadge()}
        </div>
        <CardTitle className="text-xl font-bold text-foreground leading-tight mb-2">
          {project.title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4 pt-0">
        <p className="text-sm font-mono text-muted-foreground leading-relaxed bg-muted/20 p-3 rounded-md border-l-4 border-accent/30">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, tagIndex) => (
            <Badge 
              key={tagIndex} 
              variant="outline" 
              className="text-xs font-mono bg-background border-border hover:bg-muted/50 transition-colors"
            >
              {tag}
            </Badge>
          ))}
        </div>

        {/* Expandable Case Study */}
        {(project.problem || project.approach || project.result) && (
          <>
            <Button
              variant="ghost"
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-full justify-between text-sm hover:bg-primary/5"
            >
              {isExpanded ? "Hide Case Study" : "View Case Study"}
              {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </Button>

            {isExpanded && (
              <div className="space-y-4 pt-4 border-t border-border/50 animate-fade-in">
                {project.problem && (
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Target className="w-4 h-4 text-destructive" />
                      <h4 className="font-semibold text-destructive">Problem</h4>
                    </div>
                    <p className="text-sm text-muted-foreground pl-6">{project.problem}</p>
                  </div>
                )}

                {project.approach && (
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Target className="w-4 h-4 text-primary" />
                      <h4 className="font-semibold text-primary">Approach</h4>
                    </div>
                    <p className="text-sm text-muted-foreground pl-6">{project.approach}</p>
                  </div>
                )}

                {project.result && (
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Target className="w-4 h-4 text-accent" />
                      <h4 className="font-semibold text-accent">Result</h4>
                    </div>
                    <p className="text-sm text-muted-foreground pl-6">{project.result}</p>
                  </div>
                )}
              </div>
            )}
          </>
        )}
        
        <div className="pt-4 border-t border-border/50">
          <div className="flex items-center space-x-2 mb-2">
            <Lightbulb className="w-4 h-4 text-accent" />
            <h4 className="font-semibold text-accent">Key Learning</h4>
          </div>
          <p className="text-sm text-muted-foreground italic pl-6">
            {project.lesson}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;