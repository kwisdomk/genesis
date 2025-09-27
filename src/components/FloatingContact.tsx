import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 rounded-full w-14 h-14 shadow-lg hover:scale-110 transition-smooth"
        size="icon"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>

      {/* Contact Card */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-fade-in">
          <Card className="w-full max-w-md">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Let's Connect</h3>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
              
              <p className="text-muted-foreground mb-6 text-sm">
                Interested in collaborating, discussing cybersecurity, or just want to chat about technology and philosophy?
              </p>
              
              <div className="space-y-3">
                <a
                  href="mailto:wisdom@example.com"
                  className="block w-full p-3 text-center bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-smooth"
                >
                  Send me an email
                </a>
                <a
                  href="https://linkedin.com/in/wisdom"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full p-3 text-center border border-border rounded-md hover:bg-muted transition-smooth"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default FloatingContact;