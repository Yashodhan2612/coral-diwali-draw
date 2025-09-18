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

  return null; // fully removed per step 1
};

export default BackgroundDiwali;


