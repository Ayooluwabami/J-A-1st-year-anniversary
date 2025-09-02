import { useState, useEffect } from 'react';
import { Heart, Calendar, Sparkles } from 'lucide-react';
import { EnhancedButton } from '@/components/ui/enhanced-button';

interface HeroImage {
  src: string;
  alt: string;
  backgroundSize?: string;
  backgroundPosition?: string;
  mobileBackgroundSize?: string;
  mobileBackgroundPosition?: string;
}

const heroImages: HeroImage[] = [
  {
    src: "/uploads/276a374a-2371-4d29-b64b-da1c311a9f49.png",
    alt: "Joseph & Ayobami Wedding Day",
    backgroundSize: "cover",
    backgroundPosition: "center 30%",
    mobileBackgroundSize: "cover",
    mobileBackgroundPosition: "center top"
  },
  {
    src: "/uploads/3f4cc98c-f210-432a-b840-defc0e94841f.png",
    alt: "Traditional Attire",
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
    mobileBackgroundSize: "cover",
    mobileBackgroundPosition: "center"
  },
  {
    src: "/uploads/36e259e9-4f13-49da-8f91-8c2e9eacd515.png",
    alt: "Wedding Embrace",
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
    mobileBackgroundSize: "cover",
    mobileBackgroundPosition: "center top"
  },
  {
    src: "/uploads/7ec431ec-5cad-4f2b-a157-008d73bac961.png",
    alt: "Traditional Blue Attire",
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
    mobileBackgroundSize: "cover",
    mobileBackgroundPosition: "center"
  },
  {
    src: "/uploads/61b5414c-8af6-4566-8f61-7e41e9172b22.png",
    alt: "Glasses Portrait",
    backgroundSize: "cover",
    backgroundPosition: "center 30%",
    mobileBackgroundSize: "cover",
    mobileBackgroundPosition: "center top"
  },
  {
    src: "/uploads/bf39072f-821b-4469-9f5b-4586dd942aa9.png",
    alt: "Elegant Couple",
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
    mobileBackgroundSize: "cover",
    mobileBackgroundPosition: "center 50%"
  },
  {
    src: "/uploads/ff894073-9fd3-42dd-9225-b7d005208dfa.png",
    alt: "Traditional Blue",
    backgroundSize: "cover",
    backgroundPosition: "center 32%",
    mobileBackgroundSize: "cover",
    mobileBackgroundPosition: "center"
  }
];

export const AnniversaryHero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentImage = heroImages[currentImageIndex];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Images */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-70' : 'opacity-0'
              }`}
            style={{
              backgroundImage: `url(${image.src})`,
              backgroundSize: window.innerWidth <= 768
                ? image.mobileBackgroundSize || image.backgroundSize || 'cover'
                : image.backgroundSize || 'cover',
              backgroundPosition: window.innerWidth <= 768
                ? image.mobileBackgroundPosition || image.backgroundPosition || 'center'
                : image.backgroundPosition || 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
        ))}
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-romantic/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Floating Hearts */}
        <div className="absolute -top-10 -left-10 animate-float">
          <Heart className="w-8 h-8 text-romantic fill-romantic opacity-60" />
        </div>
        <div className="absolute -top-5 -right-10 animate-float" style={{ animationDelay: '2s' }}>
          <Sparkles className="w-10 h-10 text-gold opacity-80" />
        </div>
        <div className="absolute -bottom-10 left-1/4 animate-float" style={{ animationDelay: '4s' }}>
          <Heart className="w-6 h-6 text-romantic fill-romantic opacity-40" />
        </div>

        {/* Main Content */}
        <div className="animate-fade-in-up">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 font-script animate-heart-beat">
              Joseph & Ayobami
            </h1>
            <div className="flex items-center justify-center gap-2 text-white/90 text-xl md:text-2xl mb-6">
              <Calendar className="w-6 h-6" />
              <span className="font-serif">September 5th • First Anniversary</span>
            </div>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Celebrating one beautiful year of love, laughter, and endless adventures together
            </p>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <EnhancedButton
              variant="romantic"
              size="lg"
              onClick={() => document.getElementById('love-story')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Heart className="w-5 h-5" />
              Our Love Story
            </EnhancedButton>
            <EnhancedButton
              variant="glass"
              size="lg"
              onClick={() => document.getElementById('wishes')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Sparkles className="w-5 h-5" />
              Leave A Wish
            </EnhancedButton>
          </div>
        </div>

        {/* Anniversary Date Counter */}
        <div className="mt-12 glass-morphism rounded-2xl p-6 animate-scale-in max-w-md mx-auto">
          <h3 className="text-white font-semibold mb-4 text-lg">One Year of Love</h3>
          <div className="grid grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-romantic">365</div>
              <div className="text-white/70 text-sm">Days</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gold">52</div>
              <div className="text-white/70 text-sm">Weeks</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-romantic">12</div>
              <div className="text-white/70 text-sm">Months</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gold">1</div>
              <div className="text-white/70 text-sm">Year</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};