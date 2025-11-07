"use client";

import React from "react";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden bg-[var(--color-light-bg)] pt-20"
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Your <span className="text-[var(--color-yellow)]">story</span>{" "}
              matters
              <br />
              We make sure it's seen
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--color-orange)] text-white text-lg font-semibold rounded-full hover:bg-[var(--color-yellow)] hover:text-[var(--color-black)] transition-all duration-300"
              >
                See our work
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
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
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="w-full max-w-2xl aspect-square bg-gradient-to-br from-[var(--color-yellow)]/10 to-[var(--color-orange)]/10 rounded-3xl flex items-center justify-center">
              <div className="text-center space-y-4 p-12">
                <div className="text-8xl">🎨</div>
                <p className="text-2xl font-semibold text-[var(--color-gray)]">
                  Illustration placeholder
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
