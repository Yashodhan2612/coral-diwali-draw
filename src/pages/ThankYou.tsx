import { motion } from 'framer-motion';
import { Button } from '@/components/ui/enhanced-button';
import { ExternalLink, Instagram, Facebook } from 'lucide-react';
import FestiveBackground from '@/components/FestiveBackground';
import Navbar from '@/components/Navbar';
import { useEffect } from 'react';

const ThankYou = () => {
  useEffect(() => {
    // Update page title for SEO
    document.title = 'Thank You - Diwali Raffle Entry Confirmed | Coral Academy';
    
    // Optional: Track page view or other analytics
    console.log('Thank you page viewed');
  }, []);

  return (
    <div className="min-h-screen relative">
      <FestiveBackground />
      <Navbar />
      
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Success Animation */}
            <motion.div
              className="mb-8"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2, type: "spring", bounce: 0.4 }}
            >
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-festive rounded-full mb-6">
                <span className="text-4xl">🎉</span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="text-hero mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              You're In!{' '}
              <span className="bg-gradient-festive bg-clip-text text-transparent">
                🎉
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-sub-hero text-foreground-muted mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Thanks for entering the Diwali raffle! We're excited to see you at the booth for an amazing VR experience.
              Check your email for confirmation details.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Button
                variant="festive"
                size="xl"
                className="min-w-48"
                asChild
              >
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Visit Coral Academy
                </a>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex justify-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              <p className="text-foreground-muted mb-4">Follow us for updates:</p>
            </motion.div>
            
            <motion.div
              className="flex justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
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
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </Button>
              
              <Button
                variant="outline"
                size="icon"
                className="rounded-full hover:bg-coral/10 hover:border-coral/30 hover:text-coral transition-all duration-200"
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
            </motion.div>

            {/* Additional Info */}
            <motion.div
              className="mt-16 p-8 card-festive max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.4 }}
            >
              <h2 className="text-xl font-semibold mb-4 text-gold">What's Next?</h2>
              <div className="space-y-3 text-foreground-muted">
                <p>✨ <strong>Check your email</strong> for the confirmation and event details</p>
                <p>🎮 <strong>Visit our booth</strong> at the Diwali event for VR access</p>
                <p>🎁 <strong>Winners announced</strong> via email after the event</p>
                <p>📚 <strong>Explore</strong> our live online classes for kids aged 8-13</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ThankYou;