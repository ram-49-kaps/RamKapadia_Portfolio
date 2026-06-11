import { motion } from 'framer-motion';

const PageTransition = ({ children }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        {children}
      </motion.div>
      
      {/* Wipe IN animation (when route unmounts) */}
      <motion.div
        className="fixed top-0 left-0 w-full h-screen bg-accent-neon origin-bottom z-[100] pointer-events-none"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      />
      
      {/* Wipe OUT animation (when new route mounts) */}
      <motion.div
        className="fixed top-0 left-0 w-full h-screen bg-accent-neon origin-top z-[100] pointer-events-none"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  );
};

export default PageTransition;
