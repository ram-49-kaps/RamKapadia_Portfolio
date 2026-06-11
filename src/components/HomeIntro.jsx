import { motion } from 'framer-motion';

const HomeIntro = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section 
      id="intro-section" 
      className="relative min-h-screen bg-[#1A1C1E] py-24 md:py-36 px-6 sm:px-12 lg:px-20 flex flex-col justify-center overflow-hidden border-t border-white/5"
    >
      {/* Decorative clean background line grids */}
      <div className="absolute inset-0 opacity-[0.01] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '80px 80px' }} />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto w-full flex flex-col space-y-16 md:space-y-24 z-10"
      >
        {/* Main Title Section */}
        <div className="max-w-5xl space-y-4">
          <motion.p 
            variants={itemVariants} 
            className="text-accent-neon font-bold text-lg md:text-xl tracking-wider"
          >
            I'm Ram.
          </motion.p>
          
          <motion.h2 
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-[1.15] tracking-tight font-sans"
          >
            I design thoughtful <span className="text-gray-500">digital experiences</span> &amp; build intelligent <span className="text-gray-500">AI architectures.</span>
          </motion.h2>
        </div>

        {/* 3-Column Timeline/Milestone Grid */}
        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 pt-12 border-t border-white/10"
        >
          {/* Current Column */}
          <div className="space-y-6">
            <h3 className="text-gray-500 text-xs font-bold uppercase tracking-widest">Current</h3>
            <div className="space-y-6">
              <div>
                <p className="text-white text-lg font-semibold">AI Developer Intern</p>
                <p className="text-gray-400 text-sm mt-1">Allied Works</p>
                <p className="text-gray-500 text-xs mt-1">Present</p>
              </div>
              <div>
                <p className="text-white text-lg font-semibold">M.Sc. AI &amp; Machine Learning</p>
                <p className="text-gray-400 text-sm mt-1">Christ University, Bengaluru</p>
                <p className="text-gray-500 text-xs mt-1">2025 — Present</p>
              </div>
            </div>
          </div>

          {/* Past Column */}
          <div className="space-y-6">
            <h3 className="text-gray-500 text-xs font-bold uppercase tracking-widest">Past</h3>
            <div className="space-y-6">
              <div>
                <p className="text-white text-lg font-semibold">Social Media Handler</p>
                <p className="text-gray-400 text-sm mt-1">Grootinn, Surat</p>
                <p className="text-gray-500 text-xs mt-1">Jul — Nov 2024</p>
              </div>
              <div>
                <p className="text-white text-lg font-semibold">Sales Associate</p>
                <p className="text-gray-400 text-sm mt-1">ToxicMale, Surat</p>
                <p className="text-gray-500 text-xs mt-1">May — Jun 2023</p>
              </div>
            </div>
          </div>

          {/* Awards/Achievements Column */}
          <div className="space-y-6">
            <h3 className="text-gray-500 text-xs font-bold uppercase tracking-widest">Hackathons &amp; Roles</h3>
            <div className="space-y-6">
              <div>
                <p className="text-white text-lg font-semibold">Smart India Hackathon</p>
                <p className="text-gray-400 text-sm mt-1">National Level Finalist</p>
                <p className="text-gray-500 text-xs mt-1">2024</p>
              </div>
              <div>
                <p className="text-white text-lg font-semibold">Inclusi AI Hackathon</p>
                <p className="text-gray-400 text-sm mt-1">Pune Campus Participant</p>
                <p className="text-gray-500 text-xs mt-1">2024</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HomeIntro;
