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

  return null; // Background removed per PRD requirements
};

export default BackgroundDiwali;


