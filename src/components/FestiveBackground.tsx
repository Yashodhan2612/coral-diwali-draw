import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import diwaliElements from '@/assets/diwali-elements.png';

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

    // Initialize particles
    const colors = ['#F6C453', '#FF6B6B', '#F05BB5'];
    particlesRef.current = Array.from({ length: 30 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      opacity: Math.random() * 0.5 + 0.1,
      size: Math.random() * 3 + 1,
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

        // Draw particle with glow
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = particle.color;
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = 10;
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
  }, [prefersReducedMotion]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Canvas for particles */}
      {!prefersReducedMotion && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 opacity-60"
          style={{ mixBlendMode: 'screen' }}
        />
      )}
      
      {/* Floating Diwali Elements */}
      {!prefersReducedMotion && (
        <>
          <motion.div
            className="absolute top-20 left-10 w-12 h-12 opacity-20"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <img src={diwaliElements} alt="" className="w-full h-full object-contain" />
          </motion.div>
          
          <motion.div
            className="absolute top-32 right-20 w-8 h-8 opacity-30"
            animate={{
              y: [0, -15, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          >
            <img src={diwaliElements} alt="" className="w-full h-full object-contain" />
          </motion.div>
          
          <motion.div
            className="absolute bottom-40 left-1/4 w-10 h-10 opacity-25"
            animate={{
              y: [0, -25, 0],
              rotate: [0, -10, 10, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4,
            }}
          >
            <img src={diwaliElements} alt="" className="w-full h-full object-contain" />
          </motion.div>
        </>
      )}
      
      {/* Static elements for reduced motion */}
      {prefersReducedMotion && (
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-12 h-12">
            <img src={diwaliElements} alt="" className="w-full h-full object-contain" />
          </div>
          <div className="absolute top-32 right-20 w-8 h-8">
            <img src={diwaliElements} alt="" className="w-full h-full object-contain" />
          </div>
          <div className="absolute bottom-40 left-1/4 w-10 h-10">
            <img src={diwaliElements} alt="" className="w-full h-full object-contain" />
          </div>
        </div>
      )}
    </div>
  );
};

export default FestiveBackground;