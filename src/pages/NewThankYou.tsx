import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/enhanced-button';
import { Instagram, Facebook, Globe, DollarSign, GamepadIcon, Star, CheckCircle } from 'lucide-react';
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
  const [waitlistSelected, setWaitlistSelected] = useState(false);

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
          <div className="max-w-xl mx-auto text-center">
            {/* Thank You Message */}
            <div className="w-full mb-6">
              <div className="flex items-center justify-center gap-2 mb-4">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <p className="text-lg font-medium text-foreground">Thanks for your participation</p>
              </div>
              <div className="w-16 h-px bg-border mx-auto"></div>
            </div>

            {/* H1 + Subhead */}
            <h1 className="text-3xl md:text-4xl font-bold leading-snug mb-2">
              Up next: our <span className="text-primary">Financial Literacy Curriculum</span>—designed to make learning money skills fun and lasting.
            </h1>
            <p className="text-sm md:text-base text-muted-foreground mb-4">
              Be first to know when enrollment opens—limited spots.
            </p>
          </div>

          {/* Right column: Join Waitlist panel */}
          <div className="mt-6 lg:mt-0 lg:border-l border-border lg:pl-12 mx-auto max-w-xl">
            <div className="rounded-xl border border-primary/20 bg-card p-4 md:p-6 text-center">
              <h2 className="text-lg md:text-xl font-semibold mb-2">Would you like to join the Financial Literacy Curriculum waitlist?</h2>
              <p className="text-sm text-muted-foreground mb-6">We'll email class dates and priority slots. You can opt out anytime.</p>

              <div className="space-y-3" aria-live="polite">
                <Button
                  type="button"
                  variant="outline"
                  disabled={waitlistSelected}
                  className="w-full h-11 border-primary/30 text-primary hover:bg-primary hover:text-white font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={() => {
                    setWaitlistSelected(true);
                    try { localStorage.setItem('flWaitlistJoined', 'true'); } catch {}
                    toast({
                      title: "🎉 Thanks! You're on the Financial Literacy waitlist.",
                      description: "We'll send session dates and early-access slots soon.",
                      duration: 10000,
                    });
                  }}
                >
                  Yes! Count me in
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  disabled={waitlistSelected}
                  className="w-full h-11 border-red-200 text-foreground hover:text-red-600 hover:border-red-300 hover:bg-transparent font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={() => {
                    setWaitlistSelected(true);
                    toast({
                      title: 'No problem!',
                      description: 'You can always join later if you change your mind.',
                      duration: 5000,
                    });
                  }}
                >
                  No, not interested
                </Button>
                <p className="text-xs text-muted-foreground text-center pt-2">We'll only send class updates—no spam.</p>
              </div>

              {/* Secondary links */}
              <div className="mt-4 flex items-center justify-center gap-4 text-sm">
                <a href="https://www.coralacademy.com" className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground" rel="noopener noreferrer">
                  <Globe className="h-4 w-4" /> Visit Coral Academy
                </a>
                <a href="#" className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground">
                  <Instagram className="h-4 w-4" /> Instagram
                </a>
                <a href="#" className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground">
                  <Facebook className="h-4 w-4" /> Facebook
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
