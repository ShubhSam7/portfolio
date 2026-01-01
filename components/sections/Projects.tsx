"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Layers, ChevronLeft, ChevronRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

// --- Utility ---
function cn(...inputs: string[]) {
  return inputs.filter(Boolean).join(" ");
}

// --- Data Models ---
interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubLink: string;
  liveLink: string;
  gradient: string;
  image?: string;
}

const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Cipher",
    description: "An anonymous social media and information-sharing platform built exclusively for IIIT Nagpur students. Cipher enables secure, identity-free discussions, campus-wide announcements, and real-time interactions while maintaining privacy and moderation controls.",
    tags: ["Next.js", "TypeScript", "Node.js", "Prisma", "PostgreSQL", "Vercel"],
    githubLink: "https://github.com/ShubhSam7/cipher",
    liveLink: "https://cipher.shubh.works",
    gradient: "from-indigo-500 via-purple-500 to-blue-500",
  },
  {
    id: "2",
    title: "Second-Brain",
    description: "An AI-powered second brain application that allows users to save links, notes, and resources in one place. The system automatically generates semantic embeddings, enabling intelligent search, contextual recall, and AI-generated summaries across personal knowledge.",
    tags: ["TypeScript", "Llama API", "Pinecone", "Vector DB", "NextAuth", "Next.js"],
    githubLink: "https://github.com/ShubhSam7/second-brain",
    liveLink: "https://second-brain.shubh.works/",
    gradient: "from-purple-500 via-pink-500 to-indigo-500",
  },
  {
    id: "3",
    title: "Visitor Management System",
    description: "A centralized visitor management system designed for the IIIT Nagpur campus. The platform captures visitor photos, logs entry details, prioritizes sensitive requests, and streamlines meeting approvals with professors through a secure and structured workflow.",
    tags: ["React", "TypeScript", "Node.js", "Supabase", "QR Code", "Email Automation"],
    githubLink: "https://github.com/omPatil3690/DBMS_Project-VMS",
    liveLink: "",
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
  },
];

// --- Card Variants ---
const cardVariants = {
  active: {
    scale: 1.08,
    opacity: 1,
    filter: "blur(0px)",
    zIndex: 10,
    transition: { type: "spring" as const, stiffness: 140, damping: 20 },
  },
  adjacent: {
    scale: 0.9,
    opacity: 0.4,
    filter: "blur(12px)",
    zIndex: 1,
    pointerEvents: "none" as const,
    transition: { type: "spring" as const, stiffness: 140, damping: 20 },
  },
  hidden: {
    scale: 0.85,
    opacity: 0,
    filter: "blur(14px)",
    zIndex: 0,
    pointerEvents: "none" as const,
    transition: { type: "spring" as const, stiffness: 140, damping: 20 },
  },
};

// --- Navigation Button Component ---
interface NavigationButtonProps {
  direction: "left" | "right";
  onClick: () => void;
  disabled: boolean;
}

const NavigationButton = ({ direction, onClick, disabled }: NavigationButtonProps) => {
  const Icon = direction === "left" ? ChevronLeft : ChevronRight;

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      whileHover={!disabled ? { scale: 1.1 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
      className={cn(
        "absolute top-1/2 -translate-y-1/2 z-30",
        "w-12 h-12 rounded-full",
        "bg-white/10 backdrop-blur-md border border-white/20",
        "flex items-center justify-center",
        "transition-all duration-300",
        direction === "left" ? "left-4" : "right-4",
        disabled
          ? "opacity-40 cursor-not-allowed"
          : "hover:bg-white/20 cursor-pointer"
      )}
    >
      <Icon className="w-6 h-6 text-white" />
    </motion.button>
  );
};

// --- Pagination Dots Component ---
interface PaginationDotsProps {
  total: number;
  activeIndex: number;
  onDotClick: (index: number) => void;
}

const PaginationDots = ({ total, activeIndex, onDotClick }: PaginationDotsProps) => {
  return (
    <div className="flex justify-center items-center gap-2 mt-8">
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          className={cn(
            "rounded-full transition-all duration-300",
            "hover:scale-110",
            index === activeIndex
              ? "w-2.5 h-2.5 bg-white"
              : "w-2 h-2 bg-white/30 hover:bg-white/50"
          )}
          aria-label={`Go to project ${index + 1}`}
        />
      ))}
    </div>
  );
};

// --- Carousel Card Component ---
interface CarouselCardProps {
  project: Project;
  position: "active" | "adjacent" | "hidden";
}

