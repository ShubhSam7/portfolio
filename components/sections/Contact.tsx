'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-5xl md:text-6xl font-bold">Let's Talk</h2>
            <p className="text-xl text-[var(--color-black)]">
              Ready to bring your vision to life?
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <a
                href="mailto:your.email@example.com"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--color-orange)] text-white text-lg font-semibold rounded-full hover:bg-[var(--color-yellow)] hover:text-[var(--color-black)] transition-all duration-300"
              >
                Book a call
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </motion.div>
          </motion.div>

          {/* Right side - Illustration placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="w-full max-w-lg aspect-square bg-gradient-to-br from-[var(--color-yellow)]/10 to-[var(--color-orange)]/10 rounded-3xl flex items-center justify-center">
              <div className="text-center space-y-4 p-12">
                <div className="text-8xl">📞</div>
                <p className="text-2xl font-semibold text-[var(--color-gray)]">
                  Contact illustration
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
