import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 w-full max-w-[100vw] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Name */}
          <div className="flex items-center">
            <div>
              <span className="text-sm font-heading font-bold text-white">Ram Kapadia</span>
              <p className="text-gray-500 text-[10px] font-mono">AI/ML Engineer</p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {[
              { icon: FaGithub, href: 'https://github.com/ram-49-kaps', label: 'GitHub' },
              { icon: FaLinkedin, href: 'https://linkedin.com/in/ram-kapadia-a382332a3', label: 'LinkedIn' },
              { icon: FaEnvelope, href: 'mailto:ramkapadia49@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-gray-500 hover:text-white hover:bg-white/5 transition-all duration-300"
                aria-label={label}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-gray-500 text-xs flex items-center gap-1">
            © {currentYear} Ram Kapadia. Made with <FaHeart className="text-red-500 text-[10px]" /> and React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
