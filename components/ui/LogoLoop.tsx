'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface LogoLoopProps {
  logos: { name: string; icon: React.ReactNode }[];
  speed?: number;
}

export const LogoLoop: React.FC<LogoLoopProps> = ({ logos, speed = 50 }) => {
  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="relative w-full overflow-hidden py-12">
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[var(--color-light-gray)] via-transparent to-[var(--color-light-gray)]"></div>
      <motion.div
        className="flex gap-12"
        animate={{
          x: ['0%', '-50%'],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex flex-col items-center justify-center gap-3 px-6"
          >
            <div className="text-5xl">{logo.icon}</div>
            <span className="text-sm font-medium text-[var(--color-gray)]">
              {logo.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
