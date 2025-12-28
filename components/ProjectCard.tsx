"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
  image?: string;
}

export const ProjectCard = ({ title, description, tags, link }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-4xl mx-auto"
    >
      {/* Glow Effect Container */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600/30 via-purple-600/30 to-indigo-600/30 rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

      {/* Main Card */}
      <div className="relative bg-indigo-950/40 backdrop-blur-xl border-2 border-violet-500/50 rounded-3xl p-8 md:p-12 shadow-2xl shadow-violet-500/20 hover:shadow-violet-500/40 transition-all duration-500 group overflow-hidden">

        {/* Grid Background Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] opacity-30" />

        {/* Animated Border Pulse */}
        <div className="absolute inset-0 rounded-3xl border border-violet-400/20 animate-pulse" />

        {/* Content Container */}
        <div className="relative z-10 space-y-6">

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, idx) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="px-3 py-1 text-xs font-medium bg-violet-500/10 border border-violet-400/30 text-violet-200 rounded-full backdrop-blur-sm"
              >
                {tag}
              </motion.span>
            ))}
          </div>

          {/* Project Title */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-white tracking-tight font-grotesk"
          >
            {title}
          </motion.h3>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-zinc-300 leading-relaxed font-inter max-w-2xl"
          >
            {description}
          </motion.p>

          {/* View Project Button */}
          <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-violet-600/20 border border-violet-400/40 text-violet-100 rounded-full hover:bg-violet-600/30 hover:border-violet-400/60 hover:shadow-lg hover:shadow-violet-500/30 transition-all duration-300 group/btn backdrop-blur-sm"
          >
            <span className="font-medium">View Project</span>
            <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
          </motion.a>

          {/* Decorative Corner Accent */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-violet-500/20 to-transparent rounded-bl-full blur-2xl opacity-50" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-500/20 to-transparent rounded-tr-full blur-2xl opacity-50" />
        </div>
      </div>
    </motion.div>
  );
};
