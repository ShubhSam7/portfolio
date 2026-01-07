"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Icosahedron,
  Environment,
  Float,
  Sparkles as ThreeSparkles,
} from "@react-three/drei";
import { User, Download } from "lucide-react";
import * as THREE from "three";

// --- Utility ---
function cn(...inputs: string[]) {
  return inputs.filter(Boolean).join(" ");
}

// --- Magnetic Button Component ---
const MagneticButton = ({
  children,
  className,
  href,
  download,
}: {
  children: React.ReactNode;
  className?: string;
  href: string;
  download?: boolean;
}) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

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
      download={download}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: xSpring, y: ySpring }}
      className={cn("relative transition-transform", className || "")}
    >
      {children}
    </motion.a>
  );
};

// --- 3D Tech Crystal Component ---
function TechCrystal() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Rotate slowly, speed up on hover
      meshRef.current.rotation.x += delta * (hovered ? 0.5 : 0.1);
      meshRef.current.rotation.y += delta * (hovered ? 0.6 : 0.15);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group>
        {/* The glowing crystal */}
        <Icosahedron
          ref={meshRef}
          args={[1.5, 0]}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <meshPhysicalMaterial
            roughness={0.1}
            transmission={0.95}
            thickness={1.5}
            metalness={0.1}
            emissive={hovered ? "#818cf8" : "#4f46e5"}
            emissiveIntensity={hovered ? 0.8 : 0.4}
            color="#ffffff"
          />
        </Icosahedron>

        {/* Inner light source */}
        <pointLight position={[0, 0, 0]} intensity={2} color="#818cf8" />

        {/* Subtle particles around it */}
        <ThreeSparkles
          count={40}
          scale={3}
          size={2}
          speed={0.4}
          opacity={0.5}
          color="#a5b4fc"
        />
      </group>
    </Float>
  );
}

// --- Main About Section ---
export const About = () => {
  return (
    <section
      id="about"
      className="relative w-full py-32 bg-[#030303] overflow-hidden"
    >
      {/* Background Theme Consistency */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#030303_100%)] pointer-events-none" />

      {/* Purple glow bleed */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/20 blur-[120px] opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-20 flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-purple-300 mb-4"
          >
            <User className="w-4 h-4" /> About Me
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="font-grotesk text-4xl md:text-5xl font-bold text-white tracking-tighter"
          >
            THE DEVELOPER{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-300">
              BEHIND THE SCREEN
            </span>
          </motion.h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT COLUMN: The Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="space-y-6 font-inter text-lg text-zinc-400 leading-relaxed">
              <p>
                Hi, I'm{" "}
                <strong className="text-white font-medium">Shubh</strong>. I
                don't just write code; I engineer digital experiences that live
                on the web. My passion lies at the intersection of{" "}
                <span className="text-zinc-200">design precision</span> and{" "}
                <span className="text-zinc-200">backend robustness</span>.
              </p>
              <p>
                I'm a crazy full-stack developer constantly exploring new tech
                horizons. From building highly interactive front-end interfaces
                to architecting scalable Progressive Web Applications (PWAs), I
                love solving complex problems with clean, performant solutions.
              </p>
              <p>
                Whether it's integrating third-party services like AWS and
                Firebase, or diving into the latest 3D web technologies, I'm
                always ready for the next challenge.
              </p>
            </div>

            <div className="pt-4">
              <MagneticButton
                href="/Shubh_Resume.pdf"
                download
                className="group/btn inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white text-black font-semibold text-sm overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Download CV{" "}
                  <Download className="w-4 h-4 transition-transform group-hover/btn:translate-y-1" />
                </span>
                {/* Hover Fill Effect */}
                <div className="absolute inset-0 translate-y-[100%] bg-zinc-300 transition-transform duration-300 group-hover/btn:translate-y-0" />
              </MagneticButton>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: The 3D Tech Crystal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative h-[500px] w-full"
          >
            <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 6], fov: 45 }}>
              <ambientLight intensity={0.5} />
              <pointLight
                position={[10, 10, 10]}
                intensity={1}
                color="#818cf8"
              />
              <TechCrystal />
              <Environment preset="city" />
            </Canvas>

            {/* Enhanced glow effect behind the crystal */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-indigo-600/30 blur-[120px] opacity-60 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
