import { motion, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { FaLayerGroup } from 'react-icons/fa';

const categories = [
  {
    title: 'FRONTEND',
    color: 'from-[#00ff88] to-emerald-500',
    borderColor: 'border-[#00ff88]/20 hover:border-[#00ff88]/40',
    shadowColor: 'group-hover:shadow-[0_0_20px_rgba(0,255,136,0.15)]',
    textColor: 'text-accent-neon',
    pathColor: 'stroke-[#00ff88]/25',
    skills: [
      { name: 'React', subtitle: 'Component-based UI', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
      { name: 'JavaScript', subtitle: 'Dynamic Web Logic', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
      { name: 'TypeScript', subtitle: 'Static Typing', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
      { name: 'Tailwind CSS', subtitle: 'Utility Styling', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' }
    ]
  },
  {
    title: 'BACKEND & DATA',
    color: 'from-[#00ff88] to-emerald-500',
    borderColor: 'border-[#00ff88]/20 hover:border-[#00ff88]/40',
    shadowColor: 'group-hover:shadow-[0_0_20px_rgba(0,255,136,0.15)]',
    textColor: 'text-accent-neon',
    pathColor: 'stroke-[#00ff88]/25',
    skills: [
      { name: 'Node.js', subtitle: 'Server-side JS', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
      { name: 'Python', subtitle: 'General Purpose Logic', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
      { name: 'MongoDB', subtitle: 'NoSQL Database', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
      { name: 'FastAPI', subtitle: 'Web Framework', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg' },
      { name: 'MySQL', subtitle: 'Relational Database', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' }
    ]
  },
  {
    title: 'AI & AGENTIC AI',
    color: 'from-[#00ff88] to-emerald-500',
    borderColor: 'border-[#00ff88]/20 hover:border-[#00ff88]/40',
    shadowColor: 'group-hover:shadow-[0_0_20px_rgba(0,255,136,0.15)]',
    textColor: 'text-accent-neon',
    pathColor: 'stroke-[#00ff88]/25',
    skills: [
      {
        name: 'LangChain',
        subtitle: 'LLM Orchestration',
        icon: (
          <svg className="w-10 h-10 mb-3 text-accent-neon drop-shadow-md" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
          </svg>
        )
      },
      {
        name: 'LangGraph',
        subtitle: 'Multi-Agent Flows',
        icon: (
          <svg className="w-10 h-10 mb-3 text-accent-neon drop-shadow-md" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="5" r="2.5" className="fill-accent-neon/20" />
            <circle cx="5" cy="18" r="2.5" className="fill-accent-neon/20" />
            <circle cx="19" cy="18" r="2.5" className="fill-accent-neon/20" />
            <line x1="12" y1="7.5" x2="6.5" y2="15.5" />
            <line x1="12" y1="7.5" x2="17.5" y2="15.5" />
            <line x1="7.5" y1="18" x2="16.5" y2="18" />
          </svg>
        )
      },
      { name: 'PyTorch', subtitle: 'Machine Learning', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg' },
      { name: 'TensorFlow', subtitle: 'Deep Learning', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg' }
    ]
  },
  {
    title: 'TOOLS & DEVOPS',
    color: 'from-[#00ff88] to-emerald-500',
    borderColor: 'border-[#00ff88]/20 hover:border-[#00ff88]/40',
    shadowColor: 'group-hover:shadow-[0_0_20px_rgba(0,255,136,0.15)]',
    textColor: 'text-accent-neon',
    pathColor: 'stroke-[#00ff88]/25',
    skills: [
      { name: 'Docker', subtitle: 'Containerization', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
      { name: 'Git', subtitle: 'Version Control', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
      { name: 'Postman', subtitle: 'API Testing', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg' },
      { name: 'Google Cloud', subtitle: 'Cloud Infrastructure', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg' },
      { name: 'AWS', subtitle: 'Cloud Deployment', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' }
    ]
  }
];

// Generates the orthogonal curved paths for the top routing
const generatePath = (startX, startY, endX, endY) => {
  const midY = startY + (endY - startY) / 2;
  return `M ${startX} ${startY} C ${startX} ${midY}, ${endX} ${midY}, ${endX} ${endY}`;
};

// Canvas-based neural network animation
const NeuralCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const particles = [];
    const maxParticles = window.innerWidth < 768 ? 35 : 75;
    const connectionDist = 120;

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.35;
        this.vy = (Math.random() - 0.5) * 0.35;
        this.radius = Math.random() * 2 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 255, 136, 0.8)';
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#00ff88';
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    // Initialize particles
    for (let i = 0; i < maxParticles; i++) {
      particles.push(new Particle());
    }

    let mouse = { x: null, y: null };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    const handleMouseClick = (e) => {
      const rect = canvas.getBoundingClientRect();
      for (let i = 0; i < 5; i++) {
        const p = new Particle();
        p.x = e.clientX - rect.left;
        p.y = e.clientY - rect.top;
        p.vx = (Math.random() - 0.5) * 4;
        p.vy = (Math.random() - 0.5) * 4;
        particles.push(p);
      }
      if (particles.length > maxParticles + 20) {
        particles.splice(0, 5);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    canvas.addEventListener('click', handleMouseClick);

    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);

          if (dist < connectionDist) {
            const alpha = (1 - dist / connectionDist) * 0.3;
            ctx.strokeStyle = `rgba(0, 255, 136, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }

        // Draw connections to mouse and pull slightly
        if (mouse.x !== null && mouse.y !== null) {
          const mDist = Math.hypot(p1.x - mouse.x, p1.y - mouse.y);
          if (mDist < 200) {
            const alpha = (1 - mDist / 200) * 0.6;
            ctx.strokeStyle = `rgba(0, 255, 136, ${alpha})`;
            ctx.lineWidth = 1.2;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
            
            p1.x += (mouse.x - p1.x) * 0.03;
            p1.y += (mouse.y - p1.y) * 0.03;
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Handle canvas resize dynamically
      if (canvas.width !== canvas.offsetWidth || canvas.height !== canvas.offsetHeight) {
        width = canvas.width = canvas.offsetWidth;
        height = canvas.height = canvas.offsetHeight;
      }

      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      drawConnections();

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      if (canvas) {
        canvas.removeEventListener('mouseleave', handleMouseLeave);
        canvas.removeEventListener('click', handleMouseClick);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section 
      id="skills" 
      className="relative min-h-[100svh] w-full max-w-[100vw] bg-[#1A1C1E] py-24 flex items-center justify-center overflow-hidden border-t border-white/5" 
      ref={ref}
    >
      {/* Background Neural Canvas Animation */}
      <NeuralCanvas />

      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,255,136,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center z-10">
        
        {/* Central Top Hub */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative z-20 flex flex-col items-center mb-16 md:mb-24"
        >
          <div className="w-24 h-28 rounded-2xl bg-gradient-to-b from-[#22252a] to-[#121416] border border-white/10 shadow-[0_0_30px_rgba(0,255,136,0.05)] flex flex-col items-center justify-center pt-2 pb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00ff88] to-emerald-600 flex items-center justify-center mb-2 shadow-[0_0_15px_rgba(0,255,136,0.3)]">
              <FaLayerGroup className="text-xl text-dark-900 font-bold" />
            </div>
            <span className="text-[10px] font-bold text-white tracking-widest leading-none mb-1">TECH</span>
            <span className="text-[10px] font-bold text-white tracking-widest leading-none">STACK</span>
          </div>

          {/* Desktop SVG Routing Lines from Hub to Columns */}
          <div className="hidden lg:block absolute top-full left-1/2 -translate-x-1/2 w-[1100px] h-24 overflow-visible pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 1100 96">
              {/* Routing lines glowing in brand Neon Green */}
              {[137.5, 412.5, 687.5, 962.5].map((destX, index) => (
                <motion.path 
                  key={index}
                  d={generatePath(550, 0, destX, 96)}
                  className="stroke-[#00ff88]/40"
                  strokeWidth="2.5"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : {}}
                  transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
                />
              ))}
            </svg>
          </div>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 w-full max-w-7xl relative z-10">
          
          {categories.map((category, catIndex) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + (catIndex * 0.2) }}
              className="flex flex-col items-center group relative animate-glow"
            >
              <h3 className="text-sm font-bold tracking-[0.2em] mt-8 mb-6 text-white group-hover:text-accent-neon transition-colors duration-300 uppercase text-center">
                {category.title}
              </h3>

              {/* Group Container Box */}
              <div className={`w-full p-4 rounded-[2rem] bg-[#22252a]/70 md:backdrop-blur-md border ${category.borderColor} shadow-lg transition-all duration-500 ${category.shadowColor} relative`}>
                
                {/* Decorative Side Connecting Lines (Green theme) */}
                <div className="hidden lg:block absolute top-[40px] bottom-[40px] -left-12 -right-12 pointer-events-none">
                  <svg className="w-full h-full" viewBox="0 0 400 600" preserveAspectRatio="none" overflow="visible">
                     <motion.path
                        d="M 50 0 C 0 0, 0 40, -40 40"
                        className={category.pathColor}
                        strokeWidth="1.5"
                        fill="none"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={isInView ? { pathLength: 1, opacity: 0.5 } : {}}
                        transition={{ duration: 2, delay: 1 + (catIndex * 0.2) }}
                     />
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
                      className="flex flex-col items-center justify-center p-4 rounded-3xl bg-[#1A1C1E]/80 border border-white/5 hover:border-[#00ff88]/30 hover:bg-[#1A1C1E] transition-all shadow-inner"
                    >
                      {skill.icon ? (
                        skill.icon
                      ) : (
                        <img src={skill.src} alt={skill.name} className="w-10 h-10 object-contain mb-3 drop-shadow-md" />
                      )}
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
