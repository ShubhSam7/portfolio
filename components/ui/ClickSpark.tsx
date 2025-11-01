'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Spark {
  id: number;
  x: number;
  y: number;
}

export const ClickSpark = ({ children }: { children: React.ReactNode }) => {
  const [sparks, setSparks] = useState<Spark[]>([]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newSpark = {
      id: Date.now(),
      x,
      y,
    };

    setSparks((prev) => [...prev, newSpark]);

    setTimeout(() => {
      setSparks((prev) => prev.filter((spark) => spark.id !== newSpark.id));
    }, 1000);
  };

  return (
    <div onClick={handleClick} className="relative inline-block cursor-pointer">
      {children}
      <AnimatePresence>
        {sparks.map((spark) => (
          <motion.div
            key={spark.id}
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 1.5, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute pointer-events-none"
            style={{
              left: spark.x,
              top: spark.y,
            }}
          >
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ x: 0, y: 0 }}
                animate={{
                  x: Math.cos((i * Math.PI * 2) / 8) * 40,
                  y: Math.sin((i * Math.PI * 2) / 8) * 40,
                }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="absolute w-1 h-1 bg-[var(--color-orange)] rounded-full"
                style={{ left: -2, top: -2 }}
              />
            ))}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
