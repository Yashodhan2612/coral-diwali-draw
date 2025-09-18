import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import FestiveBackground from '@/components/FestiveBackground';
import RaffleForm from '@/components/RaffleForm';
import HowItWorks from '@/components/HowItWorks';
import USPChips from '@/components/USPChips';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

const Landing = () => {
  return (
    <div className="min-h-screen relative">
      <FestiveBackground />
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
                {/* Inline VR SVG */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 720 420"
                  role="img"
                  aria-labelledby="title desc"
                  className="w-full h-auto"
                >
                  <title id="title">Stylized VR Headset</title>
                  <desc id="desc">A clean, modern VR headset with soft lens glow and subtle festive sparkles.</desc>

                  <style>
                    {`:root {
                      --vr-bg: none;
                      --vr-body: #0f152e;
                      --vr-body-2: #1a2142;
                      --vr-stroke: rgba(255,255,255,0.08);
                      --vr-edge: rgba(255,255,255,0.18);
                      --vr-lens-ring: #2c5cff;
                      --vr-lens-glow: #7aa2ff;
                      --vr-accent: #ff6b6b;
                      --sparkle: #f6c453;
                      --shadow: rgba(12,16,36,0.45);
                    }
                    @media (prefers-color-scheme: light) {
                      :root {
                        --vr-body: #ffffff;
                        --vr-body-2: #f5f7ff;
                        --vr-stroke: rgba(13,19,40,0.08);
                        --vr-edge: rgba(13,19,40,0.14);
                        --vr-lens-ring: #3a5cff;
                        --vr-lens-glow: #7a9bff;
                        --shadow: rgba(13,19,40,0.18);
                      }
                    }`}
                  </style>

                  <defs>
                    <radialGradient id="gShadow" cx="50%" cy="60%" r="55%">
                      <stop offset="0%" stopColor="var(--shadow)" />
                      <stop offset="100%" stopColor="transparent" />
                    </radialGradient>

                    <linearGradient id="gBody" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="var(--vr-body-2)"/>
                      <stop offset="100%" stopColor="var(--vr-body)"/>
                    </linearGradient>

                    <radialGradient id="gLensGlow" cx="50%" cy="50%" r="60%">
                      <stop offset="0%" stopColor="var(--vr-lens-glow)" stopOpacity="0.95"/>
                      <stop offset="45%" stopColor="var(--vr-lens-glow)" stopOpacity="0.35"/>
                      <stop offset="100%" stopColor="transparent"/>
                    </radialGradient>

                    <radialGradient id="gSpark" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="var(--sparkle)" stopOpacity="0.9"/>
                      <stop offset="100%" stopColor="transparent"/>
                    </radialGradient>

                    <linearGradient id="gTopHL" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="rgba(255,255,255,0.55)"/>
                      <stop offset="100%" stopColor="transparent"/>
                    </linearGradient>
                  </defs>

                  <ellipse cx="360" cy="342" rx="220" ry="42" fill="url(#gShadow)"/>

                  <g transform="translate(90,80)">
                    <path
                      d="M70,70 h400 a46,46 0 0 1 46,46 v62 a46,46 0 0 1 -46,46 h-400 a46,46 0 0 1 -46,-46 v-62 a46,46 0 0 1 46,-46 z"
                      fill="url(#gBody)"
                      stroke="var(--vr-edge)" strokeWidth="1.5"
                    />

                    <path
                      d="M258,178 q22,14 44,0"
                      fill="none" stroke="var(--vr-stroke)" strokeWidth="8" strokeLinecap="round"
                    />

                    <path d="M24,122 q-22,18 -34,42 q20,18 42,24" fill="none" stroke="var(--vr-edge)" strokeWidth="10" strokeLinecap="round"/>
                    <path d="M516,122 q22,18 34,42 q-20,18 -42,24" fill="none" stroke="var(--vr-edge)" strokeWidth="10" strokeLinecap="round"/>

                    <g id="lenses">
                      <circle cx="172" cy="147" r="64" fill="#0b0f24" />
                      <circle cx="172" cy="147" r="58" fill="none" stroke="var(--vr-lens-ring)" strokeWidth="3"/>
                      <circle cx="368" cy="147" r="64" fill="#0b0f24" />
                      <circle cx="368" cy="147" r="58" fill="none" stroke="var(--vr-lens-ring)" strokeWidth="3"/>

                      <circle cx="172" cy="147" r="64" fill="url(#gLensGlow)"/>
                      <circle cx="368" cy="147" r="64" fill="url(#gLensGlow)"/>

                      <ellipse cx="152" cy="128" rx="18" ry="10" fill="white" opacity="0.25"/>
                      <ellipse cx="350" cy="128" rx="18" ry="10" fill="white" opacity="0.25"/>
                    </g>

                    <path
                      d="M70,70 h400 a46,46 0 0 1 46,46 v4 h-492 v-4 a46,46 0 0 1 46,-46 z"
                      fill="url(#gTopHL)" opacity="0.35"
                    />

                    <g opacity="0.5" stroke="var(--vr-accent)" strokeLinecap="round">
                      <line x1="118" y1="94" x2="130" y2="94" strokeWidth="3"/>
                      <line x1="440" y1="94" x2="452" y2="94" strokeWidth="3"/>
                      <line x1="118" y1="200" x2="130" y2="200" strokeWidth="3"/>
                      <line x1="440" y1="200" x2="452" y2="200" strokeWidth="3"/>
                    </g>
                  </g>

                  <g opacity="0.55">
                    <circle cx="112" cy="96" r="4" fill="url(#gSpark)"/>
                    <circle cx="610" cy="110" r="5" fill="url(#gSpark)"/>
                    <circle cx="530" cy="56" r="3" fill="url(#gSpark)"/>
                    <circle cx="140" cy="330" r="4" fill="url(#gSpark)"/>
                    <circle cx="604" cy="300" r="4" fill="url(#gSpark)"/>
                  </g>

                  <g opacity="0.25">
                    <circle cx="262" cy="170" r="22" fill="var(--vr-accent)"/>
                    <circle cx="458" cy="168" r="18" fill="var(--vr-lens-glow)"/>
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