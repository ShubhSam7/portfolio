'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const Clients = () => {
  const clients = [
    'SurrealDB',
    'Women in Haptology Network',
    'PADMISSION JOURNEY',
  ];

  return (
    <section className="py-24 md:py-32 bg-[var(--color-yellow)]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-black)] mb-16">
            Trusted by teams big and small
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-2xl md:text-3xl font-bold text-[var(--color-black)]"
              >
                {client}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
