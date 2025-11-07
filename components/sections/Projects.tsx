"use client";

import React from "react";
import { motion } from "framer-motion";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  imageUrl?: string;
}

export const Projects = () => {
  const projects: Project[] = [
    {
      title: "SurrealDB Illustrations",
      subtitle: "Illustration | Creative direction",
      description:
        "A series of custom illustrations created for the SurrealDB blog. The work focused on aligning with the brand's color palette, maintaining accurate human proportions, and achieving a ...",
      imageUrl: "",
    },
    {
      title: "Roar Lite",
      subtitle: "Character design",
      description: "Our goal was to create a mascot for 1771 Technologies.",
      imageUrl: "",
    },
    {
      title: "Padmission Journey",
      subtitle: "Animation | Explainer video | Creative direction",
      description:
        "We created a presentation video for a company to showcase how their app works. Through close communication with the client and carefully listening to their vision, we realized they wanted ...",
      imageUrl: "",
    },
  ];

  return (
    <section
      id="work"
      className="py-16 md:py-24 lg:py-32 bg-[var(--color-light-bg)]"
    >
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8">
            Featured work
          </h2>
          <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-12">
            <div className="flex-1 w-full">
              {/* Large featured project image placeholder */}
              <div className="w-full aspect-video bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl mb-4 md:mb-6">
                <div className="w-full h-full flex items-center justify-center text-white">
                  <div className="text-center p-4">
                    <div className="text-4xl md:text-5xl lg:text-6xl mb-4">
                      🎨
                    </div>
                    <p className="text-lg md:text-xl font-semibold">
                      Featured Project Image
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-2 md:space-y-3">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">
                  {projects[0].title}
                </h3>
                <p className="text-sm md:text-base text-[var(--color-gray)]">
                  {projects[0].subtitle}
                </p>
                <p className="text-sm md:text-base text-[var(--color-black)] leading-relaxed">
                  {projects[0].description}
                </p>
                <a
                  href="#"
                  className="inline-block text-sm md:text-base text-[var(--color-yellow)] font-semibold hover:underline mt-2"
                >
                  see project
                </a>
              </div>
            </div>

            {/* Side illustration */}
            <div className="hidden xl:block w-full xl:w-96 flex-shrink-0">
              <div className="w-full aspect-square bg-gradient-to-br from-[var(--color-yellow)]/10 to-[var(--color-orange)]/10 rounded-3xl flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="text-5xl md:text-6xl mb-4">🎨</div>
                  <p className="text-base md:text-lg font-semibold text-[var(--color-gray)]">
                    Illustration
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 md:mt-8 text-left lg:text-right">
            <p className="text-base md:text-lg">
              Explore more projects – get a closer look{" "}
              <a
                href="#"
                className="text-[var(--color-yellow)] font-semibold underline"
              >
                at the range of work
              </a>{" "}
              we've done
            </p>
          </div>
        </motion.div>

        {/* Grid of additional projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-12 md:mt-16 lg:mt-24"
        >
          {projects.slice(1).map((project, index) => (
            <div key={index} className="space-y-3 md:space-y-4">
              <div className="w-full aspect-video bg-gradient-to-br from-blue-200 to-green-200 rounded-2xl flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="text-4xl md:text-5xl lg:text-6xl mb-4">
                    🎨
                  </div>
                  <p className="text-lg md:text-xl font-semibold text-gray-700">
                    Project Image
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl md:text-2xl font-bold">
                  {project.title}
                </h3>
                <p className="text-sm md:text-base text-[var(--color-gray)]">
                  {project.subtitle}
                </p>
                <p className="text-sm md:text-base text-[var(--color-black)] leading-relaxed">
                  {project.description}
                </p>
                <a
                  href="#"
                  className="inline-block text-sm md:text-base text-[var(--color-yellow)] font-semibold hover:underline mt-2"
                >
                  see project
                </a>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
