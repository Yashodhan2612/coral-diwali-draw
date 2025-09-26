import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import RaffleForm from '@/components/RaffleForm';
import HowItWorks from '@/components/HowItWorks';
import USPChips from '@/components/USPChips';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

const Landing = () => {
  return (
    <div className="min-h-screen relative">
      {/* Background blobs removed */}
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-8">
            {/* Hero Copy */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-hero mb-6">
                Celebrate{' '}
                <span className="bg-gradient-festive bg-clip-text text-transparent">
                  Diwali
                </span>{' '}
                with Coral —{' '}
                <span className="bg-gradient-glow bg-clip-text text-transparent">
                  Win Amazing Prizes
                </span>{' '}
                + Enjoy VR Fun
              </h1>
              
              <p className="text-sub-hero text-foreground-muted mb-8">
                Fill the form to join the raffle and get special VR access at the event. 
                Experience immersive learning while celebrating the festival of lights and win exciting prizes!
              </p>
            </motion.div>

            {/* Form Card */}
            <motion.div
              className="relative z-10 flex justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="w-full max-w-md">
                <RaffleForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* USP Chips */}
      <USPChips />

      {/* How It Works */}
      <HowItWorks />

      {/* FAQ */}
      <FAQ />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Landing;