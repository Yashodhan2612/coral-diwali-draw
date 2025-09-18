import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import FestiveBackground from '@/components/FestiveBackground';
import RaffleForm from '@/components/RaffleForm';
import HowItWorks from '@/components/HowItWorks';
import USPChips from '@/components/USPChips';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import vrHero from '@/assets/vr-headset.png';
import vrFallback from '@/assets/vr-clean.svg';

const Landing = () => {
  return (
    <div className="min-h-screen relative">
      <FestiveBackground />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Copy */}
            <motion.div
              className="text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
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

              {/* VR Hero Illustration */}
              <div className="flex justify-center lg:justify-start mb-8">
                <div className="relative">
                  <img 
                    src={vrHero}
                    alt="VR headset illustration"
                    width={280}
                    height={210}
                    loading="eager"
                    decoding="async"
                    onError={(e) => { (e.currentTarget as HTMLImageElement).src = vrFallback; }}
                    className="w-[280px] h-[210px] object-contain animate-float select-none pointer-events-none"
                    data-testid="hero-vr-image"
                  />
                  <div className="absolute -inset-3 bg-gradient-glow rounded-full opacity-15 blur-lg animate-glow" />
                </div>
              </div>
            </motion.div>

            {/* Form Card */}
            <motion.div
              className="relative z-10"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <RaffleForm />
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