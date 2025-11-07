'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SiGmail, SiLinkedin, SiGithub, SiX } from 'react-icons/si';

export const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-gradient-to-b from-[var(--color-light-gray)] to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-[var(--color-yellow)] rounded-full opacity-10 blur-3xl"
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
          className="absolute bottom-20 right-10 w-96 h-96 bg-[var(--color-orange)] rounded-full opacity-10 blur-3xl"
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
          className="text-center mb-20"
        >
          <h2 className="text-6xl md:text-8xl font-bold text-[var(--color-black)] mb-6">
            Let's Talk
          </h2>
          <p className="text-lg md:text-xl text-[var(--color-gray)] max-w-2xl mx-auto">
            Ready to bring your vision to life? Get in touch and let's create something amazing
            together.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-4xl font-bold text-[var(--color-black)] mb-6">
                Get In Touch
              </h3>
              <p className="text-[var(--color-gray)] leading-relaxed text-lg">
                I'm always open to discussing new projects, creative ideas, or opportunities to
                be part of your vision.
              </p>
            </div>

            <div className="space-y-4">
              {/* Email */}
              <motion.a
                href="mailto:your.email@example.com"
                whileHover={{ x: 10 }}
                className="flex items-center gap-5 p-6 bg-white rounded-2xl hover:shadow-2xl transition-all group border border-[var(--color-gray)]/10"
              >
                <div className="w-14 h-14 bg-[var(--color-orange)] rounded-xl flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-transform">
                  <SiGmail />
                </div>
                <div>
                  <p className="text-sm text-[var(--color-gray)] font-medium">Email</p>
                  <p className="font-semibold text-[var(--color-black)] text-lg group-hover:text-[var(--color-orange)] transition-colors">
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
                className="flex items-center gap-5 p-6 bg-white rounded-2xl hover:shadow-2xl transition-all group border border-[var(--color-gray)]/10"
              >
                <div className="w-14 h-14 bg-[var(--color-orange)] rounded-xl flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-transform">
                  <SiLinkedin />
                </div>
                <div>
                  <p className="text-sm text-[var(--color-gray)] font-medium">LinkedIn</p>
                  <p className="font-semibold text-[var(--color-black)] text-lg group-hover:text-[var(--color-orange)] transition-colors">
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
                className="flex items-center gap-5 p-6 bg-white rounded-2xl hover:shadow-2xl transition-all group border border-[var(--color-gray)]/10"
              >
                <div className="w-14 h-14 bg-[var(--color-orange)] rounded-xl flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-transform">
                  <SiGithub />
                </div>
                <div>
                  <p className="text-sm text-[var(--color-gray)] font-medium">GitHub</p>
                  <p className="font-semibold text-[var(--color-black)] text-lg group-hover:text-[var(--color-orange)] transition-colors">
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
                className="flex items-center gap-5 p-6 bg-white rounded-2xl hover:shadow-2xl transition-all group border border-[var(--color-gray)]/10"
              >
                <div className="w-14 h-14 bg-[var(--color-orange)] rounded-xl flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-transform">
                  <SiX />
                </div>
                <div>
                  <p className="text-sm text-[var(--color-gray)] font-medium">Twitter</p>
                  <p className="font-semibold text-[var(--color-black)] text-lg group-hover:text-[var(--color-orange)] transition-colors">
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
            className="bg-white rounded-3xl shadow-2xl p-10 border border-[var(--color-gray)]/10"
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-[var(--color-black)] mb-3">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-5 py-4 rounded-xl border border-[var(--color-gray)]/30 focus:border-[var(--color-orange)] focus:outline-none focus:ring-2 focus:ring-[var(--color-orange)]/20 transition-all text-base"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-[var(--color-black)] mb-3">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-5 py-4 rounded-xl border border-[var(--color-gray)]/30 focus:border-[var(--color-orange)] focus:outline-none focus:ring-2 focus:ring-[var(--color-orange)]/20 transition-all text-base"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-[var(--color-black)] mb-3">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-5 py-4 rounded-xl border border-[var(--color-gray)]/30 focus:border-[var(--color-orange)] focus:outline-none focus:ring-2 focus:ring-[var(--color-orange)]/20 transition-all resize-none text-base"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-5 bg-[var(--color-orange)] text-white font-semibold text-lg rounded-xl hover:bg-[var(--color-yellow)] hover:text-[var(--color-black)] hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
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
