'use client';

import React from 'react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      {/* Black footer section */}
      <div className="bg-[var(--color-black)] text-white py-16 md:py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
            {/* Left - Brand & Contact */}
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold">YourName</h3>
              <div className="space-y-3">
                <p className="text-white/80">Get in touch</p>
                <a
                  href="mailto:hello@yourname.com"
                  className="text-white hover:text-[var(--color-yellow)] transition-colors duration-200 block"
                >
                  hello@yourname.com
                </a>
              </div>
              {/* Social Icons */}
              <div className="flex gap-4 pt-4">
                <a
                  href="https://linkedin.com/in/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[var(--color-yellow)] transition-colors duration-200 text-2xl"
                  aria-label="LinkedIn"
                >
                  in
                </a>
                <a
                  href="https://behance.net/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[var(--color-yellow)] transition-colors duration-200 text-2xl"
                  aria-label="Behance"
                >
                  Be
                </a>
                <a
                  href="https://dribbble.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[var(--color-yellow)] transition-colors duration-200 text-2xl"
                  aria-label="Dribbble"
                >
                  ⚾
                </a>
              </div>
            </div>

            {/* Right - Navigation */}
            <div className="flex justify-end">
              <nav className="space-y-4 text-right">
                <a
                  href="#home"
                  className="block text-white hover:text-[var(--color-yellow)] transition-colors duration-200 text-lg"
                >
                  Home
                </a>
                <a
                  href="#work"
                  className="block text-white hover:text-[var(--color-yellow)] transition-colors duration-200 text-lg"
                >
                  Work
                </a>
                <a
                  href="#about"
                  className="block text-white hover:text-[var(--color-yellow)] transition-colors duration-200 text-lg"
                >
                  About
                </a>
                <a
                  href="#contact"
                  className="block text-white hover:text-[var(--color-yellow)] transition-colors duration-200 text-lg"
                >
                  Contact
                </a>
              </nav>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <p className="text-white/60 text-sm">
              ©{currentYear} YourName. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
