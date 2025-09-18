import { useEffect, useMemo, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const BackgroundDiwali = () => {
  const prefersReducedMotion = useReducedMotion();
  const [isMdUp, setIsMdUp] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const handler = () => setIsMdUp(mq.matches);
    handler();
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  // Dev-only visibility check for headings to ensure backgrounds never obscure content
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') return;
    const ids = ['howitworks-heading', 'faq-heading'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) {
            // eslint-disable-next-line no-console
            console.warn(`[Design Watch] Heading not visible: #${(e.target as HTMLElement).id || e.target.getAttribute('data-testid')}`);
          }
        });
      },
      { threshold: 0.01 }
    );
    ids.forEach((id) => {
      const byId = document.getElementById(id);
      const byTestId = document.querySelector(`[data-testid="${id}"]`);
      if (byId) observer.observe(byId);
      if (byTestId) observer.observe(byTestId);
    });
    return () => observer.disconnect();
  }, []);

  const float = useMemo(
    () => ({
      y: prefersReducedMotion ? 0 : [0, -4, 0, -2, 0],
      opacity: [0.10, 0.14, 0.10, 0.12, 0.10],
    }),
    [prefersReducedMotion]
  );

  const transition = useMemo(
    () => ({ duration: 10, repeat: Infinity, ease: 'easeInOut' as const }),
    []
  );

  return (
    <div className="fixed inset-0 pointer-events-none -z-10">
      {/* Neutral gradient base to softly ground visuals */}
      <div className="absolute inset-0 bg-gradient-hero opacity-40 dark:opacity-30" />

      {/* Top-left diya outline */}
      <motion.div
        className="absolute top-10 left-6 w-28 h-28 md:w-36 md:h-36 opacity-30 dark:opacity-25"
        animate={float}
        transition={{ ...transition, delay: 0 }}
      >
        <svg viewBox="0 0 120 120" className="w-full h-full" aria-hidden>
          <g fill="none" stroke="currentColor" className="text-foreground-muted">
            <path d="M20,72 q40,24 80,0 q-8,-12 -12,-24 q-28,10 -56,0 q-4,12 -12,24 z" strokeWidth="1.5" />
            <path d="M60,36 q12,14 0,28 q-12,-14 0,-28 z" strokeWidth="1.2" />
          </g>
          <circle cx="60" cy="58" r="36" fill="none" className="text-foreground-muted" stroke="currentColor" strokeOpacity="0.08" />
        </svg>
      </motion.div>

      {/* Top-right sparkles cluster */}
      <motion.div
        className="absolute top-14 right-10 w-24 h-24 opacity-25 dark:opacity-20"
        animate={float}
        transition={{ ...transition, delay: 2.5 }}
      >
        <svg viewBox="0 0 120 120" className="w-full h-full" aria-hidden>
          <g fill="currentColor" className="text-foreground-muted" opacity="0.5">
            <circle cx="28" cy="22" r="2" />
            <circle cx="84" cy="30" r="2.4" />
            <circle cx="68" cy="14" r="1.6" />
            <circle cx="92" cy="58" r="1.8" />
            <circle cx="18" cy="64" r="1.6" />
          </g>
        </svg>
      </motion.div>

      {/* Bottom-center rangoli arc (md and up) */}
      {isMdUp && (
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[60vw] max-w-[720px] h-28 opacity-20 dark:opacity-16"
          animate={float}
          transition={{ ...transition, delay: 1.2 }}
        >
          <svg viewBox="0 0 720 120" className="w-full h-full" aria-hidden>
            <g fill="none" stroke="currentColor" className="text-foreground-muted">
              <path d="M20,90 q160,-60 340,0 q180,60 340,0" strokeOpacity="0.35" strokeWidth="1.2" />
              <path d="M60,92 q140,-52 300,0 q160,52 300,0" strokeOpacity="0.20" strokeWidth="1" />
            </g>
          </svg>
        </motion.div>
      )}
    </div>
  );
};

export default BackgroundDiwali;


