import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FaAngleDown } from 'react-icons/fa';

const Hero = () => {
  const containerRef = useRef(null);
  
  // Track scroll progress of the Hero section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Transform background scale and opacity on scroll
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const bgOpacity = useTransform(scrollYProgress, [0, 1], [0.6, 0.1]);

  // Transform typography position and opacity on scroll
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.6], [0, -50]);

  // Transform scroll indicator opacity on scroll
  const indicatorOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <section 
      ref={containerRef}
      id="home" 
      className="relative w-full h-screen min-h-screen overflow-hidden flex items-center justify-start bg-[#1A1C1E]"
    >
      {/* Full Screen Background Image with scroll-linked scaling & opacity */}
      <motion.div 
        style={{ scale: bgScale, opacity: bgOpacity }}
        className="absolute inset-0 z-0 origin-center w-full h-full"
      >
        <div className="absolute inset-0 w-full h-full translate-x-[15%] md:translate-x-[25%] lg:translate-x-[30%]">
          <motion.img 
            initial={{ scale: 1.05, opacity: 0 }}
            animate={{ scale: 1.0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="/profile-optimized.jpg" 
            alt="Ram Kapadia" 
            className="w-full h-full object-cover object-[center_20%]" 
            style={{
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%, black)',
              maskImage: 'linear-gradient(to right, transparent, black 20%, black)'
            }}
          />
        </div>
        {/* Cinematic gradients to blend the image into the dark theme */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1C1E] via-transparent to-[#1A1C1E]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1C1E] via-[#1A1C1E]/40 to-transparent sm:via-[#1A1C1E]/60" />
      </motion.div>

      {/* Main Content with scroll-linked opacity & slide */}
      <motion.div 
        style={{ opacity: textOpacity, y: textY }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mt-12 sm:mt-20"
      >
        <div className="max-w-4xl relative">
          {/* Subtle glow behind text */}
          <div className="absolute -inset-10 bg-white/5 blur-3xl rounded-full opacity-50 pointer-events-none" />
          
          <h1 className="relative text-[16vw] sm:text-[8rem] md:text-[9rem] lg:text-[11rem] font-bold text-white leading-none tracking-tighter drop-shadow-2xl">
            Welcome
          </h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="mt-4 sm:mt-8 ml-2 sm:ml-4 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6"
          >
            <div className="hidden sm:block h-px w-16 sm:w-24 bg-white/40" />
            <div className="flex flex-col">
               <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-medium tracking-wide">
                 I'm <span className="text-white font-bold">Ram Kapadia</span>
               </p>
               <p className="text-sm sm:text-base text-gray-500 uppercase tracking-widest mt-1">
                 AI Developer
               </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div 
        style={{ opacity: indicatorOpacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 cursor-pointer"
        onClick={() => {
          document.getElementById('intro-section')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-md"
        >
          <FaAngleDown className="text-xl sm:text-2xl text-white/70" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
