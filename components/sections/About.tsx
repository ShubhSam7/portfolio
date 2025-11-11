"use client";

import { motion } from "framer-motion";
import Script from "next/script";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const techStack = [
  { name: "React", icon: "/tech-icons/react.svg" },
  { name: "Next.js", icon: "/tech-icons/nextjs.svg" },
  { name: "Node.js", icon: "/tech-icons/nodejs-alt.svg" },
  { name: "Tailwind CSS", icon: "/tech-icons/tailwindcss.svg" },
  { name: "AWS", icon: "/tech-icons/aws.svg" },
  { name: "Docker", icon: "/tech-icons/docker.svg" },
  { name: "Supabase", icon: "/tech-icons/supabase.svg" },
  { name: "Vercel", icon: "/tech-icons/vercel.svg" },
  { name: "DigitalOcean", icon: "/tech-icons/digitalocean.svg" },
  { name: "NPM", icon: "/tech-icons/npm.svg" },
];

export const About = () => {
  return (
    <>
      <Script
        src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs"
        strategy="lazyOnload"
        type="module"
      />

      <section
        id="about"
        className="py-12 md:py-8 lg:py-18 bg-[var(--color-light-bg)]"
      >
        <div className="container">
          <div className="flex flex-col md:min-h-screen md:flex-row items-center gap-8 md:gap-12">
            {/* Left side - Lottie Animation */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2"
            >
              <dotlottie-player
                src="/programing_animation.lottie"
                background="transparent"
                speed="1"
                style={{ width: "100%", height: "auto", maxWidth: "500px" }}
                loop
                autoplay
              />
            </motion.div>

            {/* Right side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2"
            >
              <div className="text-5xl font-thin">What I Do</div>
              <div className="text-gray-500 text-xl font-light mt-8">
                CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK
              </div>

              {/* Tech Stack Icons */}
              <div className="mt-12">
                <div className="grid grid-cols-5 gap-6 md:gap-8">
                  {techStack.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="group flex flex-col items-center gap-2"
                    >
                      <div className="relative w-16 h-16 md:w-20 md:h-20 transition-all duration-300">
                        <Image
                          src={tech.icon}
                          alt={tech.name}
                          width={20}
                          height={20}
                          className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                        />
                      </div>
                      <span className="text-xs md:text-sm text-gray-600 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="text-xl font-light text-gray-500 mt-5">
                <div className="mt-4">
                  ⚡ Develop highly interactive Front end / User Interfaces for
                  your web and mobile applications
                </div>
                <div className="mt-4">
                  ⚡ Progressive Web Applications ( PWA ) in normal and SPA
                  Stacks
                </div>
                <div className="mt-4">
                  ⚡ Integration of third party services such as Firebase/ AWS /
                  Digital Ocean
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};