const CarouselCard = ({ project, position }: CarouselCardProps) => {
  return (
    <motion.div
      variants={cardVariants}
      animate={position}
      className="w-[450px] min-w-[450px]"
    >
      <div className="relative h-full group">
        {/* Soft Glow */}
        <div
          className={cn(
            "absolute -inset-4 opacity-0 blur-3xl transition-opacity duration-700 bg-gradient-to-br",
            position === "active" ? "group-hover:opacity-40" : "",
            project.gradient
          )}
          style={{ zIndex: -1 }}
        />

        {/* Glass Card - CHANGED: h-[600px] to h-[650px] */}
        <div className="relative h-[650px] rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 overflow-hidden shadow-2xl flex flex-col">
          {/* Thumbnail - CHANGED: h-64 to h-60 to give text more room */}
          <div className="relative h-60 min-h-[15rem] overflow-hidden flex-shrink-0">
            {project.image ? (
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover opacity-90"
              />
            ) : (
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-br opacity-80",
                  project.gradient
                )}
              />
            )}
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          </div>

          {/* Content - CHANGED: p-8/space-y-6 to p-6/space-y-4 */}
          <div className="p-6 space-y-4 flex flex-col h-full">
            {/* Title */}
            <h3 className="font-grotesk text-3xl font-bold text-white tracking-tight">
              {project.title}
            </h3>

            {/* Description */}
            <p className="font-inter text-zinc-400 leading-relaxed line-clamp-3">
              {project.description}
            </p>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 text-xs font-mono text-zinc-300 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Spacer to push buttons to bottom if content is short */}
            <div className="flex-grow" />

            {/* Actions */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-colors"
              >
                <FaGithub className="w-4 h-4" />
                Code
              </a>
              {project.liveLink ? (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-white/10 text-zinc-300 font-semibold text-sm hover:bg-white/5 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              ) : (
                <div
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-white/5 text-zinc-600 font-semibold text-sm cursor-not-allowed opacity-50"
                  title="No live demo available"
                >
                  <ExternalLink className="w-4 h-4" />
                  No Live Demo
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// --- Main Projects Section ---
export const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const resumeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Get card state based on position
  const getCardState = (index: number): "active" | "adjacent" | "hidden" => {
    const position = index - activeIndex;
    if (position === 0) return "active";
    if (Math.abs(position) === 1) return "adjacent";
    return "hidden";
  };

  // Navigation functions
  const goToNext = useCallback(() => {
    setActiveIndex((prev) => Math.min(prev + 1, PROJECTS.length - 1));
    handleUserInteraction();
  }, []);

  const goToPrevious = useCallback(() => {
    setActiveIndex((prev) => Math.max(prev - 1, 0));
    handleUserInteraction();
  }, []);

  const goToIndex = useCallback((index: number) => {
    setActiveIndex(index);
    handleUserInteraction();
  }, []);

  // Handle user interaction - pause and schedule resume
  const handleUserInteraction = () => {
    setIsPaused(true);

    // Clear existing resume timeout
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }

    // Resume after 5 seconds of inactivity
    resumeTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 5000);
  };

  // Auto-play effect
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        // Loop back to start when reaching end
        return prev === PROJECTS.length - 1 ? 0 : prev + 1;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goToPrevious();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNext, goToPrevious]);

  // Cleanup resume timeout on unmount
  useEffect(() => {
    return () => {
      if (resumeTimeoutRef.current) {
        clearTimeout(resumeTimeoutRef.current);
      }
    };
  }, []);

  // Calculate track offset
  const cardWidth = 450;
  const gap = 32;
  const trackOffset = -(activeIndex * (cardWidth + gap));

  return (
    <section
      id="projects"
      className="relative w-full py-32 bg-[#030303] overflow-hidden"
    >
      {/* Fonts */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');

        .font-grotesk {
          font-family: 'Space Grotesk', sans-serif;
        }
        .font-inter {
          font-family: 'Inter', sans-serif;
        }
      `}</style>

      {/* Background Consistency with Hero */}
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#030303_100%)] pointer-events-none" />

      {/* Radial Glow Behind Center Card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/20 blur-[150px] opacity-30 pointer-events-none" />

      <div className="relative z-10">
        {/* Section Header */}
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-indigo-300 mb-4"
          >
            <Layers className="w-4 h-4" /> Portfolio
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-grotesk text-4xl md:text-5xl font-bold text-white tracking-tighter"
          >
            SELECTED{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300">
              WORKS
            </span>
          </motion.h2>

          {/* Hint Text */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-4 text-sm text-zinc-500 font-inter"
          >
            Swipe, use navigation buttons, or arrow keys to explore
          </motion.p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <NavigationButton
            direction="left"
            onClick={goToPrevious}
            disabled={activeIndex === 0}
          />
          <NavigationButton
            direction="right"
            onClick={goToNext}
            disabled={activeIndex === PROJECTS.length - 1}
          />

          {/* Edge Fade Gradients */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#030303] to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#030303] to-transparent z-20 pointer-events-none" />

          {/* Viewport Container */}
          <div
            className="relative overflow-hidden h-[700px]"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Draggable Track */}
            <motion.div
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(e, { offset }) => {
                const swipeThreshold = 50;
                if (offset.x > swipeThreshold && activeIndex > 0) {
                  goToPrevious();
                } else if (offset.x < -swipeThreshold && activeIndex < PROJECTS.length - 1) {
                  goToNext();
                }
              }}
              animate={{ x: trackOffset }}
              transition={{ type: "spring", stiffness: 140, damping: 22 }}
              className="flex gap-8 cursor-grab active:cursor-grabbing items-center h-full"
              style={{
                paddingLeft: "calc(50vw - 225px)", // Center first card
                paddingRight: "calc(50vw - 225px)", // Center last card
              }}
            >
              {PROJECTS.map((project, index) => (
                <CarouselCard
                  key={project.id}
                  project={project}
                  position={getCardState(index)}
                />
              ))}
            </motion.div>
          </div>

          {/* Pagination Dots */}
          <PaginationDots
            total={PROJECTS.length}
            activeIndex={activeIndex}
            onDotClick={goToIndex}
          />
        </div>
      </div>
    </section>
  );
};
