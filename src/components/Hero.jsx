import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaArrowRight } from 'react-icons/fa';
import { HiDocumentDownload } from 'react-icons/hi';

const roles = [
  'AI/ML Engineer',
  'Full Stack Developer',
  'LLM & RAG Specialist',
  'Problem Solver',
];

const Hero = () => {
  const typingRef = useRef(null);

  useEffect(() => {
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId;

    const type = () => {
      const current = roles[roleIndex];
      if (!typingRef.current) return;

      if (isDeleting) {
        typingRef.current.textContent = current.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typingRef.current.textContent = current.substring(0, charIndex + 1);
        charIndex++;
      }

      let speed = isDeleting ? 30 : 70;

      if (!isDeleting && charIndex === current.length) {
        speed = 2000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        speed = 400;
      }

      timeoutId = setTimeout(type, speed);
    };

    timeoutId = setTimeout(type, 500);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section id="home" className="relative w-full overflow-hidden flex items-center justify-center pt-30 lg:pt-40 pb-20" style={{ minHeight: '100svh' }}>
      {/* Refined Premium Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Soft dynamic gradient orbs */}
        <motion.div
          animate={{ x: [-20, 20, -20], y: [-20, 20, -20] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-20 w-[30rem] h-[30rem] bg-accent-purple/10 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{ x: [20, -20, 20], y: [20, -20, 20] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 -right-20 w-[35rem] h-[35rem] bg-accent-blue/10 rounded-full blur-[100px]"
        />

        {/* Subtle noise texture overlay */}
        <div className="absolute inset-0 opacity-[0.015] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center mt-5 lg:mt-0">

          {/* Left Column: Text Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mb-8 cursor-default"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/5 bg-white/[0.02] backdrop-blur-md shadow-2xl overflow-hidden group">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-cyan"></span>
                </span>
                <span className="text-sm font-medium text-gray-300">Available for Summer Internship 2026</span>
              </div>
            </motion.div>

            {/* Main Typography */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-2xl mx-auto lg:mx-0"
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-extrabold mb-8 font-heading tracking-tight leading-[1.2]">
                <span className="text-white block pb-2">Crafting Intelligent</span>
                <span className="gradient-text pb-2 block">Digital Experiences.</span>
              </h1>

              {/* Dynamic typing row */}
              <div className="flex flex-col sm:flex-row items-center lg:items-start lg:justify-start justify-center gap-2 sm:gap-4 text-lg sm:text-xl md:text-2xl text-gray-400 mb-8 min-h-[3.5rem] font-medium">
                <span>I'm</span>
                <span className="text-white font-semibold">Ram Kapadia,</span>
                <span className="hidden sm:inline text-gray-600">—</span>
                <div className="flex items-center gap-2 mt-1 sm:mt-0">
                  <span ref={typingRef} className="text-accent-cyan mr-1" />
                  <span className="animate-pulse text-accent-cyan font-bold">|</span>
                </div>
              </div>

              <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto lg:mx-0 mb-12 leading-loose tracking-wide sm:text-left text-justify">
                M.Sc. Artificial Intelligence &amp; Machine Learning student. I bridge the gap between complex AI models (LLMs, RAG) and beautiful, high-performance web applications.
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12 w-full sm:w-auto"
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group relative px-8 py-4 rounded-full font-semibold text-white overflow-hidden transition-all duration-300 w-full sm:w-auto flex justify-center shadow-lg shadow-accent-purple/20 hover:shadow-accent-purple/40 hover:-translate-y-1"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-accent-blue via-accent-purple to-accent-cyan bg-300% animate-gradient" />
                <span className="relative flex items-center gap-2">
                  View Work
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 rounded-full font-semibold text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 w-full sm:w-auto flex justify-center items-center gap-2 hover:-translate-y-1"
              >
                <HiDocumentDownload className="text-xl text-gray-400 group-hover:text-white transition-colors" />
                <span>Resume</span>
              </a>
            </motion.div>

            {/* Minimal Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="flex justify-center lg:justify-start gap-6"
            >
              {[
                { icon: FaGithub, href: 'https://github.com/ram-49-kaps', label: 'GitHub' },
                { icon: FaLinkedin, href: 'https://linkedin.com/in/ram-kapadia-a382332a3', label: 'LinkedIn' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center p-3 rounded-full bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all duration-300"
                  aria-label={label}
                >
                  <Icon className="text-xl text-gray-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end relative"
          >
            {/* Subtle rotating glow behind image */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-gradient-to-br from-accent-cyan/15 via-accent-purple/15 to-accent-blue/15 rounded-full blur-3xl pointer-events-none z-0"
            />

            {/* Image Container with Floating and Morphing Animation */}
            <motion.div
              animate={{
                y: [-15, 15, -15],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] border-4 border-white/5 shadow-2xl hover:border-accent-purple/40 hover:shadow-accent-purple/20 transition-all duration-700 ease-in-out group animate-morph overflow-hidden bg-dark-800"
            >
              {/* Inner subtle border gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-accent-blue/20 to-accent-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-20 mix-blend-overlay"></div>

              <motion.img
                src="/profile.jpg"
                alt="Ram Kapadia"
                className="w-full h-full object-cover object-top scale-[1.05] group-hover:scale-[1.12] group-hover:rotate-2 transition-transform duration-700 ease-out"
              />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
