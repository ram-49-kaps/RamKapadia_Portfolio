import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaLayerGroup } from 'react-icons/fa';

const categories = [
  {
    title: 'FRONTEND',
    color: 'from-cyan-400 to-emerald-400',
    borderColor: 'border-cyan-500/30',
    shadowColor: 'group-hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]',
    textColor: 'text-cyan-400',
    pathColor: 'stroke-cyan-400/50',
    skills: [
      { name: 'React', subtitle: 'Component-based UI', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
      { name: 'JavaScript', subtitle: 'Dynamic Web Logic', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
      { name: 'TypeScript', subtitle: 'Static Typing', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' }
    ]
  },
  {
    title: 'BACKEND & DATA',
    color: 'from-amber-400 to-orange-400',
    borderColor: 'border-amber-500/30',
    shadowColor: 'group-hover:shadow-[0_0_20px_rgba(245,158,11,0.2)]',
    textColor: 'text-amber-400',
    pathColor: 'stroke-amber-400/50',
    skills: [
      { name: 'Node.js', subtitle: 'Server-side JS', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
      { name: 'Python', subtitle: 'General Purpose Logic', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
      { name: 'MongoDB', subtitle: 'NoSQL Database', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
      { name: 'FastAPI', subtitle: 'Web Framework', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg' }
    ]
  },
  {
    title: 'TOOLS & DEVOPS',
    color: 'from-fuchsia-400 to-purple-400',
    borderColor: 'border-fuchsia-500/30',
    shadowColor: 'group-hover:shadow-[0_0_20px_rgba(217,70,239,0.2)]',
    textColor: 'text-fuchsia-400',
    pathColor: 'stroke-fuchsia-400/50',
    skills: [
      { name: 'Docker', subtitle: 'Containerization', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
      { name: 'Git', subtitle: 'Version Control', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
      { name: 'PyTorch', subtitle: 'Machine Learning', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg' },
      { name: 'Postman', subtitle: 'API Testing', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg' }
    ]
  }
];

// Generates the orthogonal curved paths for the top routing
const generatePath = (startX, startY, endX, endY) => {
  const midY = startY + (endY - startY) / 2;
  return `M ${startX} ${startY} C ${startX} ${midY}, ${endX} ${midY}, ${endX} ${endY}`;
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="relative min-h-[100svh] w-full max-w-[100vw] bg-[#0a0f18] py-24 flex items-center justify-center overflow-hidden" ref={ref}>
      
      {/* Very subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* Central Top Hub */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative z-20 flex flex-col items-center mb-16 md:mb-24"
        >
          <div className="w-24 h-28 rounded-2xl bg-gradient-to-b from-[#1a2235] to-[#0f1523] border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.03)] flex flex-col items-center justify-center pt-2 pb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 via-purple-500 to-rose-400 flex items-center justify-center mb-2 shadow-[0_0_15px_rgba(168,85,247,0.4)]">
              <FaLayerGroup className="text-xl text-white drop-shadow-md" />
            </div>
            <span className="text-[10px] font-bold text-white tracking-widest leading-none mb-1">TECH</span>
            <span className="text-[10px] font-bold text-white tracking-widest leading-none">STACK</span>
          </div>

          {/* Desktop SVG Routing Lines from Hub to Columns */}
          <div className="hidden lg:block absolute top-full left-1/2 -translate-x-1/2 w-[600px] h-24 overflow-visible pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 600 96">
              {/* Left Line */}
              <motion.path 
                d={generatePath(300, 0, 100, 96)}
                className="stroke-cyan-400/40"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
              />
              {/* Center Line */}
              <motion.path 
                d="M 300 0 L 300 96"
                className="stroke-amber-400/40"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
              />
              {/* Right Line */}
              <motion.path 
                d={generatePath(300, 0, 500, 96)}
                className="stroke-fuchsia-400/40"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
              />
            </svg>
          </div>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 w-full max-w-5xl relative z-10">
          
          {categories.map((category, catIndex) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + (catIndex * 0.2) }}
              className="flex flex-col items-center group relative"
            >
              <h3 className={`text-sm font-bold tracking-[0.2em] mb-6 ${category.textColor} opacity-90 transition-opacity uppercase text-center`}>
                {category.title}
              </h3>

              {/* Group Container Box */}
              <div className={`w-full p-4 rounded-[2rem] bg-[#121826]/80 backdrop-blur-md border ${category.borderColor} shadow-lg transition-all duration-500 ${category.shadowColor} relative`}>
                
                {/* Decorative Side Connecting Lines (Abstract aesthetics) */}
                <div className="hidden lg:block absolute top-[40px] bottom-[40px] -left-12 -right-12 pointer-events-none">
                  <svg className="w-full h-full" viewBox="0 0 400 600" preserveAspectRatio="none" overflow="visible">
                     {/* Left abstract wire */}
                     <motion.path
                        d="M 50 0 C 0 0, 0 40, -40 40"
                        className={category.pathColor}
                        strokeWidth="1.5"
                        fill="none"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={isInView ? { pathLength: 1, opacity: 0.5 } : {}}
                        transition={{ duration: 2, delay: 1 + (catIndex * 0.2) }}
                     />
                     {/* Right abstract wire */}
                     <motion.path
                        d="M 350 600 C 400 600, 400 560, 440 560"
                        className={category.pathColor}
                        strokeWidth="1.5"
                        fill="none"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={isInView ? { pathLength: 1, opacity: 0.5 } : {}}
                        transition={{ duration: 2, delay: 1.2 + (catIndex * 0.2) }}
                     />
                  </svg>
                </div>

                <div className="flex flex-col gap-3 relative z-10">
                  {category.skills.map((skill) => (
                    <motion.div 
                      key={skill.name}
                      whileHover={{ scale: 1.03 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      className="flex flex-col items-center justify-center p-4 rounded-3xl bg-[#0a0f18] border border-white/5 hover:border-white/20 transition-colors shadow-inner"
                    >
                      <img src={skill.src} alt={skill.name} className="w-10 h-10 object-contain mb-3 drop-shadow-md" />
                      <span className="text-sm font-semibold text-white mb-0.5">{skill.name}</span>
                      <span className="text-[10px] text-gray-500 font-medium tracking-wide uppercase">{skill.subtitle}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
          
        </div>
      </div>
    </section>
  );
};

export default Skills;
