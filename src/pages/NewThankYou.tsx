import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/enhanced-button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { ExternalLink, Instagram, Facebook, DollarSign, GamepadIcon, Star } from 'lucide-react';
import Navbar from '@/components/Navbar';

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
  const [waitlistChecked, setWaitlistChecked] = useState(false);

  useEffect(() => {
    // Update page title for SEO
    document.title = 'Thank You - Financial Literacy Program | Coral Academy';
    
    // Optional: Track page view or other analytics
    console.log('Thank you page viewed');
  }, []);

  return (
    <div className="min-h-screen relative">
      <Navbar />
      
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* FL Class Banner - Mobile Optimized */}
            <div className="mb-8" data-testid="thankyou-fl-banner">
              <motion.div
                className="w-full max-w-sm mx-auto mb-6"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2, type: "spring", bounce: 0.4 }}
              >
                {/* FL Class Banner - 320x50 style for mobile */}
                <div className="w-full h-12 sm:h-16 rounded-lg overflow-hidden bg-primary/10 flex items-center justify-center border-2 border-primary/20">
                  <div className="text-center">
                    <div className="flex items-center gap-2 text-sm sm:text-base font-semibold text-primary">
                      <span>🏦💡</span>
                      <span>Financial Literacy Class</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="text-center">
                <p className="text-lg font-semibold text-primary mb-2">Coral Academy's</p>
                <h1 className="text-hero mb-6">
                  Financial Literacy for Kids{' '}
                  <span className="text-primary">(8–13)</span>
                </h1>
              </div>
            </div>

            {/* 3 USP Chips - Similar to Home Page */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              data-testid="thankyou-fl-usps"
            >
              <div className="flex flex-wrap justify-center gap-4">
                {flUsps.map((usp, index) => (
                  <div
                    key={index}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ring-1 ring-border/50 text-sm font-medium transition-all duration-200 hover:scale-105 ${usp.color}`}
                  >
                    <usp.icon className={`h-5 w-5 ${usp.iconColor}`} />
                    <span>{usp.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Waitlist Checkbox */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              data-testid="thankyou-fl-waitlist"
            >
              <div className="flex items-center justify-center gap-3 p-6 bg-primary/5 border border-primary/20 rounded-xl max-w-md mx-auto">
                <Checkbox
                  id="waitlist"
                  checked={waitlistChecked}
                  onCheckedChange={(checked) => setWaitlistChecked(checked as boolean)}
                  className="shrink-0"
                />
                <Label htmlFor="waitlist" className="cursor-pointer font-medium">
                  Add me to the Financial Literacy class waitlist
                </Label>
              </div>
            </motion.div>

            {/* Final Thank-You */}
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <div className="bg-primary/10 border border-primary/20 rounded-xl p-8 max-w-2xl mx-auto">
                <div className="text-4xl mb-4">🙏</div>
                <h2 className="text-2xl font-bold mb-4 text-primary">Thanks for confirming!</h2>
                <p className="text-foreground-muted">
                  We'll be in touch with class updates and event details. 
                  {waitlistChecked && ' You\'ve been added to our Financial Literacy waitlist!'}
                </p>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              {/* Primary CTA */}
              <div className="mb-8">
                <Button
                  variant="default"
                  size="xl"
                  className="min-w-48"
                  asChild
                >
                  <a href="https://www.coralacademy.com" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-5 w-5" />
                    Visit Coral Academy
                  </a>
                </Button>
              </div>

              {/* Secondary Social CTAs */}
              <div className="space-y-4">
                <p className="text-foreground-muted">Follow us for updates:</p>
                <div className="flex justify-center gap-4">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full hover:bg-primary/10 hover:border-primary/30 hover:text-primary transition-all duration-200"
                    asChild
                  >
                    <a 
                      href="#" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="Follow us on Instagram"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full hover:bg-pink-glow/10 hover:border-pink-glow/30 hover:text-pink-glow transition-all duration-200"
                    asChild
                  >
                    <a 
                      href="#" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="Follow us on Facebook"
                    >
                      <Facebook className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default NewThankYou;