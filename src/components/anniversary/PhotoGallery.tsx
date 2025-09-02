import { useState, useEffect } from 'react';
import { Heart, Play, Pause, SkipBack, SkipForward } from 'lucide-react';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import AnimatedCard from '@/components/ui/animated-card';

interface GalleryImage {
  src: string;
  alt: string;
  title: string;
  description: string;
  backgroundSize?: string;
  backgroundPosition?: string;
  mobileBackgroundSize?: string;
  mobileBackgroundPosition?: string;
}

const galleryImages: GalleryImage[] = [
  {
    src: "/uploads/142064a0-3693-4d06-ac95-e20735109b4f.png",
    alt: "Black & White Portrait",
    title: "Timeless Love",
    description: "A moment captured in eternal black and white",
    backgroundSize: "cover",
    backgroundPosition: "center 20%",
    mobileBackgroundSize: "cover",
    mobileBackgroundPosition: "center top"
  },
  {
    src: "/uploads/21b71e50-4cc4-4dfb-b10e-c4b20db6dcae.png",
    alt: "Wedding Kiss",
    title: "The First Kiss",
    description: "Sealing our love with a sacred kiss",
    backgroundSize: "cover",
    backgroundPosition: "center",
    mobileBackgroundSize: "cover",
    mobileBackgroundPosition: "center top"
  },
  {
    src: "/uploads/ad567b47-5045-49a9-9e95-4cca519f60ad.png",
    alt: "Couple Selfie",
    title: "Sweet Moments",
    description: "Capturing joy in the simple moments together",
    backgroundSize: "cover",
    backgroundPosition: "center 50%",
    mobileBackgroundSize: "cover",
    mobileBackgroundPosition: "center top"
  },
  {
    src: "/uploads/7ec431ec-5cad-4f2b-a157-008d73bac961.png",
    alt: "Traditional Blue Attire",
    title: "Royal Heritage",
    description: "Celebrating our culture in stunning blue traditional wear",
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
    mobileBackgroundSize: "cover",
    mobileBackgroundPosition: "center"
  },
  {
    src: "/uploads/003a8244-39e4-4772-a530-eaf2cc884d6f.png",
    alt: "Blue Suit Colonnade",
    title: "Classic Elegance",
    description: "Sophistication and style in perfect harmony",
    backgroundSize: "cover",
    backgroundPosition: "center 20%",
    mobileBackgroundSize: "cover",
    mobileBackgroundPosition: "center top"
  },
  {
    src: "/uploads/d77f6edb-350e-4f53-b4fa-9bab9d47c160.png",
    alt: "Casual Couple",
    title: "Everyday Love",
    description: "Finding beauty in our casual, comfortable moments",
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
    mobileBackgroundSize: "cover",
    mobileBackgroundPosition: "center top"
  },
  {
    src: "/uploads/61b5414c-8af6-4566-8f61-7e41e9172b22.png",
    alt: "Glasses Portrait",
    title: "Intellectual Hearts",
    description: "Smart, stylish, and deeply in love",
    backgroundSize: "cover",
    backgroundPosition: "center 20%",
    mobileBackgroundSize: "cover",
    mobileBackgroundPosition: "center top"
  },
  {
    src: "/uploads/0052c0c7-9dc2-49e5-a365-d1e27b4c79cf.png",
    alt: "Guitar Session",
    title: "Music of Love",
    description: "Creating melodies together, hearts in perfect tune",
    backgroundSize: "cover",
    backgroundPosition: "center 20%",
    mobileBackgroundSize: "cover",
    mobileBackgroundPosition: "center"
  },
  {
    src: "/uploads/41686a83-5aab-4bfd-98a5-00a520ff4668.png",
    alt: "Studio Portrait",
    title: "Elegance Defined",
    description: "Dressed in elegance, hearts full of love",
    backgroundSize: "cover",
    backgroundPosition: "center 25%",
    mobileBackgroundSize: "cover",
    mobileBackgroundPosition: "center top"
  },
  {
    src: "/uploads/a35c185f-8553-4d85-9f08-fada5458163d.png",
    alt: "Traditional Blue Dress",
    title: "Cultural Grace",
    description: "Embracing tradition with grace and beauty",
    backgroundSize: "cover",
    backgroundPosition: "center 25%",
    mobileBackgroundSize: "cover",
    mobileBackgroundPosition: "center"
  },
  {
    src: "/uploads/ff894073-9fd3-42dd-9225-b7d005208dfa.png",
    alt: "Traditional Blue",
    title: "Cultural Heritage",
    description: "Honoring our roots in traditional attire",
    backgroundSize: "cover",
    backgroundPosition: "center 32%",
    mobileBackgroundSize: "cover",
    mobileBackgroundPosition: "center"
  },
  {
    src: "/uploads/36e259e9-4f13-49da-8f91-8c2e9eacd515.png",
    alt: "Wedding Embrace",
    title: "Eternal Embrace",
    description: "Holding each other close on our special day",
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
    mobileBackgroundSize: "cover",
    mobileBackgroundPosition: "center top"
  },
  {
    src: "/uploads/bf39072f-821b-4469-9f5b-4586dd942aa9.png",
    alt: "Colonnade Walk",
    title: "Walking Together",
    description: "Hand in hand through life's beautiful journey",
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
    mobileBackgroundSize: "cover",
    mobileBackgroundPosition: "center"
  },
  // {
  //   src: "/uploads/e5128947-3a30-4065-b9a6-f3fab5867559.png",
  //   alt: "Formal Colonnade",
  //   title: "Sophisticated Love",
  //   description: "Formal elegance meets timeless romance",
  //   backgroundSize: "cover",
  //   backgroundPosition: "center 30%",
  //   mobileBackgroundSize: "cover",
  //   mobileBackgroundPosition: "center"
  // },
  {
    src: "/uploads/08a89549-5595-4f74-9a4c-5869bd12e105.png",
    alt: "Wedding Ceremony",
    title: "Sacred Vows",
    description: "The moment we promised forever to each other",
    backgroundSize: "cover",
    backgroundPosition: "center 45%",
    mobileBackgroundSize: "cover",
    mobileBackgroundPosition: "center top"
  },
  {
    src: "/uploads/29b4cbb1-261b-4c35-9a77-b187bc98c978.png",
    alt: "Umbrella Romance",
    title: "Under Our Love",
    description: "Together through sunshine and rain",
    backgroundSize: "cover",
    backgroundPosition: "center 30%",
    mobileBackgroundSize: "cover",
    mobileBackgroundPosition: "center top"
  },
  {
    src: "/uploads/9d599aed-5396-4314-a55c-2961709bde0c.png",
    alt: "Courthouse Steps",
    title: "New Beginnings",
    description: "Starting our forever on solid foundations",
    backgroundSize: "cover",
    backgroundPosition: "center",
    mobileBackgroundSize: "cover",
    mobileBackgroundPosition: "center"
  }
];

