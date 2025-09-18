import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { Lightbulb, Sparkles, Gift } from 'lucide-react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  opacity: number;
  size: number;
  color: string;
}

const FestiveBackground = () => {
  const { theme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || prefersReducedMotion) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize particles with theme-aware colors and reduced count
    const colors = theme === 'dark' 
      ? ['#F6C453', '#FF6B6B', '#F05BB5'] 
      : ['#E5A835', '#E55555', '#D64A9A']; // Darker variants for light mode
    
    particlesRef.current = Array.from({ length: 20 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3, // Reduced speed
      vy: (Math.random() - 0.5) * 0.3,
      opacity: theme === 'dark' ? Math.random() * 0.4 + 0.1 : Math.random() * 0.6 + 0.2, // Higher opacity for light mode
      size: Math.random() * 2 + 1, // Smaller particles
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle with subtle glow
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = particle.color;
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = theme === 'dark' ? 8 : 6; // Reduced glow
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [prefersReducedMotion, theme]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Canvas for particles */}
      {!prefersReducedMotion && (
        <canvas
          ref={canvasRef}
          className={`absolute inset-0 ${theme === 'dark' ? 'opacity-50' : 'opacity-40'}`}
          style={{ mixBlendMode: theme === 'dark' ? 'screen' : 'multiply' }}
        />
      )}
      
      {/* Floating Diwali Elements - Using Icons */}
      {!prefersReducedMotion && (
        <>
          <motion.div
            className={`absolute top-20 left-10 w-10 h-10 ${theme === 'dark' ? 'opacity-30' : 'opacity-60'}`}
            animate={{
              y: [0, -8, 0],
              rotate: [0, 3, -3, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="w-full h-full flex items-center justify-center">
              <Lightbulb className="w-8 h-8 text-gold" />
            </div>
          </motion.div>
          
          <motion.div
            className={`absolute top-32 right-20 w-8 h-8 ${theme === 'dark' ? 'opacity-25' : 'opacity-50'}`}
            animate={{
              y: [0, -6, 0],
              x: [0, 4, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3,
            }}
          >
            <div className="w-full h-full flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-coral" />
            </div>
          </motion.div>
          
          <motion.div
            className={`absolute bottom-40 left-1/4 w-12 h-12 ${theme === 'dark' ? 'opacity-20' : 'opacity-40'}`}
            animate={{
              y: [0, -10, 0],
              rotate: [0, -5, 5, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 6,
            }}
          >
            <div className="w-full h-full flex items-center justify-center">
              <Gift className="w-10 h-10 text-pink-glow" />
            </div>
          </motion.div>
          
          <motion.div
            className={`absolute top-1/2 right-1/3 w-6 h-6 ${theme === 'dark' ? 'opacity-15' : 'opacity-35'}`}
            animate={{
              y: [0, -12, 0],
              x: [0, 6, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 8,
            }}
          >
            <div className="w-full h-full flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-gold" />
            </div>
          </motion.div>

          {/* Additional festive elements */}
          <motion.div
            className={`absolute top-1/3 left-1/2 w-7 h-7 ${theme === 'dark' ? 'opacity-20' : 'opacity-45'}`}
            animate={{
              y: [0, -8, 0],
              x: [0, -5, 0],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          >
            <div className="w-full h-full flex items-center justify-center">
              <Lightbulb className="w-5 h-5 text-coral" />
            </div>
          </motion.div>

          <motion.div
            className={`absolute bottom-1/3 right-10 w-9 h-9 ${theme === 'dark' ? 'opacity-18' : 'opacity-38'}`}
            animate={{
              y: [0, -7, 0],
              rotate: [0, 2, -2, 0],
            }}
            transition={{
              duration: 11,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 5,
            }}
          >
            <div className="w-full h-full flex items-center justify-center">
              <Sparkles className="w-7 h-7 text-pink-glow" />
            </div>
          </motion.div>

          <motion.div
            className={`absolute top-3/4 left-1/6 w-5 h-5 ${theme === 'dark' ? 'opacity-12' : 'opacity-30'}`}
            animate={{
              y: [0, -15, 0],
              x: [0, 8, 0],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 10,
            }}
          >
            <div className="w-full h-full flex items-center justify-center">
              <Gift className="w-4 h-4 text-gold" />
            </div>
          </motion.div>
        </>
      )}
      
      {/* Static elements for reduced motion */}
      {prefersReducedMotion && (
        <div className={`absolute inset-0 ${theme === 'dark' ? 'opacity-25' : 'opacity-45'}`}>
          <div className="absolute top-20 left-10 w-10 h-10 flex items-center justify-center">
            <Lightbulb className="w-8 h-8 text-gold" />
          </div>
          <div className="absolute top-32 right-20 w-8 h-8 flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-coral" />
          </div>
          <div className="absolute bottom-40 left-1/4 w-12 h-12 flex items-center justify-center">
            <Gift className="w-10 h-10 text-pink-glow" />
          </div>
          <div className="absolute top-1/3 left-1/2 w-7 h-7 flex items-center justify-center">
            <Lightbulb className="w-5 h-5 text-coral" />
          </div>
          <div className="absolute bottom-1/3 right-10 w-9 h-9 flex items-center justify-center">
            <Sparkles className="w-7 h-7 text-pink-glow" />
          </div>
        </div>
      )}
    </div>
  );
};

export default FestiveBackground;