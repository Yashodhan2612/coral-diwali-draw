import { Users, Brain, Award, Heart } from 'lucide-react';

const usps = [
  {
    icon: Users,
    text: 'Live online classes (Ages 8–13)',
    color: 'bg-coral/20 dark:bg-coral/30 text-coral-foreground border-coral/30 dark:border-coral/40',
    iconColor: 'text-coral',
  },
  {
    icon: Brain,
    text: 'AI · Financial Literacy · Debate · Coding',
    color: 'bg-gold/20 dark:bg-gold/30 text-gold-foreground border-gold/30 dark:border-gold/40',
    iconColor: 'text-gold',
  },
  {
    icon: Award,
    text: 'Vetted teachers',
    color: 'bg-pink-glow/20 dark:bg-pink-glow/30 text-pink-glow-foreground border-pink-glow/30 dark:border-pink-glow/40',
    iconColor: 'text-pink-glow',
  },
  {
    icon: Heart,
    text: 'Trusted By Parents',
    color: 'bg-accent/20 dark:bg-accent/30 text-accent-foreground border-accent/30 dark:border-accent/40',
    iconColor: 'text-accent',
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
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ring-1 ring-border/50 dark:ring-border/60 text-sm font-medium transition-all duration-200 hover:scale-105 opacity-100 ${usp.color}`}
              style={{ opacity: 1, transform: 'scale(1)' }}
            >
              <usp.icon className={`h-5 w-5 ${usp.iconColor} drop-shadow-[0_0_6px_currentColor]`} />
              <span className="[text-shadow:0_0_1px_rgba(0,0,0,0.12)] dark:[text-shadow:0_0_1px_rgba(255,255,255,0.06)]">{usp.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default USPChips;