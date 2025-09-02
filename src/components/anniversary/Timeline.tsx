import { Heart, MapPin, Calendar, Diamond, Church } from 'lucide-react';

const Timeline = () => {
  const milestones = [
    {
      date: "September 5, 2024",
      title: "Our Wedding Day",
      description: "The day we became one, surrounded by love, joy, and the promise of forever",
      icon: Church,
      color: "bg-primary"
    },
    {
      date: "Forever",
      title: "Our Future",
      description: "Every day ahead is a new chapter in our beautiful love story",
      icon: Heart,
      color: "bg-romantic"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-script">
            Our Love Timeline
          </h2>
          <p className="text-muted-foreground text-lg">
            The beautiful journey that led us to this moment
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-elegant rounded-full"></div>
          
          {milestones.map((milestone, index) => (
            <div key={index} className={`relative flex items-center mb-12 ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}>
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                <div className={`w-16 h-16 ${milestone.color} rounded-full flex items-center justify-center shadow-glow`}>
                  <milestone.icon className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className={`w-full md:w-5/12 ${
                index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'
              } mt-8 md:mt-0`}>
                <div className="glass-morphism rounded-2xl p-6 hover:scale-105 transition-romantic">
                  <div className="text-sm text-muted-foreground mb-2 font-medium">
                    {milestone.date}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 font-script">
                    {milestone.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {milestone.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;