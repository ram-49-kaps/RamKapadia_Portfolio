import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'ResFlow',
    category: 'AI Research Platform',
    description: 'A comprehensive Research Management System streamlining the academic lifecycle through a 7-stage workflow. Features a privacy-first AI engine with 384-dimensional semantic vectors for precise guide matching and local Transformers for novelty checks — completely eliminating API costs.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.IO', 'Transformers', 'TF-IDF'],
    github: 'https://github.com/ram-49-kaps',
    demo: 'https://res-flow-neon.vercel.app/',
    image: '/projects/photo_2_chrono.png',
    color: 'from-blue-500 to-cyan-400',
    shadow: 'shadow-blue-500/20',
  },
  {
    title: 'AI Auditorium Lighting',
    category: 'Automation System',
    description: 'An autonomous AI-driven Lighting Automation System that translates theatrical scripts into professional DMX cue sequences. Powered by DistilRoBERTa for emotion classification and custom Graph RAG, synchronized with a real-time 3D simulation environment, reducing manual programming by 80%.',
    technologies: ['Graph RAG', 'DistilRoBERTa', 'FastAPI', 'Three.js', 'WebSockets', 'RLHF'],
    github: 'https://github.com/ram-49-kaps',
    demo: 'https://automated-auditorium-lighting-finl.vercel.app/',
    image: '/projects/photo_3_chrono.png',
    color: 'from-purple-500 to-pink-500',
    shadow: 'shadow-purple-500/20',
  },
  {
    title: 'FlawlessByDrashti',
    category: 'E-Commerce & Salon platform',
    description: 'A state-of-the-art beauty salon management platform blending premium aesthetics with AI capabilities. Provides a seamless booking experience for customers and a powerful management dashboard for the business owner, resulting in a 40% increase in customer engagement.',
    technologies: ['React', 'Tailwind CSS', 'LangChain', 'Groq', 'MySQL', 'TiDB Cloud'],
    github: 'https://github.com/ram-49-kaps',
    demo: 'https://flawlessbydrashti.in/',
    image: '/projects/photo_4_chrono.png',
    color: 'from-pink-500 to-rose-400',
    shadow: 'shadow-pink-500/20',
  },
  {
    title: 'TalentScout AI',
    category: 'AI Interview Assistant',
    description: 'An intelligent platform that conducts automated technical interviews. It evaluates candidate responses in real-time utilizing Large Language Models (LLMs) and contextual memory, generating comprehensive, unbiased assessment reports for hiring teams.',
    technologies: ['Python', 'LLMs', 'Streamlit', 'NLP', 'LangChain', 'AI'],
    github: 'https://github.com/ram-49-kaps',
    demo: 'https://huggingface.co/spaces/ram49k/talentscout-ai-hiring-assistant',
    image: '/projects/photo_5_chrono.png',
    color: 'from-emerald-400 to-teal-500',
    shadow: 'shadow-emerald-500/20',
  },
  {
    title: 'DharmaAI',
    category: 'AI Legal Assistant',
    description: 'An advanced legal reasoning chatbot for Indian jurisprudence, powered by Groq (Llama 3) and a custom RAG pipeline with ChromaDB. Features intent-based routing via LangChain, IRAC/IDAR reasoning templates, and Indian Knowledge Systems (IKS) integration — bridging modern law with ancient Dharmic principles.',
    technologies: ['React', 'FastAPI', 'LangChain', 'Groq', 'ChromaDB', 'Llama 3'],
    github: 'https://github.com/ram-49-kaps',
    demo: 'https://dharma-ai-nine.vercel.app/',
    image: '/projects/photo_6_dharmaai.png',
    color: 'from-amber-500 to-orange-500',
    shadow: 'shadow-amber-500/20',
  },
  {
    title: 'AI Voice Booking Agent',
    category: 'AI Voice Agent',
    description: 'An AI-powered salon booking agent featuring real-time voice calling via Vapi.ai, a FastAPI backend for appointment management, Twilio SMS confirmations, and a React Native admin dashboard with push notifications — delivering a fully autonomous, hands-free booking experience.',
    technologies: ['Vapi.ai', 'FastAPI', 'Twilio', 'React Native', 'Python', 'PostgreSQL'],
    github: 'https://github.com/ram-49-kaps',
    demo: 'https://vapi.ai/?demo=true&shareKey=b2c1d8f0-a28e-416e-a31e-99ab8c22e219&assistantId=e134e224-7e4d-45e2-a2e4-128d654b84cb',
    image: '/projects/photo_7_voicebookai.png',
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
              <div className="h-px w-12 bg-accent-neon" />
              <h2 className="text-sm font-semibold text-accent-neon tracking-widest uppercase">
                Selected Work
              </h2>
            </div>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-2xl leading-tight text-white">
              Featured <span className="text-gray-500">Projects.</span>
            </h3>
          </div>
          <p className="text-gray-400 max-w-sm text-center md:text-right text-sm">
            A selection of my recent AI and full-stack engineering projects, built for performance and scale.
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 + 0.2 }}
              className="group relative flex flex-col"
            >
              {/* Image / Visual Container */}
              <div className="relative w-full aspect-[16/9] md:aspect-[4/3] rounded-3xl overflow-hidden mb-6 bg-dark-800 border border-white/5">
                {/* Real Screenshot */}
                {project.image && (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" 
                  />
                )}
                
                {/* Colored tint for blending */}
                <div className={`absolute inset-0 bg-accent-neon opacity-10 mix-blend-overlay group-hover:opacity-20 transition-opacity`} />
                
                {/* Glass overlay that hides the image partially until hovered */}
                <div className="absolute inset-0 bg-dark-900/60 opacity-100 group-hover:opacity-0 transition-all duration-500" />
                
                {/* Center graphic (fades out on hover to show the clear image) */}
                <div className="absolute inset-0 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                   <div className="absolute text-3xl font-bold text-white/40 tracking-widest uppercase select-none drop-shadow-lg">
                     {project.category.split(' ')[0]}
                   </div>
                </div>

                {/* Floating links on hover */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 z-10">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white/10 md:backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all shadow-xl"
                  >
                    <FaGithub size={20} />
                  </a>
                  {project.demo !== '#' && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-white/10 md:backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all shadow-xl"
                    >
                      <FaExternalLinkAlt size={18} />
                    </a>
                  )}
                </div>
              </div>

              {/* Data Content */}
              <div className="flex-1 flex flex-col px-2">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-2 h-2 rounded-full bg-accent-neon" />
                  <span className="text-sm font-medium text-gray-400 tracking-wide uppercase">{project.category}</span>
                </div>
                
                <h4 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-accent-neon transition-colors duration-300">
                  {project.title}
                </h4>
                
                <p className="text-gray-400 text-base leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-xs font-semibold rounded-full bg-white/[0.03] text-gray-300 border border-white/5"
                    >
                      {tech}
                    </span>
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

export default Projects;
