import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/enhanced-button';
import { Instagram, Facebook, DollarSign, GamepadIcon, Star } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { useToast } from '@/hooks/use-toast';

const flUsps = [
  {
    icon: DollarSign,
    text: 'Smart Money Habits',
    color: 'bg-primary/20 text-primary border-primary/30',
    iconColor: 'text-primary',
  },
  {
    icon: GamepadIcon,
    text: 'Fun Learning Games',
    color: 'bg-pink-glow/20 text-pink-glow border-pink-glow/30',
    iconColor: 'text-pink-glow',
  },
  {
    icon: Star,
    text: 'Future-Ready Skills',
    color: 'bg-pink-glow/20 text-pink-glow border-pink-glow/30',
    iconColor: 'text-pink-glow',
  },
];

const NewThankYou = () => {
  // Scroll 1: MCQ state
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showReveal, setShowReveal] = useState(false);

  const { toast } = useToast();

  useEffect(() => {
    document.title = 'Thank You - Financial Literacy Program | Coral Academy';
    // No-op: we will link this to the earlier home page form entry
  }, []);

  return (
    <div className="min-h-screen relative">
      <Navbar />
      
      {/* Scroll 1: Hero + MCQ + USPs */}
      <section className="relative pt-24 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-md">
          {/* Eyebrow */}
          <div className="w-full mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
              Financial Literacy Class · Ages 8–13
            </span>
          </div>

          {/* H1 + Subhead */}
          <h1 className="text-3xl font-bold leading-snug mb-2">
            Could your child explain compound interest like this?
          </h1>
          <p className="text-sm text-muted-foreground mb-4">
            After a few fun sessions, they will—confidently.
          </p>

          {/* Class Image */}
          <div className="mb-4">
            <div className="w-full rounded-lg overflow-hidden border border-border bg-card">
              <img
                src="/placeholder.svg"
                alt="Kids learning money skills in an interactive Financial Literacy session."
                className="w-full h-[200px] object-cover"
              />
            </div>
          </div>

          {/* Mini Challenge (MCQ) */}
          <div className="mb-4">
            <p className="text-xs font-medium text-muted-foreground mb-2">Mini challenge (tap to answer)</p>
            <p className="text-sm font-semibold mb-3">
              If you invest $1,000 for 10 years, which ends up largest?
            </p>

            <div className="flex flex-col gap-2" role="radiogroup" aria-label="Compound interest question">
              {[
                { key: 'A', text: '8% simple interest each year' },
                { key: 'B', text: '7% compound interest each year' },
                { key: 'C', text: '6% compound interest + $10/mo added' },
              ].map((opt) => {
                const selected = selectedOption === opt.key;
                return (
                  <button
                    key={opt.key}
                    type="button"
                    onClick={() => { setSelectedOption(opt.key); setShowReveal(true); }}
                    aria-pressed={selected}
                    className={
                      `w-full text-left px-3 py-2 rounded-full border text-sm ` +
                      (selected
                        ? 'bg-premium-blue/10 border-premium-blue text-premium-blue'
                        : 'bg-background border-border hover:border-premium-blue/40')
                    }
                  >
                    <span className="font-semibold mr-2">{opt.key}.</span>{opt.text}
                  </button>
                );
              })}
            </div>

            {showReveal && (
              <div className="mt-3 text-sm rounded-md border border-primary/20 bg-primary/5 p-3">
                <p className="font-semibold text-primary mb-1">Correct: C.</p>
                <p className="text-foreground">
                  Consistent deposits + compounding beat a higher static rate.
                </p>
                <p className="text-muted-foreground mt-1">
                  (8% simple ≈ $1,800; 7% compound ≈ $1,967; 6% compound + $10/mo ≈ $3,458.)
                </p>
                <p className="text-xs text-muted-foreground mt-1">Education only, not financial advice.</p>
              </div>
            )}
          </div>

          {/* USPs row (single line if space) */}
          <div className="mb-3">
            <div className="flex flex-wrap justify-center gap-2">
              {flUsps.map((usp, index) => (
                <div
                  key={index}
                  className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium ${usp.color}`}
                >
                  <usp.icon className={`h-4 w-4 ${usp.iconColor}`} />
                  <span>{usp.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA hint */}
          <p className="text-center text-xs text-muted-foreground">Scroll to join the waitlist ↓</p>
        </div>
      </section>

      {/* Scroll 2: Join Waitlist */}
      <section className="relative pt-6 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-md">
          <h2 className="text-xl font-semibold mb-1">Join the Financial Literacy Class Waitlist</h2>
          <p className="text-sm text-muted-foreground mb-4">We’ll email dates & priority slots. Opt out anytime.</p>

          <div className="space-y-3" aria-live="polite">
            <Button
              type="button"
              className="w-full h-10 bg-primary hover:bg-primary/90 text-white font-medium"
              onClick={() => {
                try { localStorage.setItem('flWaitlistJoined', 'true'); } catch {}
                toast({
                  title: '🎉 Thanks! You’re on the Financial Literacy waitlist.',
                  description: 'We’ll send session dates and early-access slots soon.',
                  duration: 10000,
                });
              }}
            >
              Join Waitlist
            </Button>
            <p className="text-xs text-muted-foreground text-center">We’ll only send class updates—no spam.</p>
          </div>

          {/* Secondary links */}
          <div className="mt-4 flex items-center justify-center gap-4 text-sm">
            <a href="#" className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground">
              <Instagram className="h-4 w-4" /> Instagram
            </a>
            <a href="#" className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground">
              <Facebook className="h-4 w-4" /> Facebook
            </a>
            <a href="https://www.coralacademy.com" className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground" rel="noopener noreferrer">
              Visit Coral Academy
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewThankYou;