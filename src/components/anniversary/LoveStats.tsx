import { useState, useEffect } from 'react';
import { Heart, Calendar, Clock, Star } from 'lucide-react';

const LoveStats = () => {
  const [timeUnits, setTimeUnits] = useState({
    years: 1,
    months: 0,
    weeks: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const weddingDate = new Date('2024-09-05');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const diff = now.getTime() - weddingDate.getTime();
      
      const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
      const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
      const weeks = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24 * 7));
      const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeUnits({ years, months, weeks, days, hours, minutes, seconds });
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { icon: Calendar, label: "Years", value: timeUnits.years, color: "text-romantic" },
    { icon: Heart, label: "Months", value: Math.floor((new Date().getTime() - weddingDate.getTime()) / (1000 * 60 * 60 * 24 * 30)), color: "text-accent" },
    { icon: Star, label: "Days", value: Math.floor((new Date().getTime() - weddingDate.getTime()) / (1000 * 60 * 60 * 24)), color: "text-gold" },
    { icon: Clock, label: "Hours", value: Math.floor((new Date().getTime() - weddingDate.getTime()) / (1000 * 60 * 60)), color: "text-primary" }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-script">
            Our Love in Numbers
          </h2>
          <p className="text-muted-foreground text-lg">
            Every moment counts when you're with the one you love
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="glass-morphism rounded-3xl p-6 text-center hover:scale-105 transition-romantic">
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-romantic mb-4`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className={`text-3xl font-bold ${stat.color} mb-2 font-script`}>
                {stat.value.toLocaleString()}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Live Counter */}
        <div className="glass-morphism rounded-3xl p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-6 font-script">
            Right Now, We've Been Married For:
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-7 gap-4">
            {Object.entries(timeUnits).map(([unit, value]) => (
              <div key={unit} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-romantic font-script">
                  {value.toString().padStart(2, '0')}
                </div>
                <div className="text-sm text-muted-foreground capitalize">
                  {unit}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoveStats;