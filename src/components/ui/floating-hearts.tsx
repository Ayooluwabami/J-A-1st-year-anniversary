import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

interface FloatingHeart {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<FloatingHeart[]>([]);

  useEffect(() => {
    const generateHearts = () => {
      const newHearts: FloatingHeart[] = [];
      for (let i = 0; i < 6; i++) {
        newHearts.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 16 + 12,
          duration: Math.random() * 3 + 4,
          delay: Math.random() * 2
        });
      }
      setHearts(newHearts);
    };

    generateHearts();
    const interval = setInterval(generateHearts, 8000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-float opacity-20"
          style={{
            left: `${heart.x}%`,
            top: `${heart.y}%`,
            animationDuration: `${heart.duration}s`,
            animationDelay: `${heart.delay}s`,
          }}
        >
          <Heart 
            className="text-romantic fill-romantic" 
            size={heart.size}
          />
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;