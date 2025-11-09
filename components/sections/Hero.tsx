"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
export const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden bg-[var(--color-light-bg)] pt-24 md:pt-28 lg:pt-32 pb-16 md:pb-20 lg:pb-24"
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 md:space-y-8"
          >
            <h4 className="text-4xl sm:text-5xl md:text-3xl lg:text-3xl 3xl:text-3xl font-bold leading-[1.1]">
              Hi, I am <span className="text-[var(--color-yellow)]">Shubh 👋</span>{" "}
              I build clean, performant, and meaningful digital experiences.  
              <br />
              From sleek websites to scalable software — I craft solutions that work beautifully.
            </h4>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 md:gap-3 px-6 py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 bg-[var(--color-orange)] text-white text-sm md:text-base lg:text-lg font-semibold rounded-full hover:bg-[var(--color-yellow)] hover:text-[var(--color-black)] transition-all duration-300 whitespace-nowrap"
              >
                <div></div>
                See our work
                <svg
                  width="20"
                  height="20"
                  viewBox="5 0 20 20"
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

          {/* Right side - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full max-w-2xl aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-yellow)]/10 to-[var(--color-orange)]/10 rounded-3xl -z-10" />
              <div className="relative w-full h-full flex items-center justify-center p-8">
                <Image
                  src="/hero-image.png"
                  width={800}
                  height={800}
                  alt="Hero illustration"
                  className="object-contain w-full h-full"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
