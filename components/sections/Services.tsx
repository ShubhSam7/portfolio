'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const Services = () => {
  const services = [
    {
      icon: '✏️',
      title: 'Illustration',
      description: 'that elevate your brand – whether it is an icon, illustration or a mascot. Images that compliment your story.',
    },
    {
      icon: '🎬',
      title: 'Animation',
      description: 'bringing your ideas to life – subtle animations, social posts, or explainer videos. Visuals that enhance your message.',
    },
    {
      icon: '🎯',
      title: 'Creative Direction',
      description: 'guiding your brand vision – shaping your visual identity, crafting compelling campaigns, and ensuring consistency.',
    },
  ];

  return (
    <section className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Yellow decorative bars */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-[var(--color-yellow)]" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-[var(--color-yellow)]" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-16">Our services</h2>

          <div className="space-y-12 max-w-4xl">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex gap-6"
              >
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-[var(--color-light-bg)] rounded-2xl flex items-center justify-center text-4xl">
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-3">{service.title}</h3>
                  <p className="text-[var(--color-black)] text-lg leading-relaxed">
                    {service.description}
                  </p>
                  <a
                    href="#"
                    className="inline-block text-[var(--color-yellow)] font-semibold hover:underline mt-3"
                  >
                    see projects
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
