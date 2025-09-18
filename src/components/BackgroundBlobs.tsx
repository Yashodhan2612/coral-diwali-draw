import { motion, useReducedMotion } from 'framer-motion';

type BlobSpec = {
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
  size: number; // in px
  opacity: number; // 0..1
  delay: number; // seconds
};

const BLOBS_MD_UP: BlobSpec[] = [
  { left: '8%', top: '12%', size: 120, opacity: 0.12, delay: 0.2 },
  { right: '12%', top: '18%', size: 140, opacity: 0.10, delay: 1.1 },
  { left: '18%', bottom: '20%', size: 160, opacity: 0.08, delay: 2.0 },
  { right: '22%', bottom: '14%', size: 130, opacity: 0.09, delay: 2.7 },
  { left: '48%', top: '40%', size: 110, opacity: 0.08, delay: 1.6 },
];

const BLOBS_SM: BlobSpec[] = [
  { left: '10%', top: '16%', size: 110, opacity: 0.10, delay: 0.3 },
  { right: '10%', bottom: '18%', size: 120, opacity: 0.08, delay: 1.4 },
];

const BackgroundBlobs = () => {
  const reduce = useReducedMotion();

  const blobs = typeof window !== 'undefined' && window.matchMedia('(min-width: 768px)').matches
    ? BLOBS_MD_UP
    : BLOBS_SM;

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      {blobs.map((b, idx) => (
        <motion.div
          key={idx}
          className="absolute"
          style={{ left: b.left, right: b.right, top: b.top, bottom: b.bottom, width: b.size, height: b.size }}
          animate={reduce ? { opacity: b.opacity } : { opacity: [b.opacity * 0.6, b.opacity, b.opacity * 0.7, b.opacity] , y: [0, -3, 0, -2] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: b.delay }}
        >
          <div
            className="w-full h-full rounded-full blur-2xl"
            style={{
              background: 'radial-gradient(closest-side, rgba(255,215,150,0.15), rgba(255,215,150,0.05), rgba(0,0,0,0))'
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default BackgroundBlobs;


