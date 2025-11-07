"use client";

import React from "react";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-[var(--color-light-gray)]">
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-[var(--color-orange)] rounded-full flex items-center justify-center text-white font-bold text-base md:text-xl">
              Y
            </div>
            <span className="text-lg md:text-xl font-bold text-[var(--color-black)]">
              YourName
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-8">
            <a
              href="#work"
              className="text-sm lg:text-base text-[var(--color-black)] font-medium hover:text-[var(--color-orange)] transition-colors duration-200"
            >
              Work
            </a>
            <a
              href="#about"
              className="text-sm lg:text-base text-[var(--color-black)] font-medium hover:text-[var(--color-orange)] transition-colors duration-200"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-sm lg:text-base text-[var(--color-black)] font-medium hover:text-[var(--color-orange)] transition-colors duration-200"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};
