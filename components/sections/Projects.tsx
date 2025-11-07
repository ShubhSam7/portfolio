'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Carousel } from '../ui/Carousel';
import { StarBorder } from '../ui/StarBorder';
import { SiGithub } from 'react-icons/si';
import { FiExternalLink } from 'react-icons/fi';

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
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-5xl mx-auto border border-[var(--color-gray)]/5">
        <div className="grid lg:grid-cols-2 gap-0">
          {/* Project Image/Placeholder */}
          <div className="relative h-80 lg:h-full bg-[var(--color-orange)] flex items-center justify-center">
            {project.imageUrl ? (
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="text-center p-8">
                <div className="text-8xl mb-6 text-white/50">🎨</div>
                <p className="text-white text-lg font-semibold">
                  Add your project screenshot here
                </p>
                <p className="text-white/70 text-sm mt-2">
                  1200x800px recommended
                </p>
              </div>
            )}
          </div>

          {/* Project Info */}
          <div className="p-10 flex flex-col justify-between">
            <div>
              <h3 className="text-5xl font-bold text-[var(--color-black)] mb-6">
                {project.title}
              </h3>
              <p className="text-[var(--color-gray)] mb-8 leading-relaxed text-lg">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-3 mb-8">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-4 py-2 bg-[var(--color-light-gray)] text-[var(--color-black)] text-sm rounded-full font-medium border border-[var(--color-orange)]/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex gap-4 flex-wrap">
              <StarBorder href={project.githubUrl} className="flex-1 min-w-[160px] justify-center">
                <SiGithub className="w-5 h-5" />
                <span>GitHub</span>
              </StarBorder>

              <StarBorder href={project.liveUrl} className="flex-1 min-w-[160px] justify-center bg-[var(--color-yellow)] hover:bg-[var(--color-orange)]">
                <FiExternalLink className="w-5 h-5" />
                <span>Live Demo</span>
              </StarBorder>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <section id="projects" className="py-32 bg-gradient-to-b from-white to-[var(--color-light-gray)] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl md:text-8xl font-bold text-[var(--color-black)] mb-6">
            Featured Projects
          </h2>
          <p className="text-lg md:text-xl text-[var(--color-gray)] max-w-2xl mx-auto">
            Explore some of the projects I've built with passion and dedication
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-7xl mx-auto mb-20"
        >
          <Carousel items={carouselItems} autoPlay={true} interval={6000} />
        </motion.div>

        {/* Additional Projects Link */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-[var(--color-black)] text-white font-semibold text-lg rounded-full hover:bg-[var(--color-orange)] transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
          >
            <SiGithub className="w-6 h-6" />
            <span>View All Projects on GitHub</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
