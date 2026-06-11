import React from 'react';

const Logo = ({ className = "w-10 h-10 sm:w-12 sm:h-12 border-[2.5px]", textClassName = "text-lg sm:text-xl mt-0.5" }) => {
  return (
    <div className={`flex items-center justify-center rounded-full border-accent-neon shrink-0 ${className}`}>
      <span className={`text-white font-bold tracking-tighter leading-none flex items-baseline ${textClassName}`}>
        rk<span className="text-accent-neon">.</span>
      </span>
    </div>
  );
};

export default Logo;
