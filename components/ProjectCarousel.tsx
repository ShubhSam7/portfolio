"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ProjectCard } from "./ProjectCard";

interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  image?: string;
}

const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management, secure payment processing, and AI-powered product recommendations. Built with modern web technologies for optimal performance.",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Prisma"],
    link: "https://github.com/yourusername/project1",
  },
  {
    title: "AI Content Studio",
    description: "An intelligent content creation platform leveraging GPT-4 and DALL-E for automated blog writing, image generation, and SEO optimization. Features collaborative editing and version control.",
    tags: ["React", "OpenAI", "Node.js", "MongoDB", "Redis"],
    link: "https://github.com/yourusername/project2",
  },
  {
    title: "Real-Time Analytics Dashboard",
    description: "Enterprise-grade analytics platform with live data visualization, custom reporting, and predictive insights. Handles millions of events per second with sub-100ms latency.",
    tags: ["Vue.js", "D3.js", "WebSocket", "ClickHouse", "Docker"],
    link: "https://github.com/yourusername/project3",
  },
  {
    title: "Social Learning Network",
    description: "Community-driven educational platform with live video streaming, interactive code playgrounds, and gamified learning paths. Connects 50k+ developers worldwide.",
    tags: ["SvelteKit", "WebRTC", "Firebase", "TailwindCSS"],
    link: "https://github.com/yourusername/project4",
  },
];

export const ProjectCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="relative min-h-screen w-full bg-[#030303] py-20 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Radial Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#030303_100%)] pointer-events-none" />

      {/* Top Gradient Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-violet-600/10 blur-[120px] opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight font-grotesk mb-4">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400">
              Projects
            </span>
          </h2>
          <p className="text-lg text-zinc-400 font-inter max-w-2xl mx-auto">
            Explore a curated selection of my recent work, showcasing innovation and technical excellence
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative flex items-center justify-center gap-8 md:gap-12 min-h-[500px]">

          {/* Left Arrow */}
          <motion.button
            onClick={prevSlide}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:flex items-center justify-center w-14 h-14 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white/70 hover:text-white hover:bg-violet-600/20 hover:border-violet-400/50 hover:shadow-lg hover:shadow-violet-500/30 transition-all duration-300 z-20"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          {/* Card Display Area */}
          <div className="flex-1 max-w-4xl">
            <AnimatePresence mode="wait">
              <ProjectCard
                key={activeIndex}
                {...projects[activeIndex]}
              />
            </AnimatePresence>
          </div>

          {/* Right Arrow */}
          <motion.button
            onClick={nextSlide}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:flex items-center justify-center w-14 h-14 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white/70 hover:text-white hover:bg-violet-600/20 hover:border-violet-400/50 hover:shadow-lg hover:shadow-violet-500/30 transition-all duration-300 z-20"
            aria-label="Next project"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </div>

        {/* Mobile Navigation Arrows */}
        <div className="flex md:hidden justify-center gap-4 mt-8">
          <motion.button
            onClick={prevSlide}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white/70 active:bg-violet-600/20"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-5 h-5" />
          </motion.button>
          <motion.button
            onClick={nextSlide}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white/70 active:bg-violet-600/20"
            aria-label="Next project"
          >
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {projects.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className={`relative transition-all duration-300 ${
                index === activeIndex
                  ? "w-8 h-2 bg-violet-500 rounded-full shadow-lg shadow-violet-500/50"
                  : "w-2 h-2 bg-white/20 rounded-full hover:bg-white/40"
              }`}
              aria-label={`Go to project ${index + 1}`}
            >
              {index === activeIndex && (
                <motion.div
                  layoutId="activeDot"
                  className="absolute inset-0 bg-gradient-to-r from-violet-400 to-purple-500 rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Project Counter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-8 text-zinc-500 font-mono text-sm"
        >
          {String(activeIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
        </motion.div>
      </div>
    </section>
  );
};
