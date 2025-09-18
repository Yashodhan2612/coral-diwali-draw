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
    <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4" data-testid="howitworks-heading">How It Works</h2>
          <p className="text-lg text-foreground-muted">
            Three simple steps to join the celebration
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="text-center relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-border to-transparent -translate-x-1/2 z-0" />
              )}
              
              <div className="relative z-10">
                {/* Icon with Step Number overlayed */}
                <div className={`relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-surface border-2 border-border mb-4 ${step.color}`}>
                  <step.icon className="h-7 w-7" />
                  <div className="absolute -top-1.5 -right-1.5 w-7 h-7 bg-gradient-festive text-white text-[12px] font-bold rounded-full flex items-center justify-center shadow-sm ring-2 ring-background">
                    {index + 1}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-foreground-muted">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;