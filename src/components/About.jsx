import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiSparkles, HiCode, HiLightBulb } from 'react-icons/hi';

const InfoCard = ({ number, text, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.5, delay }}
    className="p-6 rounded-[2rem] glass border border-white/5 bg-[#121826]/40 hover:border-accent-blue/30 transition-all group"
  >
    <div className="text-3xl md:text-4xl font-heading font-extrabold gradient-text mb-2 group-hover:scale-110 transition-transform origin-left">{number}</div>
    <div className="text-[10px] text-gray-500 font-bold tracking-widest uppercase">{text}</div>
  </motion.div>
);

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding relative overflow-hidden bg-[#0a0f18]">
      {/* Structural background lines */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      
      <div className="hidden md:block absolute top-0 right-0 w-[40rem] h-[40rem] bg-accent-blue/5 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none will-change-transform" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-accent-blue" />
            <h2 className="text-sm font-semibold text-accent-cyan tracking-widest uppercase">
              About Me
            </h2>
          </div>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold max-w-2xl leading-tight">
            Bridging the gap between <span className="text-gray-400">complex AI models</span> and <span className="text-white">elegant user interfaces.</span>
          </h3>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Column: Bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              I am a highly motivated AI/ML Engineer and Full-Stack Developer currently pursuing my M.Sc. in Artificial Intelligence &amp; Machine Learning at Christ University, Bengaluru.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              My expertise lies in building intelligent systems—from NLP and Large Language Models (LLMs) to Graph RAG and deep learning—and integrating them seamlessly into modern, high-performance web applications using React and Node.js.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              Whether it's automating auditorium lighting with AI or building privacy-first research management systems, I thrive on turning ambitious ideas into polished, working realities.
            </p>

            <div className="pt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
              <InfoCard number="3+" text="Years Coding" delay={0.4} />
              <InfoCard number="4+" text="Major Projects" delay={0.5} />
              <InfoCard number="2+" text="Hackathons" delay={0.6} />
            </div>
          </motion.div>

          {/* Right Column: Bento Config capabilities */}
          <div className="lg:col-span-5 grid gap-4">
            {/* Bento Card 1 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-8 rounded-[2.5rem] glass border border-white/5 bg-[#121826]/60 relative overflow-hidden group hover:border-accent-purple/30 transition-all"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-20 transition-opacity duration-500 group-hover:scale-125">
                <HiSparkles className="text-8xl text-accent-purple" />
              </div>
              <div className="relative z-10 w-14 h-14 rounded-2xl bg-accent-purple/10 flex items-center justify-center mb-8 border border-accent-purple/20">
                <HiSparkles className="text-2xl text-accent-purple" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3 tracking-tight">AI & Machine Learning</h4>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                Specialized in LLMs, RAG architectures, Vector Search, and predictive modeling algorithms.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
              {/* Bento Card 2 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="p-6 rounded-[2rem] glass border border-white/5 bg-[#121826]/60 hover:border-accent-cyan/30 transition-all group"
              >
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-accent-blue/10 flex items-center justify-center border border-accent-blue/20 flex-shrink-0 group-hover:scale-110 transition-transform">
                    <HiCode className="text-2xl text-accent-cyan" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">Full-Stack Web</h4>
                    <p className="text-gray-400 text-xs">Modern React, Node.js, and FastAPI architectures.</p>
                  </div>
                </div>
              </motion.div>

              {/* Bento Card 3 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="p-6 rounded-[2rem] glass border border-white/5 bg-[#121826]/60 hover:border-emerald-500/30 transition-all group"
              >
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 flex-shrink-0 group-hover:scale-110 transition-transform">
                    <HiLightBulb className="text-2xl text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">Architecture</h4>
                    <p className="text-gray-400 text-xs">Elegant system scaling and intuitive user flows.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
