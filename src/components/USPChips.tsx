import { Users, Brain, Award, Heart } from 'lucide-react';

const usps = [
  {
    icon: Users,
    text: 'Live online classes (Ages 8–13)',
    color: 'bg-coral/15 dark:bg-coral/25 text-coral border-coral/30 dark:border-coral/40',
  },
  {
    icon: Brain,
    text: 'AI · Financial Literacy · Debate · Coding',
    color: 'bg-gold/15 dark:bg-gold/25 text-gold border-gold/30 dark:border-gold/40',
  },
  {
    icon: Award,
    text: 'Vetted teachers',
    color: 'bg-pink-glow/15 dark:bg-pink-glow/25 text-pink-glow border-pink-glow/30 dark:border-pink-glow/40',
  },
  {
    icon: Heart,
    text: 'Trusted By Parents',
    color: 'bg-accent/15 dark:bg-accent/25 text-accent border-accent/30 dark:border-accent/40',
  },
];

const USPChips = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-wrap justify-center gap-4" data-testid="usp-chips">
          {usps.map((usp, index) => (
            <div
              key={index}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium transition-all duration-200 hover:scale-105 opacity-100 ${usp.color}`}
              style={{ opacity: 1, transform: 'scale(1)' }}
            >
              <usp.icon className="h-4 w-4" />
              <span>{usp.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default USPChips;