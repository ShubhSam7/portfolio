"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
});

interface Project {
  title: string;
  description: string;
  image: string;
  liveUrl: string;
  githubUrl: string;
}

const projectsData: Project[] = [
  {
    title: "Project One",
    description:
      "A full-stack web application built with Next.js and TypeScript",
    image: "/hero-image.png", // Replace with actual project screenshot
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project-one",
  },
  {
    title: "Project Two",
    description:
      "Modern e-commerce platform with real-time inventory management",
    image: "/hero-image.png", // Replace with actual project screenshot
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project-two",
  },
  {
    title: "Project Three",
    description: "Progressive web app for task management and collaboration",
    image: "/hero-image.png", // Replace with actual project screenshot
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project-three",
  },
];

export const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance slideshow
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isPaused]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % projectsData.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + projectsData.length) % projectsData.length
    );
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section
      id="projects"
      className="min-h-screen md:py-8 lg:py-10 bg-white flex items-center"
    >
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-10"
        >
          <h2 className={`text-5xl font-thin ${playfair.className}`}>
            My Projects
          </h2>
        </motion.div>

        {/* Container with Navigation Buttons Outside */}
        <div
          className="relative mx-auto px-16 md:px-20"
          style={{ maxWidth: "100%" }}
        >
          {/* Navigation Arrows - Outside Component */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 group z-10"
            aria-label="Previous project"
          >
            <svg
              className="w-6 h-6 text-gray-700 group-hover:text-[var(--color-orange)] transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 group z-10"
            aria-label="Next project"
          >
            <svg
              className="w-6 h-6 text-gray-700 group-hover:text-[var(--color-orange)] transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Slideshow Container */}
          <div
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
                style={{ minHeight: "500px" }}
              >
                {/* Flex Container for Image and Details */}
                <div className="flex flex-col md:flex-row h-full">
                  {/* Project Image - Left Side */}
                  <div className="relative w-full md:w-1/2 min-h-[300px] md:min-h-[500px] bg-gradient-to-br from-gray-100 to-gray-200">
                    <Image
                      src={projectsData[currentIndex].image}
                      alt={projectsData[currentIndex].title}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>

                  {/* Project Details - Right Side */}
                  <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">
                      {projectsData[currentIndex].title}
                    </h3>
                    <p className="text-gray-600 text-lg md:text-xl mb-8">
                      {projectsData[currentIndex].description}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4">
                      <a
                        href={projectsData[currentIndex].liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 bg-[var(--color-orange)] text-white rounded-full font-semibold hover:bg-[var(--color-yellow)] hover:scale-105 hover:shadow-lg transition-all duration-300"
                      >
                        Live Demo
                      </a>
                      <a
                        href={projectsData[currentIndex].githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 bg-[var(--color-yellow)] text-white rounded-full font-semibold hover:bg-[var(--color-orange)] hover:scale-105 hover:shadow-lg transition-all duration-300"
                      >
                        GitHub Code
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3 mt-6">
          {projectsData.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? "w-12 h-3 bg-[var(--color-orange)]"
                  : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>

        {/* Project Counter */}
        <div className="text-center mt-4 text-gray-500 font-light">
          {currentIndex + 1} / {projectsData.length}
        </div>
      </div>
    </section>
  );
};
