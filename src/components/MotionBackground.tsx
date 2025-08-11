import { motion } from 'framer-motion';

export function MotionBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Base soft gradients */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(1000px 600px at 10% -10%, rgba(0,155,119,0.20), transparent), radial-gradient(800px 500px at 110% 110%, rgba(34,211,238,0.18), transparent)',
        }}
      />
      {/* Animated blob 1 */}
      <motion.div
        className="absolute -top-40 -left-40 h-[48rem] w-[48rem] rounded-full"
        style={{
          background:
            'radial-gradient(circle at 30% 30%, rgba(0,155,119,0.35), transparent 60%)',
          filter: 'blur(10px)',
        }}
        animate={{ x: [0, 20, 0], y: [0, 12, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Animated blob 2 */}
      <motion.div
        className="absolute -bottom-48 -right-40 h-[42rem] w-[42rem] rounded-full"
        style={{
          background:
            'radial-gradient(circle at 70% 70%, rgba(34,211,238,0.30), transparent 60%)',
          filter: 'blur(12px)',
        }}
        animate={{ x: [0, -18, 0], y: [0, -10, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Subtle grain */}
      <div
        className="absolute inset-0 opacity-[0.08] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.8'/></svg>\")",
        }}
      />
    </div>
  );
}
