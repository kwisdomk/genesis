import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import JournalPost from "@/components/JournalPost";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { getAllJournalPosts, getAllTags } from "@/lib/journal";

const Blog = () => {
  const [selectedTag, setSelectedTag] = useState<string>("All");
  const allPosts = getAllJournalPosts();
  const allTags = ["All", ...getAllTags()];
  
  const filteredPosts = selectedTag === "All" 
    ? allPosts 
    : allPosts.filter(post => post.tags.includes(selectedTag));

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <section className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Journal & Reflections</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Thoughts on cybersecurity, technology, philosophy, and the lessons learned along the way.
            </p>
            
            {/* Tag Filter */}
            <div className="flex justify-center mb-8">
              <div className="flex flex-wrap gap-2 justify-center max-w-4xl">
                {allTags.map((tag) => (
                  <Badge
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    className={`filter-tag ${
                      selectedTag === tag ? "active" : "inactive"
                    }`}
                  >
                    <Filter className="w-3 h-3 mr-1" />
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </section>

          {/* Blog Posts */}
          <section className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {filteredPosts.map((post) => (
                <Link key={post.slug} to={`/journal/${post.slug}`} className="block group">
                  <JournalPost post={post} className="group-hover:shadow-lg transition-all duration-300" />
                </Link>
              ))}
            </div>
            
            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No posts found for the selected tag.</p>
                <Button 
                  variant="outline" 
                  onClick={() => setSelectedTag("All")}
                  className="mt-4"
                >
                  Show All Posts
                </Button>
              </div>
            )}
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;