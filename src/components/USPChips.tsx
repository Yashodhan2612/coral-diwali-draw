import { motion } from 'framer-motion';
import { Users, Brain, Award, Heart } from 'lucide-react';

const usps = [
  {
    icon: Users,
    text: 'Live online classes (8–13)',
    color: 'bg-coral/10 text-coral border-coral/20',
  },
  {
    icon: Brain,
    text: 'AI · Money · Debate · Coding',
    color: 'bg-gold/10 text-gold-foreground border-gold/20',
  },
  {
    icon: Award,
    text: 'Vetted teachers',
    color: 'bg-pink-glow/10 text-pink-glow border-pink-glow/20',
  },
  {
    icon: Heart,
    text: 'Parent-trusted',
    color: 'bg-accent/10 text-accent border-accent/20',
  },
];

const USPChips = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {usps.map((usp, index) => (
            <motion.div
              key={index}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium transition-all duration-200 hover:scale-105 ${usp.color}`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <usp.icon className="h-4 w-4" />
              <span>{usp.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default USPChips;