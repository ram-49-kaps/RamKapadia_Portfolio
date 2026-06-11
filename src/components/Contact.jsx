import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

const contactLinks = [
  { icon: FaEnvelope, href: 'mailto:ramkapadia49@gmail.com', label: 'Email' },
  { icon: FaLinkedin, href: 'https://linkedin.com/in/ram-kapadia-a382332a3', label: 'LinkedIn' },
  { icon: FaGithub, href: 'https://github.com/ram-49-kaps', label: 'GitHub' },
  { icon: FaPhone, href: 'tel:+919409699664', label: 'Phone' },
];

const Contact = () => {
  const ref = useRef(null);
  const formRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('loading');

    // NOTE: User must replace these placeholders with their actual EmailJS keys!
    const serviceId = 'YOUR_SERVICE_ID';
    const templateId = 'YOUR_TEMPLATE_ID';
    const publicKey = 'YOUR_PUBLIC_KEY';

    if (serviceId === 'YOUR_SERVICE_ID') {
      setStatus('error');
      alert("Please configure your EmailJS keys in src/components/Contact.jsx to enable email sending!");
      return;
    }

    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      .then((result) => {
          setStatus('success');
          e.target.reset();
          setTimeout(() => setStatus('idle'), 5000);
      }, (error) => {
          console.error(error);
          setStatus('error');
          setTimeout(() => setStatus('idle'), 5000);
      });
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-[40rem] h-[40rem] bg-[radial-gradient(circle_at_center,_rgba(0,255,136,0.05)_0%,_transparent_60%)] rounded-full -translate-y-1/2 pointer-events-none will-change-transform" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left side text & info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex flex-col h-full"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-6 leading-tight">
              Let's build something <span className="text-accent-neon">extraordinary.</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-lg">
              I am open to summer internships for 2026, freelance opportunities, and collaborative AI/ML projects. Fill out the form, and I'll get back to you as soon as possible.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              {contactLinks.map((link, i) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center text-white hover:text-accent-neon hover:border-accent-neon/50 hover:bg-accent-neon/10 transition-all duration-300 shadow-lg hover:shadow-[0_0_15px_rgba(0,255,136,0.3)] hover:-translate-y-1"
                >
                  <link.icon className="text-xl" />
                </a>
              ))}
            </div>

            <div className="mt-auto p-6 rounded-3xl bg-gradient-to-br from-[#00ff88]/5 to-transparent border border-[#00ff88]/20 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#00ff88]/20 blur-3xl rounded-full" />
              <h3 className="text-white font-bold text-xl mb-2">Direct Contact</h3>
              <p className="text-gray-300 font-medium">+91 9409699664</p>
              <p className="text-gray-300 font-medium">ramkapadia49@gmail.com</p>
              <p className="text-gray-500 text-sm mt-4">Bengaluru, Karnataka, India</p>
            </div>
          </motion.div>

          {/* Right side form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full"
          >
            <form 
              ref={formRef} 
              onSubmit={sendEmail}
              className="p-8 md:p-10 rounded-[2.5rem] bg-[#1A1C1E] border border-white/5 shadow-2xl relative overflow-hidden group"
            >
              {/* Form border glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00ff88]/0 to-[#00ff88]/0 group-hover:from-[#00ff88]/5 transition-all duration-500 pointer-events-none" />

              <div className="flex flex-col gap-6 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="relative">
                    <input 
                      type="text" 
                      id="user_name"
                      name="user_name" 
                      required 
                      placeholder="Your Name"
                      className="peer w-full bg-[#121416] border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-accent-neon focus:ring-1 focus:ring-accent-neon transition-all placeholder-transparent"
                    />
                    <label 
                      htmlFor="user_name"
                      className="absolute left-4 -top-2.5 text-sm text-gray-300 bg-[#1A1C1E] px-1 transition-all rounded pointer-events-none peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-accent-neon peer-focus:bg-[#1A1C1E]"
                    >
                      Your Name
                    </label>
                  </div>
                  <div className="relative">
                    <input 
                      type="email" 
                      id="user_email"
                      name="user_email" 
                      required 
                      placeholder="Your Email"
                      className="peer w-full bg-[#121416] border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-accent-neon focus:ring-1 focus:ring-accent-neon transition-all placeholder-transparent"
                    />
                    <label 
                      htmlFor="user_email"
                      className="absolute left-4 -top-2.5 text-sm text-gray-300 bg-[#1A1C1E] px-1 transition-all rounded pointer-events-none peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-accent-neon peer-focus:bg-[#1A1C1E]"
                    >
                      Your Email
                    </label>
                  </div>
                </div>

                <div className="relative mt-2">
                  <input 
                    type="text" 
                    id="subject"
                    name="subject" 
                    required 
                    placeholder="Subject"
                    className="peer w-full bg-[#121416] border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-accent-neon focus:ring-1 focus:ring-accent-neon transition-all placeholder-transparent"
                  />
                  <label 
                    htmlFor="subject"
                    className="absolute left-4 -top-2.5 text-sm text-gray-300 bg-[#1A1C1E] px-1 transition-all rounded pointer-events-none peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-accent-neon peer-focus:bg-[#1A1C1E]"
                  >
                    Subject
                  </label>
                </div>

                <div className="relative mt-2">
                  <textarea 
                    id="message"
                    name="message" 
                    required 
                    rows="5"
                    placeholder="Message"
                    className="peer w-full bg-[#121416] border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-accent-neon focus:ring-1 focus:ring-accent-neon transition-all resize-none placeholder-transparent"
                  />
                  <label 
                    htmlFor="message"
                    className="absolute left-4 -top-2.5 text-sm text-gray-300 bg-[#1A1C1E] px-1 transition-all rounded pointer-events-none peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-accent-neon peer-focus:bg-[#1A1C1E]"
                  >
                    Message
                  </label>
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="mt-2 w-full py-4 rounded-2xl bg-accent-neon text-dark-900 font-bold text-lg hover:bg-emerald-400 hover:shadow-[0_0_20px_rgba(0,255,136,0.4)] hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === 'loading' ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-dark-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : 'Send Message'}
                </button>

                {/* Status Messages */}
                {status === 'success' && (
                  <div className="flex items-center justify-center gap-2 text-[#00ff88] mt-2">
                    <FaCheckCircle />
                    <span>Message sent successfully!</span>
                  </div>
                )}
                {status === 'error' && (
                  <div className="flex items-center justify-center gap-2 text-red-500 mt-2 text-center text-sm">
                    <FaExclamationCircle className="shrink-0" />
                    <span>Failed to send. Please check your EmailJS configuration.</span>
                  </div>
                )}

              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
