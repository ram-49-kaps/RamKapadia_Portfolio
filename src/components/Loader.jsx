import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

const greetings = ['Hello', 'नमस्ते', 'Bonjour', 'こんにちは', 'مرحبا', 'Hola', 'Ciao', 'Welcome'];

const Loader = ({ onComplete }) => {
  const [percentage, setPercentage] = useState(0);
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [phase, setPhase] = useState('loading'); // 'loading' | 'reveal'
  const intervalRef = useRef(null);

  // Percentage counter
  useEffect(() => {
    const duration = 2800; // total loading time in ms
    const steps = 100;
    const stepTime = duration / steps;
    let current = 0;

    intervalRef.current = setInterval(() => {
      current += 1;
      setPercentage(current);
      if (current >= 100) {
        clearInterval(intervalRef.current);
        // Start exit phase
        setTimeout(() => setPhase('reveal'), 300);
      }
    }, stepTime);

    return () => clearInterval(intervalRef.current);
  }, []);

  // Cycle through greetings
  useEffect(() => {
    if (phase !== 'loading') return;
    const interval = setInterval(() => {
      setGreetingIndex((prev) => (prev + 1) % greetings.length);
    }, 350);
    return () => clearInterval(interval);
  }, [phase]);

  // Call onComplete after reveal animation
  useEffect(() => {
    if (phase === 'reveal') {
      const timeout = setTimeout(onComplete, 1200);
      return () => clearTimeout(timeout);
    }
  }, [phase, onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          className="fixed inset-0 z-[100] bg-[#0a0a0f] overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Subtle ambient gradient */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.08)_0%,_transparent_70%)] rounded-full" />
          </div>

          {/* Top-left: RK. Logo */}
          <motion.div
            className="absolute top-6 sm:top-8 left-6 sm:left-10 z-10"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center gap-3">
              <img
                src="/logo-rk.png"
                alt="RK"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg"
              />
              <span className="text-white/60 font-heading text-sm sm:text-base font-medium tracking-widest">
                RK.
              </span>
            </div>
          </motion.div>

          {/* Center: Cycling greeting text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.span
                key={greetingIndex}
                initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
                animate={{ opacity: 0.6, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -20, filter: 'blur(8px)' }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-light text-white/50 tracking-wide select-none"
              >
                {greetings[greetingIndex]}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* Bottom-right: Percentage counter */}
          <motion.div
            className="absolute bottom-6 sm:bottom-10 right-6 sm:right-10 z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-baseline gap-1">
              <span className="text-5xl sm:text-7xl md:text-8xl font-heading font-extralight text-white/80 tabular-nums leading-none">
                {percentage}
              </span>
              <span className="text-lg sm:text-2xl font-heading font-light text-white/40">
                %
              </span>
            </div>
          </motion.div>

          {/* Bottom progress line */}
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white/5">
            <motion.div
              className="h-full bg-gradient-to-r from-accent-blue via-accent-purple to-accent-cyan"
              initial={{ width: '0%' }}
              animate={{ width: `${percentage}%` }}
              transition={{ duration: 0.05, ease: 'linear' }}
            />
          </div>

          {/* Reveal curtain - splits screen when loading completes */}
          {phase === 'reveal' && (
            <>
              <motion.div
                className="absolute top-0 left-0 w-full h-1/2 bg-[#0a0a0f] z-20"
                initial={{ y: 0 }}
                animate={{ y: '-100%' }}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
              />
              <motion.div
                className="absolute bottom-0 left-0 w-full h-1/2 bg-[#0a0a0f] z-20"
                initial={{ y: 0 }}
                animate={{ y: '100%' }}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
              />
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
