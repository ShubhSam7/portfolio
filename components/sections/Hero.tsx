"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, Twitter, Linkedin, Copy, Check } from "lucide-react";

// Tech Badge Component
const TechBadge = ({ text, delay, x, y }: { text: string; delay: number; x: number; y: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.5, type: "spring" }}
    className="absolute z-20"
    style={{ left: `${x}%`, top: `${y}%` }}
  >
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: delay * 2 }}
      className="px-3 py-1.5 rounded-full bg-zinc-900/80 backdrop-blur-md border border-white/10 text-xs font-mono text-zinc-300 shadow-xl"
    >
      {text}
    </motion.div>
  </motion.div>
);

// Code Card Component
const CodeCard = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group w-full max-w-md mx-auto perspective-1000">
      {/* Glow Behind */}
      <div className="absolute -inset-10 bg-gradient-to-tr from-indigo-500/30 via-purple-500/30 to-blue-500/30 blur-3xl opacity-50 group-hover:opacity-75 transition-opacity duration-700 animate-pulse" />

      {/* Glass Card */}
      <motion.div
        whileHover={{ rotateX: 2, rotateY: 2, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="relative bg-black/60 backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/5"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/5">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
          </div>
          <div className="text-[10px] font-mono text-zinc-500">hero.tsx</div>
          <button onClick={handleCopy} className="text-zinc-500 hover:text-white transition-colors">
            {copied ? <Check size={14} /> : <Copy size={14} />}
          </button>
        </div>

        {/* Content */}
        <div className="p-6 font-mono text-xs sm:text-sm leading-relaxed text-zinc-400">
          <div className="flex">
            <span className="text-zinc-600 select-none w-6">1</span>
            <span className="text-zinc-300">{'<'}</span>
            <span className="text-pink-400">Product</span>
          </div>
          <div className="flex">
            <span className="text-zinc-600 select-none w-6">2</span>
            <span className="pl-4 text-blue-300">architecture</span>
            <span className="text-zinc-300">="</span>
            <span className="text-green-400">scalable</span>
            <span className="text-zinc-300">"</span>
          </div>
          <div className="flex">
            <span className="text-zinc-600 select-none w-6">3</span>
            <span className="pl-4 text-blue-300">realtime</span>
            <span className="text-zinc-300">="</span>
            <span className="text-green-400">websockets</span>
            <span className="text-zinc-300">"</span>
          </div>
          <div className="flex">
            <span className="text-zinc-600 select-none w-6">4</span>
            <span className="pl-4 text-blue-300">intelligence</span>
            <span className="text-zinc-300">="</span>
            <span className="text-green-400">ml</span>
            <span className="text-zinc-300">"</span>
          </div>
          <div className="flex">
            <span className="text-zinc-600 select-none w-6">5</span>
            <span className="text-zinc-300">{'/>'}</span>
            <span className="inline-block w-2 h-4 ml-1 bg-indigo-500 animate-pulse" />
          </div>
        </div>
      </motion.div>

      {/* Orbiting Badges */}
      <TechBadge text="Next.js" delay={0.2} x={-10} y={20} />
      <TechBadge text="TypeScript" delay={0.4} x={90} y={15} />
      <TechBadge text="Tailwind" delay={0.6} x={-5} y={70} />
      <TechBadge text="Framer" delay={0.8} x={85} y={80} />
    </div>
  );
};

export const Hero = () => {
  return (
    <div className="relative min-h-screen w-full bg-[#030303] overflow-hidden selection:bg-indigo-500/30 selection:text-indigo-200">

      {/* Fonts Injection */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');

        .font-grotesk { font-family: 'Space Grotesk', sans-serif; }
        .font-inter { font-family: 'Inter', sans-serif; }
      `}</style>

      {/* Background Layers */}

      {/* Koyeb Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* Radial Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#030303_100%)] pointer-events-none" />

      {/* Top Gradient Bleed */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-indigo-600/20 blur-[120px] opacity-40 pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 lg:pt-0 min-h-screen flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-4">

        {/* Left Column: Typography */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">

          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-indigo-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Building & shipping real systems
          </motion.div>

          {/* Main Heading */}
          <div className="font-grotesk space-y-2">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter text-white"
            >
              ENGINEERING
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl sm:text-7xl lg:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-indigo-200 to-zinc-400"
            >
              DIGITAL SYSTEMS
            </motion.h1>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="font-inter text-zinc-400 text-lg max-w-lg leading-relaxed"
          >
            I design and build scalable web systems — from real-time platforms to ML-powered applications — with a focus on <span className="text-zinc-200 font-medium">performance, clarity, and correctness</span>.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="group relative px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-zinc-200 transition-all flex items-center gap-2"
            >
              View Selected Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-full border border-white/10 text-zinc-300 hover:bg-white/5 transition-all"
            >
              Get in Touch
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="pt-8 flex items-center gap-6 text-zinc-600"
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="w-6 h-6 hover:text-white transition-colors cursor-pointer" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-6 h-6 hover:text-white transition-colors cursor-pointer" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-6 h-6 hover:text-white transition-colors cursor-pointer" />
            </a>
          </motion.div>
        </div>

        {/* Right Column: Code Card Visual */}
        <div className="flex-1 w-full flex items-center justify-center relative">
          <CodeCard />
        </div>
      </div>
    </div>
  );
};
