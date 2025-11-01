'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Carousel } from '../ui/Carousel';
import { StarBorder } from '../ui/StarBorder';

interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  imageUrl?: string;
}

export const Projects = () => {
  // TODO: Add your actual projects here
  const projects: Project[] = [
    {
      title: 'Project One',
      description: 'A full-stack web application built with Next.js and TypeScript. Features include real-time updates, authentication, and a modern UI.',
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
      githubUrl: 'https://github.com/yourusername/project-one',
      liveUrl: 'https://project-one.vercel.app',
      imageUrl: '', // Add your project image here
    },
    {
      title: 'Project Two',
      description: 'An innovative e-commerce platform with advanced filtering, cart management, and payment integration.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      githubUrl: 'https://github.com/yourusername/project-two',
      liveUrl: 'https://project-two.vercel.app',
      imageUrl: '', // Add your project image here
    },
    {
      title: 'Project Three',
      description: 'A creative portfolio website with stunning animations and smooth transitions using Framer Motion.',
      tags: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
      githubUrl: 'https://github.com/yourusername/project-three',
      liveUrl: 'https://project-three.vercel.app',
      imageUrl: '', // Add your project image here
    },
  ];

  const carouselItems = projects.map((project, index) => (
    <div key={index} className="w-full px-4">
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Project Image/Placeholder */}
          <div className="relative h-64 md:h-full bg-gradient-to-br from-[var(--color-yellow)] to-[var(--color-orange)] flex items-center justify-center">
            {project.imageUrl ? (
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="text-center p-8">
                <div className="text-6xl mb-4">🎨</div>
                <p className="text-white text-lg font-semibold">
                  Add your project screenshot here
                </p>
              </div>
            )}
          </div>

          {/* Project Info */}
          <div className="p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-4xl font-bold text-[var(--color-black)] mb-4">
                {project.title}
              </h3>
              <p className="text-[var(--color-gray)] mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-[var(--color-light-gray)] text-[var(--color-black)] text-sm rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex gap-4 flex-wrap">
              <StarBorder href={project.githubUrl} className="flex-1 min-w-[140px]">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                GitHub
              </StarBorder>

              <StarBorder href={project.liveUrl} className="flex-1 min-w-[140px]">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                Live Demo
              </StarBorder>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-white to-[var(--color-light-gray)] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl md:text-7xl font-bold text-[var(--color-black)] mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-[var(--color-gray)] max-w-2xl mx-auto">
            Explore some of the projects I've built with passion and dedication
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          <Carousel items={carouselItems} autoPlay={true} interval={6000} />
        </motion.div>

        {/* Additional Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-black)] text-white font-semibold rounded-full hover:bg-[var(--color-orange)] transform hover:scale-105 transition-all duration-300"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};
