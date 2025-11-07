'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  subtitle: string;
  description: string;
  imageUrl?: string;
}

export const Projects = () => {
  const projects: Project[] = [
    {
      title: 'SurrealDB Illustrations',
      subtitle: 'Illustration | Creative direction',
      description: 'A series of custom illustrations created for the SurrealDB blog. The work focused on aligning with the brand\'s color palette, maintaining accurate human proportions, and achieving a ...',
      imageUrl: '',
    },
    {
      title: 'Roar Lite',
      subtitle: 'Character design',
      description: 'Our goal was to create a mascot for 1771 Technologies.',
      imageUrl: '',
    },
    {
      title: 'Padmission Journey',
      subtitle: 'Animation | Explainer video | Creative direction',
      description: 'We created a presentation video for a company to showcase how their app works. Through close communication with the client and carefully listening to their vision, we realized they wanted ...',
      imageUrl: '',
    },
  ];

  return (
    <section id="work" className="py-24 md:py-32 bg-[var(--color-light-bg)]">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Featured work</h2>
          <div className="flex items-start justify-between gap-8">
            <div className="flex-1">
              {/* Large featured project image placeholder */}
              <div className="w-full aspect-video bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl mb-6">
                <div className="w-full h-full flex items-center justify-center text-white">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🎨</div>
                    <p className="text-xl font-semibold">Featured Project Image</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl md:text-3xl font-bold">{projects[0].title}</h3>
                <p className="text-[var(--color-gray)]">{projects[0].subtitle}</p>
                <p className="text-[var(--color-black)] leading-relaxed">
                  {projects[0].description}
                </p>
                <a
                  href="#"
                  className="inline-block text-[var(--color-yellow)] font-semibold hover:underline mt-2"
                >
                  see project
                </a>
              </div>
            </div>

            {/* Side illustration */}
            <div className="hidden lg:block w-96">
              <div className="w-full aspect-square bg-gradient-to-br from-[var(--color-yellow)]/10 to-[var(--color-orange)]/10 rounded-3xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🎨</div>
                  <p className="text-lg font-semibold text-[var(--color-gray)]">
                    Illustration
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-right">
            <p className="text-lg">
              Explore more projects – get a closer look{' '}
              <a href="#" className="text-[var(--color-yellow)] font-semibold underline">
                at the range of work
              </a>{' '}
              we've done
            </p>
          </div>
        </motion.div>

        {/* Grid of additional projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-12 mt-24"
        >
          {projects.slice(1).map((project, index) => (
            <div key={index} className="space-y-4">
              <div className="w-full aspect-video bg-gradient-to-br from-blue-200 to-green-200 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🎨</div>
                  <p className="text-xl font-semibold text-gray-700">Project Image</p>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="text-[var(--color-gray)]">{project.subtitle}</p>
                <p className="text-[var(--color-black)] leading-relaxed">
                  {project.description}
                </p>
                <a
                  href="#"
                  className="inline-block text-[var(--color-yellow)] font-semibold hover:underline mt-2"
                >
                  see project
                </a>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
