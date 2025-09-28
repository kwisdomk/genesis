import { useParams, Navigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import JournalPost from "@/components/JournalPost";
import { getJournalPostBySlug } from "@/lib/journal";
import { useEffect } from "react";
import { trackJournalRead } from "@/lib/analytics";

const JournalPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug) {
    return <Navigate to="/blog" replace />;
  }

  const post = getJournalPostBySlug(slug);
  
  useEffect(() => {
    if (post) {
      trackJournalRead(post.title);
    }
  }, [post]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <JournalPost post={post} showContent={true} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default JournalPostPage;