'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ClickSpark } from '../ui/ClickSpark';
import { RotatingText } from '../ui/RotatingText';

export const Hero = () => {
  const roles = [
    'Full Stack Developer',
    'UI/UX Enthusiast',
    'Creative Coder',
    'Problem Solver',
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[var(--color-light-gray)] to-white"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 2 === 0
                ? 'radial-gradient(circle, rgba(253,189,37,0.1) 0%, transparent 70%)'
                : 'radial-gradient(circle, rgba(255,132,38,0.1) 0%, transparent 70%)',
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <h1 className="text-7xl md:text-9xl font-bold mb-4 text-[var(--color-black)]">
              Hi, I'm{' '}
              <ClickSpark>
                <span className="text-[var(--color-orange)]">
                  Your Name
                </span>
              </ClickSpark>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-4xl mb-8 h-12 font-medium"
          >
            <span className="text-[var(--color-black)]">I'm a </span>
            <RotatingText texts={roles} interval={2500} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-[var(--color-gray)] max-w-2xl mx-auto mb-12"
          >
            Creating beautiful, functional, and user-friendly digital experiences with modern
            technologies. Let's build something amazing together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#projects"
              className="px-8 py-4 bg-[var(--color-orange)] text-white font-semibold rounded-full hover:bg-[var(--color-yellow)] hover:text-[var(--color-black)] hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              See My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-[var(--color-orange)] text-[var(--color-orange)] font-semibold rounded-full hover:bg-[var(--color-orange)] hover:text-white transform hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-[var(--color-orange)] rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1.5 h-3 bg-[var(--color-orange)] rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
