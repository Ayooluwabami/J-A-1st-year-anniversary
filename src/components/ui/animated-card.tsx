import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  hover?: boolean;
}

const AnimatedCard = ({ children, className, delay = 0, hover = true }: AnimatedCardProps) => {
  return (
    <div
      className={cn(
        "opacity-0 animate-fade-in-up",
        hover && "hover:scale-105 transition-romantic",
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedCard;