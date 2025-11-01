'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { LogoLoop } from '../ui/LogoLoop';

export const TechStack = () => {
  const technologies = [
    { name: 'React', icon: '⚛️' },
    { name: 'Next.js', icon: '▲' },
    { name: 'TypeScript', icon: '💠' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Tailwind', icon: '🎨' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Git', icon: '📚' },
    { name: 'AWS', icon: '☁️' },
  ];

  // Note: Replace these emojis with actual SVG icons for better appearance
  // You can add your own tech stack logos here

  return (
    <section id="tech-stack" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[var(--color-light-gray)] to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[var(--color-light-gray)] to-transparent" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl md:text-7xl font-bold text-[var(--color-black)] mb-4">
            Tech Stack
          </h2>
          <p className="text-lg text-[var(--color-gray)] max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <LogoLoop logos={technologies} speed={30} />

        {/* Additional skills grid (optional) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto"
        >
          {technologies.slice(0, 10).map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
              className="bg-gradient-to-br from-white to-[var(--color-light-gray)] p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center gap-3 border border-[var(--color-gray)]/10"
            >
              <div className="text-5xl">{tech.icon}</div>
              <span className="text-sm font-semibold text-[var(--color-black)]">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
