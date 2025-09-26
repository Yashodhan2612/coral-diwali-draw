import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import NewRaffleForm from '@/components/NewRaffleForm';
import USPChips from '@/components/USPChips';
import Footer from '@/components/Footer';

const Landing = () => {
  return (
    <div className="min-h-screen relative">
      {/* Background blobs removed */}
      <Navbar />
      
      {/* Hero Section - 2-Column Layout */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          {/* Mobile Layout */}
          <div className="lg:hidden">
            <div className="text-center space-y-6">
              {/* Hero Copy - Shortened */}
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <h1 className="text-3xl font-bold mb-4" data-testid="hero-heading">
                  Celebrate{' '}
                  <span className="text-primary">
                    Diwali
                  </span>{' '}
                  with Coral Academy -{' '}
                  <span className="text-yellow">
                    Win Amazing Prizes
                  </span>
                </h1>
              </motion.div>

              {/* Form Card - Mobile (within first scroll) */}
              <motion.div
                className="relative z-10 flex justify-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <div className="w-full max-w-md">
                  <NewRaffleForm />
                </div>
              </motion.div>

              {/* Subheading moved below form with better spacing */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="mt-8 px-2"
              >
                <p className="text-base text-muted-foreground leading-relaxed" data-testid="hero-subheading">
                  Fill the form to join the raffle and get special VR access at the event. 
                  Experience immersive learning while celebrating the festival of lights and win exciting prizes!
                </p>
              </motion.div>
            </div>
          </div>

          {/* Desktop/Tablet 2-Column Layout */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Tagline/Heading */}
            <motion.div
              className="text-left"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-hero mb-6" data-testid="hero-heading">
                Celebrate{' '}
                <span className="text-primary">
                  Diwali
                </span>{' '}
                with Coral —{' '}
                <span className="text-secondary">
                  Win Amazing Prizes
                </span>{' '}
                + Enjoy VR Fun
              </h1>
              
              <p className="text-sub-hero text-foreground-muted mb-8" data-testid="hero-subheading">
                Fill the form to join the raffle and get special VR access at the event. 
                Experience immersive learning while celebrating the festival of lights and win exciting prizes!
              </p>
            </motion.div>

            {/* Right Column - Form */}
            <motion.div
              className="relative z-10"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <NewRaffleForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* USP Chips */}
      <USPChips />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Landing;