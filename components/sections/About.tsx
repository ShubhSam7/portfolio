'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center space-y-6"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            We are <span className="text-[var(--color-yellow)]">YourName.Collective</span>. We're a small group of visual storytellers who believe that good ideas deserve to be felt — not just seen. With illustration and animation, we bring your message to life in ways word can't.
          </h2>
        </motion.div>
      </div>
    </section>
  );
};
