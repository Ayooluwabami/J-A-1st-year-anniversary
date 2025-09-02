import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-soft">
      <div className="text-center max-w-2xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4 text-primary">404 - Page Not Found</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Oops! The page you're looking for doesn't exist in our love story.
        </p>
        <a 
          href="/" 
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-romantic text-romantic-foreground rounded-xl font-semibold hover:shadow-glow transition-romantic transform hover:scale-105"
        >
          Return to Our Anniversary
        </a>
      </div>
    </div>
  );
};

export default NotFound;
