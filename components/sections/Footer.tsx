'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SiGithub, SiLinkedin, SiX, SiGmail } from 'react-icons/si';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/yourusername', icon: <SiGithub /> },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/yourprofile', icon: <SiLinkedin /> },
    { name: 'Twitter', url: 'https://twitter.com/yourhandle', icon: <SiX /> },
    { name: 'Email', url: 'mailto:your.email@example.com', icon: <SiGmail /> },
  ];

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Tech Stack', href: '#tech-stack' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[var(--color-black)] text-white py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[var(--color-yellow)] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--color-orange)] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-4xl font-bold text-[var(--color-orange)]">
              Your Name
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Creating beautiful, functional, and user-friendly digital experiences with passion
              and dedication.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-2xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-[var(--color-orange)] transition-colors text-lg"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-2xl font-bold mb-6">Connect</h4>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-14 h-14 bg-white/10 hover:bg-[var(--color-orange)] rounded-xl flex items-center justify-center text-2xl transition-all"
                  title={link.name}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-8 border-t border-white/10 text-center"
        >
          <p className="text-gray-400">
            © {currentYear} Your Name. Built with{' '}
            <span className="text-[var(--color-orange)] font-semibold">Next.js</span> and{' '}
            <span className="text-[var(--color-orange)] font-semibold">Tailwind CSS</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
