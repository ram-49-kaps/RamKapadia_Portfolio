import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Case Studies', href: '/work' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* Permanent Fixed Logo on Top Left */}
      <div className="fixed top-6 left-6 sm:top-8 sm:left-8 z-50 pointer-events-auto">
        <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3 group">
          <div className="transition-transform group-hover:scale-105">
            <Logo className="w-10 h-10 sm:w-12 sm:h-12 border-[2.5px]" textClassName="text-lg sm:text-xl mt-0.5" />
          </div>
        </Link>
      </div>

      {/* Expanding Navbar Container */}
      <motion.div
        className="fixed top-6 right-6 sm:top-8 sm:right-8 z-50 flex items-center justify-end overflow-hidden"
        onMouseEnter={() => !isMobile && setIsOpen(true)}
        onMouseLeave={() => !isMobile && setIsOpen(false)}
        initial={false}
        animate={{
          width: isOpen ? (isMobile ? 'calc(100vw - 48px)' : '580px') : '56px',
          height: isOpen && isMobile ? '350px' : '56px',
          backgroundColor: isOpen ? '#1A1C1E' : '#00FF88',
          borderRadius: isOpen && isMobile ? '28px' : '28px',
        }}
        transition={{ duration: 1.0, ease: [0.76, 0, 0.24, 1] }}
        style={{
          boxShadow: isOpen ? '0 10px 30px rgba(0,0,0,0.4)' : '0 0 20px rgba(0,255,136,0.3)',
          border: isOpen ? '1px solid rgba(255,255,255,0.05)' : 'none'
        }}
      >
        {/* Links (fade in when open) */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className={`flex ${isMobile ? 'flex-col items-center justify-center w-full pt-4 gap-6' : 'items-center gap-8 pr-[88px]'} shrink-0 absolute ${isMobile ? 'inset-0' : 'right-0 h-full'}`}
              initial={{ opacity: 0, filter: 'blur(4px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, filter: 'blur(4px)' }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm md:text-base font-bold capitalize tracking-wide transition-colors duration-300 relative group py-2 ${
                    location.pathname === link.href ? 'text-accent-neon' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-accent-neon transition-all duration-300 group-hover:w-full ${
                    location.pathname === link.href ? 'w-full' : ''
                  }`} />
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hamburger Toggle Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="w-[56px] h-[56px] shrink-0 flex flex-col items-center justify-center gap-1.5 cursor-pointer z-10 absolute right-0 top-0 outline-none"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 1.0, ease: [0.76, 0, 0.24, 1] }}
        >
          {isOpen ? (
            // Close icon (Green lines to match dark bg)
            <div className="relative w-7 h-7 flex items-center justify-center">
              <motion.span 
                className="block w-7 h-0.5 bg-accent-neon absolute"
                initial={{ rotate: 0 }}
                animate={{ rotate: 45 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              />
              <motion.span 
                className="block w-7 h-0.5 bg-accent-neon absolute"
                initial={{ rotate: 0 }}
                animate={{ rotate: -45 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              />
            </div>
          ) : (
            // Hamburger icon (Dark lines to match green bg)
            <div className="flex flex-col gap-1.5">
              <span className="block w-7 h-0.5 bg-[#0a0a0f]"></span>
              <span className="block w-7 h-0.5 bg-[#0a0a0f]"></span>
            </div>
          )}
        </motion.button>
      </motion.div>
    </>
  );
};

export default Navbar;
