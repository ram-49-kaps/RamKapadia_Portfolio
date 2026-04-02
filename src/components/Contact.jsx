import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';

const contactLinks = [
  {
    icon: FaEnvelope,
    label: 'Email',
    value: 'ramkapadia49@gmail.com',
    href: 'mailto:ramkapadia49@gmail.com',
    color: 'text-white group-hover:text-red-400',
    bg: 'bg-red-500/10 group-hover:bg-red-500/20',
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/ram-kapadia',
    href: 'https://linkedin.com/in/ram-kapadia-a382332a3',
    color: 'text-white group-hover:text-blue-400',
    bg: 'bg-blue-500/10 group-hover:bg-blue-500/20',
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    value: 'github.com/ram-49-kaps',
    href: 'https://github.com/ram-49-kaps',
    color: 'text-white group-hover:text-gray-300',
    bg: 'bg-white/5 group-hover:bg-white/10',
  },
  {
    icon: FaPhone,
    label: 'Phone',
    value: '+91 9409699664',
    href: 'tel:+919409699664',
    color: 'text-white group-hover:text-emerald-400',
    bg: 'bg-emerald-500/10 group-hover:bg-emerald-500/20',
  },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[40rem] h-[40rem] bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.08)_0%,_transparent_60%)] rounded-full -translate-y-1/2 pointer-events-none will-change-transform" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative" ref={ref}>
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Left side text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-6 leading-tight">
              Let's build something <span className="gradient-text">extraordinary.</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              I am open to summer internships for 2025, freelance opportunities, and collaborative AI/ML projects. Let's chat about how my skills can bring value to your team.
            </p>
          </motion.div>

          {/* Right side cards */}
          <div className="grid gap-4">
            {contactLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.label === 'Phone' || link.label === 'Email' ? '_self' : '_blank'}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex items-center justify-between p-6 rounded-3xl glass border border-white/5 hover:border-white/10 bg-gradient-to-r from-white/[0.02] to-transparent hover:bg-white/[0.04] transition-all duration-300"
              >
                <div className="flex items-center gap-5">
                  <div className={`w-14 h-14 rounded-2xl ${link.bg} flex flex-shrink-0 items-center justify-center transition-colors duration-300`}>
                    <link.icon className={`text-xl ${link.color} transition-colors duration-300`} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">{link.label}</h3>
                    <p className="text-gray-400 text-sm mt-1">{link.value}</p>
                  </div>
                </div>
                
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300 group-hover:scale-110">
                  <HiArrowRight />
                </div>
              </motion.a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
