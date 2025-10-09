import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/enhanced-button';
import { Instagram, Facebook, Globe, DollarSign, GamepadIcon, Star, CheckCircle, TrendingUp, Wallet, ShoppingCart, Landmark, ChevronDown } from 'lucide-react';
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
          {/* Left column: Hero + Learning Outcomes (desktop only shows outcomes here) */}
          <div className="max-w-xl mx-auto text-center">
            {/* Step 2 Heading */}
            <div className="w-full mb-8">
              <div className="flex items-start gap-3 justify-center mb-2">
                <ChevronDown className="h-6 w-6 text-primary mt-1 animate-bounce" />
                <h2 className="text-xl md:text-2xl font-bold text-foreground">
                  Step 2: Choose an option below to complete your Diwali event entry.
                </h2>
              </div>
              <p className="text-sm text-muted-foreground italic mb-4">
                A confirmation email will be sent once done!
              </p>
              <div className="w-16 h-px bg-border mx-auto"></div>
            </div>

            {/* H1 + Subhead */}
            <h1 className="text-xl md:text-2xl font-bold leading-snug mb-2">
              Coming soon: <span className="text-primary">Finance 101</span><br />
              <span className="text-sm md:text-base font-normal text-muted-foreground">
                Designed and Backed by <span className="relative inline-block">
                  Stanford Alums & Professors
                  <svg className="absolute left-[5%] -bottom-1 w-[90%]" viewBox="0 0 300 10" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 6 Q150 0, 300 6" stroke="hsl(var(--muted-foreground))" strokeWidth="1.5" fill="none" opacity="0.5" strokeLinecap="round"/>
                  </svg>
                </span>
              </span>
            </h1>
            <p className="text-sm md:text-base text-muted-foreground mb-4">
              Be first to know when enrollment opens—limited spots.
            </p>

            {/* Learning Outcomes Section - hidden on mobile, shown on desktop */}
            <div className="hidden lg:block mt-8 rounded-xl border border-border bg-card/50 p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-semibold text-center mb-4">
                What your child will learn in our Financial Literacy Curriculum
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {/* Learning Outcome 1 */}
                <div className="flex items-center gap-3 p-3 rounded-lg transition-colors">
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                    <ShoppingCart className="h-5 w-5" />
                  </div>
                  <p className="text-sm text-foreground">
                    Understand how choices, prices, and money shape our economy.
                  </p>
                </div>

                {/* Learning Outcome 2 */}
                <div className="flex items-center gap-3 p-3 rounded-lg transition-colors">
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                    <Wallet className="h-5 w-5" />
                  </div>
                  <p className="text-sm text-foreground">
                    Develop smart budgeting, saving, and responsible spending habits.
                  </p>
                </div>

                {/* Learning Outcome 3 */}
                <div className="flex items-center gap-3 p-3 rounded-lg transition-colors">
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                    <Landmark className="h-5 w-5" />
                  </div>
                  <p className="text-sm text-foreground">
                    Learn to borrow, invest, and manage money wisely.
                  </p>
                </div>

                {/* Learning Outcome 4 */}
                <div className="flex items-center gap-3 p-3 rounded-lg transition-colors">
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                    <TrendingUp className="h-5 w-5" />
                  </div>
                  <p className="text-sm text-foreground">
                    Discover how investing early and compounding multiply your returns.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column: Join Waitlist panel */}
          <div className="mt-6 lg:mt-0 lg:border-l border-border lg:pl-12 mx-auto max-w-xl">
            <div className="rounded-xl border border-primary/20 bg-card p-4 md:p-6 text-center">
              <h2 className="text-lg md:text-xl font-semibold mb-2">Interested in joining the waitlist for our upcoming Finance 101 class?</h2>
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
                      title: "Thanks for your response!",
                      description: "Visit www.coralacademy.com to discover more exciting classes for your child. 🌟",
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
                      title: "Thanks for your response!",
                      description: "Visit www.coralacademy.com to discover more exciting classes for your child. 🌟",
                      duration: 10000,
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

            {/* Learning Outcomes Section - shown on mobile only */}
            <div className="lg:hidden mt-8 rounded-xl border border-border bg-card/50 p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-semibold text-center mb-4">
                What your child will learn in our Financial Literacy Curriculum
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {/* Learning Outcome 1 */}
                <div className="flex items-center gap-3 p-3 rounded-lg transition-colors">
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                    <ShoppingCart className="h-5 w-5" />
                  </div>
                  <p className="text-sm text-foreground">
                    Understand how choices, prices, and money shape our economy.
                  </p>
                </div>

                {/* Learning Outcome 2 */}
                <div className="flex items-center gap-3 p-3 rounded-lg transition-colors">
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                    <Wallet className="h-5 w-5" />
                  </div>
                  <p className="text-sm text-foreground">
                    Develop smart budgeting, saving, and responsible spending habits.
                  </p>
                </div>

                {/* Learning Outcome 3 */}
                <div className="flex items-center gap-3 p-3 rounded-lg transition-colors">
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                    <Landmark className="h-5 w-5" />
                  </div>
                  <p className="text-sm text-foreground">
                    Learn to borrow, invest, and manage money wisely.
                  </p>
                </div>

                {/* Learning Outcome 4 */}
                <div className="flex items-center gap-3 p-3 rounded-lg transition-colors">
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                    <TrendingUp className="h-5 w-5" />
                  </div>
                  <p className="text-sm text-foreground">
                    Discover how investing early and compounding multiply your returns.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewThankYou;
