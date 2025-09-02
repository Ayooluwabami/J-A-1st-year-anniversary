import { Heart, Calendar } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center">
          {/* Anniversary Date */}
          <div className="mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Heart className="w-6 h-6 text-romantic fill-romantic animate-heart-beat" />
              <h3 className="text-2xl font-script">Joseph & Ayobami Edun</h3>
              <Heart className="w-6 h-6 text-romantic fill-romantic animate-heart-beat" />
            </div>
            <div className="flex items-center justify-center gap-2 text-primary-foreground/80">
              <Calendar className="w-5 h-5" />
              <span className="text-lg">September 5, 2024 - First Anniversary</span>
            </div>
          </div>

          {/* Love Quote */}
          <div className="mb-8 max-w-2xl mx-auto">
            <blockquote className="text-xl md:text-2xl font-script text-primary-foreground/90 italic">
              "A successful marriage requires falling in love many times, always with the same person."
            </blockquote>
            <cite className="block mt-2 text-primary-foreground/70">— Mignon McLaughlin</cite>
          </div>

          {/* Decorative Hearts */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <Heart className="w-4 h-4 text-romantic/60 fill-romantic/60" />
            <Heart className="w-6 h-6 text-gold fill-gold" />
            <Heart className="w-8 h-8 text-romantic fill-romantic animate-heart-beat" />
            <Heart className="w-6 h-6 text-gold fill-gold" />
            <Heart className="w-4 h-4 text-romantic/60 fill-romantic/60" />
          </div>

          {/* Copyright */}
          <div className="border-t border-primary-foreground/20 pt-6">
            <p className="text-primary-foreground/70">
              © 2025 Ayobami Edun. Made with{' '}
              <Heart className="w-4 h-4 inline text-romantic fill-romantic" />{' '}
              for our beautiful love story.
            </p>
            <p className="text-sm text-primary-foreground/50 mt-2">
              Celebrating one year of marriage and a lifetime of love to come.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};