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
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 mb-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Copy */}
            <motion.div
              className="text-center lg:text-left order-2 lg:order-1"
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
            </motion.div>

            {/* Hero VR Image - Order 1 on mobile, 2 on desktop */}
            <motion.div
              className="flex justify-center lg:justify-end order-1 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              >
              <figure 
                data-testid="hero-vr-image" 
                className="relative select-none pointer-events-none w-full max-w-[320px] lg:max-w-[440px] animate-float"
              >
                {/* Inline Diya SVG */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 420"
                  role="img"
                  aria-labelledby="diyaTitle diyaDesc"
                  className="w-full h-auto"
                >
                  <title id="diyaTitle">Festive Diwali Diya</title>
                  <desc id="diyaDesc">A warm, elegant diya lamp with soft glow and subtle sparkles.</desc>

                  <defs>
                    <radialGradient id="plateShadow" cx="50%" cy="60%" r="55%">
                      <stop offset="0%" stopColor="rgba(12,16,36,0.35)"/>
                      <stop offset="100%" stopColor="transparent"/>
                    </radialGradient>
                    <linearGradient id="bowlGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#4b2d1d"/>
                      <stop offset="100%" stopColor="#7a472f"/>
                    </linearGradient>
                    <linearGradient id="rimGrad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#ffb86b"/>
                      <stop offset="100%" stopColor="#ffd89c"/>
                    </linearGradient>
                    <radialGradient id="flameGrad" cx="50%" cy="40%" r="60%">
                      <stop offset="0%" stopColor="#fff4c2"/>
                      <stop offset="35%" stopColor="#ffd27d"/>
                      <stop offset="80%" stopColor="#ff8a3a"/>
                      <stop offset="100%" stopColor="transparent"/>
                    </radialGradient>
                    <radialGradient id="innerFlame" cx="50%" cy="40%" r="50%">
                      <stop offset="0%" stopColor="#ffffff"/>
                      <stop offset="100%" stopColor="#fff1b8"/>
                    </radialGradient>
                    <radialGradient id="glow" cx="50%" cy="50%" r="55%">
                      <stop offset="0%" stopColor="rgba(255,196,85,0.35)"/>
                      <stop offset="100%" stopColor="transparent"/>
                    </radialGradient>
                  </defs>

                  {/* Soft base shadow */}
                  <ellipse cx="320" cy="360" rx="210" ry="40" fill="url(#plateShadow)"/>

                  {/* Back glow */}
                  <circle cx="320" cy="210" r="160" fill="url(#glow)" />

                  {/* Bowl */}
                  <g transform="translate(80,160)">
                    <path d="M70,120 q170,90 340,0 q-40,-40 -60,-82 q-110,36 -220,0 q-20,42 -60,82 z" fill="url(#bowlGrad)" stroke="#a2664a" strokeWidth="1.5"/>
                    {/* Rim highlight */}
                    <path d="M80,120 q160,80 320,0" fill="none" stroke="url(#rimGrad)" strokeWidth="6" opacity="0.8"/>
                    {/* Subtle inner lip */}
                    <path d="M98,110 q140,70 284,0" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="2"/>
                  </g>

                  {/* Wick base */}
                  <ellipse cx="320" cy="190" rx="18" ry="6" fill="#3f1f1f" opacity="0.9"/>

                  {/* Flame */}
                  <g>
                    <path d="M320,85 q38,48 0,96 q-38,-48 0,-96 z" fill="url(#innerFlame)"/>
                    <path d="M320,100 q30,40 0,80 q-30,-40 0,-80 z" fill="url(#flameGrad)"/>
                  </g>

                  {/* Sparkles */}
                  <g opacity="0.35">
                    <circle cx="220" cy="120" r="3" fill="#f6c453"/>
                    <circle cx="420" cy="110" r="3.5" fill="#f6c453"/>
                    <circle cx="450" cy="160" r="2.5" fill="#f6c453"/>
                    <circle cx="200" cy="180" r="2.5" fill="#f6c453"/>
                  </g>
                </svg>
                
                <div className="absolute -inset-3 -z-10 bg-gradient-glow rounded-full opacity-10 blur-md animate-glow" />
              </figure>
            </motion.div>

            {/* Form Card */}
            <motion.div
              className="relative z-10 order-3 lg:col-span-2 flex justify-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
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