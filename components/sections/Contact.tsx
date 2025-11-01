'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-[var(--color-light-gray)] to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-[var(--color-yellow)] rounded-full opacity-20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-[var(--color-orange)] rounded-full opacity-20 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl md:text-7xl font-bold text-[var(--color-black)] mb-4">
            Let's Talk
          </h2>
          <p className="text-lg text-[var(--color-gray)] max-w-2xl mx-auto">
            Ready to bring your vision to life? Get in touch and let's create something amazing
            together.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-[var(--color-black)] mb-6">
                Get In Touch
              </h3>
              <p className="text-[var(--color-gray)] leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to
                be part of your vision.
              </p>
            </div>

            <div className="space-y-4">
              {/* Email */}
              <motion.a
                href="mailto:your.email@example.com"
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-yellow)] to-[var(--color-orange)] rounded-full flex items-center justify-center text-white text-xl">
                  ✉️
                </div>
                <div>
                  <p className="text-sm text-[var(--color-gray)]">Email</p>
                  <p className="font-semibold text-[var(--color-black)] group-hover:text-[var(--color-orange)] transition-colors">
                    your.email@example.com
                  </p>
                </div>
              </motion.a>

              {/* LinkedIn */}
              <motion.a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-yellow)] to-[var(--color-orange)] rounded-full flex items-center justify-center text-white text-xl">
                  💼
                </div>
                <div>
                  <p className="text-sm text-[var(--color-gray)]">LinkedIn</p>
                  <p className="font-semibold text-[var(--color-black)] group-hover:text-[var(--color-orange)] transition-colors">
                    /in/yourprofile
                  </p>
                </div>
              </motion.a>

              {/* GitHub */}
              <motion.a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-yellow)] to-[var(--color-orange)] rounded-full flex items-center justify-center text-white text-xl">
                  💻
                </div>
                <div>
                  <p className="text-sm text-[var(--color-gray)]">GitHub</p>
                  <p className="font-semibold text-[var(--color-black)] group-hover:text-[var(--color-orange)] transition-colors">
                    @yourusername
                  </p>
                </div>
              </motion.a>

              {/* Twitter/X */}
              <motion.a
                href="https://twitter.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-yellow)] to-[var(--color-orange)] rounded-full flex items-center justify-center text-white text-xl">
                  🐦
                </div>
                <div>
                  <p className="text-sm text-[var(--color-gray)]">Twitter</p>
                  <p className="font-semibold text-[var(--color-black)] group-hover:text-[var(--color-orange)] transition-colors">
                    @yourhandle
                  </p>
                </div>
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-[var(--color-black)] mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 rounded-lg border border-[var(--color-gray)]/30 focus:border-[var(--color-orange)] focus:outline-none focus:ring-2 focus:ring-[var(--color-orange)]/20 transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-[var(--color-black)] mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-lg border border-[var(--color-gray)]/30 focus:border-[var(--color-orange)] focus:outline-none focus:ring-2 focus:ring-[var(--color-orange)]/20 transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-[var(--color-black)] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-[var(--color-gray)]/30 focus:border-[var(--color-orange)] focus:outline-none focus:ring-2 focus:ring-[var(--color-orange)]/20 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-[var(--color-yellow)] to-[var(--color-orange)] text-white font-semibold rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
