"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Github, ArrowUpRight, Layers, ExternalLink } from "lucide-react";
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
    title: "Nebula Nexus",
    description: "A decentralized computing platform allowing users to rent out idle GPU power. Built with high-performance WebSockets and a sleek, dark-mode UI.",
    tags: ["Next.js", "Rust", "WebSockets", "Tailwind"],
    githubLink: "https://github.com",
    liveLink: "https://example.com",
    gradient: "from-indigo-500 via-purple-500 to-blue-500",
    image: "/hero-image.png",
  },
  {
    id: "2",
    title: "Aura UI Kit",
    description: "An open-source component library focused on glassmorphism and physics-based interactions for React applications.",
    tags: ["React", "Framer Motion", "Storybook", "npm"],
    githubLink: "https://github.com",
    liveLink: "https://example.com",
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    image: "/hero-image.png",
  },
  {
    id: "3",
    title: "Recall AI",
    description: "A 'second brain' application using vector databases to create semantic search across personal notes and documentation.",
    tags: ["TypeScript", "OpenAI API", "Pinecone", "NextAuth"],
    githubLink: "https://github.com",
    liveLink: "https://example.com",
    gradient: "from-orange-500 via-amber-500 to-red-500",
    image: "/hero-image.png",
  },
];

// --- Magnetic Button Component ---
const MagneticButton = ({
  children,
  className,
  href,
}: {
  children: React.ReactNode;
  className?: string;
  href: string;
}) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Spring physics for "liquid" feel
  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    x.set((e.clientX - centerX) * 0.3);
    y.set((e.clientY - centerY) * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: xSpring, y: ySpring }}
      className={cn("relative transition-transform", className || "")}
    >
      {children}
    </motion.a>
  );
};

// --- 3D Tilt Project Card ---
const ProjectCard = ({ project }: { project: Project }) => {
  const ref = useRef<HTMLDivElement>(null);

  // Motion values for tilt rotation
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for rotation
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), {
    damping: 20,
    stiffness: 200,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), {
    damping: 20,
    stiffness: 200,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative h-full rounded-3xl bg-zinc-900/40 border border-white/10 p-2 backdrop-blur-md transition-colors duration-500 hover:border-white/20 hover:bg-zinc-800/60"
    >
      {/* Subtle Glow behind card on hover */}
      <div
        className={cn(
          "absolute inset-0 -z-10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-20 bg-gradient-to-br",
          project.gradient
        )}
      />

      {/* Card Content Container with Depth */}
      <div
        style={{ transform: "translateZ(20px)" }}
        className="relative h-full flex flex-col rounded-2xl overflow-hidden bg-[#0A0A0A]"
      >
        {/* Image / Visual */}
        <div className="relative h-48 overflow-hidden">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover opacity-80"
            />
          ) : (
            <div
              className={cn(
                "absolute inset-0 opacity-80 bg-gradient-to-br",
                project.gradient
              )}
            />
          )}
          {/* Icon overlay */}
          <div className="absolute bottom-4 left-4 p-2 bg-black/50 backdrop-blur-md rounded-lg border border-white/10">
            <Layers className="w-5 h-5 text-white/80" />
          </div>
        </div>

        {/* Text Content */}
        <div className="flex-1 p-6 flex flex-col justify-between space-y-6">
          <div>
            <h3 className="font-grotesk text-2xl font-bold text-white mb-3 tracking-tight">
              {project.title}
            </h3>
            <p className="font-inter text-zinc-400 leading-relaxed line-clamp-3">
              {project.description}
            </p>
          </div>

          <div className="space-y-6">
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-mono text-zinc-300 bg-white/5 border border-white/10 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Magnetic Action Buttons */}
            <div className="flex items-center gap-4 pt-2">
              <MagneticButton
                href={project.githubLink}
                className="group/btn relative flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-medium text-sm overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Code{" "}
                  <Github className="w-4 h-4 transition-transform group-hover/btn:rotate-12" />
                </span>
                {/* Hover Fill Effect */}
                <div className="absolute inset-0 translate-y-[100%] bg-zinc-300 transition-transform duration-300 group-hover/btn:translate-y-0" />
              </MagneticButton>

              <MagneticButton
                href={project.liveLink}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 text-white font-medium text-sm hover:bg-white/5 transition-colors"
              >
                Live Demo <ArrowUpRight className="w-4 h-4" />
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// --- Main Projects Section ---
export const Projects = () => {
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

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-20 flex flex-col items-start">
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
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="font-grotesk text-4xl md:text-5xl font-bold text-white tracking-tighter"
          >
            SELECTED{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300">
              WORKS
            </span>
          </motion.h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                delay: index * 0.2,
                duration: 0.6,
                ease: "easeOut",
              }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
