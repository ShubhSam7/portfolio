'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { LogoLoop } from '../ui/LogoLoop';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiAmazon
} from 'react-icons/si';

export const TechStack = () => {
  const technologies = [
    { name: 'React', icon: <SiReact className="text-[#61DAFB]" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="text-black" /> },
    { name: 'TypeScript', icon: <SiTypescript className="text-[#3178C6]" /> },
    { name: 'Node.js', icon: <SiNodedotjs className="text-[#339933]" /> },
    { name: 'Tailwind', icon: <SiTailwindcss className="text-[#06B6D4]" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" /> },
    { name: 'PostgreSQL', icon: <SiPostgresql className="text-[#4169E1]" /> },
    { name: 'Docker', icon: <SiDocker className="text-[#2496ED]" /> },
    { name: 'Git', icon: <SiGit className="text-[#F05032]" /> },
    { name: 'AWS', icon: <SiAmazon className="text-[#FF9900]" /> },
  ];

  return (
    <section id="tech-stack" className="py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[var(--color-light-gray)] to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[var(--color-light-gray)] to-transparent" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl md:text-8xl font-bold text-[var(--color-black)] mb-6">
            Tech Stack
          </h2>
          <p className="text-lg md:text-xl text-[var(--color-gray)] max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <LogoLoop logos={technologies} speed={30} />

        {/* Additional skills grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center gap-4 border border-[var(--color-gray)]/10 group"
            >
              <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                {tech.icon}
              </div>
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
