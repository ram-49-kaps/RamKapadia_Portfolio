import { motion } from 'framer-motion';

const Loader = ({ onComplete }) => {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0a0f] overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
      onAnimationComplete={onComplete}
    >
      <div className="relative flex flex-col items-center justify-center">
        {/* Glowing rings */}
        <div className="relative w-24 h-24">
          <motion.div
            className="absolute inset-0 rounded-full border border-accent-blue/30"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute inset-2 rounded-full border border-accent-purple/30"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
          />
          
          {/* Logo container */}
          <motion.div 
            className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-accent-blue/10 to-accent-purple/10 rounded-full blur-md"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          
          <div className="absolute inset-0 flex items-center justify-center">
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-purple font-heading font-extrabold text-2xl tracking-widest drop-shadow-[0_0_15px_rgba(139,92,246,0.5)]">
               RAM
             </span>
          </div>
        </div>

        {/* Loading bar */}
        <div className="mt-8 w-48 h-1 bg-white/5 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-accent-blue via-accent-purple to-accent-cyan"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Loader;
