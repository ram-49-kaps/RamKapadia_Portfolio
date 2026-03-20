import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const timelineData = [
  {
    title: 'M.Sc. Artificial Intelligence & Machine Learning',
    organization: 'Christ University, Bengaluru',
    period: 'Jun 2025 — Mar 2027',
    description: 'Pursuing advanced studies in AI/ML, covering deep learning, NLP, computer vision, and intelligent systems.',
    category: 'Education',
  },
  {
    title: 'Bachelor of Computer Applications (BCA)',
    organization: 'C.B. Patel Computer Commerce College, Surat',
    period: 'Apr 2022 — Mar 2025 • 8.26 CGPA',
    description: 'Built a strong foundation in computer science, programming, databases, and software engineering.',
    category: 'Education',
  },
  {
    title: 'Social Media Handler',
    organization: 'Grootinn, Surat',
    period: 'Jul 2024 — Nov 2024',
    description: 'Managed daily social media operations across Instagram and Facebook. Created engaging posts, reels, and promotional content to increase audience reach.',
    category: 'Experience',
  },
  {
    title: 'Sales Associate',
    organization: 'ToxicMale, Surat',
    period: 'May 2023 — Jun 2023',
    description: 'Achieved daily sales targets through persuasive communication. Engaged with customers to recommend suitable products.',
    category: 'Experience',
  },
  {
    title: 'Inclusi AI Hackathon',
    organization: 'Christ University, Pune Campus',
    period: '2024',
    description: 'Participated in an AI-focused hackathon, developing innovative solutions for inclusivity and accessibility challenges.',
    category: 'Awards & Leadership',
  },
  {
    title: 'Smart India Hackathon (SIH)',
    organization: 'National Level',
    period: '2024',
    description: 'Competed in India\'s premier national hackathon, tackling real-world problems with technology-driven solutions.',
    category: 'Awards & Leadership',
  },
  {
    title: 'Event Media & Content Lead',
    organization: 'College Events',
    period: '2023 — 2024',
    description: 'Managed photography, videography, and social media coverage for college events. Led creative content teams.',
    category: 'Awards & Leadership',
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-accent-blue" />
            <h2 className="text-sm font-semibold text-accent-blue tracking-widest uppercase">
              Milestones
            </h2>
            <div className="h-px w-12 bg-accent-blue" />
          </div>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold max-w-2xl mx-auto leading-tight text-white">
            Experience &amp; <span className="text-gray-500">Education.</span>
          </h3>
        </motion.div>

        {/* Timeline */}
        <div className="relative ml-4 md:ml-0">
          {/* Vertical center line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 overflow-hidden">
             <motion.div 
                animate={{ y: ['-100%', '100%'] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="w-full h-1/2 bg-gradient-to-b from-transparent via-accent-blue/40 to-transparent"
             />
          </div>

          <div className="space-y-12">
            {timelineData.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center w-full ${
                  i % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Spacer to push center dot into middle */}
                <div className="hidden md:block md:w-5/12" />

                {/* Center dot - shared between mobile/desktop layout logic */}
                <div className="absolute -left-[32px] md:relative md:w-2/12 flex items-center justify-center flex-shrink-0 md:z-20">
                   <div className="hidden md:block absolute h-px bg-white/10 w-1/2 top-1/2 -translate-y-1/2" style={{
                      left: i % 2 === 0 ? '0' : '50%',
                   }}/>
                   
                   {/* Animated Pulsating Pin */}
                   <div className="relative flex items-center justify-center">
                      <motion.div 
                         animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.1, 0.3] }}
                         transition={{ duration: 3, repeat: Infinity }}
                         className="absolute w-10 h-10 rounded-full bg-accent-blue/20 blur-sm"
                      />
                      <div className="relative z-10 w-4 h-4 rounded-full bg-dark-900 border-[3px] border-accent-blue ring-4 ring-dark-900 shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
                   </div>
                </div>

                <div className="w-full md:w-5/12 pl-8 md:pl-0">
                  <div className={`p-6 sm:p-8 rounded-[2rem] glass border border-white/5 hover:border-white/20 transition-all bg-[#121826]/60 group relative overflow-hidden ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    
                    {/* Corner decorative bracket */}
                    <div className={`absolute top-4 ${i % 2 === 0 ? 'right-4' : 'left-4'} opacity-10 group-hover:opacity-30 transition-opacity z-0 pointer-events-none`}>
                       <div className={`w-10 h-10 border-t-2 ${i % 2 === 0 ? 'border-r-2 rounded-tr-xl' : 'border-l-2 rounded-tl-xl'} border-white`} />
                    </div>

                    <div className="relative z-10">
                      <span className="inline-block px-3 py-1 text-[10px] sm:text-xs font-bold rounded-full bg-white/5 text-gray-400 mb-4 border border-white/10 uppercase tracking-widest group-hover:text-accent-blue transition-colors">
                        {item.period}
                      </span>
                      
                      <h4 className="text-xl md:text-2xl font-extrabold text-white mb-2 font-heading tracking-tight">
                        {item.title}
                      </h4>
                      
                      <div className="text-accent-blue font-bold text-sm mb-4 tracking-wide">
                        {item.organization}
                      </div>
                      
                      <p className="text-gray-400 leading-relaxed text-sm md:text-base font-medium">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
