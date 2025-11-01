'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface NavItem {
  label: string;
  href: string;
}

interface PillNavProps {
  items: NavItem[];
}

export const PillNav: React.FC<PillNavProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index: number, href: string) => {
    setActiveIndex(index);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-white/80 backdrop-blur-md rounded-full px-2 py-2 shadow-lg border border-[var(--color-gray)]/20">
      <ul className="flex gap-2 relative">
        {items.map((item, index) => (
          <li key={index} className="relative">
            <button
              onClick={() => handleClick(index, item.href)}
              className={`relative z-10 px-6 py-2 text-sm font-medium transition-colors rounded-full ${
                activeIndex === index
                  ? 'text-white'
                  : 'text-[var(--color-black)] hover:text-[var(--color-orange)]'
              }`}
            >
              {item.label}
              {activeIndex === index && (
                <motion.div
                  layoutId="pill"
                  className="absolute inset-0 bg-gradient-to-r from-[var(--color-yellow)] to-[var(--color-orange)] rounded-full -z-10"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
