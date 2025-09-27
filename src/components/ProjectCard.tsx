import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, Calendar, Target, Lightbulb } from "lucide-react";
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
  };
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card 
      className="project-card animate-slide-up" 
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span>{project.date}</span>
          </div>
        </div>
        <CardTitle className="text-xl text-primary hover:text-gradient transition-smooth">
          {project.title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-muted-foreground leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, tagIndex) => (
            <Badge 
              key={tagIndex} 
              variant="secondary" 
              className="bg-primary/10 text-primary border-primary/20 text-xs"
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