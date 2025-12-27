"use client";

import { motion } from "framer-motion";

export const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "circOut" }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center"
    >
      <div className="flex items-center gap-6 px-6 py-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl ring-1 ring-white/5">
        <span className="text-sm font-bold tracking-widest text-white/90">SHUBH</span>
        <div className="w-px h-4 bg-white/10" />
        <div className="flex gap-6 text-sm font-medium text-zinc-400">
          {["Work", "About", "Stack", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-white transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};
