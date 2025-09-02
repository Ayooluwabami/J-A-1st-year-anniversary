import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { EnhancedButton } from '@/components/ui/enhanced-button';

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in-up">
      <EnhancedButton
        variant="romantic"
        size="icon"
        onClick={scrollToTop}
        className="rounded-full shadow-glow animate-heart-beat w-14 h-14"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </EnhancedButton>
    </div>
  );
};