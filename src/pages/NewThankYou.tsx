import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/enhanced-button';
import { Instagram, Facebook, Globe, DollarSign, GamepadIcon, Star } from 'lucide-react';
import Navbar from '@/components/Navbar';
import flImage from '@/assets/financial-literacy-class.jpg';
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
      
      {/* Responsive layout: stacks on mobile, 2-column on desktop */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl lg:grid lg:grid-cols-2 lg:gap-12">
          {/* Left column: Hero + Image + MCQ + USPs */}
          <div className="max-w-xl">
            {/* Eyebrow */}
            <div className="w-full mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                Financial Literacy Class · Ages 8–13
              </span>
            </div>

            {/* H1 + Subhead */}
            <h1 className="text-3xl md:text-4xl font-bold leading-snug mb-2">
              Could your child explain compound interest like this?
            </h1>
            <p className="text-sm md:text-base text-muted-foreground mb-4">
              After a few fun sessions, they will—confidently.
            </p>

            {/* Class Image */}
            <div className="mb-4">
              <div className="w-full rounded-lg overflow-hidden border border-border bg-card">
                <img
                  src={flImage}
                  alt="Kids learning money skills in an interactive Financial Literacy session."
                  className="w-full h-[200px] md:h-64 object-cover"
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
                  const isSelected = selectedOption === opt.key;
                  const isLocked = selectedOption !== null;
                  const isCorrect = selectedOption === 'C';
                  const isThisCorrect = opt.key === 'C';
                  const wrongChoice = isLocked && isSelected && !isCorrect;
                  const correctChoice = isLocked && isThisCorrect;
                  return (
                    <button
                      key={opt.key}
                      type="button"
                      onClick={() => {
                        if (isLocked) return;
                        setSelectedOption(opt.key);
                        setShowReveal(true);
                      }}
                      aria-pressed={isSelected}
                      disabled={isLocked && !isSelected}
                      className={
                        `w-full text-left px-3 py-2 rounded-full border text-sm transition-colors ` +
                        (correctChoice
                          ? 'bg-green-50 dark:bg-green-900/20 border-green-500 text-green-700 dark:text-green-400'
                          : wrongChoice
                            ? 'bg-red-50 dark:bg-red-900/20 border-red-500 text-red-700 dark:text-red-400'
                            : isSelected
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
                <div className={`mt-3 text-sm rounded-md p-3 border ` + (selectedOption === 'C' ? 'border-green-500 bg-green-50 dark:bg-green-900/20' : 'border-red-500 bg-red-50 dark:bg-red-900/20')}>
                  {selectedOption === 'C' ? (
                    <>
                      <p className="font-semibold text-green-700 dark:text-green-400 mb-1">Correct Answer</p>
                      <p className="text-foreground">Consistent deposits + compounding beat a higher static rate.</p>
                    </>
                  ) : (
                    <>
                      <p className="font-semibold text-red-700 dark:text-red-400 mb-1">Wrong Answer</p>
                      <p className="text-foreground">Consistent deposits + compounding beat a higher static rate.</p>
                    </>
                  )}
                  <p className="text-muted-foreground mt-1">
                    (8% simple ≈ $1,800; 7% compound ≈ $1,967; 6% compound + $10/mo ≈ $3,458.)
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">Education only, not financial advice.</p>
                </div>
              )}
            </div>

            {/* USPs row (single line if space) */}
            <div className="mb-3">
              <div className="flex flex-wrap lg:justify-start justify-center gap-2">
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

            {/* CTA hint on mobile only */}
            <p className="text-center text-xs text-muted-foreground lg:hidden">Scroll to join the waitlist ↓</p>
          </div>

          {/* Right column: Join Waitlist panel */}
          <div className="mt-6 lg:mt-0 lg:border-l border-border lg:pl-12">
            <div className="rounded-xl border border-primary/20 bg-card p-4 md:p-6">
              <h2 className="text-lg md:text-xl font-semibold mb-1">Join the Financial Literacy Class Waitlist</h2>
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
                  <Globe className="h-4 w-4" /> Visit Coral Academy
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewThankYou;