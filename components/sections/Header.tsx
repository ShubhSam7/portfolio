"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        // Always show header at the top of the page
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down - hide header
        setIsVisible(false);
      } else {
        // Scrolling up - show header
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-[var(--color-light-bg)] backdrop-blur-md border-b border-[var(--color-light-gray)] transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between px-5 h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-[var(--color-orange)] rounded-full flex items-center justify-center text-white font-bold text-base md:text-xl">
              S
            </div>
            <span className="text-lg md:text-xl font-bold text-[var(--color-black)]">
              Shubh
            </span>
          </Link>

          {/* Navigation */}
          <nav className="md:flex items-center gap-4 lg:gap-8">
            <a
              href="#work"
              className="text-sm px-2 lg:text-base text-[var(--color-black)] font-medium hover:text-[var(--color-orange)] transition-colors duration-200"
            >
              Work
            </a>
            <a
              href="#about"
              className="text-sm px-2 lg:text-base text-[var(--color-black)] font-medium hover:text-[var(--color-orange)] transition-colors duration-200"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-sm px-2 lg:text-base text-[var(--color-black)] font-medium hover:text-[var(--color-orange)] transition-colors duration-200"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};