const loveQuotes = [
  "Love is not just looking at each other, it's looking in the same direction.",
  "A successful marriage requires falling in love many times, always with the same person.",
  "The best thing to hold onto in life is each other.",
  "Love is a friendship set to music.",
  "In all the world, there is no heart for me like yours.",
  "You are my today and all of my tomorrows.",
  "Being deeply loved gives you strength, while loving deeply gives you courage.",
  "Love doesn't make the world go round. Love is what makes the ride worthwhile.",
  "Two souls with but a single thought, two hearts that beat as one.",
  "The greatest happiness is to know that someone loves you for who you are.",
  "Every love story is beautiful, but ours is my favorite.",
  "You are the missing piece I never knew my heart needed.",
  "In your arms, I have found my home, my peace, my forever.",
  "Our love is a journey that started at forever and ends at never.",
  "With you, every moment is a treasure, every day a gift.",
  "You are not just my love, you are my life, my heart, my soul.",
  "Together we are unstoppable, apart we are incomplete."
];

export const PhotoGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const currentImage = galleryImages[currentIndex];
  const currentQuote = loveQuotes[currentIndex];

  const handlePrevious = () => {
    setCurrentIndex((prev) => prev === 0 ? galleryImages.length - 1 : prev - 1);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="py-20 bg-gradient-elegant">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-script">
            Our Journey in Pictures
          </h2>
          <p className="text-white/80 text-lg">
            A visual story of our love, captured in beautiful moments
          </p>
        </div>

        {/* Animated Photo Display */}
        <AnimatedCard delay={200}>
          <div className="relative mb-12">
            <div className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-glow">
              {/* Background Image */}
              <div
                className="absolute inset-0 transition-all duration-1000"
                style={{
                  backgroundImage: `url(${currentImage.src})`,
                  backgroundSize: window.innerWidth <= 768
                    ? currentImage.mobileBackgroundSize || currentImage.backgroundSize || 'cover'
                    : currentImage.backgroundSize || 'cover',
                  backgroundPosition: window.innerWidth <= 768
                    ? currentImage.mobileBackgroundPosition || currentImage.backgroundPosition || 'center'
                    : currentImage.backgroundPosition || 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="glass-morphism rounded-2xl p-6">
                  <h3 className="text-2xl font-bold text-white mb-2 font-script">
                    {currentImage.title}
                  </h3>
                  <p className="text-white/90 mb-4">
                    {currentImage.description}
                  </p>
                  <blockquote className="text-lg text-white/80 italic font-serif border-l-4 border-romantic pl-4">
                    "{currentQuote}"
                  </blockquote>
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 glass-morphism p-3 rounded-full hover:bg-white/20 transition-romantic"
              >
                <SkipBack className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 glass-morphism p-3 rounded-full hover:bg-white/20 transition-romantic"
              >
                <SkipForward className="w-6 h-6 text-white" />
              </button>
            </div>

            {/* Play/Pause Controls */}
            <div className="flex justify-center items-center mt-6 gap-4">
              <EnhancedButton
                variant="glass"
                size="icon"
                onClick={togglePlayPause}
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5 text-white" />
                ) : (
                  <Play className="w-5 h-5 text-white" />
                )}
              </EnhancedButton>

              {/* Progress Indicators */}
              <div className="flex gap-2">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-romantic ${index === currentIndex
                      ? 'bg-romantic shadow-glow'
                      : 'bg-white/30 hover:bg-white/50'
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </AnimatedCard>

        {/* Thumbnail Gallery */}
        <div className="grid grid-cols-4 md:grid-cols-8 gap-2 md:gap-4">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`relative aspect-square rounded-xl overflow-hidden transition-romantic transform hover:scale-105 ${index === currentIndex
                ? 'ring-4 ring-romantic shadow-glow'
                : 'hover:shadow-soft'
                }`}
            >
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url(${image.src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              />
              {index === currentIndex && (
                <div className="absolute inset-0 bg-romantic/20 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white fill-white" />
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};