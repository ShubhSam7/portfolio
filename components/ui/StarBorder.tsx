'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface StarBorderProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const StarBorder: React.FC<StarBorderProps> = ({
  href,
  children,
  className = '',
}) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium transition-all bg-[var(--color-orange)] rounded-full group ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="absolute top-0 right-0 w-4 h-4 transition-all duration-500 ease-in-out bg-[var(--color-yellow)] rounded-full group-hover:w-full group-hover:h-full"></span>
      <span className="absolute inset-0 w-full h-full rounded-full opacity-30 filter blur-sm bg-gradient-to-br from-[var(--color-yellow)] to-[var(--color-orange)] group-hover:opacity-50"></span>

      {/* Stars */}
      {[...Array(5)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute text-[var(--color-yellow)]"
          initial={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1, opacity: 1 }}
          transition={{
            delay: i * 0.1,
            duration: 0.3,
          }}
          style={{
            left: `${20 + i * 15}%`,
            top: i % 2 === 0 ? '-10px' : 'auto',
            bottom: i % 2 !== 0 ? '-10px' : 'auto',
          }}
        >
          ✦
        </motion.span>
      ))}

      <span className="relative z-10 text-white flex items-center gap-2">
        {children}
      </span>
    </motion.a>
  );
};
