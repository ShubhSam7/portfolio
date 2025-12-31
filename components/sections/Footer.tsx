"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

// Footer Links Data
const footerData = {
  explore: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
  connect: [
    { label: "GitHub", href: "https://github.com/ShubhSam7", icon: Github },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/shubh-samaiya-9a3aa527b/", icon: Linkedin },
    { label: "Twitter", href: "https://x.com/jainnwin", icon: Twitter },
    { label: "Email", href: "mailto:shubhsamaiya7@gmail.com", icon: Mail },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookies", href: "/cookies" },
  ],
};

// Scroll to Top Button Component
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0 }}
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white/70 hover:text-white hover:bg-violet-600/20 hover:border-violet-400/50 hover:shadow-lg hover:shadow-violet-500/30 transition-all duration-300 group"
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
    </motion.button>
  );
};

export const Footer = () => {
  return (
    <footer className="relative w-full bg-[#030303] overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Radial Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#030303_100%)] pointer-events-none" />

      {/* Bottom Gradient Accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-indigo-600/5 blur-[100px] opacity-50 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-8">
        {/* Top Section - Logo & Tagline */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight font-grotesk mb-4 drop-shadow-[0_0_30px_rgba(139,92,246,0.3)]">
              SHUBH
            </h2>
            <p className="text-lg text-zinc-400 font-inter">
              Building the digital future, one line at a time
            </p>
          </motion.div>
        </div>

        {/* Gradient Separator */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-16" />

        {/* Bottom Section - 3 Column Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Column 1 - Explore */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-sm font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 mb-6">
              Explore
            </h3>
            <nav className="space-y-3">
              {footerData.explore.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 font-inter"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Column 2 - Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-sm font-bold uppercase tracking-widest text-purple-400 mb-6">
              Connect
            </h3>
            <nav className="space-y-3">
              {footerData.connect.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 font-inter group"
                  >
                    <Icon className="w-4 h-4 text-purple-400 group-hover:text-purple-300" />
                    {link.label}
                  </a>
                );
              })}
            </nav>
          </motion.div>

          {/* Column 3 - Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-sm font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 mb-6">
              Legal
            </h3>
            <nav className="space-y-3">
              {footerData.legal.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 font-inter"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center pt-8 border-t border-white/5"
        >
          <p className="text-zinc-500 text-sm font-inter">
            © {new Date().getFullYear()} Shubh. All rights reserved. Built with{" "}
            <span className="text-purple-400">Next.js</span> &{" "}
            <span className="text-purple-400">Three.js</span>
          </p>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </footer>
  );
};
