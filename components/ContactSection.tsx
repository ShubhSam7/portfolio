"use client";

import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";
import { ContactInfoCard } from "./ContactInfoCard";
import { ContactForm } from "./ContactForm";

export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative min-h-screen w-full bg-[#030303] py-20 lg:py-32 overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Radial Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#030303_100%)] pointer-events-none" />

      {/* Top Gradient Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-purple-600/10 blur-[120px] opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-purple-300 backdrop-blur-sm"
          >
            <MessageSquare className="w-4 h-4" />
            Get in Touch
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight font-grotesk mb-4"
          >
            Let's build something
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400">
              together
            </span>
          </motion.h2>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-zinc-400 font-inter max-w-2xl mx-auto"
          >
            Have a project in mind? I'd love to hear about it. Drop me a message
            and let's create something extraordinary.
          </motion.p>
        </div>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Left Column - Contact Info Card */}
          <ContactInfoCard />

          {/* Right Column - Contact Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
