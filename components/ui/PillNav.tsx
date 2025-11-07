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
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 bg-white/90 backdrop-blur-xl rounded-full px-3 py-3 shadow-2xl border border-[var(--color-gray)]/10">
      <ul className="flex gap-1 relative">
        {items.map((item, index) => (
          <li key={index} className="relative">
            <button
              onClick={() => handleClick(index, item.href)}
              className={`relative z-10 px-6 py-2.5 text-sm font-semibold transition-colors rounded-full ${
                activeIndex === index
                  ? 'text-white'
                  : 'text-[var(--color-black)] hover:text-[var(--color-orange)]'
              }`}
            >
              {item.label}
              {activeIndex === index && (
                <motion.div
                  layoutId="pill"
                  className="absolute inset-0 bg-[var(--color-orange)] rounded-full -z-10"
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
