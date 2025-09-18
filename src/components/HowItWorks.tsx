import { motion } from 'framer-motion';
import { FileText, CheckCircle, Gamepad2 } from 'lucide-react';

const steps = [
  {
    icon: FileText,
    title: 'Enter Your Details',
    description: 'Fill out the simple form with your information',
    color: 'text-coral',
  },
  {
    icon: CheckCircle,
    title: 'Show Confirmation',
    description: 'Present your confirmation at the booth',
    color: 'text-gold',
  },
  {
    icon: Gamepad2,
    title: 'Enjoy VR + Raffle',
    description: 'Experience VR fun and enter the raffle',
    color: 'text-pink-glow',
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-foreground-muted">
            Three simple steps to join the celebration
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="text-center relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-border to-transparent -translate-x-1/2 z-0" />
              )}
              
              <div className="relative z-10">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-surface border-2 border-border mb-4 ${step.color}`}>
                  <step.icon className="h-7 w-7" />
                </div>

                {/* Step Number */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-festive text-white text-sm font-bold rounded-full flex items-center justify-center">
                  {index + 1}
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-foreground-muted">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;