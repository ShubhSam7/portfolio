"use client";

import React from "react";
import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side - Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 md:space-y-6"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
              Let's Talk
            </h2>
            <p className="text-lg md:text-xl text-[var(--color-black)]">
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
                className="inline-flex items-center gap-2 md:gap-3 px-6 py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 bg-[var(--color-orange)] text-white text-sm md:text-base lg:text-lg font-semibold rounded-full hover:bg-[var(--color-yellow)] hover:text-black transition-all duration-300 whitespace-nowrap"
              >
                Book a call
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0"
                >
                  <path
                    d="M4 10H16M16 10L10 4M16 10L10 16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
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
              <div className="text-center space-y-4 p-8 md:p-12">
                <div className="text-6xl md:text-7xl lg:text-8xl">📞</div>
                <p className="text-xl md:text-2xl font-semibold text-[var(--color-gray)]">
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
